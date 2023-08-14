import React, { Component } from "react";
import Ipod from "./Component/ipod";
import zingtouch from 'zingtouch';
import appStyle from './index.module.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.touchAreaRef = React.createRef();
  }

  componentDidMount() {
    const touchArea = this.touchAreaRef.current;

    if (touchArea) {
      const rotateRegion = new zingtouch.Region(touchArea);
      const rotateGesture = new zingtouch.Rotate();

      rotateRegion.bind(touchArea, rotateGesture, (e) => {
        console.log("Rotation Angle: ", e.detail.angle);
      });
    } else {
      console.warn('Touch area element is not available.');
    }
  }

  componentWillUnmount() {
    const touchArea = this.touchAreaRef.current;

    if (touchArea) {
      const rotateRegion = new zingtouch.Region(touchArea);
      rotateRegion.unbind();
    }
  }

  render() {
    return (
      <>
      <div className={appStyle.app}>
        <Ipod touchAreaRef={this.touchAreaRef} />
      </div>
      </>
    );
  }
}
