const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('comment-list');

commentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const rating = document.querySelector('input[name="rate"]:checked');
  const ratingValue = rating ? rating.id.split('-')[1] : '';
  const commentText = document.querySelector('.textarea textarea').value.trim();

  if (ratingValue && commentText) {
    const newComment = document.createElement('li');
    newComment.innerHTML = `
      <strong>Rating: ${ratingValue}</strong><br>
      ${commentText}
    `;
    commentList.appendChild(newComment);

    // Reset form
    rating.checked = false;
    document.querySelector('.textarea textarea').value = '';
    document.querySelector('form header').textContent = 'Thank you for your comment!'; // Inform user

  } else {
    alert('Please select a rating and enter your comment.');
  }
});
