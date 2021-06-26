const typed = new Typed('.typed', {
	strings: [
		'<i >Developer Web</i>',
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});




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

/*traducir */
$.getJSON("js/lang.json", function(json){
    
    if(!localStorage.getItem("lang")){
      localStorage.setItem("lang", "en");
    }
    var lang = localStorage.getItem("lang");
    var doc = json;
    $('.lang').each(function(index, element){
      $(this).text(doc[lang][$(this).attr('key')]);
    });//Each
  
    $('.translate').click(function(){
      localStorage.setItem("lang", $(this).attr('id')) ;
      var lang = $(this).attr('id');
      var doc = json;
        $('.lang').each(function(index, element){
          $(this).text(doc[lang][$(this).attr('key')]);
        }); //Each
    }); //Funcion click
  });//Get json AJAX