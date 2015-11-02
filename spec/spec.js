var code = require('../grader.js');

describe('Letter Grader', function(){
  it("returns a letter grade equivalent with a numerical test score", function(){
    expect(code.letterGrader(92)).toEqual("A");
    expect(code.letterGrader(84)).toEqual("B");
    expect(code.letterGrader(76)).toEqual("C");
    expect(code.letterGrader(68)).toEqual("D");
    expect(code.letterGrader(13)).toEqual("F");
  });
});

describe('Average Score', function(){
  it("returns the average from an array of scores", function(){
    expect(code.averageScore([90, 95, 87, 60])).toEqual(83);
    expect(code.averageScore([74, 85, 79, 86])).toEqual(81);
  });
});


describe('Median Score', function(){
  it("returns the median from an array of scores", function(){
    expect(code.medianScore([52,80,80,86,94])).toEqual(80);
    expect(code.medianScore([74, 85, 79, 86])).toEqual(82);
  });
});


describe('Mode Score', function(){
  it("returns the mode from an array of scores", function(){
    expect(code.modeScore([82, 92, 75, 91, 92, 92, 89, 95, 95, 100, 86])).toEqual(92);
    expect(code.modeScore([54, 75, 98, 75, 86, 75, 93])).toEqual(75);

  });
});
