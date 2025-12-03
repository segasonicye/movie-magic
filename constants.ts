

import { MovieScene } from './types';

export const MOVIE_SCENES: MovieScene[] = [
  // --- Top Requested Classics (Placed at top for visibility) ---
  {
    id: 'titanic',
    title: '泰坦尼克号 (Titanic)',
    year: '1997',
    description: '永不沉没的巨轮，夕阳下的船头，跨越阶级的爱恋。',
    prompt: 'Iconic movie poster shot for Titanic. The bow of the ship at sunset.',
    category: 'classic', 
    previewColor: 'from-blue-900 to-orange-400',
    previewImage: 'https://images.unsplash.com/photo-1500077423678-25eead48513a?q=80&w=400',
    roles: [
      {
        id: 'jack_role',
        name: 'Jack (The Artist)',
        description: '穷画家，站在Rose身后，扶着她的腰，在船头迎风飞翔。',
        prompt: 'The character is the USER cosplaying as Jack Dawson. \n\nCOMPOSITION:\n- The USER (Jack) is standing BEHIND Rose at the bow of the ship.\n- **Rose (likeness of Kate Winslet)** is standing in front of the user, arms wide open.\n- The User is holding Rose\'s waist lovingly.\n\nACTION:\n- The iconic "Flying" pose.\n- Sunset lighting, golden hour, romantic emotional expression.',
        previewImage: 'https://images.unsplash.com/photo-1500077423678-25eead48513a?q=80&w=400'
      },
      {
        id: 'rose_role',
        name: 'Rose (The Lady)',
        description: '贵族少女，张开双臂，感受飞翔的自由。',
        prompt: 'The character is the USER cosplaying as Rose. \n\nCOMPOSITION:\n- The USER (Rose) is standing at the bow, arms wide open.\n- **Jack (likeness of Leonardo DiCaprio)** is standing closely BEHIND the user, holding her waist and looking at her lovingly.\n\nACTION:\n- "Flying" pose.\n- Wind blowing hair. Sunset lighting, pure joy and freedom.',
        previewImage: 'https://images.unsplash.com/photo-1518382473168-a400a4007b81?q=80&w=400'
      }
    ]
  },
  {
    id: 'shawshank',
    title: '肖申克的救赎 (Shawshank)',
    year: '1994',
    description: '雷雨夜，张开双臂，拥抱自由。',
    prompt: 'Iconic movie poster shot from The Shawshank Redemption. The character is Andy Dufresne. Shirtless, arms raised high to the sky in pouring rain. Lightning flash illuminating the scene. Expression of pure ecstasy and freedom. River/creek water around. Cinematic blue tones.',
    category: 'classic', 
    previewColor: 'from-slate-800 to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=400'
  },
  {
    id: 'forrest_gump',
    title: '阿甘正传 (Forrest Gump)',
    year: '1994',
    description: '坐在长椅上，手拿巧克力盒，人生就像一盒巧克力。',
    prompt: 'Iconic movie poster shot from Forrest Gump. The character is sitting on a park bench. Wearing a light beige suit and checkered shirt. A suitcase and a box of chocolates next to them. White feather floating (optional). Friendly, innocent expression. Savannah bus stop background.',
    category: 'classic', 
    previewColor: 'from-sky-300 to-green-300',
    previewImage: 'https://images.unsplash.com/photo-1505537385966-267323878b27?q=80&w=400'
  },
  {
    id: 'roman_holiday',
    title: '罗马假日 (Roman Holiday)',
    year: '1953',
    description: '骑着Vespa摩托车穿梭在罗马街头，短暂而永恒的爱情。',
    prompt: 'Iconic movie poster shot from Roman Holiday. Black and white film style. User on a Vespa.',
    category: 'romance',
    previewColor: 'from-gray-400 to-gray-200',
    previewImage: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=400',
    styleKeywords: 'Classic 1950s Hollywood, Black and White, vintage aesthetics, joyous atmosphere.',
    roles: [
      {
        id: 'joe',
        name: '乔 (Joe - Reporter)',
        description: '穿着西装，骑着Vespa摩托车，潇洒帅气。',
        prompt: 'The character is Joe Bradley (Gregory Peck style). \n\nCOMPOSITION:\n- The USER is Joe, driving the vintage Vespa scooter.\n- **Princess Ann (Audrey Hepburn likeness)** is sitting behind the user on the scooter, holding onto him and laughing.\n\nACTION:\n- Driving past the Colosseum. Black and White photography. Charming, handsome.',
        previewImage: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=400'
      },
      {
        id: 'ann',
        name: '安妮公主 (Princess Ann)',
        description: '白衬衫，长裙，坐在摩托车后座或驾驶，俏皮可爱。',
        prompt: 'The character is Princess Ann (Audrey Hepburn style). \n\nCOMPOSITION:\n- The USER is Ann, driving the Vespa (or sitting behind).\n- **Joe Bradley (Gregory Peck likeness)** is on the scooter with the user, smiling.\n\nACTION:\n- Riding through Roman streets. Black and White photography. Elegant, happy.',
        previewImage: 'https://images.unsplash.com/photo-1490334800361-92b1a62961d3?q=80&w=400'
      }
    ]
  },
  {
    id: 'godfather',
    title: '教父 (The Godfather)',
    year: '1972',
    description: '黑礼服，红玫瑰，不仅是黑帮，更是家族的责任。',
    prompt: 'Iconic movie poster shot from The Godfather. The character is Don Corleone. Wearing a black tuxedo with a red rose on the lapel. Sitting in a dark room. Dramatic top-down lighting (Marlon Brando style). Holding a cat (optional). Serious, powerful, iconic shadow over eyes.',
    category: 'classic',
    previewColor: 'from-black to-red-900',
    previewImage: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=400',
    styleKeywords: 'Chiaroscuro lighting, dark shadows, golden hues, vintage film grain.'
  },

  // --- TV Series (New) ---
  {
    id: 'breaking_bad',
    title: '绝命毒师 (Breaking Bad)',
    year: '2008',
    description: '沙漠中的房车，蓝色的结晶，化学老师的转变。',
    prompt: 'Iconic TV poster for Breaking Bad.',
    category: 'tv',
    previewColor: 'from-green-700 to-yellow-600',
    previewImage: 'https://images.unsplash.com/photo-1523206485256-7299399474dd?q=80&w=400',
    styleKeywords: 'Yellow filter, desert landscape, gritty realism, high contrast.',
    roles: [
      {
        id: 'walter',
        name: '老白 (Walter White)',
        description: '黑帽子，墨镜，绿衬衫，手持蓝色结晶。',
        prompt: 'The character is the USER cosplaying as Heisenberg (Walter White). \n\nCOMPOSITION:\n- The USER is in the foreground wearing the pork pie hat and sunglasses.\n- **Jesse Pinkman (Aaron Paul likeness)** is standing in the background wearing a yellow hazmat suit, looking troubled.\n\nACTION:\n- Standing in the New Mexico desert next to an RV.\n- Looking sternly at the camera.\n- Blue sky and yellow sand filter.',
        previewImage: 'https://images.unsplash.com/photo-1523206485256-7299399474dd?q=80&w=400'
      },
      {
        id: 'jesse',
        name: '小粉 (Jesse)',
        description: '黄色防护服，防毒面具，实验室。',
        prompt: 'The character is the USER cosplaying as Jesse Pinkman. \n\nCOMPOSITION:\n- The USER is in the foreground wearing a yellow HAZMAT SUIT (hood down).\n- **Walter White (Bryan Cranston likeness)** is in the background, focused on cooking blue crystal.\n\nACTION:\n- Standing in a superlab with blue chemicals.\n- Looking stressed or intense.\n- Background: Industrial lab equipment.',
        previewImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=400'
      }
    ]
  },
  {
    id: 'better_call_saul',
    title: '风骚律师 (Better Call Saul)',
    year: '2015',
    description: '彩色西装，法律广告，指着镜头的自信。',
    prompt: 'Iconic TV poster for Better Call Saul. The character is the USER cosplaying as Saul Goodman. \n\nOUTFIT:\n- Wearing a flashy colorful suit (Purple, Orange, or Yellow) with a matching tie.\n\nACTION:\n- Pointing a finger gun at the camera with a cheesy smile OR standing in a courtroom.\n- Background: Scales of justice or Albuquerque desert. \n- Style: slightly wide angle lens, vibrant colors.',
    category: 'tv',
    previewColor: 'from-yellow-400 to-red-400',
    previewImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400'
  },
  {
    id: 'prison_break',
    title: '越狱 (Prison Break)',
    year: '2005',
    description: '狐狸河监狱，全身纹身，逃脱的蓝图。',
    prompt: 'Iconic TV poster for Prison Break. The character is the USER cosplaying as Michael Scofield. \n\nIDENTITY:\n- Keep user\'s face.\n- Add the iconic FULL BODY TATTOO (blueprints) visible on arms/torso.\n\nCOMPOSITION:\n- The USER is Michael Scofield.\n- **Lincoln Burrows (Dominic Purcell likeness)** is standing beside him, looking tough and protective.\n\nACTION:\n- Standing behind prison bars or looking at a map on the wall.\n- Intense, calculating stare. \n- Lighting: Harsh prison lighting, blue tint.',
    category: 'tv',
    previewColor: 'from-blue-800 to-gray-800',
    previewImage: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=400'
  },
  {
    id: 'journey_to_west',
    title: '西游记 (Journey to the West)',
    year: '1986',
    description: '敢问路在何方，师徒四人，九九八十一难。',
    prompt: 'Iconic TV poster for Journey to the West (Classic 1986 style).',
    category: 'tv',
    useChineseTitle: true,
    previewColor: 'from-yellow-600 to-red-600',
    previewImage: 'https://images.unsplash.com/photo-1535581652167-3d6693c03169?q=80&w=400',
    styleKeywords: 'Classic Chinese fantasy, vibrant opera-style makeup, mythical atmosphere.',
    roles: [
      {
        id: 'wukong',
        name: '孙悟空 (Monkey King)',
        description: '金甲亮堂堂，金箍棒，火眼金睛。',
        prompt: 'The character is the USER cosplaying as Sun Wukong. \n\nCOMPOSITION:\n- The USER (Monkey King) is in the center, flying on a cloud.\n- **Tang Seng, Zhu Bajie, and Sha Wujing** (classic 1986 likenesses) are behind him, looking up in awe.\n\nIDENTITY:\n- Keep user\'s face structure but apply MONKEY KING MAKEUP (golden hair, red eye shadow).\n\nOUTFIT:\n- Golden chainmail armor, red cape, phoenix feather cap.\n\nACTION:\n- Holding the Golden Cudgel staff.',
        previewImage: 'https://images.unsplash.com/photo-1535581652167-3d6693c03169?q=80&w=400'
      },
      {
        id: 'tangseng',
        name: '唐僧 (Tang Monk)',
        description: '锦襕袈裟，九环锡杖，慈悲为怀。',
        prompt: 'The character is the USER cosplaying as Tang Seng. \n\nCOMPOSITION:\n- The USER (Tang Monk) is riding the White Dragon Horse.\n- **Sun Wukong (Monkey King)** is leading the horse, looking alert.\n- **Zhu Bajie and Sha Wujing** are following carrying luggage.\n\nOUTFIT:\n- Wearing the red Kasaya robe and golden crown hat.\n\nACTION:\n- Hands in prayer. Peaceful, holy expression.',
        previewImage: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=400'
      }
    ]
  },
  {
    id: 'three_kingdoms',
    title: '三国演义 (Three Kingdoms)',
    year: '1994',
    description: '滚滚长江东逝水，英雄人物，权谋与战争。',
    prompt: 'Iconic TV poster for Romance of the Three Kingdoms.',
    category: 'tv',
    useChineseTitle: true,
    previewColor: 'from-gray-700 to-red-800',
    previewImage: 'https://images.unsplash.com/photo-1533158307587-828f0a76ef93?q=80&w=400',
    styleKeywords: 'Historical epic, ancient Chinese warfare, gritty realism, dramatic portraits.',
    roles: [
      {
        id: 'zhuge_liang',
        name: '诸葛亮 (Zhuge Liang)',
        description: '羽扇纶巾，运筹帷幄之中，决胜千里之外。',
        prompt: 'The character is the USER cosplaying as Zhuge Liang. \n\nCOMPOSITION:\n- The USER is playing the Guqin on the city wall (Empty Fort Strategy).\n- **Liu Bei, Guan Yu, and Zhang Fei** are visualized in the clouds/sky above as spirits or memories.\n\nOUTFIT:\n- Wearing Taoist robes and holding a FEATHER FAN.\n\nACTION:\n- Wise, calm expression. Background: Misty river or ancient city.',
        previewImage: 'https://images.unsplash.com/photo-1518709414768-a88986a455b1?q=80&w=400'
      },
      {
        id: 'guanyu',
        name: '关羽 (Guan Yu)',
        description: '绿袍金甲，青龙偃月刀，义薄云天。',
        prompt: 'The character is the USER cosplaying as Guan Yu. \n\nCOMPOSITION:\n- The USER is Guan Yu, standing tall.\n- **Liu Bei and Zhang Fei** (actors likeness) are standing beside him performing the Oath of the Peach Garden.\n\nIDENTITY:\n- Keep user\'s face structure. \n- MUST HAVE LONG BLACK BEARD (iconic).\n- Red face paint (optional/subtle).\n\nOUTFIT:\n- Green battle robes and armor.\n\nACTION:\n- Holding the Green Dragon Crescent Blade.',
        previewImage: 'https://images.unsplash.com/photo-1533158307587-828f0a76ef93?q=80&w=400'
      }
    ]
  },
  {
    id: 'condor_heroes',
    title: '射雕英雄传 (Condor Heroes)',
    year: '1983',
    description: '弯弓射大雕，侠之大者，为国为民。',
    prompt: 'Iconic TV poster for Legend of the Condor Heroes. The character is Guo Jing.',
    category: 'tv',
    useChineseTitle: true,
    previewColor: 'from-orange-600 to-yellow-600',
    previewImage: 'https://images.unsplash.com/photo-1516573432619-6a639019d3ee?q=80&w=400',
    styleKeywords: 'Classic Wuxia, golden sunset, martial arts heroism.',
    roles: [
      {
        id: 'guojing',
        name: '郭靖 (Guo Jing)',
        description: '弯弓射雕，降龙十八掌，憨厚的大侠。',
        prompt: 'The character is the USER cosplaying as Guo Jing. \n\nCOMPOSITION:\n- The USER is Guo Jing drawing a bow.\n- **Huang Rong (Barbara Yung likeness)** is standing beside him, smiling and holding his arm.\n\nOUTFIT:\n- Mongol archer outfit or Song dynasty warrior robes.\n\nACTION:\n- Drawing a bow aimed at the sky (shooting eagles).\n- Background: Vast grasslands/steppes and sunset.',
        previewImage: 'https://images.unsplash.com/photo-1553531087-b25c0b9a3bf7?q=80&w=400'
      },
      {
        id: 'huangrong',
        name: '黄蓉 (Huang Rong)',
        description: '打狗棒，古灵精怪，桃花岛主之女。',
        prompt: 'The character is the USER cosplaying as Huang Rong. \n\nCOMPOSITION:\n- The USER is Huang Rong.\n- **Guo Jing (Felix Wong likeness)** is standing beside her, looking protective.\n\nOUTFIT:\n- Yellow or white flowing ancient robes.\n\nACTION:\n- Holding a green bamboo stick (Dog Beating Staff).\n- Playful, smart expression.\n- Background: Peach blossom island.',
        previewImage: 'https://images.unsplash.com/photo-1516573432619-6a639019d3ee?q=80&w=400'
      }
    ]
  },

  // --- Fantasy (Restored) ---
  {
    id: 'game_of_thrones',
    title: '权力的游戏 (Game of Thrones)',
    year: '2011',
    description: '凛冬将至，列王的纷争，铁王座上的权谋。',
    prompt: 'Iconic promotional poster for Game of Thrones.',
    category: 'fantasy',
    previewColor: 'from-slate-800 to-red-900',
    previewImage: 'https://images.unsplash.com/photo-1535666669445-e8c15cd2e7a9?q=80&w=400',
    styleKeywords: 'Dark medieval fantasy, cold color grading, detailed textures, dramatic lighting, HBO style.',
    roles: [
      {
        id: 'ruler_iron_throne',
        name: '铁王座主人 (The Ruler)',
        description: '坐在由千把利剑铸成的铁王座上，君临天下。',
        prompt: 'The character is the USER sitting on the IRON THRONE. \n\nCOMPOSITION:\n- The USER is sitting dominantly on the Iron Throne.\n- **Cersei Lannister and Tyrion Lannister** are standing at the base of the throne steps, looking up.\n\nIDENTITY:\n- Keep user\'s face strictly.\n- Expression: Stern, powerful, regal, dangerous.\n\nOUTFIT:\n- Wearing dark leather and armored medieval royal attire.',
        previewImage: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=400'
      },
      {
        id: 'nights_watch',
        name: '守夜人 (Night\'s Watch)',
        description: '身披重型皮草，长爪在手，守护绝境长城。',
        prompt: 'The character is the USER as a member of the Night\'s Watch (Jon Snow style). \n\nCOMPOSITION:\n- The USER is Jon Snow.\n- **Samwell Tarly and Ghost (the Direwolf)** are beside him.\n\nIDENTITY:\n- Keep user\'s face.\n- Look cold, gritty, weathered.\n\nOUTFIT:\n- Heavy black fur cloak, layered leather armor.\n\nACTION:\n- Standing atop The Wall or in a snowy forest.\n- Holding a Valyrian steel sword (Longclaw).',
        previewImage: 'https://images.unsplash.com/photo-1517823382935-51bf43374385?q=80&w=400'
      },
      {
        id: 'daenerys',
        name: '龙之母 (Mother of Dragons)',
        description: '坦格利安皇室长裙，幼龙在肩，火焰与权力。',
        prompt: 'The character is the USER cosplaying as Daenerys Targaryen. \n\nCOMPOSITION:\n- The USER is Daenerys.\n- **Jorah Mormont and Grey Worm** are standing behind her as guards.\n- **Drogon (the Dragon)** is flying behind her head.\n\nOUTFIT:\n- Elegant blue or black Targaryen gown/tunic.\n\nACTION:\n- Standing regally with a small DRAGON perched on the shoulder.',
        previewImage: 'https://images.unsplash.com/photo-1575389647243-d3d63b0e363b?q=80&w=400'
      }
    ]
  },
  {
    id: 'lotr',
    title: '指环王 (The Lord of the Rings)',
    year: '2001',
    description: '中土世界的史诗，护戒远征，对抗黑暗魔君。',
    prompt: 'Iconic movie poster shot for Lord of the Rings.',
    category: 'fantasy',
    previewColor: 'from-slate-700 to-amber-600',
    previewImage: 'https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?q=80&w=400',
    styleKeywords: 'Epic high fantasy, Weta Digital style, gritty realism, dramatic lighting, magical atmosphere.',
    roles: [
      {
        id: 'gandalf',
        name: '甘道夫 (Gandalf)',
        description: '灰袍巫师，手持法杖与敌击剑，对抗炎魔。',
        prompt: 'The character is the USER cosplaying as Gandalf the Grey. \n\nCOMPOSITION:\n- The USER (Gandalf) is confronting the Balrog.\n- **The Fellowship (Frodo, Aragorn, Legolas)** are visible in the background, running away.\n\nACTION:\n- Slamming a glowing wooden staff and sword into the ground.\n- Shouting "You Shall Not Pass!".',
        previewImage: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=400'
      },
      {
        id: 'aragorn',
        name: '阿拉贡 (Aragorn)',
        description: '游侠之王，手持纳西尔圣剑，为了北方而战。',
        prompt: 'The character is the USER cosplaying as Aragorn. \n\nCOMPOSITION:\n- The USER is Aragorn holding Andúril.\n- **Legolas and Gimli** are standing ready for battle on either side.\n- **Arwen** (Liv Tyler) is faintly visible in the sky/background.\n\nACTION:\n- Holding the sword Andúril ready for battle.\n- Background: The Black Gate or misty mountains. Epic, leader vibe.',
        previewImage: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=400'
      }
    ]
  },
  {
    id: 'harry_potter',
    title: '哈利·波特 (Harry Potter)',
    year: '2001',
    description: '霍格沃茨的魔法，呼神护卫，对抗伏地魔。',
    prompt: 'Iconic movie poster shot for Harry Potter.',
    category: 'fantasy',
    previewColor: 'from-blue-900 to-indigo-500',
    previewImage: 'https://images.unsplash.com/photo-1626084027786-2a6230f8339c?q=80&w=400',
    styleKeywords: 'Magical atmosphere, glowing spells, gothic architecture, mystical lighting.',
    roles: [
      {
        id: 'harry',
        name: '哈利 (Harry)',
        description: '格兰芬多长袍，魔杖，额头的闪电伤疤。',
        prompt: 'The character is the USER cosplaying as Harry Potter. \n\nCOMPOSITION:\n- The USER is Harry casting a spell.\n- **Ron Weasley and Hermione Granger** are standing right beside him, also casting spells with wands drawn.\n- **Dumbledore** is visible in the background.\n\nACTION:\n- Casting a Patronus charm (glowing silver stag energy).\n- Background: Hogwarts castle at night. Magical and intense.',
        previewImage: 'https://images.unsplash.com/photo-1626084027786-2a6230f8339c?q=80&w=400'
      },
      {
        id: 'hermione',
        name: '赫敏 (Hermione)',
        description: '聪明的女巫，手持魔杖，书本与咒语。',
        prompt: 'The character is the USER cosplaying as Hermione Granger. \n\nCOMPOSITION:\n- The USER is Hermione.\n- **Harry Potter and Ron Weasley** are standing behind her in the library.\n\nACTION:\n- Holding a wand with sparks flying.\n- Surrounded by floating books or potions.\n- Determined, intelligent expression.',
        previewImage: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=400'
      }
    ]
  },
  {
    id: 'pirates',
    title: '加勒比海盗 (Pirates of the Caribbean)',
    year: '2003',
    description: '杰克船长，黑珍珠号，站在沉船桅杆上的出场。',
    prompt: 'Iconic movie poster shot for Pirates of the Caribbean. The character is the USER cosplaying as Captain Jack Sparrow. \n\nIDENTITY:\n- Keep user\'s face.\n- Add the iconic bandana, dreadlocks (as part of costume hat), and eyeliner.\n\nACTION:\n- Standing casually on the very top mast of a sinking small boat (The Jolly Mon).\n- Looking at the horizon with a compass in hand.\n- Ocean background with Caribbean blue water. \n- Funny yet epic adventure vibe.',
    category: 'fantasy',
    previewColor: 'from-cyan-700 to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1533230676735-97c72f1262d4?q=80&w=400',
    styleKeywords: 'Nautical adventure, tropical sunlight, gritty pirate aesthetic, epic scale.'
  },

  // --- Drama (Restored) ---
  {
    id: 'joker',
    title: '小丑 (Joker)',
    year: '2019',
    description: '哥谭市的阶梯，红色西装，疯狂的舞蹈。',
    prompt: 'Iconic movie poster shot for Joker (2019). The character is the USER cosplaying as Arthur Fleck / Joker. \n\nIDENTITY:\n- Keep user\'s facial structure.\n- Apply the messy, iconic CLOWN MAKEUP (white face, blue triangles, red smile) over the user\'s real face.\n\nOUTFIT:\n- Wearing the rust-red suit and yellow vest.\n\nACTION:\n- Dancing wildly on a concrete outdoor staircase in Gotham City.\n- Smoking a cigarette (optional).\n- Dramatic sunset lighting hitting the stairs. Psychological thriller vibe.',
    category: 'drama',
    previewColor: 'from-orange-700 to-teal-900',
    previewImage: 'https://images.unsplash.com/photo-1592398516067-1560da54563a?q=80&w=400',
    styleKeywords: 'Gritty realism, urban decay, high contrast colors (teal and orange), psychological intensity.'
  },
  {
    id: 'leon',
    title: '这个杀手不太冷 (Léon)',
    year: '1994',
    description: '杀手与女孩，盆栽，墨镜，孤独的守护。',
    prompt: 'Iconic movie poster shot for Léon: The Professional.',
    category: 'drama',
    previewColor: 'from-gray-800 to-yellow-700',
    previewImage: 'https://images.unsplash.com/photo-1532054042869-c4090fd5b3bd?q=80&w=400',
    styleKeywords: 'Urban drama, warm indoor lighting vs cold city, moody, emotional.',
    roles: [
      {
        id: 'leon_role',
        name: '莱昂 (Léon)',
        description: '圆框墨镜，风衣，手捧盆栽。',
        prompt: 'The character is the USER cosplaying as Léon. \n\nCOMPOSITION:\n- The USER is Léon wearing sunglasses and coat.\n- **Mathilda (Natalie Portman likeness)** is walking beside him, holding the sniper rifle case.\n\nACTION:\n- Holding a potted Aglaonema plant in one arm.\n- Walking down a NYC corridor. Stoic, protective.',
        previewImage: 'https://images.unsplash.com/photo-1532054042869-c4090fd5b3bd?q=80&w=400'
      },
      {
        id: 'mathilda',
        name: '玛蒂尔达 (Mathilda)',
        description: '颈圈，短发，怀抱玩偶或盆栽。',
        prompt: 'The character is the USER cosplaying as Mathilda. \n\nCOMPOSITION:\n- The USER is Mathilda sitting on the stairs.\n- **Léon (Jean Reno likeness)** is standing in the shadows behind her, cleaning his gun.\n\nACTION:\n- Holding a potted plant on lap.\n- Rebellious, sad eyes.',
        previewImage: 'https://images.unsplash.com/photo-1485290334039-a3c69043e541?q=80&w=400'
      }
    ]
  },
  {
    id: 'truman_show',
    title: '楚门的世界 (The Truman Show)',
    year: '1998',
    description: '巨大的蓝天背景墙，楼梯，谢幕的鞠躬。',
    prompt: 'Iconic movie poster shot for The Truman Show. The character is Truman Burbank. \n\nACTION:\n- Walking up a white staircase that leads into a painted blue sky with clouds.\n- Touching the wall of the sky.\n- Wearing a suit.\n- Background: Artificial studio lighting, surreal atmosphere. \n- "In case I don\'t see you, good afternoon, good evening, and good night."',
    category: 'drama',
    previewColor: 'from-sky-400 to-white',
    previewImage: 'https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=400'
  },
  {
    id: 'great_gatsby',
    title: '了不起的盖茨比 (The Great Gatsby)',
    year: '2013',
    description: '盛大的派对，举杯敬酒，绚烂的烟花。',
    prompt: 'Iconic movie poster shot for The Great Gatsby. The character is Jay Gatsby. Wearing a sharp black tuxedo with a bow tie. Holding a coupe glass of champagne raised in a toast towards the camera. Smiling confidently (Old Sport). Background: Explosion of fireworks and confetti, Art Deco patterns, golden luxury.',
    category: 'drama',
    previewColor: 'from-yellow-500 to-black',
    previewImage: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=400',
    styleKeywords: 'Art Deco, Baz Luhrmann style, excessive luxury, vibrant colors, gold and black, party atmosphere.'
  },
  {
    id: 'pulp_fiction',
    title: '低俗小说 (Pulp Fiction)',
    year: '1994',
    description: '扭扭舞大赛，经典的双人舞。',
    prompt: 'Iconic movie poster shot for Pulp Fiction.',
    category: 'drama',
    previewColor: 'from-yellow-600 to-red-600',
    previewImage: 'https://images.unsplash.com/photo-1594142404563-6409e1bf77b8?q=80&w=400',
    styleKeywords: 'Tarantino style, neo-noir, pop culture aesthetic, stylized lighting.',
    roles: [
      {
        id: 'vincent',
        name: 'Vincent Vega (Travolta)',
        description: '黑西装，波洛领带，扭扭舞。',
        prompt: 'The character is the USER cosplaying as Vincent Vega. \n\nCOMPOSITION:\n- The USER is Vincent dancing.\n- **Mia Wallace (Uma Thurman likeness)** is dancing opposite him doing the V-fingers over eyes move.\n\nACTION:\n- Doing the twist dance move.\n- Background: Jack Rabbit Slim\'s diner, neon lights.',
        previewImage: 'https://images.unsplash.com/photo-1594142404563-6409e1bf77b8?q=80&w=400'
      },
      {
        id: 'mia',
        name: 'Mia Wallace (Thurman)',
        description: '白衬衫，黑波波头，光脚跳舞。',
        prompt: 'The character is the USER cosplaying as Mia Wallace. \n\nCOMPOSITION:\n- The USER is Mia dancing.\n- **Vincent Vega (John Travolta likeness)** is dancing opposite her.\n\nACTION:\n- Doing the V-fingers over eyes dance move.\n- Background: Jack Rabbit Slim\'s diner.',
        previewImage: 'https://images.unsplash.com/photo-1594142404563-6409e1bf77b8?q=80&w=400'
      }
    ]
  },
  {
    id: 'fight_club',
    title: '搏击俱乐部 (Fight Club)',
    year: '1999',
    description: '肥皂，规则，以及不想谈论的秘密。',
    prompt: 'Iconic movie poster shot for Fight Club. The character is wearing a red leather jacket and sunglasses (Tyler Durden style). Holding a bar of pink soap. Standing in a dingy basement or messy house on Paper Street. Grimy green/yellow color grading. Rebellious attitude.',
    category: 'drama',
    previewColor: 'from-pink-600 to-slate-800',
    previewImage: 'https://images.unsplash.com/photo-1558507652-2d9626c4e67a?q=80&w=400',
    styleKeywords: 'Gritty, dirty, neon green and high contrast, David Fincher aesthetic.'
  },

  // --- Animation (Restored) ---
  {
    id: 'spirited_away',
    title: '千与千寻 (Spirited Away)',
    year: '2001',
    description: '海上列车，无脸男，神秘的灵界之旅。',
    prompt: 'Iconic movie poster shot for Spirited Away. The character is the USER cosplaying as Chihiro (or sitting with No-Face). \n\nIDENTITY:\n- Keep user\'s face but stylized in Ghibli anime style.\n\nACTION:\n- Sitting on the train seat with No-Face beside them.\n- Background: Endless ocean outside the train window, clouds reflecting on water.\n- Peaceful, melancholic, magical atmosphere.',
    category: 'animation',
    previewColor: 'from-blue-400 to-teal-200',
    previewImage: 'https://images.unsplash.com/photo-1516216628259-22549884d844?q=80&w=400',
    styleKeywords: 'Studio Ghibli style, hand-drawn aesthetic, vibrant colors, magical realism, anime.'
  },
  {
    id: 'spider_verse',
    title: '蜘蛛侠：平行宇宙 (Spider-Verse)',
    year: '2018',
    description: '信仰之跃，倒吊下坠，绚丽的故障艺术风格。',
    prompt: 'Iconic movie poster shot for Spider-Man: Into the Spider-Verse. The character is the USER as Spider-Man/Woman. \n\nIDENTITY:\n- Keep user\'s face visible (unmasked or half-masked).\n- Wearing a customized Spidey suit (hoodie + shorts aesthetic like Miles).\n\nACTION:\n- Falling UPSIDE DOWN towards the city skyline.\n- Background: New York City buildings inverted, glitch art effects, halftone dots, comic book speech bubbles. \n- Vibrant neon colors (Pink, Cyan, Yellow).',
    category: 'animation',
    previewColor: 'from-red-600 to-cyan-500',
    previewImage: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=400',
    styleKeywords: 'Comic book style, halftone patterns, chromatic aberration, glitch art, neon noir.'
  },
  {
    id: 'frozen',
    title: '冰雪奇缘 (Frozen)',
    year: '2013',
    description: '冰雪女王，施展魔法，Let it Go。',
    prompt: 'Iconic movie poster shot for Frozen. The character is the USER cosplaying as Elsa (or Ice King). \n\nIDENTITY:\n- Keep user\'s face but stylized in Disney 3D animation style.\n\nOUTFIT:\n- Sparkling ice blue gown/tunic.\n\nACTION:\n- Raising hands to cast a massive ice castle or snowflakes.\n- Background: North Mountain, aurora borealis, magical ice fractals. \n- Cool blue and purple tones.',
    category: 'animation',
    previewColor: 'from-cyan-300 to-blue-600',
    previewImage: 'https://images.unsplash.com/photo-1548263594-a71c65f45056?q=80&w=400',
    styleKeywords: 'Disney 3D style, magical particles, subsurface scattering, glowing ice effects.'
  },
  {
    id: 'your_name',
    title: '你的名字 (Your Name)',
    year: '2016',
    description: '阶梯上的相遇，黄昏之时，新海诚的光影。',
    prompt: 'Iconic movie poster shot for Your Name (Kimi no Na wa). The character is standing on the red staircase. \n\nIDENTITY:\n- Keep user\'s face but stylized in Makoto Shinkai anime style.\n\nACTION:\n- Turning back to look at someone (viewer perspective).\n- Background: Tokyo skyline combined with rural Itomori lake. \n- "Magic Hour" lighting (Kataware-doki), lens flares, beautiful clouds, high detail.',
    category: 'animation',
    previewColor: 'from-blue-500 to-pink-400',
    previewImage: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=400',
    styleKeywords: 'Makoto Shinkai style, hyper-realistic backgrounds, lens flares, vibrant sunset colors, emotional.'
  },
  {
    id: 'arcane',
    title: '双城之战 (Arcane)',
    year: '2021',
    description: '皮城与祖安，海克斯科技，油画质感与朋克美学。',
    prompt: 'Iconic movie poster shot for Arcane (League of Legends). The character is the USER in the world of Piltover/Zaun. \n\nIDENTITY:\n- Keep user\'s face structure.\n- Apply the distinct "Arcane" painted texture style to the skin and clothes.\n\nOUTFIT:\n- Steampunk or Chem-punk attire (Leather, brass, neon tubes).\n\nACTION:\n- Holding a Hextech weapon or blue crystal.\n- Background: Neon graffiti of Zaun or pristine gold of Piltover. Dramatic lighting.',
    category: 'animation',
    previewColor: 'from-purple-900 to-pink-600',
    previewImage: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=400',
    styleKeywords: 'Arcane style, thick brushstrokes, painted texture, cinematic lighting, steampunk.'
  },

  // --- Games (Restored) ---
  {
    id: 'god_of_war',
    title: '战神 (God of War)',
    year: '2018',
    description: '北欧神话，父与子，利维坦之斧。',
    prompt: 'Iconic game poster for God of War (2018).',
    category: 'game',
    previewColor: 'from-slate-700 to-blue-200',
    previewImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400', 
    styleKeywords: 'Unreal Engine 5 style, hyper-realistic skin texture, nordic winter atmosphere, cinematic lighting.',
    roles: [
      {
        id: 'kratos',
        name: '奎托斯 (Kratos)',
        description: '斯巴达之魂，苍白皮肤，红色纹身，愤怒的咆哮。',
        prompt: 'The character is the USER cosplaying as Kratos. \n\nCOMPOSITION:\n- The USER is Kratos (Pale skin, red tattoo).\n- **Atreus (The Boy)** is standing beside him with his bow drawn.\n\nACTION:\n- Screaming in RAGE, intense fierce expression.\n- TIGHTLY GRIPPING the Leviathan Axe in the right hand (glowing blue frost magic).\n- Standing in snowy woods.',
        previewImage: 'https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=400'
      },
      {
        id: 'atreus',
        name: '阿特柔斯 (Atreus)',
        description: '少年射手，弓箭在手，成长的试炼。',
        prompt: 'The character is the USER cosplaying as Atreus. \n\nCOMPOSITION:\n- The USER is Atreus drawing his bow.\n- **Kratos (God of War)** is looming large in the background protecting him.\n\nACTION:\n- Determined expression.\n- Background: Snowy mountains.',
        previewImage: 'https://images.unsplash.com/photo-1553531087-b25c0b9a3bf7?q=80&w=400'
      }
    ]
  },
  {
    id: 'mario',
    title: '超级马里奥 (Super Mario)',
    year: '1985',
    description: '水管工，蘑菇王国，拯救公主的冒险。',
    prompt: 'Iconic game poster for Super Mario. The character is the USER cosplaying as Mario. \n\nIDENTITY:\n- Keep user\'s face.\n- Add mustache (if suitable).\n\nOUTFIT:\n- Wearing red cap with "M" and blue overalls.\n\nACTION:\n- Jumping in the air with a fist up (hitting a block).\n- Background: Vibrant Mushroom Kingdom with green pipes and clouds. \n- Style: High fidelity CGI render (Movie style).',
    category: 'game',
    previewColor: 'from-red-600 to-blue-500',
    previewImage: 'https://images.unsplash.com/photo-1612404730960-5c715747261b?q=80&w=400',
    styleKeywords: 'CGI render, vibrant primary colors, Nintendo style, fun atmosphere.'
  },
  {
    id: 'zelda',
    title: '塞尔达传说 (Legend of Zelda)',
    year: '2017',
    description: '海拉鲁大陆，勇者林克，大师之剑。',
    prompt: 'Iconic game poster for Legend of Zelda: Breath of the Wild.',
    category: 'game',
    previewColor: 'from-green-600 to-blue-400',
    previewImage: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?q=80&w=400',
    styleKeywords: 'Cel-shaded anime style mixed with realism, soft lighting, vast landscape.',
    roles: [
      {
        id: 'link',
        name: '林克 (Link)',
        description: '海拉鲁勇者，手持大师之剑与盾，戴绿帽子。',
        prompt: 'The character is the USER cosplaying as Link. \n\nCOMPOSITION:\n- The USER is Link.\n- **Princess Zelda** is visible in the background or as a spirit.\n\nOUTFIT:\n- Wearing the Champion\'s Tunic (Blue) OR Classic Green Tunic.\n- MUST WEAR THE ICONIC GREEN POINTED CAP.\n\nACTION:\n- Holding the MASTER SWORD in right hand and HYLIAN SHIELD in left hand.\n- Background: Hyrule field with Silent Princess flowers.',
        previewImage: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?q=80&w=400'
      },
      {
        id: 'zelda_princess',
        name: '塞尔达 (Zelda)',
        description: '海拉鲁公主，纯白祭祀长裙，圣泉祈祷。',
        prompt: 'The character is the USER cosplaying as Princess Zelda. \n\nCOMPOSITION:\n- The USER is Zelda praying.\n- **Link (The Hero)** is guarding her in the background with sword drawn.\n\nOUTFIT:\n- Wearing the WHITE CEREMONIAL PRAYER DRESS.\n\nACTION:\n- Standing in a Sacred Spring (water around ankles).\n- Hands clasped in prayer, glowing with golden sealing power.',
        previewImage: 'https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=400'
      }
    ]
  },
  {
    id: 'yakuza',
    title: '如龙 (Yakuza)',
    year: '2005',
    description: '神室町之龙，极道仁义，背后的纹身。',
    prompt: 'Iconic game poster for Yakuza (Ryu Ga Gotoku). The character is the USER cosplaying as Kazuma Kiryu. \n\nIDENTITY:\n- Keep user\'s face.\n- Stern, serious expression.\n\nOUTFIT:\n- Grey suit with red shirt, collar popped.\n\nACTION:\n- Ripping off the shirt/jacket to reveal a DRAGON TATTOO on the back (or looking over shoulder showing it).\n- Background: Neon signs of Kamurocho (Tokyo nightlife).',
    category: 'game',
    previewColor: 'from-red-800 to-gray-900',
    previewImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=400',
    styleKeywords: 'Japanese noir, neon lights, dramatic shadows, intense masculinity.'
  },
  {
    id: 'last_of_us',
    title: '最后生还者 (The Last of Us)',
    year: '2013',
    description: '末世求生，乔尔与艾莉，吉他与循声者。',
    prompt: 'Iconic game poster for The Last of Us.',
    category: 'game',
    previewColor: 'from-green-800 to-gray-700',
    previewImage: 'https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?q=80&w=400',
    styleKeywords: 'Post-apocalyptic, overgrown nature, gritty realism, emotional lighting.',
    roles: [
      {
        id: 'joel',
        name: '乔尔 (Joel)',
        description: '幸存者，格子衬衫，沧桑的父亲。',
        prompt: 'The character is the USER cosplaying as Joel Miller. \n\nCOMPOSITION:\n- The USER is Joel holding a weapon.\n- **Ellie (young girl likeness)** is crouching behind him for safety.\n\nACTION:\n- Protecting someone.\n- Background: Overgrown city ruins.',
        previewImage: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=400'
      },
      {
        id: 'ellie',
        name: '艾莉 (Ellie)',
        description: '免疫者，纹身，弹着吉他。',
        prompt: 'The character is the USER cosplaying as Ellie. \n\nCOMPOSITION:\n- The USER is Ellie playing guitar.\n- **Joel Miller** is sitting nearby keeping watch.\n\nACTION:\n- Playing an acoustic guitar under a tree OR holding a switchblade.\n- Background: Forest or abandoned house.',
        previewImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400'
      }
    ]
  },
  {
    id: 'uncharted',
    title: '神秘海域 (Uncharted)',
    year: '2007',
    description: '宝藏猎人，德雷克，惊险的遗迹探险。',
    prompt: 'Iconic game poster for Uncharted. The character is the USER cosplaying as Nathan Drake. \n\nIDENTITY:\n- Keep user\'s face.\n- Look sweaty, dirty, half-tucked shirt.\n\nOUTFIT:\n- Henley shirt, holster, cargo pants.\n\nACTION:\n- Hanging off a cliff edge or holding a torch in a dark cave.\n- Background: Ancient ruins or jungle. Adventure vibe.',
    category: 'game',
    previewColor: 'from-yellow-600 to-green-800',
    previewImage: 'https://images.unsplash.com/photo-1508881598441-324f3974994b?q=80&w=400',
    styleKeywords: 'Action adventure, warm lighting, high contrast, cinematic blockbuster style.'
  },

  // --- Sci-Fi / Action (Restored) ---
  {
    id: 'terminator_2',
    title: '终结者2 (Terminator 2)',
    year: '1991',
    description: '俯拍视角，手抓铁链，缓缓沉入熔炉，竖起大拇指。',
    prompt: 'Iconic movie poster shot for Terminator 2: Judgment Day. \n\nVIEWPOINT: HIGH-ANGLE SHOT looking down at the character. \n\nIDENTITY:\n- The character is the USER cosplaying as T-800.\n- Face is HALF BATTLE-DAMAGED (exposed metal skull/red eye).\n- Looking UP at the camera with a stoic expression.\n\nACTION:\n- Body is submerged up to chest in glowing orange MOLTEN STEEL.\n- One hand is holding onto a thick industrial CHAIN.\n- The other hand is raised high, giving a THUMBS UP.\n\nATMOSPHERE:\n- Intense orange glow, industrial factory, emotional finale.',
    category: 'scifi',
    previewColor: 'from-orange-600 to-gray-900',
    previewImage: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=400',
    styleKeywords: 'Industrial, molten steel, battle damage, dramatic, 90s action.'
  },
  {
    id: 'jurassic_park',
    title: '侏罗纪公园 (Jurassic Park)',
    year: '1993',
    description: '暴雨夜，吉普车逃亡，后视镜里的霸王龙。',
    prompt: 'Iconic movie poster shot for Jurassic Park. \n\nACTION:\n- The user is driving a Jeep Wrangler in heavy rain.\n- Looking terrified into the REAR VIEW MIRROR.\n- In the mirror reflection (or directly behind), a T-REX is roaring and chasing the car.\n- Lighting: Dark rainy night, car headlights, flares.\n- Atmosphere: High tension, monster horror.',
    category: 'scifi',
    previewColor: 'from-green-900 to-yellow-600',
    previewImage: 'https://images.unsplash.com/photo-1518182170546-0766be6f5a56?q=80&w=400',
    styleKeywords: 'Rain effects, creature feature, Spielberg lighting, suspense.'
  },
  {
    id: 'star_wars',
    title: '星球大战 (Star Wars)',
    year: '1977',
    description: '光剑对决，原力觉醒，绝地与西斯的宿命。',
    prompt: 'Iconic movie poster shot for Star Wars.',
    category: 'scifi',
    previewColor: 'from-blue-600 to-red-600',
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400',
    styleKeywords: 'Space opera, glowing lightsabers, stars, dramatic duel.',
    roles: [
      {
        id: 'jedi',
        name: '绝地武士 (Jedi)',
        description: '手持蓝色/绿色光剑，使用原力，守护和平。',
        prompt: 'The character is the USER cosplaying as a Jedi Knight. \n\nCOMPOSITION:\n- The USER is a Jedi with a BLUE/GREEN lightsaber.\n- **Darth Vader** is looming in the background, menacingly.\n\nACTION:\n- Reaching out hand to use the Force.\n- Background: Death Star interior or forest of Endor.',
        previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400'
      },
      {
        id: 'sith',
        name: '西斯武士 (Sith)',
        description: '手持红色光剑，黑暗面，强大的力量。',
        prompt: 'The character is the USER cosplaying as a Sith Lord. \n\nCOMPOSITION:\n- The USER is a Sith with a RED lightsaber.\n- **Luke Skywalker** is standing opposite them ready to fight.\n\nACTION:\n- Holding a CRACKLING RED LIGHTSABER.\n- Lightning shooting from fingers (optional).\n- Background: Mustafar lava or Star Destroyer bridge.',
        previewImage: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=400'
      }
    ]
  },
  {
    id: 'avengers',
    title: '复仇者联盟 (The Avengers)',
    year: '2012',
    description: '英雄集结，终局之战，对抗灭霸。',
    prompt: 'Iconic movie poster for The Avengers.',
    category: 'action',
    previewColor: 'from-blue-700 to-red-600',
    previewImage: 'https://images.unsplash.com/photo-1531259683007-016a7b629feb?q=80&w=400',
    styleKeywords: 'Marvel style, blockbuster VFX, heroic poses, dynamic composition.',
    roles: [
      {
        id: 'iron_man',
        name: '钢铁侠 (Iron Man)',
        description: '纳米战甲，飞行，掌心炮。',
        prompt: 'The character is the USER cosplaying as Iron Man (Tony Stark). \n\nCOMPOSITION:\n- The USER is Iron Man (helmet open) flying in the center.\n- **Captain America, Thor, and Hulk** are fighting in the background.\n\nOUTFIT:\n- Wearing Iron Man Mark 85 armor.\n\nACTION:\n- Flying or firing a repulsor blast.\n- Background: Space battle or destroyed Avengers HQ.',
        previewImage: 'https://images.unsplash.com/photo-1626278664285-f796b96180af?q=80&w=400'
      },
      {
        id: 'cap',
        name: '美国队长 (Captain America)',
        description: '振金盾牌，雷神之锤，复仇者集结。',
        prompt: 'The character is the USER cosplaying as Captain America. \n\nCOMPOSITION:\n- The USER is Captain America.\n- **Iron Man, Thor and Black Widow** are standing beside him in a team line-up.\n\nOUTFIT:\n- Scale mail armor suit.\n\nACTION:\n- Holding the SHIELD (broken or whole) and MJOLNIR hammer.\n- Gritting teeth, battle damaged.\n- Background: Endgame battlefield.',
        previewImage: 'https://images.unsplash.com/photo-1592484869392-e4c364ad4e7a?q=80&w=400'
      }
    ]
  },
  {
    id: 'face_off',
    title: '夺面双雄 (Face/Off)',
    year: '1997',
    description: '变脸，双雄对决，吴宇森暴力美学，双枪与白鸽。',
    prompt: 'Iconic movie poster for Face/Off (John Woo style).',
    category: 'action',
    previewColor: 'from-blue-900 to-purple-900',
    previewImage: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=400',
    styleKeywords: 'John Woo aesthetic, flying doves, sparks, slow motion feel, dual pistols, intense rivalry.',
    roles: [
      {
        id: 'castor_troy',
        name: 'Castor Troy (Villain)',
        description: '疯狂的神父装，黄金双枪，邪魅狂狷。',
        prompt: 'The character is the USER cosplaying as Castor Troy (Nic Cage style). \n\nCOMPOSITION:\n- The USER (Castor Troy) is holding dual pistols.\n- **Sean Archer (John Travolta likeness)** is visible in the reflection or split screen composition.\n\nIDENTITY:\n- Keep user\'s face. Expression: Maniacal, wide-eyed crazy laugh.\n\nOUTFIT:\n- Wearing a black priest outfit or shiny suit.\n\nACTION:\n- Holding TWO GOLD PLATED 1911 PISTOLS aimed forward.\n- Background: Church with white doves flying everywhere and sparks flying.',
        previewImage: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=400'
      },
      {
        id: 'sean_archer',
        name: 'Sean Archer (Hero)',
        description: 'FBI探员，西装革履，为了正义的复仇。',
        prompt: 'The character is the USER cosplaying as Sean Archer (Travolta style). \n\nCOMPOSITION:\n- The USER (Sean Archer) is pointing a gun.\n- **Castor Troy (Nicolas Cage likeness)** is visible in a mirror reflection or split screen.\n\nIDENTITY:\n- Keep user\'s face. Expression: Intense, determined, painful.\n\nOUTFIT:\n- Wearing a grey business suit and tie.\n\nACTION:\n- Pointing a gun at a mirror reflection.\n- Background: High tech medical facility or hangar. Moody lighting.',
        previewImage: 'https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?q=80&w=400'
      }
    ]
  },
  
  // --- Chinese Classics (Restored) ---
  {
    id: 'crouching_tiger',
    title: '卧虎藏龙 (Crouching Tiger)',
    year: '2000',
    description: '竹林之战，轻功飞跃，剑气纵横。',
    prompt: 'Iconic movie poster shot for Crouching Tiger, Hidden Dragon. The character is fighting in a bamboo forest. Wearing white or blue ancient Chinese martial arts robes. Balancing on top of green bamboo stalks. Holding a Jian sword (Green Destiny). Wuxia style, ethereal, misty.',
    category: 'action',
    useChineseTitle: true,
    previewColor: 'from-green-800 to-green-400',
    previewImage: 'https://images.unsplash.com/photo-1516573432619-6a639019d3ee?q=80&w=400',
    styleKeywords: 'Wuxia, bamboo forest, ethereal green, floating, wire fu.'
  },
  {
    id: 'in_the_mood_for_love',
    title: '花样年华 (In the Mood for Love)',
    year: '2000',
    description: '旗袍，西装，狭窄的弄堂，暧昧的灯光。',
    prompt: 'Iconic movie poster shot for In the Mood for Love (Wong Kar-wai). \n\nOUTFIT:\n- If Female: Wearing a floral Qipao/Cheongsam with high collar.\n- If Male: Wearing a sharp 60s suit and slicked hair.\n\nACTION:\n- Standing in a narrow Hong Kong alleyway or by a noodle stall.\n- Smoking (optional) or leaning against a wall.\n- Lighting: Moody red and green neon, heavy shadows, film grain, romantic melancholy.',
    category: 'romance',
    useChineseTitle: true,
    previewColor: 'from-red-900 to-yellow-800',
    previewImage: 'https://images.unsplash.com/photo-1517504262140-5d63f25d918a?q=80&w=400',
    styleKeywords: 'Wong Kar-wai style, saturated colors, shallow depth of field, emotional, vintage Hong Kong.'
  },
  {
    id: 'infernal_affairs',
    title: '无间道 (Infernal Affairs)',
    year: '2002',
    description: '天台对决，卧底警察，我是警察。',
    prompt: 'Iconic movie poster shot for Infernal Affairs.',
    category: 'action',
    useChineseTitle: true,
    previewColor: 'from-blue-900 to-gray-400',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400',
    styleKeywords: 'Cool blue filter, rooftop cityscape, minimalist, tension.',
    roles: [
      {
        id: 'yan',
        name: '陈永仁 (Yan)',
        description: '皮衣，胡茬，眼神忧郁的卧底。',
        prompt: 'The character is the USER cosplaying as Chen Yongren (Tony Leung). \n\nCOMPOSITION:\n- The USER (Yan) is holding a gun to his head (or pointing it).\n- **Lau Kin-ming (Andy Lau likeness)** is standing calmly in the background, watching.\n\nIDENTITY:\n- Keep user\'s face. Add stubble.\n\nOUTFIT:\n- Black leather jacket, unkempt hair.\n\nACTION:\n- Standing on a glass rooftop.\n- Expression: Conflicted, tragic.',
        previewImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400'
      },
      {
        id: 'ming',
        name: '刘建明 (Ming)',
        description: '西装革履，想做个好人的黑警。',
        prompt: 'The character is the USER cosplaying as Lau Kin-ming (Andy Lau). \n\nCOMPOSITION:\n- The USER (Ming) is standing in the foreground.\n- **Chen Yongren (Tony Leung likeness)** is visible in the reflection or background.\n\nIDENTITY:\n- Keep user\'s face. Clean shaven.\n\nOUTFIT:\n- Sharp black suit.\n\nACTION:\n- Standing stoically on a rooftop looking at the city.\n- Holding a gun behind back.\n- Expression: Cold, calculating.',
        previewImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400'
      }
    ]
  },
  {
    id: 'hero',
    title: '英雄 (Hero)',
    year: '2002',
    description: '漫天红叶，红衣剑客，为了天下。',
    prompt: 'Iconic movie poster shot for Hero (Zhang Yimou). The character is a sword master (Nameless or Broken Sword). Wearing flowing RED robes. Fighting in a whirlwind of falling YELLOW leaves. Holding a sword. Color palette: Intense Red and Gold. Composition: Wide shot, artistic, martial arts grace.',
    category: 'action',
    useChineseTitle: true,
    previewColor: 'from-red-600 to-yellow-500',
    previewImage: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=400',
    styleKeywords: 'Zhang Yimou aesthetic, dominant color theory (Red), falling leaves, poetic action.'
  },
  {
    id: 'grandmaster',
    title: '一代宗师 (The Grandmaster)',
    year: '2013',
    description: '雨夜，礼帽，咏春叶问，念念不忘必有回响。',
    prompt: 'Iconic movie poster shot for The Grandmaster. The character is Ip Man. Wearing a black traditional Tang suit and a white fedora hat. Fighting in heavy rain at night. Water splashing in slow motion around fists. Wing Chun pose. Lighting: Street lamps reflecting on wet ground, noir atmosphere.',
    category: 'action',
    useChineseTitle: true,
    previewColor: 'from-black to-gray-600',
    previewImage: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=400',
    styleKeywords: 'Wong Kar-wai kung fu, high speed photography, rain texture, noir lighting.'
  },

  // --- Other Classics (Restored) ---
  {
    id: 'psycho',
    title: '惊魂记 (Psycho)',
    year: '1960',
    description: '贝茨旅馆，阴影中的轮廓，悬疑经典。',
    prompt: 'Iconic movie poster shot from Psycho. Black and white. The character is screaming in terror (Marion Crane) or standing menacingly in shadow (Norman Bates). High contrast lighting. Hitchcock suspense style.',
    category: 'classic',
    previewColor: 'from-gray-900 to-gray-500',
    previewImage: 'https://images.unsplash.com/photo-1463123081488-789f998ac9c4?q=80&w=400',
    styleKeywords: 'Hitchcockian, film noir, dutch angle, suspenseful shadow.'
  },
  {
    id: 'citizen_kane',
    title: '公民凯恩 (Citizen Kane)',
    year: '1941',
    description: '玫瑰花蕾，报业大亨，孤独的演讲。',
    prompt: 'Iconic movie poster shot from Citizen Kane. The character is Charles Foster Kane. Standing at a podium giving a speech with a giant poster of themselves behind them. Low angle shot. Black and white deep focus photography. Orson Welles style.',
    category: 'classic',
    previewColor: 'from-gray-800 to-black',
    previewImage: 'https://images.unsplash.com/photo-1541662999-52e85a034945?q=80&w=400',
    styleKeywords: 'Deep focus, low angle, german expressionism influence, dramatic.'
  },
  {
    id: 'sound_of_music',
    title: '音乐之声 (The Sound of Music)',
    year: '1965',
    description: '阿尔卑斯山，草地，歌声与自由。',
    prompt: 'Iconic movie poster shot for The Sound of Music. The character is Maria. Twirling in a green alpine meadow with arms out. Mountains in the background. Bright blue sky. Joyful, musical.',
    category: 'classic',
    previewColor: 'from-green-500 to-blue-400',
    previewImage: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=400',
    styleKeywords: 'Technicolor, alpine landscape, joyful, bright.'
  },
  {
    id: 'braveheart',
    title: '勇敢的心 (Braveheart)',
    year: '1995',
    description: '苏格兰高地，蓝白战漆，为了自由的呐喊。',
    prompt: 'Iconic movie poster shot for Braveheart. The character is William Wallace. Face painted half blue. Screaming "Freedom!". Wearing kilt and medieval armor. Holding a claymore sword. Background: Scottish highlands battle.',
    category: 'action',
    previewColor: 'from-blue-800 to-green-900',
    previewImage: 'https://images.unsplash.com/photo-1506353266980-943bc9622aa8?q=80&w=400',
    styleKeywords: 'Gritty war epic, face paint, historical drama, emotional.'
  },
  {
    id: 'alien',
    title: '异形 (Alien)',
    year: '1979',
    description: '太空深处，诺史莫号，没人能听到你的尖叫。',
    prompt: 'Iconic movie poster shot for Alien (1979). The character is Ripley. Wearing a green flight suit or white spacesuit. Holding a flamethrower or motion tracker. Sweaty, terrified expression. Dark, claustrophobic spaceship corridor (Nostromo). H.R. Giger biomechanical details in shadows.',
    category: 'scifi',
    previewColor: 'from-green-900 to-black',
    previewImage: 'https://images.unsplash.com/photo-1605218427306-02239c6e51e9?q=80&w=400',
    styleKeywords: 'Sci-fi horror, industrial grime, low key lighting, suspense.'
  },
  {
    id: 'ghostbusters',
    title: '捉鬼敢死队 (Ghostbusters)',
    year: '1984',
    description: '质子背包，连体工装，抓鬼专家。',
    prompt: 'Iconic movie poster shot for Ghostbusters. The character is a Ghostbuster. Wearing the tan jumpsuit with the logo. Wearing a Proton Pack. Firing a proton stream (orange lightning). Background: NYC street with green slime or Stay Puft Marshmallow Man.',
    category: 'classic',
    previewColor: 'from-gray-300 to-red-500',
    previewImage: 'https://images.unsplash.com/photo-1517604931442-71053e3e2642?q=80&w=400',
    styleKeywords: '80s comedy sci-fi, proton beams, urban fantasy.'
  },
  {
    id: 'django',
    title: '被解救的姜戈 (Django Unchained)',
    year: '2012',
    description: '天鹅绒西装，墨镜，左轮手枪，复仇之路。',
    prompt: 'Iconic movie poster shot for Django Unchained. The character is Django. Wearing a bright BLUE or GREEN velvet suit with a ruffle shirt (or cowboy gear). Wearing round sunglasses. Holding a revolver. Background: Cotton field or explosion. Tarantino western style.',
    category: 'action',
    previewColor: 'from-green-700 to-blue-700',
    previewImage: 'https://images.unsplash.com/photo-1534960680480-e7ae627b03a6?q=80&w=400',
    styleKeywords: 'Spaghetti western, vibrant pop colors, stylized violence.'
  },
  {
    id: 'inception',
    title: '盗梦空间 (Inception)',
    year: '2010',
    description: '折叠的城市，陀螺，梦中梦。',
    prompt: 'Iconic movie poster shot for Inception. The character is Cobb. Wearing a suit. Standing on a street that is folding upwards 90 degrees into the sky. Spinning top totem on the ground. Deconstructivist architecture. Cool blue/grey tones.',
    category: 'scifi',
    previewColor: 'from-gray-700 to-blue-300',
    previewImage: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=400',
    styleKeywords: 'Surreal architecture, bending physics, cinematic realism.'
  },
  {
    id: 'john_wick',
    title: '疾速追杀 (John Wick)',
    year: '2014',
    description: '黑西装，铅笔，别动我的狗。',
    prompt: 'Iconic movie poster shot for John Wick. The character is John Wick. Wearing a black tactical suit. Long hair and beard. Holding a pistol (center axis relock stance). Background: Neon rain, continental hotel, purple and blue lighting. Intense, dangerous.',
    category: 'action',
    previewColor: 'from-purple-900 to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400',
    styleKeywords: 'Neo-noir, neon lighting, tactical action, sleek.'
  },
  {
    id: 'dark_knight',
    title: '蝙蝠侠：黑暗骑士 (The Dark Knight)',
    year: '2008',
    description: '哥谭骑士，小丑，为何如此严肃？',
    prompt: 'Iconic movie poster shot for The Dark Knight. The character is Batman. Standing on a skyscraper edge overlooking Gotham at night. Wearing the tactical Batsuit. Cape flowing. Blue moody lighting.',
    category: 'action',
    previewColor: 'from-black to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?q=80&w=400',
    styleKeywords: 'Nolan style, realistic superhero, dark and gritty.'
  },
  {
    id: 'wonder_woman',
    title: '神奇女侠 (Wonder Woman)',
    year: '2017',
    description: '天堂岛公主，真言套索，无人区冲锋。',
    prompt: 'Iconic movie poster shot for Wonder Woman. The character is Diana. Wearing the red and gold armor. Crossing bracelets to create a shockwave OR holding the glowing lasso. Background: WWI battlefield trenches. Heroic, powerful, warm lighting.',
    category: 'action',
    previewColor: 'from-red-700 to-gold',
    previewImage: 'https://images.unsplash.com/photo-1620021676880-7b567b5fa383?q=80&w=400',
    styleKeywords: 'Mythological superhero, war epic, vibrant gold and red.'
  },
  {
    id: 'deadpool',
    title: '死侍 (Deadpool)',
    year: '2016',
    description: '红衣贱嘴，打破第四面墙，墨西哥卷饼。',
    prompt: 'Iconic movie poster shot for Deadpool. The character is Deadpool. Wearing the red and black spandex suit. Doing a funny or sexy pose (breaking the fourth wall). Holding guns or katanas. "Maximum Effort".',
    category: 'action',
    previewColor: 'from-red-600 to-black',
    previewImage: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=400',
    styleKeywords: 'Irreverent, comic book accuracy, gritty texture.'
  },
  {
    id: 'die_hard',
    title: '虎胆龙威 (Die Hard)',
    year: '1988',
    description: '通风管道，光脚，欢迎来到中富大厦。',
    prompt: 'Iconic movie poster shot for Die Hard. The character is John McClane. Wearing a dirty white tank top. Crawling through a silver air vent holding a lighter. Sweaty, grimy face. 80s action movie lighting.',
    category: 'action',
    previewColor: 'from-gray-500 to-blue-800',
    previewImage: 'https://images.unsplash.com/photo-1584285419826-f76104d493a3?q=80&w=400',
    styleKeywords: 'Claustrophobic, gritty 80s action, high contrast.'
  },
  {
    id: 'gladiator',
    title: '角斗士 (Gladiator)',
    year: '2000',
    description: '罗马斗兽场，马克西穆斯，死神对你微笑。',
    prompt: 'Iconic movie poster shot for Gladiator. The character is Maximus. Wearing Roman general armor and fur. Walking through a wheat field brushing hands against grain OR standing in the Colosseum. Holding a gladius sword. "Are you not entertained?". Golden hour lighting.',
    category: 'action',
    previewColor: 'from-yellow-700 to-orange-800',
    previewImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=400',
    styleKeywords: 'Epic historical drama, golden haze, detailed armor.'
  },
  {
    id: 'mission_impossible',
    title: '碟中谍 (Mission: Impossible)',
    year: '1996',
    description: '悬吊潜入，汤姆·克鲁斯，不可能的任务。',
    prompt: 'Iconic movie poster shot for Mission: Impossible. The character is Ethan Hunt. Suspended horizontally by wires just inches above a white pressure-sensitive floor. Wearing black tactical gear. Sweat dripping. High tension.',
    category: 'action',
    previewColor: 'from-gray-900 to-blue-500',
    previewImage: 'https://images.unsplash.com/photo-1454522485368-874259837a77?q=80&w=400',
    styleKeywords: 'Spy thriller, clean tech aesthetic, suspense.'
  },
  {
    id: 'indiana_jones',
    title: '夺宝奇兵 (Indiana Jones)',
    year: '1981',
    description: '牛仔帽，皮鞭，神庙逃亡。',
    prompt: 'Iconic movie poster shot for Indiana Jones. The character is Indy. Wearing a fedora hat and leather jacket. Holding a whip and a golden idol. Running from a giant boulder or standing in a dusty tomb. Adventure lighting.',
    category: 'action',
    previewColor: 'from-yellow-600 to-orange-700',
    previewImage: 'https://images.unsplash.com/photo-1544965850-6f8a627a8c7f?q=80&w=400',
    styleKeywords: 'Pulp adventure, warm dusty tones, drew struzan style.'
  }
];
