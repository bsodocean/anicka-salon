const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile');

menu_btn.addEventListener('click', function() {
  document.body.style.overflow = menu_btn.className.includes("active") ? "scroll" : "hidden";
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

window.addEventListener("scroll", function() {
  var navbar = document.getElementById('desktop');
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

window.onload = () => {
  const anchors = document.querySelectorAll('a');
  const transition_el = document.querySelector('.transition');

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 900);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.currentTarget.href;

      console.log(transition_el);

      transition_el.classList.add('is-active');

      console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 900);
    })
  }
}

let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#1a1110";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#1a1110 ";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#1a1110 ";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}

if(location.hash == "#service1") document.querySelector("#service1 .toggle").click();
if(location.hash == "#service2") document.querySelector("#service2 .toggle").click();
if(location.hash == "#service3") document.querySelector("#service3 .toggle").click();
if(location.hash == "#service4") document.querySelector("#service4 .toggle").click();
