

  

function home(outlet) {
    loadContent('./component/home/home.html', outlet)
    loadScript("./component/home/home.js")
   
}
  function live(outlet) {
    loadContent('./component/live/live.html',outlet)
    loadScript("./component/live/live.js")
    if (arrayForGraph.length === 0) {
      
      alert("בחר מטבע אחד לפחות");
      loadContent('./component/home/home.html', outlet)
    loadScript("./component/home/home.js")
    
  }
  
}
function about(outlet) {

 loadContent('./component/about/about.html', outlet)
  loadScript("./component/about/about.js")
      
  }
  
  function loadContent(url, outlet) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.onload = function () {
        outlet.innerHTML = xhr.responseText;
    }
    xhr.send()
  }
  
  
  
  
  
  
  function loadScript(url) {
      const oldScript = document.querySelector('#dynamicScript')
      oldScript?.remove();
      const scriptTag = document.createElement('script');
      scriptTag.id = "dynamicScript"
      scriptTag.src = url;
      document.body.appendChild(scriptTag)   
      // document.body.insertAdjacentElement('beforeend',scriptTag)   
    }
    
