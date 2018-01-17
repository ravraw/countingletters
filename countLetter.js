
var myArgv = process.argv.slice(2);

function countLetters(sampleString){

  var objLetterCount = {};
  var inputString = sampleString.join('');
  var splitArray = inputString.split("");
  var filteredArray = splitArray.filter(function(elem, index, self){
    return index === self.indexOf(elem);
  });

  var occuranceCount = [];
  var count = 0 ;

  for (var i = 0 ; i < filteredArray.length ; i++){
    for(var j = 0 ; j < splitArray.length ; j++){
      if(filteredArray[i] === splitArray[j]){
        count += 1 ;
      }
    }
    occuranceCount.push(count);
    count = 0;
  }

  for(let i = 0 ;i < occuranceCount.length ;i++){
    objLetterCount[filteredArray[i]] = occuranceCount[i];
  }
  return objLetterCount ;
}


var results = countLetters(myArgv);
console.log(results);
