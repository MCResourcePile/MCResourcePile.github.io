window.onload = function() {
    var source = document.getElementById("maps-template").innerHTML;
    var template = Handlebars.compile(source);
    var data = {
        // CC licenses that are currently accepted: BY_SA: true, BY_NC_SA: true
        maps: [ {
            map: "A Journey Through History",
            slug: "a_journey_through_history",
            path: "Arcade/Rush/History%20Rush%20Map/",
            authors: [
                {player_name: "chle_", player_uuid: "a23a1d91-7e97-40b4-8f5e-1ab82d8f5ade"},
                {player_name: "Bread__", player_uuid: "9c24ab22-dd46-42c1-9e07-4098ae96076c"},
                {player_name: "_3Each", player_uuid: "5198dc37-537f-4ea5-8ee8-1e0952d4a36b"},
                {player_name: "rockymine", player_uuid: "fe3608b7-d105-4029-8800-34b3147065b6"},
                {player_name: "whiteveR", player_uuid: "7e7da86e-57a8-4b90-b297-4ef05e71dbdb"},
                {player_name: "Oxinous", player_uuid: "829ed9df-e947-40a1-933e-81aa7cb05189"},
                {player_name: "Aisak", player_uuid: "86a53ac5-11db-4435-b672-ea3773c31082"},
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"},
                {player_name: "Kreost", player_uuid: "65722be1-29fd-4e7d-a47d-94ed616ed880"}
            ],
            tags: [ {arcade: true, other: "Rush"} ],
            discussion: "https://oc.tc/forums/topics/57506694c296352cf500002f",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "A SpOOky Sunset",
            slug: "a_spooky_sunset",
            path: "CTF/Halloween/A%20SpOOky%20Sunset/",
            authors: [
                {player_name: "DoomyBoy", player_uuid: "dff980ed-9f69-491e-b79c-30c21350baf2"},
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"}
            ],
            tags: [ {ctf: true, season: "Halloween"} ],
            discussion: "https://oc.tc/forums/topics/56155330c29635f4960002c8",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Agrostid",
            slug: "agrostid",
            path: "CTW/Standard/Agrostid/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "rockymine", player_uuid: "fe3608b7-d105-4029-8800-34b3147065b6"}
            ],
            tags: [ {ctw: true} ],
            discussion: "https://oc.tc/forums/topics/553d3ae5c29635217000800f",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Araxa",
            slug: "araxa",
            path: "CTW/Standard/Araxa",
            authors: [
                {player_name: "JonnyBallgame", player_uuid: "e41edd14-9b0e-4501-a0c5-7fda64d2b2f3"}
            ],
            tags: [ {ctw: true} ],
            discussion: "https://oc.tc/forums/topics/5858427667d5226d63000045",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Bamboo Valley IV",
            slug: "bamboo_valley_iv",
            path: "Other/Tournament/straight-outta-capture/Bamboo%20Valley%20IV/",
            authors: [
                {player_name: "Strangey", player_uuid: "621b2aa8-4e5f-4ed8-bd36-0ae2f8952a06"}
            ],
            tags: [ {cp: true, ranked: true, te: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Bamboo Valley V",
            slug: "bamboo_valley_v",
            path: "Other/Tournament/kung-fu-capture/Bamboo%20Valley%20V/",
            authors: [
                {player_name: "Strangey", player_uuid: "621b2aa8-4e5f-4ed8-bd36-0ae2f8952a06"}
            ],
            tags: [ {ctw: true, te: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "BR: Christmas",
            slug: "block_runner_christmas",
            path: "Arcade/Block%20Runner-Christmas/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"},
                {player_name: "Jexel", player_uuid: "9225421c-3c09-4d97-bb80-f6a77c1f360b"},
                {player_name: "breadandcinnamon", player_uuid: "d3814d5a-3d37-42f2-9db8-916846bb70ad"},
                {player_name: "xCand", player_uuid: "a37e4da3-1c6c-4dc9-b085-63783406a963"},
                {player_name: "_3Each", player_uuid: "5198dc37-537f-4ea5-8ee8-1e0952d4a36b"},
                {player_name: "MyChemicalKitten", player_uuid: "bd12f89a-2137-4068-8f8b-ab46e248d2a7"},
                {player_name: "Principals", player_uuid: "5fe81b40-984e-4e0b-a125-2d5eebf5dd3a"},
                {player_name: "Tywnix_", player_uuid: "5f386e2d-6962-45a3-a9b6-adf1b8075e08"},
                {player_name: "GreatWallOfTrump", player_uuid: "97307a17-8869-4138-b573-5ce4cc050974"}
            ],
            tags: [ {arcade: true, season: "Christmas", other: "Block Runner"} ],
            discussion: "https://oc.tc/forums/topics/5836f851c296350213000002",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "BR: Halloween",
            slug: "block_runner_halloween",
            path: "Arcade/Block%20Runner-Halloween/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"},
                {player_name: "Kaskito", player_uuid: "cbd5c47c-1137-4f02-93dd-626a46bdd779"},
                {player_name: "breadandcinnamon", player_uuid: "d3814d5a-3d37-42f2-9db8-916846bb70ad"},
                {player_name: "Jexel", player_uuid: "9225421c-3c09-4d97-bb80-f6a77c1f360b"},
                {player_name: "_3Each", player_uuid: "5198dc37-537f-4ea5-8ee8-1e0952d4a36b"},
            ],
            tags: [ {arcade: true, season: "Halloween", other: "Block Runner"} ],
            discussion: "https://oc.tc/forums/topics/57f6cc0a5f35b97681000045",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "BR: World of Sports",
            slug: "block_runner_world_of_sports",
            path: "Arcade/Block%20Runner-World%20of%20Sports/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"}
            ],
            tags: [ {arcade: true, other: "Block Runner"} ],
            discussion: "https://oc.tc/forums/topics/571c34a55f35b94475000013",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Brisked",
            slug: "brisked",
            path: "KOTH/Standard/Brisked/",
            authors: [
                {player_name: "mitchiii_", player_uuid: "f690a591-348b-482e-a18d-7779d0c0a28c"}
            ],
            tags: [ {koth: true} ],
            discussion: "https://oc.tc/forums/topics/54dc84b25f35b92ecc0005c1",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Build: Parkour",
            slug: "build_parkour",
            path: "Arcade/Build%20Parkour/",
            authors: [
                {player_name: "JcNumbers", player_uuid: "7475c44e-3066-468f-a4c6-488fe9612097"},
                {player_name: "mitchiii_", player_uuid: "f690a591-348b-482e-a18d-7779d0c0a28c"}
            ],
            tags: [ {arcade: true} ],
            discussion: "https://oc.tc/forums/topics/569bb6c75f35b94a59000003",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Ces",
            slug: "ces",
            path: "DTM/Standard/Ces/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {dtm: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Chocolate Diamonds",
            slug: "chocolate_diamonds",
            path: "CTF/Standard/Chocolate%20Diamonds/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"},
                {player_name: "Kreost", player_uuid: "65722be1-29fd-4e7d-a47d-94ed616ed880"}
            ],
            tags: [ {ctf: true} ],
            discussion: "https://oc.tc/forums/topics/55ecdb4ec296352090007288",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Coral Reef",
            slug: "coral_reef",
            path: "DTM/Standard/Coral%20Reef/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"}
            ],
            tags: [ {dtm: true} ],
            discussion: "https://oc.tc/forums/topics/57af1f73c296354235000012",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Coral Reef II",
            slug: "coral_reef_ii",
            path: "",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"}
            ],
            tags: [ {ctw: true, te: true} ],
            discussion: "https://oc.tc/forums/topics/57fa5a2fc296351b7b00000a",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Clayish",
            slug: "clayish",
            path: "Skywars/Clayish/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {skywars: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Creep Slap: Christmas",
            slug: "creep_slap_christmas",
            path: "Arcade/Creep%20Slap-Christmas/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "AtlasGames", player_uuid: "e79fbdc9-627e-4dac-97a6-81a3046220d7"}
            ],
            tags: [ {arcade: true, season: "Christmas"} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Crenel",
            slug: "crenel",
            path: "TDM/Standard/Crenel/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {tdm: true} ],
            discussion: "https://oc.tc/forums/topics/547e0f2a5f35b9a6b5001614",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Crenel Halloween",
            slug: "crenel_halloween",
            path: "TDM/Halloween/Crenel%20Halloween/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {tdm: true, season: "Halloween"} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Dead Heat",
            slug: "dead_heat",
            path: "Blitz/Classic/Standard/Dead%20Heat/",
            authors: [
                {player_name: "AMo", player_uuid: "a6a99e23-34c4-4957-8974-b78b4da9ce7c"}
            ],
            tags: [ {ctw:true, blitz: true, te:true} ],
            discussion: "https://oc.tc/forums/topics/51222d79ba6087f491000295",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Desert Country",
            slug: "desert_country",
            path: "CTW/Standard/Desert%20Country/",
            authors: [
                {player_name: "OCNs_OMEN", player_uuid: "b5967591-14fc-421f-a5e2-931498e10fb8"},
                {player_name: "nigges60", player_uuid: "7cbf2168-7f49-4fb3-aea8-6df8048a7ade"},
                {player_name: "Sp33dfr3ak", player_uuid: "6d256510-f2ec-4a5b-b678-fc01c5abd7b3"},
                {player_name: "Celestyan", player_uuid: "f066a092-d825-4316-bc9a-5f8ddd21b167"},
                {player_name: "LunaticReturns", player_uuid: "e15f0cac-6ba7-4069-8c43-26aa38866f77"}
            ],
            tags: [ {ctw: true} ],
            discussion: "https://oc.tc/forums/topics/56bb8ba45f35b92828000024",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Drow's Crevice: Blitz",
            slug: "drow_s_crevice_blitz",
            path: "Blitz/Classic/Standard/Drow%27s%20Crevice%20Blitz/",
            authors: [
                {player_name: "Draco_Rogue", player_uuid: "c65e66b3-e932-4b33-b907-fe4916806076"},
                {player_name: "HardstyleRaver2", player_uuid: "8d812ffa-e5f1-4658-bb47-a18b785ccd27"}
            ],
            tags: [ {blitz: true} ],
            discussion: "https://oc.tc/forums/topics/5325408712ca95016d00003c",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Drow's Crevice: UHC",
            slug: "drow_s_crevice_uhc",
            path: "Blitz/Classic/Standard/Drow%27s%20Crevice%20UHC/",
            authors: [
                {player_name: "Draco_Rogue", player_uuid: "c65e66b3-e932-4b33-b907-fe4916806076"},
                {player_name: "HardstyleRaver2", player_uuid: "8d812ffa-e5f1-4658-bb47-a18b785ccd27"}
            ],
            tags: [ {blitz: true} ],
            discussion: "https://oc.tc/forums/topics/5325408712ca95016d00003c",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Drow's Crevice II",
            slug: "drow_s_crevice_ii",
            path: "TDM/Standard/Drow%27s%20Crevice%20II/",
            authors: [
                {player_name: "Draco_Rogue", player_uuid: "c65e66b3-e932-4b33-b907-fe4916806076"},
                {player_name: "HardstyleRaver2", player_uuid: "8d812ffa-e5f1-4658-bb47-a18b785ccd27"}
            ],
            tags: [ {tdm: true} ],
            discussion: "https://oc.tc/forums/topics/5351f58b12ca95a71000c913",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Dynamo",
            slug: "dynamo",
            path: "CTW/Standard/Dynamo/",
            authors: [
                {player_name: "Brottweiler", player_uuid: "6968cbde-c2b7-479c-a8da-f33f109f013b"},
                {player_name: "Dino_Saurus", player_uuid: "053ca59c-92f9-4c80-8c42-9ff175dff97e"}
            ],
            tags: [ {ctw: true} ],
            discussion: "https://oc.tc/forums/topics/52154b1baf7fb0abea000351",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "DynaboOo",
            slug: "dynamo_halloween",
            path: "CTW/Halloween/Dynamo Halloween/",
            authors: [
                {player_name: "Brottweiler", player_uuid: "6968cbde-c2b7-479c-a8da-f33f109f013b"},
                {player_name: "Dino_Saurus", player_uuid: "053ca59c-92f9-4c80-8c42-9ff175dff97e"}
            ],
            tags: [ {ctw: true} ],
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Explosive Vengeance",
            slug: "explosive_vengeance",
            path: "TDM/Standard/Explosive%20Vengeance/",
            authors: [
                {player_name: "HardstyleRaver2", player_uuid: "8d812ffa-e5f1-4658-bb47-a18b785ccd27"},
                {player_name: "DoomyBoy", player_uuid: "dff980ed-9f69-491e-b79c-30c21350baf2"}
            ],
            tags: [ {tdm: true, tnt: true} ],
            discussion: "https://oc.tc/forums/topics/549b9d8f5f35b9cc7d001059",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Festive Village",
            slug: "festive_village",
            path: "Skywars/Festive%20Village/",
            authors: [
                {player_name: "Flashee", player_uuid: "f5d5c301-9ad3-4cb4-9cfd-a6b78e67734a"}
            ],
            tags: [ {skywars: true, season: "Christmas"} ],
            discussion: "https://oc.tc/forums/topics/5847af83c296353c10000004",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Flush",
            slug: "flush",
            path: "Other/Tournament/straight-outta-capture/Flush/",
            authors: [
                {player_name: "Strangey", player_uuid: "621b2aa8-4e5f-4ed8-bd36-0ae2f8952a06"},
                {player_name: "NixaniaXi", player_uuid: "2958ea4c-3501-404e-88cc-12e8632f68cc"},
                {player_name: "Claf", player_uuid: "6bec5c3a-4934-4b19-9aa8-c7c569820f7d"}
            ],
            tags: [ {ctf: true, te: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Foundry",
            slug: "foundry",
            path: "Other/Tournament/straight-outta-capture/Foundry/",
            authors: [
                {player_name: "NixaniaXi", player_uuid: "2958ea4c-3501-404e-88cc-12e8632f68cc"}
            ],
            tags: [ {cp: true, ranked: true, te: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Fracture",
            slug: "fracture",
            path: "KOTH/Standard/Fracture/",
            authors: [
                {player_name: "mitchiii_", player_uuid: "f690a591-348b-482e-a18d-7779d0c0a28c"}
            ],
            tags: [ {koth: true} ],
            discussion: "https://oc.tc/forums/topics/58296360c296351f4f00001d",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Garden of Tholos",
            slug: "garden_of_tholos",
            path: "Other/Tournament/kung-fu-capture/Garden%20of%20Tholos/",
            authors: [
                {player_name: "samthecat43", player_uuid: "7ab24d14-0801-48ba-8fea-147ddf400067"}
            ],
            tags: [ {ctw: true, te: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Gift",
            slug: "gift",
            path: "Skywars/Gift/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {skywars: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Gobi",
            slug: "gobi",
            path: "Other/Tournament/kung-fu-capture/Gobi/",
            authors: [
                {player_name: "DoomyBoy", player_uuid: "dff980ed-9f69-491e-b79c-30c21350baf2"}
            ],
            tags: [ {ctw: true, te: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Grad",
            slug: "grad",
            path: "TDM/Standard/Grad/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {tdm: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Gridlock 2",
            slug: "gridlock_2",
            path: "CTW/Standard/Gridlock%20II/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "MapleMint", player_uuid: "04105de3-ecd4-4879-af0c-929715728070"},
                {player_name: "Arzanex", player_uuid: "62b6d081-8df8-4c09-aa15-71141ca7df76"}
            ],
            tags: [ {ctw: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Ice Pond",
            slug: "icey",
            path: "Blitz/Rage/Christmas/Icey/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "eza1", player_uuid: "b492b6da-65a6-4eda-92d4-1f010af3c265"}
            ],
            tags: [ {blitz: true, rage: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Infection: Grad",
            slug: "infection_grad",
            path: "Arcade/Infection/Grad%20Infection/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {tdm: true, other: "Infection"} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Les",
            slug: "les",
            path: "CTF/Standard/Les/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {ctf: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Leyst",
            slug: "leyst",
            path: "Skywars/Leyst/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {skywars: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Library DTE",
            slug: "library_dte",
            path: "DTM/Standard/Library%20DTE/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"}
            ],
            tags: [ {dtm: true, tnt: true} ],
            discussion: "https://oc.tc/forums/topics/570c3d3d5f35b9035c000007",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Mesa",
            slug: "mesa_5x5",
            path: "FFA/Mesa%205x5/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"}
            ],
            tags: [ {ffa: true, micro: true} ],
            discussion: "https://oc.tc/forums/topics/572684f667d5226d63000055",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Net",
            slug: "net",
            path: "Skywars/Net",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {skywars: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "No Return",
            slug: "no_return",
            path: "Blitz/Classic/Standard/No%20Return/",
            authors: [
                {player_name: "AMo", player_uuid: "a6a99e23-34c4-4957-8974-b78b4da9ce7c"}
            ],
            tags: [ {blitz: true, te: true} ],
            discussion: "https://oc.tc/forums/topics/51801308ba608790cc004cb4",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Pavage",
            slug: "pavage",
            path: "DTM/Standard/Pavage/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "Bamby_", player_uuid: "ec80a24a-4e83-4049-8e1d-77abad67e8f3"},
                {player_name: "lowkeyAlting", player_uuid: "b06fb221-e8a6-4c84-96c8-9ac4a0fd1b51"},
                {player_name: "Arzanex", player_uuid: "62b6d081-8df8-4c09-aa15-71141ca7df76"}
            ],
            tags: [ {dtm: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Pirate Attack",
            slug: "pirate_attack",
            path: "CTF/Standard/Pirate%20Attack/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"}
            ],
            tags: [ {ctf: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Pirate Cove",
            slug: "pirate_cove_5x5",
            path: "FFA/Pirate%20Cove%205x5",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"}
            ],
            tags: [ {ffa: true, micro: true} ],
            discussion: "https://oc.tc/forums/topics/571add0567d52221ab000018",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Pixel Run",
            slug: "pixel_run",
            path: "Arcade/Rush/Pixel%20Run",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"}
            ],
            tags: [ {arcade: true, other: "Rush"} ],
            discussion: "https://oc.tc/forums/topics/5648a15667d522e54600149b",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Pompeii",
            slug: "pompeii_5x5",
            path: "FFA/Pompeii%205x5/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"},
                {player_name: "_3Each", player_uuid: "5198dc37-537f-4ea5-8ee8-1e0952d4a36b"}
            ],
            tags: [ {ffa: true, micro: true} ],
            discussion: "https://oc.tc/forums/topics/570ae6825f35b90e47000001",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Prevagen",
            slug: "prevagen",
            path: "Skywars/Prevagen",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"},
                {player_name: "breadandcinnamon", player_uuid: "d3814d5a-3d37-42f2-9db8-916846bb70ad"}
            ],
            tags: [ {skywars: true} ],
            discussion: "https://oc.tc/forums/topics/585be39067d5223f1a000009",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Retro",
            slug: "retro",
            path: "Blitz/GS/Standard/Retro/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {gs: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Retro: FFA",
            slug: "retro_ffa",
            path: "Blitz/GS/Standard/Retro%20FFA/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {gs: true, ffa: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Retro Christmas",
            slug: "retro_christmas",
            path: "Blitz/GS/Christmas/Retro%20Christmas/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {gs: true, season: "Christmas"} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Retro Halloween",
            slug: "retro_halloween",
            path: "Blitz/GS/Halloween/Retro%20Halloween/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {gs: true, season: "Halloween"} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Retro KOTF",
            slug: "retro_kotf_5x5",
            path: "FFA/5x5%20Retro%20KotF/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"},
                {player_name: "JTr", player_uuid: "105f6a09-f533-412b-93cb-501601763c11"}
            ],
            tags: [ {ctf: true, ffa: true, other: "King of the Flag"} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Rooted Frontier",
            slug: "rooted_frontier",
            path: "Blitz/Classic/Standard/Rooted%20Fontier/",
            authors: [
                {player_name: "mitchiii_", player_uuid: "f690a591-348b-482e-a18d-7779d0c0a28c"}
            ],
            tags: [ {blitz: true} ],
            discussion: "https://oc.tc/forums/topics/58296360c296351f4f00001d",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Rush Wars Tournament 2: Attack of the Defenders",
            slug: "rush_wars_tournament_2_attack_of_the_defenders",
            path: "Arcade/Rush/Rush%20Wars%20Tournament%202%20Attack%20of%20the%20Defenders/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"},
                {player_name: "samthecat43", player_uuid: "7ab24d14-0801-48ba-8fea-147ddf400067"},
                {player_name: "_DISTRACTION_", player_uuid: "f876b863-1ccd-4ae2-acad-8a09e2209e81"},
                {player_name: "breadandcinnamon", player_uuid: "d3814d5a-3d37-42f2-9db8-916846bb70ad"},
                {player_name: "NixaniaXi", player_uuid: "2958ea4c-3501-404e-88cc-12e8632f68cc"},
                {player_name: "Strangey", player_uuid: "621b2aa8-4e5f-4ed8-bd36-0ae2f8952a06"},
                {player_name: "Apollo2OP", player_uuid: "135737b8-7f2b-4f90-aa37-ec395c7c6a9b"},
                {player_name: "Sixxxx", player_uuid: "97a0421a-068c-48d2-a92e-5b6d57c5d803"},
                {player_name: "SheriffSoco", player_uuid: "6e347123-c684-4d7e-996c-44d4924ff172"},
                {player_name: "Ny_", player_uuid: "a43135a4-d7b9-49ab-ac8d-a16bb2513c8d"},
                {player_name: "xCand", player_uuid: "a37e4da3-1c6c-4dc9-b085-63783406a963"},
                {player_name: "Jexel", player_uuid: "9225421c-3c09-4d97-bb80-f6a77c1f360b"},
                {player_name: "Aisak", player_uuid: "86a53ac5-11db-4435-b672-ea3773c31082"},
                {player_name: "Magikarp", player_uuid: "503b5493-d591-4bc6-8346-e92609d94d76"},
            ],
            tags: [ {arcade: true, other: "Rush"} ],
            discussion: "https://oc.tc/forums/topics/57768d7967d5225c580000a9",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Saaneckh",
            slug: "saaneckh",
            path: "FFA/Saaneckh/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {ffa: true} ],
            discussion: "https://oc.tc/forums/topics/55756097c29635a0c8004000",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Safehouse",
            slug: "safehouse",
            path: "CTF/Standard/Safehouse/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {ctf: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "School's Out!",
            slug: "school_s_out_",
            path: "Blitz/GS/Standard/School%27s%20Out/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"},
                {player_name: "68pingy", player_uuid: "14aad06f-6fc0-4b26-be7b-187c3be8eb89"}
            ],
            tags: [ {gs: true} ],
            discussion: "https://oc.tc/forums/topics/55917797c29635db9f002e01",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Siege",
            slug: "siege",
            path: "Other/Tournament/straight-outta-capture/Siege/",
            authors: [
                {player_name: "NixaniaXi", player_uuid: "2958ea4c-3501-404e-88cc-12e8632f68cc"}
            ],
            tags: [ {cp: true, ranked:true, te: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Snowish",
            slug: "snowish",
            path: "Skywars/Snowish/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {skywars: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Snowy Diamonds",
            slug: "snowy_diamonds",
            path: "CTF/Christmas/Snowy%20Diamonds",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"},
                {player_name: "Kreost", player_uuid: "65722be1-29fd-4e7d-a47d-94ed616ed880"}
            ],
            tags: [ {ctf: true, other: "Christmas"} ],
            discussion: "https://oc.tc/forums/topics/565ef78a5f35b91e13001bb6",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Solitude",
            slug: "solitude",
            path: "DTC/Standard/Solitude/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "iLifting", player_uuid: "82d03646-d1a1-4383-a533-9509b130f751"},
                {player_name: "Stirnubuks", player_uuid: "d4d9add2-3890-4150-b565-806385cea8e8"},
                {player_name: "Arzanex", player_uuid: "62b6d081-8df8-4c09-aa15-71141ca7df76"},
                {player_name: "Baggards", player_uuid: "15101f54-cdbc-4cb2-8ed7-51e876824b71"}
            ],
            tags: [ {dtc: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "SolitudeMC",
            slug: "solitudemc",
            path: "DTC/Standard/SolitudeMC/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "iLifting", player_uuid: "82d03646-d1a1-4383-a533-9509b130f751"}
            ],
            tags: [ {dtc: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "SolitudeMC Christmas",
            slug: "solitudemc_christmas",
            path: "DTC/Christmas/SolitudeMC%20Christmas/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "iLifting", player_uuid: "82d03646-d1a1-4383-a533-9509b130f751"}
            ],
            tags: [ {dtc: true, season: "Christmas"} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "SolitudeMC Halloween",
            slug: "solitudemc_halloween",
            path: "DTC/Halloween/SolitudeMC%20Halloween/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "iLifting", player_uuid: "82d03646-d1a1-4383-a533-9509b130f751"}
            ],
            tags: [ {dtc: true, season: "Halloween"} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Sore Teeth",
            slug: "sore_teeth",
            path: "Blitz/Rage/Halloween/Sore%20Teeth/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"},
                {player_name: "Headlight", player_uuid: "0eadbe6d-0a2e-41c6-aec3-e1ba291fb266"}
            ],
            tags: [ {blitz: true, rage: true, season: "Halloween"} ],
            discussion: "https://oc.tc/forums/topics/5601ac7bc2963561c9000abe",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Space Race: 1969",
            slug: "space_race_1969",
            path: "Other/Tournament/straight-outta-capture/Space%20Race%201969/",
            authors: [
                {player_name: "NixaniaXi", player_uuid: "2958ea4c-3501-404e-88cc-12e8632f68cc"}
            ],
            tags: [ {ctf: true, te: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "SpOOky Diamonds",
            slug: "spooky_diamonds",
            path: "CTF/Halloween/SpOOky%20Diamonds/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"},
                {player_name: "Kreost", player_uuid: "65722be1-29fd-4e7d-a47d-94ed616ed880"}
            ],
            tags: [ {ctf: true, season: "Halloween"} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Sweet Tooth",
            slug: "sweet_tooth",
            path: "Blitz/Rage/Standard/SweetTooth/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"},
                {player_name: "Headlight", player_uuid: "0eadbe6d-0a2e-41c6-aec3-e1ba291fb266"}
            ],
            tags: [ {blitz: true, rage: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "The Last Sunset II",
            slug: "the_last_sunset_ii",
            path: "CTF/Standard/The%20Last%20Sunset%20II/",
            authors: [
                {player_name: "DoomyBoy", player_uuid: "dff980ed-9f69-491e-b79c-30c21350baf2"},
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"}
            ],
            tags: [ {ctf: true, season: "Halloween"} ],
            discussion: "https://oc.tc/forums/topics/5582b35a67d5222e450042b5",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "The Snowmelt Mines",
            slug: "the_snowmelt_mines",
            path: "FFA/The%20Snowmelt%20Mines%205x5/",
            authors: [
                {player_name: "JadSaa", player_uuid: "0347bb56-8ade-410e-9f32-31d54eb10598"},
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"}
            ],
            tags: [ {ffa: true, micro: true} ],
            discussion: "https://oc.tc/forums/topics/5765512fc296351d20000097",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Thicket",
            slug: "thicket",
            path: "Other/Tournament/straight-outta-capture/Thicket/",
            authors: [
                {player_name: "NixaniaXi", player_uuid: "2958ea4c-3501-404e-88cc-12e8632f68cc"}
            ],
            tags: [ {ctw: true, te: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Undead Heat",
            slug: "undead_heat",
            path: "Blitz/Classic/Halloween/Undead%20Heat/",
            authors: [
                {player_name: "AMo", player_uuid: "a6a99e23-34c4-4957-8974-b78b4da9ce7c"}
            ],
            tags: [ {ctw:true, blitz: true, season: "Halloween"} ],
            discussion: "https://oc.tc/forums/topics/52498572af7fb0371300249c",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Under the Sea",
            slug: "under_the_sea_5x5",
            path: "FFA/Under%20The%20Sea%205x5/",
            authors: [
                {player_name: "GoldenOre", player_uuid: "38ab65dd-95f9-406f-917c-6accc995421f"}
            ],
            tags: [ {ffa: true, micro: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Versatile",
            slug: "versatile",
            path: "Other/Tournament/straight-outta-capture/Versatile/",
            authors: [
                {player_name: "LArrowHead", player_uuid: "a4266139-34f3-46c5-a730-f8828376a15a"}
            ],
            tags: [ {ctf: true, te: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Village",
            slug: "village",
            path: "Skywars/Village/",
            authors: [
                {player_name: "Flashee", player_uuid: "f5d5c301-9ad3-4cb4-9cfd-a6b78e67734a"}
            ],
            tags: [ {skywars: true} ],
            discussion: "https://oc.tc/forums/topics/5816dc0d5f35b97aab00001b",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Wallop",
            slug: "wallop",
            path: "Other/Tournament/straight-outta-capture/Wallop/",
            authors: [
                {player_name: "Claf", player_uuid: "6bec5c3a-4934-4b19-9aa8-c7c569820f7d"},
                {player_name: "triplezko", player_uuid: "9929437a-9b7d-4d7a-b05d-e22fe93ac042"}
            ],
            tags: [ {ctw: true, te: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Wallop Too",
            slug: "wallop_too",
            path: "Other/Tournament/kung-fu-capture/Wallop%20Too/",
            authors: [
                {player_name: "Claf", player_uuid: "6bec5c3a-4934-4b19-9aa8-c7c569820f7d"},
                {player_name: "triplezko", player_uuid: "9929437a-9b7d-4d7a-b05d-e22fe93ac042"}
            ],
            tags: [ {ctw: true, te: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, ],
    };
    var output = template(data);
    document.getElementById("maps-output").innerHTML = output;
}
