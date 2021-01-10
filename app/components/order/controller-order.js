import ModelOrder from './model-order.js';
import ViewOrder from './view-order.js';

export default class ControllerOrder {
  constructor({ subscribe, events, notify }) {
    this.model = new ModelOrder();

    subscribe(events.SHOW_CART, this.onShowCart);

    this.notify = notify;
    this.events = events;
  }

  onShowCart = (data, total) => {
    this.view = new ViewOrder(this.onShowOrder);

    this.model.productInCart = data;
    this.model.total = total;
  }

  onShowOrder = () => {
    this.view.showModal(this.onCloseOrder, this.onSubmit);
  }

  onCloseOrder = () => {
    const userData = 1;
    this.notify(this.events.CLOSE_MODAL_ORDER, userData);
  }

  onSubmit = () => {
    const userData = this.view.getUserData();
    if (userData) {
      const result = this.model.validate(userData);
      // console.log(typeof result);
      if (typeof result === 'string') {
        this.view.renderSuccess(result);
      } else {
        this.view.onError(result);
      }
    }
  }
}
