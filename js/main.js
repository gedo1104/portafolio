
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'menu')

const navLink = document.querySelectorAll('.menu-link')

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile
    const navMenu = document.getElementById('menu')
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
sr.reveal('.home-title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home-img',{delay: 400}); 
sr.reveal('.home-icon-social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about-img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
 sr.reveal('.skills-subtitle',{interval: 200}); 
sr.reveal('.skills-text',{interval: 200}); 
sr.reveal('.skills-header',{interval: 200}); 
sr.reveal('.skills-img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work-img',{interval: 200}); 

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

