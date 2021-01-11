import ModelLocalStorage from './model-local-storage.js';
import ViewLocalStorage from './view-local-storage.js';

export default class ControllerLocalStorage {
  constructor({ notify, events, subscribe }) {
    this.view = new ViewLocalStorage();
    this.model = new ModelLocalStorage();

    subscribe(events.LOADED_DATA, this.onLoad);
    subscribe(events.CHANGE_IN_CART, this.onChange);
    subscribe(events.NEW_ORDER, this.onNewOrder);

    this.notify = notify;
    this.subscribe = subscribe;
    this.events = events;

    // this.init();
  }

  onLoad = () => {
    const allOrders = this.model.getHistory();
    const prodInCart = this.model.getProdInCart();

    this.notify(this.events.GET_DATA_FROM_LS, {
      prodInCart: [...prodInCart],
      allOrders: [...allOrders],
    });
  }

  onNewOrder = (newOrder) => {
    this.model.clearCart();
    this.model.setNewOrder(newOrder);
  }

  onChange = (newProdInCart) => {
    this.model.newProdInCart(newProdInCart);
    // console.log(newProdInCart);

    // const allOrders = this.model.getHistory();
    // const prodInCart = this.model.getProdInCart();

    // this.notify(this.events.GET_DATA_FROM_LS, {
    //   prodInCart: [...prodInCart],
    //   allOrders: [...allOrders],
    // });
  }

  // init = () => {
  //   const allOrders = this.model.getHistory();
  //   const prodInCart = this.model.getProdInCart();

  //   this.notify(this.events.GET_DATA_FROM_LS, {
  //     prodInCart: [...prodInCart],
  //     allOrders: [...allOrders],
  //   });
  // }
}
