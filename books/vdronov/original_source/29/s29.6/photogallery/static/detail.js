const form = document.forms[0];
form.addEventListener('submit', evt => {
    if (!window.confirm('Удалить изображение?'))
        evt.preventDefault();
});
