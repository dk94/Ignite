
/**
 * Created by Dima on 21.05.2017.
 */
import React from 'react';
import Title from './Title'

export default class KeepInTouch extends React.Component{
    constructor(props) {
        super(props);
    }

            render(){
                return(
                    <section id="keepInTouch">
                        <div className="row">
                            <div className="col-12 col-lg-10">
                                <div className="row justify-content-center">
                                    <div className="col-10 col-lg-7">
                                    <Map/>
                                    </div>
                                    <div className="col-10 col-lg-5">
                                    <Title text="Keep In Touch" color="black"/>
                                        <MyForm/>
                                    </div>
                                </div>
                            </div>
                       </div>

                    </section>
                )
            }

}
var MyForm = React.createClass({

    getInitialState: function () {
        return{
            name_cls: 'valid',
            email_cls: 'valid',
            message_cls: 'valid'
        }
    },

    render: function() {
        return (


                    <form>
                        <br></br>
                        <div className="form-group">

                            <input onInput={this.nameChange} type="text" className="form-control" placeholder="Name"/>
                            <p className={this.state.name_cls}>Only letters allowed!</p>

                            <input onInput={this.emailChange} type="text" className="form-control" placeholder="Email"/>
                            <p className={this.state.email_cls}>Not Valid</p>

                            <textarea rows="4" onInput={this.messageChange} className="form-control" placeholder="Message"/>
                            <p className={this.state.message_cls}>Minimal length of message 20 symbols!</p>

                            <button className="btn butt" id='submitt'>SEND REQUEST</button>

                        </div>
                    </form>

        )},

    nameChange: function(e) {
        var testVal = /^[a-zA-Z ]+$/;

        if (e.target.value.search(testVal) == -1) {
            this.setState({name_cls: 'error'});
        }else{
            this.setState({name_cls: 'valid'});
        }
    },

    emailChange: function(e) {
        var testVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (e.target.value.search(testVal) == -1) {
            this.setState({email_cls: 'error'});
        }else{
            this.setState({email_cls: 'valid'});
        }
    },

    messageChange: function(e) {
        var testVal = /^.{0,19}$/;

        if (e.target.value.search(testVal) != -1) {
            this.setState({message_cls: 'error'});
        }else{
            this.setState({message_cls: 'valid'});
        }
    }
})
const Map=()=>(
    <div id="map">

    </div>
)