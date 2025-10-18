class Slider {
    #images
    #buttons
    #activeImageIndex = 0

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

    constructor(element) {
        element.classList.add('slider');
        this.#images = element.querySelectorAll('main img');
        this.#buttons = element.querySelectorAll('nav > *');
        for (let el of this.#buttons)
            el.addEventListener('click', this.#buttonClick);
        document.body.addEventListener('keydown',
                                       this.#bodyKeyDown);
    }
}
