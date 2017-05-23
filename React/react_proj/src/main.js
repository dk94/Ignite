import React from 'react';
import ReactDOM from 'react-dom';
require("./styles/Navbar.css");
require("./styles/Slider.css");
require("./styles/Feedback.css");
require("./styles/KeepInTouch.css");
require("./styles/Statistic.css");
require("./styles/Team.css");
require("./styles/Portfolio.css");
require("./styles/Services.css");
require("./styles/BreakingNews.css");
require("./styles/AboutCompany.css");

// Provider


import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware } from 'redux';
import {initBN} from './actions/breakingNewsAct.js'

import main from './reducers/store.js'

import App from './components/app.js';
import {App2} from './components/app.js';


const store = createStore(main,applyMiddleware(thunkMiddleware));
store.dispatch(initBN());

// Для совместного использования React и Redux следует подуючить спецальный компонент react-redux Provider.
// Это сделает экземпляр хранилища доступным для всех компонентов, которые располагаются в компоненте Provider.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('part')
)


