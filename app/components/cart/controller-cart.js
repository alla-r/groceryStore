import ModelCart from './model-cart.js';
import ViewCart from './view-cart.js';

export default class ControllerCart {
  constructor({ subscribe, events, notify }) {
    this.view = new ViewCart(this.onRender);
    this.model = new ModelCart();

    subscribe(events.LOADED_DATA, this.onLoad);
    subscribe(events.ADD_TO_CART, this.addToCart);

    this.notify = notify;
    this.events = events;
  }

  onLoad = (data) => {
    this.model.records = data.records;
  }

  onRender = () => {
    const infoRender = {
      data: this.model.getRecords(),
      cbUp: this.onUp,
      cbDown: this.onDown,
      cbRemove: this.onRemove,
      total: this.model.getTotal(),
    };
    this.view.render(infoRender);
  }

  addToCart = (recordId) => {
    const num = this.model.addToCart(recordId);

    this.view.changeBadge(num);
  }

  onUp = (e) => {
    this.model.amountUp(e.target.dataset.cartId);

    this.onRender();
  }

  onDown = (e) => {
    this.model.amountDown(e.target.dataset.cartId);

    this.onRender();
  }

  onRemove = (e) => {
    const num = this.model.removeItem(e.target.dataset.cartId);
    this.view.changeBadge(num);

    this.onRender();
  }
}
