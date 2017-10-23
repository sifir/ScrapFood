const scrapeIt = require("scrape-it");

var q = '3282418-albondigas-de-lenteja-con-pure';

const conf = {
    recipes: {
        listItem: 'div#recipe_main',
        data: {
            title:'h1.recipe-show__title',
            img: {
                selector:'.tofu_image img',
                attr:'src'
            },
            ingredients: {
                listItem:'li.ingredient'
            },
            pasos: {
                listItem:'.step__text'
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
scrapeIt(`https://cookpad.com/ar/recetas/${q}`, conf, callback);
