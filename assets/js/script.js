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

// modal functionality
// signup
var modalBtn = document.querySelector(".modal-btn-signup");

var modalBg = document.querySelector(".modal-bg-signup");

modalBtn.addEventListener('click',()=>{
    console.log("singup clicked");
    modalBg.classList.add('modal-bg-active');
})
//close modal
var modalClose = document.querySelector(".modal-close");
modalClose.addEventListener('click',()=>{
    modalBg.classList.remove('modal-bg-active');
})
//login
var modalButLogIn = document.querySelector(".modal-btn-login");

var modalLogIn = document.querySelector(".modal-bg-login");

modalButLogIn.addEventListener('click',()=>{
        console.log("login clicked");
    modalLogIn.classList.add('modal-bg-active');
})
//close modal
var modalClose2 = document.querySelector(".modal-close2");
modalClose2.addEventListener('click',()=>{
    console.log("X clicked");
    modalLogIn.classList.remove('modal-bg-active');
})
