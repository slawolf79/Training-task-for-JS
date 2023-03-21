const string = "Hello, how are you?";

const voWels = ["a", "e", "i", "o", "u", "y"]


const getVowels = stringToFilter => {
  let extractedVowels = "";
  
  for (let i = 0; i < stringToFilter.length; i ++) {
    const currentLetter = stringToFilter[i].toLowerCase();
    
    if (voWels.indexOf(currentLetter) !== -1) {
      extractedVowels = extractedVowels + currentLetter;
    }
  }
  
  return extractedVowels;
}

console.log(getVowels(string));


const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}
];

const getWorthyWorkers = workersArr => {
  const reformWorkers = [];
  
  for (let i = 0; i < workersArr.length; i++) {
    const currentWorkers = workersArr[i];

    if (currentWorkers.salary > 1000) {
      reformWorkers.push(currentWorkers.name);
    }
  }

  return reformWorkers;
};

console.log(getWorthyWorkers(workers))

////////////////////////////////////////////
// const getWorthyWorkers = workersArr => {
//   const reformWorkers = [];
  
//   workersArr.forEach(currentWorkers => {
//     if (currentWorkers.salary > 1000) {
//       reformWorkers.push(currentWorkers.name)
//     }
//   })
//   return reformWorkers;
// };

// console.log(getWorthyWorkers(workers))

const path = "/users/download/index.htm"

const isHtml = path => {

  const testPartPath = ".html";
  const n = 5;
  const cutPartPath = path.slice(-n);
  if (testPartPath == cutPartPath) {
    return true;
  } else {
    return false;
  }

}

console.log(isHtml(path))


const mixedArray = [3,13,74,14,66,15,22,4];
  const isEven = (num) => num % 2 === 0;

  const filterArray = (arrToFilter, filterFn) => {
    const filtredArray = [];
    arrToFilter.forEach(num => {
      if (filterFn(num)) {
        filtredArray.push(num);
      }
    })
    return filtredArray;
  }

  console.log(filterArray(mixedArray, isEven));