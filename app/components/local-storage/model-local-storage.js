export default class ModelLocalStorage {
  recordsInCart = [];

  historyOfOrders = [];

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
