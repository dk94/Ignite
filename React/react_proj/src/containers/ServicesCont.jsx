import { connect } from 'react-redux'
import { clickItem} from '../actions/servicesAct.js'
import Services from '../components/Services.js'
import{Router, Route,IndexRoute, hashHistory, Redirect} from 'react-router';
import WebDesign from '../components/servicesView/WebDesign.js'
import React from 'react';


const mapStateToProps = (state) => {
    return {
        data: state.serviceReducer.data,
        index: state.serviceReducer.index,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(clickItem(id))
        }


    }
}
const ServicesCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Services)
const ServiceWithRouter=()=>(
    <Router history={hashHistory}>
    <Route path='/' component={ServicesCont}>
        {/* путь по умолчанию (IndexRoute) */}

        <IndexRoute component={WebDesign} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac diam feugiat, blandit nisl sit amet, fringilla enim. Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus. Praesent facilisis tortor eu sapien sagittis eleifend. Curabitur vulputate, lorem in fringilla porta, odio odio posuere velit, condimentum consequat ligula sapien ut ex. Maecenas commodo ex sed odio ultrices porta" url="img/services/0.png" />

        <Route path="graphic" text="amet, consectetur adipiscing elit. Nam ac diam feugiat, blandit nisl sit amet, fringilla enim. Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus. Praesent facilisis tortor eu sapien sagittis eleifend. Curabitur vulputate, lorem in fringilla porta, odio odio posuere velit, condimentum consequat ligula sapien ut ex. Maecenas commodo ex sed odio ultrices porta" url="img/services/2.png" component={WebDesign} />
        <Route path="support" text="ipsum dolor sit amet, consectetur adipiscing elit. Nam ac diam feugiat, blandit nisl sit amet, fringilla enim. Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus. Praesent facilisis tortor eu sapien sagittis eleifend. Curabitur vulputate, lorem in fringilla porta, odio odio posuere velit, condimentum consequat ligula sapien ut ex. Maecenas commodo ex sed odio ultrices porta" url="img/services/1.png" component={WebDesign} />
        <Route path="app" text=" dolor Lorem ipsum  sit amet, consectetur adipiscing elit. Nam ac diam feugiat, blandit nisl sit amet, fringilla enim. Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus. Praesent facilisis tortor eu sapien sagittis eleifend. Curabitur vulputate, lorem in fringilla porta, odio odio posuere velit, condimentum consequat ligula sapien ut ex. Maecenas commodo ex sed odio ultrices porta" url="img/services/2.png" component={WebDesign} />
        <Route path="market" text="ipsum  sit amet, consectetur adipiscing elit. Nam ac diam feugiat, blandit nisl sit amet, fringilla enim. Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus. Praesent facilisis tortor eu sapien sagittis eleifend. Curabitur vulputate, lorem in fringilla porta, odio odio posuere velit, condimentum consequat ligula sapien ut ex. Maecenas commodo ex sed odio ultrices porta" url="img/services/3.png" component={WebDesign} />
        <Route path="seo" text=" dolor Lorem ipsum  sit amet, consectetur adipiscing elit. Nam ac diam feugiat, blandit nisl sit amet, fringilla enim. Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus. Praesent facilisis tortor eu sapien sagittis eleifend. Curabitur vulputate, lorem in fringilla porta, odio odio posuere velit, condimentum consequat ligula sapien ut ex. Maecenas commodo ex sed odio ultrices porta" url="img/services/4.png" component={WebDesign} />

        <Redirect from="*" to="/" />
    </Route>
    </Router>
)

export default ServicesCont;