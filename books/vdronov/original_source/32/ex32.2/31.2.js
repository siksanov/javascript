export default class Component {
    baseElement
    settings

    constructor(settings={}) {
        const { baseElement=document.body, ...others } = settings;
        this.baseElement = baseElement;
        this.settings = others;

        this.createContent();
    }

    createContent() {}
}
