let slides = [
  {
    image: 'project-slide1.jpg',
    h: 'Modern art gallery Warsaw, Poland',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lorem augue. Maecenas vehicula metus eros, et pellentesque justo ornare nec. Curabitur volutpat, quam in mollis luctus, enim risus ullamcorper libero, eu vehicula sapien nunc et tortor. '
  },

  {
    image: 'project-slide2.jpg',
    h: 'Modern art gallery Warsaw, Poland',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lorem augue. Maecenas vehicula metus eros, et pellentesque justo ornare nec. Curabitur volutpat, quam in mollis luctus, enim risus ullamcorper libero, eu vehicula sapien nunc et tortor. '
  },

  {
    image: 'project-slide3.jpg',
    h: 'Modern art gallery Warsaw, Poland',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lorem augue. Maecenas vehicula metus eros, et pellentesque justo ornare nec. Curabitur volutpat, quam in mollis luctus, enim risus ullamcorper libero, eu vehicula sapien nunc et tortor. '
  },

  {
    image: 'project-slide4.jpg',
    h: 'Modern art gallery Warsaw, Poland',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lorem augue. Maecenas vehicula metus eros, et pellentesque justo ornare nec. Curabitur volutpat, quam in mollis luctus, enim risus ullamcorper libero, eu vehicula sapien nunc et tortor. '
  }
]

let sliderCount = slides.length;
let currentSlide = 0;
let sliderBlock = document.querySelector('.section_work');
let slideNext = sliderBlock.querySelector('.button_next');
let slidePrev = sliderBlock.querySelector('.button_prev');
let mainIMG = sliderBlock.querySelector('.picture_block').querySelector('img');
let descBlock = sliderBlock.querySelector('.desc_block');
let number = sliderBlock.querySelector('.number');
let minSlides = sliderBlock.querySelector('.section_work_projects_slider_min');
let animationTime = 500;
let currentAnimation = false;
let windowWidth = document.documentElement.clientWidth;

slides.forEach((elem, index) => {
  let div = document.createElement('div');
  div.classList.add('img_wrapper');
  let img = document.createElement('img');
  img.src = `img/${elem.image}`
  div.append(img);
  minSlides.append(div);
  div.addEventListener('click', () => {
    if (!currentAnimation) switchSlide('', index);
    currentAnimation = true;
  })
});

let prevSlide = minSlides.children[0];
prevSlide.classList.add('slider_projects_current_small');

slidePrev.addEventListener('click', () => {
  if (!currentAnimation) switchSlide('prev');
  currentAnimation = true;
});
slideNext.addEventListener('click', () => {
  if (!currentAnimation) switchSlide('next');
  currentAnimation = true;
});

window.onresize = () => {
  windowWidth = document.documentElement.clientWidth;

  if (windowWidth > 1000) {
    mainIMG.style.right = '34%';
    descBlock.style.left = '11%';
  } else {
    mainIMG.style.right = 0;
    descBlock.style.left = 0;
  }

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

  if (windowWidth > 1000) {
    mainIMG.style.right = '168%';
    descBlock.style.left = '67%';
  } else {
    mainIMG.style.opacity = 0;
    descBlock.style.opacity = 0;
  }

  setTimeout(() => {
    prevSlide.classList.remove('slider_projects_current_small');
    minSlides.children[currentSlide].classList.add('slider_projects_current_small');
    if (windowWidth > 1000) {
      mainIMG.style.right = '34%';
      descBlock.style.left = '11%';
    } else {
      mainIMG.style.opacity = 1;
      descBlock.style.opacity = 1;
    }
    mainIMG.src = `img/${slides[currentSlide].image}`;
    number.textContent = currentSlide+1;
    prevSlide = minSlides.children[currentSlide];
    setTimeout(() => {
      currentAnimation = false;
    }, animationTime);
  }, animationTime);
}



