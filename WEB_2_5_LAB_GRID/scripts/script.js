// task 1
{
    let swapclicks = 1;

    function swapText(id1, id2) {
        let elem1 = document.getElementById(id1);
        let elem2 = document.getElementById(id2);

        let arr1 = Array.from(elem1.children);
        let arr2 = Array.from(elem2.children);

        arr2.forEach(el => {
            if (el.tagName != "TEXTAREA") elem1.append(el);
        });

        arr1.forEach(el => {
            if (el.tagName != "TEXTAREA") elem2.append(el);
        });

        if (++swapclicks % 2 == 0) {
            elem1.style.gridTemplateColumns = "1fr 1fr 1fr 2fr";
            elem2.style.gridTemplateColumns = "1fr 2fr";
        } else {
            elem1.style.gridTemplateColumns = "2fr 1fr";
            elem2.style.gridTemplateColumns = "2fr 1fr 1fr 1fr";
        }

        elem1.append(arr1.pop());
    }
}

// task 2
{
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
                document.getElementById(inId2).style.color = "#000";
                elem = document.createElement("H3");
                elem.innerHTML = "Площа ромбу (d1 = " + elem1.value + ", d2 = " + elem2.value + "): " + (elem1.value * elem2.value / 2);
                document.getElementById(outId).append(elem);
            }
        }
    }
}

// task 3
{
    window.addEventListener('load', (event) => {
        if (document.cookie != "max-element=; min-element=") {
            if (confirm("cookies: " + document.cookie + "\nClear cookies?")) {
                document.cookie = "max-element=;";
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
            if (elements[el].value > max) max = elements[el].value;
        }

        document.cookie = "min-element= " + min + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "max-element= " + max + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";

        alert("min-element=" + min + ";\nmax element=" + max + ";");
    }
}

// task 4
{
    function loadColorInLocalStorage(id) {
        localStorage.setItem("border-color", document.getElementById(id).value);
    }

    function borderChange(id, isNone) {
        if (isNone !== 0)
            document.getElementById(id).style.border = "4px solid " + localStorage.getItem("border-color");
        else document.getElementById(id).style.border = "none";
    }
}

// task 5
{
    let alreadyCreated = true;
    function createController(createId, navId, imgSrc) {
        if (!alreadyCreated) return;
        let createElem = document.createElement("DIV");

        // header
        let head3 = document.createElement("H3");
        head3.textContent = "Напишіть скрипт додавання зображень в блок «1» (меню навігації):";
        createElem.append(head3);

        // counter
        let input = document.createElement("INPUT");
        input.type = "number";
        input.className = "main-input";
        input.id = "images-count";
        input.value = 0;
        input.disabled = true;
        createElem.append(input);

        // add images to main-nav
        let button1 = document.createElement("BUTTON");
        button1.textContent = "Додати зображення";
        button1.className = "main-button";
        button1.onclick = (event) => {
            input.value++;
            img = document.createElement("IMG");
            img.src = imgSrc;
            document.getElementById(navId).append(img);
        };
        createElem.append(button1);

        // save images from main-nav to localStorage
        let button2 = document.createElement("BUTTON");
        button2.textContent = "Сохранити усі зображення у localStorage";
        button2.className = "main-button";
        button2.onclick = (event) => {
            saveImagesToLSAndAddTo4("images-count", "main-aside", imgSrc);
        };
        createElem.append(button2);

        // delete images from localStorage and from main-nav
        let button3 = document.createElement("BUTTON");
        button3.textContent = "Видалити усі зображення з localStorage";
        button3.className = "main-button";
        button3.onclick = (event) => {
            input.value = 0;
            deleteImagesFromLSAndClearInNav(imgSrc, navId);
        };
        createElem.append(button3);

        document.getElementById(createId).append(createElem);
        alreadyCreated = false;
    }

    function saveImagesToLSAndAddTo4(countId, asideId, imgSrc) {
        localStorage.setItem(imgSrc, document.getElementById(countId).value);
        img = document.createElement("IMG");
        img.src = imgSrc;
        document.getElementById(asideId).append(img);
    }

    function deleteImagesFromLSAndClearInNav(imgSrc, navId) {
        localStorage.removeItem(imgSrc);
        Array.from(document.getElementById(navId).children).forEach(el => {
            if (el.tagName == "IMG" && el.src == imgSrc)
                el.remove();
        });
    }
}