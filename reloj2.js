$(function(){
  
  function bucle(){
    
    let time = new Date();
   
    let segundos = (time.getSeconds() < 10 ? '0'+time.getSeconds() : time.getSeconds());
    let minutos = (time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes());
    let horas = (time.getHours() < 10 ? '0'+time.getHours() : time.getHours());

   $("#clock").html(`${horas}:${minutos}:${segundos}`);
    
    setTimeout(function(){ bucle(); },1000);
  }
  bucle();

});