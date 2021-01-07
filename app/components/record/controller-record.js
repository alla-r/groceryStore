import ModelRecord from './model-record.js';
import ViewRecord from './view-record.js';

export default class ControllerRecord {
  constructor() {
    this.model = new ModelRecord();
    this.view = new ViewRecord();

    this.init();
  }

  init = () => {
    this.model.loadRecords()
      .then((d) => {
        this.view.render(d);
      });
  }
}
