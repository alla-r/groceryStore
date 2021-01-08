import Publisher from './helpers/publisher.js';
import ControllerRecord from './components/record/controller-record.js';

const publisher = new Publisher();
const record = new ControllerRecord(publisher);
