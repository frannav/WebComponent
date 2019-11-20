class CalendarDay extends HTMLElement {

    constructor() {
        super();
        const day = this.getAttribute('day') || 1;
        const numDay = this.getAttribute('numDay') || 1;
        this.innerHTML = `
        <div class = "day">
        dia ${numDay} ${day}
        </div>
        `
    }

}

customElements.define('day-calendar', CalendarDay);