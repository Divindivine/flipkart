// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }

// return function a(){
//     var c= 54;
//     function fa(){

//     }
// }

// function z(){}



// function x(){
//     var i = 1;
//     setTimeout(function(){
//     console.log(i);
//      },5000);
//      console.log("hai")
// }
// x();


// function x(){
//     for (var i = 1; i <= 5; i++){
//         setTimeout(function () {
//             console.log(i);
//         }, i  * 1000);
//     }
//     console.log("namaste JS");
// }
// x();



// function x(){
//     for (var i = 1; i<=5;i++){
//         function close(){
//             setTimeout(function (){
//                 console.log(i);
//             }, i * 1000);
//         }
//         close(i);
        
//     }
//     console.log("Namste JS")
// }
// x();

// function outer(){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
// }
// outer ()();

// console.log("start");
// setTimeout(function cb(){
//     console.log("callback");
// }, 5000);
//  console.log("end");


// console.log("start");
// document.getElementById("btn")
// .addEventListener("click", function cb() {
//     console.log("Callback");
// });
// console.log("End");

// console.log("start");
// setTimeout(function cbT(){
//     console.log("CB SetTimeout");
// },5000);

// fetch("https://api.netflix.com")
// .then(function cbF(){
//     console.log("CB Netflix");
// });
// console.log("End");

// function hai(){
//      console.log('sh you touched my lalalal');
// }

// var but = document.getElementById('kick')
// but.onclick = () =>{
//     console.log('hella');
// }

// var button = document.getElementById('kick');
// button.onclick = () => {
//     console.log('Started click event');
//     $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/todos/1',
//         success: (data) =>{
//             console.log(data);
//         },
//     });
//     consoole.log('ended the click event')
// }

// var button = document.getElementById('kick');
// button.onclick = () => {
//     console.log('Started click event');
//     var arr = [1, 2, 3, 4, 5];
//     arr.forEach((item) =>{
//         console.log(item);
//     });

//     console.log('ended the click event')
// }

// var button = document.getElementById('mybutton');
// button.onclick = () => {
//     console.log('Started click event');
//     var arr = [];
//     $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/todos/1',
//         success: (data) => {
//             console.log('ajax1 started');
//             arr.push(data.title);
//             console.log('ajax1 ended');
//         },
//         async: false
//     });


//     $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/todos/1',
//         success: (data) => {
//             console.log('ajax2 started');
//             arr.push(data.title);
//             console.log('ajax2 ended');
//         },
//         async: false
//     });
//     document.getElementById('mytext').value=arr.join('\n');
//     console.log('ended the click event')
// }


// console.log('started');

// const pr = myFetch('https://jsonplaceholder.typicode.com/todos/1');
// console.log(pr);
// console.log('ended');
//  console.log('started');
//  $.ajax({
//     type: "GET",
//     url: 'https://jsonplaceholder.typicode.com/todos/1',
//     success: function(msg){
//         console.log(msg);
//     },     
//     error: function(xhr, statusText){
//         console.log(statusText);
//     },
// });
//  const pr = myFetch('https://jsonplaceholder.typicode.com/todos/1')
//  function buttonClick(){
//     console.log('clicked');
//     pr.then((data)=>{
//         console.log(data);
//     }, (err) => {
//         console.log(err);
//     });
//  }
//  console.log('ended');

// console.log('Requesting 1');
// const pr = myFetch('https://jsonplaceholder.typicode.com/todos/1');
// pr.then((data) =>{
//     console.log(data);
//     console.log('Requesting 2');
//     const pr = myFetch('https://jsonplaceholder.typicode.com/todos/2');
//     pr.then((data) => {
//         console.log(data);

//         console.log('Requesting 3');
//         const pr = myFetch('https://https://jsonplaceholder.typicode.com/todos/3')

//         pr.then((data) =>{
//             console.log(data);
//         });
//     });
// });
// let http =  new XMLHttpRequest();
// http.open('get', 'flipkart.json', true);
// http.send();
// http.onload = function(){
//     if(this.readyState == 4 && this.status == 200){
//         let products = JSON.parse(this.responseText);
//         let output = "";
//         for(let item of products){
//             output +=
//             `
//             <div class= "product">
//             <img src="${item.image}"  alt="${item.image}">
//             <p class="title">${item.title}</p>
//             <p class="description">${item.description}</p>
//             <p class="price">
//                 <span>${item.price}</span>
//                 <span>&euro;</span>
//            </p>
//         </div>
//         `;
//         }
//         document.querySelector(".products").innerHTML = output;
//     }
// }

fetch('flipkart.json')
.then(response =>response.json())
.then(
   (data)=>{
      header(data.headeritems);
      naviteminner(data.navitems);
   }
)
.catch(err =>{
    console.log('error:',err);
})

function header(data){
   var fliplogo = document.getElementById("flipkartlogo");
   var undlogo1 = document.getElementById("underlogo1");
   var undlogo2 = document.getElementById("underlogo2");
   var undlogo3 = document.getElementById("underlogo3");
   var searchinp = document.getElementById("search_input");
   var searchlen = document.getElementById("searchlense");
   var logdef = document.getElementById("logindef");
   var firstdef = document.getElementById("firstlidef");
   var secdef = document.getElementById("secondlidef");
   var downarrow = document.getElementById("secondlidef_downarrow");
   var cart = document.getElementById("cartlogo");
   var thirddef = document.getElementById("thirdlidef");

   fliplogo.src = data.flipkartlogo;
   undlogo1.innerText = data.underlogo1;
   undlogo2.innerText = data.underlogo2;
   undlogo3.src = data.underlogo3;
   searchinp.placeholder = data.search_input;
   searchlen.src = data.searchlense;
   logdef.innerText = data.logindef;
   firstdef.innerText = data.firstlidef;
   secdef.innerText = data.secondlidef;
   downarrow.src = data.secondlidef_downarrow;
   cart.src = data.cartlogo;
   thirddef.innerText = data.thirdlidef;
}

function naviteminner(data){
   console.log(data);
   let output = "";
   for(let item of data){
      output +=
      `
      <span id = "nav-list-item">
         ${item.navlistdef}
         <img src="${item.navdownarrow}">
      </span>

      `;
   }
   document.querySelector(".nav-item-inner").innerHTML = output;
}

