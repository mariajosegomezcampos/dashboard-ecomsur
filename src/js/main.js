const container = document.getElementById("container");

// funcion scroll ancla 
 $('nav a').click(function(e){ //Creamos un evento click para el enlace			
   e.preventDefault();		//evitar el eventos del enlace normal
   let strAncla=$(this).attr('href'); //id del ancla - le agrego un atributo mediant attr
      $('body,html').stop(true,true).animate({				
         scrollTop: $(strAncla).offset().top
      },2000);
   
});

// Funcion para conectarnos a la api y mostrar sus resultados tipo tarjetas
const fetchProfileData = () => {
    const Listcards = document.getElementById('empleados');
    Listcards.addEventListener("click", () =>{
   container.style.display = "none";
   const url = 'https://randomuser.me/api/?results=21';
   fetch(url)
       .then((res) => res.json() )
       .then((data) => {
        const data_a = data.results;
        app.innerHTML = data_a.map( res =>{ 
               return `
               <article class="cards">
                         <div class="contenido">
                         <img src="${res.picture.large}" alt="texto entrada">
                              <div class="cont-cards">
                                   <div class="text-flex">
                                   <p class="information">Nombre: ${res.name.title + " " + res.name.first + " " + res.name.last}</p>
                                   <p class="">Telefono:${res.cell}</p>
                                   <p class="">Email:${res.email}</p>
                                  
                                   </div>
                              </div>
                         </div>
               </article>`
           })
       })
    })
}

fetchProfileData();

const returnhome= document.getElementById("return");
returnhome.addEventListener('click',()=>{

   location.reload();

});




