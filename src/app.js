const incrementer = document.querySelector('#incrementer');
const decrementer = document.querySelector('#decrementer');
const reset = document.querySelector('#reset');
const p = document.querySelector('#compteur')
let nombre = 0;

incrementer.addEventListener('click',()=>{
    nombre++;
    p.textContent=nombre;
})
decrementer.addEventListener('click',()=>{
    console.log('eee')
})