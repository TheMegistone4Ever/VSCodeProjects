var swapclicks = 1;

function swapText(id1, id2) {
    let elem1 = document.getElementById(id1);
    let elem2 = document.getElementById(id2);

    let arr1 = Array.from(elem1.children);
    let arr2 = Array.from(elem2.children);

    arr2.forEach(el => {
        if (el.tagName != "H3") elem1.append(el);
    });

    arr1.forEach(el => {
        if (el.tagName != "H3") elem2.append(el);
    });

    if (++swapclicks % 2 == 0) {
        elem1.style.gridTemplateColumns = "1fr 1fr 1fr 2fr";
        elem2.style.gridTemplateColumns = "1fr 2fr";
    } else {
        elem2.style.gridTemplateColumns = "2fr 1fr 1fr 1fr";
        elem1.style.gridTemplateColumns = "2fr 1fr";
    }

    elem1.append(arr1.pop());
}

function getRhombusArea(outId, inId1, inId2) {
    elem1 = document.getElementById(inId1);
    elem2 = document.getElementById(inId2);

    if (elem1.value <= 0) {
        document.getElementById(inId1).style.color = "#f00";
        alert("Перша діагональ повинна бути додатною!");
    } else {
        document.getElementById(inId1).style.color = "#000";
        if (elem2.value <= 0) {
            document.getElementById(inId2).style.color = "#f00";
            alert("Друга діагональ повинна бути додатною!");
        } else {
            document.getElementById(inId1).style.color = "#000";
            elem = document.createElement("H3");
            elem.innerHTML = "Площа ромбу (d1 = " + elem1.value + ", d2 = " + elem2.value + "): " + (elem1.value * elem2.value / 2);
            document.getElementById(outId).append(elem);
        }
    }
}

window.addEventListener('load', (event) => {
    if (document.cookie != "max-element=; min-element=") {
        if (confirm("cookies: " + document.cookie + "\nClear cookies?")) {
            document.cookie = "max-element=;"
            document.cookie = "min-element=;";
            location.reload();
        } else {
            alert("Cookies haven't been deleted, please reload the web page");
        }
    }
});

function minmax(classname) {
    let elements = document.getElementsByClassName(classname);
    let min = elements[0].value;
    let max = elements[0].value;
    for (let el = 1; el < elements.length; ++el) {
        if (elements[el].value < min) min = elements[el].value;
        else if (elements[el].value > max) max = elements[el].value;
    }

    document.cookie = "min-element= " + min + ";";
    document.cookie = "max-element= " + max + ";";

    alert("min-element=" + min + ";\nmax element=" + max + ";");
}

function loadColorInLocalStorage() {

}