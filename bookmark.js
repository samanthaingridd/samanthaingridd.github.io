const bookmarkButton = document.createElement('img');
bookmarkButton.src = 'ICONS/bookmarkoutline.svg'; 
bookmarkButton.alt = 'Bookmark Button';
bookmarkButton.id = 'bookmarkButton';

const bookmarkContainer = document.querySelector('.bookmark');
bookmarkContainer.prepend(bookmarkButton);

let isBookmarked = false; 

bookmarkButton.addEventListener('click', () => {
    isBookmarked = !isBookmarked; 
    bookmarkButton.src = isBookmarked ? 'ICONS/bookmark.svg' : 'ICONS/bookmarkoutline.svg'; 
});