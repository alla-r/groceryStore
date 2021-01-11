import ModelLocalStorage from './model-local-storage.js';

export default class ControllerLocalStorage {
  constructor({ notify, events, subscribe }) {
    this.model = new ModelLocalStorage();

    // subscribe(events.LOADED_DATA, this.onLoad);
    subscribe(events.CHANGE_IN_CART, this.onChange);
    subscribe(events.NEW_ORDER, this.onNewOrder);

    this.notify = notify;
    this.subscribe = subscribe;
    this.events = events;

    this.init();
  }

  init = () => {
    const allOrders = this.model.getHistory();
    const prodInCart = this.model.getProdInCart();

    this.notify(this.events.GET_DATA_FROM_LS, {
      prodInCart: [...prodInCart],
      allOrders: [...allOrders],
      tokenId: this.model.getBotToken(),
      chatId: this.model.getBotChatId(),
    });
  }

  onNewOrder = (newOrder) => {
    this.model.clearCart();
    this.model.setNewOrder(newOrder);
  }

  onChange = (products) => {
    this.model.newProdInCart(products);
  }

  // onLoad = () => {
  //   const allOrders = this.model.getHistory();
  //   const prodInCart = this.model.getProdInCart();

  //   this.notify(this.events.GET_DATA_FROM_LS, {
  //     prodInCart: [...prodInCart],
  //     allOrders: [...allOrders],
  //     tokenId: this.model.getBotToken(),
  //     chatId: this.model.getBotChatId(),
  //   });
  // }
}
