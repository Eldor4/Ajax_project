
window.onload = init;

const routes = {
    home,
    about,
    live,
    
};

function init() {
  document.querySelector("nav > ul").addEventListener("click", selectRoute);
  document.querySelector("#HOME").click()
}

function selectRoute(event) {
  event.preventDefault();
  if (event.target.nodeName !== "A") {
    return;
}
const outlet = document.querySelector(".link-outlet");
routes[event.target.textContent.toLowerCase()](outlet);
}

  









