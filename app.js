const closeBtn = document.getElementById('closeNavbar');
const toggler = document.querySelector('.navbar-toggler');
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');


  navbar.addEventListener('shown.bs.collapse', () => {
    overlay.style.display = 'block';
  });

  navbar.addEventListener('hidden.bs.collapse', () => {
    overlay.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    toggler.click();
  });
