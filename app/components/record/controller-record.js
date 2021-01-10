import ModelRecord from './model-record.js';
import ViewRecord from './view-record.js';

export default class ControllerRecord {
  constructor({ notify, subscribe, events }) {
    this.model = new ModelRecord();
    this.view = new ViewRecord(this.onDetails, this.addToCart);

    this.init();

    this.events = events;
    this.notify = notify;

    subscribe(events.AFTER_SEARCH, this.onSortSearch);
    subscribe(events.AFTER_SORT, this.onSortSearch);
    subscribe(events.AFTER_FILTER, this.onSortSearch);
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
    // console.log(record);
    this.notify(this.events.SHOW_DETAILS, record);
  }

  addToCart = (e) => {
    // console.log(e.target.dataset.cartId);
    // const records = this.model.getRecordsInCart(e.target.dataset.detailsId);
    // console.log(records);
    this.notify(this.events.ADD_TO_CART, e.target.dataset.cartId);
  }
}
