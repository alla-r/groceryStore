export default class ViewDetails {
  htmlModals = document.querySelector('.modals');

  constructor(cbAddToCart) {
    this.htmlModals.insertAdjacentHTML('beforeend', `
    <div class="modal fade" id="modalDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-success">
              <h5 class="modal-title text-white" id="exampleModalLabel">Product details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-success btn-add-to-cart">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    `);

    this.htmlDetailsContent = document.querySelector('#modalDetails .modal-body');
    this.htmlAddToCartBtn = document.querySelector('#modalDetails .btn-add-to-cart');

    this.htmlAddToCartBtn.addEventListener('click', cbAddToCart);
  }

  render = ({
    category, id, image, ingridients, manufacture, pName, price, units,
  }) => {
    this.htmlDetailsContent.innerHTML = `
    <div class="h-auto">
      <img alt="product photo" class="modal-img img-fluid" src="${image}">
    </div>
    <p class="modal-info"><span class="name-modal">Product ID:</span> ${id}</p>
    <p class="modal-info"><span class="name-modal">Product Name:</span> ${pName}</p>
    <p class="modal-info"><span class="name-modal">Manufacture:</span> ${manufacture}</p>
    <p class="modal-info"><span class="name-modal">Category:</span> ${category}</p>
    <p class="modal-info"><span class="name-modal">Ingridients:</span> ${ingridients.toLowerCase()}</p>
    <p class="modal-info"><span class="name-modal">Unit:</span> ${units[0]} ${units[1]}</p>
    <p class="modal-info"><span class="name-modal">Price:</span> ${price} $</p>
    `;

    this.htmlAddToCartBtn.dataset.cartId = id;
  }
}
