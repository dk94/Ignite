import React from 'react';
import Title from './Title'
import Wraper from './Wraper'
import Row from './Row'
import WDdefault from './servicesView/WDdefault'

import{Link} from 'react-router';
export default class Services extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){

        if(!this.props.children)
            var flag=true;
        let clsDef='col-10 col-md-6 col-lg-2 serviceCol';
        let clsActive='col-10 col-md-6 col-lg-2 serviceCol serviceColActive';
        return(
        <section id="services">
            <Wraper>
                <Title text="Our Services" color="black"/>
                <Row>
                    {
                        this.props.data.map((item,index)=>{
                          return(
                              <Link to={"services/"+item.link} className={this.props.index==index?clsActive:clsDef}  key={index}   onClick={()=>this.props.onClick(index)} >


                                 <CategoryItem  name={item.btn}/>


                              </Link>

                              )
                        })
                    }
                </Row>

                    {
                        flag==true?
                            <WDdefault text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac diam feugiat, blandit nisl sit amet, fringilla enim. Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus. Praesent facilisis tortor eu sapien sagittis eleifend. Curabitur vulputate, lorem in fringilla porta, odio odio posuere velit, condimentum consequat ligula sapien ut ex. Maecenas commodo ex sed odio ultrices porta" url="img/pf_img1.png"/>
                        :this.props.children


                    }

            </Wraper>

        </section>
        )
    }
}

const CategoryItem =({name})=>(
        <span>{name}</span>
)
