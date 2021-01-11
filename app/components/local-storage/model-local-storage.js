export default class ModelLocalStorage {
  recordsInCart = [];

  historyOfOrders = [];

  token = '';

  chatId = '';

  getProdInCart = () => {
    if (!localStorage.getItem('productInCart')) {
      localStorage.setItem('productInCart', JSON.stringify(this.recordsInCart));
    } else {
      this.recordsInCart = JSON.parse(localStorage.getItem('productInCart'));
    }

    return this.recordsInCart;
  }

  getHistory = () => {
    if (!localStorage.getItem('allOrders')) {
      localStorage.setItem('allOrders', JSON.stringify(this.historyOfOrders));
    } else {
      this.historyOfOrders = JSON.parse(localStorage.getItem('allOrders'));
    }

    return this.historyOfOrders;
  }

  getBotChatId = () => {
    if (!localStorage.getItem('chat_id')) {
      localStorage.setItem('chat_id', this.chatId);
    } else {
      this.chatId = localStorage.getItem('chat_id');
    }

    return this.chatId;
  }

  getBotToken = () => {
    if (!localStorage.getItem('bot')) {
      localStorage.setItem('bot', this.token);
    } else {
      this.token = localStorage.getItem('bot');
    }

    return this.token;
  }

  setNewOrder = (newOrder) => {
    this.historyOfOrders.push(newOrder);
    localStorage.setItem('allOrders', JSON.stringify(this.historyOfOrders));
  }

  newProdInCart = (data) => {
    localStorage.setItem('productInCart', JSON.stringify(data));
  }

  clearCart = () => {
    localStorage.removeItem('productInCart');
  }
}
