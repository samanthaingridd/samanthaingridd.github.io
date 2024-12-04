const likeButton = document.createElement('img');
likeButton.src = 'ICON/strokeheart.svg'; 
likeButton.alt = 'Like Button';
likeButton.id = 'likeButton';

const likeContainer = document.querySelector('.like');
likeContainer.prepend(likeButton);

let isLiked = false; 

likeButton.addEventListener('click', () => {
    isLiked = !isLiked; 
    likeButton.src = isLiked ? 'ICON/heart.svg' : 'ICON/strokeheart.svg'; 
});
