let burger = document.querySelector('.header_nav_list_burger_inner');
let burgerList = document.querySelector('.burger_list')
burger.parentNode.onclick = () => {
  burger.classList.toggle('burger_change');
  console.log((burgerList.style.display == ''));
  if (burgerList.style.display == '') {
    burgerList.style.display = 'flex';
    setTimeout(() => {
      burgerList.classList.toggle('hidden');
    }, 0);
  } else {
    burgerList.classList.toggle('hidden')
    setTimeout(() => {
      burgerList.style.display = '';      
    }, 400);
  }

}