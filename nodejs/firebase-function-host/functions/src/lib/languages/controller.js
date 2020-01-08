const languages = require("./languages.json");
const fs = require('fs');

function getAllLanguages(_req, res) {
    // console.log = function() {log_file.write(languages.json() + '\n');};
    // console.log(_req, res);
    return res.json({
        success: true,
        data: languages
    });
}

function getLanguage(req, res) {
    // console.log(typeof(languages));
    language_str = languages.toString();
    // console.log = function() {log_file.write(req.params.language + '\n');};
    // console.log(Object.keys(languages));

    languages_array = Object.keys(languages);

    const requiredLang = req.params.language;
    const lang         = languages_array.filter(lang => lang === requiredLang);
    const exists       = lang.length > 0;

    // console.log("req params: ", req.params.language, typeof(req.params.language), req.params.language.length, requiredLang);
    // console.log("language_str: ", languages_array);
    // console.log("lang: ", lang);
    // console.log("lang number: ", lang.length);

    return res
           .status(exists ? 200 : 404)
           .json({
               success: exists,
               data: exists ? lang[0] : `Language not found`
           })
}

module.exports = {
    getAllLanguages,
    getLanguage
}