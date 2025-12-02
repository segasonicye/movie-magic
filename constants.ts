

import { MovieScene } from './types';

export const MOVIE_SCENES: MovieScene[] = [
  // --- Top Requested Classics (Placed at top for visibility) ---
  {
    id: 'titanic',
    title: '泰坦尼克号 (Titanic)',
    year: '1997',
    description: '永不沉没的巨轮，夕阳下的船头，跨越阶级的爱恋。',
    prompt: 'Iconic movie poster shot for Titanic. The bow of the ship at sunset.',
    category: 'classic', // Keep as Romance for the filter, but it's at the top of All now
    previewColor: 'from-blue-900 to-orange-400',
    previewImage: 'https://images.unsplash.com/photo-1500077423678-25eead48513a?q=80&w=400',
    roles: [
      {
        id: 'jack_role',
        name: 'Jack (The Artist)',
        description: '穷画家，站在Rose身后，扶着她的腰，在船头迎风飞翔。',
        prompt: 'The character is the USER cosplaying as Jack Dawson. \n\nIDENTITY:\n- Keep user\'s face.\n- Wearing suspenders and a white shirt.\n\nACTION:\n- Standing BEHIND Rose at the bow of the ship. Arms wrapped around her waist or holding her arms up. \n- The user is the protector/lover in the back. \n- Sunset lighting, golden hour, romantic emotional expression.',
        previewImage: 'https://images.unsplash.com/photo-1500077423678-25eead48513a?q=80&w=400'
      },
      {
        id: 'rose_role',
        name: 'Rose (The Lady)',
        description: '贵族少女，张开双臂，感受飞翔的自由。',
        prompt: 'The character is the USER cosplaying as Rose. \n\nIDENTITY:\n- Keep user\'s face.\n- Wearing a period dress.\n\nACTION:\n- Standing at the bow of the ship, arms wide open "flying". \n- Jack is behind her (blurred or partial). \n- Wind blowing hair. Sunset lighting, pure joy and freedom.',
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
    category: 'classic', // Moved to Classic for better finding
    previewColor: 'from-slate-800 to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=400'
  },
  {
    id: 'forrest_gump',
    title: '阿甘正传 (Forrest Gump)',
    year: '1994',
    description: '坐在长椅上，手拿巧克力盒，人生就像一盒巧克力。',
    prompt: 'Iconic movie poster shot from Forrest Gump. The character is sitting on a park bench. Wearing a light beige suit and checkered shirt. A suitcase and a box of chocolates next to them. White feather floating (optional). Friendly, innocent expression. Savannah bus stop background.',
    category: 'classic', // Moved to Classic
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
        prompt: 'The character is Joe Bradley (Gregory Peck style). Wearing a 50s suit. Riding a vintage Vespa scooter. Roman Colosseum in background. Black and White photography. Charming, handsome.',
        previewImage: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=400'
      },
      {
        id: 'ann',
        name: '安妮公主 (Princess Ann)',
        description: '白衬衫，长裙，坐在摩托车后座或驾驶，俏皮可爱。',
        prompt: 'The character is Princess Ann (Audrey Hepburn style). Wearing a white blouse and circle skirt. Riding a vintage Vespa scooter. Roman streets background. Black and White photography. Elegant, happy.',
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

  // --- Animation ---
  {
    id: 'spirited_away',
    title: '千与千寻 (Spirited Away)',
    year: '2001',
    description: '海上列车，无脸男，寻找回家的路。',
    prompt: 'Iconic movie poster shot from Spirited Away. The character is sitting on the red velvet seat of a train moving through the ocean. Outside the window is endless blue water and sky. A semi-transparent shadow spirit (No Face) sits nearby. Studio Ghibli style, hand-drawn anime aesthetic, vibrant colors, nostalgic.',
    category: 'animation',
    previewColor: 'from-blue-400 to-cyan-200',
    previewImage: 'https://images.unsplash.com/photo-1516738981173-ca740d753294?q=80&w=400',
    styleKeywords: 'Studio Ghibli style, cel shaded, hand painted background, anime realism.'
  },
  {
    id: 'spider_verse',
    title: '蜘蛛侠：平行宇宙 (Spider-Verse)',
    year: '2018',
    description: '信仰之跃，倒吊下坠，每个人都是蜘蛛侠。',
    prompt: 'Iconic movie poster shot from Spider-Man: Into the Spider-Verse. The character is wearing a Spider-Man suit with a hoodie and shorts (Miles Morales style) and sneakers. Falling UPSIDE DOWN towards the city skyline. Glass shattering. Comic book halftone dots (Ben-Day dots), chromatic aberration, graffiti neon aesthetic.',
    category: 'animation',
    previewColor: 'from-red-600 to-purple-600',
    previewImage: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=400',
    styleKeywords: 'Comic book style, halftone dots, chromatic aberration, vibrant neon, stylized 3D.'
  },
  {
    id: 'frozen',
    title: '冰雪奇缘 (Frozen)',
    year: '2013',
    description: '随它吧，冰雪女王的魔法时刻。',
    prompt: 'Iconic movie poster shot from Frozen. The character is cosplaying as Elsa the Snow Queen. Wearing a sparkling blue crystalline dress. Standing on an ice balcony, hands raised creating magical snow swirls and fractals. Disney 3D animation style, glowing blue lighting, magical atmosphere.',
    category: 'animation',
    previewColor: 'from-cyan-400 to-blue-600',
    previewImage: 'https://images.unsplash.com/photo-1548263594-a71ea65a85b2?q=80&w=400',
    styleKeywords: 'Disney 3D animation style, subsurface scattering, magical glow, ice particles, perfect lighting.'
  },
  {
    id: 'your_name',
    title: '你的名字 (Your Name)',
    year: '2016',
    description: '黄昏之时，阶梯上的相遇，穿越时空的羁绊。',
    prompt: 'Iconic movie poster shot from Your Name (Kimi no Na wa). The character is standing on the iconic red railing stairs in Tokyo. Looking back over their shoulder. Sunset "Magic Hour" lighting with lens flares. Makoto Shinkai style clouds (hyper-detailed). Emotional, romantic.',
    category: 'animation',
    previewColor: 'from-indigo-500 to-pink-400',
    previewImage: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=400',
    styleKeywords: 'Makoto Shinkai style, hyper-realistic backgrounds, lens flares, vibrant sunset colors, emotional anime.'
  },
  {
    id: 'arcane',
    title: '双城之战 (Arcane)',
    year: '2021',
    description: '皮尔特沃夫与祖安，金克丝的疯狂与悲伤。',
    prompt: 'Iconic poster shot from Arcane (League of Legends). The character is Jinx style (blue braids, tattoos) or Vi style (red jacket, gauntlets). Standing in a neon-lit Zaun alleyway or on the bridge. Fortiche production style (2.5D painted texture). Gritty, artistic, dramatic lighting.',
    category: 'animation',
    previewColor: 'from-fuchsia-700 to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1620553750892-71eb20253457?q=80&w=400',
    styleKeywords: 'Arcane style, painted textures, sharp brushstrokes, steampunk/cyberpunk aesthetic, dramatic neon lighting.'
  },

  // --- Game ---
  {
    id: 'god_of_war',
    title: '战神 (God of War)',
    year: '2018',
    description: '为了亡妻的遗愿，父子二人踏上北欧神话世界的征途。',
    prompt: 'Iconic game poster shot for God of War. Nordic mythology style.',
    category: 'game',
    previewColor: 'from-slate-500 to-cyan-900',
    previewImage: 'https://images.unsplash.com/photo-1542259691-3b7431e5c543?q=80&w=400', // Snowy mountain for Nordic feel
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

  // --- Chinese Classics ---
  {
    id: 'crouching_tiger',
    title: '卧虎藏龙 (Crouching Tiger)',
    year: '2000',
    description: '竹林之战，身轻如燕，剑气如虹。',
    prompt: 'Iconic movie poster shot from Crouching Tiger, Hidden Dragon. The character is a Wuxia warrior wearing white flowing traditional robes. Balancing on green bamboo branches high in the air. Sword drawn. Serene, ethereal martial arts atmosphere. Misty bamboo forest background.',
    category: 'action',
    previewColor: 'from-green-600 to-green-900',
    previewImage: 'https://images.unsplash.com/photo-1513818433747-5f178964893b?q=80&w=400',
    styleKeywords: 'Wuxia style, bamboo forest, ethereal lighting, floating action, traditional Chinese aesthetics.',
    useChineseTitle: true
  },
  {
    id: 'in_the_mood_for_love',
    title: '花样年华 (In the Mood for Love)',
    year: '2000',
    description: '60年代的香港，旗袍与西装，狭窄巷弄里的暧昧与遗憾。',
    prompt: 'Iconic movie poster shot from In the Mood for Love (Wong Kar-wai style). The character is wearing a vintage 1960s Cheongsam (Qipao) or a sharp suit. Leaning against a textured wall in a narrow Hong Kong alleyway. Warm, moody lighting. Shadows, cigarette smoke (optional), emotional longing.',
    category: 'romance',
    previewColor: 'from-red-900 to-amber-900',
    previewImage: 'https://images.unsplash.com/photo-1550508544-79659359e212?q=80&w=400',
    styleKeywords: 'Wong Kar-wai style, intense colors, film grain, emotional close-up, romantic melancholy.',
    useChineseTitle: true
  },
  {
    id: 'infernal_affairs',
    title: '无间道 (Infernal Affairs)',
    year: '2002',
    description: '天台对决，依然是警察与卧底的宿命。',
    prompt: 'Iconic movie poster shot from Infernal Affairs. Rooftop standoff scene. Hong Kong skyline background.',
    category: 'action',
    previewColor: 'from-sky-900 to-gray-900',
    previewImage: 'https://images.unsplash.com/photo-1517457210348-703079e57d4b?q=80&w=400',
    styleKeywords: 'Cool blue color grading, urban rooftop, tension, Hong Kong cinema style.',
    useChineseTitle: true,
    roles: [
      {
        id: 'yan',
        name: '陈永仁 (Tony Leung Role)',
        description: '胡茬，皮夹克，眼神忧郁的卧底警察。',
        prompt: 'The character is an undercover cop (Tony Leung style). Wearing a leather jacket, unkempt hair, stubble. Standing on a rooftop. Look of despair and determination. Cool blue tone.',
        previewImage: 'https://images.unsplash.com/photo-1517457210348-703079e57d4b?q=80&w=400'
      },
      {
        id: 'ming',
        name: '刘建明 (Andy Lau Role)',
        description: '西装革履，斯文败类，想做好人的黑帮卧底。',
        prompt: 'The character is a corrupt officer (Andy Lau style). Wearing a sharp black suit, clean shaven. Standing on a rooftop. Look of conflict and cold calculation. Urban background.',
        previewImage: 'https://images.unsplash.com/photo-1507537297725-24a1c434c175?q=80&w=400'
      }
    ]
  },
  {
    id: 'hero',
    title: '英雄 (Hero)',
    year: '2002',
    description: '漫天红叶，红衣剑客，为了天下的信念。',
    prompt: 'Iconic movie poster shot from Hero (Zhang Yimou style). The character is wearing flowing monochromatic red robes. Holding a sword. Standing amidst falling red autumn leaves. Intense, artistic color usage. Classical Chinese martial arts vibe.',
    category: 'action',
    previewColor: 'from-red-600 to-red-900',
    previewImage: 'https://images.unsplash.com/photo-1528696892704-5e11528bca29?q=80&w=400',
    styleKeywords: 'Zhang Yimou aesthetic, dominant red color palette, artistic composition, epic scale.',
    useChineseTitle: true
  },
  {
    id: 'grandmaster',
    title: '一代宗师 (The Grandmaster)',
    year: '2013',
    description: '雨夜，咏春，叶问。功夫是横与竖。',
    prompt: 'Iconic movie poster shot from The Grandmaster. The character is wearing a traditional Chinese long gown and a white fedora hat (optional). Standing in the rain at night. Raindrops frozen in slow motion around them. Wing Chun pose. Cinematic lighting, high contrast.',
    category: 'action',
    previewColor: 'from-slate-800 to-black',
    previewImage: 'https://images.unsplash.com/photo-1514539079130-25950c84965d?q=80&w=400',
    styleKeywords: 'Rainy night, high contrast black and white feel, slow motion aesthetic, kung fu master.',
    useChineseTitle: true
  },

  // --- Other Classics ---
  {
    id: 'pulp_fiction',
    title: '低俗小说 (Pulp Fiction)',
    year: '1994',
    description: '黑西装，爆炸头，经典的扭扭舞。',
    prompt: 'Iconic movie poster shot from Pulp Fiction. The character is dancing on a dance floor (Vincent Vega or Mia Wallace style). Retro 50s diner background. Cool, relaxed pose. Pop art aesthetic.',
    category: 'classic',
    previewColor: 'from-yellow-600 to-red-600',
    previewImage: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=400'
  },
  {
    id: 'truman_show',
    title: '楚门的世界 (The Truman Show)',
    year: '1998',
    description: '走上楼梯，触摸天空的尽头，那是世界的出口。',
    prompt: 'Iconic movie poster shot from The Truman Show. The character is walking up a white staircase that leads into a painted blue sky with clouds. Reaching out to touch the wall/sky. Surreal, philosophical atmosphere. "In case I don\'t see you...".',
    category: 'drama',
    previewColor: 'from-sky-400 to-blue-600',
    previewImage: 'https://images.unsplash.com/photo-1621213396860-254e4c29210e?q=80&w=400'
  },
  {
    id: 'casablanca',
    title: '卡萨布兰卡 (Casablanca)',
    year: '1942',
    description: '风衣，礼帽，迷雾中的机场告别。',
    prompt: 'Iconic movie poster shot from Casablanca. The character is wearing a trench coat and fedora hat. Standing in a foggy airport runway at night. Plane propeller in background. Noir lighting, sorrowful romantic expression. Black and white masterpiece.',
    category: 'classic',
    previewColor: 'from-gray-600 to-black',
    previewImage: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=400'
  },
  
  // --- Sci-Fi & Blockbusters ---
  {
    id: 'star_wars',
    title: '星球大战 (Star Wars)',
    year: '1977',
    description: '在遥远的银河系，原力与你同在。',
    prompt: 'Iconic movie poster shot for Star Wars. Space opera style.',
    category: 'scifi',
    previewColor: 'from-blue-900 to-purple-900',
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400',
    styleKeywords: 'Space opera, lightsabers, sci-fi adventure, cinematic glow, epic galaxy background.',
    roles: [
      {
        id: 'jedi',
        name: '绝地武士 (Jedi)',
        description: '手持蓝色或绿色光剑，身穿绝地长袍，守护和平。',
        prompt: 'The character is a Jedi Knight. Wearing Jedi robes (Luke/Obi-Wan style). Holding a glowing BLUE or GREEN lightsaber. Force push stance. Background is the Death Star hallway or Tatooine sunset. Heroic.',
        previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400'
      },
      {
        id: 'sith',
        name: '西斯武士 (Sith)',
        description: '手持红色十字光剑，身穿黑袍，堕入黑暗面。',
        prompt: 'The character is a Sith Lord. Wearing dark hooded robes (Kylo Ren/Vader style). Holding a crackling RED lightsaber. Menacing stance. Dark background with red lighting.',
        previewImage: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=400'
      }
    ]
  },
  {
    id: 'inception',
    title: '盗梦空间 (Inception)',
    year: '2010',
    description: '折叠的城市，梦中之梦，谁在旋转陀螺？',
    prompt: 'Iconic movie poster shot from Inception. The character is standing in a city street that is bending/folding upwards into the sky (Paris scene). Wearing a sharp suit. Looking calm amidst the surreal physics. Cool blue and grey color palette. Nolan realism.',
    category: 'scifi',
    previewColor: 'from-slate-600 to-gray-800',
    previewImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=400'
  },
  {
    id: 'avatar',
    title: '阿凡达 (Avatar)',
    year: '2009',
    description: '潘多拉星球，纳威人，骑乘伊卡兰飞翔。',
    prompt: 'Iconic movie poster shot from Avatar. The character is a Na\'vi (blue skin, large eyes, stripes). Riding a Banshee (Ikran) in the sky or standing in a bioluminescent forest. High-tech sci-fi meets nature. James Cameron style.',
    category: 'scifi',
    previewColor: 'from-blue-500 to-teal-500',
    previewImage: 'https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&w=400'
  },
  {
    id: 'matrix',
    title: '黑客帝国 (The Matrix)',
    year: '1999',
    description: '红药丸还是蓝药丸？子弹时间。',
    prompt: 'Iconic movie poster shot from The Matrix. The character is Neo or Trinity. Wearing a long black leather trench coat and sunglasses. Doing the "bullet dodge" move or standing in a hallway with green digital rain code overlays. Cyberpunk cool.',
    category: 'scifi',
    previewColor: 'from-green-900 to-black',
    previewImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400',
    roles: [
      {
        id: 'neo',
        name: '尼奥 (Neo)',
        description: '黑风衣，墨镜，救世主。',
        prompt: 'The character is Neo. Wearing black trench coat and sunglasses. Stopping bullets with hand raised. Green code background.',
        previewImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400'
      },
      {
        id: 'trinity',
        name: '崔妮蒂 (Trinity)',
        description: '紧身皮衣，凌厉身手。',
        prompt: 'The character is Trinity. Wearing black latex/leather suit. Mid-air kick pose or dual pistols. Cool, slick hair.',
        previewImage: 'https://images.unsplash.com/photo-1534294668821-28a3054f4256?q=80&w=400'
      }
    ]
  },
  {
    id: 'interstellar',
    title: '星际穿越 (Interstellar)',
    year: '2014',
    description: '穿越虫洞，五维空间，爱是唯一的引力。',
    prompt: 'Iconic movie poster shot from Interstellar. The character is wearing a realistic white astronaut space suit. Standing on an alien water planet or floating near a black hole (Gargantua). Epic scale, hard sci-fi, emotional isolation.',
    category: 'scifi',
    previewColor: 'from-indigo-900 to-black',
    previewImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=400'
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
    previewImage: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=400',
    styleKeywords: 'John Woo style, slow motion, doves, sparks, dual pistols, intense standoff, cinematic action.',
    roles: [
      {
        id: 'castor_troy',
        name: 'Castor Troy (恶棍)',
        description: '身穿神父装或长风衣，手持黄金双枪，疯狂而邪魅。',
        prompt: 'The character is Castor Troy (Nicolas Cage style). \n\nIDENTITY:\n- User\'s face.\n- Maniacal, crazy expression (wide eyes, wild grin).\n\nOUTFIT:\n- Wearing a black priest outfit or a long stylized trench coat.\n\nACTION:\n- Holding dual golden pistols. Doves flying in the background. Sparks flying. Chaotic, intense.',
        previewImage: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=400'
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
    id: 'john_wick',
    title: '疾速追杀 (John Wick)',
    year: '2014',
    description: '由于一只狗引发的复仇，西装暴徒。',
    prompt: 'Iconic movie poster shot from John Wick. The character is wearing a tactical black suit with a black tie. Long hair (optional) and beard (optional). Holding a pistol (center axis relock stance). Neon noir lighting (purple/blue/pink). Rain soaked street background. "Yeah, I\'m thinking I\'m back."',
    category: 'action',
    previewColor: 'from-purple-900 to-pink-900',
    previewImage: 'https://images.unsplash.com/photo-1517504734587-2890819debab?q=80&w=400'
  },
  {
    id: 'terminator_2',
    title: '终结者2 (Terminator 2)',
    year: '1991',
    description: '皮衣，墨镜，哈雷摩托，I\'ll be back.',
    prompt: 'Iconic movie poster shot from Terminator 2. The character is the T-800. Wearing leather jacket and sunglasses. Sitting on a Harley Davidson motorcycle or holding a shotgun. One eye glowing red (optional). Blue metallic lighting. Industrial background.',
    category: 'scifi',
    previewColor: 'from-blue-800 to-slate-800',
    previewImage: 'https://images.unsplash.com/photo-1535581652167-3d6b98c08126?q=80&w=400'
  },
  {
    id: 'gladiator',
    title: '角斗士 (Gladiator)',
    year: '2000',
    description: '身穿罗马铠甲，在竞技场中央，向皇帝复仇。',
    prompt: 'Iconic movie poster shot from Gladiator. The character is Maximus. Wearing Roman general armor / gladiator armor. Standing in the Colosseum dust. Sword in hand. Sunlight streaming through clouds. Epic, historical.',
    category: 'action',
    previewColor: 'from-yellow-700 to-orange-900',
    previewImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=400' // Colosseum Image
  },
  {
    id: 'leon',
    title: '这个杀手不太冷 (Léon)',
    year: '1994',
    description: '杀手与少女，盆栽与牛奶。',
    prompt: 'Iconic movie poster shot from Léon: The Professional.',
    category: 'drama',
    previewColor: 'from-stone-700 to-black',
    previewImage: 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=400',
    roles: [
      {
        id: 'leon_role',
        name: '莱昂 (Léon)',
        description: '圆墨镜，针织帽，风衣，手提箱。',
        prompt: 'The character is Léon. Wearing a beanie hat, round sunglasses, and a wool coat. Holding a potted plant and a milk carton (or gun case). New York apartment hallway background. Stoic expression.',
        previewImage: 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=400'
      },
      {
        id: 'mathilda',
        name: '玛蒂尔达 (Mathilda)',
        description: 'Choker项圈，短发，抱盆栽的叛逆少女。',
        prompt: 'The character is Mathilda. Wearing a choker necklace, bomber jacket, shorts. Holding a potted plant. Sitting on a staircase. Rebellious, sad expression. 90s aesthetic.',
        previewImage: 'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=400'
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
    previewImage: 'https://images.unsplash.com/photo-1506353266980-fa7d533d69c2?q=80&w=400' // Highlands mist
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

  // --- Fantasy ---
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
    previewImage: 'https://images.unsplash.com/photo-1620002166946-444a95d7362d?q=80&w=400', // Comic/Hero style
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
  },
  {
    id: 'la_la_land',
    title: '爱乐之城 (La La Land)',
    year: '2016',
    description: '紫色夜空下的双人共舞，献给做梦的人。',
    prompt: 'Iconic movie poster shot from La La Land. Dancing in Griffith Park.',
    category: 'romance',
    previewColor: 'from-purple-600 to-indigo-800',
    previewImage: 'https://images.unsplash.com/photo-1516054575922-f0b8ee4bec31?q=80&w=400',
    roles: [
      {
        id: 'sebastian',
        name: '塞巴斯蒂安 (Sebastian)',
        description: '白衬衫，西裤，在路灯下优雅起舞。',
        prompt: 'The character is Sebastian. Wearing a white dress shirt and black trousers. Dancing near a street lamp overlooking the city lights of LA. Purple and blue twilight sky.',
        previewImage: 'https://images.unsplash.com/photo-1516054575922-f0b8ee4bec31?q=80&w=400'
      },
      {
        id: 'mia',
        name: '米娅 (Mia)',
        description: '明黄色的连衣裙，在星光下旋转。',
        prompt: 'The character is Mia. Wearing a bright yellow dress and tap shoes. Dancing near a street lamp. Purple and blue twilight sky. Joyful, romantic.',
        previewImage: 'https://images.unsplash.com/photo-1490334800361-92b1a62961d3?q=80&w=400'
      }
    ]
  }
];
