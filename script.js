function fetchingdata(){
    const apiUrl = 'https://real-time-flipkart-api.p.rapidapi.com/products-by-category?category_id=tyy%2C4io&page=1&sort_by=popularity';
    const apiOptions = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'fe94acbef1msh718df993fe679f9p1daa48jsn546c852425cf',
            'x-rapidapi-host': 'real-time-flipkart-api.p.rapidapi.com'
        }
    };
    /*////////////////////////////////// */
    fetch(apiUrl, apiOptions)
    .then(response =>response.json())
    .then((apiData)=>{
      mainbodybuilding(apiData.products);
       }
    )
    .catch(err =>{
        console.log('error:',err)
    })
 /*////////////////////////////////// */


fetch("flipkart.json")
  .then((response) => response.json())
  .then((data) => {
    header(data.headeritems);
    naviteminner(data.navitems);
    sortarea(data.sortitems);
    sortdefaultselected();
    sortselection();
  })
  .catch((err) => {
    console.log("error:", err);
  });
}

fetchingdata();

function header(data) {
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

function naviteminner(data) {
  let output = "";
  for (let item of data) {
    output += `
      <span id = "nav-list-item">
         ${item.navlistdef}
         <img src="${item.navdownarrow}">
      </span>

      `;
  }
  document.querySelector(".nav-item-inner").innerHTML = output;
}

function sortarea(data){
   let output = "";
   for(let item of data){
      output += `
      <div class= "sortitems">
         ${item.sortitemsdef}
      </div>
      `;
   }
   document.querySelector(".right-head-third").insertAdjacentHTML('beforeend',output);
}

function sortdefaultselected(){
   const sortitmes = document.querySelector('.right-head-third');
   const currentactive = sortitmes.children[1];
   currentactive.classList.add('selected-sort')
   console.log(currentactive);
}

function mainbodybuilding(apidata){
   let output = "";
   for(let item of apidata){
      output +=``
   }
}


Typing      : [29Wpm][51%]
Focus       : [9hr 43min][548hr 58min]
CT          : [9hr 41min][590hrs 34min]
ACT         : [9hr 06min][513hr 12min]
HTML        : [165][12134]
CSS         : [483][12620]
JS          : [105][11497]
Total       : [622][34966]
days        : #3
