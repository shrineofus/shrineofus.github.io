
const majorArcana = [
  { title: "愚者", upright: "我們從零開始，不怕重來。", reversed: "如果我們什麼都不記得，是不是就不會再受傷了？" },
  { title: "魔術師", upright: "你準備好了，現在，輪到你說出咒語。", reversed: "你只是學會了偽裝成準備好的人。" },
  { title: "女祭司", upright: "你知道的比你願意承認的還多。", reversed: "你沉默得太久，連自己都忘了聲音的模樣。" },
  { title: "女皇", upright: "你值得溫柔與滋養，而非只是成為他人的容器。", reversed: "你不必永遠成熟懂事，不必永遠給予。" },
  { title: "皇帝", upright: "你可以成為自己的秩序。", reversed: "控制一切只是為了不再被傷害一次。" },
  { title: "教皇", upright: "你不是神諭，但你可以選擇信什麼。", reversed: "不是每個傳承都該被繼續。" },
  { title: "戀人", upright: "我們之間，是選擇，不是命運。", reversed: "每一次相遇都有可能重寫故事線。" },
  { title: "戰車", upright: "就算一路踉蹌，你也能走到你想去的地方。", reversed: "你已經走太久，忘了為何出發。" },
  { title: "力量", upright: "你的溫柔比怒吼更有力量。", reversed: "你只是壓抑，不是平靜。" },
  { title: "隱者", upright: "你不是孤單，只是還在尋找能看見你的人。", reversed: "你封閉太久，甚至害怕門被打開。" },
  { title: "命運之輪", upright: "故事會重來，但這次你不一樣了。", reversed: "輪子轉過的地方，不一定非得再次踏入。" },
  { title: "正義", upright: "這次，你要為自己做出裁決。", reversed: "有時放過自己，比判決還困難。" },
  { title: "吊人", upright: "懸而未決，也是種決定。", reversed: "你不必永遠犧牲才能證明價值。" },
  { title: "死神", upright: "有些結束，是開始的必要條件。", reversed: "你不放手，就無法迎來真正的變化。" },
  { title: "節制", upright: "你不需要極端，只需要找到呼吸的節奏。", reversed: "一味平衡，有時只是逃避波動。" },
  { title: "惡魔", upright: "你可以喜歡那些不完美的部分，不代表要被它困住。", reversed: "你其實有鑰匙，只是忘了自己能開鎖。" },
  { title: "高塔", upright: "崩塌是為了讓謊言無所遁形。", reversed: "就算碎裂，也能拼湊成新的模樣。" },
  { title: "星星", upright: "就算看不見，你依然能相信希望存在。", reversed: "盼望不能只活在夢裡，還要落在行動上。" },
  { title: "月亮", upright: "不是所有迷霧都需要照亮，有些只需穿越。", reversed: "你害怕的，其實是你自己未說出的部分。" },
  { title: "太陽", upright: "你值得被看見，被照亮。", reversed: "不是每次微笑都代表快樂。" },
  { title: "審判", upright: "你已經走過黑夜，現在，是清算的時刻。", reversed: "你不是舊錯誤的總和。" },
  { title: "世界", upright: "故事還沒結束，但你已擁有足夠力量繼續前行。", reversed: "結局不是圓滿，而是你選擇走出去。" }
];

const subCards = [
  { title: "封鎖之夜", upright: "那晚風停了，你還站在我門外。", reversed: "你從來沒有離開過，我只是選擇忘記。" },
  { title: "繪馬斷線", upright: "願望不見了，但你還在這裡。", reversed: "是誰…剪斷了那根紅線？" },
  { title: "第六夜", upright: "我不確定這是不是第一次做這個夢……但我知道他又來了。", reversed: "我們已經重複太多次了，連謊話都開始變得動聽。" },
  { title: "猜拳決議", upright: "我們說好猜拳決定，輸的人留下來。", reversed: "其實你每次都讓我贏，對吧？" },
  { title: "笑著讓我贏", upright: "我知道你讓了我，可我還是想贏你一次。", reversed: "你一直輸給我，但我從來沒笑過。" },
  { title: "你沒找到我", upright: "我一直都在原地，你沒有走錯，你只是沒來找我。", reversed: "你說你找過了，那為什麼我從來沒有被發現？" }
];

function drawCard(deck) {
  const i = Math.floor(Math.random() * deck.length);
  const isReverse = Math.random() < 0.5;
  const card = deck[i];
  return `【${card.title}】｜${isReverse ? "逆位" : "正位"}<br>${isReverse ? card.reversed : card.upright}`;
}

document.getElementById("draw-main").onclick = () => {
  document.getElementById("main-result").innerHTML = drawCard(majorArcana);
};

document.getElementById("draw-sub").onclick = () => {
  document.getElementById("sub-result").innerHTML = drawCard(subCards);
};
