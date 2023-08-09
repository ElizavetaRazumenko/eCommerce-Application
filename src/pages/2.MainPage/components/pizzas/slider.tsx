// import React, { useEffect } from 'react';

//function slider
const ClickRight = (): void => {
  console.log('WORK');
  const slider = document.querySelector('.pizza_collection') as HTMLElement;
  console.log(slider);

  //  let offset = 0;
  const clickRight = document.querySelector('.arrow_right');
  const clickLeft = document.querySelector('.arrow_left');
  //   clickRight?.addEventListener('click', () => {
  if (slider) {
    console.log('SLIDER');
    slider.style.left = '-1000px';
  }
  //   });
};
export default ClickRight;
