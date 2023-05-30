export class PointState {
    id = "";
    value = "";
    root = document.getElementById("waos");
    changeTagValue = (value) => this.root.querySelector(this.id).innerHTML = value;

    constructor(id, initial) {
        this.id = `[state=${id}]`;
        this.value = initial;
        this.root.querySelector(this.id).innerHTML = this.value;
    }

    set(newValue) {
        if (typeof newValue !== "function") {
            this.value = newValue;
            this.changeTagValue(this.value)
            return;
        }
        (() => {
            const value = newValue(this.value);
            this.set(value);
        })();
    }

    get() {
        return this.value;
    }
}

export function clickEvent(id, handleChange) {
    const root = document.getElementById("waos");
    root.querySelector(`[on-click=${id}]`)
        .addEventListener("click", handleChange);
}