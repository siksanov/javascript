function strMin(...strings) {
    let s = strings[0]
    for (let str of strings)
        if (str.length < s.length)
            s = str;
    return s
}

console.log(strMin('Lady Gaga', 'Владимир Путин', 'Россгвардия', 'Китай'))


function strMax(...strings) {
    let s = strings[0]
    for (let str of strings)
        if (str.length > s.length)
            s = str;
    return s
}

console.log(strMax('Lady Gaga', 'Владимир Путин', 'Россгвардия', 'Китай'))