burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
line = document.querySelector('.line')
line2 = document.querySelector('.line2')


burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    burger.classList.toggle('icon');
    line.classList.toggle('top');
    line2.classList.toggle('bootom');
})
burger2 = document.querySelector('.burger2')
rightNav = document.querySelector('.rightNav')
rightNavinput = document.querySelector('.rightNavinput')
clear = document.querySelector('.clear')
btnsm= document.querySelector('.btnsm')
color2 = document.querySelector('.color2')

burger2.addEventListener('click',()=>{
    rightNav.classList.toggle('va-class-resp');
    rightNavinput.classList.toggle('vb-class-resp');
    clear.classList.toggle('vb-class-resp');
    btnsm.classList.toggle('vb-class-resp');
    color2.classList.toggle('no');

})




start = document.querySelector('.start')
star = document.querySelector('.star')


start.addEventListener('click',()=>{
    star.classList.toggle('sta');
})




br = document.querySelector('.br')
me = document.querySelector('.me')
bro = document.querySelector('.bro')


br.addEventListener('click',()=>{
    me.classList.toggle('m');
    br.classList.toggle('bro');
})





reb = document.querySelector('.reb')
rb = document.querySelector('.rb')
re = document.querySelector('.re')


reb.addEventListener('click',()=>{
    rb.classList.toggle('rec');
    reb.classList.toggle('re');
})





fo = document.querySelector('.fo')
pho = document.querySelector('.pho')
pr = document.querySelector('.pr')
ne = document.querySelector('.ne')

fo.addEventListener('click',()=>{
    pho.classList.toggle('ph');
    pr.classList.toggle('prev');
    ne.classList.toggle('next');
})






var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
