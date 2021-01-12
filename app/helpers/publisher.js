import events from './events.js';

export default class Publisher {
  listeners = {};

  constructor() {
    if (typeof Publisher.instance === 'object') {
      return Publisher.instance;
    }

    Publisher.instance = this;

    return this;
  }

  subscribe = (eventType, listener) => {
    this.getListeners(eventType).push(listener);
  }

  unsubscribe = (eventType, listener) => {
    const listeners = this.getListeners(eventType);
    this.listeners[eventType] = listeners.filter((func) => func !== listener);
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

  get methods() {
    return {
      notify: this.notify,
      unsubscribe: this.unsubscribe,
      subscribe: this.subscribe,
      events,
    };
  }
}
