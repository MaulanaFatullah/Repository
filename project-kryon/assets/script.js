const navButton = document.querySelector('.nav-btn');
const navMobile = document.querySelector('.nav-mobile');

const profileModal = document.querySelector('#modal-profile');
const openProfileModal = document.querySelector('.btn-profile-box');
const closeProfileModal = document.querySelector('.btn-close-profile');

// ---------------------------------------------------------------


let collectionPage = document.getElementById('collection-page');
let totalImg = 22;
// Article iteration

// Dialog iteration
for (let modalNumber = 1; modalNumber < totalImg; modalNumber++) {

   const article = document.createElement('article');
   article.id = 'snapshot-collection-' + modalNumber;
   article.classList.add('img-collection', 'btn-img-modal');
   const img = document.createElement('img');
   img.id = 'img-src';
   img.src = 'https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-800/pic-' + modalNumber + '.jpeg';
   img.srcset = 'https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-400/pic-' + modalNumber + '.jpeg 400w, https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-800/pic-' + modalNumber + '.jpeg 800w, https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-1200/pic-' + modalNumber + '.jpeg 1200w';
   img.loading = true;
   article.appendChild(img);
   document.getElementById('collection-page').appendChild(article);


   const dialog = document.createElement('dialog');
   dialog.id = 'img-modal-' + modalNumber;
   dialog.classList.add('img-modal');

   const imgModal = document.createElement('img');
   imgModal.id = 'img-modal-src-' + modalNumber;
   imgModal.src = 'https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-800/pic-' + modalNumber + '.jpeg';
   imgModal.srcset = 'https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-400/pic-' + modalNumber + '.jpeg 400w, https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-800/pic-' + modalNumber + '.jpeg 800w, https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-1200/pic-' + modalNumber + '.jpeg 1200w';

   const btnClose = document.createElement('div');
   btnClose.id = 'btn-close-img-' + modalNumber;
   btnClose.classList.add('btn-close-img');
   const spanClose = document.createElement('span');
   spanClose.appendChild(document.createTextNode('Close'));
   btnClose.appendChild(spanClose);

   dialog.appendChild(imgModal);
   dialog.appendChild(document.createElement('hr'));
   dialog.appendChild(btnClose);
   document.getElementById('collection-page').appendChild(dialog);



   const closeImageModal = document.getElementById('btn-close-img-' + modalNumber);
   const snapModal = document.getElementById('snapshot-collection-' + modalNumber);

   const imageModal = document.querySelector('#img-modal-' + modalNumber);
   snapModal.addEventListener('click', function () {
      imageModal.showModal();
   });

   closeImageModal.addEventListener('click', function () {
      imageModal.classList.add('hide-collection-modal');
      imageModal.addEventListener('webkitAnimationEnd', function () {
         imageModal.classList.remove('hide-collection-modal');
         imageModal.close();
         imageModal.removeEventListener('webkitAnimationEnd', arguments.callee, false);
      }, false);
   });
}

navButton.addEventListener('click', function () {
   navButton.classList.toggle('active');
   navMobile.classList.toggle('active');
});

openProfileModal.addEventListener('click', function () {
   profileModal.showModal();
});

closeProfileModal.addEventListener('click', function () {
   profileModal.classList.add('hide-profile-modal');
   profileModal.addEventListener('webkitAnimationEnd', function () {
      profileModal.classList.remove('hide-profile-modal');
      profileModal.close();
      profileModal.removeEventListener('webkitAnimationEnd', arguments.callee, false);
   }, false);
});

// Context menu restriction
document.onkeydown = function (e) {
   if (event.keyCode == 123) {
      return false;
   }
   if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
   }
   if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
   }
   if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
   }
   if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
   }
}
