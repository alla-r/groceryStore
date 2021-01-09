import ModelCart from './model-cart.js';
import ViewCart from './view-cart.js';

export default class ControllerCart {
  constructor({ subscribe, events }) {
    this.view = new ViewCart();
    this.model = new ModelCart();
   
    subscribe(events.SHOW_CART, this.onCart);
    // subscribe(events.ADD_TO_CART, this.onAdd);
    // subscribe(events.REMOVE_FROM_CART, this.onRemove);
  }

  onCart = (data) => {
    this.model.render(data);
  }
}
