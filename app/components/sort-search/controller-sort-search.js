import ModelSortSearch from './model-sort-search.js';
import ViewSortSearch from './view-sort-search.js';

export default class ControllerSortSearch {
  constructor({ subscribe, events, notify }) {
    this.view = new ViewSortSearch(this.onSort, this.onSearch);
    this.model = new ModelSortSearch();

    subscribe(events.LOADED_DATA, this.onLoad);

    this.notify = notify;
    this.events = events;
  }

  onLoad = (data) => {
    this.model.records = data.records;
    this.model.categories = data.categories;
    data.categories.forEach((el) => {
      this.model.activeCateg[el] = false;
    });
    this.view.renderCategList(this.model.categories, this.onFilter);
  }

  onSort = (e) => {
    const sortedData = this.model.sort(e.target.dataset.type);

    this.notify(this.events.AFTER_SORT, sortedData);
  }

  onSearch = (e) => {
    const filteredData = this.model.search(e.target.value);
    this.notify(this.events.AFTER_SEARCH, filteredData);
  }

  onFilter = (e) => {
    console.log(e.target.dataset.type);
    const filteredData = this.model.filter(e.target.dataset.type);

    this.notify(this.events.AFTER_FILTER, filteredData);
  }
}
