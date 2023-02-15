import React, { Component } from "react";

class ClassLifeCycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

//   componentWillMount() {
//     console.log("componentWillMount");
//   }

  componentDidMount() {
    console.log("componentDidMount");
  }

//   componentWillReceiveProps(nextProps) {
//     console.log("componentWillReceiveProps");
//   }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
  }

//   componentWillUpdate(nextProps, nextState) {
//     console.log("componentWillUpdate");
//   }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changestate=()=>{
    console.log("called");
  }
  render() {
    return <div>
        <h2>Life Cycle</h2>
        <button onClick={this.changestate}>Click</button>
    </div>;
  }
}

export default ClassLifeCycleExample;
