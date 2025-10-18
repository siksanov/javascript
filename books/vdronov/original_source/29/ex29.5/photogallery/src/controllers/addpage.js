export default function addPage(req, res) {
    const s = '<!doctype html>' +
              '<html>' +
              '  <head>' +
              '    <meta charset="UTF-8">' +
              '        <meta name="viewport" ' +
                            'content="width=device-width, ' +
                                     'initial-scale=1.0">' +
              '    <link href="/styles.css" rel="stylesheet">' +
              '    <title>Добавление :: Фотогалерея</title>' +
              '  </head>' +
              '  <body>' +
              '    <h1>Фотогалерея</h1>' +
              '    <h2>Добавление изображения</h2>' +
              '    <form action="/" method="post" ' +
                        'enctype="multipart/form-data">' +
              '      <p>Название: <input name="title" required></p>' +
              '      <p>Описание:<br><textarea name="desc">' +
                                    '</textarea></p>' +
              '      <p>Изображение: <input type="file" ' +
                                       'name="photo" accept=".jpg" ' +
                                       'required></p>' +
              '      <p><input type="submit" value="Добавить"></p>'
              '    </form>' +
              '  </body>' +
              '</html>';
    res.end(s);
}
