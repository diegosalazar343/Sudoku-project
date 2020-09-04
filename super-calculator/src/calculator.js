export default function Calculator(age){
  this.age = age;
}

Calculator.prototype.checkType = function(){
  return "I dont know";
};

// Need 5 forms, one for each planet and one to determine life expectancy.(Maybe always make it zero since there is no oxygen on other planets).
