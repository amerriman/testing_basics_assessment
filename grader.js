// ###Letter Grader

// Write a function `letterGrader` which takes a test score and returns the equivalent letter grade.

// * A: 90-100
// * B: 80-89
// * C: 70-79
// * D: 60-69
// * F: 0-59

// ```
// letterGrader(98);
// //=> 'A'
// ```
// **Bonus:** Add '+' and '-' grades.  So a 98 is actually a A+ and an 80 is a B-

exports.letterGrader = function(score){
  if(score >= 90){
    return "A";
  } else if (score >=80){
    return "B";
  } else if (score >=70){
    return "C";
  } else if (score >=60){
    return "D";
  } else {
    return "F";
  }

};

// ###Average

// Write a function 'averageScore` which takes an array of test scores and returns the average score.

// ```
// averageScore([90, 95, 87, 60]);
// //=> 83
// ```

exports.averageScore = function(array){
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total/array.length;
};

// ###Median

// Write a function `medianScore` which takes an array of test scores and calculates the median score.  The median is the middle value.  If there are an even number of scores, calculate the average of the middle two scores.

// ```
// medianScore([52,80,80,86,94])
// //=> 80
// ```

exports.medianScore = function(array){
  var median;
  if(array.length % 2 !== 0){
    var medianIndex = (array.length -1) / 2;
    median = Number(array.sort().splice(medianIndex, 1));
    return median;
  } else {
    var index = array.length/2 - 1;
    var middleScores = array.sort().splice(index, 2);
    median = (middleScores[0] + middleScores[1])/2;
    return median;
  }
};


// ###Mode

// Write a function `modeScore` which takes an array of test scores and calculates the mode score.  The mode is the value that appears most often.

// ```
// modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])
// //=> 92
// ```

// exports.modeScore = function(array){
//   var count = 0;
//   var mode;
//   var sortedArray = array.sort();
//   console.log(sortedArray);
//   for (var i = 0; i < sortedArray.length; i++) {
//     console.log(sortedArray[i], sortedArray[i+1]);
//     if(sortedArray[i] === sortedArray[i+1]){
//       count ++,
//       mode = sortedArray[i];
//     }
//   }
//   return mode
// };

exports.modeScore = function(array){
    var obj={};
    array.sort().forEach(function(el,i,arr){
        // console.log(typeof(el))
      if(obj[el]){
        obj[el]++;
      } else {
        obj[el] = 1;

      }
    });
    keysSorted = Object.keys(obj).sort(function(a,b){return obj[a]-obj[b]});
    return Number(keysSorted[keysSorted.length-1]);
};


