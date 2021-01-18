import ModelLocalStorage from './model-local-storage.js';
import Publisher from '../../helpers/publisher.js';

export default class ControllerLocalStorage {
  constructor() {
    this.publisher = new Publisher();
    const { subscribe, notify, events } = this.publisher.methods;

    this.model = new ModelLocalStorage();

    subscribe(events.CHANGE_IN_CART, this.onChange);
    subscribe(events.NEW_ORDER, this.onNewOrder);

    this.notify = notify;
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
}
