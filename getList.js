const scrapeIt = require("scrape-it");

var q = 'papa%2Czapallo%2Clentejas';

const conf = {
    recipes: {
        listItem: 'li.ranked-list__item',
        data: {
            title: 'h2.recipe-title',
            url: {
              selector:'a.media',
              attr: 'href'
            },   
            img: {
              selector:'.img-responsive img',
              attr: 'src'
            },
            ingredients: {
                selector: 'div.wide-card__body',
                convert: x => x.split(',')
            }
        }
    }
};

function callback(err, page) {
    //para cada objeto dentro de recetas, console log
    page.recipes.forEach((each) => {
        console.log(each);
    });
}

// Callback interface
scrapeIt(`https://cookpad.com/ar/buscar/${q}`, conf, callback);