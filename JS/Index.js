function validateForm() {
    var name= document.forms["message-form"]["name"].value;
    var Email= document.forms["message-form"]["Email"].value;
    var interest= document.forms["message-form"]["interest"].value;

    console.log({ name, Email, interest});

    if (name == "" || Email == "" || interest ==""){
        alert("Tidak boleh ada yang kosong");
        return false;
    }
    
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs((slideIndex += n));
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("imageg");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
        imgList[slideIndex-1].style.display = "block";
}
