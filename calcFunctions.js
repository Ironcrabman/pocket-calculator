let operator = ""
let num1 = ""
let answer = ""


function number(num) {
  if(operator == "+" || operator == "-" || operator == "/" || operator == "*") {
      document.form.textview.value = "";
      num1 += operator
      operator = "";
      console.log(num1)
    }
  document.form.textview.value = document.form.textview.value + num
}

function blank() {
  document.form.textview.value = ""
}


function addition() {
  if (document.form.textview.value == "/" || document.form.textview.value == "*" || document.form.textview.value == "-"){
    document.form.textview.value = ""
    document.form.textview.value = "+"
  }
 if (document.form.textview.value == ""){
    document.form.textview.value = ""
  } else {
    operator = "+"
    num1 = document.form.textview.value
    document.form.textview.value = operator
    console.log(num1)
  }
}

function equals() {
    num1 += document.form.textview.value
    answer = eval(num1);
    document.form.textview.value = answer
    console.log(answer)
}
