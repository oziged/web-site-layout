let sliderWrapper = document.querySelector('.slider_number');
let sliderMainNumber = sliderWrapper.querySelector('span');
let sliderText = sliderWrapper.querySelector('.slider_text');
let sliderTextMobile = document.querySelector('.slider_text_mobile');
let slideNext = document.querySelector('.slider_next');
let slidePrev = document.querySelector('.slider_prev');
let imgBlock = document.querySelector('.section_aims_right_block');
let sliderSmallNumber = document.querySelector('.slider_small_numbers');
let animationTime = 1000;

let sliderTextArray = ['Architecture aims at eternity', 'Modern art gallery', 'Its just random words', 'Some more other text for'];

sliderTextArray.forEach((elem, index) => {
  let li = document.createElement('li');
  li.textContent = '0'+(index+1);
  sliderSmallNumber.append(li);

  li.addEventListener('click', () => {
    if (!currentAnimation) switchSlide('', index);
    currentAnimation = true;
  })
})

let prevSlide = sliderSmallNumber.children[0];

let sliderCount = sliderTextArray.length;
let currentSlide = 0;
let currentAnimation = false;

sliderSmallNumber.children[0].classList.add('slider_current_small')

slideNext.onclick = () => {
  if (!currentAnimation) switchSlide('next');
  currentAnimation = true;
}
slidePrev.onclick = () => {
  if (!currentAnimation) switchSlide('prev');
  currentAnimation = true;
}

function switchSlide(direction, jumpToSlide) {

  if (jumpToSlide != undefined) currentSlide = jumpToSlide;
  else {
    if (direction == 'prev' && !currentSlide) currentSlide = sliderCount-1;
    else if (direction == 'next' && currentSlide == sliderCount-1) currentSlide=0;
    else {
      if (direction == 'prev') currentSlide--;
      if (direction == 'next') currentSlide++;
    }
  }


  sliderMainNumber.classList.add('slider_opacity');
  imgBlock.classList.add('slider_translateX');
  sliderText.classList.add('slider_opacity');
  sliderTextMobile.classList.add('slider_opacity');

  setTimeout(() => {
    prevSlide.classList.remove('slider_current_small');
    sliderSmallNumber.children[currentSlide].classList.add('slider_current_small');
    sliderMainNumber.textContent = `0${currentSlide+1}`;
    sliderMainNumber.classList.remove('slider_opacity');
    sliderText.textContent = sliderTextArray[currentSlide];
    sliderTextMobile.textContent = sliderTextArray[currentSlide];
    sliderText.classList.remove('slider_opacity');
    sliderTextMobile.classList.remove('slider_opacity');
    imgBlock.style.background = `white url("img/slide${currentSlide}.jpg") no-repeat center center`;
    imgBlock.style.backgroundSize = 'cover';
    imgBlock.classList.remove('slider_translateX');
    prevSlide = sliderSmallNumber.children[currentSlide];
    setTimeout(() => {
      currentAnimation = false;
    }, animationTime);
  }, animationTime);  
}

setInterval(() => {
  slideNext.click();
}, 8000);
