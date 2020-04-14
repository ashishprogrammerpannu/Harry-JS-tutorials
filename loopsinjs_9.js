console.log("I am learning Javascript loops");
//  While loop.
let i = 0;
while (i < 5) {
  i++;
  console.log(`This is ${i} iteration`);
}

//  if loop

for (let j = 10; j > 1; j /= 1.9) {
  const element = j;
  console.log("Hello");
}

// do while loop

let d = 10;
do {
    console.log(location.href);
    // location.reload()
    d++
} while (d<13);
/*
 Continue keyword
*/
for (let w = 0; w < 10 ; w++) {
  if(w==5){
      continue;
  }
  let element = w;
  console.log(w)
}

/*
 Break keyword
*/

let j = 0;
while(j<=10){
  if(j==5){
    j++
    break;
  }
  console.log(`Ohh ${j}`)
  j++
}
/*
 Getting elements from array using loops
*/
let arr = [12,24,35,54];
arr.forEach(element => {
  console.log(element);
});

arr.forEach(function(element,index){
 console.log(String(element),index)
});
/*
Objects
*/
let obj = {
  Name:'Rahul',
  Type:'Asshole',
  Os:'door'
}

for(let variable in obj){
  console.log(`${variable} of object is ${obj[variable]}`)
}