const fragments = ['sushi_chukka.html', 'sushi_maguro.html',
                   'sushi_tobiko.html', 'sashimi_unagi.html',
                   'sashimi_hamachi.html'];

const menu = document.getElementById('menu');

(async () => {
    for (let f of fragments) {
        const r = await window.fetch(`/28.3/${f}`);
        if (r.ok)
            menu.insertAdjacentHTML('beforeend', await r.text());
    }
})();
