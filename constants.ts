
import { MovieScene } from './types';

export const MOVIE_SCENES: MovieScene[] = [
  // --- Top Classics ---
  {
    id: 'titanic',
    title: '泰坦尼克号 (Titanic)',
    year: '1997',
    description: '永不沉没的巨轮，夕阳下的船头，跨越阶级的爱恋。',
    prompt: 'Iconic movie poster shot for Titanic. The bow of the ship at sunset.',
    category: 'classic', 
    previewColor: 'from-blue-900 to-orange-400',
    previewImage: 'https://images.unsplash.com/photo-1500077423678-25eead48513a?q=80&w=400',
    posterFont: 'Classic Trajan Bold font, Metallic Gold color with a sharp bevel, steel blue outline. Elegant and epic.',
    roles: [
      {
        id: 'jack_role',
        name: 'Jack',
        description: '穷画家，站在Rose身后，扶着她的腰，在船头迎风飞翔。',
        prompt: 'The character is the USER cosplaying as Jack Dawson. COMPOSITION: The USER (Jack) is standing BEHIND Rose at the bow of the ship. Rose (likeness of Kate Winslet) is standing in front. ACTION: The iconic "Flying" pose. Sunset lighting.',
        previewImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400'
      },
      {
        id: 'rose_role',
        name: 'Rose',
        description: '贵族少女，张开双臂，感受飞翔的自由。',
        prompt: 'The character is the USER cosplaying as Rose. COMPOSITION: The USER (Rose) is standing at the bow, arms wide open. Jack (likeness of Leonardo DiCaprio) is standing closely BEHIND the user. ACTION: "Flying" pose. Wind blowing hair. Sunset lighting.',
        previewImage: 'https://images.unsplash.com/photo-1518382473168-a400a4007b81?q=80&w=400'
      }
    ]
  },
  {
    id: 'gone_with_the_wind',
    title: '乱世佳人 (Gone with the Wind)',
    year: '1939',
    description: '塔拉庄园的夕阳，烈火中的誓言，瑞德与斯嘉丽。',
    prompt: 'Iconic movie poster for Gone with the Wind. Oil painting style. Dramatic sunset and burning Atlanta in background. High drama and romance.',
    category: 'classic',
    previewColor: 'from-red-900 to-orange-600',
    previewImage: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=400',
    posterFont: 'Classic Serif font, Bold and Sweeping, Gold or Red with drop shadow.',
    roles: [
      {
        id: 'scarlett',
        name: 'Scarlett O\'Hara',
        description: '斯嘉丽，绿色天鹅绒裙，倔强与美丽。',
        prompt: 'Cosplay as Scarlett O\'Hara. Wearing the iconic green velvet curtain dress or a large period ballgown. Dramatic, passionate expression. Standing against a sunset or burning city background.',
        previewImage: 'https://images.unsplash.com/photo-1549845373-c8a742918836?q=80&w=400'
      },
      {
        id: 'rhett',
        name: 'Rhett Butler',
        description: '瑞德，深色礼服，迷人的坏笑。',
        prompt: 'Cosplay as Rhett Butler. Wearing a vintage 1860s suit and cravat. Thin pencil moustache. Smirking confident expression. Holding a hat. Classic Hollywood lighting.',
        previewImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400'
      }
    ]
  },
  {
    id: 'shawshank',
    title: '肖申克的救赎 (Shawshank)',
    year: '1994',
    description: '雷雨夜，张开双臂，拥抱自由。',
    prompt: 'Iconic movie poster shot from The Shawshank Redemption. The character is Andy Dufresne. Shirtless, arms raised high to the sky in pouring rain. Lightning flash illuminating the scene. Expression of pure ecstasy and freedom. Cinematic blue tones.',
    category: 'classic', 
    previewColor: 'from-slate-800 to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=400',
    posterFont: 'Serif font (Garamond style), White color, widely spaced (kerning), classic and understated.'
  },
  {
    id: 'forrest_gump',
    title: '阿甘正传 (Forrest Gump)',
    year: '1994',
    description: '坐在长椅上，手拿巧克力盒，人生就像一盒巧克力。',
    prompt: 'Iconic movie poster shot from Forrest Gump. The character is sitting on a park bench. Wearing a light beige suit and checkered shirt. A suitcase and a box of chocolates next to them. White feather floating. Savannah bus stop background.',
    category: 'classic', 
    previewColor: 'from-sky-300 to-green-300',
    previewImage: 'https://images.unsplash.com/photo-1505537385966-267323878b27?q=80&w=400',
    posterFont: 'Fenice-like font, clean Blue or Black color, placed simply at the top.'
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
    styleKeywords: 'Classic 1950s Hollywood, Black and White, vintage aesthetics.',
    posterFont: 'Vintage 50s Script font (Brush Script), Bright Red or White text popping against B&W image.',
    roles: [
      {
        id: 'joe',
        name: 'Joe',
        description: '穿着西装，骑着Vespa摩托车，潇洒帅气。',
        prompt: 'The character is Joe Bradley (Gregory Peck style). COMPOSITION: The USER is driving the vintage Vespa. Princess Ann (Audrey Hepburn likeness) is sitting behind. ACTION: Driving past the Colosseum. B&W.',
        previewImage: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=400'
      },
      {
        id: 'ann',
        name: 'Princess Ann',
        description: '白衬衫，长裙，坐在摩托车后座，俏皮可爱。',
        prompt: 'The character is Princess Ann (Audrey Hepburn style). COMPOSITION: The USER is sitting behind Joe Bradley (Gregory Peck likeness) on a Vespa. ACTION: Riding through Roman streets. B&W.',
        previewImage: 'https://images.unsplash.com/photo-1490334800361-92b1a62961d3?q=80&w=400'
      }
    ]
  },
  {
    id: 'godfather',
    title: '教父 (The Godfather)',
    year: '1972',
    description: '黑礼服，红玫瑰，不仅是黑帮，更是家族的责任。',
    prompt: 'Iconic movie poster shot from The Godfather. The character is Don Corleone. Wearing a black tuxedo with a red rose on the lapel. Sitting in a dark room. Dramatic top-down lighting. Holding a cat.',
    category: 'classic',
    previewColor: 'from-black to-red-900',
    previewImage: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=400',
    posterFont: 'The "Puppeteer" logo font (Gothic), White/Silver text, minimalist.'
  },

  // --- 80s/90s Classics ---
  {
    id: 'blade_runner',
    title: '银翼杀手 (Blade Runner)',
    year: '1982',
    description: '雨夜，霓虹，仿生人与折纸独角兽。',
    prompt: 'Iconic movie poster for Blade Runner (1982). Deckard. Brown trench coat. Holding a sci-fi blaster. Neon-lit, rainy Cyberpunk city street. Noir atmosphere.',
    category: 'scifi',
    previewColor: 'from-blue-900 to-pink-600',
    previewImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400',
    posterFont: 'Neon Red outline font, futuristic and bold, glowing effect.'
  },
  {
    id: 'top_gun',
    title: '壮志凌云 (Top Gun)',
    year: '1986',
    description: '飞行员夹克，雷朋墨镜，速度与激情。',
    prompt: 'Iconic movie poster for Top Gun. Maverick. Must wear AVIATOR SUNGLASSES. Leather flight jacket. Standing on aircraft carrier at sunset. F-14 Tomcat background.',
    category: 'action',
    previewColor: 'from-orange-500 to-blue-700',
    previewImage: 'https://images.unsplash.com/photo-1506157786151-b8491531f436?q=80&w=400',
    posterFont: 'Military stencil font, Gradient from Navy Blue to Red.'
  },
  {
    id: 'back_to_future',
    title: '回到未来 (Back to the Future)',
    year: '1985',
    description: '德罗宁跑车，火焰车辙，穿越时空的冒险。',
    prompt: 'Iconic movie poster for Back to the Future. Marty McFly. Checking watch in panic. Next to DeLorean DMC-12 with fire trails. Lightning striking clock tower in background.',
    category: 'scifi',
    previewColor: 'from-yellow-400 to-orange-600',
    previewImage: 'https://images.unsplash.com/photo-1542223126-78c66e792c3a?q=80&w=400',
    posterFont: 'Slanted Futuristic font, Gradient Orange/Yellow with Blue outline.'
  },
  {
    id: 'better_tomorrow',
    title: '英雄本色 (A Better Tomorrow)',
    year: '1986',
    description: '风衣，墨镜，双枪，钞票点烟。',
    prompt: 'Iconic movie poster for A Better Tomorrow. Mark Lee (Chow Yun-Fat style). Wearing long trench coat and sunglasses. Lighting a cigarette with a burning banknote. Holding dual Beretta pistols. Hong Kong neon night background.',
    category: 'action',
    previewColor: 'from-slate-700 to-yellow-600',
    previewImage: 'https://images.unsplash.com/photo-1555662703-97818be77b21?q=80&w=400',
    useChineseTitle: true,
    posterFont: 'Bold Chinese Calligraphy, Red or White, gritty texture.'
  },
  {
    id: 'god_of_gamblers',
    title: '赌神 (God of Gamblers)',
    year: '1989',
    description: '大背头，转玉戒指，摸底牌，赌坛霸气。',
    prompt: 'Iconic movie poster for God of Gamblers. Ko Chun. Slicked back hair. Wearing a tuxedo. Sitting at a green poker table. Holding a playing card (Ace of Spades). Jade ring on pinky finger. Pile of cash/chips. Chocolate bar on table.',
    category: 'action',
    previewColor: 'from-green-900 to-black',
    previewImage: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=400',
    useChineseTitle: true,
    posterFont: 'Shiny Gold Chinese Serif font, embossed effect, luxurious.'
  },
  {
    id: 'chinese_odyssey',
    title: '大话西游 (A Chinese Odyssey)',
    year: '1995',
    description: '至尊宝与紫霞，城墙上的对视，戴上金箍的宿命。',
    prompt: 'Iconic movie poster for A Chinese Odyssey. Scene: The Monkey King (User) carrying the Golden Cudgel, looking back at Zixia Fairy on the desert city wall. Melancholic sunset. Mixing ancient Chinese armor with ragged clothes.',
    category: 'classic',
    previewColor: 'from-yellow-700 to-red-900',
    previewImage: 'https://images.unsplash.com/photo-1542259682-965306d871b5?q=80&w=400',
    useChineseTitle: true,
    posterFont: 'Ancient Chinese Calligraphy, Weathered Gold color, mythical style.'
  },

  // --- Sci-Fi ---
  {
    id: 'avatar',
    title: '阿凡达 (Avatar)',
    year: '2009',
    description: '潘多拉星球，纳威人，骑着斑溪兽翱翔。',
    prompt: 'Iconic movie poster for Avatar. The USER as a Na\'vi avatar. Blue skin, bioluminescent dots, yellow eyes. Riding a Banshee (Ikran) over floating mountains.',
    category: 'scifi',
    previewColor: 'from-blue-600 to-cyan-400',
    previewImage: 'https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&w=400',
    styleKeywords: 'Bioluminescence, lush jungle, floating islands, alien flora.',
    posterFont: 'Papyrus font (or similar tribal style), Glowing Cyan/White.'
  },
  {
    id: 'interstellar',
    title: '星际穿越 (Interstellar)',
    year: '2014',
    description: '宇航服，玉米地，黑洞前的守望。',
    prompt: 'Iconic movie poster for Interstellar. Cooper. Wearing white NASA spacesuit. Standing on an alien water planet with giant waves, OR standing in front of the Gargantua black hole.',
    category: 'scifi',
    previewColor: 'from-black to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400',
    posterFont: 'Thin, minimalist Sans-Serif font, White color, widely spaced.'
  },
  {
    id: 'matrix',
    title: '黑客帝国 (The Matrix)',
    year: '1999',
    description: '墨镜，黑风衣，躲避子弹。',
    prompt: 'Iconic movie poster for The Matrix. Neo. Wearing long black leather coat and small black sunglasses. Stopping bullets in mid-air (The One). Green digital rain code background.',
    category: 'scifi',
    previewColor: 'from-black to-green-600',
    previewImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400',
    posterFont: 'Digital Matrix Code font, Glowing Green, glitch effect.'
  },
  {
    id: 'star_wars',
    title: '星球大战 (Star Wars)',
    year: '1977',
    description: '光剑对决，原力觉醒。',
    prompt: 'Iconic movie poster for Star Wars. Space opera style. Death Star in background.',
    category: 'scifi',
    previewColor: 'from-blue-900 to-purple-800',
    previewImage: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=400',
    posterFont: 'Star Wars Outline font, Yellow with black stroke, receding into distance.',
    roles: [
      {
        id: 'jedi',
        name: 'Jedi Knight',
        description: '手持蓝色光剑，绝地长袍。',
        prompt: 'The character is a Jedi Knight. Wearing beige/brown robes. Holding an ignited BLUE lightsaber. Ready for combat.',
        previewImage: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?q=80&w=400'
      },
      {
        id: 'sith',
        name: 'Sith Lord',
        description: '手持红色光剑，黑暗兜帽。',
        prompt: 'The character is a Sith Lord. Wearing dark black robes and hood. Holding an ignited RED lightsaber with crossguard. Dark energy.',
        previewImage: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=400'
      }
    ]
  },
  {
    id: 'jurassic_park',
    title: '侏罗纪公园 (Jurassic Park)',
    year: '1993',
    description: '暴雨夜，吉普车，后视镜里的霸王龙。',
    prompt: 'Iconic movie poster for Jurassic Park. Scene: Night time, heavy rain. The USER is driving a Jurassic Park Jeep Wrangler. Looking into the side mirror in terror. A T-Rex is chasing the car, visible in the mirror or rear window.',
    category: 'scifi',
    previewColor: 'from-green-900 to-yellow-900',
    previewImage: 'https://images.unsplash.com/photo-1504197885-608846e4c2c5?q=80&w=400',
    posterFont: 'Tribal font with Red outline and Yellow fill, skeletal dinosaur logo nearby.'
  },
  {
    id: 'terminator_2',
    title: '终结者2 (Terminator 2)',
    year: '1991',
    description: '手抓铁链，缓缓降入熔炉，竖起大拇指做最后的告别。',
    prompt: 'Iconic movie poster for Terminator 2. HIGH-ANGLE SHOT looking down. The USER (as T-800) is holding onto a thick industrial chain, lowering body into molten steel. Battle damaged face. One arm raised high giving the Thumbs Up sign.',
    category: 'scifi',
    previewColor: 'from-slate-800 to-orange-600',
    previewImage: 'https://images.unsplash.com/photo-1535083252457-6080fe29be45?q=80&w=400',
    posterFont: 'Metallic Steel font with Blue laser sheen, sharp and industrial.'
  },
  {
    id: 'alien',
    title: '异形 (Alien)',
    year: '1979',
    description: '太空船走廊，抱脸虫，黑暗中的恐惧。',
    prompt: 'Iconic movie poster for Alien. Ripley. Wearing Nostromo flight suit. Holding a flamethrower. Dark industrial spaceship corridor. Xenomorph shadow or egg in background.',
    category: 'scifi',
    previewColor: 'from-green-900 to-black',
    previewImage: 'https://images.unsplash.com/photo-1533230916672-0f1882d2eb57?q=80&w=400',
    posterFont: 'Spaced out Sans-Serif font, Neon Green or White, eerie.'
  },

  // --- Action ---
  {
    id: 'john_wick',
    title: '疾速追杀 (John Wick)',
    year: '2014',
    description: '黑色西装，战术持枪，雨夜霓虹。',
    prompt: 'Iconic movie poster for John Wick. The user is John Wick. Wearing a black tactical suit. Long hair, beard. Holding a pistol (center axis relock stance). Rain soaked. Neon purple and blue background lighting.',
    category: 'action',
    previewColor: 'from-purple-900 to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1514489024720-70020e98086c?q=80&w=400',
    posterFont: 'Clean Sans-Serif font, White/Grey, minimal spacing.'
  },
  {
    id: 'dark_knight',
    title: '蝙蝠侠：黑暗骑士 (The Dark Knight)',
    year: '2008',
    description: '哥谭市的守护者，站在摩天大楼边缘俯瞰城市。',
    prompt: 'Iconic movie poster for The Dark Knight. The user is Batman (unmasked or wearing cowl). Standing on the edge of a Gotham skyscraper at night. Blue moody lighting. Bat-signal in the sky.',
    category: 'action',
    previewColor: 'from-slate-900 to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?q=80&w=400',
    posterFont: 'Bold Franklin Gothic, Metallic Silver, slight grunge texture.'
  },
  {
    id: 'face_off',
    title: '夺面双雄 (Face/Off)',
    year: '1997',
    description: '双雄对决，背靠背持枪，白鸽飞舞。',
    prompt: 'Iconic movie poster for Face/Off. John Woo style. Doves flying. Sparks.',
    category: 'action',
    previewColor: 'from-red-900 to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=400',
    posterFont: 'Slanted Tech/Action font, Split color (Blue/Red) or Chrome.',
    roles: [
      {
        id: 'castor_troy',
        name: 'Castor Troy',
        description: '金色的双枪，疯狂的笑容，神父装束。',
        prompt: 'The character is Castor Troy (Nic Cage style). Wearing a priest outfit with a crazy expression. Holding TWO GOLDEN PISTOLS. Reflections in sunglasses.',
        previewImage: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400'
      },
      {
        id: 'sean_archer',
        name: 'Sean Archer',
        description: 'FBI探员，严肃冷静，为了正义不惜一切。',
        prompt: 'The character is Sean Archer (Travolta style). Wearing a sleek black suit. Serious, determined expression. Holding a pistol tactically. Broken mirror effect.',
        previewImage: 'https://images.unsplash.com/photo-1485470733090-0aae377d37f2?q=80&w=400'
      }
    ]
  },
  {
    id: 'gladiator',
    title: '角斗士 (Gladiator)',
    year: '2000',
    description: '罗马斗兽场，角斗士铠甲，触摸麦田的手。',
    prompt: 'Iconic movie poster for Gladiator. Maximus. Wearing Roman Gladiator armor (cuirass and spaulders). Standing in the Colosseum arena. Dust floating. Sun rays.',
    category: 'action',
    previewColor: 'from-orange-200 to-yellow-700',
    previewImage: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=400',
    posterFont: 'Trajan font, Stone texture, Gold/Bronze color.'
  },
  {
    id: 'avengers',
    title: '复仇者联盟 (The Avengers)',
    year: '2012',
    description: '超级英雄集结，抵抗外星入侵。',
    prompt: 'Iconic movie poster for The Avengers. Heroic pose.',
    category: 'action',
    previewColor: 'from-blue-700 to-red-600',
    previewImage: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400',
    posterFont: 'Bold sans-serif font, metallic texture, Avengers logo style',
    roles: [
      { id: 'iron_man', name: 'Iron Man', description: 'Mark VII装甲，掌心炮发射。', prompt: 'Cosplay as Iron Man (unmasked). Wearing high-tech red and gold armor. Hand raised firing repulsor beam. Debris background.', previewImage: 'https://images.unsplash.com/photo-1626278664285-f796b9ee7806?q=80&w=400' },
      { id: 'cap', name: 'Captain America', description: '振金盾牌，星条旗战衣。', prompt: 'Cosplay as Captain America. Wearing blue tactical suit with star on chest. Holding round shield. Battle worn.', previewImage: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400' },
      { id: 'thor', name: 'Thor', description: '雷神之锤，红色披风，召唤雷电。', prompt: 'Cosplay as Thor. Wearing Asgardian armor and red cape. Holding Mjolnir high summoning lightning. Stormy sky background.', previewImage: 'https://images.unsplash.com/photo-1534067783741-512d692f63e7?q=80&w=400' },
      { id: 'black_widow', name: 'Black Widow', description: '黑色特工服，红发，双枪。', prompt: 'Cosplay as Black Widow. Wearing sleek black tactical suit. Red hair. Holding dual pistols or batons. Action pose. Urban destruction background.', previewImage: 'https://images.unsplash.com/photo-1518558997970-4ddc236affcd?q=80&w=400' },
      { id: 'hawkeye', name: 'Hawkeye', description: '鹰眼，神射手，战术背心，弓箭。', prompt: 'Cosplay as Hawkeye (Clint Barton). Wearing tactical combat vest (purple and black). Holding a compound bow drawn back. Intense expression. Battle of New York background.', previewImage: 'https://images.unsplash.com/photo-1554188248-986adbb73be0?q=80&w=400' }
    ]
  },
  {
    id: 'django',
    title: '被解救的姜戈 (Django Unchained)',
    year: '2012',
    description: '墨镜，绿色灯芯绒西装，左轮手枪。',
    prompt: 'Iconic movie poster for Django Unchained. Django. Wearing green corduroy jacket, brown hat, sunglasses. Holding a revolver. Explosion in background. Western style.',
    category: 'action',
    previewColor: 'from-yellow-800 to-red-900',
    previewImage: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=400',
    posterFont: 'Western/Woodblock font, Thick Red block text.'
  },
  {
    id: 'braveheart',
    title: '勇敢的心 (Braveheart)',
    year: '1995',
    description: '面部涂蓝彩绘，苏格兰短裙，为了自由。',
    prompt: 'Iconic movie poster for Braveheart. William Wallace. Face painted half blue. Wearing kilt and armor. Holding a claymore sword. Screaming "Freedom!". Scottish highlands background.',
    category: 'action',
    previewColor: 'from-blue-700 to-green-800',
    previewImage: 'https://images.unsplash.com/photo-1505567745926-ba89000d255a?q=80&w=400',
    posterFont: 'Celtic/Medieval font, Bold White with shadow.'
  },
  {
    id: 'ghostbusters',
    title: '捉鬼敢死队 (Ghostbusters)',
    year: '1984',
    description: '质子背包，连体工作服，捉鬼车。',
    prompt: 'Iconic movie poster for Ghostbusters. Wearing beige jumpsuit with "Ghostbusters" patch. Wearing Proton Pack. Firing proton stream. Ecto-1 car in background.',
    category: 'action',
    previewColor: 'from-gray-300 to-red-600',
    previewImage: 'https://images.unsplash.com/photo-1517604931442-71053e3e2642?q=80&w=400',
    posterFont: 'Ghostbusters Logo font, Red circle/slash symbol.'
  },
  
  // --- Romance & Drama ---
  {
    id: 'lala_land',
    title: '爱乐之城 (La La Land)',
    year: '2016',
    description: '星空下的双人舞，洛杉矶的紫色夜景。',
    prompt: 'Iconic movie poster for La La Land. Dancing scene.',
    category: 'romance',
    previewColor: 'from-purple-600 to-blue-500',
    previewImage: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=400',
    posterFont: 'Art Deco font (Yasashii), Lavender/White color.',
    roles: [
      { id: 'mia', name: 'Mia', description: '黄色连衣裙，踢踏舞步。', prompt: 'Cosplay as Mia. Wearing a bright yellow dress. Dancing on a hill overlooking LA city lights at night.', previewImage: 'https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=400' },
      { id: 'seb', name: 'Sebastian', description: '白衬衫，领带，复古西裤。', prompt: 'Cosplay as Sebastian. Wearing white shirt and tie. Dancing on a hill overlooking LA.', previewImage: 'https://images.unsplash.com/photo-1445384763658-040093982930?q=80&w=400' }
    ]
  },
  {
    id: 'leon',
    title: '这个杀手不太冷 (Leon)',
    year: '1994',
    description: '圆墨镜，盆栽，大衣，冷酷与温情。',
    prompt: 'Iconic movie poster for Leon: The Professional.',
    category: 'drama',
    previewColor: 'from-gray-800 to-green-900',
    previewImage: 'https://images.unsplash.com/photo-1620336655052-b967f13c0203?q=80&w=400',
    posterFont: 'Typewriter font (Courier), Red or White, grunge effect.',
    roles: [
      { id: 'leon_role', name: 'Leon', description: '针织帽，圆墨镜，抱着银皇后盆栽。', prompt: 'Cosplay as Leon. Wearing a beanie hat and round sunglasses. Holding a potted Aglaonema plant. Long coat.', previewImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400' },
      { id: 'mathilda', name: 'Mathilda', description: 'Choker颈圈，短发，抱着盆栽。', prompt: 'Cosplay as Mathilda. Wearing a choker necklace, bomber jacket. Holding a plant. Urban hallway.', previewImage: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=400' }
    ]
  },
  {
    id: 'joker',
    title: '小丑 (Joker)',
    year: '2019',
    description: '红色西装，高台阶上的独舞，混乱的哥谭。',
    prompt: 'Iconic movie poster for Joker (2019). The User is Arthur Fleck/Joker. Wearing a red suit, orange vest, green shirt. Clown makeup (white face, red smile, blue diamonds eyes). Dancing on concrete stairs. Sunset lighting.',
    category: 'drama',
    previewColor: 'from-orange-700 to-green-900',
    previewImage: 'https://images.unsplash.com/photo-1600479707259-2c5e532b2609?q=80&w=400',
    posterFont: 'Handwritten Scribble font, Bold White, messy.'
  },
  {
    id: 'sound_of_music',
    title: '音乐之声 (The Sound of Music)',
    year: '1965',
    description: '阿尔卑斯山，草地，歌唱，自由。',
    prompt: 'Iconic movie poster for The Sound of Music. Maria. Wearing a vintage dress and apron. Spinning with arms open in a green alpine meadow. Mountains in background.',
    category: 'classic',
    previewColor: 'from-green-400 to-blue-300',
    previewImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c7dd1?q=80&w=400',
    posterFont: 'Elegant Script font, White with drop shadow.'
  },

  // --- Fantasy ---
  {
    id: 'lotr',
    title: '指环王 (The Lord of the Rings)',
    year: '2001',
    description: '中土世界，魔戒远征队。',
    prompt: 'Iconic movie poster for LOTR.',
    category: 'fantasy',
    previewColor: 'from-green-900 to-yellow-800',
    previewImage: 'https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?q=80&w=400',
    posterFont: 'Ringbearer/Celtic font, Gold text with texture.',
    roles: [
      { id: 'aragorn', name: 'Aragorn', description: '游侠装束，手持安都瑞尔圣剑。', prompt: 'Cosplay as Aragorn. Wearing ranger leather armor and cloak. Holding the sword Anduril. Misty mountains background.', previewImage: 'https://images.unsplash.com/photo-1628151016000-503d5089c8a9?q=80&w=400' },
      { id: 'gandalf', name: 'Gandalf', description: '灰袍巫师，手持法杖，对抗炎魔。', prompt: 'Cosplay as Gandalf the Grey. Wearing grey hat and robes. Holding a staff with a crystal. Confronting the Balrog (fire shadow).', previewImage: 'https://images.unsplash.com/photo-1543611425-a1c6e12368c1?q=80&w=400' }
    ]
  },
  {
    id: 'harry_potter',
    title: '哈利·波特 (Harry Potter)',
    year: '2001',
    description: '霍格沃茨城堡，魔杖与魔法。',
    prompt: 'Iconic movie poster for Harry Potter.',
    category: 'fantasy',
    previewColor: 'from-blue-900 to-yellow-600',
    previewImage: 'https://images.unsplash.com/photo-1632213702844-1e0606d81251?q=80&w=400',
    posterFont: 'Harry Potter "Lightning" font, Gold/Silver with metallic sheen.',
    roles: [
      { id: 'harry', name: 'Harry', description: '格兰芬多长袍，圆眼镜，闪电疤痕。', prompt: 'Cosplay as Harry Potter. Wearing Gryffindor robes, scarf, and round glasses. Holding a wand casting a spell (Patronus charm). Hogwarts background.', previewImage: 'https://images.unsplash.com/photo-1598153346810-860daa0d4adb?q=80&w=400' },
      { id: 'hermione', name: 'Hermione', description: '抱着书本，挥舞魔杖，聪明自信。', prompt: 'Cosplay as Hermione Granger. Wearing Hogwarts uniform. Holding a wand and a stack of spellbooks. Library background.', previewImage: 'https://images.unsplash.com/photo-1549520464-9812904cb357?q=80&w=400' }
    ]
  },
  {
    id: 'game_of_thrones',
    title: '权力的游戏 (Game of Thrones)',
    year: '2011',
    description: '铁王座，凛冬将至，龙之母。',
    prompt: 'Iconic poster for Game of Thrones.',
    category: 'fantasy',
    previewColor: 'from-slate-800 to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1508779929559-86640c66dbb7?q=80&w=400',
    posterFont: 'Trajan (GoT style) with internal lines, Silver/Steel color.',
    roles: [
      { id: 'throne', name: 'The Ruler', description: '坐在铁王座上，君临天下。', prompt: 'Cosplay as the Ruler of Westeros. Sitting on the Iron Throne (made of swords). Wearing royal armor/dress. Dramatic lighting.', previewImage: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=400' },
      { id: 'nightwatch', name: 'Night\'s Watch', description: '绝境长城，黑衣人，风雪。', prompt: 'Cosplay as Jon Snow. Wearing heavy black fur cloak. Standing on the Ice Wall. Snow falling. Wolf in background.', previewImage: 'https://images.unsplash.com/photo-1518174246820-205167f135b5?q=80&w=400' }
    ]
  },

  // --- Animation ---
  {
    id: 'spirited_away',
    title: '千与千寻 (Spirited Away)',
    year: '2001',
    description: '海上列车，无脸男，千寻。',
    prompt: 'Iconic movie poster for Spirited Away. Ghibli style. The User is Chihiro. Sitting on a train moving across the ocean. No-Face sitting next to them. Blue sky and water.',
    category: 'animation',
    previewColor: 'from-blue-400 to-pink-300',
    previewImage: 'https://images.unsplash.com/photo-1574243542284-93b584a0c841?q=80&w=400',
    posterFont: 'Bold Kanji/Japanese font, Red or White, playful.'
  },
  {
    id: 'spider_verse',
    title: '蜘蛛侠：平行宇宙 (Into the Spider-Verse)',
    year: '2018',
    description: '倒吊信仰之跃，色彩斑斓的城市。',
    prompt: 'Iconic movie poster for Into the Spider-Verse. The User is Spider-Man (Miles Morales suit). Falling upside down (Leap of Faith) from a skyscraper. Glitch art style, halftone dots, vibrant neon colors.',
    category: 'animation',
    previewColor: 'from-red-600 to-blue-600',
    previewImage: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=400',
    posterFont: 'Graffiti style font, Sticker bomb aesthetic, Vibrant colors.'
  },
  {
    id: 'arcane',
    title: '双城之战 (Arcane)',
    year: '2021',
    description: '金克丝风格，油画质感，蒸汽朋克。',
    prompt: 'Iconic poster for Arcane (LoL). The User is Jinx/Vi. Oil painting texture. Steampunk city background (Piltover/Zaun). Neon blue/pink smoke.',
    category: 'animation',
    previewColor: 'from-purple-900 to-blue-800',
    previewImage: 'https://images.unsplash.com/photo-1639399432696-6b216447881c?q=80&w=400',
    posterFont: 'Art Nouveau/Steampunk font, Gold or Neon Blue.'
  },
  {
    id: 'frozen',
    title: '冰雪奇缘 (Frozen)',
    year: '2013',
    description: '艾莎女王，冰雪城堡，魔法特效。',
    prompt: 'Iconic movie poster for Frozen. The User is Elsa. Wearing sparkling blue ice dress. Casting ice magic. Ice Castle background. Winter fantasy style.',
    category: 'animation',
    previewColor: 'from-cyan-300 to-blue-500',
    previewImage: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=400',
    posterFont: 'Frozen logo font, Metallic Ice effect with snowflakes.'
  },
  {
    id: 'your_name',
    title: '你的名字 (Your Name)',
    year: '2016',
    description: '新海诚画风，阶梯相遇，黄昏之时。',
    prompt: 'Iconic movie poster for Your Name (Kimi no Na wa). Makoto Shinkai style. The User is standing on the stairs in Tokyo. Sunset lighting (Golden Hour). Lens flares. Emotional looking back.',
    category: 'animation',
    previewColor: 'from-blue-400 to-orange-300',
    previewImage: 'https://images.unsplash.com/photo-1552554658-0e3d641d402b?q=80&w=400',
    posterFont: 'Mincho/Serif Japanese font, White, clean and vertically aligned.'
  },

  // --- Games ---
  {
    id: 'god_of_war',
    title: '战神 (God of War)',
    year: '2018',
    description: '奎托斯，利维坦之斧，北欧雪山。',
    prompt: 'Iconic game poster for God of War (2018).',
    category: 'game',
    previewColor: 'from-slate-700 to-blue-200',
    previewImage: 'https://images.unsplash.com/photo-1542259681-dadcd731560b?q=80&w=400',
    posterFont: 'Runes/Nordic Omega font, Stone texture, Red accents.',
    roles: [
      { id: 'kratos', name: 'Kratos', description: '斯巴达之魂，红色纹身，大胡子。', prompt: 'Cosplay as Kratos. Pale skin, red tattoo over left eye. Thick beard. Wearing leather/fur armor. SCREAMING in rage. Holding the Leviathan Axe (frozen) in right hand. Snowy peak background.', previewImage: 'https://images.unsplash.com/photo-1542259681-dadcd731560b?q=80&w=400' },
      { id: 'atreus', name: 'Atreus', description: '阿特柔斯，手持弓箭，少年。', prompt: 'Cosplay as Atreus. Teenage boy. Wearing fur/leather tunic. Holding a bow and arrow ready to shoot. Blue magical runes floating.', previewImage: 'https://images.unsplash.com/photo-1532439736173-987823577d2d?q=80&w=400' }
    ]
  },
  {
    id: 'zelda',
    title: '塞尔达传说 (The Legend of Zelda)',
    year: '2017',
    description: '海拉鲁大陆，林克，大师之剑。',
    prompt: 'Iconic game poster for Breath of the Wild.',
    category: 'game',
    previewColor: 'from-green-500 to-blue-400',
    previewImage: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=400',
    posterFont: 'Hylian/Fantasy font, Antique Gold with a sword silhouette.',
    roles: [
      { id: 'link', name: 'Link', description: '英杰服，尖帽子，大师之剑。', prompt: 'Cosplay as Link. Wearing the Champion\'s Tunic (Blue) and the iconic GREEN POINTED HAT. Holding the Master Sword in right hand and Hylian Shield in left. Standing on a cliff overlooking Hyrule.', previewImage: 'https://images.unsplash.com/photo-1560167016-022b78a0258e?q=80&w=400' },
      { id: 'zelda_role', name: 'Zelda', description: '纯白祭祀长裙，圣泉祈祷。', prompt: 'Cosplay as Princess Zelda. Wearing the White Ceremonial Dress. Standing in a Sacred Spring. Hands clasped in prayer. Glowing golden light.', previewImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400' }
    ]
  },
  {
    id: 'mario',
    title: '超级马里奥 (Super Mario)',
    year: '1985',
    description: '红帽子，背带裤，蘑菇王国。',
    prompt: 'Iconic game poster for Super Mario. The User is Mario. Wearing red cap with "M", blue overalls, red shirt. Big mustache. Jumping in the air, fist raised. Mushroom Kingdom background.',
    category: 'game',
    previewColor: 'from-red-600 to-blue-500',
    previewImage: 'https://images.unsplash.com/photo-1562674395-65476a6ce153?q=80&w=400',
    posterFont: 'Cartoony Bubble font, Red/Blue/Yellow gradient.'
  },
  {
    id: 'yakuza',
    title: '如龙 (Yakuza)',
    year: '2005',
    description: '神室町，纹身，极道。',
    prompt: 'Iconic game poster for Yakuza (Like a Dragon). Kamurocho neon street background.',
    category: 'game',
    previewColor: 'from-red-900 to-black',
    previewImage: 'https://images.unsplash.com/photo-1565576239126-72412808c1d6?q=80&w=400',
    posterFont: 'Bold Japanese Brush font, White with Black stroke, aggressive.',
    roles: [
      { id: 'kiryu', name: 'Kiryu Kazuma', description: '灰色西装，红衬衫，背部龙纹身。', prompt: 'Cosplay as Kiryu Kazuma. Wearing grey suit, maroon shirt popped collar. Serious expression. Standing in Kabukicho neon street.', previewImage: 'https://images.unsplash.com/photo-1563823292-628f32c0282b?q=80&w=400' },
      { id: 'majima', name: 'Majima Goro', description: '眼罩，蛇皮夹克，疯狂。', prompt: 'Cosplay as Majima Goro. Wearing snakeskin jacket, eyepatch. Holding a dagger. Crazy smile.', previewImage: 'https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?q=80&w=400' }
    ]
  },
  {
    id: 'uncharted',
    title: '神秘海域 (Uncharted)',
    year: '2007',
    description: '宝藏猎人，古迹探险，内森·德雷克。',
    prompt: 'Iconic game poster for Uncharted. The User is Nathan Drake. Wearing henley shirt, holster, scarf. Climbing a cliff or holding a map. Jungle ruins background. Dirt/sweat on face.',
    category: 'game',
    previewColor: 'from-yellow-700 to-green-800',
    previewImage: 'https://images.unsplash.com/photo-1544985338-7fe97148ae81?q=80&w=400',
    posterFont: 'Distressed Sans-Serif font, White/Tan, adventure map style.'
  },
  {
    id: 'last_of_us',
    title: '最后生还者 (The Last of Us)',
    year: '2013',
    description: '末世废墟，乔尔与艾莉，生存。',
    prompt: 'Iconic game poster for The Last of Us. Overgrown city ruins background.',
    category: 'game',
    previewColor: 'from-green-900 to-gray-800',
    previewImage: 'https://images.unsplash.com/photo-1524388481395-563b7235d648?q=80&w=400',
    posterFont: 'Gritty Sans-Serif font with erosion, White/Black.',
    roles: [
      { id: 'joel', name: 'Joel', description: '格子衬衫，背包，胡茬，沧桑。', prompt: 'Cosplay as Joel Miller. Wearing plaid shirt, backpack. Holding a brick or revolver. Looking protective. Gritty texture.', previewImage: 'https://images.unsplash.com/photo-1520699918507-3c3e05c46b90?q=80&w=400' },
      { id: 'ellie', name: 'Ellie', description: '红色T恤，眉毛疤痕，弹吉他或持刀。', prompt: 'Cosplay as Ellie. Wearing red t-shirt. Eyebrow scar. Holding a switchblade or guitar. Forest background.', previewImage: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=400' }
    ]
  },

  // --- TV Series ---
  {
    id: 'breaking_bad',
    title: '绝命毒师 (Breaking Bad)',
    year: '2008',
    description: '新墨西哥州沙漠，房车，老白与小粉。',
    prompt: 'Iconic TV poster for Breaking Bad.',
    category: 'tv',
    previewColor: 'from-yellow-600 to-green-700',
    previewImage: 'https://images.unsplash.com/photo-1558507353-85e3a890473a?q=80&w=400',
    posterFont: 'Periodic Table font (Br, Ba), Green smoke effect.',
    roles: [
      { id: 'walter', name: 'Heisenberg', description: '黑礼帽，墨镜，标志性胡须。', prompt: 'Cosplay as Walter White (Heisenberg). Wearing black porkpie hat and sunglasses. Green shirt. Stern expression. Desert background with RV.', previewImage: 'https://images.unsplash.com/photo-1504285566373-c827c1f83c16?q=80&w=400' },
      { id: 'jesse', name: 'Jesse', description: '黄色连体防护服，防毒面具。', prompt: 'Cosplay as Jesse Pinkman. Wearing yellow hazmat suit and holding a respirator mask. Blue crystal smoke background.', previewImage: 'https://images.unsplash.com/photo-1617154212555-d4e8c1888066?q=80&w=400' }
    ]
  },
  {
    id: 'better_call_saul',
    title: '风骚律师 (Better Call Saul)',
    year: '2015',
    description: '彩色西装，法律广告，吉米。',
    prompt: 'Iconic TV poster for Better Call Saul. The User is Saul Goodman. Wearing a flashy colorful suit (Yellow/Orange). Pointing finger at camera ("It\'s all good man!"). Scales of justice in background.',
    category: 'tv',
    previewColor: 'from-yellow-500 to-red-500',
    previewImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400',
    posterFont: 'Brush Script font (Saul style), Red/Yellow slanted text.'
  },
  {
    id: 'prison_break',
    title: '越狱 (Prison Break)',
    year: '2005',
    description: '全身纹身，监狱蓝图，迈克尔。',
    prompt: 'Iconic TV poster for Prison Break. The User is Michael Scofield. Upper body shirtless showing FULL BODY TATTOOS (blueprints). Standing behind prison bars. Intense look.',
    category: 'tv',
    previewColor: 'from-blue-800 to-gray-700',
    previewImage: 'https://images.unsplash.com/photo-1563720223521-2e2e7f43a571?q=80&w=400',
    posterFont: 'Stencil/Prison font, White fade out.'
  },
  {
    id: 'journey_west',
    title: '西游记 (Journey to the West)',
    year: '1986',
    description: '孙悟空，金箍棒，取经之路。',
    prompt: 'Iconic poster for Journey to the West (1986 TV style).',
    category: 'tv',
    previewColor: 'from-yellow-600 to-red-600',
    previewImage: 'https://images.unsplash.com/photo-1518544866385-e9714801da28?q=80&w=400',
    useChineseTitle: true,
    posterFont: 'Classic Chinese Calligraphy (Li Shu), Gold.',
    roles: [
      { id: 'wukong', name: 'Sun Wukong', description: '美猴王，虎皮裙，金箍棒。', prompt: 'Cosplay as Sun Wukong (Monkey King). Wearing golden armor and tiger skin skirt. Holding the Golden Cudgel. Facial hair/Monkey makeup features. Clouds background.', previewImage: 'https://images.unsplash.com/photo-1518544866385-e9714801da28?q=80&w=400' },
      { id: 'tang', name: 'Tang Monk', description: '锦襕袈裟，骑白马，圣僧。', prompt: 'Cosplay as Tang Sanzang. Wearing red and gold Buddhist robes (Kasaya) and crown. Riding a white horse. Calm expression.', previewImage: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?q=80&w=400' }
    ]
  },
  {
    id: 'three_kingdoms',
    title: '三国演义 (Three Kingdoms)',
    year: '1994',
    description: '乱世英雄，群雄逐鹿。',
    prompt: 'Iconic poster for Three Kingdoms.',
    category: 'tv',
    previewColor: 'from-gray-700 to-red-800',
    previewImage: 'https://images.unsplash.com/photo-1533568884947-688df2949791?q=80&w=400',
    useChineseTitle: true,
    posterFont: 'Bold Chinese Calligraphy (Kai Shu), Black or Gold.',
    roles: [
      { id: 'zhuge', name: 'Zhuge Liang', description: '诸葛亮，羽扇纶巾，运筹帷幄。', prompt: 'Cosplay as Zhuge Liang. Wearing Taoist robes and holding a feather fan. Playing Guqin or looking at map. Ancient army camp background.', previewImage: 'https://images.unsplash.com/photo-1533568884947-688df2949791?q=80&w=400' },
      { id: 'guanyu', name: 'Guan Yu', description: '关羽，绿袍长髯，青龙偃月刀。', prompt: 'Cosplay as Guan Yu. Wearing green armor/robes. Long beard. Holding the Guandao (Green Dragon Blade). Red face makeup tone.', previewImage: 'https://images.unsplash.com/photo-1540324869811-042861219b67?q=80&w=400' },
      { id: 'caocao', name: 'Cao Cao', description: '曹操，乱世枭雄，横槊赋诗。', prompt: 'Cosplay as Cao Cao. Wearing black and gold Han Dynasty armor/robes. Long beard. Holding a spear (Shuo) or wine cup. Standing on a ship deck looking at the ocean (Guan Cang Hai). Epic and ambitious expression.', previewImage: 'https://images.unsplash.com/photo-1505672675380-57f2732843bf?q=80&w=400' },
      { id: 'zhaoyun', name: 'Zhao Yun', description: '赵云，白马银枪，长坂坡。', prompt: 'Cosplay as Zhao Yun. Wearing silver armor and white cape. Riding a white horse. Holding a silver spear. Fighting in a battlefield (Changban). Heroic and determined.', previewImage: 'https://images.unsplash.com/photo-1599707367072-cd6ad6cb3d2e?q=80&w=400' },
      { id: 'lubu', name: 'Lu Bu', description: '吕布，方天画戟，赤兔马。', prompt: 'Cosplay as Lu Bu. Wearing elaborate black and gold armor with long pheasant tail feathers on helmet. Riding the Red Hare horse. Holding the Sky Piercer Halberd (Fang Tian Hua Ji). Intimidating aura.', previewImage: 'https://images.unsplash.com/photo-1540324869811-042861219b67?q=80&w=400' },
      { id: 'diaochan', name: 'Diao Chan', description: '貂蝉，闭月羞花，红裙舞姿。', prompt: 'Cosplay as Diao Chan. Wearing elegant ancient Chinese Hanfu (Pink/Red). Dancing with long sleeves. Night time, moonlight background. Beautiful and graceful.', previewImage: 'https://images.unsplash.com/photo-1546252458-9c17df39486a?q=80&w=400' }
    ]
  },

  // --- Chinese Classics ---
  {
    id: 'crouching_tiger',
    title: '卧虎藏龙 (Crouching Tiger)',
    year: '2000',
    description: '竹林之战，轻功，青冥剑。',
    prompt: 'Iconic movie poster for Crouching Tiger, Hidden Dragon. Scene: Fighting in a bamboo forest. The User is a Wuxia warrior wearing white/green robes. Floating on bamboo tips (Qinggong). Holding a straight sword (Jian).',
    category: 'classic',
    previewColor: 'from-green-800 to-green-400',
    previewImage: 'https://images.unsplash.com/photo-1524602956037-7757b3273e87?q=80&w=400',
    useChineseTitle: true,
    posterFont: 'Elegant Chinese Brush Calligraphy, Black ink style.'
  },
  {
    id: 'in_the_mood',
    title: '花样年华 (In the Mood for Love)',
    year: '2000',
    description: '旗袍，西装，昏黄路灯，暧昧。',
    prompt: 'Iconic movie poster for In the Mood for Love. Wong Kar-wai style. Scene: Narrow alleyway at night. User wearing 60s suit or Cheongsam. Leaning against a wall. Cigarette smoke. Warm yellow/red lighting.',
    category: 'romance',
    previewColor: 'from-red-900 to-yellow-800',
    previewImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=400',
    useChineseTitle: true,
    posterFont: 'Vertical Chinese text, Retro 60s Hong Kong style, Neon Red/Yellow.'
  },
  {
    id: 'infernal_affairs',
    title: '无间道 (Infernal Affairs)',
    year: '2002',
    description: '天台对决，卧底，我是警察。',
    prompt: 'Iconic movie poster for Infernal Affairs.',
    category: 'action',
    previewColor: 'from-slate-700 to-blue-800',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400',
    useChineseTitle: true,
    posterFont: 'Modern Sans-Serif Chinese font, Metallic/Glass effect.',
    roles: [
      { id: 'yan', name: 'Chan Wing Yan', description: '皮夹克，胡茬，忧郁眼神。', prompt: 'Cosplay as Tony Leung\'s character. Wearing leather jacket. Standing on a rooftop. Pointing a gun. Blue sky background.', previewImage: 'https://images.unsplash.com/photo-1504198266287-1659872e6584?q=80&w=400' },
      { id: 'ming', name: 'Lau Kin Ming', description: '黑西装，干净利落，复杂内心。', prompt: 'Cosplay as Andy Lau\'s character. Wearing a clean black suit. Standing on a rooftop. Looking back. Glass reflection.', previewImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400' }
    ]
  },
  {
    id: 'hero',
    title: '英雄 (Hero)',
    year: '2002',
    description: '漫天黄叶，红衣对决，天下。',
    prompt: 'Iconic movie poster for Hero (Zhang Yimou). Scene: Duel in the yellow leaf forest. User wearing flowing Red robes. Holding a sword. Leaves falling everywhere. Vibrant red and yellow colors.',
    category: 'classic',
    previewColor: 'from-red-600 to-yellow-500',
    previewImage: 'https://images.unsplash.com/photo-1504221507732-5246c045949b?q=80&w=400',
    useChineseTitle: true,
    posterFont: 'Strong Chinese Seal Script (Zhuan Shu), Red/Black.'
  },
  {
    id: 'grandmaster',
    title: '一代宗师 (The Grandmaster)',
    year: '2013',
    description: '雨夜，咏春，叶问，礼帽。',
    prompt: 'Iconic movie poster for The Grandmaster. Scene: Fighting in heavy rain at night. User wearing traditional Chinese long gown and white fedora hat. Wing Chun pose. Water droplets frozen in air.',
    category: 'action',
    previewColor: 'from-gray-900 to-black',
    previewImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=400',
    useChineseTitle: true,
    posterFont: 'Golden Chinese Calligraphy, Elegant and sharp.'
  }
];
