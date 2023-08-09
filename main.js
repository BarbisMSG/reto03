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




btn.addEventListener('click',function(){
   let tipo = entradaLoca.value
   if (tipo != ''){
    titulo.innerHTML = 'Hola '+tipo+ ', tenés pendientes'
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

task3.addEventListener('click',function(){
   if (task3.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span3)
   }   
})

task4.addEventListener('click',function(){
   if (task3.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span4)
   }   
})

task5.addEventListener('click',function(){
   if (task3.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span5)
   }   
})

task6.addEventListener('click',function(){
   if (task3.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span6)
   }   
})

task7.addEventListener('click',function(){
   if (task3.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span7)
   }   
})

task8.addEventListener('click',function(){
   if (task3.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span8)
   }   
})

task9.addEventListener('click',function(){
   if (task3.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span9)
   }   
})

task10.addEventListener('click',function(){
   if (task3.checked){
      alert('Bravo '+entradaLoca.value+', completaste '+span10)
   }   
})




