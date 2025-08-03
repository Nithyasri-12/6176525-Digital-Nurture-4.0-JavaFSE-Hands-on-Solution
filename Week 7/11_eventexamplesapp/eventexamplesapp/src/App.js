import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      amount: '',
      currency: ''
    };
  }

  
  increment = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  sayHello = () => {
    alert("Hello! This is a static message.");
  };

  handleIncrease = () => {
    this.increment();
    this.sayHello();
  };

  handleDecrease = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  sayWelcome = (message) => {
    alert(message);
  };


  handleSyntheticClick = (e) => {
    e.preventDefault(); 
    alert("I was clicked");
  };

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, currency } = this.state;
    if (currency.toLowerCase() === "euro") {
      const converted = amount * 80;
      alert(`Converting to Euro Amount is ${converted}`);
    }
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h3>{this.state.counter}</h3>
        <button onClick={this.handleIncrease}>Increment</button><br /><br />
        <button onClick={this.handleDecrease}>Decrement</button><br /><br />
        <button onClick={() => this.sayWelcome("welcome")}>Say welcome</button><br /><br />
        <button onClick={this.handleSyntheticClick}>Click on me</button><br /><br />

        <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Amount:</label><br />
          <input
            type="text"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          /><br /><br />
          <label>Currency:</label><br />
          <input
            type="text"
            value={this.state.currency}
            onChange={this.handleCurrencyChange}
          /><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
