import Component from './31.2.js';
import { baseURL } from './31.3.1.js';
import Item from './31.4.js';

export default class Index extends Component {
    async createContent() {
        this.baseElement.innerHTML = '';

        let url;
        if (this.search) {
            const params = new URLSearchParams({search: this.search});
            url = `${baseURL}?${params}`;
        } else
            url = baseURL;

        const r = await window.fetch(url, { mode: 'cors' });
        const data = await r.json();

        let s =  '<h1>Фотогалерея</h1>' +
                 '<form class="inline">' +
                 '  <input type="search" name="search" ' +
                          `value="${this.search ?? ''}">` +
                 '  <input type="submit" value="Найти">' +
                 '</form>' +
                 '<p><a href="#">Добавить изображение</a></p>' +
                 '<main class="photos"></main>';
        this.baseElement.innerHTML = s;

        const photos = this.baseElement.querySelector('main.photos');
            
        for (let item of data)
            new Item({ baseElement: photos, data: item });

        const searchForm = this.baseElement.querySelector('form');
        searchForm.addEventListener('submit', evt => {
            evt.preventDefault();
            const searchField = evt.target.elements[0];
            this.search = searchField.value.trim();
            this.createContent();
        });
    }
}
