import PropTypes from 'prop-types';
import React, { Component } from 'react';

export const doIncrement = prevState => ({
  counter: prevState.counter + 1,
});

export const doDecrement = prevState => ({
  counter: prevState.counter - 1,
});

class App extends Component {
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
    const { title } = this.props;
    const { counter } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <Counter counter={counter} />

        <button
          type="button"
          onClick={this.onIncrement}
        >
          Increment
        </button>

        <button
          type="button"
          onClick={this.onDecrement}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export const Counter = ({ counter }) => <p>{counter}</p>;

App.propTypes = {
  title: PropTypes.string.isRequired,
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default App;
