export default class ViewRecord {
  htmlCards = document.getElementById('product-list');

  constructor(onDetails, onCart) {
    this.onDetails = onDetails;
    this.onCart = onCart;
  }

  render = (arrRec) => {
    const cards = arrRec.map(this.renderCard).join('');

    this.htmlCards.innerHTML = `<div class="row">${cards}</div>`;

    [...this.htmlCards.querySelectorAll('.card .btn-details')].forEach((btn) => btn.addEventListener('click', this.onDetails));

    [...this.htmlCards.querySelectorAll('.card .btn-add-to-cart')].forEach((btn) => btn.addEventListener('click', this.onCart));
  }

  renderCard = (card) => `
    <div class="col-lg-4 col-md-12 mb-4">
      <div class="card h-100">
        <div class="bg-image hover-overlay h-100">
          <img
            src="${card.image}"
            class="img-fluid"
            alt="${card.pName} photo"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">${card.pName}</h5>
          <h5 class="card-category">${card.category}</h5>
          <p class="mb-1 card-ubits">${card.units[0]} ${card.units[1]}</p>
          <h6 class="price">$${card.price}</h6>
          <div>
            <button type="button" class="btn btn-details btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalDetails" data-details-id="${card.id}">Details</button>
            <button type="button" class="btn btn-add-to-cart btn-success" data-cart-id="${card.id}">Add to cart</button>
          </div>        
        </div>
      </div>
    </div>
    `;
}
