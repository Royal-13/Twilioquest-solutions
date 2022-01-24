

function scan(freightItems) {
    let cbindex = [];
    let count =-1;
    freightItems.forEach(function(item){
        count ++;
        if(item == 'contraband'){
            cbindex.push(count)
        }        
    })
    return cbindex
  }