import React from 'react';
import Header from './Header.js';


export default class Main extends React.Component {

  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    // this.props.changeTitle("Will");
    return (
      <div>
        <Header title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}