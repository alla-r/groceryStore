import ModelBot from './model-bot.js';
import Publisher from '../../helpers/publisher.js';

export default class ControllerBot {
  constructor() {
    this.publisher = new Publisher();
    const { subscribe, events } = this.publisher.methods;

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
