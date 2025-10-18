class ElementIsAbsentError extends Error {
    constructor(message='Заданный элемент отсутствует на странице') {
        super(message);
    }
}

class Spoiler{
    static spoilerClass = 'spoiler'
    static openedClass = 'opened'
    #spoilerState = false
    #element
    header

    #onHeaderClick = () => {
        this.state = !this.state;
    }

    constructor(element, { state=false, decoration='' }={}) {
        if (!element)
            throw new ElementIsAbsentError;
        this.#element = element;
        this.header = element.querySelector('h6');
        element.classList.add(this.constructor.spoilerClass);
        if (state)
            this.open();
        if (decoration)
            element.classList.add(decoration);
        this.header.addEventListener('click', this.#onHeaderClick);
    }

    get state() { return this.#spoilerState; }
    set state(val) {
        if (val)
            this.open();
        else
            this.close();
    }

    open() {
        if (!this.#spoilerState) {
            this.#spoilerState = true;
            this.#element.classList.add(this.constructor.openedClass);
        }
    }

    close() {
        if (this.#spoilerState) {
            this.#spoilerState = false;
            this.#element.classList.
                          remove(this.constructor.openedClass);
        }
    }

    static create(...elements) {
        elements.forEach(el => { new this(el); });
    }
}
