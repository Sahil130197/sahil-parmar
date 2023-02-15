import React, { Component } from 'react';

class ClassCompoStateExample extends Component {
    
    DataMember = "Test"
    constructor() {
        super();
        // console.log("called");
        this.state = { data :"somethign" };
        // this.btnClickHandle = this.btnClickHandle.bind(this)
    }

    // btnClickHandle() {
    //     this.DataMember = "Testing"
    //     // console.log("called");
    //     this.setState({
    //         data :"something"
    //     })
    // }

    btnClickHandle=()=> {
        this.DataMember = "Testing"
        // console.log("called");
        this.setState({
            data :"something"
        })
    }

    render() {
        let variable = "variable"
        return (
            <>
                <p>Data Member: {this.DataMember}</p>
                <p>Variable: {variable}</p>
                <p>ReactJs State: {this.state.data}</p>
                
                <button onClick={this.btnClickHandle}>Click</button>

            </>
        );
    }
}

export default ClassCompoStateExample;