class Slider {
    #images
    #buttons
    #activeImageIndex = 0
    static #preview

    #getButtonIndex(button) {
        const btns = [...this.#buttons];
        return btns.indexOf(button);
    }

    #switch() {
        for (let i = 0; i < this.#images.length; i++)
            if (i == this.#activeImageIndex) {
                this.#images[i].classList.add('active');
                this.#buttons[i].classList.add('active');
            } else {
                this.#images[i].classList.remove('active');
                this.#buttons[i].classList.remove('active');
        }
    }

    #buttonClick = evt => {
        evt.preventDefault();
        this.#activeImageIndex = this.#getButtonIndex(evt.target);
        this.#switch();
    }

    #bodyKeyDown = evt => {
        const num = +evt.key;
        if (num && num > 0 && num <= this.#buttons.length)
            this.#activeImageIndex = num - 1;
        else if (evt.code == 'ArrowLeft' &&
                 this.#activeImageIndex > 0)
            this.#activeImageIndex--;
        else if (evt.code == 'ArrowRight' &&
                   this.#activeImageIndex < this.#buttons.length - 1)
            this.#activeImageIndex++;
        else
            return;
        this.#switch();
    }

    #buttonMouseOver = evt => {
        if (evt.target != evt.currentTarget) {
            const buttonNumber = evt.target.textContent;
            const imageIndex = +buttonNumber - 1;
            this.constructor.#preview.style.left = evt.pageX + 'px';
            this.constructor.#preview.style.top = evt.pageY + 'px';
            this.constructor.#preview.style.backgroundImage =
                          `url(${this.#images[imageIndex].src})`;
            this.constructor.#preview.classList.add('active');
        }
    }

    #buttonMouseOut = evt => {
        if (evt.target != evt.currentTarget)
            this.constructor.#preview.classList.remove('active');
    }

    constructor(element) {
        if (!this.constructor.#preview) {
            const preview = document.createElement('div');
            preview.id = 'preview';
            document.body.append(preview);
            this.constructor.#preview = preview;
        }
        element.classList.add('slider');
        this.#images = element.querySelectorAll('main img');
        this.#buttons = element.querySelectorAll('nav > *');
        for (let el of this.#buttons)
            el.addEventListener('click', this.#buttonClick);
        document.body.addEventListener('keydown',
                                       this.#bodyKeyDown);
        const nav = element.querySelector('nav');
        nav.addEventListener('mouseover', this.#buttonMouseOver,
                                          { capture: true });
        nav.addEventListener('mouseout', this.#buttonMouseOut,
                                          { capture: true });
    }
}
