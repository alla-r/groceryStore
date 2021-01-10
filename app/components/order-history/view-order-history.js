export default class ViewOrderHistory {
  modalContainer = document.querySelector('#modalCart .modal-content');

  constructor() {
    this.modalContainer.innerHTML = `
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">History of orders</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="cart-content">
          <p class="cart-empty">History of orders is empty.</p>
        </div>
        <div class="cart-footer">
            <h3> </h3>
        </div>
      </div>
      `;
  }

  // renderOrderItem = (item) => `
  //   <div class="cart-item">
  //     <div>
  //       <img src="${item.image}" alt="${item.pName} photo" class="img-fluid">
  //     </div>
  //     <div>
  //       <h4>${item.pName}</h4>
  //       <h5>$${item.price * item.amountInCart}</h5>
  //       <span class="remove-item" data-cart-id="${item.id}">remove</span>
  //     </div>
  //     <div class="p-3">
  //       <i class="fas fa-chevron-up" data-cart-id="${item.id}"></i>
  //       <p class="item-amount">${item.amountInCart}</p>
  //       <i class="fas fa-chevron-down" data-cart-id="${item.id}"></i>
  //     </div>
  //   </div>
  //   `;
}
