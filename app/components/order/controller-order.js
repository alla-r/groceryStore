import ModelOrder from './model-order.js';
import ViewOrder from './view-order.js';

export default class ControllerOrder {
  constructor({ subscribe, events, notify }) {
    this.model = new ModelOrder();

    subscribe(events.SHOW_CART, this.onShowCart);

    this.notify = notify;
    this.events = events;
  }

  onShowCart = ({ data, total }) => {
    this.view = new ViewOrder(this.onShowOrder);

    this.model.productInCart = data;
    this.model.total = total;
  }

  onShowOrder = () => {
    this.view.showModal(this.onCloseOrder, this.onSubmit);
  }

  onCloseOrder = () => {
    this.notify(this.events.CLOSE_MODAL_ORDER, {});
  }

  onSubmit = () => {
    const userData = this.view.getUserData();
    if (userData) {
      const result = this.model.validate(userData);

      if (result.id) {
        this.view.renderSuccess(result);

        this.notify(this.events.NEW_ORDER, result);
      } else {
        this.view.onError(result);
      }
    }
  }
}
