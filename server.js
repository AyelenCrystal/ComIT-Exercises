const express = require("express");
const path = require("path");
const fs = require("fs");
const exphbs = require("express-handlebars");

const app = express();

app.use(express.static(path.join(__dirname, `public`)));

app.engine(`handlebars`, exphbs({
    defaultLayout: `main`,
    layoutsDir: path.join(__dirname, `views/layout`)
}));
app.set(`view engine`, `handlebars`);
app.set(`views`, path.join(__dirname, `views`));

app.get("/", (req, res) => {
    res.render("home", {
        title: "Countries - Search"
    });
});

app.get("/country", (res, req) => {
    fs.readFile(path.join(__dirname, "countries.json"), (err, data) => {
        if (!err) {
            let countries = JSON.parse(data);

            if (req.query.name) {
                countries = countries.filter(countries => countries.name == req.query.name);
            }
            if (req.query.code) {
                countries = countries.filter(countries => countries.code == req.query.code);
            }

            res.render(`country`, {
                title: "Country - Cards",
                listCountries: countries
            });
        };
    });
});

app.listen(8379, () => {
    console.log("Running in LocalHost 8379. Happy Birthday, Crystal");
});