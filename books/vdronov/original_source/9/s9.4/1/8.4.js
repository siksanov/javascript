function createSpoiler(element, state=false, decoration='') {
    let spoilerState = false;

    function onHeaderClick() {
        spoilerState = !spoilerState;
        if (spoilerState)
            this.parentElement.classList.add('opened');
        else
            this.parentElement.classList.remove('opened');
    }

    const header = element.querySelector('h6');
    element.classList.add('spoiler');
    spoilerState = state;
    if (spoilerState)
        element.classList.add('opened');
    if (decoration)
        element.classList.add(decoration);
    header.addEventListener('click', onHeaderClick);
}

function createSpoilers(...elements) {
    elements = elements.map(el => {
        if (typeof el == 'string')
            return document.getElementById(el);
        else
            return el;
    });
    elements.forEach(el => { createSpoiler(el); });
}
