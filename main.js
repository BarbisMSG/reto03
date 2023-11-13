let titulo = document.getElementById('soy');
let entradaLoca = document.getElementById('nombre');
let btn = document.getElementById('btn');
let task1 = document.getElementById('task1');
let task2 = document.getElementById('task2');
let task3 = document.getElementById('task3');
let task4 = document.getElementById('task4');
let task5 = document.getElementById('task5');
let task6 = document.getElementById('task6');
let task7 = document.getElementById('task7');
let task8 = document.getElementById('task8');
let task9 = document.getElementById('task9');
let task10 = document.getElementById('task10');
let span1 = document.getElementById('span1').innerText;
let span2 = document.getElementById('span2').innerText;
let span3 = document.getElementById('span3').innerText;
let span4 = document.getElementById('span4').innerText;
let span5 = document.getElementById('span5').innerText;
let span6 = document.getElementById('span6').innerText;
let span7 = document.getElementById('span7').innerText;
let span8 = document.getElementById('span8').innerText;
let span9 = document.getElementById('span9').innerText;
let span10 = document.getElementById('span10').innerText;
let li1 = document.getElementById('li1');
let li2 = document.getElementById('li2');
let li3 = document.getElementById('li3');
let li4 = document.getElementById('li4');
let li5 = document.getElementById('li5');
let li6 = document.getElementById('li6');
let li7 = document.getElementById('li7');
let li8 = document.getElementById('li8');
let li9 = document.getElementById('li9');
let li10 = document.getElementById('li10');


btn.addEventListener('click',() => {
   let tipo = entradaLoca.value
   if (tipo != ''){
      titulo.innerHTML = 'Hola '+tipo+ ', tenés pendientes'
   }else{
      alert('Qué onda? Poné tu nombre')
   }
})

task1.addEventListener('change',() =>{
   if (task1.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span1) 
      li1.classList.add("tachado")
   }else{
      alert('Bueno, ya no haces más esta tarea, vaguito!')
   }     
})

task2.addEventListener('click',function(){
   if (task2.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span2)
      li2.classList.add("tachado")
   }else{
      alert('Bueno, ya no haces más esta tarea, vaguito!')
   }      
})


task3.addEventListener('click',function(){
   if (task3.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span3)
      li3.classList.add("tachado")
   }else{
      alert('Bueno, ya no haces más esta tarea, vaguito!')
   }      
})

task4.addEventListener('click',function(){
   if (task4.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span4)
      li4.classList.add("tachado")
   }else{
      alert('Bueno, ya no haces más esta tarea, vaguito!')
   }        
})

task5.addEventListener('click',function(){
   if (task5.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span5)
      li5.classList.add("tachado")
   } else{
      alert('Bueno, ya no haces más esta tarea, vaguito!')
   }        
})

task6.addEventListener('click',function(){
   if (task6.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span6)
      li6.classList.add("tachado")
   }else{
      alert('Bueno, ya no haces más esta tarea, vaguito!')
   }         
})

task7.addEventListener('click',function(){
   if (task7.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span7)
      li7.classList.add("tachado")
   } else{
      alert('Bueno, ya no haces más esta tarea, vaguito!')
   }        
})

task8.addEventListener('click',function(){
   if (task8.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span8)
      li8.classList.add("tachado")
   } else{
         alert('Bueno, ya no haces más esta tarea, vaguito!')
      }     
})

task9.addEventListener('click',function(){
   if (task9.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span9)
      li9.classList.add("tachado")
   } else{
      alert('Bueno, ya no haces más esta tarea, vaguito!')
   }        
})

task10.addEventListener('click',function(){
   if (task10.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span10)
      li10.classList.add("tachado")
   }  else{
      alert('Bueno, ya no haces más esta tarea, vaguito!')
   }       
})





