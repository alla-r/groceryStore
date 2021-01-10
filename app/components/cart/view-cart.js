export default class ViewCart {
  htmlModals = document.querySelector('.modals');

  constructor(cbRender) {
    this.htmlModals.insertAdjacentHTML('beforeend', `
    <div class="modal fade" id="modalCart" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-cart-container">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Cart</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="cart-content">
              <p class="cart-empty">Cart is empty</p>
              
            </div>
            <div class="cart-footer">
                <h3>Your Total: $ <span class="cart-total">10</span> </h3>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalMakeOrder">Buy now</button>
          </div>
        </div>
      </div>
    </div>
    `);

    this.cartContent = document.querySelector('.cart-content');
    this.cartEmpty = document.querySelector('.cart-empty');
    this.total = document.querySelector('.cart-total');
    this.cartBtn = document.querySelector('.cart-btn');
    this.badge = document.querySelector('.badge-notification');

    this.cartBtn.addEventListener('click', cbRender);
  }

  render = ({
    data, cbUp, cbDown, cbRemove, total,
  }) => {
    if (data.length > 0) {
      const cartCont = data.map(this.renderCartItem).join('');
      this.cartContent.innerHTML = cartCont;
      this.total.innerHTML = total;

      [...this.cartContent.querySelectorAll('.fa-chevron-up')].forEach((btn) => btn.addEventListener('click', cbUp));
      [...this.cartContent.querySelectorAll('.fa-chevron-down')].forEach((btn) => btn.addEventListener('click', cbDown));
      [...this.cartContent.querySelectorAll('.remove-item')].forEach((btn) => btn.addEventListener('click', cbRemove));
    }
  }

  renderCartItem = (item) => `
    <div class="cart-item">
      <div>
        <img src="${item.image}" alt="${item.pName} photo" class="img-fluid">
      </div>
      <div>
        <h4>${item.pName}</h4>
        <h5>$${item.price * item.amountInCart}</h5>
        <span class="remove-item" data-cart-id="${item.id}">remove</span>
      </div>
      <div class="p-3">
        <i class="fas fa-chevron-up" data-cart-id="${item.id}"></i>
        <p class="item-amount">${item.amountInCart}</p>
        <i class="fas fa-chevron-down" data-cart-id="${item.id}"></i>
      </div>
    </div>
    `;

  changeBadge = (num) => {
    this.badge.innerHTML = num;
  }
}
