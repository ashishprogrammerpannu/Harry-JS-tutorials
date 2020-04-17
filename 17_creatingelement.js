let createdElement = document.createElement('li');
createdElement.id = 'id1';
//  setting an attribute
createdElement.setAttribute('title','This is created by Ashish');
// creating a text node
let text = document.createTextNode('This ia text node')

let father = document.querySelector('#list');
createdElement.textContent = 'o'
father.appendChild(createdElement);

// replacing element. 

let t2 = document.createElement('p');
t2.textContent = `This is to be replace.`
createdElement.replaceWith(t2);
createdElement.appendChild(text)

// replaceChild 
father.replaceChild(createdElement,document.getElementById('f1'))
//  removing an element by using removeChild()
father.removeChild(document.getElementById('removed'))
//  get attribue
father.getAttribute('id');
//  to remove an attribute
createdElement.removeAttribute('id');
//  To check an attribute 
let a = createdElement.hasAttribute('title');
console.log(createdElement,a);


/*

Quiz solution

*/

let anch = document.createElement('a');
anch.setAttribute('href','//www.codewithharry.com');
document.body.appendChild(anch);
anch.style.textDecoration = 'none';
let h1 = document.createElement('h1');
h1.textContent = `Go to code with harry website`;
anch.appendChild(h1);