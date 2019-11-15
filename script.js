console.clear();
const navSlide =()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    // lets take all li's in ul
    const navLinks = document.querySelectorAll('.nav-links li');

    //toggle nav
    burger.addEventListener('click',()=>{

        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation=""
            }
            else {
                link.style.animation=`navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    }) //end addEventListener

} // end function navLinks


navSlide();


//
// var nav_link = $('.nav-links');
//
// var burger = $('.burger');
// var toggle = false
// burger.on('click',function(){
//     if (toggle) {
//         nav_link.css('transform','translateX(0%)');
//     }
//     else{
//         nav_link.css('transform','translateX(100%)');
//     }
//     toggle = !toggle
// })
// but better general function (small funct inside)
// const app=()=>{
//     navSlide();
// }
// app();
//navLinks.forEach((link,index)=>{
    // to set a delay in rendering links of menu (index/7)
    //link.style.animation=`navLinkFade 0.5s ease forwards ${index/7 +1.5}s`;
    // would like to set initial delay
    // link.style.animation=`navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
//})
