import ModelCart from './model-cart.js';
import ViewCart from './view-cart.js';

export default class ControllerCart {
  constructor({ subscribe, events, notify }) {
    this.view = new ViewCart(this.onRender);
    this.model = new ModelCart();

    subscribe(events.LOADED_DATA, this.onLoad);
    subscribe(events.ADD_TO_CART, this.addToCart);
    subscribe(events.CLOSE_MODAL_ORDER, this.onRender);
    subscribe(events.GET_DATA_FROM_LS, this.onLS);
    subscribe(events.NEW_ORDER, this.clearCart);

    this.notify = notify;
    this.events = events;
  }

  onLS = ({ prodInCart }) => {
    this.model.recordsInCart = prodInCart;
    const num = this.model.addToRecId();

    this.view.changeBadge(num);
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

    this.notify(this.events.SHOW_CART, {
      data: infoRender.data,
      total: infoRender.total,
    });
  }

  addToCart = (recordId) => {
    const num = this.model.addToCart(recordId);

    this.view.changeBadge(num);
    this.notify(this.events.CHANGE_IN_CART, this.model.getRecords());
  }

  onUp = (e) => {
    this.model.amountUp(e.target.dataset.cartId);
    this.notify(this.events.CHANGE_IN_CART, this.model.getRecords());

    this.onRender();
  }

  onDown = (e) => {
    this.model.amountDown(e.target.dataset.cartId);
    this.notify(this.events.CHANGE_IN_CART, this.model.getRecords());

    this.onRender();
  }

  onRemove = (e) => {
    const num = this.model.removeItem(e.target.dataset.cartId);
    this.view.changeBadge(num);
    this.notify(this.events.CHANGE_IN_CART, this.model.getRecords());

    this.onRender();
  }

  clearCart = () => {
    this.model.clearCart();
    this.view.changeBadge(0);
  }
}
