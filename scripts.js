const grid=document.querySelector(".grid-container");
var items=16;
grid.style.gridTemplateColumns=`repeat(${items},1fr)`;


function outputUpdate(vol) {
    document.querySelector('#range').value=vol++;;
    items=document.querySelector('#range').value;
    grid.innerHTML='';
    createGrid();
    grid.style.gridTemplateColumns=`repeat(${document.querySelector('#range').value},1fr)`;

    
}

function createGrid(){

for(var i=0;i<items;i++){
    for(var j=0;j<items;j++){
       // console.log(`index i:${i} index j:${j}`);
        const item=document.createElement("div");
        item.classList.add("grid-item");
        grid.appendChild(item);
       item.addEventListener('mousemove',mouseDown);
        
    }

    
}
}

function mouseDown(e){
    var leftButtonDown=false;
 // IF mouse is down THEN set button press flag
 if(e.which === 1)
 leftButtonDown = true;
// If you need to detect other buttons, then make this here
// ... else if(evt.which === 2) middleButtonDown = true;
// ... else if(evt.which === 3) rightButtonDown = true;
// IF no mouse button is pressed THEN reset press flag(s)
else
 leftButtonDown = false;

if (leftButtonDown) {
    console.log(e);
    this.style.backgroundColor="red";
}
   

}



