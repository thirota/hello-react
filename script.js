let counter = 0;
let dom = document.querySelector("#root");
doCount();

function doCount() {
    counter++;
    let element = React.createElement(
        'p', {}, 'COUNT: ' + counter
    );
    ReactDOM.render(element, dom);
}
