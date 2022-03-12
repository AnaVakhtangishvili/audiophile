import '/dist/css/main.css';

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const responsiveMenu = document.querySelector('.responsive-menu-container');
const modal = document.querySelector('.modal');
const cartIcon = document.getElementById('cart-icon');
const modalCart = document.getElementById('modal-cart');
const goBack = document.getElementById('go-back');
const tabFocuse = document.querySelectorAll('a, .btn-add, #cart-icon');
const submitBtn = document.getElementById('submit-btn');

const changingContent = document.getElementById('changing-content-container');

const eMoney = document.getElementById('e-money');
const cash = document.getElementById('cash');


tabFocuse.forEach((e) => {
  e.setAttribute('tabindex', '0');
})


menuBtn.addEventListener('click', toggleMenu);
cartIcon.addEventListener('click', showCart);
cartIcon.addEventListener('keypress', showCart);
modal.addEventListener('click', removeClass);
goBack.addEventListener('click', () => {
  history.back();
});
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
})
cash.addEventListener('click', () => {
  changingContent.innerHTML = `<div class="cash-instruction">
  <img src="images/form.svg" alt="svg">
  <p>The "Cash on Delivery" option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
</div>`
})

eMoney.addEventListener('click', () => {
  changingContent.innerHTML = `<div class="input-and-label">
  <label for="e-money-number">e-money number</label>
  <input type="number" id="e-money-number" name="e-money-number" placeholder="write e-money number">
</div>
<div class="input-and-label">
  <label for="e-money-pin">e-money pin</label>
  <input type="number" id="e-money-pin" name="e-money-pin" placeholder="write e-money pin">
</div>`
})


function toggleMenu() {
  hamburger.classList.toggle('open');
  responsiveMenu.classList.toggle('open');
}

function showCart() {
  modal.classList.toggle('open');
} 

function removeClass (e) {
  if (e.target != modalCart && e.target != cartIcon && e.target.closest('#modal-cart') != modalCart) {
    modal.classList.remove('open');
  }
}