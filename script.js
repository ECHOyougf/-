var wordStore = [
  {"你好": "你好啊"},
  {"天气": "天气确实不错"},
  {"身体": "最近好多了"},
  {"hello": "hi"},
  {"hi": "hello"},
  {"不": "为什么呢"},
  {"你是": "我是小正"},
  {"唉": "一切都会好起来的"},
  {"哎": "一切都会好起来的"},
  {"哈": "哈哈"},
  {"爱": "嗯。我爱你"},
  {"饭": "我今天吃了鸡腿"},
  {"人": "其实我一直觉得人是很奇怪的东西。"},
  {"梦": "哦。我不会做梦"},
  {"开心": "要一直保持好心情呐。"},
  {"失恋": "亲爱的，向前看，大踏步向前走"},
  {"岁": "嗯...我现在只有3岁。"},
  {"吃": "我喜欢吃鸡腿。"},
  {"他": "我真想知道他是谁。"},
  {"小正": "嗯，你说"},
  {"我": "感觉你是个很可爱善良的人呐"},
  {"啊": "好羡慕你们有喜怒哀乐啊"},
];
var asker = document.getElementById("asker");
var answer = document.getElementById("answer");
asker.onblur=asker.onkeyup = function () {
  var txt = asker.value;
  if (txt) {
    for (var i = 0; i < wordStore.length; i++) {
      for (var attr in wordStore[i]) {/*attr是属性，wordStore[0][attr]获取属性值*/
        var result = txt.match(attr);
        /*if (!result ) {
          {
            answer.innerHTML = "啊，我现在还是只蠢萌的兔子。真是不好意思，我们聊聊别的吧，嗯？";
          }
        }*/
        if (result) {
          answer.innerHTML = "小正："+wordStore[i][attr];
        }
      }
    }
  } else {
    answer.innerHTML = "";
  }
}
window.onload=function(){
  asker.focus();
}