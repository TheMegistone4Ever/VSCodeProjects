let tabCountName = "countOfTabs", tabs = Number(localStorage.getItem(tabCountName)), limitOfTabs = 12, tabNameInLS = "tab";

function addTab() {
    if (++tabs >= limitOfTabs) return;
    elem = document.createElement("LI");
    elem.innerHTML = '<input type="radio" name="tabs" id="tab'
        + tabs + '" checked /> <label for="tab'
        + tabs + '" role="tab" aria-selected="true" aria-controls="panel'
        + tabs + '" tabindex="0">Tab</label> <div id="tab-content'
        + tabs + '" class="tab-content" role="tabpanel" aria-labelledby="description" aria-hidden="false"> <p>Content of tab №'
        + tabs + '</p> </div>';
    document.getElementById("tabs").appendChild(elem);
    localStorage.setItem(tabNameInLS + tabs, elem.innerHTML);
    localStorage.setItem(tabCountName, Number(localStorage.getItem(tabCountName)) + 1);
}

window.addEventListener('load', (event) => {
    list = document.getElementById("tabs");
    for (let key of Object.keys(localStorage).reverse()) {
        if (key.startsWith(tabNameInLS)) {
            elem = document.createElement("LI");
            elem.innerHTML = localStorage.getItem(key);
            list.appendChild(elem);
        }
    }
});