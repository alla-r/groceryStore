import ViewDetails from './view-details.js';

export default class ControllerDetails {
  constructor({ subscribe, events, notify }) {
    this.view = new ViewDetails(this.addToCart);

    subscribe(events.SHOW_DETAILS, this.onDetails);
    this.events = events;
    this.notify = notify;
  }

  onDetails = (data) => {
    this.view.render(data);
  }

  addToCart = (e) => {
    this.notify(this.events.ADD_TO_CART, e.target.dataset.cartId);
  }
}
