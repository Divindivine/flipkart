let mainArr = [];
let reusableArr = [];
let forContent = "Relevance";
let brandArr = [];
let tempArr = [];
showmoreInncr = 0;
wholeArr = [];



function fetchdata() {
  fetch("flipkart.json")
    .then((response) => response.json())
    .then((data) => {
      copydata(data.products);
      header(data.headeritems);
      naviteminner(data.navitems);
      sortarea(data.sortitems);
      sortbyworking();
      sortdefaultselected();
      mainbodybuilding(data.products);
    })
    .catch((err) => {
      console.log("error:", err);
    });
}

fetchdata();

function copydata(products) {
  products.forEach((element) => {
    mainArr.push(element);
  });
  wholeArr = [...mainArr];
  reusableArr = [...mainArr];
}

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


function sortarea(data) {
  let output = "";
  for (let item of data) {
    output += `
      <div class= "sortitems">
         ${item.sortitemsdef}
      </div>
      `;
  }
  document
    .querySelector(".right-head-third")
    .insertAdjacentHTML("beforeend", output);
}



function sortdefaultselected() {
  const sortitems = document.querySelector(".right-head-third");
  const currentactive = sortitems.children[1];
  currentactive.classList.add("selected-sort");
}

function sortbyworking() {
  let elements = document.getElementsByClassName("sortitems");
  for (let items of elements) {
    items.addEventListener("click", sortaction);
  }
}

function sortaction(event) {
  const prev = document.querySelector(".selected-sort");
  prev.classList.remove("selected-sort");
  event.target.classList.add("selected-sort");
  forContent = event.target.innerText;
  console.log(reusableArr)
  sortmainbysortby(event.target.innerText, reusableArr);
  
}

function sortmainbysortby(content, Arr) {
  if (Arr == undefined) {
    Arr = [...mainArr];
  }
  console.log(Arr);
  if (content === "Relevance") {
    Arr.sort((a, b) => a.index - b.index);
    mainbodybuilding(Arr);
  } else if (content === "Popularity") {
    Arr.sort((a, b) => b.rating.count - a.rating.count);
    mainbodybuilding(Arr);
  } else if (content === "Price -- Low to High") {
    Arr.sort((a, b) => a.price - b.price);
    mainbodybuilding(Arr);
  } else if (content === "Price -- High to Low") {
    Arr.sort((a, b) => b.price - a.price);
    mainbodybuilding(Arr);
  } else if (content === "Newest First") {
    Arr.sort(
      (a, b) => new Date(a.manufacturing_date) - new Date(b.manufacturing_date)
    );
    mainbodybuilding(Arr);
  }
}


function mainbodybuilding(data) {
  console.log(data);
  document.getElementById("noofmainelem").innerHTML = `${data.length}`;
  let output = "";
  if(data.length === 0){
    output = `
      <div class="empty-div">
         <div class="empty-div-inner">
            <div class="inner-content">
               <div class="nothingfound-text-1">Sorry, no results found!</div>
               <div class="nothingfound-text-2">Please check the spelling or try searching for something else</div>
            </div>
         </div>
      </div>
  `;
  }
  for (let item of data) {
    output += `
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
                                <span id="starratingno">${
                                  item.rating.average
                                }</span>
                                <img src="img/right-main/star.svg" alt="">
                              </div>
                            </span>
                            <span id="ratingnreview">
                              <span>
                                <span id="noofratings">${
                                  item.rating.count
                                } Ratings</span>
                                <span id="ratingand">&</span>
                                <span id="noofreviews">${
                                  item.rating.reviewCount
                                } Reviews</span>
                              </span>
                            </span>
                          </div>
                          <div class="spec-field">
                            <ul class="specfieldinner">${specbulider(
                              item.highlights
                            )}</ul>
                          </div>
                        </div>
                        <div class="elem-right-right">
                          <div class="elem-right-right-first">
                            <div class="sectionprice">
                              <div class="pricearea">
                                <span id="priceamount">₹${item.price}</span>
                              </div>
                              <div class="mrparea">
                                <span>₹<span id="mrpamount">${
                                  item.mrp
                                }</span></span>
                              </div>
                              <div class="aboutoffer">
                                <span id="offerdef">${offercalc(
                                  item.price,
                                  item.mrp
                                )}% off</span>
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

  function specbulider(spec) {
    let output = "";
    for (let item of spec) {
      output += `
        <li id="specitems">
          <span id="specitemsdef">${item}</span>
        </li>
        `;
    }
    return output;
  }

  function offercalc(small, big) {
    let ans = ((big - small) / big) * 100;
    return Math.round(ans);
  }

  document.querySelector(".forjs").innerHTML = output;
}

minOptions = [
  { value: "0", text: "Min" },
  { value: "10000", text: "₹10000" },
  { value: "15000", text: "₹15000" },
  { value: "20000", text: "₹20000" },
  { value: "30000", text: "₹30000" },
];

maxOptions = [
  { value: "10000", text: "₹10000" },
  { value: "15000", text: "₹15000" },
  { value: "20000", text: "₹20000" },
  { value: "30000", text: "₹30000" },
  { value: "Max", text: "₹30000+" },
];

function populateDropdown(selectElement, options, selectedValue) {
  selectElement.innerHTML = "";

  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option.value;
    opt.textContent = option.text;
    selectElement.appendChild(opt);
  });

  if (
    selectedValue &&
    [...selectElement.options].some((opt) => opt.value === selectedValue)
  ) {
    selectElement.value = selectedValue;
  } else {
    selectElement.selectedIndex = 0;
  }
}

let minSelectedValue;
let maxSelectedValue;



function filterOptions() {
  const minSelect = document.querySelector(".minsec-inner");
  const maxSelect = document.querySelector(".maxsec-inner");
  minSelectedValue = minSelect.value;
  const minSelectedInner = minSelect.options[minSelect.selectedIndex].text;
  maxSelectedValue = maxSelect.value;
  const maxSelectedInner = maxSelect.options[maxSelect.selectedIndex].text;
  let filteredMaxOptions = maxOptions.filter((option) => {
    if (option.value === "Max") return true;
    return parseInt(option.value, 10) > parseInt(minSelectedValue, 10);
  });
  const filteredMinOptions = minOptions.filter((option) => {
    if (option.value === "0") return true;
    return (
      parseInt(option.value, 10) <
      (maxSelectedValue === "Max" ? Infinity : parseInt(maxSelectedValue, 10))
    );
  });

  populateDropdown(minSelect, filteredMinOptions, minSelectedValue);
  populateDropdown(maxSelect, filteredMaxOptions, maxSelectedValue);
  minmaxAdjustMain(minSelectedValue, maxSelectedValue, wholeArr);
  filterAreaBuilding(minSelectedInner, maxSelectedInner);
}

populateDropdown(document.querySelector(".minsec-inner"), minOptions, "0");
populateDropdown(document.querySelector(".maxsec-inner"), maxOptions, "Max");

document
  .querySelector(".minsec-inner")
  .addEventListener("change", filterOptions);
document
  .querySelector(".maxsec-inner")
  .addEventListener("change", filterOptions);

function minmaxAdjustMain(min, max, arr) {
  console.log("hai");
  reusableArr = [...arr];
  console.log(reusableArr);
  if (min === "0" && max === "Max") {
    sortmainbysortby(forContent, reusableArr);
  } else if (max === "Max") {
    reusableArr = arr.filter((element) => element.price >= min);
    sortmainbysortby(forContent, reusableArr);
  } else if (min === "0") {
    reusableArr = arr.filter((element) => element.price <= max);
    sortmainbysortby(forContent, reusableArr);
  } else {
    const maxValueSelect = document.querySelector(".maxsec-inner");
    const max = maxValueSelect.value;
    reusableArr = arr.filter(
      (element) => element.price >= min && element.price <= max
    );
    console.log(arr);
    sortmainbysortby(forContent, reusableArr);
  }
}


function filterAreaBuilding(min, max) {
  let output = `
      <div class="area-elm" id="areaelamid">
        <div class="forxbutton">
          <span>✕</span>
        </div>
      <div class="forelmentarea">
        <span >${min}-${max}</span>
      </div>
    </div>
    `;

  document.querySelector(".pricefilterare-in").innerHTML = output;
  const selcetedElem = document.querySelector("#areaelamid");
  selcetedElem.addEventListener("click", function () {
    output = "";
    document.querySelector(".pricefilterare-in").innerHTML = output;
    populateDropdown(document.querySelector(".minsec-inner"), minOptions, "0");
    populateDropdown(
      document.querySelector(".maxsec-inner"),
      maxOptions,
      "Max"
    );
    sortmainbysortby(forContent, reusableArr);
  });
}

var incr = 90;
var num = 0;
const brandClick = document.querySelector(".brand-header");
brandClick.addEventListener("click", function () {
  var arrow = document.getElementById("brand_arrow");
  incr += 180;
  num += 1;
  arrow.style.transform = `rotate(${incr}deg)`;
  showBrands(num, mainArr);
});

let forBrandLimit = 0;

function showBrands(num, arr1) {
  const brandName = arr1.map((element) => element.brand);
  let output = `
   <div class="brand-search">
      <img id="searchforbrand" src="img/left-main/brand-search.svg" alt="">
      <input class="brandinput" type="text" placeholder="Search Brand">
   </div>`;
  num += 1;
  let arr = [...new Set(brandName)];
  let brandNo = arr.length;
  for (let item of arr) {
    forBrandLimit++;
    output += `
      <div class="brand-elems">
          <div class="brand-elems-in">
              <div class="brand-elems-inner">
                  <div class="forbox">
                      <div class="boxlabel">
                          <input type="checkbox" class="forbrandselection" onclick="checkboxClicked(this)">
                      </div>
                  </div>
                  <span id="brandnamedef">${item}</span>
              </div>
          </div>
      </div>
      `;
  }
  const remainigBrand = brandNo - 5;

  output += `<span id = "brandMore">${remainigBrand} MORE`;
  document.querySelector(".brand-body-main").innerHTML += output;
  document
    .getElementById("brandMore")
    .addEventListener("click", showMoreClicked);
  let totalBrands = document.getElementsByClassName("brand-elems");
  let i = 0;
  for (let item of totalBrands) {
    console.log(i);
    i += 1;
    item.classList.add(`brandno_${i}`);
    if (i > 6) {
      item.style.display = "none";
    }
  }

  if (num % 2 === 1) {
    document.querySelector(".brand-body-main").innerHTML = "";
  }

  function showMoreClicked() {
    showmoreInncr++;
    if (showmoreInncr % 2 == 1) {
      for (let item of totalBrands) {
        item.style.display = "block";
      }
      let showmore = document.getElementById("brandMore");
      showmore.innerHTML = "Show Less";
    } else {
      let i = 0;
      for (let item of totalBrands) {
        i++;
        if (i > 6) {
          item.style.display = "none";
        }
      }
      let showmore = document.getElementById("brandMore");
      showmore.innerHTML = `${remainigBrand} MORE`;
    }
  }
}

function checkboxClicked(checkbox) {
  let checked = event.target.parentElement.parentElement.parentElement;
  let checkedInner = checked.querySelector("span");
  let brand = checkedInner.innerHTML;

  if (checkbox.checked) {
    console.log(brand);
    filterbyBrand(brand);
  } else {
    removeBrandFilter(brand);
  }
}

function filterbyBrand(brand) {
  mainArr.forEach((element) => {
    if (brand === element.brand) {
      brandArr.push(element);
    }
  });
  console.log(brandArr);
  minmaxAdjustMain(minSelectedValue, maxSelectedValue, brandArr)
  filterAreaOfBrand(brand);
}

function removeBrandFilter(brand) {
  let removeDeleted = [];
  removeDeleted = brandArr.filter((element) => {
    return element.brand !== brand;
  });
  brandArr = [...removeDeleted];

  reusableArr = [...brandArr];
  sortmainbysortby(forContent, brandArr);
  if (brandArr.length === 0) {
    sortmainbysortby(forContent, reusableArr);
  }
}

function filterAreaOfBrand(brand) {
  let output = `
    <div class="area-elm" id="areaelamid2">
         <div class="forxbutton">
           <span>✕</span>
         </div>
       <div class="forelmentarea">
         <span >${brand}</span>
       </div>
     </div>
  `;

  document.querySelector(".pricefilterarea-in").innerHTML += output;
  const selcetedElem = document.querySelector("#areaelamid2");
  selcetedElem.addEventListener("click", function (event) {
    let parent = document.querySelector(".pricefilterarea-in");
    let child1 = document.getElementsByClassName("area-elm");
    let child2 = document.getElementsByClassName("forelmentarea");
    let children = event.currentTarget.children;
    console.log(children);
    let childrenArray = Array.from(children);
    childrenArray.forEach((child) => {
      if (child.classList.contains("forelmentarea")) {
        console.log("hai");
      }
    });
    if (children.classList.contains("forelmentarea"))
      console.log(event.currentTarget.innerHTML);
  });
}

let x = 90;
function customerfunction(){
  x+=180;
  let arrow = document.getElementById('customerarrow');
  arrow.style.transform = `rotate(${x}deg)`;
  let ratings = document.querySelectorAll('.starinner');
  ratings.forEach(element => {
    if(element.style.display === 'block'){
      element.style.display = 'none';
    }
    else{
      element.style.display = 'block';
    }
  });
}




