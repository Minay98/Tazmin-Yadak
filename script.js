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
            button[k].style.visibility = "hidden"; 
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


let shop = document.getElementsByClassName('count-shop');
let counter = document.getElementsByClassName('counter');
let increaseBtn = document.getElementsByClassName('increaseBtn');
let decreaseBtn = document.getElementsByClassName('decreaseBtn');
 let val = [];
 for (let i=0; i<shop.length; i++){
     val.push(0);
 }


for(let i=0; i<shop.length; i++){
    increaseBtn[i].addEventListener("click", function(){
        increaseCounter(i);
    })
    decreaseBtn[i].addEventListener("click", function(){
        decreaseCounter(i);
    })
}
function increaseCounter(i){
    val[i]++;
    counter[i].innerText = val[i];
    if (val[i] == 1) {
        decreaseBtn[i].style.display = "block";
        counter[i].style.display = 'block';
    }
}

function decreaseCounter(i){
    val[i]--;
    if(val[i] < 0){
        val[i] =0;
    }
    if (val[i] == 0 ) {
        decreaseBtn[i].style.display = "none";
        counter[i].style.display = "none";
    }else{
        counter[i].innerText = val[i];
    }
}