/* flying text */
let text = document.querySelector('.about-text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")
let animation = anime.timeline({
    targets : '.about-text span',
    easing : 'easeInOutExpo',
    loop: false
});
animation
.add({
    rotate : function() {
        return anime.random(-360,360)
    },
    translateX : function() {
        return anime.random(-500,500)
    },
    translateY : function() {
        return anime.random(-500,500)
    },
    duration : 7000,
    delay : anime.stagger(20)
})
.add({
    rotate :0,
    translateX : 0,
    translateY : 0,
    duration : 7000,
    delay : anime.stagger(20)
})
// let span = document.querySelectorAll(".about-text span");
// for (let i = 0; i < span.length; i++) {
//     let left = innerWidth * Math.random();
//     let top = innerHeight * Math.random();
//     if(Math.random() < 0.5){
//         span[i].style.top = '-'+top+"px";
//     }else{
//         span[i].style.top = top+"px";
//     }
    
// }