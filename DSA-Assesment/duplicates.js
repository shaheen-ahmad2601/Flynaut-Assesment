// 1 find dublicates and same values in two array
// var fullWordList = ['1','2','3','4','5'];
// var wordsToRemove = ['1','2','3'];

const find_Duplicate = (arr1, arr2) => {
    let dub = [];
    let obj = {};
    //  dumbing all the array elem in obj
    arr1.forEach((item) => {
      if (obj[item]) {
        obj[item] += 1;
      } else {
        obj[item] = 1;
      }
    });
  
    //   looping on second array and checking that if the object key map with array item  it means it is duplicate
    arr2.forEach((item) => {
      if (obj[item]) {
        dub.push(item);
      }
    });
  
    return dub;
  };
  
  const WordList = ['1','2','3','4','5']
  const Remove = ['1','2','3'];
  
  let result = find_Duplicate(WordList, Remove);
  console.log("the duplicates are:" , result); 
  // o/p - the duplicates are [ '1', '2', '3' ] 
