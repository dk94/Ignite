import React from 'react';
export  default class WDdefault extends React.Component
{
    constructor (props){
        super(props);
    }


    render(){
        return(
            <div className="row">
                <div className='col-lg-3' style={{padding:"0px"}}>
                    <img className='img-fluid' src={this.props.url}/>
                </div>

                <div className='col-lg-9 text-left'>
                    <span>
                        {this.props.text}
                    </span>
                </div>
            </div>
        )

    }
}