const translations = require('./translations');


const translationsExample = (req, res) => {
    const lang = req.params.lang;
    const translation = translations[lang] || translations.en;

    res.status(200).send(translation);
};

module.exports = translationsExample;
