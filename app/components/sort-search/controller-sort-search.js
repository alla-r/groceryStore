import ModelSortSearch from './model-sort-search.js';
import ViewSortSearch from './view-sort-search.js';

export default class ControllerSortSearch {
  constructor({ subscribe, events, notify }) {
    this.view = new ViewSortSearch(this.onSort, this.onSearch, this.onFilter);
    this.model = new ModelSortSearch();

    subscribe(events.LOADED_DATA, this.onLoad);

    this.notify = notify;
    this.events = events;

    // this.init();
  }

  // init = () => {
  //   this.view.render();
  // }

  onLoad = (data) => {
    this.model.records = data.records;
    this.view.categories = data.categories;
    this.view.render(() => this.view.getCateg());
  }

  onSort = (e) => {
    const records = this.model.sort(e.target.dataset.type);

    this.notify(this.events.AFTER_SORT, records);
  }

  onSearch = (e) => {
    const records = this.model.search(e.target.value);
    this.notify(this.events.AFTER_SEARCH, records);
  }

  onFilter = (e) => {
    // console.log(e);
    const records = this.model.filter(e.target.dataset.type);

    // this.view.render(records);
    this.notify(this.events.AFTER_FILTER, records);
  }
}
