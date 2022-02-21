import React from 'react';
import './App.css';

function App() {
  var result = '';
  var first = 0
  const [inp, setInp] = React.useState('');


  const toRoman = (num) =>{
    var dictx = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X':10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1};
    
    for (var key of Object.keys(dictx)) {
        result += key.repeat(Math.floor(num/dictx[key]));
        num %= dictx[key];
    }
    return result;
  }

  const toNum = (rom) => {
    var count = 0;
    var dicty = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X':10, 'V': 5, 'I': 1};
    for (var key of Object.keys(dicty)){
      if (rom.charAt(0) != key) {
        count++;
      }
    }
    if (count == 7){
      result = "Please input a valid Roman Numeral or Integer";
      return;
    }
    else{
      count=0;
    }
    var first = dicty[rom.charAt(0)];
    var past;
    var present;
    for (var i =1; i< rom.length; i++){
      for (var key of Object.keys(dicty)){
        if (rom.charAt(i) != key) {
          count++;
        }
      }
      if (count == 7){
        result = "Please input a valid Roman Numeral or Integer";
        return;
      }
      else{
        count = 0;
      }
      present = dicty[rom.charAt(i)];
      past = dicty[rom.charAt(i-1)];
      if (present <= past){
        first += present;
      }
      else{
        first = first - past*2 + present;
      }
    }
    result = first.toString();
  }

  const onSubmit = (inp) => {
    if (inp.match(/[a-z]/i)){
      toNum(inp);
    }
    else{
      toRoman(Number(inp));
    }
  }

  return (
    <div className="App">
        <h1 className = "App-header"> Roman Numeral Converter </h1>
        <div className = 'content'>
        <h3> Please Type in a Number or Roman Numeral for conversion </h3>
        
          <p> Your Input = &nbsp;
          <input type='text' className = "inputField" onInput={e => setInp(e.target.value.toUpperCase())}></input>
          </p>
        <div className = 'box'>
          <h3>Your Result! </h3>
        <p>
          {onSubmit(inp)}
          Input = {inp} <br/>
          Conversion = {result}
        </p>
        </div>
        <h5>
          Note: You do not need to worry about upercase or lowercase while inputing a Roman Numeral. That has been taken care of!
        </h5>
        </div>
    </div>
  );
}

export default App;
