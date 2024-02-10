let icons = document.getElementsByClassName('icons');
let tab = document.getElementsByClassName('tab');
let button = document.getElementsByClassName('button');

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", function(){
        updateStyles(i);
        toggleButtonVisibility(i);
        deselectOthers(i);
    });
}

function updateStyles(index) {
    for (let j = 0; j < icons.length; j++) {
        tab[j].style.backgroundColor = "#EB3300";
        tab[j].style.height = "159px";
        tab[j].style.color = "white";
        icons[j].style.backgroundColor = "#EB3300";
    }
    tab[index].style.backgroundColor = "#EB3300";
    tab[index].style.height = "159px";
    tab[index].style.color = "white";
    icons[index].style.backgroundColor = "#EB3300";
}

function deselectOthers(selectedIndex) {
    for (let k = 0; k < icons.length; k++) {
        if (k !== selectedIndex) {
            tab[k].style.backgroundColor = "";
            tab[k].style.height = "";
            tab[k].style.color = "";
            icons[k].style.backgroundColor = "";
            button[k].style.visibility = "hidden"; // مخفی کردن دکمه‌ها
        }
    }
}

function toggleButtonVisibility(index) {
    if (button[index].style.visibility === "visible") {
        button[index].style.visibility = "hidden";
    } else {
        button[index].style.visibility = "visible";
    }
}
