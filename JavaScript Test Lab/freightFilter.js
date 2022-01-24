function scanAndFilter(freightItems, forbiddenString) {
    return freightItems.filter(function(value){
        return forbiddenString!==value
    })
  }