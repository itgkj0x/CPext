//import pgch from "count.js";
//import tdli from "tdli.js";
const settings = JSON.parse(localStorage.getItem("settings"));
//settingsの呼び出し

window.onload = apply();
//apply関数の実行

function apply(){
    //if(settings[1]){
    //    pgch();
    //};
    //if(settings[2]){
    //    tdli();
    //};
    if(settings[2]){
        clch();
    };
};

function clch() {
    const style = document.createElement('style');
    const css = 'body { background:'+settings[3]+'!important; }';
    style.textContent = css;
    console.log(css);
    document.head.appendChild(style);
  };
//styleタグを作りcss書きbgを上書きする