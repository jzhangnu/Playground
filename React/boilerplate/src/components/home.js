import React from "react";


require('../style/main.scss')

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <h1 id='test'>Hey</h1>
        hello world
      </div>
    );
  }
}
