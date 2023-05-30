import { PointState, clickEvent, inputEvent } from './waos.js';

// Create a new point state "counter" with value 0
const counter = new PointState('counter', 0);

// create a new Point State "textarea-mew" with value empty "".
const textarea = new PointState('textarea-view');

// This is a Event Listener "click"
clickEvent('change-counter', () => counter.set((prev) => prev + 1));

// This is a Event Listener "input"
inputEvent('textarea-input', (event) => {
    const value = event.target.value
    textarea.set(value);
});
