/**
 * Created by Dima on 18.05.2017.
 */
import { combineReducers } from 'redux'
import navbarReducer from './navbarReducer.js'
import sliderReducer from './sliderReducer.js'
import serviceReducer from './serviceReducer.js'
import portfolioReducer from './portfolioReducer.js'
import feedbackReducer from './feedbackReducer.js'
import statisticReducer from './statisticReducer.js'
import breakingNewsReducer from './breakingNewsReducer.js'
import aboutCompanyReducer from './aboutCompanyReducer.js'


const main= combineReducers({
    navbarReducer,
    sliderReducer,
    serviceReducer,
    portfolioReducer,
    feedbackReducer,
    statisticReducer,
    breakingNewsReducer,
    aboutCompanyReducer
})
export default main;