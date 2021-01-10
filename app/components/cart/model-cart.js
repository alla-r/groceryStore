export default class ModelCart {
  records = [];

  recordsInCart = [];

  recordsId = {};

  addToCart = (id) => {
    if (!this.recordsId[id]) {
      this.recordsId[id] = 1;
    } else {
      this.recordsId[id] += 1;
    }

    return Object.keys(this.recordsId).length;
  }

  getRecords = () => {
    const listId = Object.keys(this.recordsId);
    this.recordsInCart = listId.map((id) => ({ ...this.records.find((el) => el.id === +id), amountInCart: this.recordsId[id] }));
    return this.recordsInCart;
  }

  amountUp = (id) => {
    this.recordsId[id] += 1;
  }

  amountDown = (id) => {
    if (this.recordsId[id] > 1) {
      this.recordsId[id] -= 1;
    }
  }

  getTotal = () => this.recordsInCart.reduce((acc, el) => {
    acc += el.amountInCart * el.price;
    return acc;
  }, 0);

  removeItem = (id) => {
    delete this.recordsId[id];
    return Object.keys(this.recordsId).length;
  }
}
