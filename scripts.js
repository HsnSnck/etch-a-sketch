const grid=document.querySelector(".grid-container");
var items=16;
grid.style.gridTemplateColumns=`repeat(${items},1fr)`;

for(var i=0;i<items;i++){
    for(var j=0;j<items;j++){
        const item=document.createElement("div");
        item.classList.add("grid-item");
        grid.appendChild(item);
    }
    

}
