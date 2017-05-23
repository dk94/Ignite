/**
 * Created by Dima on 20.05.2017.
 */
import React from 'react';
import Title from './Title'
import Wraper from './Wraper'


export default class Feedback extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <section id="feedback">
                <Wraper>
                    <Title text="Feedback" color="black"/>
                    <CommentField close={this.props.closeMsg} data={this.props.data}/>
                    <LeaveMsg addMsg={this.props.addMsg}/>
                </Wraper>

            </section>
        )
    }

}
class CommentField extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="row">
                <div className="col-12 commentFieldFeed">
                    <div className="row justify-content-center">
                    {this.props.data.map((item,index)=>{
                        return(
                            <Comment index={index} close={this.props.close} title={item.title} msg={item.msg}/>
                        )
                    })}

                    </div>
                </div>
            </div>
        )
    }
}
class Comment extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="col-lg-11 msgContFeed">
                <TitleMsg close={this.props.close} title={this.props.title} index={this.props.index}/>
                <Msg msg={this.props.msg}/>
            </div>
        )
    }
}

const TitleMsg=({title,close,index})=>(
    <div className="row">
        <div className="col-lg-12 TitleMsgFeed">
            <span style={{display:"inline-block", float:"left"}}>{title}</span>
            <span onClick={()=>{close(index)}} style={{display:"inline-block", float:"right",cursor:"pointer"}}>x</span>
        </div>
    </div>
)
const Msg=({msg})=>(
    <div className="row">
        <div className="col-lg-12 text-left MsgFeed">
            <span>{msg}</span>

        </div>
    </div>
)
const LeaveMsg=({addMsg})=>(
    <div className="row justify-content-center leaveMsgFeed">
        <div className="col-lg-8">
            <div style={{float:"left",width:"50%"}}>
            <input id="titleFeedback" className="form-control AddMsgTitle" placeholder="Title"/>
             </div>
            <h4 style={{float:"right",paddingTop:"30px", fontWeight:"bold"}}>
                Leave us a message
            </h4>

        </div>
        <div className="col-lg-8">
            <div style={{float:"left",width:"50%"}}>
                <textarea id="msgFeedback" rows="3" className="form-control AddMsgText" placeholder="Title"/>
            </div>
            <div style={{float:"right",paddingTop:"30px", fontWeight:"bold",color:"white"}}>
               <button onClick={()=>{addMsg(document.querySelector('#titleFeedback').value,document.querySelector('#msgFeedback').value)}} className="btn">+ Add Comment</button>
            </div>

        </div>

    </div>
)