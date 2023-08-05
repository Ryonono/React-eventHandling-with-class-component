import React from 'react';
import Main from './components/Main.js';
import Footer from './components/Footer.js';


export default class Title extends React.Component {
  constructor() {
    super();
    this.state = { title: "Max", };
  }

  changeTitle(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Event Handling site.</h1>
        <p>In this site, we can see what happens in DOM when changing the input.</p>
        <br></br>
        <Main changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        {/* 記述は合っているはずなのに、ずっとtitleの値が初期値も含め表示されていなかった
        →よく見てみると、title={this.state.title}とするべき部分をtitle={this.props.title}の値を渡してしまっていた
        →このコンポーネント上で変更を加えるもの(setStateがあるコンポーネント)に関しては、this.stateを使用するべき！！ */}
        <Footer />
      </div>
    );
  }
}