

import { MovieScene } from './types';

export const MOVIE_SCENES: MovieScene[] = [
  // --- Superhero Blockbusters ---
  {
    id: 'avengers_endgame',
    title: '复仇者联盟 (The Avengers)',
    year: '2019',
    description: '终局之战集结：选择成为钢铁侠、美队或雷神。',
    prompt: 'Iconic movie poster shot from Avengers: Endgame. The character is standing in the ruins of the Avengers compound. Dust, smoke, and epic destruction in background. Dramatic lighting. Marvel Cinematic Universe visual style.',
    category: 'action',
    previewColor: 'from-blue-800 to-red-800',
    previewImage: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=400', 
    styleKeywords: 'MCU style, digital VFX, high contrast, epic scale, battlefield texture.',
    roles: [
      {
        id: 'iron_man',
        name: 'Iron Man (钢铁侠)',
        description: '身穿Mark 85纳米战甲，掌心炮蓄势待发。',
        prompt: 'Iconic movie poster shot from Avengers: Endgame. The character acts as Tony Stark / Iron Man. Wearing the red and gold Mark 85 armor (Helmet OFF to show face). Glowing blue Arc Reactor on chest. Hand raised with repulsor glowing. Battlefield background. High tech UI elements.'
      },
      {
        id: 'captain_america',
        name: 'Captain America (美国队长)',
        description: '手持破碎的振金盾牌，满脸尘土的坚毅。',
        prompt: 'Iconic movie poster shot from Avengers: Endgame. The character acts as Captain America. Wearing the dark blue scale-mail tactical suit. Holding the round Vibranium shield (dirty and scratched). Helmet OFF. Face is sweaty and dirty. Expression of pure determination. "Assemble" moment.'
      },
      {
        id: 'thor',
        name: 'Thor (雷神)',
        description: '召唤风暴与雷电，手持风暴战斧。',
        prompt: 'Iconic movie poster shot from Avengers: Infinity War / Endgame. The character acts as Thor. Wearing black armor and a red cape. Holding the Stormbreaker axe. Blue lightning crackling around the character. Dark stormy sky background. Epic god-like power.'
      },
       {
        id: 'black_widow',
        name: 'Black Widow (黑寡妇)',
        description: '身穿黑色战术服，背景是爆炸与火光。',
        prompt: 'Iconic movie poster shot from The Avengers. The character acts as Black Widow. Wearing a sleek black tactical bodysuit with gadgets. Hair flowing. Standing in a combat stance with a burning city background. Spy thriller action aesthetic.'
      }
    ]
  },
  {
    id: 'superman',
    title: '超人 (Superman)',
    year: '2013',
    description: '身穿红斗篷，悬浮在地球平流层之上。',
    prompt: 'Iconic movie poster shot from Man of Steel. The character is Superman. Floating in the upper atmosphere with the curve of the Earth below. The sun is cresting the horizon (lens flare). Wearing the textured blue kryptonian suit and flowing red cape. Majestic, god-like, hopeful.',
    category: 'scifi',
    previewColor: 'from-blue-700 to-red-600',
    previewImage: 'https://images.unsplash.com/photo-1525373612131-d8e13d6118d6?q=80&w=400', 
    styleKeywords: 'Zack Snyder aesthetic, high contrast, desaturated colors, epic scale, lens flare, film grain.'
  },
  {
    id: 'wonder_woman',
    title: '神奇女侠 (Wonder Woman)',
    year: '2017',
    description: '手持守护银镯，穿越无人区的战壕。',
    prompt: 'Iconic movie poster shot from Wonder Woman (2017). The character is Diana Prince. Wearing the red and gold Amazonian armor and tiara. Crossing "No Man\'s Land" battlefield. Deflecting bullets with glowing bracelets (optional). Blue and orange color grading. Slow motion dust particles.',
    category: 'action',
    previewColor: 'from-yellow-600 to-blue-800',
    previewImage: 'https://images.unsplash.com/photo-1601389862276-857c74719602?q=80&w=400',
    styleKeywords: 'DCEU style, golden hour, war aesthetic, vibrant saturation, slow motion visual.'
  },
  {
    id: 'deadpool',
    title: '死侍 (Deadpool)',
    year: '2016',
    description: '坐在大桥栏杆上，手里拿着画笔或双刀，打破第四面墙。',
    prompt: 'Iconic movie poster shot from Deadpool. The character is wearing the red and black tactical suit (Mask OFF or pulled up to show face). Sitting casually on a highway bridge railing. Holding a katana or a drawing. Background is chaotic action frozen in time. Irreverent, gritty, vibrant red.',
    category: 'action',
    previewColor: 'from-red-600 to-black',
    previewImage: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=400',
    styleKeywords: 'Action comedy, vibrant red, dirty texture, shallow depth of field.'
  },

  // --- Golden Age Classics ---
  {
    id: 'casablanca',
    title: '北非谍影 (Casablanca)',
    year: '1942',
    description: '身穿风衣与礼帽，在迷雾笼罩的机场告别。',
    prompt: 'Iconic movie poster shot from Casablanca (1942). The character is wearing a trench coat and a fedora hat. Standing on a foggy airport tarmac at night with a vintage plane in the background. Soft focus, romantic noir lighting, rich black and white photography, melancholic farewell atmosphere.',
    category: 'classic',
    previewColor: 'from-gray-800 to-gray-600',
    previewImage: 'https://images.unsplash.com/photo-1517457210348-703079e57d4b?q=80&w=400', // Vintage/Fog
    styleKeywords: 'Film Noir, Humphrey Bogart style, soft diffusion, romantic fog, dramatic shadows, black and white.'
  },
  {
    id: 'roman_holiday',
    title: '罗马假日 (Roman Holiday)',
    year: '1953',
    description: '骑着Vespa摩托车穿梭在罗马街头，经典的浪漫逃亡。',
    prompt: 'Iconic movie poster shot from Roman Holiday (1953). The character is riding a vintage Vespa scooter through the cobblestone streets of Rome. The Colosseum is visible in the background. Joyful expression, wind in hair. Black and white photography, romantic comedy aesthetic.',
    category: 'romance',
    previewColor: 'from-stone-300 to-gray-400',
    previewImage: 'https://images.unsplash.com/photo-1508356986536-11f813c239d2?q=80&w=400',
    styleKeywords: '1950s Rome, vintage travel poster style, joyful, airy, black and white, classic romance.',
    roles: [
      {
        id: 'joe',
        name: 'Joe (格里高利·派克)',
        description: '身穿西装，帅气地驾驶Vespa摩托车。',
        prompt: 'Iconic movie poster shot from Roman Holiday (1953). The character plays Joe Bradley (Gregory Peck role). Wearing a 50s suit and tie, driving a vintage Vespa scooter. Smiling confidently. Rome background. Black and White.'
      },
      {
        id: 'ann',
        name: 'Ann (奥黛丽·赫本)',
        description: '白衬衫与丝巾，坐在后座享受自由。',
        prompt: 'Iconic movie poster shot from Roman Holiday (1953). The character plays Princess Ann (Audrey Hepburn role). Wearing a white button-up shirt with rolled sleeves and a neck scarf. Sitting on a Vespa scooter, laughing. Elegant, free, iconic short hair styling (optional). Black and White.'
      }
    ]
  },
  {
    id: 'singin_rain',
    title: '雨中曲 (Singin\' in the Rain)',
    year: '1952',
    description: '在雨中手握雨伞，抱住路灯杆开心起舞。',
    prompt: 'Iconic movie poster shot from Singin\' in the Rain (1952). The character is wearing a grey 1950s suit and fedora hat, hanging off a street lamp post with one hand, holding a black umbrella in the other. It is raining heavily but the expression is pure joy. Technicolor vibrancy, wet street reflections, musical magic.',
    category: 'classic',
    previewColor: 'from-blue-800 to-yellow-500',
    previewImage: 'https://images.unsplash.com/photo-1515524738708-327f6b0033a7?q=80&w=400',
    styleKeywords: 'Technicolor, MGM Musical style, vibrant saturation, joy in rain, theatrical lighting.'
  },
  {
    id: 'some_like_it_hot',
    title: '热情如火 (Some Like It Hot)',
    year: '1959',
    description: '穿着闪亮的流苏裙，在聚光灯下演奏尤克里里。',
    prompt: 'Iconic movie poster shot from Some Like It Hot (1959). The character is wearing a glamorous 1920s flapper dress with sequins and holding a ukulele. Standing in a bright stage spotlight. High key black and white photography, playful expression, Marilyn Monroe energy, sparkling texture.',
    category: 'classic',
    previewColor: 'from-yellow-100 to-gray-200',
    previewImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400', // Vintage Glamour
    styleKeywords: '1950s Screwball Comedy, High Key lighting, glamour photography, sparkling bokeh, silver screen.'
  },
  {
    id: 'psycho',
    title: '惊魂记 (Psycho)',
    year: '1960',
    description: '站在阴森的贝茨旅馆前，经典的希区柯克悬疑风。',
    prompt: 'Iconic movie poster shot from Psycho (1960). The character is standing in the foreground, looking back nervously. In the background on a hill is the ominous Bates Motel house silhouette against a dark sky. High contrast black and white. Gothic shadows, suspenseful atmosphere.',
    category: 'classic',
    previewColor: 'from-black to-slate-900',
    previewImage: 'https://images.unsplash.com/photo-1509503378526-976d5420311c?q=80&w=400', // Creepy House
    styleKeywords: 'Alfred Hitchcock style, suspense thriller, sharp shadows, dutch angle, gothic horror aesthetic.'
  },
  {
    id: 'good_bad_ugly',
    title: '黄金三镖客 (The Good, the Bad and the Ugly)',
    year: '1966',
    description: '身披墨西哥斗篷，沙漠中的西部牛仔对决。',
    prompt: 'Iconic movie poster shot from The Good, the Bad and the Ugly (1966). The character is wearing a poncho and a brown cowboy hat, chewing on a cigarillo (optional). Extreme close-up or wide shot in a vast desert landscape under harsh sunlight. Sweat, grit, intense squinting eyes. Spaghetti Western aesthetic.',
    category: 'action',
    previewColor: 'from-yellow-800 to-orange-700',
    previewImage: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=400',
    styleKeywords: 'Sergio Leone style, Spaghetti Western, extreme close-ups, harsh desert light, gritty texture, Ennio Morricone vibe.'
  },
  {
    id: 'citizen_kane',
    title: '公民凯恩 (Citizen Kane)',
    year: '1941',
    description: '站在巨大的竞选海报前发表演讲，深焦摄影。',
    prompt: 'Iconic movie poster shot from Citizen Kane (1941). Low angle shot looking up at the character standing at a podium. Behind them is a gigantic, looming black and white election poster of their own face. Deep focus photography (everything in focus). Dramatic expressionist lighting, powerful and imposing.',
    category: 'classic',
    previewColor: 'from-gray-900 to-stone-800',
    previewImage: 'https://images.unsplash.com/photo-1555547849-063a56a51d02?q=80&w=400', // Vintage/Speaker
    styleKeywords: 'Orson Welles style, Gregg Toland cinematography, Deep Focus, Low Angle, German Expressionism lighting.'
  },
  {
    id: 'jaws',
    title: '大白鲨 (Jaws)',
    year: '1975',
    description: '在"奥卡号"渔船上，面对海面下潜伏的巨大阴影。',
    prompt: 'Iconic movie poster shot from Jaws (1975). The character is standing on the deck of the fishing boat "Orca" at sea. Looking anxiously at the water. A massive, dark shark fin cuts through the surface nearby. Blue ocean, bright sky, high tension. Steven Spielberg blockbuster style.',
    category: 'action',
    previewColor: 'from-blue-600 to-cyan-800',
    previewImage: 'https://images.unsplash.com/photo-1566311891966-87989d2d0b57?q=80&w=400',
    styleKeywords: 'Suspense thriller, wide shot, natural lighting, ocean texture, primal fear.'
  },
  {
    id: 'taxi_driver',
    title: '出租车司机 (Taxi Driver)',
    year: '1976',
    description: '身穿军绿夹克，站在雨夜霓虹灯下的纽约街头。',
    prompt: 'Iconic movie poster shot from Taxi Driver (1976). The character is wearing an M-65 field jacket and aviator sunglasses. Walking through steam rising from a NYC manhole at night. Neon signs reflect in puddles. Gritty, grainy 70s film aesthetic, loneliness, psychological tension.',
    category: 'drama',
    previewColor: 'from-yellow-900 to-green-900',
    previewImage: 'https://images.unsplash.com/photo-1495572050486-a96f89a32775?q=80&w=400',
    styleKeywords: 'Martin Scorsese style, neon noir, gritty texture, isolation, bokeh street lights.'
  },
  {
    id: 'apocalypse_now',
    title: '现代启示录 (Apocalypse Now)',
    year: '1979',
    description: '在丛林河流的巡逻艇上，背景是橙色的燃烧烟雾。',
    prompt: 'Iconic movie poster shot from Apocalypse Now (1979). The character is on a PBR river patrol boat. Background is a dense jungle with bright orange smoke/napalm visuals and helicopters in the distance. The character looks weary, face partially camouflaged. Intense heat, sweat, psychedelic war aesthetic.',
    category: 'action',
    previewColor: 'from-orange-600 to-red-900',
    previewImage: 'https://images.unsplash.com/photo-1549392261-24874e0d4734?q=80&w=400',
    styleKeywords: 'Francis Ford Coppola style, psychedelic war movie, vibrant orange and black, silhouette, atmospheric haze.'
  },

  // --- Chinese Classics ---
  {
    id: 'crouching_tiger',
    title: '卧虎藏龙 (Crouching Tiger)',
    year: '2000',
    description: '身穿白衣，手持青冥剑，立于翠绿竹林之巅。',
    prompt: 'Iconic movie poster shot from Crouching Tiger, Hidden Dragon (2000). The character is wearing traditional white wuxia robes, balancing effortlessly on top of swaying green bamboo branches. Holding the Green Destiny sword. Mist, soft sunlight filtering through leaves, ethereal martial arts atmosphere.',
    category: 'action',
    previewColor: 'from-green-800 to-emerald-600',
    previewImage: 'https://images.unsplash.com/photo-1596328634354-9eb5467c693a?q=80&w=400', // Bamboo
    styleKeywords: 'Ang Lee style, Wuxia elegance, lush green palette, wire-fu aesthetic, zen atmosphere.',
    useChineseTitle: true
  },
  {
    id: 'in_the_mood_for_love',
    title: '花样年华 (In the Mood for Love)',
    year: '2000',
    description: '60年代香港，昏黄路灯下的旗袍或西装，暧昧与克制。',
    prompt: 'Iconic movie poster shot from In the Mood for Love (2000). The character is standing in a narrow, dimly lit 1960s Hong Kong alleyway or staircase. Wearing a high-collar floral Qipao (if female) or a sharp vintage suit with slicked hair (if male). Soft cigarette smoke, warm yellow street light, peeling wallpaper texture. Melancholic longing.',
    category: 'romance',
    previewColor: 'from-red-900 to-amber-900',
    previewImage: 'https://images.unsplash.com/photo-1550100136-e074fa714874?q=80&w=400', // Vintage/Red/Neon
    styleKeywords: 'Wong Kar-wai style, step-printing, rich red and gold shadows, claustrophobic framing, romantic melancholy.',
    useChineseTitle: true
  },
  {
    id: 'infernal_affairs',
    title: '无间道 (Infernal Affairs)',
    year: '2002',
    description: '天台对决：选择做刘建明(西装)还是陈永仁(皮衣)。',
    prompt: 'Iconic movie poster shot from Infernal Affairs (2002). The character is standing on the edge of a high-rise skyscraper rooftop in Hong Kong. Background shows a bright blue sky and reflections on glass buildings. Wearing a black leather jacket or sharp suit. Holding a pistol by their side. Cool tones, high tension, urban isolation.',
    category: 'action',
    previewColor: 'from-slate-600 to-sky-800',
    previewImage: 'https://images.unsplash.com/photo-1505675549068-d3dd60a80e1a?q=80&w=400', // Rooftop/City
    styleKeywords: 'Hong Kong crime thriller, cool blue filter, wide angle rooftop, intense stare, urban minimalism.',
    useChineseTitle: true,
    roles: [
      {
        id: 'ming',
        name: '刘建明 (刘德华饰)',
        description: '身穿笔挺西装，眼神复杂的警司。',
        prompt: 'Iconic movie poster shot from Infernal Affairs (2002). The character acts as Inspector Lau Kin-ming (Andy Lau role). Wearing a sharp, clean-cut grey suit and tie. Standing on a bright rooftop with glass reflections. Expression is calm but hiding secrets. Clean, cold, blue-tinted lighting.'
      },
      {
        id: 'yan',
        name: '陈永仁 (梁朝伟饰)',
        description: '身穿黑色皮衣，胡茬沧桑的卧底。',
        prompt: 'Iconic movie poster shot from Infernal Affairs (2002). The character acts as Chan Wing-yan (Tony Leung role). Wearing a black leather jacket, casual shirt, looking slightly disheveled with stubble. Standing on a rooftop. Expression is melancholic and intense. Gritty, high contrast texture.'
      }
    ]
  },
  {
    id: 'hero_2002',
    title: '英雄 (Hero)',
    year: '2002',
    description: '身穿红色长袍，漫天黄叶飞舞，极致的色彩美学。',
    prompt: 'Iconic movie poster shot from Hero (2002). The character is wearing flowing crimson red robes, wielding a sword in a combat stance. Background is filled with swirling golden autumn leaves or red calligraphy banners. Monochromatic visual style (Red dominance). Epic, artistic, poetic martial arts.',
    category: 'action',
    previewColor: 'from-red-600 to-red-900',
    previewImage: 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=400', // Red/Leaves
    styleKeywords: 'Zhang Yimou aesthetic, color theory (Red), visual poetry, slow motion elegance, historical fantasy.',
    useChineseTitle: true
  },
  {
    id: 'the_grandmaster',
    title: '一代宗师 (The Grandmaster)',
    year: '2013',
    description: '雨夜街头，黑色礼帽与长衫，摆出咏春起手式。',
    prompt: 'Iconic movie poster shot from The Grandmaster (2013). The character is wearing a black fedora hat and traditional long black coat (changshan). Standing in heavy pouring rain at night. Street lamps backlighting the rain drops. Kung Fu stance (Wing Chun). High contrast, deep blacks, golden rim light.',
    category: 'action',
    previewColor: 'from-black to-gray-800',
    previewImage: 'https://images.unsplash.com/photo-1485592393086-5381a3d90f23?q=80&w=400', // Rain/Night
    styleKeywords: 'Wong Kar-wai Wuxia, film noir, rain texture, shutter speed motion, moody atmosphere.',
    useChineseTitle: true
  },

  // --- TV & Modern Classics ---
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
  {
    id: 'terminator_2',
    title: '终结者2 (Terminator 2)',
    year: '1991',
    description: '骑着哈雷摩托，戴着墨镜手持霰弹枪，冷酷的T-800。',
    prompt: 'Iconic movie poster shot from Terminator 2: Judgment Day (1991). The character is the T-800, wearing a black leather jacket and dark sunglasses, riding a Harley Davidson motorcycle. Holding a lever-action shotgun. Blue moonlight, sparks, intense action atmosphere, Brad Fiedel score vibe.',
    category: 'scifi',
    previewColor: 'from-blue-900 to-gray-900',
    previewImage: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=400',
    styleKeywords: 'James Cameron style, cold blue steel lighting, 90s action, leather texture.'
  },
  {
    id: 'better_call_saul',
    title: '风骚律师 (Better Call Saul)',
    year: '2015',
    description: '穿着艳俗的彩色西装，站在新墨西哥州的沙漠公路上。',
    prompt: 'Iconic poster shot from Better Call Saul. The character is Saul Goodman, wearing a flashy, colorful cheap suit (e.g. bright orange or purple) with a matching tie. Standing in the New Mexico desert with a blue sky. Wide angle lens. High contrast, vibrant colors, slightly tilted "Dutch angle" composition.',
    category: 'drama',
    previewColor: 'from-yellow-500 to-orange-400',
    previewImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=400',
    styleKeywords: 'Vince Gilligan style, desert yellow filter, wide angle, sharp focus, vibrant aesthetic.'
  },
  {
    id: 'big_bang_theory',
    title: '生活大爆炸 (Big Bang Theory)',
    year: '2007',
    description: '坐在那张标志性的皮沙发上，背景是书架和极客收藏品。',
    prompt: 'Iconic sitcom promo shot from The Big Bang Theory. The character is sitting in "the spot" on the brown leather couch in the apartment. Wearing a superhero t-shirt over a long sleeve shirt. Background filled with books, DNA models, and geek memorabilia. Bright, high-key sitcom lighting, colorful and cozy.',
    category: 'drama',
    previewColor: 'from-orange-200 to-yellow-100',
    previewImage: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=400',
    styleKeywords: 'Multi-camera sitcom lighting, bright colors, cozy apartment, pop culture references.'
  },
  {
    id: 'jurassic_park',
    title: '侏罗纪公园 (Jurassic Park)',
    year: '1993',
    description: '在大雨中手持红色信号弹，引诱霸王龙。',
    prompt: 'Iconic movie poster shot from Jurassic Park (1993). The character is standing in heavy rain at night, holding a bright red burning flare. In the background, the giant eye or silhouette of a T-Rex is visible behind a fence. High tension, dramatic red and blue lighting, wet texture.',
    category: 'scifi',
    previewColor: 'from-red-900 to-black',
    previewImage: 'https://images.unsplash.com/photo-1570483358100-352055106a77?q=80&w=400',
    styleKeywords: 'Steven Spielberg adventure style, rain effects, dramatic flare lighting, creature feature.'
  },
  {
    id: 'kung_fu_hustle',
    title: '功夫 (Kung Fu Hustle)',
    year: '2004',
    description: '斧头帮风格：身穿黑色西装礼帽，手持斧头，集体群舞。',
    prompt: 'Iconic movie poster shot from Kung Fu Hustle (2004). The character is dressed as the Axe Gang leader: black tuxedo, white shirt, black top hat. Holding a small hatchet axe. Background shows rows of gang members in suits. Stylized lighting, wide angle lens, action comedy aesthetic.',
    category: 'action',
    previewColor: 'from-gray-900 to-gray-800',
    previewImage: 'https://images.unsplash.com/photo-1615672917615-375f32a2d9b0?q=80&w=400',
    styleKeywords: 'Hong Kong action cinema, stylized choreography, sharp contrast, cool black and white tones.',
    useChineseTitle: true
  },
  {
    id: 'chinese_odyssey',
    title: '大话西游 (A Chinese Odyssey)',
    year: '1995',
    description: '至尊宝/孙悟空：站在大漠城墙上，夕阳下的武士背影。',
    prompt: 'Iconic movie poster shot from A Chinese Odyssey (1995). The character is dressed as the Monkey King/Warrior in rustic armor, standing on a crumbling desert city wall. A golden staff rests on their shoulder. Huge sunset in the background. Melancholic, dusty, golden hour lighting.',
    category: 'fantasy',
    previewColor: 'from-yellow-700 to-orange-900',
    previewImage: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=400',
    styleKeywords: 'Wuxia fantasy, desert aesthetic, golden sunset, nostalgic Hong Kong cinema.',
    useChineseTitle: true
  },
  {
    id: 'king_of_comedy',
    title: '喜剧之王 (King of Comedy)',
    year: '1999',
    description: '穿着这旧西装，面对大海大喊：“努力！奋斗！”',
    prompt: 'Iconic movie poster shot from King of Comedy (1999). Back view or side profile of the character standing on a wooden beach deck, shouting towards the ocean. Wearing a slightly oversized grey suit. Text "努力! 奋斗!" implies hope. Bright blue sea and sky, natural daylight, emotional.',
    category: 'drama',
    previewColor: 'from-blue-400 to-blue-200',
    previewImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400',
    styleKeywords: 'Slice of life, bright natural lighting, Hong Kong retro drama, emotional shouting.',
    useChineseTitle: true
  },
  {
    id: 'sin_city',
    title: '罪恶之城 (Sin City)',
    year: '2005',
    description: '高对比黑白漫改风，唯有领带或嘴唇是红色的。',
    prompt: 'Iconic movie poster shot from Sin City (2005). Extreme high contrast Black and White photography. The character is in a trench coat in the rain. KEY DETAIL: Only one element (like a tie, lips, or a dress) is colored vivid RED. Comic book noir aesthetic, white outlines, heavy shadows.',
    category: 'action',
    previewColor: 'from-gray-900 to-red-600',
    previewImage: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=400',
    styleKeywords: 'Frank Miller Graphic Novel style, B&W with Selective Color, Film Noir, heavy ink shadows.'
  },
  {
    id: 'spirited_away',
    title: '千与千寻 (Spirited Away)',
    year: '2001',
    description: '坐在水上列车里，窗外是无尽的大海与蓝天。',
    prompt: 'Iconic movie poster shot from Spirited Away (2001). The character is sitting on the red velvet seat of a vintage train. Through the window, we see a vast blue ocean covering the land under a blue sky with white clouds. A semi-transparent shadow spirit sits nearby. Ghibli animation style, peaceful, magical.',
    category: 'animation',
    previewColor: 'from-blue-400 to-cyan-300',
    previewImage: 'https://images.unsplash.com/photo-1517177646641-83fe10f14633?q=80&w=400',
    styleKeywords: 'Studio Ghibli style, cel shaded, hand-painted background, serene atmosphere, vivid colors.',
    useChineseTitle: true
  },
  {
    id: '2001_space',
    title: '2001太空漫游',
    year: '1968',
    description: '身穿宇航服，站在发光的白色八角形走廊中。',
    prompt: 'Iconic movie poster shot from 2001: A Space Odyssey. The character is wearing a vintage orange or silver space suit. Standing in the bright white, sterile, octagonal futuristic corridor of the spacecraft. Fish-eye lens perspective. Retro-futurism, sterile white lighting, Kubrick symmetry.',
    category: 'scifi',
    previewColor: 'from-gray-200 to-white',
    previewImage: 'https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=400',
    styleKeywords: 'Stanley Kubrick aesthetic, symmetrical composition, retro-futurism, sterile white, 60s Sci-Fi.'
  },
  {
    id: 'harry_potter',
    title: '哈利波特 (Harry Potter)',
    year: '2001',
    description: '身穿霍格沃茨长袍，手持魔杖，背景是城堡。',
    prompt: 'Iconic movie poster shot from Harry Potter and the Sorcerer\'s Stone. The character is wearing a Hogwarts school uniform with a Gryffindor (or house color) scarf and robe. Holding a magic wand with a glowing tip. Background is the Hogwarts castle at night with floating candles. Magical atmosphere, blue and gold lighting.',
    category: 'fantasy',
    previewColor: 'from-blue-900 to-yellow-600',
    previewImage: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=400',
    styleKeywords: 'Wizarding World aesthetic, magical glow, gothic architecture, rich textures, fantasy.'
  },
  {
    id: 'lord_of_the_rings',
    title: '指环王 (Lord of the Rings)',
    year: '2001',
    description: '身披斗篷手持宝剑或法杖，背景是中土世界山脉。',
    prompt: 'Iconic movie poster shot from The Lord of the Rings. The character is dressed as the Ranger Aragorn or an Elf warrior, wearing a weathered cloak and holding a sword. Standing on a mountain peak overlooking Middle-earth. Epic landscape, dramatic clouds, golden sunlight breaking through storm.',
    category: 'fantasy',
    previewColor: 'from-green-900 to-stone-700',
    previewImage: 'https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?q=80&w=400',
    styleKeywords: 'High Fantasy, Peter Jackson aesthetic, epic scale, natural textures, dramatic lighting.'
  },
  {
    id: 'avatar',
    title: '阿凡达 (Avatar)',
    year: '2009',
    description: '身处潘多拉星球的丛林，周围是发光的植物。',
    prompt: 'Iconic movie poster shot from Avatar (2009). The character is in the bioluminescent jungle of Pandora at night. (Note: Human character or Na\'vi style makeup/features, but keeping user identity). Surrounded by glowing neon plants and floating seeds. Blue and purple color palette, magical atmosphere, 3D depth.',
    category: 'scifi',
    previewColor: 'from-blue-800 to-purple-600',
    previewImage: 'https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&w=400',
    styleKeywords: 'Bioluminescence, James Cameron style, neon jungle, alien flora, vibrant blue and purple.'
  },
  {
    id: 'john_wick',
    title: '疾速追杀 (John Wick)',
    year: '2014',
    description: '身穿黑色战术西装，在霓虹雨夜中持枪。',
    prompt: 'Iconic movie poster shot from John Wick (2014). The character is wearing a sleek black tactical suit, hair wet from rain. Standing in a city street at night with neon signs reflecting on wet pavement. Holding a pistol (tactical grip). Intense stare. "Baba Yaga" vibe. High contrast, neon noir (pink/blue/purple).',
    category: 'action',
    previewColor: 'from-purple-900 to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1514302240736-b1fee59858eb?q=80&w=400',
    styleKeywords: 'Neon Noir, Gun Fu aesthetic, slick wet surfaces, high contrast, vibrant LEDs.'
  },
  {
    id: 'die_hard',
    title: '虎胆龙威 (Die Hard)',
    year: '1988',
    description: '身穿脏背心，赤脚在满地碎玻璃的大楼里战斗。',
    prompt: 'Iconic movie poster shot from Die Hard (1988). The character is wearing a dirty, sweaty white tank top (undershirt) and dark tactical pants. Holding an MP5 submachine gun or pistol. Background is the industrial interior of Nakatomi Plaza with shattered glass on the floor. Gritty, sweat-drenched, intense action hero vibe.',
    category: 'action',
    previewColor: 'from-slate-700 to-gray-500',
    previewImage: 'https://images.unsplash.com/photo-1590233049187-582cb6a21820?q=80&w=400',
    styleKeywords: '80s Action Movie, John McTiernan style, gritty realism, sweat texture, industrial lighting, lens flares.'
  },
  {
    id: 'gladiator',
    title: '角斗士 (Gladiator)',
    year: '2000',
    description: '身穿罗马战甲，站在斗兽场中央，高举短剑。',
    prompt: 'Iconic movie poster shot from Gladiator (2000). The character is wearing detailed Roman gladiator armor (breastplate and shoulder guard). Standing in the center of the Colosseum arena. Dust motes floating in shafts of sunlight. Holding a gladius sword. Epic historical drama atmosphere.',
    category: 'action',
    previewColor: 'from-yellow-700 to-orange-800',
    previewImage: 'https://images.unsplash.com/photo-1565019053088-e2eb7071db8c?q=80&w=400',
    styleKeywords: 'Ridley Scott aesthetic, epic scale, golden hour lighting, dust particles, historical texture.'
  },
  {
    id: 'dark_knight',
    title: '黑暗骑士 (The Dark Knight)',
    year: '2008',
    description: '站在哥谭市废墟或高楼边缘，暗蓝冷调。',
    prompt: 'Iconic movie poster shot from The Dark Knight (2008). The character is standing amidst the debris of Gotham City streets or on a ledge. Sparks or smoke rising. Wearing a dark suit or tactical armor. Cold blue color grading, IMAX scale, gritty realism, Christopher Nolan style.',
    category: 'action',
    previewColor: 'from-blue-900 to-black',
    previewImage: 'https://images.unsplash.com/photo-1478720568477-152d023220e5?q=80&w=400',
    styleKeywords: 'Christopher Nolan aesthetic, cold color temperature, gritty realism, IMAX aspect ratio.'
  },
  {
    id: 'indiana_jones',
    title: '夺宝奇兵 (Indiana Jones)',
    year: '1981',
    description: '头戴软呢帽，手持长鞭，逃离古老的机关陷阱。',
    prompt: 'Iconic movie poster shot from Raiders of the Lost Ark. The character is wearing a brown leather jacket, khaki shirt, and the iconic fedora hat. Holding a bullwhip. Background is an ancient temple ruin with vines and golden artifacts. Adventure atmosphere, warm lighting, dust and cobwebs.',
    category: 'action',
    previewColor: 'from-orange-700 to-yellow-600',
    previewImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400',
    styleKeywords: 'Steven Spielberg adventure, golden hour, pulp fiction aesthetic, high saturation, classic adventure.'
  },
  {
    id: 'mission_impossible',
    title: '碟中谍 (Mission: Impossible)',
    year: '1996',
    description: '身穿黑色特工装备，悬吊在白色高科技密室中。',
    prompt: 'Iconic movie poster shot from Mission: Impossible. The character is suspended by wires horizontally or hovering just above the floor in a sleek, bright white high-security computer room (The Vault). Wearing tight black tactical gear. Tension, high-tech thriller, clean lines.',
    category: 'action',
    previewColor: 'from-gray-200 to-white',
    previewImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400',
    styleKeywords: 'Brian De Palma style, dutch angles, sterile white environment, suspense, high-tech spy aesthetics.'
  },
  {
    id: 'aliens',
    title: '异形2 (Aliens)',
    year: '1986',
    description: '雷普利风格：手持脉冲步枪，在工业科幻背景中战斗。',
    prompt: 'Iconic movie poster shot from Aliens (1986). The character is acting as an Ellen Ripley archetype. Wearing a futuristic jumpsuit and holding a heavy pulse rifle. Sweat and grime on face. Background is a dark industrial spaceship corridor with blue warning lights and steam. intense survival horror action.',
    category: 'action',
    previewColor: 'from-blue-900 to-slate-800',
    previewImage: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=400',
    styleKeywords: 'James Cameron Sci-Fi, industrial aesthetic, blue lighting, steam and smoke, gritty texture.'
  },
  {
    id: 'interstellar',
    title: '星际穿越 (Interstellar)',
    year: '2014',
    description: '站在水之星球的无尽海面上，远处是巨浪。',
    prompt: 'Iconic movie poster shot from Interstellar (2014). The character is wearing a NASA astronaut suit (helmet off or on), standing in knee-deep water on Miller\'s Planet. In the distance, a colossal tidal wave reaches the clouds. Grey, blue, and metallic tones. Epic scale, isolation, awe-inspiring.',
    category: 'scifi',
    previewColor: 'from-slate-500 to-blue-400',
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400',
    styleKeywords: 'Hans Zimmer score vibe, epic scale, muted colors, realistic sci-fi, IMAX visuals.'
  },
  {
    id: 'lion_king',
    title: '狮子王 (The Lion King)',
    year: '1994',
    description: '站在荣耀石之巅，俯瞰非洲大草原的日出。',
    prompt: 'Iconic movie poster shot from The Lion King (1994/2019). The character is standing proudly at the edge of Pride Rock. (Human reimagining or tribal royalty style). Below is the vast African savanna at sunrise. Golden red sun, silhouette trees. "Circle of Life" atmosphere. Majestic, warm colors.',
    category: 'animation',
    previewColor: 'from-orange-500 to-red-600',
    previewImage: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=400',
    styleKeywords: 'Epic sunrise, African savanna texture, golden hour silhouette, majestic royalty.'
  },
  {
    id: 'fight_club',
    title: '搏击俱乐部 (Fight Club)',
    year: '1999',
    description: '穿着红色皮夹克，嘴里叼着烟，背景是肮脏的地下室。',
    prompt: 'Iconic movie poster shot from Fight Club (1999). The character is wearing a red leather jacket and sunglasses, holding a bar of pink soap. Standing in a grungy, dimly lit basement or tiled bathroom. Greenish fluorescent lighting. Gritty, rebellious, psychological thriller aesthetic.',
    category: 'drama',
    previewColor: 'from-red-800 to-green-900',
    previewImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=400',
    styleKeywords: 'David Fincher style, grime, desaturated colors with neon spikes, nihilistic atmosphere.'
  },
  {
    id: 'silence_lambs',
    title: '沉默的羔羊',
    year: '1991',
    description: '面部特写，一只鬼脸天蛾停在嘴唇上。',
    prompt: 'Iconic movie poster shot from The Silence of the Lambs (1991). Extreme close-up portrait of the character. Pale skin, piercing red eyes (optional). A Death\'s-head hawkmoth is covering the character\'s mouth. High contrast, spooky, psychological horror, red and black accents.',
    category: 'classic',
    previewColor: 'from-stone-200 to-red-900',
    previewImage: 'https://images.unsplash.com/photo-1533237264848-d309077b9bfa?q=80&w=400',
    styleKeywords: 'Psychological thriller, extreme close-up, symbolism, high contrast, eerie calm.'
  },
  {
    id: 'back_to_future',
    title: '回到未来',
    year: '1985',
    description: '看着手表的惊恐表情，身旁是带火焰轨迹的德罗宁跑车。',
    prompt: 'Iconic movie poster shot from Back to the Future (1985). The character is checking their wrist watch with a shocked expression. Standing next to the DeLorean time machine with fire trails on the ground. Lightning striking the clock tower in background. 80s adventure style, vibrant energy.',
    category: 'scifi',
    previewColor: 'from-orange-500 to-blue-500',
    previewImage: 'https://images.unsplash.com/photo-1542259681-d4cd71d18f59?q=80&w=400',
    styleKeywords: '80s Sci-Fi adventure, dynamic lighting, fire effects, comedic urgency.'
  },

  // --- All Time Classics (Poster Icons) ---
  {
    id: 'shawshank',
    title: '肖申克的救赎 (Shawshank)',
    year: '1994',
    description: '在暴雨中仰天张开双臂，拥抱自由的经典海报画面。',
    prompt: 'Iconic movie poster shot from The Shawshank Redemption (1994). The character is standing in pouring rain, shirt ripped open or shirtless, arms raised high to the sky in a V-shape, screaming in triumph and freedom. Dramatic cinematic lighting, lightning flashes, moody dark blue and grey tones, high contrast silhouette.',
    category: 'classic',
    previewColor: 'from-slate-900 to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1515658323427-4a60743f9d4e?q=80&w=400'
  },
  {
    id: 'godfather',
    title: '教父 (The Godfather)',
    year: '1972',
    description: '身穿黑色礼服，在那张著名的皮革扶手椅上，手持红玫瑰。',
    prompt: 'Iconic movie poster shot from The Godfather (1972). Close-up or medium shot. The character is The Don, wearing a sharp black tuxedo with a red rose in the lapel, sitting in a dark leather armchair. Deep shadows, "Rembrandt lighting" on the face, warm golden vintage tones, serious and authoritative expression.',
    category: 'classic',
    previewColor: 'from-stone-900 to-black',
    previewImage: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=400'
  },
  {
    id: 'forrest_gump',
    title: '阿甘正传 (Forrest Gump)',
    year: '1994',
    description: '穿着浅色西装和跑鞋，坐在公园长椅上，手捧巧克力盒。',
    prompt: 'Iconic movie poster shot from Forrest Gump (1994). Wide shot. The character is sitting on a wooden bus stop bench, wearing a beige suit, checkered shirt, and retro running shoes. Holding a box of chocolates on their lap. A white feather floating in the air. Bright daylight, soft focus background, clean composition.',
    category: 'drama',
    previewColor: 'from-blue-200 to-green-100',
    previewImage: 'https://images.unsplash.com/photo-1565551984250-719330193139?q=80&w=400'
  },
  {
    id: 'truman_show',
    title: '楚门的世界 (Truman Show)',
    year: '1998',
    description: '走上通往“出口”的白色阶梯，触摸虚假的蓝天墙壁。',
    prompt: 'Iconic movie poster shot from The Truman Show (1998). The character is walking up a white staircase that leads to a black door labeled EXIT. The background is a wall painted perfectly like a blue sky with fluffy clouds. The character touches the wall. Surrealism, bright saturated colors, symmetrical composition.',
    category: 'drama',
    previewColor: 'from-sky-400 to-blue-500',
    previewImage: 'https://images.unsplash.com/photo-1622340798253-125028442c8d?q=80&w=400'
  },
  {
    id: 'leon',
    title: '这个杀手不太冷 (Léon)',
    year: '1994',
    description: '选择扮演里昂(杀手)还是玛蒂尔达(复仇少女)。',
    prompt: 'Iconic character shot from Léon: The Professional (1994). The character is wearing a dark wool beanie cap and round black sunglasses. Holding a potted aglaonema plant and a carton of milk. Standing in a gritty apartment hallway. Sepia tones, high contrast, 90s thriller aesthetic.',
    category: 'action',
    previewColor: 'from-amber-900 to-gray-900',
    previewImage: 'https://images.unsplash.com/photo-1616766099511-b062972986f1?q=80&w=400',
    roles: [
      {
        id: 'leon',
        name: 'Leon (里昂)',
        description: '戴着冷帽和圆墨镜，怀抱盆栽。',
        prompt: 'Iconic character shot from Léon: The Professional (1994). The character acts as Leon. Wearing a dark wool beanie cap, round black sunglasses, and a trench coat. Holding a potted aglaonema plant. Stoic, serious expression. Gritty warm toned lighting.'
      },
      {
        id: 'mathilda',
        name: 'Mathilda (玛蒂尔达)',
        description: '短发项圈，手持牛奶，眼神倔强。',
        prompt: 'Iconic character shot from Léon: The Professional (1994). The character acts as Mathilda. Wearing a choker necklace, oversized bomber jacket, and holding a carton of milk. Leaning against a wall. Expression is rebellious and intense. 90s thriller aesthetic.'
      }
    ]
  },
  
  // --- Sci-Fi & Mind Bending ---
  {
    id: 'matrix',
    title: '黑客帝国 (The Matrix)',
    year: '1999',
    description: '经典的绿色数字雨背景，选择成为Neo或Trinity。',
    prompt: 'Iconic movie poster shot from The Matrix (1999). The character is wearing a long black leather trench coat and dark sunglasses. Background is streams of glowing green binary code (digital rain) in darkness. Cyberpunk atmosphere, cool green color grading, stoic expression.',
    category: 'scifi',
    previewColor: 'from-green-900 to-black',
    previewImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400',
    roles: [
      {
        id: 'neo',
        name: 'Neo (救世主)',
        description: '黑风衣，躲避子弹的经典姿态。',
        prompt: 'Iconic movie poster shot from The Matrix (1999). The character acts as Neo. Wearing a black cassock-style trench coat and black sunglasses. One hand raised stopping bullets in mid-air (bullet time effect). Green digital rain background. Intense focus.'
      },
      {
        id: 'trinity',
        name: 'Trinity (崔妮蒂)',
        description: '紧身皮衣，凌空飞踢的瞬间。',
        prompt: 'Iconic movie poster shot from The Matrix (1999). The character acts as Trinity. Wearing tight black latex/leather bodysuit and sunglasses. Mid-air action pose (jump kick) or dual wielding pistols. Matrix code background. Slick, dangerous, cool.'
      }
    ]
  },
  {
    id: 'inception',
    title: '盗梦空间 (Inception)',
    year: '2010',
    description: '站在巴黎街头，背后的城市如纸般折叠翻转。',
    prompt: 'Iconic movie poster shot from Inception (2010). The character stands in the center of a Paris street. The city buildings in the background are folding over onto themselves in a mind-bending spiral, defying gravity. Debris floating. Cool blue and grey color temperature, sharp focus, epic scale.',
    category: 'scifi',
    previewColor: 'from-slate-700 to-gray-600',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400'
  },
  {
    id: 'dune',
    title: '沙丘 (Dune)',
    year: '2021',
    description: '身穿蒸馏服行走在厄拉科斯沙漠，背景是巨大的日食。',
    prompt: 'Iconic movie poster shot from Dune (2021). Wide epic shot. The character is wearing a detailed Fremen stillsuit, walking on a sand dune ridge. Background features a massive planet or moon eclipse in a dusty orange sky. Monochromatic beige/orange palette, brutalist scale, cinematic grain.',
    category: 'scifi',
    previewColor: 'from-orange-800 to-yellow-900',
    previewImage: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=400'
  },
  {
    id: 'blade_runner',
    title: '银翼杀手2049',
    year: '2017',
    description: '在那条著名的橙色辐射走廊中，手持爆能枪。',
    prompt: 'Iconic visual from Blade Runner 2049. The character is standing on a bridge in a thick orange radioactive fog. Giant futuristic statues visible in the haze. Silhouette style lighting, intense monochromatic amber/orange color palette, cyberpunk noir.',
    category: 'scifi',
    previewColor: 'from-orange-600 to-red-700',
    previewImage: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=400',
    styleKeywords: 'Cyberpunk, Neon Noir, Denis Villeneuve style, atmospheric fog, silhouette.'
  },
  {
    id: 'star_wars',
    title: '星球大战 (Star Wars)',
    year: '1977',
    description: '手持光剑，背景是死星或双子夕阳。',
    prompt: 'Iconic movie poster shot from Star Wars. The character is holding a glowing lightsaber (blue or green) in a combat stance. Background involves the Death Star trench or a binary sunset on Tatooine. Space opera aesthetic, dramatic rim lighting, lens flares.',
    category: 'scifi',
    previewColor: 'from-blue-900 to-purple-900',
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400'
  },

  // --- Romance & Atmosphere ---
  {
    id: 'titanic',
    title: '泰坦尼克号 (Titanic)',
    year: '1997',
    description: '夕阳下的船头，Jack从背后拥抱Rose的经典浪漫瞬间。',
    prompt: 'Iconic movie poster shot from Titanic (1997). The character (Jack) is standing at the very bow of the ship, embracing a woman (Rose) from behind who has her arms spread wide "flying". The character is looking lovingly or into the distance. Golden hour sunset light glowing behind them. The vast Atlantic ocean below. Romantic, epic, warm golden backlighting, wind in hair.',
    category: 'romance',
    previewColor: 'from-blue-800 to-orange-400',
    previewImage: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=400',
    roles: [
      {
        id: 'jack',
        name: 'Jack (杰克)',
        description: '我是Jack：在船头紧紧拥抱Rose，守护这份爱。',
        prompt: 'Iconic movie poster shot from Titanic (1997). The character plays Jack Dawson. Close up or medium shot from the front/side. The character is standing at the ship\'s bow, embracing Rose DeWitt Bukater from behind. Rose has her arms out "flying". The character looks at her lovingly or at the horizon. Golden hour sunset, wind blowing hair, romantic, epic.'
      },
      {
        id: 'rose',
        name: 'Rose (露丝)',
        description: '我是Rose：张开双臂，在Jack的怀抱中飞翔。',
        prompt: 'Iconic movie poster shot from Titanic (1997). The character plays Rose DeWitt Bukater. Standing at the extreme bow of the Titanic with arms spread wide. Jack Dawson (a supporting figure) is standing directly behind, embracing her waist in the iconic pose. The character feels freedom and joy. Golden sunset, sea breeze, romantic.'
      }
    ]
  },
  {
    id: 'lalaland',
    title: '爱乐之城 (La La Land)',
    year: '2016',
    description: '洛杉矶夜景共舞：选择Sebastian或Mia。',
    prompt: 'Iconic movie poster shot from La La Land (2016). Long shot. The character is dancing (holding a lamp post or twirling) on a hill overlooking Los Angeles city lights. The sky is a deep, saturated twilight purple and blue. The character wears a bright yellow dress or a sharp suit. Magical, dreamlike colors.',
    category: 'romance',
    previewColor: 'from-purple-800 to-blue-900',
    previewImage: 'https://images.unsplash.com/photo-1514525253440-b39345208668?q=80&w=400',
    roles: [
      {
        id: 'sebastian',
        name: 'Sebastian (塞巴斯蒂安)',
        description: '身穿西装，依附在路灯旁或起舞。',
        prompt: 'Iconic movie poster shot from La La Land (2016). The character is Sebastian. Wearing a slim shirt, tie, and dress pants. Dancing next to a street lamp with one hand on it. Background is purple LA twilight sky. Magical musical vibe.'
      },
      {
        id: 'mia',
        name: 'Mia (米娅)',
        description: '身穿黄裙，在夜色中旋转跳舞。',
        prompt: 'Iconic movie poster shot from La La Land (2016). The character is Mia. Wearing a bright iconic yellow dress. Twirling or dancing on a hill overlooking city lights. Deep purple twilight sky. Dreamy, romantic aesthetic.'
      }
    ]
  },
  {
    id: 'amelie',
    title: '天使爱美丽 (Amélie)',
    year: '2001',
    description: '拿着勺子准备敲碎焦糖布丁，标志性的红绿配色。',
    prompt: 'Iconic close-up shot from Amélie (2001). The character is looking directly at the camera with a mischievous smile, holding a spoon ready to crack a crème brûlée. Saturated red and green color palette, wide-angle lens distortion (slight), whimsical French cinema style.',
    category: 'romance',
    previewColor: 'from-red-700 to-green-700',
    previewImage: 'https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=400'
  },
  {
    id: 'her',
    title: '她 (Her)',
    year: '2013',
    description: '穿着红色衬衫，粉色背景，极简主义情感特写。',
    prompt: 'Iconic movie poster shot from Her (2013). Close-up portrait. The character is wearing a bright red button-up shirt. The background is a soft, solid pink or peach color. Soft, diffuse lighting, melancholic but warm expression, hipster sci-fi aesthetic.',
    category: 'romance',
    previewColor: 'from-red-400 to-pink-300',
    previewImage: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=400'
  },
  {
    id: 'breakfast',
    title: '蒂凡尼的早餐',
    year: '1961',
    description: '身穿黑色小礼服，戴着珍珠项链，手持长烟斗。',
    prompt: 'Iconic movie poster shot from Breakfast at Tiffany\'s (1961). The character is wearing a chic black dress, long black gloves, and a pearl necklace, holding a long cigarette holder. Standing in front of a jewelry store window. Elegant, vintage New York, high fashion.',
    category: 'classic',
    previewColor: 'from-gray-900 to-yellow-200',
    previewImage: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=400'
  },

  // --- Action & Adventure ---
  {
    id: '007_casino',
    title: '007: 皇家赌场',
    year: '2006',
    description: '奢华赌场内，身穿晚礼服，筹码与马提尼。',
    prompt: 'Iconic movie poster shot from James Bond Casino Royale. The character is wearing a tuxedo, sitting at a poker table with high stacks of chips. Holding a martini glass. Background is a blurred luxury casino interior. Sharp focus, expensive lighting, spy thriller elegance.',
    category: 'action',
    previewColor: 'from-gray-800 to-black',
    previewImage: 'https://images.unsplash.com/photo-1543791959-1264024d97c9?q=80&w=400'
  },
  {
    id: 'top_gun',
    title: '壮志凌云 (Top Gun)',
    year: '1986',
    description: '飞行员夹克与雷朋墨镜，背景是F-14战斗机。',
    prompt: 'Iconic movie poster shot from Top Gun (1986). The character is walking on a runway wearing a bomber jacket with patches and aviator sunglasses. An F-14 fighter jet is parked in the background with heat haze. Golden hour sunlight, lens flare, 80s military action vibe.',
    category: 'action',
    previewColor: 'from-blue-700 to-orange-500',
    previewImage: 'https://images.unsplash.com/photo-1474224017046-182ece80b263?q=80&w=400'
  },
  {
    id: 'kill_bill',
    title: '杀死比尔 (Kill Bill)',
    year: '2003',
    description: '身穿黄色紧身运动服，手持武士刀。',
    prompt: 'Iconic movie poster shot from Kill Bill Vol. 1. The character is wearing the yellow and black Bruce Lee style tracksuit, holding a Katana sword. Background is a Japanese dojo with blue silhouette lighting or snow. Tarantino style, hyper-violent aesthetic, vibrant yellow.',
    category: 'action',
    previewColor: 'from-yellow-400 to-yellow-600',
    previewImage: 'https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=400'
  },
  {
    id: 'mad_max',
    title: '疯狂的麦克斯4',
    year: '2015',
    description: '末日废土，驾驶改装战车，漫天黄沙。',
    prompt: 'Iconic movie poster shot from Mad Max: Fury Road. The character is driving a rusted war rig or standing on top of it. Background is a massive desert sandstorm (Haboob). Wearing rugged leather post-apocalyptic gear. High saturation orange and teal grading, intense chaos.',
    category: 'action',
    previewColor: 'from-orange-600 to-red-800',
    previewImage: 'https://images.unsplash.com/photo-1547234935-80c7142ee969?q=80&w=400'
  },

  // --- Visual Masterpieces ---
  {
    id: 'grand_budapest',
    title: '布达佩斯大饭店',
    year: '2014',
    description: '粉色饭店前，穿着紫色制服，极致对称构图。',
    prompt: 'Iconic movie poster shot from The Grand Budapest Hotel. Perfectly symmetrical composition. The character is wearing a purple lobby boy uniform with a pillbox hat. Background is the pink facade of the hotel or the concierge desk. Wes Anderson style, pastel colors, flat lighting, quirky.',
    category: 'drama',
    previewColor: 'from-pink-300 to-purple-400',
    previewImage: 'https://images.unsplash.com/photo-1565426873118-a17ed65d7429?q=80&w=400',
    styleKeywords: 'Wes Anderson style, central symmetry, pastel color palette, whimsical, flat lighting.'
  },
  {
    id: 'joker',
    title: '小丑 (Joker)',
    year: '2019',
    description: '在那段长阶梯上，红色西装，疯狂独舞。',
    prompt: 'Iconic movie poster shot from Joker (2019). The character is dancing on a steep outdoor concrete staircase in Gotham. Wearing a red suit, orange vest, and clown makeup. Low angle shot looking up. Gritty urban realism, green and cyan color grading.',
    category: 'drama',
    previewColor: 'from-red-800 to-teal-900',
    previewImage: 'https://images.unsplash.com/photo-1587321523493-272e2aa34f0d?q=80&w=400'
  },
  {
    id: 'spider_verse',
    title: '蜘蛛侠：平行宇宙',
    year: '2018',
    description: '倒着坠向天空，漫画波普风，霓虹城市。',
    prompt: 'Iconic movie poster shot from Spider-Man: Into the Spider-Verse. The character is falling upwards (inverted) against a New York skyline. Wearing a spider-suit and sneakers. Comic book aesthetics: Halftone dots, chromatic aberration, vibrant neon colors, graffiti style.',
    category: 'animation',
    previewColor: 'from-red-600 to-blue-600',
    previewImage: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=400',
    styleKeywords: 'Comic book Pop Art, Ben-Day dots, vibrant neon, graffiti street art style.'
  },
  {
    id: 'oppenheimer',
    title: '奥本海默',
    year: '2023',
    description: '戴着宽檐帽，背景是巨大的核爆火球，IMAX质感。',
    prompt: 'Iconic movie poster shot from Oppenheimer (2023). Close-up. The character is wearing a fedora hat and 1940s suit, staring intensely. Background is a wall of fire/explosion filling the frame. IMAX 70mm film quality, high contrast, terrifying yet majestic.',
    category: 'drama',
    previewColor: 'from-orange-900 to-black',
    previewImage: 'https://images.unsplash.com/photo-1477704080907-b04e4e2d3282?q=80&w=400'
  },
  {
    id: 'barbie',
    title: '芭比 (Barbie)',
    year: '2023',
    description: '驾驶粉色敞篷车，在塑料质感的芭比乐园中。',
    prompt: 'Iconic movie poster shot from Barbie (2023). The character is driving a pink convertible car, waving. Background is Barbie Land with plastic pink mountains and dreamhouses. Wearing a pink gingham dress or cowboy outfit. High key lighting, artificial plastic texture, fun and vibrant.',
    category: 'drama',
    previewColor: 'from-pink-500 to-pink-400',
    previewImage: 'https://images.unsplash.com/photo-1599692484555-d3e9114d5930?q=80&w=400'
  }
];
