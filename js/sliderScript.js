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

// --------------------------------------------------------------------------------------------

let c = 1 
document.getElementById('radio-btn-project1').checked = true;

var btnNextProject = document.getElementById('nextBTN-project')
var btnPreviousProject = document.getElementById("previousBTN-project")

btnNextProject.addEventListener("click", function(){
    nextImgProject();
})

btnPreviousProject.addEventListener("click", function(){
    previousImgProject();
})

function nextImgProject(){
    c++;    
    if (c > 3) {
        c = 1
    }
    document.getElementById(`radio-btn-project${c}`).checked = true;
}

function previousImgProject(){
    c--; 
    if (c < 1) {
        c = 1
    }
    document.getElementById(`radio-btn-project${c}`).checked = true;
}