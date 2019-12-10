//nav

function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

//défilement

const ratio = .1

const options = {
  root:null,
  rootMargin: '0px',
  threshold : ratio,
}

const handleIntersect = function(entries, observer){
  entries.forEach(function(entry){
    if(entry.intersectionRatio > ratio) {
    entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    } else {
      
    }
  })

}

const observer = new IntersectionObserver(handleIntersect,options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
observer.observe(r)
}) 


//Jane

const title = document.querySelector('h1');
title.onmouseover = logMouseOver;
title.onmouseout = logMouseOut;
function logMouseOver(){
    const colorChange = 'rgba(155,233,177,1)';
    title.style.color = colorChange;
  }
function logMouseOut(){
    const colorOrigin = 'rgba(0,0,0,1)';
    title.style.color = colorOrigin;
}


//Louis

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
  
