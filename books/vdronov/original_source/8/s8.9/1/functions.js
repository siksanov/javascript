function getMinLengthString(...strings) {
    let r = strings[0];
    for (let i = 1; i < strings.length; i++) {
        let s = strings[i];
        if (r.length > s.length)
            r = s;
    }
    return r;
}

console.log(getMinLengthString('abc', 'strings', 'j', 'JavaScript'));

function getMaxLengthString(...strings) {
    let r = strings[0];
    for (let i = 1; i < strings.length; i++) {
        let s = strings[i];
        if (r.length < s.length)
            r = s;
    }
    return r;
}

console.log(getMaxLengthString('abc', 'strings', 'j', 'JavaScript'));
