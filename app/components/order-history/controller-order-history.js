import ModelOrderHistory from './model-order-history.js';
import ViewOrderHistory from './view-order-history.js';

export default class ControllerOrderHistory {
  constructor({ subscribe, events, notify }) {
    this.model = new ModelOrderHistory();
    this.view = new ViewOrderHistory();

    // subscribe(events.SHOW_CART, this.onShowCart);

    // this.notify = notify;
    // this.events = events;

    this.onLoad();
  }

  onLoad = () => {
    this.model.getAllOrders();
  }
}