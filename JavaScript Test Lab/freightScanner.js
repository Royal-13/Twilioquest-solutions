function scan(freightItems) {
    let contrabandCount = 0;
  
    /*
    Replace this comment with your code.
  
    Your code needs to:
    - Loop through every item in the freightItems array
    - if the item is equal to "contraband", increase contrabandCount by one
  
    */
    var n = freightItems.length;
    for(let i=0;i<n;i++){
        if(freightItems[i] == 'contraband'){
            contrabandCount++;
        }
    }

    return contrabandCount;
  }