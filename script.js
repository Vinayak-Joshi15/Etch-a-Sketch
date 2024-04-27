const right = document.querySelector("#right");
const left = document.querySelector("#left");

let a,b,c;
for(i=1;i<=16;i++){
    a = document.createElement("div")
    a.classList = ("row");
     
    for(j=1;j<=16;j++){
        b = document.createElement("div");
        c = document.createElement("button");
        b.appendChild(c);
        b.classList = ("column");
        a.appendChild(b);
    }
    right.appendChild(a);
}

const clear = document.createElement("button");
clear.textContent = "Clear";
left.appendChild(clear);

const erase = document.createElement("button");
erase.textContent = "Erase";
left.appendChild(erase);

const random = document.createElement("button");
random.textContent = "Random";
left.appendChild(random);