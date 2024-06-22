// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// div.addEventListener("click",function(event){
//     event.stopPropagation(); //it is se for stop bubbling
//     console.log("div was clicked ");
// });

// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked ");
// });



// for(lis of li){
//     lis.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked ");
//     });
// }

//todo app
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul =document.querySelector("ul");

btn.addEventListener("click",function(){
console.log(inp.value);

let items = document.createElement("li");
items.innerText = inp.value;
let btn2 = document.createElement("button");
btn2.innerText = "delete";
btn2.classList.add("delete");
items.appendChild(btn2);
ul.appendChild(items);
inp.value="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON");
    let ListItem = event.target.parentElement;
    ListItem.remove();
    console.log("delete");
    
})




