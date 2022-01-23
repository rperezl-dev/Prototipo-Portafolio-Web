//MENU
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
const menuLinks = document.querySelectorAll('.menu a[href^="#"]')
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
       const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);
        
        if(entry.isIntersecting){
            document.querySelector(".menu a.selected").classList.remove("selected");
            menuLink.classList.add("selected");
           }
    })
    
},{rooMargin:"-30% 0px -70% 0px"});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        menu.classList.remove("menu_opened");
    })
    
    const hash = menuLink.getAttribute("href");
    const targe = document.querySelector(hash);
    
    if(targe){
        observer.observe(targe);
    }
    
})

function getData(){
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;
  
  if(nombre=='' ||  email=="" || mensaje==''){
    alert('Lo campo estasn vacio ');
  }else if(validarEmail(email)){
  window.location.replace('enviar.html');

  
  //creacion de  html
  document.write('<!DOCTYPE html>');
  document.write('<html lang="en">');
  document.write('<head>');
  document.write('<meta charset="UTF-8">');
  document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
  document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
  document.write('<link rel="stylesheet" href="css/enviar.css">');
  document.write('<title>Gracias</title>');
  document.write('</head>');
  document.write('<body>');
  document.write('<div class="contenedor">');
  document.write('<div class="conImg">');
  document.write('<img src="img/perfil_2.png" alt="perfil_2">');
  document.write('</div>');
  document.write('<p class="frase4">Gracias por su inscripción, le<br/>saluda Alexander Pérez</p>');
  document.write('<p class="frase1"> '+nombre+' revise su e-mail '+email+' para confirmar su registro </p>');
  document.write('<p class="frase2">gracias por su comentario  '+mensaje+'</p>');
  document.write('<div class="btn">');
  document.write('<a href="index.html">Aceptar </a>');
  document.write('</div>');
  document.write('</div>');
  document.write('</body>');
  document.write('</html>');
  
}else{
  window.location.replace('index.html');  
  alert("El email NO es correcto");
}
}


function soloLetras(e){
  key = e.keyCode || e.which;

  tecla = String.fromCharCode(key).toLowerCase();

  letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
  especiales = "8-37-39-46";

  tecla_especial = false

  for(var i in especiales){
       if(key == especiales[i]){
           tecla_especial = true;
           break;
       }
   }

   if(letras.indexOf(tecla)==-1 && !tecla_especial){
       return false;
   }
}

function validarEmail(email) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}