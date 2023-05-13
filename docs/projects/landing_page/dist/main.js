const menuBtn = document.getElementById("menuButton");
addEventListener(onclick,menuBtn,)

const groups = document.getElementsByClassName("image_gallery");
let activeIndex = groups.length-1;

const swipeLeft = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`),
        currentButton = document.querySelector(`[data-index="b${activeIndex}"]`),
        nextButton = document.querySelector(`[data-index="b${nextIndex}"]`),
        currentBg = document.querySelector(`[data-index="bg${activeIndex}"]`),
        nextBg = document.querySelector(`[data-index="bg${nextIndex}"]`);
        
  currentGroup.dataset.status = "after_left";
  currentButton.dataset.status = "button_inactive";
  currentBg.dataset.status="bg_inactive";
  
  nextGroup.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    nextButton.dataset.status = "button_active";
    nextBg.dataset.status="bg_active";
    activeIndex = nextIndex;
    console.log("swipeleft: " + activeIndex);
  },10);
  
  
}

const swipeRight = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`),
        currentButton = document.querySelector(`[data-index="b${activeIndex}"]`),
        nextButton = document.querySelector(`[data-index="b${nextIndex}"]`),
        currentBg = document.querySelector(`[data-index="bg${activeIndex}"]`),
        nextBg = document.querySelector(`[data-index="bg${nextIndex}"]`);
  
  currentGroup.dataset.status = "after_right";
  currentButton.dataset.status = "button_inactive"
  currentBg.dataset.status="bg_inactive";
  
  nextGroup.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    nextButton.dataset.status = "button_active"
    nextBg.dataset.status="bg_active";
    activeIndex = nextIndex;
    console.log("swiperight: " + activeIndex);
  },10);
  
  
}

function updateSlides(slide_index) {
  let index_diff = slide_index - activeIndex;
  const nextIndex = slide_index;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
            nextGroup = document.querySelector(`[data-index="${nextIndex}"]`),
            currentButton = document.querySelector(`[data-index="b${activeIndex}"]`),
            nextButton = document.querySelector(`[data-index="b${nextIndex}"]`),
            currentBg = document.querySelector(`[data-index="bg${activeIndex}"]`),
            nextBg = document.querySelector(`[data-index="bg${nextIndex}"]`);
  console.log(index_diff);
  switch (index_diff){
    case -1:
      swipeRight();
      break;
    case 1:
      swipeLeft();
      break;
    case -3:
    swipeLeft();
      break;
    case 3:
      swipeRight();
      break;
    case -2:
      currentGroup.dataset.status = "after_right";
      currentButton.dataset.status = "button_inactive";
      currentBg.dataset.status="bg_inactive";
      nextGroup.dataset.status = "becoming-active-from-after";

      setTimeout(() => {
        nextGroup.dataset.status = "active";
        nextButton.dataset.status = "button_active";
        nextBg.dataset.status="bg_active";
        activeIndex = nextIndex;
        console.log("swiperight: " + activeIndex);
      },10);
      break;
    case 2:
      currentGroup.dataset.status = "after_left";
      currentButton.dataset.status = "button_inactive";
      currentBg.dataset.status="bg_inactive";
      nextGroup.dataset.status = "becoming-active-from-before";
      setTimeout(() => {
        nextGroup.dataset.status = "active";
        nextButton.dataset.status = "button_active"
        nextBg.dataset.status="bg_active";
        activeIndex = nextIndex;
        console.log("swipeleft: " + activeIndex);
      },10);
      break;
    }
}

function moveRight(){
  console.log("Right");
}

setInterval(swipeLeft, 5000);
