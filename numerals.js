const form = document.getElementById("roman-form");
console.log(form)
const numberInput = document.getElementById("number");
// console.log(numberInput);
const convertBtn = document.getElementById("convert-btn");
// console.log(convertBtn);
const output = document.getElementById("output");
// console.log(output);

const covertNumbersToRoman = (number) => {
  const romanNumeralsArray = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1] 
  ];
  const result = [];

  romanNumeralsArray.forEach(function(arr) {
    while (number >= arr[1]) {
      result.push(arr[0]);
      number -= arr[1]
    }
  });
  return result.join("");
};

const validString = (str, int) => {
  let errorText = "";
  let reg = /[e.]/g;
  if (!str || str.match(reg)) {
    errorText = "Please enter a valid number"
  } else if (int < 1) {
    errorText = "Please enter a number greater than or equal to 1"
  } else if (int > 3999) {
    errorText = "Please enter a number less than or equal to 3999"
  } else {
    return true
  }

  output.innerText = errorText;
  output.classList.add("alert");
  return false;
}

const clear = () => {
  output.innerText = "";
  output.classList.remove("alert");
}

form.addEventListener("submit", e => {
  e.preventDefault();
  updateState();
});

convertBtn.addEventListener("click", () => {
  updateState();
});

const updateState = () => {
  const numberString = document.getElementById("number").value;
  const int = parseInt(numberString, 10);

  output.classList.remove("hidden");
  clear();

  if(validString(numberString, int)) {
    output.innerText = covertNumbersToRoman(int);
  }
}