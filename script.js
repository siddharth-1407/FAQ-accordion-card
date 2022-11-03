console.log( 'test!');
var acc = document.getElementsByClassName('accordions');
var i;

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.children[0].classList.toggle('active');

        var pannel = this.nextElementSibling;
        var arrow = this.children[1];
        if(  pannel.style.display === "block" && arrow.style.transform === "rotate(180deg)"){
            pannel.style.display = "none";
            arrow.style.transform = "rotate(0deg)"
        }else{
            pannel.style.display = "block";
            arrow.style.transform = "rotate(180deg)"
        }
    });
    
}