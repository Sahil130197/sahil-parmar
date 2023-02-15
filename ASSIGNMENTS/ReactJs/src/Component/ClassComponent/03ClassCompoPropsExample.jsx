import React, { Component } from 'react';
import CustomeCard from './04CustomCardStructure';


class ClassCompoPropsExample extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-3"><CustomeCard title="Apple" imgUrl="Apple-iPhone-14.jfif">Lorem ipsum, dolor sit amet consectetur <strong>adipisicing elit. Quam,</strong>  deleniti reiciendis aliquam obcaecati ipsam nobis qui tempore voluptatem explicabo dolor?</CustomeCard></div>
                    <div className="col-md-3"><CustomeCard title="OnePlus" imgUrl="OnePlus-Nord-CE2.jfif">Lorem ipsum, dolor sit amet consectetur <strong>adipisicing elit. Quam,</strong>  deleniti reiciendis aliquam obcaecati ipsam nobis qui tempore voluptatem explicabo dolor?</CustomeCard></div>
                    <div className="col-md-3"><CustomeCard title="Samsung" imgUrl="Samsung-M52.jfif">Lorem ipsum, dolor sit amet consectetur <strong>adipisicing elit. Quam,</strong>  deleniti reiciendis aliquam obcaecati ipsam nobis qui tempore voluptatem explicabo dolor?</CustomeCard></div>
                    <div className="col-md-3"><CustomeCard title="Xiomi" imgUrl="Xiaomi-TV.jfif">Lorem ipsum, dolor sit amet consectetur <strong>adipisicing elit. Quam,</strong>  deleniti reiciendis aliquam obcaecati ipsam nobis qui tempore voluptatem explicabo dolor?</CustomeCard></div>

                </div>
            </>
        );
    }
}

export default ClassCompoPropsExample;