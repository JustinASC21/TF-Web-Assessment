let nightBut = document.querySelector("#nightCont");
let light = true;
nightBut.onclick = function(event) {
    if (light) {
        document.body.style.backgroundColor = "black";
        light = !light;
        nightBut.style.color = "white";
        nightBut.innerHTML = "Light Eyes";
    }
    else {
        document.body.style.backgroundColor = "blanchedalmond";
        nightBut.style.color = "black";
        nightBut.innerHTML = "Night Eyes";
        light = !light;
    }
}