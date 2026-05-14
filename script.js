function p4T() {
  var p4T = document.getElementById(p4);
 if (p4.style.display === "none") {
   p4.style.display = "block";
 } else {
   p4.style.display = "none";
 }
}

function getStartingValue() {
  let minText = document.getElementById('min').value;
  let startingvalue = parseInt(minText);

  return BigInt(startingvalue);
}

function getEndingValue() {
   let endingtext = document.getElementById('max').value;
  let endingValue = parseInt(endingtext);
  return BigInt(endingValue);
}

function checkvalue() {

  let minText = document.getElementById('min').value;
  let startingvalue = parseInt(minText);
  console.log("StartingValue: " + startingvalue);
  
}

function runAll() {
   startingValue = getStartingValue();
   endingValue = getEndingValue();
  for (let index = startingValue; index < endingValue; index++) {
    run(index);
  }
}
function run(startingValue) {

 const steps = [startingValue];

  let maxvalue = startingValue;
  let result = threeNPlusOne(startingValue); 

  while (result !== 1n) {
    if (result > maxvalue) {
      maxvalue = result;
    }
    steps.push(result);
    let nextvalue = threeNPlusOne(result);
    result = nextvalue;
  }

  
  console.log ("maxvalue " + maxvalue);
  steps.push(result);
  console.log (steps);
  let numsteps = steps.length;
  document.getElementById("numsteps").innerText = "most steps: " + numsteps;
  document.getElementById("maxvalue").innerText = "max value: " + maxvalue.toLocaleString();
  
}

function threeNPlusOne(startingValue) {
  console.log(startingValue);

  let result = startingValue % 2n;

  if (result === 1n) {
    let newvalue = (startingValue * 3n) + 1n;
    return BigInt(newvalue);
  } else {
    let newvalue = (startingValue / 2n);
    return BigInt(newvalue);
 }
  
}
