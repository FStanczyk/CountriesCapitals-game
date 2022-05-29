let COUNTRY_NAME = [
    'afghanistan',
    'albania',
    'algeria',
    'andorra',
    'angola',
    'antigua & deps',
    'antigua and deps',
    'argentina',
    'armenia',
    'australia',
    'austria',
    'azerbaijan',
    'bahamas',
    'bahrain',
    'bangladesh',
    'barbados',
    'belarus',
    'belgium',
    'belize',
    'benin',
    'bhutan',
    'bolivia',
    'bosnia herzegovina',
    'botswana',
    'brazil',
    'brunei',
    'bulgaria',
    'burkina',
    'burundi',
    'cambodia',
    'cameroon',
    'canada',
    'cape verde',
    'central african rep',
    'chad',
    'chile',
    'china',
    'colombia',
    'comoros',
    'congo',
    'costa rica',
    'croatia',
    'cuba',
    'cyprus',
    'czech republic',
    'denmark',
    'djibouti',
    'dominica',
    'dominican republic',
    'east timor',
    'ecuador',
    'egypt',
    'el salvador',
    'equatorial guinea',
    'eritrea',
    'estonia',
    'ethiopia',
    'fiji',
    'finland',
    'france',
    'gabon',
    'gambia',
    'georgia',
    'germany',
    'ghana',
    'greece',
    'grenada',
    'guatemala',
    'guinea',
    'guinea-bissau',
    'guyana',
    'haiti',
    'honduras',
    'hungary',
    'iceland',
    'india',
    'indonesia',
    'iran',
    'iraq',
    'ireland',
    'israel',
    'italy',
    'ivory coast',
    'jamaica',
    'japan',
    'jordan',
    'kazakhstan',
    'kenya',
    'kiribati',
    'korea north',
    'korea south',
    'kosovo',
    'kuwait',
    'kyrgyzstan',
    'laos',
    'latvia',
    'lebanon',
    'lesotho',
    'liberia',
    'libya',
    'liechtenstein',
    'lithuania',
    'luxembourg',
    'macedonia',
    'madagascar',
    'malawi',
    'malaysia',
    'maldives',
    'mali',
    'malta',
    'marshall islands',
    'mauritania',
    'mauritius',
    'mexico',
    'micronesia',
    'moldova',
    'monaco',
    'mongolia',
    'montenegro',
    'morocco',
    'mozambique',
    'myanmar',
    'namibia',
    'nauru',
    'nepal',
    'netherlands',
    'new zealand',
    'nicaragua',
    'niger',
    'nigeria',
    'norway',
    'oman',
    'pakistan',
    'palau',
    'panama',
    'papua new guinea',
    'paraguay',
    'peru',
    'philippines',
    'poland',
    'portugal',
    'qatar',
    'romania',
    'russian federation',
    'rwanda',
    'st kitts & nevis',
    'st lucia',
    'saint vincent & the grenadines',
    'samoa',
    'san marino',
    'sao tome & principe',
    'saudi arabia',
    'senegal',
    'serbia',
    'seychelles',
    'sierra leone',
    'singapore',
    'slovakia',
    'solomon islands',
    'somalia',
    'south africa',
    'south sudan',
    'spain',
    'sri lanka',
    'sudan',
    'suriname',
    'swaziland',
    'sweden',
    'switzerland',
    'syria',
    'taiwan',
    'tajikistan',
    'tanzania',
    'thailand',
    'togo',
    'tonga',
    'trinidad & tobago',
    'tunisia',
    'turkey',
    'turkmenistan',
    'tuvalu',
    'uganda',
    'ukraine',
    'united arab emirates',
    'united kingdom',
    'united states',
    'uruguay',
    'uzbekistan',
    'vanuatu',
    'vatican city',
    'venezuela',
    'vietnam',
    'yemen',
    'zambia',
    'zimbabwe'
]
let CAPITALS = ['sukhumi', 'kabul', 'episkopi cantonment', 'tirana', 'algiers', 'pago pago', 'andorra la vella'
    , 'luanda', 'the valley', "st.john's", 'buenos aires', 'yerevan', 'oranjestad', 'georgetown', 'canberra'
    , 'vienna', 'baku', 'nassau', 'manama', 'dhaka', 'bridgetown', 'minsk', 'brussels', 'belmopan', 'porto novo'
    , 'hamilton', 'thimphu', 'sucre', 'la paz', 'sarajevo', 'gaborne', 'brasilia', 'road town', 'bandar seri begawan'
    , 'sofia', 'Ouagadougou', 'bujumbura', 'phnom penh', 'yaounde', 'ottawa', 'praia', 'george town', 'bangui'
    , "n'djamena", 'santiago', 'beijing', 'flying fish cove', 'west island', 'bogota', 'moroni', 'avarua', 'san jose'
    , 'zagreb', 'havana', 'willemstad', 'nicosia', 'prague', 'yamoussoukro', 'kinshasa', 'copenhagen', 'dijibouti'
    , 'roseau', 'santo domingo', 'dili', 'hanga roa', 'quito', 'cairo', 'san salvador', 'malabo', 'asmara'
    , 'tallin', 'addis ababa', 'stanley', 'torshvan', 'palikir', 'suva', 'helsinki', 'paris', 'cayenne', 'papeete'
    , 'libreville', 'banjul', 'tibilisi', 'berlin', 'accra', 'gibraltar', 'athens', 'nuuk', "st. george's", 'hagatna'
    , 'guatemala city', 'st. ptere port', 'conakry', 'bissau', 'georgetown', 'port-au-prince', 'port au prince'
    , 'tegucigalpa', 'budapest', 'reykjavik', 'new delhi', 'jakarta', 'tehran', 'baghdad', 'dublin', 'douglas'
    , 'jerusalem', 'rome', 'kingston', 'tokyo', 'st.helier', 'amman', 'astana', 'nairobi', 'tarawa', 'pristina'
    , 'kuwait city', 'bishkek', 'vientiane', 'tiga', 'beirut', 'maseru', 'monrovia', 'tripoli', 'vaduz', 'vilnius'
    , 'luxembourg', 'skopje', 'antananarivo', 'lilongwe', 'kuala lumpur', 'male', 'bamako', 'valletta', 'majuro',
    'nouakchott', 'port louis', 'mexico city', 'chisinau', 'monaco', 'ulaanbaatar', 'podgorica', 'plymouth', 'rabat'
    , 'maputo', 'naypyidaw', 'stepanakert', 'windhoek', 'yaren', 'kathmandu', 'amsterdam', 'noumea', 'wellington'
    , 'managua', 'niamey', 'abuja', 'alofi', 'kingston', 'pyongyang', 'nicosia', 'belfast', 'saipan', 'oslo', 'muscat'
    , 'islamabad', 'ngerulmud', 'jerusalem', 'panama city', 'port moresby', 'asuncion', 'lima', 'manila', 'adamstown'
    , 'warsaw', 'lisbon', 'san juan', 'doha', 'taipei', 'brazzaville', 'bucharest', 'moscow', 'kigali', 'gustavia'
    , 'jamestown', 'basseterre', 'castries', 'marigot', 'st. pierre', 'st pierre', 'saint pierre', 'kingstown'
    , 'apia', 'san marino', 'riyadh', 'edinburgh', 'dakra', 'belgrade', 'victoria', 'freetown', 'singapore'
    , 'philipsburg', 'bratislava', 'ljubljana', 'honiara', 'mogadishu', 'hargeisa', 'pretoria', 'grytviken'
    , 'seoul', 'tskhivali', 'juba', 'madrid', '	sri jayawardenapura kotte', 'khartoum', 'paramaibo', 'mbabane'
    , 'stockholm', 'bern', 'damascus', 'sao tome', 'dushanbe', 'dodoma', 'bangkok', 'lome', 'nakualofa', "naku'alofa"
    , 'tiraspol', 'port od spain', 'tunis', 'edinburgh of the seven seas', 'ankara', 'ashgabat', 'cockburn town'
    , 'funafuti', 'kampala', 'kiev', 'abu dhabi', 'london', 'washington', 'washington d.c', 'washington, d.c'
    , 'charlotte amalie', 'montevideo', 'tashkent', 'port vila', 'vatican city', 'caracas', 'hanoi', 'cardiff'
    , 'mata-utu', 'el aauin', 'sanaa', 'lusaka', 'harare']

let CAR_BRANDS = [
    "polonez",
    "abarth",
    "alfa romeo",
    "aston martin",
    "audi",
    "bentley",
    "bmw",
    "bugatti",
    "cadillac",
    "chevrolet",
    "chrysler",
    "citroën",
    "dacia",
    "daewoo",
    "daihatsu",
    "dodge",
    "donkervoort",
    "ds",
    "ferrari",
    "fiat",
    "fisker",
    "ford",
    "honda",
    "hummer",
    "hyundai",
    "infiniti",
    "iveco",
    "jaguar",
    "jeep",
    "kia",
    "ktm",
    "lada",
    "lamborghini",
    "lancia",
    "land rover",
    "landwind",
    "lexus",
    "lotus",
    "maserati",
    "maybach",
    "mazda",
    "mclaren",
    "mercedes-benz",
    "mg",
    "mini",
    "mitsubishi",
    "morgan",
    "nissan",
    "opel",
    "peugeot",
    "porsche",
    "renault",
    "rolls-royce",
    "rover",
    "saab",
    "seat",
    "skoda",
    "smart",
    "ssangyong",
    "subaru",
    "suzuki",
    "tesla",
    "toyota",
    "volkswagen",
    "volvo",
    "porsche",
    "isuzu"
]
let SEAS = ['adriatic sea', 'aegean sea', 'aland sea', 'aki-nada', 'alboran sea', 'amakusa-nada',
    'amundsen sea', 'andaman sea', 'arabian sea', 'arafura sea', 'aral sea', 'arctic ocean', 'atlantic ocean',
    "baie d'hudson", 'bakor sea', 'balearic sea', 'bali sea', 'baltic sea', 'banda sea', 'barents sea',
    'bay of bengal', 'beaufort sea', 'bellingshausen sea', 'bering sea', 'bingo-nada', 'bismarck sea',
    'black sea', 'bohol sea', 'bulkhead rip', 'camotes sea', 'cape rip', 'caribbean sea', 'caspian sea',
    'celebes sea', 'celtic sea', 'ceram sea', 'chosondong-hae', 'chukchi sea', 'clement rapids', 'coral sea',
    'daryā-ye khazar', 'daryā-ye khezer', 'daryā-ye māzandarān', 'daryā-ye ‘ommān', 'davis sea', 'dent rapids',
    'dicks rip', "dumont d'urville", 'east china sea', 'east siberian sea', 'eastern chops',
    'eastern mediterranean', 'flores sea', 'galloway rapids', 'genkai-nada', 'greene point rapids',
    'greenland sea', 'gulf of mexico', 'halmahera sea', 'harima-nada', 'hibiki-nada', 'hiuchi-nada',
    'hyŏnji-hae', 'hyūga-nada', 'indian river', 'inland sea', 'ionian sea', 'irish sea', 'itsuki-nada',
    'iyo-nada', 'java sea', 'jiuzhou yang', 'kalupag sea', 'kara sea', 'kashima-nada', 'khalkidhikón pélagos',
    'kong håkon vii hav', 'koro sea', 'kosmonavtov, more', 'kumano-nada', 'labrador sea', 'laccadive sea',
    'landmeen', 'laptev sea', 'laut lepar', 'lazareva, more', 'leading tickles', 'ligurian sea', 'lincoln sea',
    'long rip', 'luzon sea', 'maotou yang', 'mawson sea', 'mckinley sea', 'mediterranean sea', 'meiyu yang',
    "mer d' emeraude", 'mer de lincoln', 'mer du labrador', 'mindanao sea', 'mizushima-nada', 'molucca sea',
    'moore rip', 'myrtoon pelagos', 'nakwakto rapids', 'north sea', 'northwest rip', 'northwest straits',
    'norwegian sea', 'outer bald rip', "p'eng-hu wan", 'pacific ocean', 'pechorskoye more', 'philippine sea',
    'pollock rip', 'prince gustaf adolf sea', 'putuo yang', 'qizhou yang', 'queen victoria sea', 'quoddy river',
    'red sea', 'riser-larsena, more', 'ross sea', 'saaristomeri', 'salish sea', 'samar sea', 'sargasso sea',
    'savu sea', 'scotch corner', 'scotia sea', 'sea of azov', 'sea of crete', 'sea of japan', 'sea of marmara',
    'sea of okhotsk', 'sea of the hebrides', 'shag harbour rip', 'shantarskoye more', 'short rip', 'sibuyan sea',
    'sodruzhestva, more', 'solomon sea', 'somova, more', 'south china sea', 'south pacific ocean', 'sulu sea',
    'suo-nada', 'tail of the rip', 'tasman sea', 'thálassa cheimarras', 'thale phuket', 'the hospital',
    'the overfalls', 'the rip', 'the swirlers', 'the tittle', 'thimble tickles', 'thrakikon pelagos',
    'timor sea', 'tosa-wan', 'tyrrhenian sea', 'uwa-kai', 'virsko more', 'visayan sea', 'wandel hav', 'weddell sea',
    'western mediterranean', 'whirlpool rapids', 'white sea', 'wilsons rip', 'yellow sea']
let ANIMALS = ['aardvark', 'alligator', 'alpaca', 'anaconda', 'ant', 'anteater', 'antelope', 'aphid', 'armadillo',
    'asp', 'ass', 'baboon', 'badger', 'bald eagle', '', 'barracuda', 'bass', 'basset hound', 'bat', 'bearded dragon',
    'beaver', 'bedbug', 'bee', 'bee-eater', 'bird', 'bison', '', 'black panther', 'black widow spider', 'blue jay',
    'blue whale', 'bobcat', 'buffalo', 'butterfly', 'buzzard', 'camel', 'canada lynx', 'carp', 'cat', 'caterpillar',
    'catfish', 'cheetah', 'chicken', 'chimpanzee', 'chipmunk', '', 'cobra', 'cod', 'condor', 'cougar', 'cow', 'coyote',
    'crab', 'crane fly', 'cricket', 'crocodile', 'crow', 'cuckoo', 'deer', 'dinosaur', 'dog', 'dolphin', 'donkey',
    'dove', 'dragonfly', 'duck', 'eagle', 'eel', 'elephant', 'emu', 'falcon', 'ferret', 'finch', 'fish', 'flamingo',
    'flea', 'fly', 'fox', 'frog', 'goat', 'goose', 'gopher', 'gorilla', 'guinea pig', 'hamster', 'hare', 'hawk',
    'hippopotamus', 'horse', 'hummingbird', 'humpback whale', 'husky', 'iguana', 'impala', 'kangaroo', 'lemur',
    'leopard', 'lion', 'lizard', 'llama', 'lobster', 'margay', 'monitor lizard', 'monkey', 'moose', 'mosquito',
    'moth', 'mountain zebra', 'mouse', 'mule', 'octopus', 'orca', 'ostrich', 'otter', 'owl', 'ox', 'oyster', 'panda',
    'parrot', 'peacock', 'pelican', 'penguin', 'perch', 'pheasant', 'pig', 'pigeon', 'polar bear', 'porcupine',
    'quagga', 'rabbit', 'raccoon', 'rat', 'rattlesnake', 'red wolf', 'rooster', 'seal', 'sheep', 'skunk', 'sloth',
    'snail', 'snake', 'spider', 'tiger', 'whale', 'wolf', 'wombat', 'zebra', 'turtle', 'toad']

let SPORTS = ['archer', 'ping pong', 'archery', 'arena', 'arrow', 'athlete', 'axel', 'badminton', 'ball', 'base', 'bat', 'batter', 'bicycle'
    , 'bike', 'bocce', 'bow', 'box', 'canoe', 'catch', 'cleats', 'club', 'coach', 'compete', 'crew', 'cricket', 'cycle'
    , 'cyclist', 'dart', 'defense', 'diamond', 'dive', 'diver', 'exercise', 'fencing', 'field', 'fitness', 'frisbee'
    , 'game', 'gear', 'goal', 'goalie', 'golf', 'golfer', 'guard', 'gym', 'gymnast', 'helmet', 'hockey', 'home', 'hoop'
    , 'hoops', 'ice', 'infield', 'inning', 'javelin', 'jog', 'judo', 'jump', 'jumper', 'karate', 'kayak', 'kite'
    , 'lacrosse', 'league', 'lose', 'loser', 'luge', 'major', 'mallet', 'mat', 'medal', 'mitt', 'move', 'net', 'offense'
    , 'olympics', 'out', 'paddle', 'pitch', 'play', 'player', 'pole', 'polo', 'pool', 'puck', 'quarter', 'quiver', 'race'
    , 'racer', 'referee', 'relay', 'ride', 'rink', 'row', 'rower', 'sail', 'score', 'scuba', 'skate', 'ski', 'skier'
    , 'slalom', 'sled', 'sledder', 'snowboard', 'soccer', 'sport', 'squash', 'stadium', 'stick', 'surfer', 'swim'
    , 'swimmer', 'tag', 'target', 'team', 'tee', 'tennis', 'throw', 'tie', 'triathlon', 'umpire', 'vault', 'volley'
    , 'walk', 'weight', 'win', 'winner', 'winning', 'wrestler', 'football', 'curling', 'snooker', 'motor racing'
    , 'chess', 'biathlon', 'ski jumping', 'handball', 'basketball', 'mma', 'jiu jitsu', 'karate', 'volleyball', 'sprint'
    , 'shot put', 'hurdles', 'long jump', 'high jump', 'javelin throw', 'marathon']
let MINECRAFT_BLOCKS = ['air', 'stone', 'granite', 'polished_granite', 'diorite', 'polished_diorite', 'andesite',
    'polished_andesite', 'grass_block', 'dirt', 'coarse_dirt', 'podzol', 'cobblestone', 'oak_planks',
    'spruce_planks', 'birch_planks', 'jungle_planks', 'acacia_planks', 'dark_oak_planks', 'oak_sapling',
    'spruce_sapling', 'birch_sapling', 'jungle_sapling', 'acacia_sapling', 'dark_oak_sapling', 'bedrock',
    'water', 'lava', 'sand', 'red_sand', 'gravel', 'gold_ore', 'deepslate_gold_ore', 'iron_ore', 'deepslate_iron_ore'
    , 'coal_ore', 'deepslate_coal_ore', 'nether_gold_ore', 'oak_log', 'spruce_log', 'birch_log', 'jungle_log'
    , 'acacia_log', 'dark_oak_log', 'stripped_spruce_log', 'stripped_birch_log', 'stripped_jungle_log'
    , 'stripped_acacia_log', 'stripped_dark_oak_log', 'stripped_oak_log', 'oak_wood', 'spruce_wood'
    , 'birch_wood', 'jungle_wood', 'acacia_wood', 'dark_oak_wood', 'stripped_oak_wood', 'stripped_spruce_wood'
    , 'stripped_birch_wood', 'stripped_jungle_wood', 'stripped_acacia_wood', 'stripped_dark_oak_wood'
    , 'oak_leaves', 'spruce_leaves', 'birch_leaves', 'jungle_leaves', 'acacia_leaves', 'dark_oak_leaves'
    , 'azalea_leaves', 'flowering_azalea_leaves', 'sponge', 'wet_sponge', 'glass', 'lapis_ore', 'deepslate_lapis_ore'
    , 'lapis_block', 'dispenser', 'sandstone', 'chiseled_sandstone', 'cut_sandstone', 'note_block', 'white_bed'
    , 'orange_bed', 'magenta_bed', 'light_blue_bed', 'yellow_bed', 'lime_bed', 'pink_bed', 'gray_bed'
    , 'light_gray_bed', 'cyan_bed', 'purple_bed', 'blue_bed', 'brown_bed', 'green_bed', 'red_bed', 'black_bed'
    , 'powered_rail', 'detector_rail', 'sticky_piston', 'cobweb', 'grass', 'fern', 'dead_bush', 'seagrass'
    , 'tall_seagrass', 'piston', 'piston_head', 'white_wool', 'orange_wool', 'magenta_wool', 'light_blue_wool'
    , 'yellow_wool', 'lime_wool', 'pink_wool', 'gray_wool', 'light_gray_wool', 'cyan_wool', 'purple_wool'
    , 'blue_wool', 'brown_wool', 'green_wool', 'red_wool', 'black_wool', 'moving_piston', 'dandelion', 'poppy'
    , 'blue_orchid', 'allium', 'azure_bluet', 'red_tulip', 'orange_tulip', 'white_tulip', 'pink_tulip'
    , 'oxeye_daisy', 'cornflower', 'wither_rose', 'lily_of_the_valley', 'brown_mushroom', 'red_mushroom'
    , 'gold_block', 'iron_block', 'bricks', 'tnt', 'bookshelf', 'mossy_cobblestone', 'obsidian', 'torch'
    , 'wall_torch', 'fire', 'soul_fire', 'spawner', 'oak_stairs', 'chest', 'redstone_wire', 'diamond_ore'
    , 'deepslate_diamond_ore', 'diamond_block', 'crafting_table', 'wheat', 'farmland', 'furnace', 'oak_sign'
    , 'spruce_sign', 'birch_sign', 'acacia_sign', 'jungle_sign', 'dark_oak_sign', 'oak_door', 'ladder', 'rail'
    , 'cobblestone_stairs', 'oak_wall_sign', 'spruce_wall_sign', 'birch_wall_sign', 'acacia_wall_sign'
    , 'jungle_wall_sign', 'dark_oak_wall_sign', 'lever', 'stone_pressure_plate', 'iron_door', 'oak_pressure_plate'
    , 'spruce_pressure_plate', 'birch_pressure_plate', 'jungle_pressure_plate', 'acacia_pressure_plate'
    , 'dark_oak_pressure_plate', 'redstone_ore', 'deepslate_redstone_ore', 'redstone_torch'
    , 'redstone_wall_torch', 'stone_button', 'snow', 'ice', 'snow_block', 'cactus', 'clay', 'sugar_cane', 'jukebox'
    , 'oak_fence', 'pumpkin', 'netherrack', 'soul_sand', 'soul_soil', 'basalt', 'polished_basalt', 'soul_torch',
    'soul_wall_torch', 'glowstone', 'nether_portal', 'carved_pumpkin', 'jack_o_lantern', 'cake', 'repeater',
    'white_stained_glass', 'orange_stained_glass', 'magenta_stained_glass', 'light_blue_stained_glass',
    'yellow_stained_glass', 'lime_stained_glass', 'pink_stained_glass', 'gray_stained_glass'
    , 'light_gray_stained_glass', 'cyan_stained_glass', 'purple_stained_glass', 'blue_stained_glass'
    , 'brown_stained_glass', 'green_stained_glass', 'red_stained_glass', 'black_stained_glass'
    , 'oak_trapdoor', 'spruce_trapdoor', 'birch_trapdoor', 'jungle_trapdoor', 'acacia_trapdoor'
    , 'dark_oak_trapdoor', 'stone_bricks', 'mossy_stone_bricks', 'cracked_stone_bricks', 'chiseled_stone_bricks'
    , 'infested_stone', 'infested_cobblestone', 'infested_stone_bricks', 'infested_mossy_stone_bricks'
    , 'infested_cracked_stone_bricks', 'infested_chiseled_stone_bricks', 'brown_mushroom_block'
    , 'red_mushroom_block', 'mushroom_stem', 'iron_bars', 'chain', 'glass_pane', 'melon', 'attached_pumpkin_stem'
    , 'attached_melon_stem', 'pumpkin_stem', 'melon_stem', 'vine', 'glow_lichen', 'oak_fence_gate'
    , 'brick_stairs', 'stone_brick_stairs', 'mycelium', 'lily_pad', 'nether_bricks', 'nether_brick_fence'
    , 'nether_brick_stairs', 'nether_wart', 'enchanting_table', 'brewing_stand', 'cauldron', 'water_cauldron'
    , 'lava_cauldron', 'powder_snow_cauldron', 'end_portal', 'end_portal_frame', 'end_stone', 'dragon_egg'
    , 'redstone_lamp', 'cocoa', 'sandstone_stairs', 'emerald_ore', 'deepslate_emerald_ore', 'ender_chest'
    , 'tripwire_hook', 'tripwire', 'emerald_block', 'spruce_stairs', 'birch_stairs', 'jungle_stairs'
    , 'command_block', 'beacon', 'cobblestone_wall', 'mossy_cobblestone_wall', 'flower_pot'
    , 'potted_oak_sapling', 'potted_spruce_sapling', 'potted_birch_sapling', 'potted_jungle_sapling'
    , 'potted_acacia_sapling', 'potted_dark_oak_sapling', 'potted_fern', 'potted_dandelion', 'potted_poppy'
    , 'potted_blue_orchid', 'potted_allium', 'potted_azure_bluet', 'potted_red_tulip', 'potted_orange_tulip'
    , 'potted_white_tulip', 'potted_pink_tulip', 'potted_oxeye_daisy', 'potted_cornflower'
    , 'potted_lily_of_the_valley', 'potted_wither_rose', 'potted_red_mushroom', 'potted_brown_mushroom'
    , 'potted_dead_bush', 'potted_cactus', 'carrots', 'potatoes', 'oak_button', 'spruce_button', 'birch_button'
    , 'jungle_button', 'acacia_button', 'dark_oak_button', 'skeleton_skull', 'skeleton_wall_skull'
    , 'wither_skeleton_skull', 'wither_skeleton_wall_skull', 'zombie_head', 'zombie_wall_head', 'player_head'
    , 'player_wall_head', 'creeper_head', 'creeper_wall_head', 'dragon_head', 'dragon_wall_head', 'anvil'
    , 'chipped_anvil', 'damaged_anvil', 'trapped_chest', 'light_weighted_pressure_plate'
    , 'heavy_weighted_pressure_plate', 'comparator', 'daylight_detector', 'redstone_block', 'nether_quartz_ore'
    , 'hopper', 'quartz_block', 'chiseled_quartz_block', 'quartz_pillar', 'quartz_stairs', 'activator_rail'
    , 'dropper', 'white_terracotta', 'orange_terracotta', 'magenta_terracotta', 'light_blue_terracotta'
    , 'yellow_terracotta', 'lime_terracotta', 'pink_terracotta', 'gray_terracotta', 'light_gray_terracotta'
    , 'cyan_terracotta', 'purple_terracotta', 'blue_terracotta', 'brown_terracotta', 'green_terracotta'
    , 'red_terracotta', 'black_terracotta', 'white_stained_glass_pane', 'orange_stained_glass_pane'
    , 'magenta_stained_glass_pane', 'light_blue_stained_glass_pane', 'yellow_stained_glass_pane'
    , 'lime_stained_glass_pane', 'pink_stained_glass_pane', 'gray_stained_glass_pane'
    , 'light_gray_stained_glass_pane', 'cyan_stained_glass_pane', 'purple_stained_glass_pane'
    , 'blue_stained_glass_pane', 'brown_stained_glass_pane', 'green_stained_glass_pane', 'red_stained_glass_pane'
    , 'black_stained_glass_pane', 'acacia_stairs', 'dark_oak_stairs', 'slime_block', 'barrier'
    , 'light', 'iron_trapdoor', 'prismarine', 'prismarine_bricks', 'dark_prismarine', 'prismarine_stairs'
    , 'prismarine_brick_stairs', 'dark_prismarine_stairs', 'prismarine_slab', 'prismarine_brick_slab'
    , 'dark_prismarine_slab', 'sea_lantern', 'hay_block', 'white_carpet', 'orange_carpet', 'magenta_carpet'
    , 'light_blue_carpet', 'yellow_carpet', 'lime_carpet', 'pink_carpet', 'gray_carpet', 'light_gray_carpet'
    , 'cyan_carpet', 'purple_carpet', 'blue_carpet', 'brown_carpet', 'green_carpet', 'red_carpet', 'black_carpet'
    , 'terracotta', 'coal_block', 'packed_ice', 'sunflower', 'lilac', 'rose_bush', 'peony', 'tall_grass'
    , 'large_fern', 'white_banner', 'orange_banner', 'magenta_banner', 'light_blue_banner', 'yellow_banner'
    , 'lime_banner', 'pink_banner', 'gray_banner', 'light_gray_banner', 'cyan_banner', 'purple_banner'
    , 'blue_banner', 'brown_banner', 'green_banner', 'red_banner', 'black_banner', 'white_wall_banner'
    , 'orange_wall_banner', 'magenta_wall_banner', 'light_blue_wall_banner', 'yellow_wall_banner'
    , 'lime_wall_banner', 'pink_wall_banner', 'gray_wall_banner', 'light_gray_wall_banner', 'cyan_wall_banner'
    , 'purple_wall_banner', 'blue_wall_banner', 'brown_wall_banner', 'green_wall_banner'
    , 'red_wall_banner', 'black_wall_banner', 'red_sandstone', 'chiseled_red_sandstone'
    , 'cut_red_sandstone', 'red_sandstone_stairs', 'oak_slab', 'spruce_slab', 'birch_slab', 'jungle_slab'
    , 'acacia_slab', 'dark_oak_slab', 'stone_slab', 'smooth_stone_slab', 'sandstone_slab', 'cut_sandstone_slab'
    , 'petrified_oak_slab', 'cobblestone_slab', 'brick_slab', 'stone_brick_slab', 'nether_brick_slab'
    , 'quartz_slab', 'red_sandstone_slab', 'cut_red_sandstone_slab', 'purpur_slab', 'smooth_stone'
    , 'smooth_sandstone', 'smooth_quartz', 'smooth_red_sandstone', 'spruce_fence_gate', 'birch_fence_gate'
    , 'jungle_fence_gate', 'acacia_fence_gate', 'dark_oak_fence_gate', 'spruce_fence', 'birch_fence'
    , 'jungle_fence', 'acacia_fence', 'dark_oak_fence', 'spruce_door', 'birch_door', 'jungle_door'
    , 'acacia_door', 'dark_oak_door', 'end_rod', 'chorus_plant', 'chorus_flower', 'purpur_block'
    , 'purpur_pillar', 'purpur_stairs', 'end_stone_bricks', 'beetroots', 'dirt_path', 'end_gateway'
    , 'repeating_command_block', 'chain_command_block', 'frosted_ice', 'magma_block', 'nether_wart_block'
    , 'red_nether_bricks', 'bone_block', 'structure_void', 'observer', 'shulker_box', 'white_shulker_box'
    , 'orange_shulker_box', 'magenta_shulker_box', 'light_blue_shulker_box', 'yellow_shulker_box'
    , 'lime_shulker_box', 'pink_shulker_box', 'gray_shulker_box', 'light_gray_shulker_box', 'cyan_shulker_box'
    , 'purple_shulker_box', 'blue_shulker_box', 'brown_shulker_box', 'green_shulker_box', 'red_shulker_box'
    , 'black_shulker_box', 'white_glazed_terracotta', 'orange_glazed_terracotta', 'magenta_glazed_terracotta'
    , 'light_blue_glazed_terracotta', 'yellow_glazed_terracotta', 'lime_glazed_terracotta'
    , 'pink_glazed_terracotta', 'gray_glazed_terracotta', 'light_gray_glazed_terracotta', 'cyan_glazed_terracotta'
    , 'purple_glazed_terracotta', 'blue_glazed_terracotta', 'brown_glazed_terracotta'
    , 'green_glazed_terracotta', 'red_glazed_terracotta', 'black_glazed_terracotta', 'white_concrete'
    , 'orange_concrete', 'magenta_concrete', 'light_blue_concrete', 'yellow_concrete', 'lime_concrete'
    , 'pink_concrete', 'gray_concrete', 'light_gray_concrete', 'cyan_concrete', 'purple_concrete'
    , 'blue_concrete', 'brown_concrete', 'green_concrete', 'red_concrete', 'black_concrete'
    , 'white_concrete_powder', 'orange_concrete_powder', 'magenta_concrete_powder', 'light_blue_concrete_powder'
    , 'yellow_concrete_powder', 'lime_concrete_powder', 'pink_concrete_powder', 'gray_concrete_powder'
    , 'light_gray_concrete_powder', 'cyan_concrete_powder', 'purple_concrete_powder', 'blue_concrete_powder'
    , 'brown_concrete_powder', 'green_concrete_powder', 'red_concrete_powder', 'black_concrete_powder', 'kelp'
    , 'kelp_plant', 'dried_kelp_block', 'turtle_egg', 'dead_tube_coral_block', 'dead_brain_coral_block'
    , 'dead_bubble_coral_block', 'dead_fire_coral_block', 'dead_horn_coral_block', 'tube_coral_block'
    , 'brain_coral_block', 'bubble_coral_block', 'fire_coral_block', 'horn_coral_block', 'dead_tube_coral'
    , 'dead_brain_coral', 'dead_bubble_coral', 'dead_fire_coral', 'dead_horn_coral', 'tube_coral'
    , 'brain_coral', 'bubble_coral', 'fire_coral', 'horn_coral', 'dead_tube_coral_fan', 'dead_brain_coral_fan'
    , 'dead_bubble_coral_fan', 'dead_fire_coral_fan', 'dead_horn_coral_fan', 'tube_coral_fan',
    'brain_coral_fan', 'bubble_coral_fan', 'fire_coral_fan', 'horn_coral_fan', 'dead_tube_coral_wall_fan'
    , 'dead_brain_coral_wall_fan', 'dead_bubble_coral_wall_fan', 'dead_fire_coral_wall_fan'
    , 'dead_horn_coral_wall_fan', 'tube_coral_wall_fan', 'brain_coral_wall_fan', 'bubble_coral_wall_fan'
    , 'fire_coral_wall_fan', 'horn_coral_wall_fan', 'sea_pickle', 'blue_ice', 'conduit', 'bamboo_sapling'
    , 'bamboo', 'potted_bamboo', 'void_air', 'cave_air', 'bubble_column', 'polished_granite_stairs'
    , 'smooth_red_sandstone_stairs', 'mossy_stone_brick_stairs', 'polished_diorite_stairs'
    , 'mossy_cobblestone_stairs', 'end_stone_brick_stairs', 'stone_stairs', 'smooth_sandstone_stairs'
    , 'smooth_quartz_stairs', 'granite_stairs', 'andesite_stairs', 'red_nether_brick_stairs'
    , 'polished_andesite_stairs', 'diorite_stairs', 'polished_granite_slab', 'smooth_red_sandstone_slab'
    , 'mossy_stone_brick_slab', 'polished_diorite_slab', 'mossy_cobblestone_slab', 'end_stone_brick_slab'
    , 'smooth_sandstone_slab', 'smooth_quartz_slab', 'granite_slab', 'andesite_slab', 'red_nether_brick_slab'
    , 'polished_andesite_slab', 'diorite_slab', 'brick_wall', 'prismarine_wall', 'red_sandstone_wall'
    , 'mossy_stone_brick_wall', 'granite_wall', 'stone_brick_wall', 'nether_brick_wall', 'andesite_wall'
    , 'red_nether_brick_wall', 'sandstone_wall', 'end_stone_brick_wall', 'diorite_wall', 'scaffolding'
    , 'loom', 'barrel', 'smoker', 'blast_furnace', 'cartography_table', 'fletching_table', 'grindstone'
    , 'lectern', 'smithing_table', 'stonecutter', 'bell', 'lantern', 'soul_lantern', 'campfire', 'soul_campfire'
    , 'sweet_berry_bush', 'warped_stem', 'stripped_warped_stem', 'warped_hyphae', 'stripped_warped_hyphae'
    , 'warped_nylium', 'warped_fungus', 'warped_wart_block', 'warped_roots', 'nether_sprouts', 'crimson_stem'
    , 'stripped_crimson_stem', 'crimson_hyphae', 'stripped_crimson_hyphae', 'crimson_nylium', 'crimson_fungus'
    , 'shroomlight', 'weeping_vines', 'weeping_vines_plant', 'twisting_vines', 'twisting_vines_plant'
    , 'crimson_roots', 'crimson_planks', 'warped_planks', 'crimson_slab', 'warped_slab', 'crimson_pressure_plate'
    , 'warped_pressure_plate', 'crimson_fence', 'warped_fence', 'crimson_trapdoor', 'warped_trapdoor'
    , 'crimson_fence_gate', 'warped_fence_gate', 'crimson_stairs', 'warped_stairs', 'crimson_button'
    , 'warped_button', 'crimson_door', 'warped_door', 'crimson_sign', 'warped_sign', 'crimson_wall_sign'
    , 'warped_wall_sign', 'structure_block', 'jigsaw', 'composter', 'target', 'bee_nest', 'beehive'
    , 'honey_block', 'honeycomb_block', 'netherite_block', 'ancient_debris', 'crying_obsidian'
    , 'respawn_anchor', 'potted_crimson_fungus', 'potted_warped_fungus', 'potted_crimson_roots'
    , 'potted_warped_roots', 'lodestone', 'blackstone', 'blackstone_stairs', 'blackstone_wall'
    , 'blackstone_slab', 'polished_blackstone', 'polished_blackstone_bricks'
    , 'cracked_polished_blackstone_bricks', 'chiseled_polished_blackstone'
    , 'polished_blackstone_brick_slab', 'polished_blackstone_brick_stairs', 'polished_blackstone_brick_wall',
    'gilded_blackstone', 'polished_blackstone_stairs', 'polished_blackstone_slab',
    'polished_blackstone_pressure_plate', 'polished_blackstone_button', 'polished_blackstone_wall',
    'chiseled_nether_bricks', 'cracked_nether_bricks', 'quartz_bricks', 'candle', 'white_candle',
    'orange_candle', 'magenta_candle', 'light_blue_candle', 'yellow_candle', 'lime_candle', 'pink_candle',
    'gray_candle', 'light_gray_candle', 'cyan_candle', 'purple_candle', 'blue_candle', 'brown_candle',
    'green_candle', 'red_candle', 'black_candle', 'candle_cake', 'white_candle_cake', 'orange_candle_cake',
    'magenta_candle_cake', 'light_blue_candle_cake', 'yellow_candle_cake', 'lime_candle_cake',
    'pink_candle_cake', 'gray_candle_cake', 'light_gray_candle_cake', 'cyan_candle_cake', 'purple_candle_cake',
    'blue_candle_cake', 'brown_candle_cake', 'green_candle_cake', 'red_candle_cake', 'black_candle_cake',
    'amethyst_block', 'budding_amethyst', 'amethyst_cluster', 'large_amethyst_bud', 'medium_amethyst_bud',
    'small_amethyst_bud', 'tuff', 'calcite', 'tinted_glass', 'powder_snow', 'sculk_sensor', 'oxidized_copper',
    'weathered_copper', 'exposed_copper', 'copper_block', 'copper_ore', 'deepslate_copper_ore',
    'oxidized_cut_copper', 'weathered_cut_copper', 'exposed_cut_copper', 'cut_copper',
    'oxidized_cut_copper_stairs', 'weathered_cut_copper_stairs', 'exposed_cut_copper_stairs',
    'cut_copper_stairs', 'oxidized_cut_copper_slab', 'weathered_cut_copper_slab',
    'exposed_cut_copper_slab', 'cut_copper_slab', 'waxed_copper_block', 'waxed_weathered_copper',
    'waxed_exposed_copper', 'waxed_oxidized_copper', 'waxed_oxidized_cut_copper',
    'waxed_weathered_cut_copper', 'waxed_exposed_cut_copper', 'waxed_cut_copper',
    'waxed_oxidized_cut_copper_stairs', 'waxed_weathered_cut_copper_stairs',
    'waxed_exposed_cut_copper_stairs', 'waxed_cut_copper_stairs', 'waxed_oxidized_cut_copper_slab',
    'waxed_weathered_cut_copper_slab', 'waxed_exposed_cut_copper_slab', 'waxed_cut_copper_slab',
    'lightning_rod', 'pointed_dripstone', 'dripstone_block', 'cave_vines', 'cave_vines_plant',
    'spore_blossom', 'azalea', 'flowering_azalea', 'moss_carpet', 'moss_block', 'big_dripleaf',
    'big_dripleaf_stem', 'small_dripleaf', 'hanging_roots', 'rooted_dirt', 'deepslate', 'cobbled_deepslate',
    'cobbled_deepslate_stairs', 'cobbled_deepslate_slab', 'cobbled_deepslate_wall', 'polished_deepslate',
    'polished_deepslate_stairs', 'polished_deepslate_slab', 'polished_deepslate_wall', 'deepslate_tiles',
    'deepslate_tile_stairs', 'deepslate_tile_slab', 'deepslate_tile_wall', 'deepslate_bricks',
    'deepslate_brick_stairs', 'deepslate_brick_slab', 'deepslate_brick_wall', 'chiseled_deepslate',
    'cracked_deepslate_bricks', 'cracked_deepslate_tiles', 'infested_deepslate', 'smooth_basalt',
    'raw_iron_block', 'raw_copper_block', 'raw_gold_block', 'potted_azalea_bush', 'potted_flowering_azalea_bush']

let CLOTHING_BRANDS = ['a.p.c.', 'ax armani exchange', 'aape by a bathing ape', 'a bathing ape',
    'acme', 'acne studios', 'adidas', 'adidas originals', 'adrianna papell', 'aerosoles',
    'ag - adriano goldschmied', 'akris', 'alberta ferretti', 'alexander mcqueen', 'alexander wang',
    'alex evenings', 'allsaints', 'alternative', 'alyx', 'amazon basics', 'amazon collection',
    'amazon essentials', 'ambush', 'americanflat', 'ami', 'amiri', 'amir slama', 'anne klein', 'ara',
    'ariat', 'artistic weavers', 'ashley', 'asos', 'asos curve', 'asos petite', 'asos tall', 'aspesi',
    'asyou', 'avanti linens', 'show all brands with a »', 'badgley mischka', 'baggallini', 'balenciaga',
    'bali intimates', 'bally', 'balmain', 'bandolino', 'bareminerals', 'baxton studio', 'bb dakota',
    'bcbgeneration', 'bcbgmaxazria', 'bella vita', 'belstaff', 'benjara', 'bershka', 'betsey johnson',
    'better trends', 'billabong', 'birkenstock', 'blank nyc', 'blazing needles', 'bloomingville', 'blue nile',
    'body glove', 'born', 'boss', 'boston international', 'bottega veneta', 'brahmin', 'brave soul',
    'brumlow mills', 'brunello cucinelli', 'buckle down', 'bugatchi', 'burberry', 'bush business furniture',
    'bush furniture', 'by far', 'c.p. company', 'calvin klein', 'camper',
    'carhartt work in progress', "caroline's treasures", 'casadei', 'cat', 'catch some rays', 'cato fashions',
    'certified international', 'chaco', 'champion', 'chanel', 'cherokee', 'chinese laundry', 'chloé',
    'chow sang sang', 'christophe lemaire', 'christopher knight home', 'churchs', 'clarks', 'coach',
    'coaster fine furniture', 'cole haan', 'collusion', 'columbia', 'comme des garçons', 'convenience concepts',
    'converse', 'core 10', 'corneliani', 'cosabella', 'costa', 'covergirl', 'creative co-op', 'crocs', 'cuisinart',
    'cutter & buck', 'cybrtrayd', 'daily ritual', 'danskin', 'darn tough', 'dash',
    'david yurman', 'dc', 'dc comics', 'dearfoams', 'deco 79', 'dee ocleppo', 'deny designs', 'design art',
    'designq', 'design toscano', 'desigual', 'diane von fürstenberg', 'dickies', 'diesel', 'dion lee', 'dior',
    'dirty laundry', 'disney', 'dkny', 'dl1961', 'dockers', 'dolce & gabbana', 'dolce & gabbana eyewear',
    'dolce vita', 'donald j pliner', 'dondup', 'donna morgan', 'dorothee schumacher', 'dr. martens', 'dr. scholls',
    'dress the population', 'dries van noten', 'driver club usa', 'dsquared2', 'dungeons & dragons',
    'show all brands with d »', 'e.l.f. cosmetics', 'eastland', 'east west furniture', 'easy spirit',
    'easy street', 'eberjey', 'ecco', 'eclipse', 'eddie bauer', 'eidon', 'eileen fisher', 'elegant comfort',
    'element', 'elemis', 'eleventy', 'elfa', 'elisabetta franchi', 'elk lighting', 'ellie shoes', 'elliot alia',
    'elomi', 'elrene', 'emanuele bicocchi', 'emilio pucci', 'emphasis', 'emporio armani', 'enesco',
    'english laundry', 'equipment', 'erdem', 'eres', 'eric michael', 'ermanno scervino', 'ermenegildo zegna',
    'etnies', 'etro', 'eurosock', 'exclusive home curtains', 'extreme cashmere', 'show all brands with e »',
    'fabiana filippi', 'falke', 'fantasie', 'farberware', 'fay', 'fear of god', 'federica tosi', 'fendi', 'fifth sun',
    'fila', 'filippa k', 'find.', 'fire fit designs', 'firstime & co.', 'fitflop', 'five cm', 'fjällräven',
    'flash furniture', 'florsheim', 'footjoy', 'foreside home and garden', 'fornasetti', 'forte_forte',
    'fossil', 'fox republic design', 'fox run', 'frame denim', "francesca's", 'franco sarto', 'fred perry'
    , 'free people', 'french connection', 'freya', 'frontgate', 'fruit of the loom', 'frye', 'furinno', 'furla',
    'furnish my place', 'show all brands with f »', 'gabriela hearst', 'game of thrones', 'ganni', 'garfield',
    'garland rug', 'garnier', 'gas bijoux', 'gauge81', 'gcds', 'generic', 'gentle souls', 'geox', 'gertmenian',
    'ghidini 1961', 'giambattista valli', 'gianfranco ferre', 'giant step design co.', 'gianvito rossi',
    'giesswein', 'gildan', 'ginori 1735', 'giobagnara', 'giorgio armani', 'giuseppe zanotti', 'givenchy',
    'glamorous', 'gloria vanderbilt', 'golden goose', 'gold toe', 'goodthreads', 'goody', 'gossard', 'gottex',
    'graphic 365', 'gray & gold publishing', 'g-star', 'gucci', 'guess', 'guidi', 'show all brands with g »',
    'haculla', 'haggar', 'half price drapes', 'halston heritage', 'hamilton beach', 'hanes', 'hanes ultimate',
    'hanky panky', 'hanro', 'harley-davidson', 'harry potter', 'hauteloom', 'havaianas', 'hedgren', 'helly hansen',
    'helmut lang', 'henrik vibskov', 'heritage lace', 'hermès', 'herno', 'heron preston', 'herschel',
    'hillsdale furniture', 'hobo', 'hogan', 'hollister', 'holzweiler', 'home dynamix', 'homeroots', 'home weavers',
    'homme plissé issey miyake', 'hot sox', 'hudson', 'hue', 'huebucket', 'hugo boss', 'hunter', 'hurley',
    'hush puppies', 'show all brands with h »', 'iceberg', 'icebreaker', 'icecream', 'icollection', 'iconic home',
    'idesign', 'idun minerals', 'ienjoy home', 'ih nom uh nit', 'ilana ariel', 'ilia beauty', 'illulian', 'illume',
    'imusa', 'incotex', 'influence', 'in gold we trust paris', 'ink + ivy', 'innisfree', 'instant pot',
    'intelligent design', 'in the style', 'ippolita', 'irene neuwirth', 'iris', 'iris & lilly', 'irish setter',
    'iro', 'isabel marant', 'isa boulder', 'i saw it first', 'isotoner', 'issey miyake', 'it cosmetics',
    'itouchless', 'ivory rose', 'ivv - industria vetraria valdarnese', 'izod', 'izzue',
    'j.w.anderson', 'jack & jones', 'jacob cohen', 'jacquemus', 'jag jeans', 'jambu', 'jane iredale',
    'j brand', 'jbu by jambu', 'jcombs', 'jennifer behr', 'jennifer taylor home', 'jessica simpson',
    'jil sander', 'jimbeels', 'jimmy choo london', 'j kara', 'jockey', "joe's", "john elliott + co",
    'john hardy', 'johnny was', 'john richmond', 'johnston & murphy', 'john varvatos', 'joie', 'jonathan simkhai',
    'jonathan y designs', 'joseph', 'joules', 'journee collection', 'jp london', 'juicy couture', 'julia knight',
    'junya watanabe', 'jurassic park', 'just cavalli', 'juun.j', 'jz.birds', 'k. bell socks', 'k&k interiors',
    'kaanas', 'kamik', 'kanu surf', 'kappa', 'kardiel', 'karen kane', 'karl lagerfeld', 'karma gifts', 'kasper',
    'kate & laurel', 'kate spade new york', 'katy perry', 'keds', 'keen', 'kelsi dagger', 'kendall + kylie',
    'kendra scott', 'kenneth cole', 'kenneth cole reaction', 'kenney', 'kensie', 'kenzo', 'khaite', 'khrisjoy',
    "kiehl's", 'kipling', 'kiss', 'kitchenaid', 'kiton', 'klear vu', 'koio', 'kolor', 'koolaburra by ugg', 'koziol',
    'ksubi', 'kuboraum', 'kurt geiger', 'show all brands with k »', 'l.l.bean', "l'occitane", "l'oréal", "la blanca",
    'lacoste', 'la doublej', 'lafayette 148 new york', 'lands end', 'lanvin', 'lark & ro', 'lawrence frames',
    'le creuset', 'lee', 'leg avenue', 'le gramme', 'lenox', 'le silla', "levi's", 'levis', 'life is good', 'life stride',
    'lilly pulitzer', 'linon', 'liu jo', 'lnz custom design', 'loeffler randall', 'loewe', 'loft', 'loloi rugs',
    'looney tunes', 'louis vuitton', 'love moschino', 'lrg', 'lr home', 'lucky brand', 'lugz', 'luli fama',
    'lush décor', 'lygia & nanny', 'lyssé', 'show all brands with l »', 'maaji', 'madewell', 'madison park',
    'maidenform', 'maison margiela', 'marc jacobs', 'marc joseph new york', 'maria black', 'marine serre',
    'marni', 'marsèll', 'marvel', 'mathware', 'max mara', 'mcq by alexander mcqueen', 'mcs', 'medals of america',
    'mepra', 'meridian furniture', 'merrell', 'michael kors', 'michael michael kors', 'missguided', 'missoni',
    'miss selfridge', 'miu miu', 'modway', 'mohawk home', 'moncler', 'monica vinader', 'monkä', 'monki', 'moschino',
    'mother', 'msgm', 'mud pie', 'muk luks', 'mulberry', 'mywalit', 'show all brands with m »', 'n.peal', 'no 21',
    'na-kd', 'nanette lepore', 'nanushka', 'naot', 'nascar', 'natasha zinko', 'national tree company', 'natori',
    'naturalizer', 'nautica', 'nearly natural', 'needles', 'neil barrett', 'neutrogena', 'new balance', 'new look',
    'nic+zoe', 'nickelodeon', 'nike', 'nike jordan', 'nili lotan', 'nine west', 'nintendo', 'no. 918', 'noisy may',
    'noori rug', 'nordic ware', 'noritake', 'norma kamali', 'nourison', 'novica', 'now designs', 'nudie jeans',
    'nuloom', 'nunn bush', 'nydj', 'nyx cosmetics', 'show all brands with n »', "o'neill", 'oakley', 'oamc',
    'office star', 'officine creative', 'officine générale', 'off-white', 'oggi', 'ogx beauty', 'okay', 'olay',
    'old dutch international', 'oliver peoples', 'olukai', 'olympiah', 'omega', 'on', 'onefifteen', 'ongossamer',
    'only', 'only & sons', 'onzie', 'opening ceremony', 'opi', 'ore', 'orian', 'oribe', 'oriental furniture',
    'original penguin', 'orlebar brown', 'orrefors', 'oscar de la renta', 'oséree', 'osklen', 'osp home furnishings'
    , 'ottomanson', 'our legacy', 'oxo', 'ozone', 'show all brands with o »', 'p.a.r.o.s.h.', 'pack a punch',
    'paco rabanne', 'paige', 'palm angels', 'parajumpers', 'parts of four', 'patrizia pepe', 'paul smith',
    'pavilion gift company', 'peanuts', 'pendleton', 'perfect moment', 'perry ellis', 'persol', 'peserico',
    'philippe model', 'philipp plein', 'philosophy di lorenzo serafini', 'pieces', 'pillow perfect', 'pinko',
    'pixar', 'pj harlow', 'pj salvage', 'polo ralph lauren', 'popular bath', 'posterazzi', 'prada', 'pragnell',
    'premiata', 'primitives by kathy', 'proenza schouler', 'propét', 'psycho bunny', 'pt01', 'public desire',
    'puma', 'pupa milano', 'show all brands with p »', 'qasimi', 'qayten', 'qed london', 'qeeboo',
    'q jewelry design', 'ql2 quelledue', 'quagga green', 'quail', 'qualia', 'qualia glass', 'quantum courage',
    'quay', 'queen', 'queen bee', 'queen helene', 'queens', 'queens of christmas', 'queens of the stone age',
    'quetsche', 'quickway imports', 'quiksilver', 'quintessence', 'quoddy', 'qupid', 'r13', 'raey', 'raf simons',
    'rag & bone', 'ralph lauren', 'ramy brook', 'ray-ban', 're/done', 'rebecca taylor', 'reclaimed vintage',
    'red kap', 'red valentino', 'reebok', 'reef', 'rejina pyo', 'renditions gallery', 'restaurantware', 'revlon',
    'rhonda shear', 'rhude', 'rick owens', 'rikki knight', 'rimmel london', 'rip curl', 'river island', 'rivet',
    'robert graham', 'roberto cavalli', 'rockport', 'roger vivier', 'root candles', 'roper', 'rossignol',
    'round hill furniture', 'roxy', 'ruggable', 'russell athletic', 'rvca', 'rykä', 'sacai', 'safavieh',
    'saint laurent', 'salvatore ferragamo', 'sandro', 'santoni', 'saro lifestyle', 'saucony', 'seafolly',
    'sebastian cruz couture', 'see by chloé', 'seembo', 'sergio rossi', 'signature design by ashley',
    'simple modern', 'simpli home', 'simplipiba', 'skechers', 'skl home', 'smartwool', 'smooth hq', 'society6',
    'so cool designs', 'softwalk', 'sorrelli', 'sperry top-sider', 'splendid', 'spreadpassion', 'stacy adams',
    'star vixen', 'star wars', 'stella mccartney', 'steve madden', 'stradivarius', 'stuart weitzman',
    'stupell industries', 'superior', 'supreme', 'sweet home collection', 'tagliatore', 'tahari by asl',
    'talbots', 'tarte', 'ted baker', 'teva', 'the attico', 'the bradford exchange', 'the drop',
    'the hamilton collection', 'the mountain', 'the north face', 'the oliver gal artist co.', 'theory',
    'the row', 'the rugshop', 'the salty veteran', 'the stupell home décor collection', 'thirstystone',
    'thom browne', 'tickled pink', 'timberland', "tod's", 'tom ford', 'tommy bahama', 'tommy hilfiger', 'toms',
    'tom wood', 'topman', 'topshop', 'tory burch', 'totême', 'trademark fine art', 'trendy decor 4 u', 'tribal'
    , 'trina turk', 'trotters', 'true religion', 'twin-set', 'show all brands with t »', 'u.s.polo association',
    'u.s. traveler', 'ufc', 'ugg', 'ugly christmas sweater company', 'ulivi salotti', 'ulla johnson',
    'ulster weavers', 'uma', 'uma wang', 'umbra', 'umbro', 'under armour', 'undercover',
    'undercover by jun takahashi', 'undies.com', 'unionbay', 'unique21', 'unique furniture', 'unique loom',
    'unite', 'united curtain', 'unity in diversity', 'universal monsters', 'universal works',
    'unlisted by kenneth cole', 'unravel', 'unreal fur', 'unseen footwear', 'untuckit', 'urban bliss'
    , 'urban designs', 'urban habitat', 'urban republic', 'urban revivo', 'urban shop', 'urban threads',
    'us pride furniture', 'uttermost', 'show all brands with u »', 'v.i.p. jeans', 'vagabond', 'valentino',
    'valentino garavani', 'van heusen', 'vanity fair', 'vans', 'vcny home', 'veja', 'velvet', 'venini',
    'vera bradley', 'vero moda', 'veronica beard', 'versace', 'versace jeans couture', 'vetements', 'vg',
    'vickerman', 'victoria beckham', 'victorinox by swiss army', 'viktor & rolf', 'vila', 'villeroy & boch',
    'vince', 'vince camuto', 'vineyard vines', 'violet linen', 'vionic', 'visvim', 'vitamin a', 'vito nesta',
    'vitra', 'vivaia', 'vivienne westwood', 'vix', 'vogue eyewear', 'volcom', 'vtmnts',
    'wacoal', 'waechtersbach', 'wales bonner', 'walker edison', 'walking cradles', 'wallflower jeans',
    'wallmonkeys', 'walter van beirendonck', 'wandler', 'wardrobe.nyc', "warner's", 'waterford', 'waverly',
    'we11done', "wednesday's girl", 'weekday', 'wella', 'well woven', 'wenko', 'wet n wild', 'wexford home',
    'whistles', 'white mountain', 'whitmor', 'whyitsme design', 'wildfox', 'wilton', 'winnie rose apparel',
    'winsome', 'wolford', 'wolverine', 'wooden mallet', 'woolrich', 'wooyoungmi', 'wouters & hendrix', 'wrangler',
    'wt02', 'wüsthof', 'wynwood studio', 'show all brands with w »', 'xacus', 'xander zhou', 'xbrand', 'xcvi',
    'xen-tan', 'xero shoes', 'xfusion', 'xia home fashions', 'xiao wang', 'xirena', 'x karla', 'xôcoi', 'xoxo',
    'x rocker', 'xscape', 'xtratuf', 'xtreme lashes', 'xu zhi', 'y / project', 'y.a.s', 'yamazaki home',
    'yamazaki tableware', 'yankee candle company', 'ybf beauty', 'ybm home', 'ydx', 'year of ours',
    'yeezy by kanye west', 'yellow box', 'yeprem', 'yes to', 'yeti', 'yi collection', 'yinka ilori',
    'ymc you must create', 'yohji yamamoto', 'yoki', 'yoko london', 'yosemite home decor', 'yoshiokubo',
    'yosi samra', 'youcopia', 'youngblood mineral cosmetics', 'young fabulous & broke', 'young nails',
    'yours clothing', 'youths in balaclava', 'yuhan wang', 'yuliya magdych', 'yu mei', 'yume yume',
    'yummie tummie', 'yupoong', 'yuzefi', 'yves salomon', 'yves salomon - army', 'yvonne léon'
    , 'zac & rachel', 'zack', 'zac posen', 'zadig & voltaire', 'zak designs', 'zamberlan', 'zanaboni',
    'zanat', 'zanellato', 'zanerobe', 'zanetto', 'zanone', 'zanzara', 'zassenhaus', 'zeal optics', 'zenith',
    'zentique', 'zeroll', 'zerouv', 'zeus', 'zeus + dione', 'zevro', 'zhoe & tobiah', 'ziggy chen', 'zigi soho',
    'zilver', 'zimmermann', 'zing beauty', 'zodax', 'zoë chicco', 'zojirushi', 'zoya', 'zuhair murad',
    'zulu & zephyr', 'zuo', 'zwiesel glas', 'zwilling', 'zyliss', 'zz top', '0-9', '!nspire', '& other stories',
]
//CONST VARIABLES SECTION///
const categories = ["country", "capital", "clothing brand", "sea", "car brand", "sport", "animal", "minecraft_block"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const category = document.getElementsByClassName('category')
const letter = document.getElementsByClassName('letter')
const lists = [COUNTRY_NAME, CAPITALS, CLOTHING_BRANDS, SEAS, CAR_BRANDS, SPORTS, ANIMALS, MINECRAFT_BLOCKS]

let c_list = lists[0]; //CURRENT LIST
let ctgr = 'a'
let lttr = 'a'

//RANDOMIZER SECTION///////
function random_category() {
    let los = Math.floor(Math.random() * 8); //returns random number from 0 to 7 (categories)
    ctgr = categories[los]
    c_list = lists[los]
    return ctgr;
}

function random_letter() {
    lttr = randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    return lttr//returns random letter from alphabet
}

//SETTERS SECTION////////
function SetCategory() {
    category[0].innerHTML = random_category()
}
function SetLetter() {

    letter[0].innerHTML = "letter: " + random_letter()
}

//ALL ELEMENTS STORE SECTION////
let win = false;
let next_able = false;
let user_input = document.getElementsByClassName('user_input')
let valid_box = document.querySelectorAll('.correct_box');
let next_button = document.querySelectorAll('.next');
let active_next = false;
//CHECKERS
function nextButtonEnabler() {
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            next_button[0].classList.remove('deactive');
            next_button[0].classList.add('active');
            active_next = true;
            if (win === true) {
                Turn()
            }
        }
    })
    document.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            next_button[0].classList.add('deactive');
            next_button[0].classList.remove('active');
        }
    })
    next_button[0].addEventListener('click', () => {
        if (win === true) {
            Turn()
        }
    })
}

function checkIfPossible() {
    if (c_list == COUNTRY_NAME || c_list == MINECRAFT_BLOCKS || c_list == SPORTS) {
        if (lttr == 'x' || lttr == 'y' || lttr == 'w')
            return false;
    }
    else if (c_list == MINECRAFT_BLOCKS || c_list == SEAS || c_list == SPORTS) {
        if (lttr == 'u' || lttr == 'z' || lttr == 'q' || lttr == 'x' || lttr == 'y')
            return false;
    }
    else if (c_list == CAPITALS||c_list == ANIMALS) {
        if (lttr == 'x' || lttr == 'q' || lttr == 'y')
            return false;
    }
    else return true;
}
function checkList(c_list, _lttr) {
    user_input[0].addEventListener('input', () => {
        if (user_input[0].value.charAt(0) == lttr) {
            if (c_list.includes(user_input[0].value)) {
                win = true;
                valid_box[0].querySelector('i.fas').classList.remove('fa-circle-xmark');
                valid_box[0].querySelector('i.fas').classList.add('fa-check');

                valid_box[0].classList.remove('uncorrect');
                valid_box[0].classList.add('correct');
                next_able = true;
                next_button[0].classList.remove('uncorrect');
                next_button[0].classList.add('correct');
                return win;
            } else {
                win = false;
                valid_box[0].querySelector('i.fas').classList.remove('fa-check');
                valid_box[0].querySelector('i.fas').classList.add('fa-circle-xmark');

                valid_box[0].classList.remove('correct');
                valid_box[0].classList.add('uncorrect');
                next_able = false;
                next_button[0].classList.remove('correct');
                next_button[0].classList.add('uncorrect');

            }
        }
    })
}


//TURN
function Turn() {
    valid_box[0].querySelector('i.fas').classList.remove('fa-check');
    valid_box[0].querySelector('i.fas').classList.add('fa-circle-xmark');
    valid_box[0].classList.remove('correct');
    valid_box[0].classList.add('uncorrect');
    next_button[0].classList.remove('correct');
    next_button[0].classList.add('uncorrect');
    user_input[0].value = ""
    win = false;
    SetCategory();
    SetLetter();
    while (checkIfPossible() == false) {
        SetCategory();
        SetLetter();
        console.log(checkIfPossible())
    }
    checkList(c_list, lttr);
    nextButtonEnabler()
}
//ACTUAL GAME

Turn();





