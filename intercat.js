const items = document.querySelectorAll('.item');

items.forEach(item => {
  const countElement = item.querySelector('.count');
  const incrementButton = item.querySelector('.increment');
  const decrementButton = item.querySelector('.decrement');
  const removeButton = item.querySelector('.remove');
  const likeButton = item.querySelector('.like');

  let count = parseInt(countElement.textContent);

  incrementButton.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
    updateTotal();
  });

  decrementButton.addEventListener('click', () => {
    if (count > 1) {
      count--;
      countElement.textContent = count;
      updateTotal();
    }
  });

  removeButton.addEventListener('click', () => {
    item.remove();
    updateTotal();
  });

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
  });
});

function updateTotal() {
  const prices = Array.from(document.querySelectorAll('.item'))
    .map(item => parseInt(item.querySelector('.count').textContent));

  const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);
  document.getElementById('total-price').textContent = totalPrice;
}
