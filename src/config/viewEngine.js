import express from 'express';

const configViewEngine = (app) => {
    // to save path link
    app.use(express.static('./src/public'));
    // to config engine
    app.set('view engine', 'ejs')
    app.set('views','./src/views')
};

export default configViewEngine;