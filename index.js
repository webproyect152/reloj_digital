
 //new Date() --> crea un objeto Date para la fecha y la hora actuales
//getHours() -->   Deevuelve la hora
 //getMinutes()-->  Devuelve los minutos
 //getSeconds()-->  Devuelve los segundos

 // setInterval() --> permite ejecutar una función 
 //una vez que haya transcurrido un periodo de tiempo indicado
 

function mostrarHora(){
    let hour = document.getElementById('hora')
    let minutes = document.getElementById('minutos')
    let seconds = document.getElementById('segundos')
    
    let horaDelDia = new Date();
    
      let hora = horaDelDia.getHours();
      let minutos = horaDelDia.getMinutes();
      let segundos = horaDelDia.getSeconds();
    if(hora < 10){
        hora = '0' + hora;
    }
      if(minutos < 10){
          minutos = '0' + minutos;
      }
    
      if(segundos < 10){
        segundos = '0' + segundos; 
      }
     
    
      hour.innerHTML = `<li><h1> ${hora}</h1></li> `;
      minutes.innerHTML = `<li><h1> ${minutos} </h1></li>`
      seconds.innerHTML = `<li><h1> ${segundos}</h1></li>`
    
     
    }
    setInterval(mostrarHora,1000)
    function mostrarFecha(){
    
        let fecha = document.getElementById('fecha')
    
    
        let fechaDelDia = new Date();
    
        let day = fechaDelDia.getDate();
        let month = fechaDelDia.getMonth();
        let year = fechaDelDia.getFullYear();
        if(month < 1){
            month = '1'
        }
    
        fecha.innerHTML =`<h2>${day} / ${month} / ${year}</h2>`
    
    }
    mostrarFecha();