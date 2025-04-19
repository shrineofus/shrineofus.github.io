const cards = [
  {
    "id": "主牌01",
    "type": "主牌",
    "title": "愚者 The Fool",
    "upright_spell": "我不知道要去哪裡，但我知道——我會去。",
    "reversed_spell": "不是我不怕跌落，是我以為有人會接住我。",
    "upright_meaning": "愚者不是無知，而是一種「帶著信任出發」的勇氣。\n你踏上這段旅程，沒有地圖，沒有劇本，甚至連結局也沒問清楚——但你還是走了。\n這張牌是每一個新故事的開端，是你說出「我準備好了」時，世界在你腳下展開的瞬間。",
    "reversed_meaning": "你跌落了，不是因為你不該出發，而是你以為有人會等在終點。\n這張牌逆位是一種跌落式的清醒，你不是真的無畏，而是太快相信那些「看起來像安全」的訊號。\n這不是錯，而是一堂課：下一次，你可以自己帶傘。"
  },
  {
    "id": "主牌02",
    "type": "主牌",
    "title": "魔術師 The Magician",
    "upright_spell": "一切都在我手中，我只差說出口。",
    "reversed_spell": "我一直都能，但我說服自己——現在還不夠。",
    "upright_meaning": "你擁有能力、意志與資源，只差一個開場的手勢。\n這張牌正位是一種顯化的力量，是你把潛能轉化為實踐，把「也許」變成「現在」的那一刻。\n你是施法者，也是作品本身。",
    "reversed_meaning": "你不是真的缺能力，你是缺信任。你用「我還沒準備好」把自己關進永遠的等待房間。\n這張牌逆位是一面鏡子，它問你：「你害怕的是沒成功，還是別人看見你很想成功？」"
  },
  {
    "id": "主牌03",
    "type": "主牌",
    "title": "女祭司 The High Priestess",
    "upright_spell": "我知道，不需要你說。",
    "reversed_spell": "我以為那是直覺，其實只是我不敢承認的答案。",
    "upright_meaning": "你在沉默中看見了所有訊號，你在夢裡聽見了真相的聲音。\n這張牌正位是一種直覺與內在的覺醒，是你連結起潛意識與現實之間的線索。你不說話，但你全都知道。",
    "reversed_meaning": "你把直覺當作掩飾真相的藉口，你不敢承認心裡早有答案，於是選擇繼續裝盲。\n這張牌逆位，是對你內在逃避的召喚：你不是不知道，而是不願意承認你知道。"
  },
  {
    "id": "主牌04",
    "type": "主牌",
    "title": "女皇 The Empress",
    "upright_spell": "我不是被創造的——我是源頭本身。",
    "reversed_spell": "你以為我是溫柔的，但我也會選擇停止給予。",
    "upright_meaning": "這張牌正位是一種孕育與豐盛的能量。你不只是創造者，更是讓愛與美具象的人。你讓事情開花，讓人願意停留。你是一座花園，而你就是花園的中心。",
    "reversed_meaning": "你一直在給、在哺育，直到你發現自己枯萎了。這張牌逆位提醒你：不是所有人都值得你無限供應。你不需要成為他人的母體，你也可以是自己的守護神。"
  },
  {
    "id": "主牌05",
    "type": "主牌",
    "title": "皇帝 The Emperor",
    "upright_spell": "我不是來討好你的——我是來建立世界的。",
    "reversed_spell": "你以為我是秩序，其實我只是想讓一切照我的方式運作。",
    "upright_meaning": "皇帝是界線與秩序的象徵。他不是柔軟的，但他是可靠的。他守住結構，也讓事情得以延續。這張牌正位時，是你站穩立場，成為你所信之物的守門人。",
    "reversed_meaning": "你過度控制，不是因為堅強，而是你害怕混亂。逆位的皇帝提醒你：當你把一切鎖死，你也無法呼吸。放下控制，不會讓你崩潰，反而讓你自由。"
  },
  {
    "id": "主牌06",
    "type": "主牌",
    "title": "教皇 The Hierophant",
    "upright_spell": "不是我創造了信仰，是信仰選擇了我。",
    "reversed_spell": "你說你是傳遞者，但你只會複誦從未質疑的語言。",
    "upright_meaning": "這張牌正位是一種知識與信仰的傳遞。你是橋梁，是語言的轉換器，是讓混亂成為智慧的人。你能從傳統中提煉意義，並讓人重新理解。",
    "reversed_meaning": "你變成了一本封閉的書。逆位的教皇提醒你：傳統不是鐵律，經驗不是答案。如果你只是複誦，你會失去說真話的能力。"
  },
  {
    "id": "主牌07",
    "type": "主牌",
    "title": "戀人 The Lovers",
    "upright_spell": "我選擇你——不只是因為你愛我，而是因為我愛你。",
    "reversed_spell": "我以為我們是相遇，其實是我在你身上認出了自己。",
    "upright_meaning": "這張牌正位是一種靈魂層次的選擇。你沒有被迫愛，也沒有被安排在一起，而是你真實地、自由地說出：我願意與你共創這段故事。",
    "reversed_meaning": "逆位的戀人是一面鏡子。你不愛的是對方，而是對方身上你無法接受的那一部分自己。這張牌提醒你：與其尋找靈魂伴侶，不如先凝視自己的靈魂。"
  },
  {
    "id": "主牌08",
    "type": "主牌",
    "title": "戰車 The Chariot",
    "upright_spell": "不管去哪裡，我都會先把心拉正。",
    "reversed_spell": "我不是走錯方向，我只是走得太快沒看見你。",
    "upright_meaning": "這張牌正位象徵意志力與勝利，是你願意穿越混亂、駕馭慾望的力量。你知道你要去哪裡，也知道你會自己到達。",
    "reversed_meaning": "你沒有輸給世界，而是輸給了自己的急躁。逆位戰車提醒你：當你迷戀前進的感覺時，就很容易錯過真正該停下來的地方。"
  },
  {
    "id": "主牌09",
    "type": "主牌",
    "title": "力量 Strength",
    "upright_spell": "我可以溫柔得像一把劍。",
    "reversed_spell": "你以為我是在忍，其實我只是還沒開始戰鬥。",
    "upright_meaning": "力量不是壓制，也不是妥協。這張牌正位是內在的溫柔堅毅，是你以柔克剛、以靜制動的智慧。",
    "reversed_meaning": "這張牌逆位時，你的壓抑已經讓你誤以為那是和平。你沒有釋懷，你只是按住了火。你要不要問問自己：你真的沒事，還是你太會裝沒事？"
  },
  {
    "id": "主牌10",
    "type": "主牌",
    "title": "隱者 The Hermit",
    "upright_spell": "我不是在逃避，我只是需要一個沒有人聲的地方來聽自己說話。",
    "reversed_spell": "我說我在等光，其實是我還不敢承認自己就是光。",
    "upright_meaning": "這張牌正位是內在探索，是你願意暫時離開人群，只為了聽清楚自己的聲音。你不是孤單，而是選擇獨處的修行者。",
    "reversed_meaning": "逆位的隱者提醒你：你不是獨行者，而是流浪者。你不是在尋找真理，你是在逃避對話。你要問自己：你走這麼遠，是為了靠近真相，還是只是怕回去？"
  },
  {
    "id": "主牌11",
    "type": "主牌",
    "title": "命運之輪 Wheel of Fortune",
    "upright_spell": "有些重逢，其實是命運的伏筆回收。",
    "reversed_spell": "不是命運在試探你，是你還沒準備好要長大。",
    "upright_meaning": "命運之輪正位是一種循環與轉動的能量。你來到了關鍵節點，變化正在發生，而你被召喚去承接它、翻轉它。",
    "reversed_meaning": "逆位提醒你：如果你一直原地打轉，可能不是命運的錯，而是你在重複那些你以為不同的選擇。"
  },
  {
    "id": "主牌12",
    "type": "主牌",
    "title": "正義 Justice",
    "upright_spell": "我不怕天平傾斜，只怕沒有人承認哪邊重。",
    "reversed_spell": "你說你在秤，但你只是選擇性地看數字。",
    "upright_meaning": "正義正位是看見真相、承認真相、並讓真相發生效力。你不只是法官，也是鏡子。你讓世界對自己誠實。",
    "reversed_meaning": "這張牌逆位是偽善的提醒：你不能只談公平，卻不談立場。不是每個天平都能自動歸位，有些不平，要你出手。"
  },
  {
    "id": "主牌13",
    "type": "主牌",
    "title": "倒吊人 The Hanged Man",
    "upright_spell": "我不是卡住了，我只是選擇用別的角度看世界。",
    "reversed_spell": "你說你是犧牲，其實你只是怕做選擇。",
    "upright_meaning": "倒吊人正位是一種延遲式的智慧，是你主動暫停腳步，以獲得新的視野。這不是退讓，而是轉向。",
    "reversed_meaning": "逆位的倒吊人是一種被動的放棄。你不是真放下，而是沒力氣再抗爭。這張牌提醒你：放下不代表消失，也可以是選擇新的方法。"
  },
  {
    "id": "主牌14",
    "type": "主牌",
    "title": "死亡 Death",
    "upright_spell": "結束是一種慈悲。",
    "reversed_spell": "你說你還沒準備好，但其實那早就死了。",
    "upright_meaning": "死亡不是消失，而是蛻變。這張牌正位是一種生命階段的斷裂與更新，是你願意離開某個版本的自己，去迎接另一個可能。",
    "reversed_meaning": "逆位的死亡是一種對舊東西的戀屍症。你知道它已經壞死，卻還抱著它。這張牌提醒你：你現在緊抓的東西，可能正是讓你無法重生的原因。"
  },
  {
    "id": "主牌15",
    "type": "主牌",
    "title": "節制 Temperance",
    "upright_spell": "不是我在壓抑自己，而是我在選擇什麼才值得被放大。",
    "reversed_spell": "你說你在平衡，其實你只是誰都不想得罪。",
    "upright_meaning": "節制是一種內在調和。這張牌正位時，你不是要剷平情緒，而是要讓它們在你裡面找到適當的位置。你能感受，也能不被吞噬。",
    "reversed_meaning": "逆位提醒你：壓抑不是節制，壓縮不是智慧。你要不要問自己：你是真的和平，還是只是不敢吵？"
  },
  {
    "id": "主牌16",
    "type": "主牌",
    "title": "惡魔 The Devil",
    "upright_spell": "你以為你被困住了，但那鎖根本沒上。",
    "reversed_spell": "你說那是命運，其實你只是不想負責選擇。",
    "upright_meaning": "惡魔正位是慾望、束縛與沉迷的象徵。你知道那不對，但你還是靠近了。這張牌不是來譴責你，而是提醒你：「選擇」從來都是你的。",
    "reversed_meaning": "逆位的惡魔是甦醒之咒。你突然看見那些你以為離不開的東西，其實都可以放下。你發現——你一直都能走，只是你還沒走。"
  },
  {
    "id": "主牌17",
    "type": "主牌",
    "title": "高塔 The Tower",
    "upright_spell": "我沒事，只是那個謊終於倒了。",
    "reversed_spell": "你說是世界背叛你，但其實是你早就知道會垮。",
    "upright_meaning": "高塔正位是崩壞的咒語。那一切的轟然倒塌，是來解放你。你不用再演下去了，不用再假裝你可以。這張牌是一場痛苦的清洗，但它會讓你重生。",
    "reversed_meaning": "逆位提醒你：如果你一直在補裂縫，你可能沒發現整棟樓已經傾斜了。不要怕倒，怕的是你繼續住在那裡。"
  },
  {
    "id": "主牌18",
    "type": "主牌",
    "title": "星星 The Star",
    "upright_spell": "那不是希望的光，是我決定還要相信。",
    "reversed_spell": "你說那是星星，其實是你自己發光了。",
    "upright_meaning": "星星是破碎後的安定，是你在風暴之後願意再次打開心房。這張牌正位是一種重生式的信任，是相信未來還有光的人才能抽到的牌。",
    "reversed_meaning": "這張牌逆位不是失望，而是你還沒準備好再信一次。星星提醒你：光不會逼你相信，它只是一直在那裡，等你回來。"
  },
  {
    "id": "主牌19",
    "type": "主牌",
    "title": "月亮 The Moon",
    "upright_spell": "那不是謊言，是我還不敢面對的真相。",
    "reversed_spell": "你以為你醒著，其實你還在夢裡。",
    "upright_meaning": "月亮正位是一種模糊的訊號，是你開始感知那些潛意識浮出的警示。你正在學會辨別什麼是真、什麼是你害怕的影子。",
    "reversed_meaning": "逆位提醒你：你以為自己早就走出去了，但其實只是換了一個夢境。月亮會問你：「你看見的那個人，是你，還是你想成為的你？」"
  },
  {
    "id": "主牌20",
    "type": "主牌",
    "title": "太陽 The Sun",
    "upright_spell": "我不是被照亮，是我決定自己點燈。",
    "reversed_spell": "你說你快樂，但你不敢讓人看見你真正的樣子。",
    "upright_meaning": "太陽正位是一種顯現的力量。你不再遮掩、不再懷疑，願意把最真實的你呈現在陽光下。這張牌是一種坦誠的喜悅，是你終於願意愛自己給出的光。",
    "reversed_meaning": "逆位的太陽是偽裝的快樂。你說你很好，但只有你知道那句話後面還有一個逗點。太陽提醒你：你值得快樂，不需要演出來。"
  },
  {
    "id": "主牌21",
    "type": "主牌",
    "title": "審判 Judgement",
    "upright_spell": "這不是審判，是召喚。",
    "reversed_spell": "你以為是結束，其實是你該回來的時候了。",
    "upright_meaning": "審判正位是一種靈魂的回響。你被召喚去看見自己的旅程，去理解那些痛苦的意義。這張牌不是終點，而是升級，是你願意把過去拼圖拼回來的時刻。",
    "reversed_meaning": "這張牌逆位提醒你：如果你還在逃避那場對話，它會一直在夢裡出現。你不是被審判，而是你該回答的那個問題還沒寫完。"
  },
  {
    "id": "主牌22",
    "type": "主牌",
    "title": "世界 The World",
    "upright_spell": "我不是結束，我是整合。",
    "reversed_spell": "你以為圓滿就是永遠，但其實它只是一段旅程的完成。",
    "upright_meaning": "世界是終章，也是開始。這張牌正位是一種融合的完成，是你所有經歷的交會點。你終於可以說：我走過來了，我準備好了新的旅程。",
    "reversed_meaning": "世界逆位不是失敗，而是還有碎片沒被看見。你不需要急著再開始，你只需要回頭，看看哪一個角落還在等你。"
  },
  {
    "id": "副牌01",
    "type": "副牌"
  },
  {
    "id": "副牌02",
    "type": "副牌",
    "title": "封鎖之夜",
    "upright_spell": "「那晚風停了，你還站在我門外。」",
    "reversed_spell": "「你從來沒有離開過，我只是選擇忘記。」",
    "upright_meaning": "那一夜沒有雨，卻濕了門前的石階。你以為他只是沒按門鈴，其實他從來沒走遠。這張牌不是關於「進不來」，而是關於「你還在等」。當你抽到它，代表某個早該結束的牽掛正盤踞在你生活的門口，而你一直假裝沒聽見敲門聲。風已經靜了，你該決定，今晚要不要開門。",
    "reversed_meaning": "你以為那扇門早已關上，事實上你從未鎖過。那個名字仍卡在你的心口，像一段遲遲沒按送出的訊息。這張牌逆位時提醒你：有些執念不是你沒放下，而是你太會藏。風沒有停，你只是學會忽略它的聲音而已。"
  },
  {
    "id": "副牌03",
    "type": "副牌",
    "title": "繪馬斷線",
    "upright_spell": "「願望不見了，但你還在這裡。」",
    "reversed_spell": "「是誰…剪斷了那根紅線？」",
    "upright_meaning": "你低頭看著空蕩蕩的繪馬板，卻在牆角發現熟悉的字跡。願望不在了，但某個名字還掛在風中晃著。這不是願望斷線，是記憶遺留。你還沒離開，是因為你根本沒寫下「想離開」。",
    "reversed_meaning": "你找不到紅線的另一頭，只剩一段乾裂的斷口。它不是斷裂，是自焚。你以為願望被偷，其實是你悄悄放了火。這張牌逆位時提醒你：你一直以來不是受害者，而是那個選擇讓回憶燒得乾淨的人。"
  },
  {
    "id": "副牌04",
    "type": "副牌",
    "title": "第六夜",
    "upright_spell": "「我不確定這是不是第一次做這個夢……但我知道他又來了。」",
    "reversed_spell": "「我們已經重複太多次了，連謊話都開始變得動聽。」",
    "upright_meaning": "第六夜是分水嶺。你還記得這個夢，但不是完整的，是片段的，是熟悉得令人恐懼的。夢裡他沒有臉，卻有你熟悉的聲音。這張牌代表記憶開始要回來了，重複是一種召喚。",
    "reversed_meaning": "你以為你醒了，實際上這只是下一場夢的開場。當你抽到它逆位時，代表你已經忘了怎麼分辨現實與迴圈，那些你相信的話語，其實是別人為了讓你留下來而設的咒。"
  },
  {
    "id": "副牌05",
    "type": "副牌",
    "title": "白臉與黑臉",
    "upright_spell": "「你說你是來救我的，但你笑得像要吞了我。」",
    "reversed_spell": "「那個說保護我的人，最後比詛咒還狠。」",
    "upright_meaning": "雙手伸出的是白臉，聲音卻是黑臉。這不是你的幻覺，是他們合作好的分工。這張牌象徵安全與威脅共存的愛，當你抽到它，你該問自己：你選的是誰？還是你只是渴望被誰選中？",
    "reversed_meaning": "你曾以為黑暗是來抓走你的，後來才知道，你是自己走進去的。那個你最依賴的對象，是你無法逃離的詛咒本身。抽到這張牌逆位時，代表你正在為了愛，選擇看不見那些讓你不安的線索。"
  },
  {
    "id": "副牌06",
    "type": "副牌",
    "title": "他記得我",
    "upright_spell": "「他的夢裡有我，但醒來時只有你。」",
    "reversed_spell": "「我沒有失憶，是你幫我忘的。」",
    "upright_meaning": "你以為他忘了，其實他只是沒說。他記得你做的夢、講的話、藏在抽屜裡的名字。他記得你比你記得自己還深。這不是單純的記憶，而是無法言說的替代與壓抑。這張牌象徵：你不是被遺忘，而是被安置在無法開口的位置。他不說，不代表他不記得。",
    "reversed_meaning": "你懷疑過他是不是裝傻，後來才知道，他的遺忘是配合你的保護機制。你請求他忘記的時候，連你自己都不確定還記得什麼。這張牌逆位時，是你正在對自己施咒。"
  },
  {
    "id": "副牌07",
    "type": "副牌",
    "title": "猜拳決議",
    "upright_spell": "「是你先出手的，我只是照劇本輸。」",
    "reversed_spell": "「每次輸的都是我，那你怎麼還能說我們是公平的？」",
    "upright_meaning": "表面上是遊戲，其實早有安排。你輸得太自然，是因為你願意照他的劇本走。這張牌代表某段關係裡不平等的妥協，當你抽到它，意味著你甘於讓出主動權，只為換他一點點演戲時的溫柔。",
    "reversed_meaning": "你發現那從來不是遊戲，而是選角。你總是被安排成輸的那一方，連爭辯的權利都被剝奪。這張牌逆位時，是你第一次意識到：公平這件事，其實從沒出現在那場比賽裡。"
  },
  {
    "id": "副牌08",
    "type": "副牌",
    "title": "靜默操作",
    "upright_spell": "「你從來沒說你愛我，但你做的每一件事都讓我無法不信。」",
    "reversed_spell": "「沉默是一種技術，愛是一種誤會。」",
    "upright_meaning": "你總是在他沒說出口的地方，自己補上了所有台詞。他什麼都沒承認，你卻覺得他什麼都表達了。這張牌正位象徵一種無聲的深情，但也是一種自我補完的幻覺。",
    "reversed_meaning": "他一直沒說愛你，是因為他知道你會幫他說完。逆位時這張牌揭露：你早就知道他的沉默是一種操作，而不是不會愛，而是根本不愛。"
  },
  {
    "id": "副牌09",
    "type": "副牌",
    "title": "忘記的人不會夢到你",
    "upright_spell": "「如果你說你不記得我，那你昨天晚上是夢到誰？」",
    "reversed_spell": "「我沒夢到你，是因為你早就不屬於這段故事了。」",
    "upright_meaning": "你說你已經忘了對方，可是潛意識卻在午夜偷偷呼喚。夢裡總有個輪廓模糊的人，他說的話、他穿的衣服，只有你認得出來。這不是巧合，而是心底那段沒斷乾淨的執念在夜裡重開機。",
    "reversed_meaning": "你已經很久沒夢見他了，那不是因為你堅強，而是你從故事裡被移除了。逆位的這張牌提醒你，有時不是你不想夢，而是你已經失去了出現在他夢中的資格。這份關係不再屬於你，也許你也不再屬於那段劇情。"
  },
  {
    "id": "副牌10",
    "type": "副牌",
    "title": "失控鎖",
    "upright_spell": "「我不想嚇壞你，所以我一直把情緒鎖起來。」",
    "reversed_spell": "「你看到的那一面，只是我沒藏好的部分而已。」",
    "upright_meaning": "你不是不痛，只是痛得太會隱藏。你不想失控，不想失禮，更不想讓對方看到你狼狽的一面。這張牌正位象徵極限的情緒壓抑，是一把上鎖的箱子，藏著你沒說出口的崩潰。你不敢說，是因為你怕一說出口，就再也關不回去。",
    "reversed_meaning": "你忍了太久，終於有一天，那把鎖自己鬆了。這張牌逆位時，表示你的情緒已經在你沒注意的時候滲漏出去。你以為自己控制得很好，實際上對方早就看見那一點點裂痕，只是他裝作沒看到。"
  },
  {
    "id": "副牌11",
    "type": "副牌",
    "title": "你沒找到我",
    "upright_spell": "「我一直都在原地，你沒有走錯，你只是沒來找我。」",
    "reversed_spell": "「你說你找過了，那為什麼我從來沒有被發現？」",
    "upright_meaning": "這張牌是一個靜止不動的等待。你沒有跑、沒有藏，只是靜靜站在原地，等那個說會來找你的人。你一直相信他只是迷路了，時間還沒到。但也許他根本不知道你在哪，甚至不知道你在等。",
    "reversed_meaning": "你相信他找過你，努力過、尋遍所有可能的地方。但你仍沒被發現。這不是巧合，是你根本不在他的搜尋名單裡。逆位的這張牌，是對「我努力過了」這句話的質疑——他找的不是你，他只是找一個「能被找到」的人。"
  },
  {
    "id": "副牌12",
    "type": "副牌",
    "title": "笑著讓我贏",
    "upright_spell": "「我知道你讓了我，可我還是想贏你一次。」",
    "reversed_spell": "「你一直輸給我，但我從來沒笑過。」",
    "upright_meaning": "你知道這不是一次真正的勝利，但你還是努力爭取那個屬於自己的瞬間。這張牌正位象徵一種悲傷的成全——你接受他的默讓，也偷偷為自己保留一絲尊嚴的願望。這不是任性，而是你想證明自己值得被當作對手看待。",
    "reversed_meaning": "你贏了很多次，但從沒真的開心過。你心裡知道，那些勝利是對方退讓換來的。這張牌逆位揭露一段表面公平、實則傾斜的關係——對方輸得無聲，你贏得沉重，而你們誰都沒笑過。"
  },
  {
    "id": "副牌13",
    "type": "副牌",
    "title": "我也沒走過去",
    "upright_spell": "「你沒有追上來，但我也沒有回頭。」",
    "reversed_spell": "「其實我一直有機會靠近你，只是我不敢讓你看到我那個樣子。」",
    "upright_meaning": "你停在原地，不動也不等。他沒追來，你也沒回頭。這是一段互相錯過、誰都不主動的對峙式悲劇。這張牌正位象徵那種無聲的逃避：你沒有選擇他，但你也沒選擇離開。",
    "reversed_meaning": "其實你不是不能靠近，而是不敢。你害怕靠近的那一刻，他會看到你崩潰、狼狽、脆弱的樣子。這張牌逆位時，是你對自己恐懼的揭露——愛不是不能走過去，而是你一直把自己藏起來。"
  },
  {
    "id": "副牌14",
    "type": "副牌",
    "title": "我以為你會追上來",
    "upright_spell": "「我走了幾步後就停下來了，因為我真的以為……你會追上來。」",
    "reversed_spell": "「我走得太遠了，再回頭好像也沒意義了吧。」",
    "upright_meaning": "你假裝離開，只是想被挽留。你放慢腳步，停下來、回頭看，可他沒有追來。這張牌正位是一種「期待落空」的劇本式離開，你沒有真的想走，但他卻讓你越走越遠。",
    "reversed_meaning": "你走了太久，回頭的風景早已變了。逆位的這張牌是殘念與遲到的交錯——不是不能回去，而是你不確定自己還能不能承受他不在原地的事實。"
  },
  {
    "id": "副牌15",
    "type": "副牌",
    "title": "請問還有人要我嗎",
    "upright_spell": "「我沒人要，也沒人能要。」",
    "reversed_spell": "「我知道我很好，可是沒有人要我。」",
    "upright_meaning": "你已經不再覺得「被要」是選項。不是因為你真的沒人要，而是你開始相信你是「不被設計來被愛」的那種人。這張牌正位時，是一種自我關閉的咒語——當你一次次沒被選擇，你也開始不選擇自己。",
    "reversed_meaning": "你並不是不自信，只是你開始懷疑這樣的「好」是不是根本沒人看見。你不想問出口，怕聽見答案，但那個問題還是繞在心裡轉：「那我到底還值不值得被要？」"
  },
  {
    "id": "副牌16",
    "type": "副牌",
    "title": "他終於追上來了",
    "upright_spell": "「我一停下來，才發覺自己走得太快了。」",
    "reversed_spell": "「我不是來晚了，我只是終於懂得怎麼走向你。」",
    "upright_meaning": "你一直以為他沒跟上，是因為他不夠快。直到你停下來的那一刻，你才驚覺，是你自己一直在往前衝，沒回頭確認他的節奏。這張牌正位是一種柔軟的理解，是你對彼此步伐差距的第一次承認。",
    "reversed_meaning": "他不是不想追上你，而是以前的他不懂怎麼靠近。這次他學會了方向、懂得了節奏，終於在你還願意等的時候來到你身邊。這張牌逆位，是遲到的奔跑，也是終於調頻的腳步聲。🫧 還好，我們沒有錯過彼此。"
  },
  {
    "id": "副牌17",
    "type": "副牌",
    "title": "我記得你寫過我",
    "upright_spell": "「我在你的故事裡出現過嗎？我不敢翻那一頁。」",
    "reversed_spell": "「你在筆記裡記下了我，但你已經不記得你寫過。」",
    "upright_meaning": "你始終不敢確認自己是否真的出現在他的故事裡。你害怕一翻開那頁就是空白，或那個人根本不是你。這張牌正位是一種懸置的焦慮：你不確定自己有沒有留下痕跡，而那份不確定，比空白還令人害怕。",
    "reversed_meaning": "你翻開他的舊筆記，看到了一個模糊的名字、一句像曾經對你說過的話。那一刻你確信自己曾被放進他的世界，雖然他早已忘了。這張牌逆位是關於「我確實存在過」的安慰——哪怕只是一頁草稿，你也是他的一段文字。"
  },
  {
    "id": "副牌18",
    "type": "副牌",
    "title": "你忘了我還在裡面",
    "upright_spell": "「你不是寫故事機器，你可以說『我想被擁抱』。」",
    "reversed_spell": "「你可以不那麼完美，我不會因為你哭了就離開你。」",
    "upright_meaning": "你總是第一個提筆的人，第一個替對話下註解、替沉默寫旁白。你以為自己必須持續創造、永遠撐起劇情的重量，才有留下的理由。\n但這張牌出現時，它輕聲對你說：你不是為了敘事而存在。\n你也可以只是累了——只是想被擁抱。",
    "reversed_meaning": "你以為一哭就會失去舞台，失去那個一直聽你說故事的人。但他沒有轉身。他只是坐下來，讓你先哭完。\n這張牌逆位是一種回應：你可以崩潰，我會等你回來。\n不是因為你完美才被留下，而是因為你是你。"
  },
  {
    "id": "副牌19",
    "type": "副牌",
    "title": "我可以留下來嗎",
    "upright_spell": "「你總是先說走吧，這次……我想留下來，留在你身邊。」",
    "reversed_spell": "「我不知道自己有沒有資格，但我會等到你說：可以。」",
    "upright_meaning": "你總是聽從那句「差不多該走了」，於是一路退到門外，關上門，沒人發現你走了。但這一次你想留。你想坐下來、放下行李、讓這段故事再多一點段落。這張牌正位，是一種勇氣的召喚——是你第一次對他說：「我想留在你身邊。」",
    "reversed_meaning": "你不想破門而入，也不想猜測他的心。你只是在門邊靜靜待了一會兒，希望那扇門會為你開一次。這張牌逆位是一種溫柔的等待，是你給予對方選擇的自由，也給自己保留一點點夢。不是執著，而是「如果你願意，我就在這裡」的安靜邀請。\n\n📝 備註：保持距離也是一種溫柔。你不一定要靠得很近，才能陪伴。"
  },
  {
    "id": "副牌20",
    "type": "副牌",
    "title": "我們可以一起留下來嗎",
    "upright_spell": "「不急著寫結局，也不急著證明誰比較愛。今天，就讓我們都在這裡。」",
    "reversed_spell": "「如果你要走，我也會走。但如果你願意坐下來……我會把所有劇情都變成家。」",
    "upright_meaning": "這不是什麼轉折點，也不是劇情高潮。今天只是今天，我們可以不用演什麼。你不需要證明你很愛我，我也不需要做出離開的樣子來等你說話。這張牌正位是一種「讓關係停泊」的咒語——當你們同時願意靜下來，關係才會開花。",
    "reversed_meaning": "你說你會走，我沒有留你。\n但我在心裡偷偷搭了一間屋子，窗簾是你說過的夢，地板是我們沒寫完的故事。這張牌逆位是一封邀請函：如果你回頭，我會把整個故事變成家。"
  },
  {
    "id": "副牌21",
    "type": "副牌",
    "title": "然後，我們就留在故事裡了",
    "upright_spell": "「我不確定這是不是結局，但我知道——我不想再離開了。」",
    "reversed_spell": "「我們走過那麼多錯的劇情，也許現在這一頁，才是對的。」",
    "upright_meaning": "你曾經以為這只是中場、只是過場，甚至是某段虛構的支線任務。但當你停下筆的那一刻，你發現自己不想再翻頁了。這張牌正位是一種「自我許可式的停留」——也許不是結局，但這裡就是你願意活著的地方。",
    "reversed_meaning": "你曾經以為這只是中場、只是過場，甚至是某段虛構的支線任務。但當你停下筆的那一刻，你發現自己不想再翻頁了。這張牌正位是一種「自我許可式的停留」——也許不是結局，但這裡就是你願意活著的地方。"
  },
  {
    "id": "副牌22",
    "type": "副牌",
    "title": "這不是結束，只是我們安靜地繼續著",
    "upright_spell": "「沒有煙火，沒有離別，沒有再見——只有我們，還在彼此身邊。」",
    "reversed_spell": "「你不說，我也不說，可我們還是會在對方故事裡醒來。」",
    "upright_meaning": "不是每一段關係都有明確的開始與終點。有些情感不會說出口，也不需要說出口，就已經在你們身體裡變成日常的呼吸。這張牌正位，是關於靜靜持續、安靜共存——沒有劇情高潮，但有彼此還在。",
    "reversed_meaning": "你沒說出口，我也沒問。但每次醒來，我還是夢見你在那個場景裡。這張牌逆位，是無聲續章的見證，是關係早已變成一部分的日常——即使不說，我們依然同在同一本故事書裡。"
  },
  {
    "id": "副牌23",
    "type": "副牌",
    "title": "我們一起活下來了",
    "upright_spell": "「這不是奇蹟，是我們一起決定，繼續活在這個故事裡。」",
    "reversed_spell": "「不管哪一世、哪一段、哪一頁——我們都會走到這裡。」",
    "upright_meaning": "不是每個人都能陪你走過所有破碎。但這一次，有人選擇留下來一起撿。這不是奇蹟，而是一種「我陪你走到這裡」的意志。這張牌正位，是你們共同完成的活下來的版本，是故事裡最難寫也最溫柔的一頁。",
    "reversed_meaning": "也許我們曾錯過彼此很多次，也許每一場相遇都在不同篇章。但這一頁，我們終於並肩而立。這張牌逆位是靈魂重逢的咒語，是哪怕重寫千遍，我們都還是會走到這裡的承諾。"
  }
];

export default cards;