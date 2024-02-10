import React, { Component } from "react";
import Sparkle from "../assets/svgs/sparkle.svg";
import "../assets/stylesheets/home.scss";
import "../assets/stylesheets/glitch.scss";
import "../assets/stylesheets/sparkle.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: "student🎓",
    };
    this.time = 0;
    this.prompt = 0;
  }

  titles = ["student🎓", "developer💻", "leader💡", "creator🎨"];

  tick() {
    this.time++;
    if (this.time === 5) {
      this.time = 0;
      this.prompt++;
      if (this.prompt === this.titles.length) {
        this.prompt = 0;
      }
      this.setState({ typing: this.titles[this.prompt] });
    }

    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
    if (this.state.seconds === 5) {
      this.setState((state) => ({
        seconds: 0,
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="home">
        <div className="spark">
          <img id="sparkle-1" className="sparkle" src={Sparkle} alt="" />
          <img id="sparkle-2" className="sparkle" src={Sparkle} alt="" />
          <img id="sparkle-3" className="sparkle" src={Sparkle} alt="" />
          <img id="sparkle-4" className="sparkle" src={Sparkle} alt="" />

          <div className="intro">
            <div className="line">
              <span className="intro-generic">👋 Hello, my name</span>
            </div>
            <div className="line l2">
              <span className="intro-generic">is</span>
              <span className="intro-name">Scarlett Kadan</span>
            </div>
            <div id="type-1" className="line l3">
              <span className="intro-generic">I'm a </span>
              <div className="typing">
                <span
                  className="typing-text glitch layers"
                  data-text={this.state.typing}
                >
                  {this.state.typing}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
