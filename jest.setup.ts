import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';
global.ResizeObserver = class {
  private callback: ResizeObserverCallback;


  constructor(callback: any) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};