/**
 * Created by Dima on 19.05.2017.
 */
import React from 'react';
export  default class WebDesign extends React.Component
    {
        constructor (props){
            super(props);
        }


        render(){
            return(
    <div className="row">
        <div className='col-lg-3' style={{padding:"0px"}}>
            <img className='img-fluid' src={this.props.route.url}/>
        </div>

        <div className='col-lg-9 text-left'>
                    <span>
                        {this.props.route.text}
                    </span>
        </div>
    </div>
            )

}
}

