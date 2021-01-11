import Publisher from './helpers/publisher.js';
import ControllerRecord from './components/record/controller-record.js';
import ControllerSortSearch from './components/sort-search/controller-sort-search.js';
import ControllerDetails from './components/details/controller-details.js';
import ControllerCart from './components/cart/controller-cart.js';
import ControllerOrder from './components/order/controller-order.js';
import ControllerOrderHistory from './components/order-history/controller-order-history.js';
import ControllerLocalStorage from './components/local-storage/controller-local-storage.js';

const publisher = new Publisher();
const record = new ControllerRecord(publisher.methods);
const localStorage = new ControllerLocalStorage(publisher.methods);
const sortSearch = new ControllerSortSearch(publisher.methods);
const details = new ControllerDetails(publisher.methods);
const cart = new ControllerCart(publisher.methods);
const order = new ControllerOrder(publisher.methods);

const orderHistory = new ControllerOrderHistory(publisher.methods);
