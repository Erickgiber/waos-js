import { PointState, clickEvent } from './waos.js';

const counter = new PointState("counter", 0);

const handleCounter = () => counter.set(prev => prev + 1);

clickEvent('change-counter', handleCounter)
