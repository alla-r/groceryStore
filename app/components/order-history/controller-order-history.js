import ModelOrderHistory from './model-order-history.js';
import ViewOrderHistory from './view-order-history.js';
import Publisher from '../../helpers/publisher.js';

export default class ControllerOrderHistory {
  constructor() {
    this.publisher = new Publisher();
    const { subscribe, events } = this.publisher.methods;

    this.model = new ModelOrderHistory();
    this.view = new ViewOrderHistory();

    subscribe(events.GET_DATA_FROM_LS, this.onLoad);
    subscribe(events.NEW_ORDER, this.addNewOrder);
  }

  onLoad = ({ allOrders }) => {
    this.model.allOrders = allOrders;
    if (allOrders.length > 0) {
      this.view.render(allOrders);
    }
  }

  addNewOrder = (order) => {
    this.model.allOrders.push(order);
    this.view.render(this.model.allOrders);
  }
}
