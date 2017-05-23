import React from 'react';
import Title from './Title'
import Wraper from './Wraper'
import {Link} from 'react-router';


export default class BreakingNews extends React.Component{
    constructor(props) {
        super(props);
    }



    render(){

        return(
            <section id="breakingNews">
                <Wraper>
                    <Title text="Breaking News" color="black"/>
                    <NewsBlock data={this.props.data} loadMore={this.props.loadMore}/>


                </Wraper>

            </section>
        )
    }
}
class NewsBlock extends React.Component{
    constructor(props) {
        super(props);
    }
    getTextMont(date){
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        return monthNames[new Date(date).getMonth()];
    }
    render(){
        return(
            <div className="row justify-content-center newsRow" >
                {this.props.data.map((item,index)=>{
                    return(<NewsItem  title="Title" url="img/newsItem.png" dateD={new Date(item.date).getDate()} dateM={this.getTextMont(item.date)}/>)
                })}
                <button onClick={()=>{this.props.loadMore()}} className="btn">+ LOAD MORE</button>
            </div>
        )
    }

}

const NewsItem=({title,url,dateD,dateM})=>(
    <Link to="id" className="col-10 col-md-6 col-lg-3 newsCol">
        <div className="newsItem">
            <div style={{position:"relative"}}>
                <img className="img-fluid" src={url}/>
                <div className="nameBlockTeam">{title}</div>
                <div className="dateBlockTeam">{dateD}<br/>{dateM}</div>
            </div>

        </div>
    </Link>

)
