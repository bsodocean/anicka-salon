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
      let target = e.target.href;

      console.log(transition_el);

      transition_el.classList.add('is-active');

      console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 900);
    })
  }
}