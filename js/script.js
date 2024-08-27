document.addEventListener('DOMContentLoaded', () => {
    const updateTotalPrice = () => {
      const quantities = document.querySelectorAll('.quantity');
      const totalPriceElement = document.querySelector('.total');
      let total = 0;
      quantities.forEach((quantityElement) => {
        const quantity = parseInt(quantityElement.textContent, 10);
        const unitPrice = parseInt(quantityElement.parentElement.previousElementSibling.textContent, 10);
        total += quantity * unitPrice;
      });
      totalPriceElement.textContent = `${total} $`;
    };
  
    document.querySelectorAll('.quantity-increase').forEach(button => {
      button.addEventListener('click', () => {
        const quantityElement = button.nextElementSibling;
        const quantity = parseInt(quantityElement.textContent, 10);
        quantityElement.textContent = quantity + 1;
        updateTotalPrice();
      });
    });
  
    document.querySelectorAll('.quantity-decrease').forEach(button => {
      button.addEventListener('click', () => {
        const quantityElement = button.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent, 10);
        if (quantity > 0) {
          quantityElement.textContent = quantity - 1;
          updateTotalPrice();
        }
      });
    });
  
    document.querySelectorAll('.delete-item').forEach(button => {
      button.addEventListener('click', () => {
        button.closest('.card').remove();
        updateTotalPrice();
      });
    });
  
    document.querySelectorAll('.like-item').forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('liked');
        button.style.color = button.classList.contains('liked') ? 'red' : 'black';
      });
    });
  });
  
  