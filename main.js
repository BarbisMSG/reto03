let titulo = document.getElementById('soy');
let entradaLoca = document.getElementById('nombre');
let btn = document.getElementById('btn');
let task1 = document.getElementById('task1');
let span1 = document.getElementById('span1').innerText;
let span2 = document.getElementById('span2').innerText;




btn.addEventListener('click',function(){
   let tipo = entradaLoca.value
   if (tipo != ''){
    titulo.innerHTML = 'Hola '+tipo+ ', estos son tus pendientes'
   }else{
      alert('Qué onda? Poné tu nombre')
   }
})

task1.addEventListener('click',function(){
   if (task1.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span1)  
   }   
})

task2.addEventListener('click',function(){
   if (task2.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span2)
   }   
})




