
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
// sr.reveal('.contact__input',{interval: 200}); 


/*DARK MODE */
var icon = document.getElementById("icon");

if (localStorage.getItem("theme")== null) {
	localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");
if (localData == "light") {
	icon.src ="img/moon.png";
	logo.src="img/logoGedrix.png"
	document.body.classList.remove("dark-theme");

}else if(localData == "dark"){
	icon.src ="img/sun.png";
	logo.src="img/gedrix.png"
	document.body.classList.add("dark-theme");

}


icon.onclick = function (){
	document.body.classList.toggle("dark-theme");
	if(document.body.classList.contains("dark-theme")){
		icon.src ="img/sun.png";
		logo.src="img/gedrix.png"
		localStorage.setItem("theme", "dark");
	}else{
		icon.src ="img/moon.png";
		logo.src="img/logoGedrix.png"
		localStorage.setItem("theme", "light");
	}
}

/**https://www.youtube.com/watch?v=AKNvTxWOdKw&t=113s
 * 
 * https://github.com/bedimcode/portfolio-responsive-complete/blob/master/assets/js/main.js
 */