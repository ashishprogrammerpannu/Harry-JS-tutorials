/*console.info('we are in events');
let grabbed = document.getElementById('h2');

//  Coolest function

document.body.addEventListener('click',(e) =>{ // 'e' is the element.
e.target.textContent = `You have clicked ${e.target.tagName}.`
})*/

// classList will give us a list of classes of an element

//  offsetX and offsetY will tell the distance of X and Y.

//  clientX and ClientY

//  math class function to get a random number
let p = Math.random()

/*
document.addEventListener('mouseover',(e) =>{
    let x = e.offsetX;
    let y = e.offsetY;
    let z = e.clientX
    document.body.style.backgroundColor = `rgb(${x},${y},${x})`;
    console.log(x)
})
*/


let a = document.getElementsByTagName('a');
a = a[0];
a.setAttribute('id','Anchor');
console.log(a);
a.addEventListener('click', (e)=>{
    console.log(e.target.tagName);
    e.preventDefault(); // to prevent the default behaviour of the element.
})

 // mouse events
/*
mouse events
mousedown
mouseup
mouseenter
mouseleave
mousemove
mouseout
select
wheel
*/

let select = document.querySelector('#select');
 select.addEventListener('select', (e)=>{
     console.log('hello');
 })


//  crowler 

Array.from(links).forEach((e)=>{
    if(e.href.includes('principal')){
    console.log(e.href)
  }
  })








  function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);