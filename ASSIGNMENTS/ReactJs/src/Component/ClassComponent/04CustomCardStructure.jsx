import React, { Component } from 'react';
import {
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple
} from 'mdb-react-ui-kit';

class ClassCompoPropsExample extends Component {
    render() {
        return (
            <>
            <div className="row">
                <div >
                <MDBCard>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={process.env.PUBLIC_URL +"/"+ this.props.imgUrl} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.title}</MDBCardTitle>
                        <MDBCardText>
                        {this.props.children}
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                </div>
            </div>
            </>
        );
    }
}

export default ClassCompoPropsExample;