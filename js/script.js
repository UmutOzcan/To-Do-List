function liEkle(){
//yeni bir li olusturma ve input textini alma
var li = document.createElement("li");
var x = document.getElementById("task").value;
var t = document.createTextNode(x);
li.appendChild(t);

// verilen input bos mu degil mi kontrolu
if(isWhitespaceInput(x))
{
    //bossa error toastini goster
    $('.error').toast('show');
    document.getElementById("task").value = "";
    return;

}else{
    //degilse success toastini goster
    $('.success').toast('show');
}

li.addEventListener("click", function () {
    li.classList.toggle("check");
});

// var olan elemanlara ekle
document.getElementById('list').appendChild(li);
// input icini temizle
document.getElementById("task").value = "";


var span = document.createElement('span');
var txt = document.createTextNode('\u00D7');
span.id = 'close';
span.appendChild(txt);
li.appendChild(span);

span.onclick = function() {
    this.parentElement.remove();
    
};  

}

// bos mu kontrolu
function isWhitespaceInput(input) {
    // Gelen girisi kontrol etmek icin bir regex kullaniyoruz.
    var whitespacePattern = /^\s*$/;
    return whitespacePattern.test(input);
}





