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

  return startingvalue
}

function checkvalue() {

  let minText = document.getElementById('min').value;
  let startingvalue = parseInt(minText);
  console.log("StartingValue: " + startingvalue);
  
}

function run() {
  startingValue = getStartingValue();

 const steps = [startingValue];

  let maxvalue = startingValue;
  let result = threeNPlusOne(startingValue); 

  while (result !== 1) {
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
  document.getElementById("maxvalue").innerText = "max value: " + maxvalue;
  
}

function threeNPlusOne(startingValue) {
  console.log(startingValue);
  let checkedvalue = Number((startingValue) % (2));
  console.log (checkedvalue);

  let result = startingValue % 2;

  if (result === 1) {
    let newvalue = (startingValue * 3) + 1;
    return newvalue
  } else {
    let newvalue = (startingValue / 2);
    return newvalue
 }
  
}
