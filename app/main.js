import Publisher from './helpers/publisher.js';
import ControllerRecord from './components/record/controller-record.js';
import ControllerSortSearch from './components/sort-search/controller-sort-search.js';

const publisher = new Publisher();
const record = new ControllerRecord(publisher.methods);
const sortSearch = new ControllerSortSearch(publisher.methods);
