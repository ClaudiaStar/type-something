import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import CharComponents from './CharComponents/CharComponents';

class App extends Component {

state = {
  num: 0,
  letters: '',
  textCopy: ''
}

textLengthHandler = (event) => {
  const enteredText = event.target.value;
  const textLength = enteredText.length;
  this.setState({
    num: textLength,
    letters: enteredText,
    textCopy: enteredText
  })
}

deleteCharHandler = (index) => {
  const text = this.state.letters.split('');
  text.splice(index, 1);
  const updatedText = text.join('');
  this.setState({letters: updatedText});
}

  render(){


// Conditional statement for Validation component
const val = () => {
if (this.state.num < 6) {
return "Text too short" }
if (this.state.num > 5) {
return "Text long enough" }
}

// CharComponents rendered as list by mapping array into JSX components
let charList = this.state.letters.split('').map((ch, index) => {
  return <CharComponents
  char={ch}
  key={index}
  clicked={() => this.deleteCharHandler(index)} />;
});



  return (
    <div className="App">
      <h1>Type something :)</h1>
      <input type="text" onChange={this.textLengthHandler}/>
      <Validation textLengthVal={val()} letters={this.state.letters}/>
      <p>Char number: {this.state.num}</p>
      {charList}
    </div>
  );
}
}

export default App;
