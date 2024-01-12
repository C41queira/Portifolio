let count = 1 
document.getElementById('radio-btn1').checked = true;

function nextImg(){
    count++; 
    if (count > 3) {
        count = 1
    }
    document.getElementById(`radio-btn${count}`).checked = true;
}

// --------------------------------------------------------------------------------------------

setInterval(function () {
    nextImg(); 
    nextImgProject();
}, 6000)