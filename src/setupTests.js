
import React from 'react';

class RotatingT extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rotation: 0 };
  }

  componentDidMount() {
    this.rotateT();
  }

  rotateT() {
    setInterval(() => {
      this.setState(prevState => ({ rotation: prevState.rotation + 10 }));
    }, 100);
  }

  render() {
    const { rotation } = this.state;

    const style = {
      transform: `rotate(${rotation}deg)`,
    };

    return (
      <div style={style}>
        <h1>Rotating T</h1>
        <div className="rotating-t">
          <div className="t-horizontal"></div>
          <div className="t-vertical"></div>
        </div>
      </div>
    );
  }
}

export default RotatingT;