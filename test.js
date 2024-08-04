// test.js
const fs = require('fs');
const cheerio = require('cheerio');

test('Verifica el título de la página', () => {
    const html = fs.readFileSync('index.html', 'utf8');
    const $ = cheerio.load(html);
    const title = $('title').text();
    expect(title).toBe('Hola Mundo');
});
