import ModelRecord from './model-record.js';
import ViewRecord from './view-record.js';

export default class ControllerRecord {
  constructor({ notify }) {
    this.model = new ModelRecord();
    this.view = new ViewRecord(this.onSort, this.onSearch);

    this.init();

    this.notify = notify;
  }

  init = () => {
    this.model.loadRecords()
      .then(({ records, categories }) => {
        // console.log(records, categories);
        this.view.render(records, categories);
        this.notify('LOADED_DATA', records);
      });
  }

  onSort = (e) => {
    const records = this.model.sort(e.target.dataset.type);

    this.view.render(records);
  }

  onSearch = (e) => {
    const records = this.model.search(e.target.value);
    this.view.render(records);
    // console.log(e.target.value);
  }

  // onFilter = (e) => {
  //   console.log(e);
  //   const records = this.model.filter(e.target.dataset.type);

  //   this.view.render(records);
  // }
}
