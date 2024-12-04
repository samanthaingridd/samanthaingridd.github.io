// document.getElementById("hello").innerHTML = "Hey Everyone!"

let hello1 = document.getElementById("hello");
let hello2 = document.querySelectorAll("p.howdy");

let greeting = document.getElementsByTagName("h1");
let newGreeting = "Greeting All"

greeting[0].innerHTML = newGreeting;
// hello1.innerHTML = hello2[0].innerHTML;

// newGreeting.innerHTML = "Greeting All";
// hello.innerHTML = greeting[0].innerHTML;

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

hello1.innerHTML = text;