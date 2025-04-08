const container = document.querySelector(".container");
const amount=document.querySelector("#gridSizer");
const gridText = document.querySelector("#gridSizeText");
const newColor = document.getElementById("chooseColor");
const clearForm = document.querySelector("#clearForm")
newColor.addEventListener("click", colorChange);
const startAmount=16;
let myColor = "black";
let totalCount=startAmount*startAmount;
clearForm.addEventListener("click", resetForm);
amount.addEventListener("change",reSize);
    clearDivs();
    createDivs(startAmount);
    updateSliderText();
function createDivs(inAmount){
    for (let i = 0; i < totalCount; i++) 
        {
            let gridItem = document.createElement("div");
            gridItem.classList.add("grid-Item");
            gridItem.style.width = `calc(100%/${inAmount})`;
            gridItem.style.height = `calc(100%/${inAmount})`;
            gridItem.addEventListener("mouseenter", cellHover);
            container.append(gridItem);
        }
    }
function cellHover(e)
    {        
        if(myColor == "black")
            {
                e.target.style.backgroundColor="black";
            } else 
            {
                let acolor = Math.floor(Math.random()*255);
                let bcolor = Math.floor(Math.random()*255);
                let ccolor = Math.floor(Math.random()*255);
                let rgbcolor = "rgb("+acolor+", "+bcolor+", "+ccolor+")";
                e.target.style.backgroundColor=rgbcolor;
            }

    }
function reSize(){
    if(amount.value == "" || isNaN(amount.value) || amount.vaule> 64)return;
    let newAmount=amount.value;
    totalCount=newAmount*newAmount;
    clearDivs();
    createDivs(newAmount);
    updateSliderText();
}
function clearDivs(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
function updateSliderText(){
    let val=amount.value;
    gridText.textContent = `${val}x${val}`;
}
function colorChange()
{
    if (newColor.textContent =="Change Color to Black"){
        newColor.textContent = "Change Color to Random";
        myColor="black";
    } else {
        newColor.textContent = "Change Color to Black";
        myColor="random";
    }
}
function resetForm(){
    
    newColor.textContent = "Change Color to Random";
    myColor="black";
    gridText.textContent = "16 x 16";
    amount.value=16;
    let newAmount=amount.value;
    totalCount=newAmount*newAmount;
    clearDivs();
    createDivs(newAmount);
    updateSliderText();
}