//Create 16x16 Square Array

const container = document.querySelector("#container");
container.style.width = "600px";
createGrid(16);

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", function() {
    var res = prompt("Enter grid resoloution (maximum: 100)");
    if(res > 100 || res < 1) {
        alert("Enter a resoloution between 1 and 100");
    }
    else {
        container.innerHTML = "";
        createGrid(res);
    }
});

function createGrid(resoloution) {
    for(var i=0;i<resoloution;i++) {
        const outerDiv = document.createElement("div");
        outerDiv.style.display = "flex";
        container.appendChild(outerDiv);
        for(var j=0;j<resoloution;j++) {
            const div = document.createElement("div");
            div.style.width = Math.floor(600 / resoloution) + "px";
            div.style.height = Math.floor(600 / resoloution) + "px";
            div.style.backgroundColor = "#ffffff";
            div.addEventListener("mouseover", function(event) {
                event.target.style.backgroundColor = "#000000";
            }, false);
            outerDiv.appendChild(div);
        }
    }
}