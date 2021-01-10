import ModelOrder from './model-order.js';
import ViewOrder from './view-order.js';

export default class ControllerOrder {
  constructor({ subscribe, events, notify }) {
    this.view = new ViewOrder(this.onRender);
    this.model = new ModelOrder();

    // subscribe(events.LOADED_DATA, this.onLoad);
    // subscribe(events.ADD_TO_CART, this.addToCart);

    // this.notify = notify;
    // this.events = events;
  }
}
