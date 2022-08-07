// testimonial function
// get all class

// wrraper slider
const wrraperSlider = document.querySelector('.container-box-testimonial'); 

// btn testimonial class
const btnPage1 = document.querySelector('.btn-page-1');
const btnPage2 = document.querySelector('.btn-page-2');
const btnPage3 = document.querySelector('.btn-page-3');

// pagenation testimonial class
const pagenation1 = document.querySelector('.page-1');
const pagenation2 = document.querySelector('.page-2');
const pagenation3 = document.querySelector('.page-3');

// gallery class
const gallery1 = document.querySelector('.gallery-1');
const gallery2 = document.querySelector('.gallery-2');
const gallery3 = document.querySelector('.gallery-3');
const gallery4 = document.querySelector('.gallery-4');

// btn portfolio class
const btnCatergory1 = document.querySelector('.btn-category-1');
const btnCatergory2 = document.querySelector('.btn-category-2');
const btnCatergory3 = document.querySelector('.btn-category-3');
const btnCatergory4 = document.querySelector('.btn-category-4');

// next function
function next1() {

    wrraperSlider.style.marginLeft = -100 + 'vw';
    wrraperSlider.style.transition = 1 + 's';

    btnPage1.classList.remove('btn-active');
    btnPage2.classList.add('btn-active');

    pagenation1.classList.remove('page-active');
    pagenation2.classList.add('page-active');

}

function next2() {

    wrraperSlider.style.marginLeft = -200 + 'vw';
    wrraperSlider.style.transition = 1 + 's';

    btnPage2.classList.remove('btn-active');
    btnPage3.classList.add('btn-active');

    pagenation2.classList.remove('page-active');
    pagenation3.classList.add('page-active');

}

// prev function
function prev1() {

    wrraperSlider.style.marginLeft = 0 + 'vw';
    wrraperSlider.style.transition = 1 + 's';

    btnPage2.classList.remove('btn-active');
    btnPage1.classList.add('btn-active');

    pagenation2.classList.remove('page-active');
    pagenation1.classList.add('page-active');

}

function prev2() {

    wrraperSlider.style.marginLeft = -100 + 'vw';
    wrraperSlider.style.transition = 1 + 's';

    btnPage3.classList.remove('btn-active');
    btnPage2.classList.add('btn-active');

    pagenation3.classList.remove('page-active');
    pagenation2.classList.add('page-active');

}

function category1() {

    btnCatergory1.classList.add('btn-active-portfolio');
    btnCatergory2.classList.remove('btn-active-portfolio');
    btnCatergory3.classList.remove('btn-active-portfolio');
    btnCatergory4.classList.remove('btn-active-portfolio');

    gallery1.classList.add('gallery-active');
    gallery1.style.animation = 'fade-up 1s forwards';
    gallery2.classList.remove('gallery-active');
    gallery3.classList.remove('gallery-active');
    gallery4.classList.remove('gallery-active');

}

function category2() {

    btnCatergory2.classList.add('btn-active-portfolio');
    btnCatergory1.classList.remove('btn-active-portfolio');
    btnCatergory3.classList.remove('btn-active-portfolio');
    btnCatergory4.classList.remove('btn-active-portfolio');

    gallery2.classList.add('gallery-active');
    gallery2.style.animation = 'fade-up 1s forwards';
    gallery1.classList.remove('gallery-active');
    gallery3.classList.remove('gallery-active');
    gallery4.classList.remove('gallery-active');

}

function category3() {

    btnCatergory3.classList.add('btn-active-portfolio');
    btnCatergory2.classList.remove('btn-active-portfolio');
    btnCatergory1.classList.remove('btn-active-portfolio');
    btnCatergory4.classList.remove('btn-active-portfolio');

    gallery3.classList.add('gallery-active');
    gallery3.style.animation = 'fade-up 1s forwards';
    gallery2.classList.remove('gallery-active');
    gallery1.classList.remove('gallery-active');
    gallery4.classList.remove('gallery-active');

}

function category4() {

    btnCatergory4.classList.add('btn-active-portfolio');
    btnCatergory2.classList.remove('btn-active-portfolio');
    btnCatergory3.classList.remove('btn-active-portfolio');
    btnCatergory1.classList.remove('btn-active-portfolio');

    gallery4.classList.add('gallery-active');
    gallery4.style.animation = 'fade-up 1s forwards';  
    gallery2.classList.remove('gallery-active');
    gallery3.classList.remove('gallery-active');
    gallery1.classList.remove('gallery-active');

}

// Burger Dropdown
const buttonDropdown = document.querySelector(".burger-dropdown");
buttonDropdown.addEventListener("click", function(){

    buttonDropdown.classList.toggle("active");

    const overlayMenu = document.querySelector('.overlay-menu-mobile');
    let navbarMenu = document.querySelector(".menu");
    if (navbarMenu.style.display === "block"){
        navbarMenu.style.display = "none";
        overlayMenu.style.display = "none";
    } else {
        navbarMenu.style.display = "block";
        navbarMenu.style.animation = 'fade-right 1s forwards';
        overlayMenu.style.display = "block";
        overlayMenu.style.animation = 'fade 1s forwards';
    }
});