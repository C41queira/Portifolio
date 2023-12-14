let count = 1 
document.getElementById('radio-btn1').checked = true;

var btnNext = document.getElementById('nextBTN')
var btnPrevious = document.getElementById("previousBTN")

btnNext.addEventListener("click", function(){
    nextImg();
})

btnPrevious.addEventListener("click", function(){
    previousImg();
})

function nextImg(){
    count++; 
    if (count > 3) {
        count = 1
    }
    document.getElementById(`radio-btn${count}`).checked = true;
}

function previousImg(){
    count--; 
    if (count < 1) {
        count = 1
    }
    document.getElementById(`radio-btn${count}`).checked = true;
}