//import pgch from "count.js";
//import tdli from "tdli.js";

// 設定を取得してからapplyを実行
// 取得したsettingsはコールバック内でしか使えないからここで値を渡す


window.onload = function() {
    chrome.storage.local.get("settings", (result) => {
        const settings = result.settings;
        if (!settings) return;
        apply(settings);
    });
};

function apply(settings){
    //if(settings[1]){
    //    pgch();
    //};
    //if(settings[2]){
    //    tdli();
    //};
    if(settings[3]){
        clch(settings);
    }
    else{
        clchrem();
    }
}

function clch(settings) {
    const style = document.createElement('style');
    const css = 'body { background:' + settings[3] + ' !important; }';
    style.textContent = css;
    console.log(css);
    document.head.appendChild(style);
}
//styleタグを作りcss書きbgを上書きする

function clchrem(){
    const style = document.createElement('style');
    style.remove();
}
//html内のstyleを削除?この状態だと全部消してしまう