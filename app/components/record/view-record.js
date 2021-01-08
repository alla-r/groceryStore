export default class ViewRecord {
  htmlCards = document.getElementById('product-list');

  render = (arrRec) => {
    const cards = arrRec.map(this.renderCard).join('');

    this.htmlCards.innerHTML = `<div class="row">${cards}</div>`;
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
            <a href="#!" class="btn btn-details btn-outline-success">Details</a>
            <a href="#!" class="btn btn-add-to-cart btn-success">Add to cart</a>
          </div>        
        </div>
      </div>
    </div>
    `;
}
