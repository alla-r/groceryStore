export default class ModelOrder {
  productInCart = [];

  total = 0;

  validate = ({ name, phone, email }) => {
    // console.log(name, phone, email);
    const result = {};

    if (email) {
      result.email = this.checkData(email, 'Email');
    } else {
      result.email = true;
    }
    result.phone = this.checkData(phone, 'Phone');
    result.name = this.checkData(name, 'Name');

    if (!(Object.values(result).find((el) => typeof el !== 'boolean'))) {
      return this.getOrderId();
    }

    return result;
  }

  checkData = (data, type) => {
    const typeRegex = {
      Email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      Phone: /^\+\d{3}-\d{2}-\d{2}-\d{2}-\d{3}$/,
      Name: /^[A-Za-z ]+$/,
    };

    let result = `${type} is not valid`;

    if (typeRegex[type].test(data)) {
      result = true;
    }

    return result;
  }

  getOrderId = () => Number(`${Date.now().toString().slice(3)}${Math.random().toString().slice(2, 5)}`).toString(16);
}