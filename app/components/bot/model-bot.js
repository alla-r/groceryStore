export default class ModelBot {
  token = '';

  chatId = '';

  get url() {
    return `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&parse_mode=Markdown&text=`;
  }

  send = (msg) => {
    fetch(`${this.url}${msg}`);
  }

  getMes = ({
    id, date, userInfo, prodInfo, totalAmount,
  }) => {
    const prodList = prodInfo.map((prod) => this.renderProd(prod)).join('');

    const mes = encodeURI(`
  Hi, ${userInfo.name}\!
  There is info about your order: \n
    *Order id : ${id}*
    *Total cost :* $${totalAmount}
    *Time of order :* ${new Date(date).toLocaleDateString()} ${this.makeTwoDigit(new Date(date).getHours())}:${this.makeTwoDigit(new Date(date).getMinutes())} \n
    *Products :* \n ${prodList}
  
  Thanks for your order\!`.replace(/\./g, '/'));

    return mes;
  }

  renderProd = (prod) => `
        *Product ID :* ${prod.pId}
        *Product name :* ${prod.pName}
        *Amount :* ${prod.amount} \n
  `;

  makeTwoDigit = (el) => {
    if (el < 10) {
      el = `0${el}`;
    }

    return el;
  }
}
