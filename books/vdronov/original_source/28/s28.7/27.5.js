const draw = document.getElementById('draw');
const ctx = draw.getContext('2d');

(async () => {
    const r = await window.fetch('27.5.json');
    if (r.ok) {
        const languages = await r.json();
        
        ctx.font = '20px sans-serif';
        let iwidth = 0, maxRating = languages[0][1];
        for (let l of languages) {
            const a = ctx.measureText(l[0]).width;
            if (iwidth < a)
                iwidth = a;
        }

        draw.width = iwidth * languages.length + 5 * (languages.length - 1);

        ctx.font = '20px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        const iheight = draw.height - 25;

        for (let i = 0; i < languages.length; ++i) {
            const a = iheight * languages[i][1] / 20;
            const xi = i * (iwidth + 5);
            const yi = draw.height - a;
            ctx.fillRect(xi, yi, iwidth, a);
            ctx.fillText(languages[i][0], xi + iwidth / 2, yi, iwidth);
        }
    }
})();
