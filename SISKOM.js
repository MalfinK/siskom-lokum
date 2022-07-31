function scrollNav(){
    const nav = document.getElementById('nav')
    // When the scroll is greater than 100 viewport height, add the scroll-nav class to the nav tag
    if(this.scrollY >= 100) {
        nav.classList.add('bg-dark');
        nav.classList.remove('navbar-light');
        nav.classList.add('navbar-dark');
    } 
    else {
        nav.classList.remove('bg-dark');
        nav.classList.add('navbar-light');
        nav.classList.remove('navbar-dark');
    }
}
window.addEventListener('scroll', scrollNav);

const navItem = document.querySelectorAll('.nav-item');
function linkAction() {
    /*Active link*/
    navItem.forEach((n) => n.classList.remove("active")); // arrow function
    this.classList.add("active"); // this ini berguna untuk men select semua yang ada di function
}
navItem.forEach(el1 => {
    el1.addEventListener('click', linkAction)
});

const navBrand = document.querySelector('.navbar-brand');
navBrand.addEventListener('click', function() {
    navItem.forEach((n) => n.classList.remove("active")); // arrow function
})


$('.page-scroll').on('click', function(e){
    // console.log('Jalan');

    // AMBIL ISI HREF
    let tujuan = $(this).attr('href');
    // console.log(tujuan);

    // TANGKAP SEMUA ELEMENT
    let elementTujuan = $(tujuan);

    // PINDAHKAN SCROLL
    // $('html, body').animate({
    //     scrollTop: elementTujuan.offset().top -272
    // }, 0);

    // e.preventDefault();
})

// window.addEventListener('scroll', function(){
//     const hitungScroll = this.window.scrollY;
//     console.log(hitungScroll);
// });

AOS.init();