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
  standby = ""
  answer = eval(good)
  document.getElementById("output").innerHTML = answer.toLocaleString();
  if (answer == "Infinity"){
    document.getElementById("output").innerHTML = "Error INFINITY"
    document.body.style.backgroundImage = "url('https://media1.tenor.com/images/589b49d44d8c83f984a5f0a21a749e13/tenor.gif?itemid=4104435')";
  } else if (answer >= 1000000000) {
    let exponent = answer.toString().length-1;
    answer = answer / (10 ** (exponent))
    document.getElementById('output').innerHTML = answer.toFixed(7) + 'e' + exponent;
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
} else if (document.getElementById("output").innerHTML == answer.toLocaleString()){
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
} else if (document.getElementById("output").innerHTML == answer.toLocaleString()){
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
} else if (document.getElementById("output").innerHTML == answer.toLocaleString()){
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
} else if (document.getElementById("output").innerHTML == answer.toLocaleString()){
  good = answer
  document.getElementById("output").innerHTML = "/"
} else {
  good += document.getElementById("output").innerHTML
  standby = ""
  document.getElementById("output").innerHTML = "/"
}
}

function power1() {
  standby = eval(standby * standby)
if (standby.toString().length >= 8){
  let exponent = standby.toString().length-1;
    standby = standby / (10 ** (exponent))
    document.getElementById('output').innerHTML = standby.toFixed(7) + 'e' + exponent;
}else{
  document.getElementById("output").innerHTML = standby
  }
}

function power2() {
  standby = eval(standby * standby * standby)
if (standby.toString().length >= 8){
  let exponent = standby.toString().length-1;
    standby = standby / (10 ** (exponent))
    document.getElementById('output').innerHTML = standby.toFixed(7) + 'e' + exponent;
}else{
  document.getElementById("output").innerHTML = standby
  }
}

function ran() {
  temp = (Math.random() * 100);
  if (temp <= 48) {
    document.body.style.backgroundImage = "url('https://static1.squarespace.com/static/55a40adce4b0d82f937ebb59/55cab4f1e4b03aba01d2167c/571170177da24f0475d527eb/1545850703854/tumblr_nqbjooUMGV1qfrhqho1_r1_500.gif')";
  }else if (temp >= 50) {
        document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/InfantileGrouchyAmericanwirehair-small.gif')";
  }else {
    document.body.style.backgroundImage = "url('http://images4.fanpop.com/image/photos/23400000/Spongebob-Squarepants-GIFs-spongebob-squarepants-23417483-500-366.gif')";

  }
}
