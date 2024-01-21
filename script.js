let likesCounter = localStorage.getItem('likesCounter') || 0;
let dislikesCounter = localStorage.getItem('dislikesCounter') || 0;

const likeText = document.getElementById('likes-counter');
const dislikeText = document.getElementById('dislikes-counter');

const likeButton = document.getElementById('like');
const dislikeButton = document.getElementById('dislike');

likeText.innerText = likesCounter;
dislikeText.innerText = dislikesCounter;

function addLike() {
  likesCounter++;
  likeText.innerText = likesCounter;
  localStorage.setItem('likesCounter', likesCounter);
}

function addDislike() {
  dislikesCounter++;
  dislikeText.innerText = dislikesCounter;
  localStorage.setItem('dislikesCounter', dislikesCounter);
}

likeButton.addEventListener("click", addLike);
dislikeButton.addEventListener("click", addDislike);
