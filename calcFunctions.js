let answer = "";
let good = "";
let standby = "";
let temp = "";
let count = 0

function number(num) {
  if(document.getElementById("output").innerHTML == "+" || document.getElementById("output").innerHTML == "-" || document.getElementById("output").innerHTML == "*" || document.getElementById("output").innerHTML == "/"){
    good += document.getElementById("output").innerHTML
    document.getElementById("output").innerHTML = ""
}  if (document.getElementById("output").innerHTML == "0"){
    document.getElementById("output").innerHTML = ""
  }
  if (document.getElementById("output").innerHTML == answer){
    document.getElementById("output").innerHTML = ""
  }
  if (standby.length > 8){
  }else {
      standby = standby + num
      temp = document.getElementById("output").innerHTML + num
      document.getElementById("output").innerHTML = temp.toLocaleString();
      if (document.getElementById("output").innerHTML == "-" + standby){
      }else {
        standby = document.getElementById("output").innerHTML
    }
  }
}

function blank() {
  document.getElementById("output").innerHTML = "0"
  answer = ""
  good = ""
  standby = ""
}

function equals(){
  if (document.getElementById("output").innerHTML == "+" || document.getElementById("output").innerHTML == "-" || document.getElementById("output").innerHTML == "*" || document.getElementById("output").innerHTML == "/"){
  }else{
  good += standby
  answer = eval(good)
  document.getElementById("output").innerHTML = answer.toLocaleString();
  if (answer == "Infinity"){
    document.getElementById("output").innerHTML = "Error INFINITY"
    document.body.style.backgroundImage = "url('https://i.gifer.com/iCg.gif')";
  } else if (answer >= 1000000000) {
    let exponent = answer.toString().length-1;
    document.getElementById('output').innerHTML = answer / (10 ** (exponent)) + 'e' + exponent;;
    }
}
}

function negate() {
  if (document.getElementById("output").innerHTML == "-" + standby){
    document.getElementById("output").innerHTML = standby
  }else if (document.getElementById("output").innerHTML.indexOf("-") == 0 && document.getElementById("output").innerHTML != "-" + answer) {
    document.getElementById("output").innerHTML = standby
  } else if (document.getElementById("output").innerHTML == answer){
    document.getElementById("output").innerHTML = "-" + answer
  } else if (document.getElementById("output").innerHTML == "-" + answer){
    document.getElementById("output").innerHTML = answer
  }else{
    document.getElementById("output").innerHTML = "-" + standby
  }
console.log()
}


function perce() {
  if (document.getElementById("output").innerHTML.indexOf("-") == 0) {
    standby = eval(standby * 0.01).toFixed(7)
    document.getElementById("output").innerHTML = "-" + standby
  } else {
    standby = eval(standby * 0.01).toFixed(7)
    document.getElementById("output").innerHTML = standby
}
}

function pi(){
  if(document.getElementById("output").innerHTML.indexOf(".") != -1){
  }else {
  if(document.getElementById("output").innerHTML == "0"){
    document.getElementById("output").innerHTML = "3.14"
  }else if (standby.length > 9){
  }else{
      document.getElementById("output").innerHTML += "3.14"
  }
  standby = document.getElementById("output").innerHTML
  }
}

function decimal() {
  if (document.getElementById("output").innerHTML.indexOf(".") !== -1){
    document.getElementById("output").innerHTML = document.getElementById("output").innerHTML
  }else{
    document.getElementById("output").innerHTML += "."
  }
}

function addition() {
  if(document.getElementById("output").innerHTML == "+" || document.getElementById("output").innerHTML == "-" || document.getElementById("output").innerHTML == "*" || document.getElementById("output").innerHTML == "/"){
  document.getElementById("output").innerHTML = "+"
} else if (standby = ""){
} else if (document.getElementById("output").innerHTML == answer){
  good = answer
  document.getElementById("output").innerHTML = "+"
}else {
    good += document.getElementById("output").innerHTML
  standby = ""
  document.getElementById("output").innerHTML = "+"
}
}

function subtraction() {
  if(document.getElementById("output").innerHTML == "+" || document.getElementById("output").innerHTML == "-" || document.getElementById("output").innerHTML == "*" || document.getElementById("output").innerHTML == "/"){
  document.getElementById("output").innerHTML = "-"
} else if (standby = ""){
} else if (document.getElementById("output").innerHTML == answer){
  good = answer
  document.getElementById("output").innerHTML = "-"
}else {
  good += document.getElementById("output").innerHTML
  standby = ""
  document.getElementById("output").innerHTML = "-"
}
}

function multiplication() {
  if(document.getElementById("output").innerHTML == "+" || document.getElementById("output").innerHTML == "-" || document.getElementById("output").innerHTML == "*" || document.getElementById("output").innerHTML == "/"){
  document.getElementById("output").innerHTML = "*"
} else if (standby = ""){
} else if (document.getElementById("output").innerHTML == answer){
  good = answer
  document.getElementById("output").innerHTML = "*"
} else {
  good += document.getElementById("output").innerHTML
  standby = ""
  document.getElementById("output").innerHTML = "*"
}
}

function division() {
  if(document.getElementById("output").innerHTML == "+" || document.getElementById("output").innerHTML == "-" || document.getElementById("output").innerHTML == "*" || document.getElementById("output").innerHTML == "/"){
  document.getElementById("output").innerHTML = "/"
} else if (standby = ""){
} else if (document.getElementById("output").innerHTML == answer){
  good = answer
  document.getElementById("output").innerHTML = "/"
}
else {
  good += document.getElementById("output").innerHTML
  standby = ""
  document.getElementById("output").innerHTML = "/"
}
}

function power1() {
  standby = eval(standby * standby)
if (standby.length > 9){
  let exponent = answer.toString().length-1;
  document.getElementById('output').innerHTML = answer / (10 ** (exponent)) + 'e' + exponent;;
}
  document.getElementById("output").innerHTML = standby
}
