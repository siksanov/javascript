class Spoiler3 extends Spoiler2 {
    constructor(element, { toggleHandler, ...others }={}) {
        super(element, others);
        if (toggleHandler)
            this.toggleHandler = toggleHandler;
    }

    [Symbol.toPrimitive](hint) {
        if (hint == 'string')
            return `Спойлер "${this.header.textContent}" ` +
                   `(${this.state ? 'развернут' : 'свернут'})`;
        else
            return Number(this.state);
    }
}
