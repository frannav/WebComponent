class CalendarDay extends HTMLElement {

    constructor() {
        super();
        const day = this.getAttribute('day') || 1;
        const numDay = this.getAttribute('numDay');
        this.innerHTML = `
        <div class = "day">
        dia ${day}
        </div>
        `
    }

}

customElements.define('day-calendar', CalendarDay);