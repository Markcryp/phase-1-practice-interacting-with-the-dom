document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('counter');
    let count = 0;
    let likes = {};
    let isPaused = false;
  
    const incrementCounter = () => {
      if (!isPaused) {
        count++;
        counter.textContent = count;
      }
    }
  
    let timer = setInterval(incrementCounter, 1000);
  
    document.getElementById('plus').addEventListener('click', () => {
      if (!isPaused) {
        count++;
        counter.textContent = count;
      }
    });
  
    document.getElementById('minus').addEventListener('click', () => {
      if (!isPaused) {
        count--;
        counter.textContent = count;
      }
    });
  
    document.getElementById('heart').addEventListener('click', () => {
      if (!isPaused) {
        if (!likes[count]) {
          likes[count] = 1;
        } else {
          likes[count]++;
        }
        const likesList = document.querySelector('.likes');
        const existingLikeItem = document.querySelector(`[data-count='${count}']`);
        if (existingLikeItem) {
          existingLikeItem.textContent = `${count} has been liked ${likes[count]} times`;
        } else {
          const likeItem = document.createElement('li');
          likeItem.setAttribute('data-count', count);
          likeItem.textContent = `${count} has been liked ${likes[count]} times`;
          likesList.appendChild(likeItem);
        }
      }
    });
  
    const pauseButton = document.getElementById('pause');
    pauseButton.addEventListener('click', () => {
      if (!isPaused) {
        isPaused = true;
        pauseButton.textContent = 'resume';
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('heart').disabled = true;
      } else {
        isPaused = false;
        pauseButton.textContent = 'pause';
        document.getElementById('plus').disabled = false;
        document.getElementById('minus').disabled = false;
        document.getElementById('heart').disabled = false;
      }
    });
  
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('list');
  
    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const comment = commentInput.value;
      if (comment.trim() !== "") {
        const commentItem = document.createElement('li');
        commentItem.textContent = comment;
        commentsList.appendChild(commentItem);
        commentInput.value = '';
      }
    });
  });
  