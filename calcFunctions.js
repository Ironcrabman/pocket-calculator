let operator = ""
let num1 = ""
let answer = ""
let done = false
let perce = false


function number(num) {
  if (document.form.textview.value == "0"){
    document.form.textview.value = ""
  }
  if (document.form.textview.value == answer){
    document.form.textview.value = ""
  }

if(operator == "+" || operator == "-" || operator == "/" || operator == "*") {
      document.form.textview.value = num1 + operator
      operator = "";
      console.log(num1)
    }
  if(done == true){
    done = false
    answer = ""
  }
  document.form.textview.value = document.form.textview.value + num
}



function blank() {
  document.form.textview.value = ""
  document.form.textview.value = "0"
  num1 = ""
  operator = ""
}

function equals() {
    if (document.form.textview.value == num1 + operator) {
      document.form.textview.value == num1 + operator
    }else {
    num1 = document.form.textview.value
    answer = eval(num1);
    if ( perce === true){
      number(answer)
      answer / 100
    }
    document.form.textview.value = answer
    console.log(answer)
    done = true
  }
}


function percent() {
  perce = true
}


function addition() {
  if(document.form.textview.value == num1 + operator){
   document.form.textview.value = num1
  }

  num1 = document.form.textview.value

  if( operator == "+" || operator == "-" || operator == "/" || operator == "*") {
    operator = "+"
    document.form.textview.value = num1 + operator
  }else{
    document.form.textview.value = document.form.textview.value + operator
  operator = "+"
  }
}

function subtraction() {
  if(document.form.textview.value == num1 + operator){
   document.form.textview.value = num1
  }

  num1 = document.form.textview.value

  if( operator == "+" || operator == "-" || operator == "/" || operator == "*") {
    operator = "-"
    document.form.textview.value = num1 + operator
  }else{
    document.form.textview.value = document.form.textview.value + operator
  operator = "-"
  }
}

function multiplication() {
  if(document.form.textview.value == num1 + operator){
   document.form.textview.value = num1
  }

  num1 = document.form.textview.value

  if( operator == "+" || operator == "-" || operator == "/" || operator == "*") {
    operator = "*"
    document.form.textview.value = num1 + operator
  }else{
    document.form.textview.value = document.form.textview.value + operator
  operator = "*"
  }

}

function division() {
  if(document.form.textview.value == num1 + operator){
   document.form.textview.value = num1
  }

  num1 = document.form.textview.value

  if( operator == "+" || operator == "-" || operator == "/" || operator == "*") {
    operator = "/"
    document.form.textview.value = num1 + operator
  }else{
    document.form.textview.value = document.form.textview.value + operator
  operator = "/"
  }
}
