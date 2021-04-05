let counter = 0;
// 組み込み用タグの取得
let dom = document.querySelector("#root");
doCount();

function doCount() {
    counter++;
    // 仮想DOM Element作成
    let element = React.createElement(
        'p', {}, 'count: ' + counter
    );
    // レンダリング実行
    ReactDOM.render(element, dom);
}