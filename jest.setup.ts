import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';
global.ResizeObserver = class {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};