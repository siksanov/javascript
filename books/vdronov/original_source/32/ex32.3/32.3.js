import Component from './31.2.js';
import { baseURL } from './31.3.1.js';

export default class Add extends Component {
    createContent() {
        this.baseElement.innerHTML = '';

        const s = '<h1>Фотогалерея</h1>' +
                  '<h2>Добавление изображения</h2>' +
                  '<form>' +
                  '  <p>Название: <input name="title" required></p>' +
                  '  <p>Описание:<br><textarea name="desc">' +
                                    '</textarea></p>' +
                  '  <p>Изображение: <input type="file" ' +
                                     'name="photo" accept=".jpg" ' +
                                     'required></p>' +
                  '  <p><input type="submit" value="Добавить"></p>' +
                  '</form>';
        this.baseElement.innerHTML = s;

        const addForm = this.baseElement.querySelector('form');
        addForm.addEventListener('submit', async evt => {
            evt.preventDefault();
            const fd = new FormData(addForm);
            const r = await window.fetch(baseURL,
                                   { method: 'post', body: fd });
            if (r.ok)
                location.hash = '';
        });
    }
}
