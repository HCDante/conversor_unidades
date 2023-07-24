function convert() {
    const inputUnits = document.getElementById('inputUnits').value;
    const outputUnits = document.getElementById('outputUnits').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);

    let result = 0;

    if (inputUnits === 'mm') {
      if (outputUnits === 'cm') {
        result = inputValue / 10;
      } else if (outputUnits === 'm') {
        result = inputValue / 1000;
      } else if (outputUnits === 'km') {
        result = inputValue / 1000000;
      } else if (outputUnits === 'in') {
        result = inputValue / 25.4;
      } else if (outputUnits === 'ft') {
        result = inputValue / 304.8;
      } else if (outputUnits === 'yd') {
        result = inputValue / 914.4;
      } else if (outputUnits === 'mi') {
        result = inputValue / 1.609e+6;
      } else {
        result = inputValue;
      }
    } else if (inputUnits === 'cm') {
      
    }

    document.getElementById('result').innerText = `El resultado es: ${result.toFixed(2)} ${outputUnits}`;
  }