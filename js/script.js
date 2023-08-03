let loadMoreBtn = document.getElementById('load-more');
let currentItem = 3;

loadMoreBtn.onclick = () => {
   console.log('Button clicked'); // Debugging statement
   let boxes = [...document.querySelectorAll('.service_section .service_container .service_box')];
   for (var i = currentItem; i < currentItem + 3; i++) {
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3;
   if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = 'none';
   }
}
// faq heseg
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
   const itemToggle = this.getAttribute('aria-expanded');

   for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
   }

   if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
   }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));