const right = document.querySelector("#right");
const left = document.querySelector("#left");

let flag = "mouseover";

let color = "black";

function colorPicker(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    color = "rgb(" + red +"," +green + "," + blue + ")";
    console.log(color);
}

let num = prompt("How many squares do you want?(between 1 and 25): ");
let canvas = document.createElement("div");
canvas.classList = "canvas";
right.append(canvas);
function createCanvas(num){
    canvas = document.createElement("div");
    canvas.classList = "canvas";
    right.append(canvas);
    let a,b;
    for(i=1;i<=num;i++){
        a = document.createElement("div")
        a.classList = ("row");
     
        for(j=1;j<=num;j++){
            b = document.createElement("div");
            b.classList = "block";
            a.appendChild(b);
        }
        canvas.appendChild(a);
    }
}
createCanvas(num);

const clear = document.createElement("button");
clear.textContent = "Clear";
left.appendChild(clear);

function clearAll(){
    for(let i=0;i<blocks.length;i++){
        blocks[i].style.backgroundColor = "white";
        console.log("Screen cleared");
    }
}
clear.addEventListener('click',clearAll);

const erase = document.createElement("button");
erase.textContent = "Erase";
left.appendChild(erase);

function eraser(){
    color = "white";
    }

erase.addEventListener('click',eraser);

const random = document.createElement("button");
random.textContent = "Random";
left.appendChild(random);
random.addEventListener('click',colorPicker);

const refresh = document.createElement("button");
refresh.textContent = "Refresh";
left.appendChild(refresh);

let blocks = document.querySelectorAll('.block');

for(let i=0;i<blocks.length;i++){
    blocks[i].addEventListener(flag,() => {
        blocks[i].style.backgroundColor = color;
    });
}

function restart(){
    num = prompt("How many squares do you want?(between 1 and 25): ");
    canvas.remove();
    createCanvas(num);

    blocks = document.querySelectorAll('.block');
    for(let i=0;i<blocks.length;i++){
        blocks[i].addEventListener(flag,() => {
            blocks[i].style.backgroundColor = color;
        });
    }
    
}

refresh.addEventListener('click',restart);



const final = document.createElement("h1");
final.textContent = "Made by VJ_15";
left.appendChild(final);
