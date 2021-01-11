import ModelBot from './model-bot.js';

export default class ControllerBot {
  constructor({ subscribe, events }) {
    this.model = new ModelBot();

    subscribe(events.NEW_ORDER, this.onSend);
    subscribe(events.GET_DATA_FROM_LS, this.getTokenId);
  }

  getTokenId = ({ tokenId, chatId }) => {
    this.model.token = tokenId;
    this.model.chatId = chatId;
  }

  onSend = (order) => {
    const mes = this.model.getMes(order);

    this.model.send(mes);
  }
}
