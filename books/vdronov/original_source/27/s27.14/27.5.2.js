const draw = document.getElementById('draw');
const ctx = draw.getContext('2d');

ctx.font = '20px sans-serif';
let iwidth = 0, maxRating = languages[0][1];
for (let l of languages) {
    const a = ctx.measureText(l[0]).width;
    if (iwidth < a)
        iwidth = a;
}

draw.width = iwidth * languages.length + 5 * (languages.length - 1) + 30;

ctx.font = '20px sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'bottom';

const iheight = draw.height - 25;

for (let i = 0; i < languages.length; ++i) {
    const a = iheight * languages[i][1] / 20;
    const xi = i * (iwidth + 5) + 30;
    const yi = draw.height - a;
    const grd = ctx.createLinearGradient(xi, yi, xi, draw.height);
    grd.addColorStop(0, 'black');
    grd.addColorStop(1, 'lightgrey');
    ctx.fillStyle = grd;
    ctx.fillRect(xi, yi, iwidth, a);
    ctx.fillStyle = 'black';
    ctx.fillText(languages[i][0], xi + iwidth / 2, yi, iwidth);
}

ctx.beginPath();
ctx.moveTo(25, draw.height);
ctx.lineTo(25, 0);
ctx.stroke();
ctx.font = '12px sans-serif';
ctx.textAlign = 'end';
for (let i = 0; i <= 20; i += 2) {
    a = draw.height - (iheight * i / 20);
    ctx.moveTo(0, a);
    ctx.lineTo(25, a);
    ctx.stroke();
    ctx.fillText(i, 23, a, 25);
}
