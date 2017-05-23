import React from 'react';
import Title from './Title'
import Wraper from './Wraper'

export default class Portfolio extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <section id="portfolio">
                <Wraper>
                    <Title text="Our Amazing Work" color="black"/>
                    <PortfolioNav setFilter={this.props.setFilter} index={this.props.index}  data={this.props.data}/>
                    <PortfolioImgSet flag={this.props.flag} mouseOut={this.props.onMouseOut} index={this.props.indexOuter}  mouseOver={this.props.onMouseOver}  data={this.props.pfImgSet}/>
                </Wraper>

            </section>
        )
    }

     }
    class PortfolioNav extends React.Component{
        constructor(props) {
            super(props);

        }

        render(){
            let clsDef='col-10 col-md-6 col-lg-2 portfolioCol';
            let clsActive='col-10 col-md-6 col-lg-2 portfolioCol portfolioColActive';
            return(
                <div className="row justify-content-center no-gutters  tabsPf">
                    {
                        this.props.data.map((item,index)=>{
                            return(
                                <div key={index} onClick={()=>{this.props.setFilter(item,index)}}  className={this.props.index==index?clsActive:clsDef}>
                                    {item}
                                </div>

                            )
                        })
                    }
                </div>
            )
        }

    }
    class PortfolioImgSet extends React.Component{
          constructor(props) {
                super(props);
            }

            render(){
                let clsA='visibleBlock';
                let cls='nonVisibleBlock';

              return(
                  <div className="row justify-content-center no-gutters">
                      {
                          this.props.data.map((item,index)=>{
                              return(

                                  <div key={index} className="col-10 col-md-6 col-lg-3">

                                      <img  className="img-fluid" src={item.url}  onMouseEnter={()=>{this.props.mouseOver(index)}}/>
                                      <div onMouseOut={()=>{this.props.mouseOut()}} className={this.props.flag==true&&this.props.index==index?clsA:cls} ><span  onMouseEnter={()=>{this.props.mouseOver(index)}}>{item.category}</span></div>
                                  </div>
                              )
                          })
                      }
                  </div>
              )
            }
    }


