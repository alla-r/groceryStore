export default class ModelOrder {
  productInCart = [];

  total = 0;

  currentOrder = {}

  validate = ({ name, phone, email }) => {
    const result = {};

    if (email) {
      result.email = this.checkData(email, 'Email');
    } else {
      result.email = true;
    }
    result.phone = this.checkData(phone, 'Phone');
    result.name = this.checkData(name, 'Name');

    if (!(Object.values(result).find((el) => typeof el !== 'boolean'))) {
      return this.getOrder(name, phone, email);
    }

    return result;
  }

  checkData = (data, type) => {
    const typeRegex = {
      Email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      Phone: /^\+\d{3}-\d{2}-\d{2}-\d{2}-\d{3}$/,
      Name: /^[a-zA-Z ]{2,30}$/g,
    };

    let result = `${type} is not valid`;

    if (typeRegex[type].test(data)) {
      result = true;
    }

    return result;
  }

  getOrderId = () => Number(`${Date.now().toString().slice(3)}${Math.random().toString().slice(2, 5)}`).toString(16);

  getOrder = (name, phone, email) => {
    const orderInfo = {
      id: this.getOrderId(),
      date: Date.now(),
      userInfo: {
        name,
        phone,
        email,
      },
      prodInfo: [],
      totalAmount: this.total,
    };

    orderInfo.prodInfo = this.productInCart.map((product) => ({
      pName: product.pName,
      amount: product.amountInCart,
      pId: product.id,
      price: product.price,
      image: product.image,
    }));

    return orderInfo;
  }
}
