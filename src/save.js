const form = document.getElementById("form");
// formとしてsubmit時の動作を適用しないとほかのsubmitボタンが出てきたときに困る

// localStorageから設定を取得し、フォームに反映
const settings = JSON.parse(localStorage.getItem("settings"));
if (settings) {
    document.getElementById("ch1").checked = settings[0];
    document.getElementById("ch2").checked = settings[1];
    document.getElementById("ch3").checked = settings[2];
    document.getElementById("clInput").value = settings[3];
}
 // submit時リロードを防ぎsave()を実行させる
form.addEventListener("submit", function (event) {
    event.preventDefault();
    save();
});

// 現在の状態をlocalstorageに保存
function save() {
    const in1 = document.getElementById("ch1").checked;
    const in2 = document.getElementById("ch2").checked;
    const in3 = document.getElementById("ch3").checked;
    const in4 = document.getElementById("clInput").value;
    const settings = [in1, in2, in3, in4];
    localStorage.setItem("settings", JSON.stringify(settings));
}
// 変数をsubmitされる前に定義してしまうと変更が適用されないのに注意する
// だからsaveのところと設定を呼び出すとこで長文書かなきゃいけなくなってる