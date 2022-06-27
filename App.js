const list = document.querySelector('.ul-list');
const barBtn = document.querySelector('#bar-btn');
const closeBtn = document.querySelector('.Xmark-btn');

barBtn.addEventListener('click', () => {
  list.classList.add('.show-bar');
});
closeBtn.addEventListener('click', () => {
  list.classList.remove('.show-bar');
});
