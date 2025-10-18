import data from './6.5.1.js';

function getTag(strings, content) {
    return `<${strings[0]}>${content}</${strings[0]}>`;
}

const newTitle = 'Новинка:';

const menu = document.getElementById('menu');

const rexOnePrice = /(\d+) (₽|руб\.?|р\.?)/i;
const rexTwoPrices = /(\d+) (₽|руб\.?|р\.?) \((\d+) (₽|руб\.?|р\.?)\)/i;

let s = '', t;

for (let el of data) {
    let isNew = el.title.startsWith(newTitle);
    let result, price;
    if (isNew)
        t = el.title.replace(newTitle, '').trimStart();
    else
        t = el.title;
    if (result = rexTwoPrices.exec(el.price))
        price = `${result[1]} ₽ (<del>${result[3]} ₽</del>)`;
    else {
        result = rexOnePrice.exec(el.price);
        price = `${result[1]} ₽`;
    }
    s += `<article${isNew ? ' class="new"' : ''}>` +
         getTag`h2${t}` +
         `<img src="${el.image}">` +
         getTag`p${el.desc}` +
         getTag`div${price}` +
         '</article>';
}

menu.innerHTML = s;
