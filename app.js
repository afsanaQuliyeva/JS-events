let divElement = document.createElement('div');
let grandParent = document.querySelector('.grand-parent')
let parent = document.querySelector('.parent');
let child = document.querySelector('#first-child');

divElement.style.width = "200px"
divElement.style.height = "200px"
divElement.style.backgroundColor = 'orange';
//divElement.append('Hello JS')
let text = document.createTextNode('Hello World');
divElement.append(text)
grandParent.appendChild(divElement);

console.log("innerText " + child.innerText);
console.log("innerHTML " + child.innerHTML);
console.log("textContent " + child.textContent)
//child.innerText = '<b>Hello World</b>'


//grandParent.addEventListener( "click", , {capture: true})

parent.addEventListener( "click", function (){
    console.log("I'm the parent")
}, {capture: false})


child.addEventListener( "click", function (){
    console.log("I'm the child")
},  {capture: false}) 


grandParent.addEventListener( "click", function (e) {
    console.log(e)
    console.log("I'm the grand parent")
})

parent.addEventListener( "click", e => {
    e.stopPropagation()
    console.log("I'm the parent")
})


child.addEventListener( "click",  e => {
    e.stopPropagation()
    console.log("I'm the child")
})


