import Component from './31.2.js';

export default class Item extends Component {
    createContent() {
        const data = this.settings.data;

        const s = '<article>' +
                  `  <a href="#${data.id}">` +
                  `    <h2>${data.title}</h2>` +
                  `    <img src="${data.href}">` +
                  '  </a>' +
                  '</article>';

        this.baseElement.insertAdjacentHTML('beforeend', s);
    }
}
