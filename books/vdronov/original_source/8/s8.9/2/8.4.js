function createSpoiler(element, state=false, decoration='') {
    let spoilerState = false;

    const header = element.querySelector('h6');
    element.classList.add('spoiler');
    spoilerState = state;
    if (spoilerState)
        element.classList.add('opened');
    if (decoration)
        element.classList.add(decoration);
    header.addEventListener('click', () => {
        spoilerState = !spoilerState;
        if (spoilerState)
            element.classList.add('opened');
        else
            element.classList.remove('opened');
    });
}
