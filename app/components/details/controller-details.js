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
    // console.log(e.target);
    // console.log(e.target.dataset.cartId);
    this.notify(this.events.ADD_TO_CART, e.target.dataset.cartId);
  }
}
