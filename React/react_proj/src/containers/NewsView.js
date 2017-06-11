import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class NewsView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let id = this.props.params.id;

        let data = this.props.data.filter((item) => {
            return item.id == id;
        })[0];

        if (!data)
            data = {};

        return (
            <section>
                <div style={{paddingTop: '100px', height: '100vh',width:'75%',margin:'0 auto'}}>
                    <div>
                        <div>
                            <h1>{`Amazing Post #${id}`}</h1>
                            <hr />
                        </div>
                        <h3>Date: {data.date}</h3>
                        <p style={{border:"1px solid black"}}>{data.text}</p>
                        <div >
                            <Link to="/">
                                <span  className="btn">Back</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.breakingNewsReducer.dataBNReducer
    }
}


export default connect(mapStateToProps, null)(NewsView);
