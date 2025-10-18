function getTag(strings, content) {
    return `<${strings[0]}>${content}</${strings[0]}>`;
}

const newTitle = 'Новинка:';

const menu = document.getElementById('menu');

let s = '', t;

for (let el of data) {
    let isNew = el.title.startsWith(newTitle);
    if (isNew)
        t = el.title.replace(newTitle, '').trimStart();
    else
        t = el.title;
    s += `<article${isNew ? ' class="new"' : ''}>` +
         getTag`h2${t}` +
         `<img src="${el.image}">` +
         getTag`p${el.desc}` +
         getTag`div${el.price}` +
         '</article>';
}

menu.innerHTML = s;
