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
  console.log("Starting value: " + startingvalue);
  return startingvalue;
}

function getEndingValue() {
   let endingtext = document.getElementById('max').value;
  let endingValue = parseInt(endingtext);
  console.log("Ending value: " + endingValue);
  return endingValue;
}

function checkvalue() {

  let minText = document.getElementById('min').value;
  let startingvalue = parseInt(minText);
  console.log("StartingValue: " + startingvalue);
  
}



function run() {
  startingValue = getStartingValue();
  console.log("Starting run() function on index: " + startingValue);
  let steps = [startingValue];

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
  document.getElementById("maxvalue").innerText = "max value: " + maxvalue.toLocaleString();
  document.getElementById("steps").innerText = "steps: " + steps.join(", ");
  
  let labels = steps.map((element, index, array) => {
    return ""+index;
  });
    const ctx = document.getElementById('myChart')
  ctx.getContext('2d').reset();
   let mychart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        data: steps.map(num => Number(num)),
        label: '3n+1 Graph',
    fill: false,
    borderColor: 'rgb(75, 192, 192)'
      }
    ]
  }})
 
}

function threeNPlusOne(startingValue) {
  console.log(startingValue);

  let result = startingValue % 2;

  if (result === 1) {
    let newvalue = (startingValue * 3) + 1;
    return newvalue;
  } else {
    let newvalue = (startingValue / 2);
    return (newvalue);
 }
  
}
