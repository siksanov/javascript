class Spoiler2 extends Spoiler {
    toggleHandler

    constructor(...params) {
        super(...params);
    }

    get state() { return super.state; }
    set state(val) {
        const oldState = this.state;
        super.state = val;
        if ((this.state != oldState) && (this.toggleHandler))
            this.toggleHandler(this);
    }

    toggle() {
        this.state = !this.state;
    }

    static create(...elements) {
        let r;
        elements = elements.map(el => {
            if (typeof el == 'string') {
                r = document.getElementById(el);
                if (r)
                    return r;
                else
                    throw new ElementIsAbsentError(`Элемент ${el} отсутствует на странице`);
            } else
                return el;
        });
        super.create(...elements);
    }
}
