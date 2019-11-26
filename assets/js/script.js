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
        modalLogIn.classList.add('modal-bg-active');
})
//close modal-2
var modalClose2 = document.querySelector(".modal-close2");
modalClose2.addEventListener('click',()=>{
    modalLogIn.classList.remove('modal-bg-active');
})

var callLogin = document.getElementById('loginCall');
console.log("Curious about login?");
callLogin.addEventListener('click',()=>{
    modalBg.classList.remove('modal-bg-active');
    modalLogIn.classList.add('modal-bg-active');

})

var callSignUp = document.getElementById('call-signup');
callSignUp.addEventListener('click',()=>{
    modalLogIn.classList.remove('modal-bg-active');
    modalBg.classList.add('modal-bg-active');

})
