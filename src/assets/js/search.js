var searchable
var searchable_type = "items"
var filters = []
var filtered_authors = []
var options = {
    match: "all",
    invert: false
}

$(function() {
    //handle top position of search controls
    $(document).scroll(function() {
        var nav = $('.navbar').height()
        var wrapper_top = $('#searchable-collection').position().top
        var wrapper_height = $('#searchable-collection').height() + 98
        var scroll_position = $(document).scrollTop()
        var panel_bottom = $('.dynamic-sidebar').height() + scroll_position
        var window_width = $(window).width()
        if (window_width >= 992) {
            if (scroll_position + nav > wrapper_top) {
                $('.dynamic-sidebar').css('position', 'fixed')
                if (panel_bottom < wrapper_height) {
                    $('.dynamic-sidebar').css('top', nav + 15)
                } else {
                    $('.dynamic-sidebar').css('top', nav - (panel_bottom - wrapper_height))
                }
            } else {
                $('.dynamic-sidebar').css('position', 'relative')
                $('.dynamic-sidebar').css('top', 0)
            }
        } else {
            $('.dynamic-sidebar').css('position', 'relative')
            $('.dynamic-sidebar').css('top', 0)
        }
    })

    // update search when user types
    $('#search').on('input', function(e){
        searchable.search($('#search').val())
        updateUrl()
    })
    
    // handle user filters
    $('.filter:not(.filter-option, .disabled)').click(function() {
        filter = $(this).text()
        active = $(this).hasClass('active')

        if (active) {
            $(this).removeClass('active')
            filters = filters.filter(function(f){
                return f != filter
            })
        } else {
            $(this).addClass('active')
            filters.push(filter)
        }

        filterMaps()
        updateUrl()
    })
  
    // handle user filter options
    $('.filter-option').click(function() {
        option = $(this).data('option')
        active = $(this).hasClass('active')
        isToggle = $(this).data('toggle')

        if (isToggle) {
            if (active) {
                $(this).removeClass('active')
                $(this).siblings().first().addClass('active')
                toggleValue = $(this).siblings().first().data('toggle')
                options[option] = toggleValue
            } else {
                $(this).addClass('active')
                $(this).siblings().first().removeClass('active')
                toggleValue = $(this).data('toggle')
                options[option] = toggleValue
            }
        } else {
            if (active) {
                $(this).removeClass('active')
                options[option] = false
            } else {
                $(this).addClass('active')
                options[option] = true
            }
        }

        filterMaps()
        updateUrl()
    })
    
    // handle slider
    if ($('#slider').length) {
        $('#slider').slider().change(function() {
            filterMaps()
        })
    }
    
    // update stats counter
    searchable.on('updated', function() {
        countMatching()
        scrollToTop()
    })
    
    // search on clickable item
    $('.click-search').click(function() {
        query = $(this).data('query')
        $('#search').val(query)
        updateSearch()
    })
    
    $('.author-filter-trigger').click(function() {
        var uuid = $(this).data('query')
        if (filtered_authors.includes(uuid) == 0) {
            filtered_authors.push(uuid)
            var username = uuids[uuid]
            $('.search-authors').append([
                $('<span/>', {'class': 'filter active author-filter'}).data('uuid', uuid).text(username)
            ])
            $('.search-authors .filter.disabled').hide()
            filterMaps()
            updateUrl()
        }
    })
    
    $('.search-authors').on('click', '.author-filter', function() {
        var uuid = $(this).data('uuid')
        if (filtered_authors.includes(uuid)) {
            filtered_authors.indexOf(uuid) > -1 ? filtered_authors.splice(filtered_authors.indexOf(uuid), 1) : false
            $(this).remove()
            if (filtered_authors <= 0) {
                $('.search-authors .filter.disabled').show()
            }
            filterMaps()
            updateUrl()
        }
    });
})

function setupSearch(config, type) {
    searchable = config
    searchable_type = type
    if ($('#slider').length) {
        $('#slider').slider({tooltip_split: true})
    }
    countMatching()
    parseUrl()
}

function filterMaps() {
    var range = false
    if ($('#slider').length != 0) {
        range = $('#slider').slider('getValue')
    }
    if (filters.length > 0 || range || filtered_authors.length > 0) {
        searchable.filter(function(item) {
            tags = item.values().tags
            tags = tags.split(',')
            if ($.inArray('Destroy the Core and Monument', tags) != -1) {
                tags.push('Destroy the Core')
                tags.push('Destroy the Monument')
            }
            filter_count = 0
            for (i = 0; i < filters.length; i++) {
                for (j = 0; j < tags.length; j++) {
                    if (tags[j] == filters[i]) {
                        filter_count++
                    }
                }
            }
            item_uuids = item.values().uuids
            item_uuids = item_uuids.split(',')
            uuid_count = 0
            for (i = 0; i < filtered_authors.length; i++) {
                for (j = 0; j <item_uuids.length; j++) {
                    if (item_uuids[j] == filtered_authors[i]) {
                        uuid_count++
                    }
                }
            }
            if ((options.match == "all" && options.invert == false && matchAll(filter_count, uuid_count)) || // match all selected filters
                (options.match == "all" && options.invert == true && !matchAll(filter_count, uuid_count)) ||    // match not all selected filters
                (options.match == "any" && options.invert == false && matchAny(filter_count, uuid_count)) ||                                      // match any selected filters
                (options.match == "any" && options.invert == true && !matchAny(filter_count, uuid_count))) {                                                                                // or if no filters are selected

                if (range) {
                    distances = item.values().distances
                    distances = distances.split(',')
                    matched = false
                    for (i = 0; i < distances.length; i++) {
                        if (range[0] <= distances[i] && range[1] >= distances[i]) {
                            matched = true
                            return true
                        }
                    }
                    if (matched != true) return false
                } else {
                    return true
                }
            } else {
                return false
            }
        })
    } else {
        searchable.filter()
        searchable.update()
    }
}

function matchAll(filter_count, uuid_count) {
    var matched_filters = filters.length > 0 ? filter_count == filters.length : true
    var matched_uuids = filtered_authors.length > 0 ? uuid_count == filtered_authors.length : true
    return matched_filters * matched_uuids
}

function matchAny(filter_count, uuid_count) {
    var matched_filters = filters.length > 0 ? filter_count > 0 : false
    var matched_uuids = filtered_authors.length > 0 ? uuid_count > 0 : false
    return matched_filters + matched_uuids
}

function countMatching() {
    var total = searchable.items.length
    var match = searchable.matchingItems.length
    var output
    if (match > 0) {
        output = "Showing " + match + " matching " + searchable_type + " out of " + total
    } else if (match == 0) {
        output = "No " + searchable_type + " match your query or filter"
    } else {
        output = "There are no " + searchable_type + " to display"
    }
    $('#searchable-count').text(output)
}

function updateUrl() {
    var string = "?"
    var search = $('#search').val()
    var filterArr = encodeURIComponent(filters)
    var authorFilterArr = encodeURIComponent(filtered_authors)
    if (search || filters.length > 0 || filtered_authors.length > 0) {
        if (search) {
            string += "query=" + search
        }
        if (filters.length > 0) {
            if (search) string += "&"
            string += "filters=" + filterArr
        }
        if (filtered_authors.length > 0) {
            if (search || filters.length) string += "&"
            string += "players=" + authorFilterArr
        }
        string += "&match=" + options.match
        string += "&invert=" + options.invert
    }
    window.history.replaceState( {} , document.title, string)
}

function parseUrl() {
    var searchInput = getUrlParam('query') ? getUrlParam('query') : getUrlParam('s')
    $('#search').val(searchInput)
    var urlFilters = getUrlParam('filters') ? getUrlParam('filters') : getUrlParam('f')
    var urlAuthorFilters = getUrlParam('players')
    var match = getUrlParam('match')
    var invert = (getUrlParam('invert') == 'true')
    if (urlFilters || searchInput || match || invert) {
        if (urlFilters) {
            urlFilters = urlFilters.split(',')
            for (i = 0; i < urlFilters.length; i++) {
                $('.filter:contains("' + urlFilters[i] + '")').filter(function() {
                    return $(this).text() == urlFilters[i]
                }).addClass('active')
                filters.push(urlFilters[i])
            }
        }
        if (urlAuthorFilters) {
            urlAuthorFilters = urlAuthorFilters.split(',')
            for (i = 0; i <urlAuthorFilters.length; i++) {
                var uuid = urlAuthorFilters[i]
                if (filtered_authors.includes(uuid) == 0) {
                    filtered_authors.push(uuid)
                    console.log(uuid)
                    console.log(uuids)
                    var username = uuids[uuid]
                    $('.search-authors').append([
                        $('<span/>', {'class': 'filter active author-filter'}).data('uuid', uuid).text(username)
                    ])
                    $('.search-authors .filter.disabled').hide()
                }
            }
        }
        if (match) {
            options.match = match
            $(".filter-option[data-option='match']").removeClass('active')
            $(".filter-option[data-option='match'][data-toggle=" + match + "]").addClass('active')
        }
        if (invert) {
            options.invert = invert
            $(".filter-option[data-option='invert']").addClass('active')
        }
        filterMaps()
        updateSearch()
    }
}

function updateSearch() {
    var search = $('#search').val()
    searchable.search(search)
    updateUrl()
    countMatching()
}

function scrollToTop() {
    $("body, html").stop(true).animate({
        scrollTop: $('#searchable-collection').position().top - 90
    })
}
