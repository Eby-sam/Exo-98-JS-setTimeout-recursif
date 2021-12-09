let start = document.getElementById("timeout");
let time = 0;
let inter = document.getElementById("interval-div");
let stoping = document.getElementById("interval-stop");

start.addEventListener("click", function () {
    setTimeout(function () {
        let nDiv = document.createElement("div");
        let divTo = document.getElementById("timeout-div");
        nDiv.style.width = "50%";
        nDiv.style.marginLeft = "25%";
        nDiv.style.marginTop = "4rem";
        nDiv.style.height = "10rem";
        nDiv.style.border = "1px solid black";
        nDiv.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !"
        divTo.append(nDiv);
    },2000);

});

let buttonInterval = document.getElementById("interval-start");

buttonInterval.addEventListener("click", function () {
    let timeOut = function () {
        let nouv = setTimeout(function () {
            inter.innerHTML = time;
            time+=60;
            timeOut();
        }, 36000);

        stoping.addEventListener("click", function () {
            clearTimeout(nouv);
        })
    }
    timeOut();
});