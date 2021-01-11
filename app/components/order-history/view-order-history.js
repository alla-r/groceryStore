export default class ViewOrderHistory {
  modalContainer = document.querySelector('.modals');

  constructor() {
    this.modalContainer.insertAdjacentHTML('beforeend', `
      <div class="modal fade" id="modalHistory" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-cart-container">
          <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              History of orders
            </h5>
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
          </div>
        </div>
      </div>
    `);

    this.cardContent = this.modalContainer.querySelector('#modalHistory .cart-content');
  }

  render = (data) => {
    const items = data.sort((a, b) => a.date - b.date)
      .map((order) => this.renderItem(order))
      .join('');

    this.cardContent.innerHTML = `
      <div class="list-group">
        ${items}
      </div>
    `;
  }

  renderItem = (order) => {
    const prodItems = order.prodInfo.map((product) => this.renderTableItem(product)).join('');
    const prodTable = `
    <thead>
      <tr>
        <th scope="col">Product Name</th>
        <th scope="col">Price</th>
        <th scope="col">Amount</th>
      </tr>
    </thead>
    <tbody>${prodItems}</tbody>
    `;
    return `
      <div class="list-group-item my-4">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 fw-bold text-success mb-3">Order id ${order.id}</h5>
          <small>${new Date(order.date).toLocaleDateString()}</small>
        </div>
        <p class="mb-1 fw-bold d-inline">Buyer: <p class="d-inline"> ${order.userInfo.name} (phone number: ${order.userInfo.phone})<p></p>
        <p class="mb-1 fw-bold d-inline">Total cost: <p class="d-inline"> ${order.totalAmount}<p></p>
        <table class="table">${prodTable}</table>
      </div>
    `;
  }

  renderTableItem = (prod) => `
    <tr>
      <td>${prod.pName}</td>
      <td>${prod.price}</td>
      <td>${prod.amount}</td>
    </tr>
  `;
}
