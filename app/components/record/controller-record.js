import ModelRecord from './model-record.js';
import ViewRecord from './view-record.js';
import Publisher from '../../helpers/publisher.js';

export default class ControllerRecord {
  constructor() {
    this.publisher = new Publisher();
    const { subscribe, notify, events } = this.publisher.methods;

    this.model = new ModelRecord();
    this.view = new ViewRecord(this.onDetails, this.addToCart);

    this.init();

    subscribe(events.AFTER_FILTER, this.onSortSearch);
    subscribe(events.ON_PAGINATION, this.onSortSearch);

    this.events = events;
    this.notify = notify;
  }

  init = () => {
    this.model.loadRecords()
      .then((obj) => {
        this.view.render(obj.records);
        this.notify(this.events.LOADED_DATA, obj);
      });
  }

  onSortSearch = (data) => {
    this.view.render(data);
  }

  onDetails = (e) => {
    const record = this.model.getRecordById(e.target.dataset.detailsId);

    this.notify(this.events.SHOW_DETAILS, record);
  }

  addToCart = (e) => {
    this.notify(this.events.ADD_TO_CART, e.target.dataset.cartId);
  }
}
