import Component from './31.2.js';
import { baseURL } from './31.3.1.js';

export default class Index extends Component {
    async createContent() {
        this.baseElement.innerHTML = '';

        let url;
        if (this.search) {
            const params = new URLSearchParams({search: this.search});
            url = `${baseURL}?${params}`;
        } else
            url = baseURL;

        const r = await window.fetch(url);
        const data = await r.json();

        let s =  '<h1>Фотогалерея</h1>' +
                 '<form class="inline">' +
                 '  <input type="search" name="search" ' +
                          `value="${this.search ?? ''}">` +
                 '  <input type="submit" value="Найти">' +
                 '</form>' +
                 '<p><a href="#">Добавить изображение</a></p>' +
                 '<main class="photos">';
        for (let item of data)
            s += '  <article>' +
                 `    <a href="#">` +
                 `       <h2>${item.title}</h2>` +
                 `       <img src="${item.href}">` +
                 '    </a>' +
                 '  </article>';
        s +=     '</main>';

        this.baseElement.innerHTML = s;

        const searchForm = this.baseElement.querySelector('form');
        searchForm.addEventListener('submit', evt => {
            evt.preventDefault();
            const searchField = evt.target.elements[0];
            this.search = searchField.value.trim();
            this.createContent();
        });
    }
}
