export default class ViewCart {
  htmlModals = document.querySelector('.modals');

  constructor() {
    this.htmlModals.insertAdjacentHTML('beforeend', `
    <div class="modal fade" id="modalDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Product details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
    `);
  }

  render = (data) => {
    console.log('data in view-cart render()', data);
  }
}
