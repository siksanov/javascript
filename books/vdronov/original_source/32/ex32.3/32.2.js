import Component from './31.2.js';
import { baseURL } from './31.3.1.js';

export default class Detail extends Component {
    async createContent() {
        this.baseElement.innerHTML = '';

        const url = `${baseURL}${this.settings.id}`;

        const r = await window.fetch(url);
        const data = await r.json();

        let s =  '<h1>Фотогалерея</h1>' +
                 `<h2>${data.title}</h2>` +
                 '<section class="photo">' +
                 `  <img src="${data.href}">` +
                 '</section>';
        if (data.desc)
            s += `<div>${data.desc}</div>`;
        s +=     `<form class="inline">` +
                 '  <input type="submit" value="Удалить">' +
                 '</form>';
        this.baseElement.innerHTML = s;

        const deleteForm = this.baseElement.querySelector('form');
        deleteForm.addEventListener('submit', async evt => {
            evt.preventDefault();
            const r = await window.fetch(url, { method: 'delete' });
            if (r.ok)
                location.hash = '';
        });
    }
}
