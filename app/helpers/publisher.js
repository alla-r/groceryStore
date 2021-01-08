export default class Publisher {
  listeners = {};

  subscribe = (eventType, listener) => {
    this.getListeners(eventType).push(listener);
  }

  unsubscribe = (eventType, listener) => {
    // do
  }

  notify = (eventType, data) => {
    this.getListeners(eventType).forEach((listener) => listener(data));
  }

  getListeners = (eventType) => {
    if (!this.listeners[eventType]) {
      this.listeners[eventType] = [];
    }

    return this.listeners[eventType];
  }
}
