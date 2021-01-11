export default class ViewOrder {
  constructor(cbMakeOrder) {
    this.makeOrderBtn = document.querySelector('.btn-make-order');
    this.modalContainer = document.querySelector('#modalCart .modal-content');

    this.makeOrderBtn.addEventListener('click', cbMakeOrder);
  }

  showModal = (cbClose, cbSubmit) => {
    this.modalContainer.innerHTML = `
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Make an order</h5>
      <button type="button" class="btn-close"></button>
    </div>
    <div class="modal-body">
      <div class="cart-content">
      <h6 class="mb-3 text-success">To order, please fill in the form below!</h6>
      <form>
      <div class="mb-3">
          <label for="user-name" class="form-label">Name <span class="text-danger">*</span></label>
          <input type="text" class="form-control" id="user-name" data-value="Name">
          <small class="error-mes"></small>
        </div>
        <div class="mb-3">
          <label for="user-phone" class="form-label">Phone number <span class="text-danger">*</span></label>
          <input type="tel" class="form-control" id="user-phone" aria-describedby="phoneHelp" data-value="Phone number">
          <small class="error-mes"></small>
          <div id="phoneHelp" class="form-text">Format: +380-11-11-11-111</div>
        </div>
        <div class="mb-3">
          <label for="user-email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="user-email" data-value="Email address">
          <small class="error-mes"></small>
        </div>
      </form>
      </div>
    </div>
    <div class="modal-footer">
      <button type="submit" class="btn btn-success btn-submit-order">Submit</button>
    </div>
    `;

    this.closeBtn = this.modalContainer.querySelector('.btn-close');
    this.closeBtn.addEventListener('click', cbClose);
    this.submitBtn = this.modalContainer.querySelector('.btn-submit-order');
    this.submitBtn.addEventListener('click', cbSubmit);
  }

  getUserData = () => {
    this.name = this.modalContainer.querySelector('#user-name');
    this.phone = this.modalContainer.querySelector('#user-phone');
    this.email = this.modalContainer.querySelector('#user-email');

    const isEmptyName = this.checkEmptyFields(this.name);
    const isEmptyPhone = this.checkEmptyFields(this.phone);

    if (!isEmptyName && !isEmptyPhone) {
      return {
        name: this.name.value.trim(),
        phone: this.phone.value.trim(),
        email: this.email.value.trim(),
      };
    }
  }

  checkEmptyFields = (input) => {
    let result = false;

    if (input.value.trim() === '') {
      this.renderError(input, `${input.dataset.value} is required`);
      result = true;
    }

    return result;
  }

  onError = (objErr) => {
    Object.keys(objErr).forEach((el) => {
      switch (el) {
        case 'name':
          this.renderError(this.name, objErr[el]);
          break;
        case 'phone':
          this.renderError(this.phone, objErr[el]);
          break;
        default:
          this.renderError(this.email, objErr[el]);
      }
    });
  }

  renderError = (input, errMes) => {
    if (errMes === true) {
      input.classList.add('success');
    } else {
      input.classList.add('error');
      const errContainer = input.parentNode.querySelector('.error-mes');
      errContainer.classList.add('active');
      errContainer.innerHTML = errMes;
    }
  }

  renderSuccess = (orderInfo) => {
    this.modalContainer.innerHTML = `
      <div class="modal-body">
        <div class="cart-content text-center">
          <p>Thank you for your order! </p>
          <p>Order ID = <span class="text-success">${orderInfo.id}</span></p>
          <p>We'll send you info about your order in Telegram.</p>
        </div>
      </div>
    `;
  }
}
