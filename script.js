var mainarr = [];
function copyAPI(apidata){
  apidata.forEach(element => {
    mainarr.push(element);
  });
}
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
      copyAPI(apiData.products);
       }
    )
    .catch(err =>{
        console.log('error:',err);
    })
    
 /*////////////////////////////////// */


fetch("flipkart.json")
  .then((response) => response.json())
  .then((data) => {
    header(data.headeritems);
    naviteminner(data.navitems);
    sortarea(data.sortitems);
    sortdefaultselected();
    sortbyworking();
    minmaxadjust();
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
   const sortitems = document.querySelector('.right-head-third');
   const currentactive = sortitems.children[1];
   currentactive.classList.add('selected-sort')
}


function sortbyworking(){
  let elements = document.getElementsByClassName("sortitems");
  for(let items of elements){
    items.addEventListener('click',sortaction);
  } 
}

function sortaction(event){
  const prev = document.querySelector('.selected-sort');
  prev.classList.remove('selected-sort');
  event.target.classList.add('selected-sort');
  sortmainbysortby(event.target.innerText);
}

function sortmainbysortby(content){
  if(content === "Relevance"){
    mainbodybuilding(mainarr);
  }
  else if(content === "Popularity"){
    let measureunit = [...mainarr];
    measureunit.sort((a,b)=>b.rating.count - a.rating.count);
    mainbodybuilding(measureunit);
  }
  else if(content === "Price -- Low to High"){
    let measureunit = [...mainarr];
    measureunit.sort((a,b)=>a.price - b.price);
    mainbodybuilding(measureunit);
  }
  else if(content === "Price -- High to Low"){
    let measureunit = [...mainarr];
    measureunit.sort((a,b)=>b.price - a.price);
    mainbodybuilding(measureunit);
  }
  else if(content === "Newest First"){
    let measureunit = [...mainarr];
    measureunit.sort((a,b)=>a.rating.count - b.rating.count);
    mainbodybuilding(measureunit);
  }
}


function mainbodybuilding(apidata){
   let output = "";
   for(let item of apidata){
      output +=`
     <div class="right-main-elem">
              <div class="right-main-elemin">
                <div class="right-main-elem-inner">
                  <div class="right-main-elem-div">
                    <a href="" class="right-main-elem-link">
                      <div class="elem-left">
                        <div class="elem-left-first">
                          <div class="elem-left-first-in">
                            <div class="elem-left-first-inner">
                              <img
                                id="mobilepic"
                                src="${item.images[0]}"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div class="elem-left-second">
                          <div class="elem-left-second-in">
                            <span class="forbox">
                              <label for="" class="boxlabel">
                                <input type="checkbox" class="forcompinput" />
                              </label>
                            </span>
                            <label for="" class="forcompare">
                              <span>Add to Compare</span>
                            </label>
                          </div>
                        </div>
                        <div class="elem-left-third">
                          <div class="elem-left-third-in">
                            <img src="img/right-main/like.svg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div class="elem-right">
                        <div class="elem-right-left">
                          <div class="name-field">
                            <span id="phone-name">${item.title}</span>
                          </div>
                          <div class="rating-field">
                            <span id="starrating">
                              <div class="star-rating-inner">
                                <span id="starratingno">${item.rating.average}</span>
                                <img src="img/right-main/star.svg" alt="">
                              </div>
                            </span>
                            <span id="ratingnreview">
                              <span>
                                <span id="noofratings">${item.rating.count} Ratings</span>
                                <span id="ratingand">&</span>
                                <span id="noofreviews">${item.rating.reviewCount} Reviews</span>
                              </span>
                            </span>
                          </div>
                          <div class="spec-field">
                            <ul class="specfieldinner">
                              ${specbulider(item.highlights)}
                            </ul>
                          </div>
                        </div>
                        <div class="elem-right-right">
                          <div class="elem-right-right-first">
                            <div class="sectionprice">
                              <div class="pricearea">
                                <span id="priceamount">₹${item.price}</span>
                              </div>
                              <div class="mrparea">
                                <span>₹<span id="mrpamount">${item.mrp}</span></span>
                              </div>
                              <div class="aboutoffer">
                                <span id="offerdef">${offercalc(item.price,item.mrp)}% off</span>
                              </div>
                            </div>
                            <div class="aboutdelivery">
                              <div>
                                  <div class="aboutdelivery-inner">
                                    <span>Free delivery</span>
                                  </div>
                              </div>
                            </div>
                          </div>
                          <div class="elem-right-right-second">
                            <img src="img/right-main/filpassure.png" alt="">
                          </div>
                          <div class="elem-right-right-third">
                            <div class="elem-right-right-third-inner">
                              <span id="saverdeal">Saver Deal</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> 
      `;
   }

   function specbulider(spec){
      let output = "";
      for(let item of spec){
        output += `
        <li id="specitems">
          <span id="specitemsdef">${item}</span>
        </li>
        `
      }
    return output;
   }


   function offercalc(small,big){
     let ans = ((big - small)/big) * 100;
     return Math.round(ans);
   }


   document.querySelector(".forjs").innerHTML = output;
}

function minmaxadjust(){
  var min = document.getElementsByClassName('minsec-inner');
  min[0].addEventListener('click',minmaxaction);
  var firstmin = min[0].value;
  var max = document.getElementsByClassName('maxsec-inner');
  max[0].addEventListener('click',minmaxaction);
  var firstmax = max[0].value;
  console.log(firstmin);
  console.log(firstmax);
}


