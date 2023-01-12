const shareButton = document.querySelectorAll('.buttshare');
const overlay = document.querySelector('.overlay');
const shareModal = document.querySelector('.share');

const title = window.document.title;
const url = window.document.location.href;

for (let i = 0; i < shareButton.length; i++) {
shareButton[i].addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: `CINEMA`,
      url: `${url}`
    }).then (() => {
      console.log('test');
    })
    .catch(console.eror);
  } else {
    overlay.classList.add('show-share');
    shareModal.classList.add('show-share');
  }
})
}

overlay.addEventListener('click', () => {
  overlay.classList.remove('show-share');
  overlay.classList.remove('show-share');
})