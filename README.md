# Library for states on Vanilla Js

1. Import Waos Js functions components on your project

    ```javascript
    import { PointState, clickEvent } from './waos.js';

2. Write your code HTML inside of waos id.
    ```html
    <main id="waos">
        <!-- Your code -->
    </main>

3. Insert a state into your HTML document
    ```html
    <main id="waos">
        <strong state="counter">
            <!-- "counter" is the state name! -->
        </strong>
    </main>
    
4. Insert a click event into your HTML for change state
    ```html
    <button on-click="change-counter">
        Change state +1
    </button>

5. On your Javascript file use the functions exported from Waos Js
    ```javascript
    // Create a new point state
    const counter = new PointState("counter", 0);
    /*
     *  PointState is the state
     *  "counter" is the state name
     *  "0" is state value
     */
    
6. You may change the state with "set" property from "counter" constant.
    ```javascript
    // This increment state value + 1
    counter.set(prev => prev + 1)

7. Create a handlerEvent for your click event.
    ```javascript
    // Example of HandlerEvent for counter click event
    const handleCounter = () => counter.set(prev => prev + 1);

8. With ClickEvent from Waos Js you may change state value "counter".
    ```javascript
    /*
    *  change-counter is the state attribute insterted in your *  HTML document
    *  Step 4
    */
    clickEvent('change-counter', handleCounter)

9. You also may change the state directly from clickEvent
    ```javascript
    /* 
    *  Example of ClickEvent
    *  for counter click event
    */
    clickEvent('change-counter', () => {
        counter.set(prev => prev + 1)
    })
## Example:
<img src="https://i.ibb.co/KW1VLgM/Waos-Js.png" alt="Waos-Js">

### Go to website
<a target="_blank" href="https://waos-js.vercel.app/">
    State with Waos Js
</a>
