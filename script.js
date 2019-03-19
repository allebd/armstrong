//Assign Variables
const theForm = document.getElementById("theForm");
const theNumber = document.getElementById("theNumber");
const theCheck = document.getElementById("theCheck");
const theResult = document.getElementById("searchResult");
const errorMessage = document.getElementById("errorMessage");

//Check input length  
theNumber.onkeyup = function () {
  let theNumberValue = theNumber.value;
  if(countNumber(theNumberValue) === true){
    theCheck.classList.remove("disabled");
  }else{
    theCheck.classList.add("disabled");
  }
}

//Checking for armstrong
theForm.addEventListener("submit", function(event){
  event.preventDefault();
  let theNumberValue = theNumber.value;    
  displayResult(theNumberValue);
});

//Function to check for 3 digit integer
let countNumber = (theNumberValue)=>{
  if(!isNaN(theNumberValue)){
    if(theNumberValue.length === 3){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
};

//Function to check armstrong
let checkArmstrong = (theNumberValue)=>{
  let armResult = 0;
  for(let i=0; i<theNumberValue.length;i++){
    armResult += findCube(parseInt(theNumberValue[i]));
  }
  if(parseInt(armResult) === parseInt(theNumberValue)){
    return true;
  }else{
    return false;
  }
};
  
//Function to find the cube of a number
let findCube = (theNumber)=>{
  return theNumber*theNumber*theNumber;
};

//Function to display result
let displayResult = (theNumberValue)=>{
  if(countNumber(theNumberValue) === false){
    errorMessage.innerHTML = theNumberValue+" is not a 3 digit integer";
    theResult.innerHTML = "";
  }else{
    errorMessage.innerHTML = "";
    if(checkArmstrong(theNumberValue) === false){
      theResult.innerHTML = theNumberValue+" is not an Armstrong number";
    }else{
      theResult.innerHTML = theNumberValue+" is an Armstrong number";
    }
  }
}

function displayGender(){
  return a+b;
}

const displayGender = () =>{
}

displayGender(5,2);