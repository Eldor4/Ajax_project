var modal = document.querySelector(".modal");
var contentm = document.querySelector("#homeContainer");
basicAjax("https://api.coingecko.com/api/v3/coins", mainFun);

function basicAjax(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.send();
  xhr.addEventListener("load", cb);
}

function mainFun() {
  let currency = [];
  currency = this.response;
  cardGenerator(currency);
  let coinsID = currency.map((val) => val.id);
  document.querySelector("#lala").addEventListener("click", function (e) {
    if (coinsID.includes(e.target.id) === true) {
      e.preventDefault();
      if (e.target.parentElement.childNodes[3].innerText === "") {
        !setFun(e.target.id);
        let id = e.target.id;
        var url = `https://api.coingecko.com/api/v3/coins/${id}`;
        basicAjax(url, infoFun);
        //מחיקת אינפורמציה תוך שתי דקות מהדף
        setTimeout(() => infoRemove(e.target.id), 120000);
      }
    }
    setTimeout(
      () => removeInfoPage(e.target.parentElement.childNodes[3]),
      120000
    );
    //מחיקת אינפורמציה תוך שתי דקות מהדף
    //הפעלת פונקצייית מחיקה בלחיצה
  });
  hideInfOnClick();

  function cardGenerator(value) {
    const div = document.createElement("div");
    let symbols = value.map((val) => val.symbol);
    symbols = symbols.map((x) => x.toUpperCase());
    div.setAttribute("class", "items");
    let html = value
      .map(function ({ id, name }, index) {
        return `<div class="card border-secondary m-3">
                        <div class="card-header">${symbols[index]}</div> 
                        <p class="card-text">Name : ${name} </p>
                        <div class="custom-control custom-switch">
                             <a class="btn btn-primary btn-lg clearls" href="#" role="button" id="${id}" title="Learn More">Learn more</a>
                             <div class="more-info" id="${symbols[index]}"></div>
                             <div class="check">
                             <input type="checkbox" data-coin=${symbols[index]} class="custom-control-input" id="customSwitch${index}" unchecked="">
                            <label class="custom-control-label" for="customSwitch${index}"></label>
                             </div>  
                        </div>
                    </div>`;
      })
      .join("");
    div.innerHTML = html;
    contentm.append(div);
  }

  document.body.querySelector("#lala").onclick = function (e) {
    if (e.target.nodeName === "INPUT") {
      if (arrayForGraph.includes(e.target.dataset.coin)) {
        arrayForGraph = arrayForGraph.filter(
          (coin) => coin !== e.target.dataset.coin
        );
        e.target.checked = false;
      } else if (
        arrayForGraph.length < 5 &&
        !arrayForGraph.includes(e.target.dataset.coin) &&
        e.target.checked === true
      ) {
        arrayForGraph.push(e.target.dataset.coin);
        e.target.checked = true;
      } else if (arrayForGraph.length >= 5) {
        document.getElementById(e.target.id).checked = false;
        modelFun(arrayForGraph);
        $(".modal").modal("show");
      }
    }

    // localStorage.setItem("ally",arrayForGraph)
  };
}
function hideInfOnClick() {
  let clear = document.querySelectorAll(".clearls");
  for (j = 0; j < clear.length; j++) {
    clear[j].addEventListener("click", function () {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.visibility === "visible") {
        content.style.visibility = "hidden";
        content.style.opacity = "0";
        content.style.height = "0";
      } else {
        content.style.visibility = "visible";
        content.style.opacity = "1";
        content.style.height = "100px";
      }
    });
  }
}

function infoFun(event) {
  const data = this.response;
  let id = this.response.symbol.toUpperCase();
  const ils = data.market_data.current_price.ils + "<strong>₪</strong>";
  const usd = data.market_data.current_price.usd + "<strong>$</strong>";
  const eur = data.market_data.current_price.eur + "<strong>€</strong>";
  const image = data.image.small;
  let div = document.getElementById(id);
  div.innerHTML = `<div>
                     <strong>ILS</strong> : ${ils} 
                      <br>
                      <strong>USD</strong> : ${usd} 
                      <br>
                        <strong>EUR</strong> : ${eur}
                         <br>
                    </div> 
                    <div>
                    <img src="${image}" style="border-radius: 25px;" >
                    </div>
                    `;
  let ForeignExchange = {
    ils: ils,
    usd: usd,
    eur: eur,
    image: image,
  };
  LocalStorageIn(ForeignExchange, this.response.id);
}

function removeInfoPage(div) {
  div.style.visibility = "hidden";
  div.style.opacity = "0";
  div.style.height = "0";
  setTimeout(() => (div.innerHTML = ""), 10);
}

function LocalStorageIn(object, key) {
  localStorage.setItem(key, JSON.stringify(object));
}

function infoRemove(key) {
  localStorage.removeItem(key);
}

function setFun(key) {
  return localStorage.getItem(key);
}

var arrayForGraph = [];
// let graphInterval;
var contentHtml;

function modelFun(arr) {
  let html = arr
    .map((val, index) => {
      return `<div class="form-group">
        <div class="custom-control custom-switch annoyingButttn ">
        Coin Number ${index + 1} :  ${val}
          <input type="checkbox" class="custom-control-input" data-coin=${val} id="customCheck${index}" checked="">
          <label class="custom-control-label" data-coin=${val} for="customCheck${index}"></label>
        </div><br>
        <hr>`;
    })
    .join("");
  document.querySelector(".modal-body").innerHTML = html;

  document
    .querySelector(".modal-footer")
    .addEventListener("click", clearCheckBox);
  document
    .querySelector(".modal-body")
    .addEventListener("click", makeFilterArray);

  function clearCheckBox(e) {
    if (e.target.textContent === "המשך") {
      console.log(arrayToCheck);
      for (let i = 0; i < arrayToCheck.length; i++) {
        document.querySelector(
          `#${arrayToCheck[i]}`
        ).nextElementSibling.childNodes[1].checked = false;
        console.log(`${arrayToCheck[i]} changed to false`);
      }
      $(".modal").modal("hide");
      arrayToCheck = [];
    }
    if (e.target.textContent === "סגור") {
      temparray = arrayForGraph.concat(arrayToCheck);
      arrayToCheck = [];
    }
  }

  function makeFilterArray(e) {
    if (e.target.nodeName === "INPUT")
      if (!arrayToCheck.includes(e.target.dataset.coin)) {
        arrayToCheck.push(e.target.dataset.coin);
      } else if (arrayToCheck.includes(e.target.dataset.coin)) {
        arrayToCheck = arrayToCheck.filter(
          (coin) => coin !== e.target.dataset.coin
        );
      }
  }
}
var arrayToCheck = [];

toSearch();

function toSearch() {
  document.querySelector("#searchBtn").addEventListener("click", searchCoin);
}

function searchCoin(e) {
 // e.target.textContent === "חפש";
  let CoinsId;
  let input = document.querySelector("#searchInput").value.toUpperCase();
  document.querySelectorAll(".card-header").forEach(function (val) {
    if (input === val.innerHTML) {
      CoinsId = val.innerHTML;
      hideAllDiv(CoinsId);
    }
    if (input === "") {
      showAllDiv();
    }
  });
}

function hideAllDiv(id) {
  let allDivs = document.querySelectorAll(".card");

  for (let i = 0; i < allDivs.length; i++) {
    if (allDivs[i].firstElementChild.innerHTML === id) {
      allDivs[i].style.display = "flex";
    } else {
      allDivs[i].style.display = "none";
    }
  }
}

function showAllDiv() {
  let allDivs = document.querySelectorAll(".card");
  for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].style.display = "flex";
  }
}
