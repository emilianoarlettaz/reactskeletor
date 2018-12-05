import React, { Component } from 'react';
import { Button, Counter } from '../components';

export const doIncrement = prevState => ({
  counter: prevState.counter + 1,
});

export const doDecrement = prevState => ({
  counter: prevState.counter - 1,
});

const title = 'Counter Demo';

class Demo extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState(doIncrement);
  }

  onDecrement() {
    this.setState(doDecrement);
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <Counter counter={counter} />

        <Button onClick={this.onIncrement}>
          Increment
        </Button>

        <Button onClick={this.onDecrement}>
          Decrement
        </Button>
      </div>
    );
  }
}

export default Demo;
