

import { MovieScene } from './types';

export const MOVIE_SCENES: MovieScene[] = [
  // --- Game (New) ---
  {
    id: 'god_of_war',
    title: '战神 (God of War)',
    year: '2018',
    description: '为了亡妻的遗愿，父子二人踏上北欧神话世界的征途。',
    prompt: 'Iconic game poster shot for God of War. Nordic mythology style.',
    category: 'game',
    previewColor: 'from-slate-500 to-cyan-900',
    previewImage: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=400',
    styleKeywords: 'Santa Monica Studio style, one-shot camera feel, snowy Norse landscape, gritty realism, epic scale, high contrast, sharp focus.',
    roles: [
      {
        id: 'kratos',
        name: '奎托斯 (Kratos)',
        description: '灰白皮肤，红色纹身，手持利维坦之斧，斯巴达亡魂。',
        prompt: 'The character is the USER cosplaying as Kratos. \n\nCRITICAL IDENTITY INSTRUCTIONS:\n1. KEEP THE USER\'S FACE SHAPE, NOSE, EYES, AND MOUTH EXACTLY AS THEY ARE.\n2. Apply Kratos\'s signature ash-white skin texture simply as body paint/makeup over the user\'s skin.\n3. Apply the red stripe tattoo over the user\'s face structure.\n4. Facial Hair: If the user has a beard, make it rugged/Spartan. If the user does NOT have a beard, DO NOT ADD ONE, or just add light stubble. Do not hide the user\'s jawline if they are clean-shaven.\n\nSCENE ACTION:\nThe user is gripping the Leviathan Axe tightly in their right hand, ready to strike. The axe blade is glowing with blue frost magic. Expression is fierce and determined combat focus (but not so distorted that the face is unrecognizable). Muscles tensed. Wearing leather and fur Norse armor. Background is a snowy Midgard landscape. Cinematic lighting, frost particle effects, brutal realism.',
        previewImage: 'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?q=80&w=400'
      },
      {
        id: 'atreus',
        name: '阿特柔斯 (Atreus)',
        description: '身手矫健的少年，手持爪弓，洛基的宿命。',
        prompt: 'The character is the USER cosplaying as Atreus. \n\nIDENTITY:\n- PRESERVE the user\'s facial features completely.\n- Do NOT transform the user into the game character model.\n\nOUTFIT:\n- Wearing fur-lined leather tunic and pants similar to Atreus.\n\nACTION:\n- Holding a wooden bow with runic inscriptions drawn and ready to fire.\n- Background is a mystical forest in Midgard. Agile, intelligent vibe.',
        previewImage: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=400'
      }
    ]
  },
  {
    id: 'mario_bros',
    title: '超级马里奥 (The Super Mario Bros.)',
    year: '2023',
    description: '蘑菇王国的奇幻冒险，穿上背带裤，开启金币之旅。',
    prompt: 'Iconic movie poster shot for The Super Mario Bros. Movie.',
    category: 'game',
    previewColor: 'from-red-500 to-blue-500',
    previewImage: 'https://images.unsplash.com/photo-1612404730960-5c71579fca2c?q=80&w=400',
    styleKeywords: 'Illumination Animation style, vibrant colors, 3D render, cartoon realism, glossy texture, BUT with realistic facial proportions for the user.',
    roles: [
      {
        id: 'mario',
        name: '马里奥 (Mario)',
        description: '红色帽子，蓝色背带裤，标志性的小胡子（可选）。',
        prompt: 'The character is the USER dressed as Mario. \n\nCRITICAL:\n- DO NOT turn the user into a cartoon character with a giant nose.\n- Maintain the USER\'S actual facial proportions and bone structure.\n- The texture should be "High Fidelity CGI" (like a realistic human in a CGI world).\n\nOUTFIT:\n- Wearing the red shirt, blue denim overalls with yellow buttons, and the red "M" cap.\n- If the user has a mustache, keep it. If not, do NOT force a fake mustache unless it looks natural.\n\nSCENE:\n- Standing in the vibrant Mushroom Kingdom. Peach\'s castle in distance. Colorful, fun lighting.',
        previewImage: 'https://images.unsplash.com/photo-1612404730960-5c71579fca2c?q=80&w=400' 
      }
    ]
  },
  {
    id: 'zelda',
    title: '塞尔达传说 (The Legend of Zelda)',
    year: '2023',
    description: '海拉鲁大陆的勇者，手持大师之剑，对抗灾厄。',
    prompt: 'Iconic game poster shot for The Legend of Zelda. Fantasy adventure style.',
    category: 'game',
    previewColor: 'from-green-600 to-sky-400',
    previewImage: 'https://images.unsplash.com/photo-1630713815181-79b908779982?q=80&w=400',
    styleKeywords: 'Fantasy realism, soft ethereal lighting, magical glow, epic landscape, high fidelity 3D render.',
    roles: [
      {
        id: 'link',
        name: '林克 (Link)',
        description: '身穿英杰服，一手举起大师之剑，一手持海利亚盾。',
        prompt: 'The character is the USER cosplaying as Link. \n\nIDENTITY:\n- Keep the user\'s face EXACTLY as it is.\n- Do NOT give them "Anime Eyes" or change their jawline to look like Link.\n\nOUTFIT:\n- Wearing the blue Champion\'s Tunic and leather gear.\n\nACTION:\n- Holding the Master Sword raised high in one hand and the Hylian Shield in the other.\n- Dynamic heroic stance.\n- Background is a dramatic cliff overlooking Hyrule Field. Epic lighting.',
        previewImage: 'https://images.unsplash.com/photo-1630713815181-79b908779982?q=80&w=400'
      },
      {
        id: 'zelda_role',
        name: '塞尔达 (Zelda)',
        description: '智慧的公主，身穿旅行装束，手中闪耀着三角力量的光芒。',
        prompt: 'The character is the USER cosplaying as Princess Zelda. \n\nIDENTITY:\n- Keep the user\'s face EXACTLY as it is.\n- Ensure skin texture remains realistic human texture, not cartoon.\n\nOUTFIT:\n- Wearing the blue royal exploration outfit with gold accents.\n\nACTION:\n- Holding a glowing light or the Triforce in hand.\n- Background is ancient Zonai ruins or a field of Silent Princess flowers. Elegant, determined.',
        previewImage: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=400'
      }
    ]
  },
  {
    id: 'yakuza',
    title: '如龙 (Yakuza / Like a Dragon)',
    year: '2005',
    description: '神室町的霓虹灯下，背负着龙纹身的极道传说。',
    prompt: 'Iconic game poster shot for Yakuza / Ryu ga Gotoku. Japanese noir crime drama.',
    category: 'game',
    previewColor: 'from-red-700 to-slate-900',
    previewImage: 'https://images.unsplash.com/photo-1542051841857-5f906991ddce?q=80&w=400',
    styleKeywords: 'Japanese noir, Kabukicho neon lights, cinematic depth of field, tough guy look, wet street reflection.',
    roles: [
      {
        id: 'kiryu',
        name: '桐生一马 (Kiryu)',
        description: '身穿灰色西装和酒红衬衫，眉头紧锁的堂岛之龙。',
        prompt: 'The character is the USER starring in a Yakuza movie. \n\nIDENTITY:\n- Perfect likeness of the user.\n- Serious, stoic expression (Kiryu style).\n\nOUTFIT:\n- Wearing a light grey suit with a popped-collar crimson shirt.\n\nSCENE:\n- Background is the Kamurocho Tenkaichi Gate at night with neon signs. Legendary Yakuza vibe. Detailed skin texture, pore-level realism.',
        previewImage: 'https://images.unsplash.com/photo-1542051841857-5f906991ddce?q=80&w=400'
      },
      {
        id: 'majima',
        name: '真岛吾朗 (Majima)',
        description: '戴着眼罩，穿着蛇皮夹克，疯狂的岛野狂犬。',
        prompt: 'The character is the USER cosplaying as Goro Majima. \n\nIDENTITY:\n- User\'s face is ground truth.\n- Add the eyepatch over the LEFT eye.\n\nOUTFIT:\n- Wearing a snakeskin jacket (no shirt underneath if male, or black tank top) and black leather pants.\n\nACTION:\n- Holding a dagger or baseball bat. Maniacal grin (using user\'s mouth shape). Chaotic neon background. The Mad Dog of Shimano.',
        previewImage: 'https://images.unsplash.com/photo-1565622079057-087095066e01?q=80&w=400'
      }
    ]
  },
  {
    id: 'uncharted',
    title: '神秘海域 (Uncharted)',
    year: '2022',
    description: '寻找失落的宝藏，在古老遗迹中惊险求生。',
    prompt: 'Iconic game/movie poster shot for Uncharted. \n\nSUBJECT:\nThe USER is the main protagonist (Nathan Drake style).\n- Keep User\'s face 100%.\n- Outfit: Dirty white henley shirt, gun holster, cargo pants.\n- Action: Hanging off a cliff edge or holding an ancient map in a jungle ruin.\n- Lighting: Golden hour, sweat, grit, high adventure, realistic texture.',
    category: 'game',
    previewColor: 'from-amber-600 to-stone-700',
    previewImage: 'https://images.unsplash.com/photo-1596395817833-2f7aa56c624d?q=80&w=400',
    styleKeywords: 'Action adventure blockbuster, golden hour, dust and grit, epic scale, jungle ruins.'
  },
  {
    id: 'the_last_of_us',
    title: '最后生还者 (The Last of Us)',
    year: '2013',
    description: '末世废墟中的求生之路，不仅是生存，更是守护。',
    prompt: 'Iconic game poster shot for The Last of Us. Post-apocalyptic survival.',
    category: 'game',
    previewColor: 'from-green-800 to-stone-800',
    previewImage: 'https://images.unsplash.com/photo-1550608518-e7d69d27521a?q=80&w=400',
    styleKeywords: 'Post-apocalyptic, overgrown nature reclaiming city, moody desaturated lighting, emotional survivalism.',
    roles: [
      {
        id: 'joel',
        name: '乔尔 (Joel)',
        description: '穿着法兰绒衬衫，背着背包，饱经风霜的幸存者。',
        prompt: 'The character is the USER starring as a survivor (Joel style). \n\nIDENTITY:\n- Keep user\'s face.\n- Add grime/dirt but do not age them unless they are old.\n- If user has no beard, do not add a full beard, just stubble.\n\nOUTFIT:\n- Wearing a plaid flannel shirt, jeans, and a backpack. Holding a revolver or brick.\n\nSCENE:\n- Background is an overgrown ruined city street. Emotional, gritty, realistic lighting.',
        previewImage: 'https://images.unsplash.com/photo-1550608518-e7d69d27521a?q=80&w=400'
      },
      {
        id: 'ellie',
        name: '艾莉 (Ellie)',
        description: '穿着T恤，手臂有纹身，手持弹簧刀的少女。',
        prompt: 'The character is the USER starring as a survivor (Ellie style). \n\nIDENTITY:\n- Keep user\'s face exactly.\n\nOUTFIT:\n- Wearing a graphic t-shirt and converse. Ponytail (if user has long hair).\n- Fern tattoo on arm.\n\nACTION:\n- Holding a switchblade or hunting rifle. Background is a forest taking over a building. Intense, survivor.',
        previewImage: 'https://images.unsplash.com/photo-1518386377322-a5482e9b813d?q=80&w=400'
      }
    ]
  },

  // --- Action & Thrillers ---
  {
    id: 'face_off',
    title: '夺面双雄 (Face/Off)',
    year: '1997',
    description: '换脸手术后的双雄对决，吴宇森暴力美学巅峰。',
    prompt: 'Iconic movie poster shot for Face/Off. John Woo style action.',
    category: 'action',
    previewColor: 'from-slate-800 to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=400',
    styleKeywords: 'John Woo style, slow motion, doves, sparks, dual pistols, intense standoff, cinematic action.',
    roles: [
      {
        id: 'castor_troy',
        name: 'Castor Troy (恶棍)',
        description: '身穿神父装或长风衣，手持黄金双枪，疯狂而邪魅。',
        prompt: 'The character is Castor Troy (Nicolas Cage style). \n\nIDENTITY:\n- User\'s face.\n- Maniacal, crazy expression (wide eyes, wild grin).\n\nOUTFIT:\n- Wearing a black priest outfit or a long stylized trench coat.\n\nACTION:\n- Holding dual golden pistols. Doves flying in the background. Sparks flying. Chaotic, intense.',
        previewImage: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=400'
      },
      {
        id: 'sean_archer',
        name: 'Sean Archer (探员)',
        description: '身穿西装，眉头紧锁，悲情而坚毅的FBI探员。',
        prompt: 'The character is Sean Archer (John Travolta style). \n\nIDENTITY:\n- User\'s face.\n- Serious, pained, determined expression.\n\nOUTFIT:\n- Wearing a sharp black suit and tie.\n\nACTION:\n- Holding a pistol, aiming carefully. Background is a mirror reflection or a high-tech prison. Tense, dramatic thriller vibe.',
        previewImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400'
      }
    ]
  },
  {
    id: 'braveheart',
    title: '勇敢的心 (Braveheart)',
    year: '1995',
    description: '脸上涂着蓝色战纹，高喊"自由"的威廉·华莱士。',
    prompt: 'Iconic movie poster shot from Braveheart. The character is William Wallace. Wearing medieval kilt and armor. Face painted half blue. Screaming freedom or looking intense. Background is the Scottish Highlands. Gritty, epic war drama.',
    category: 'action',
    previewColor: 'from-blue-700 to-green-900',
    previewImage: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=400'
  },
  {
    id: 'joker_dark_knight',
    title: '蝙蝠侠：黑暗骑士 (The Dark Knight)',
    year: '2008',
    description: '哥谭市的黑夜，身穿紫色西装，甚至比小丑更疯狂。',
    prompt: 'Iconic movie poster shot from The Dark Knight. The character is standing in the dark streets of Gotham City. Wearing a tactical suit or a purple villain suit. Glass shards, blue moonlight, gritty realism. Nolan style.',
    category: 'action',
    previewColor: 'from-blue-900 to-black',
    previewImage: 'https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=400' 
  },
  {
    id: 'wonder_woman',
    title: '神奇女侠 (Wonder Woman)',
    year: '2017',
    description: '手持盾牌和真言套索，在一战战壕中冲锋。',
    prompt: 'Iconic movie poster shot from Wonder Woman (2017). The character is wearing Amazonian armor, deflecting bullets with a shield. Background is a gritty WWI battlefield with sparks and smoke. Golden color grading, heroic slow motion vibe.',
    category: 'action',
    previewColor: 'from-orange-600 to-red-700',
    previewImage: 'https://images.unsplash.com/photo-1620002166946-444a95d7362d?q=80&w=400'
  },

  // --- Fantasy & Epics ---
  {
    id: 'harry_potter',
    title: '哈利波特 (Harry Potter)',
    year: '2001',
    description: '霍格沃茨魔法世界，选择成为哈利或赫敏。',
    prompt: 'Iconic movie poster shot from Harry Potter. The character is wearing a Hogwarts robe and holding a magic wand. Background is the Great Hall with floating candles. Magical atmosphere, warm candlelight, sparkles.',
    category: 'fantasy',
    previewColor: 'from-amber-900 to-slate-900',
    previewImage: 'https://images.unsplash.com/photo-1598153346810-860daa814c4b?q=80&w=400', 
    styleKeywords: 'Magical fantasy, warm candlelight, gothic architecture, mystical atmosphere.',
    roles: [
      {
        id: 'harry',
        name: '哈利 (Harry)',
        description: '戴着圆眼镜，手持冬青木魔杖，额头有闪电疤痕。',
        prompt: 'Iconic poster shot. The character is Harry Potter. Wearing round glasses, Gryffindor robes, holding a wand. Standing in the Great Hall. Magical, heroic.',
        previewImage: 'https://images.unsplash.com/photo-1598153346810-860daa814c4b?q=80&w=400'
      },
      {
        id: 'hermione',
        name: '赫敏 (Hermione)',
        description: '聪慧的眼神，手持葡萄藤木魔杖，怀抱魔法书。',
        prompt: 'Iconic poster shot. The character is Hermione Granger. Wearing Gryffindor robes, holding a wand and a stack of books. Intelligent expression, magical background.',
        previewImage: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?q=80&w=400'
      }
    ]
  },
  {
    id: 'lotr',
    title: '指环王 (Lord of the Rings)',
    year: '2001',
    description: '中土世界史诗，选择成为游侠或精灵。',
    prompt: 'Iconic movie poster shot from Lord of the Rings. Middle-earth landscape background. Epic scale.',
    category: 'fantasy',
    previewColor: 'from-green-900 to-slate-800',
    previewImage: 'https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?q=80&w=400',
    styleKeywords: 'Peter Jackson style, epic high fantasy, New Zealand landscapes, ethereal lighting.',
    roles: [
      {
        id: 'aragorn',
        name: '人皇游侠 (Ranger)',
        description: '身披斗篷，手持纳西尔圣剑，沧桑而坚毅。',
        prompt: 'The character is a rugged Ranger (Aragorn style). Wearing worn leather armor and a cloak. Holding a longsword. Standing in a misty forest. Epic, gritty fantasy.',
        previewImage: 'https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?q=80&w=400'
      },
      {
        id: 'elf',
        name: '精灵射手 (Elf)',
        description: '金发飘逸，手持长弓，高贵而优雅。',
        prompt: 'The character is an Elf archer (Legolas style). Long flowing hair, elegant elven tunic. Drawing a bow. Background is Rivendell or Lothlorien. Ethereal glow, majestic.',
        previewImage: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=400'
      }
    ]
  },
  {
    id: 'game_of_thrones',
    title: '权力的游戏 (Game of Thrones)',
    year: '2011',
    description: '身披皮草斗篷，手握宝剑，坐在铁王座上。',
    prompt: 'Iconic poster shot from Game of Thrones. The character is sitting on the Iron Throne, made of a thousand melted swords. Wearing heavy medieval fur cloaks and armor. Dark, moody lighting in the Great Hall of the Red Keep. Shafts of light, dust motes, serious expression. "Winter is Coming" vibe.',
    category: 'fantasy',
    previewColor: 'from-slate-900 to-stone-800',
    previewImage: 'https://images.unsplash.com/photo-1535615615574-9b93367b6058?q=80&w=400',
    styleKeywords: 'HBO epic fantasy, dark moody atmosphere, cold color grading, detailed medieval texture.'
  },

  // --- Superheroes ---
  {
    id: 'avengers',
    title: '复仇者联盟 (The Avengers)',
    year: '2012',
    description: '集结时刻，选择你的超级英雄身份。',
    prompt: 'The Avengers team shot. Epic action.',
    category: 'action',
    previewColor: 'from-blue-800 to-red-800',
    previewImage: 'https://images.unsplash.com/photo-1560932669-5e3252f28b84?q=80&w=400',
    styleKeywords: 'Marvel Cinematic Universe style, high contrast, crisp digital clarity, dynamic action.',
    roles: [
      {
        id: 'ironman',
        name: '钢铁侠 (Iron Man)',
        description: '身穿Mark系列战甲，掌心炮充能，悬浮空中。',
        prompt: 'The character is Iron Man. Wearing the red and gold metallic armor (face visible inside helmet HUD or helmet off). Hovering with repulsors glowing. High tech UI elements. Futuristic.',
        previewImage: 'https://images.unsplash.com/photo-1623984292149-a3cfd4bfaeb3?q=80&w=400'
      },
      {
        id: 'cap',
        name: '美国队长 (Captain)',
        description: '手持振金盾牌，身穿战术制服，目光坚定。',
        prompt: 'The character is Captain America. Wearing the blue tactical suit with star emblem. Holding the round vibranium shield. Battle damaged texture. Heroic pose.',
        previewImage: 'https://images.unsplash.com/photo-1592484867115-6605d695b697?q=80&w=400'
      },
      {
        id: 'widow',
        name: '黑寡妇 (Black Widow)',
        description: '黑色紧身战衣，手持双棍，特工姿态。',
        prompt: 'The character is Black Widow. Wearing a sleek black tactical bodysuit. Holding electric batons or pistols. Dynamic combat pose. Background is an urban battlefield. Cool, agile, intense.',
        previewImage: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=400'
      }
    ]
  }
];
