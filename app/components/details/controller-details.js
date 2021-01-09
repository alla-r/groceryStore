import ViewDetails from './view-details.js';

export default class ControllerDetails {
  constructor({ subscribe, events }) {
    this.view = new ViewDetails();

    subscribe(events.SHOW_DETAILS, this.onDetails);
  }

  onDetails = (data) => {
    this.view.render(data);
  }
}
