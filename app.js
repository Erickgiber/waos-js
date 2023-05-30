import { PointState, clickEvent } from './waos.js';

// Create a new point state "counter" with value 0
const counter = new PointState('counter', 0);

// This is a Event Listener "click"
clickEvent('change-counter', () => counter.set((prev) => prev + 1));
