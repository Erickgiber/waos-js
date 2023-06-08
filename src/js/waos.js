/**
 * Clase que representa el estado de un punto.
 */
export class PointState {
  /**
        * El ID del estado.
        * @type {string}
    */
  id = '';

  /**
        * El valor del estado.
        * @type {string}
    */
  value = '';

  /**
        * El elemento raíz del estado.
        * @type {HTMLElement}
    */
  root = document.getElementById('waos');

  /*
      * Función que cambia el valor del estado en el DOM.
      * @type {Function}
  */
  changeTagValue = (value) => {
    this.root.querySelector(this.id).innerHTML = value;
  };

  /**
       * Construye una instancia de PointState.
       * @param {string} id - El ID del estado.
       * @param {string} initial - El valor inicial del estado.
    */
  constructor(id, initial = '') {
    this.id = `[state=${id}]`;
    this.value = initial;
    this.root = document.getElementById('waos');
    this.root.querySelector(this.id).innerHTML = this.value;
  }

  /**
       * Establece un nuevo valor para el estado.
       * @param {string|Function} newValue -
    */
  set(newValue) {
    if (typeof newValue !== 'function') {
      this.value = newValue;
      this.changeTagValue(this.value);
      return;
    }
    (() => {
      const value = newValue(this.value);
      this.set(value);
    })();
  }

  /**
       * Obtiene el valor actual del estado.
       * @return {string} El valor actual del estado.
    */
  get() {
    return this.value;
  }
}

/**
   * Agrega un evento de click a un elemento.
   * El ID del elemento al que se agregará el evento de click.
   * @param {string} id
   * La función que se ejecutará cuando se haga click en el elemento.
   * @param {Function} handleChange
*/
export function clickEvent(id, handleChange) {
  const root = document.getElementById('waos');
  root.querySelector(`[on-click=${id}]`)
    .addEventListener('click', handleChange);
}

/**
   * Agrega un evento de input a un elemento.
   * El ID del elemento al que se agregará el evento de input.
   * @param {string} id
   * La función que se ejecutará cuando se haga escribas en el elemento.
   * @param {Function} handleChange
*/
export function inputEvent(id, handleChange) {
  const root = document.getElementById('waos');
  root.querySelector(`[on-input=${id}]`)
    .addEventListener('input', handleChange);
}
