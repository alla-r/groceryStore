import ModelPagination from './model-pagination.js';
import ViewPagination from './view-pagination.js';

export default class ControllerPagination {
  constructor({ subscribe, events, notify }) {
    this.model = new ModelPagination();

    subscribe(events.LOADED_DATA, this.onLoad);
    subscribe(events.AFTER_FILTER, this.onFilter);

    this.notify = notify;
    this.events = events;
  }

  onLoad = ({ records }) => {
    // console.log('load', records);
    this.model.prodList = records;
    this.view = new ViewPagination(this.model.getNumOfPages(), this.onChangePage);

    this.notify(this.events.ON_PAGINATION, this.model.changePage(1));
  }

  onFilter = (data) => {
    // console.log('filter', data);
    this.model.prodList = data;
    this.view = new ViewPagination(this.model.getNumOfPages(), this.onChangePage);
    this.notify(this.events.ON_PAGINATION, this.model.changePage(1));
  }

  onChangePage = (e) => {
    // console.log(e.target.dataset.numPage);
    const prodOnPage = this.model.changePage(e.target.dataset.numPage);
    // console.log(prodOnPage);
    this.notify(this.events.ON_PAGINATION, prodOnPage);
  }
}
