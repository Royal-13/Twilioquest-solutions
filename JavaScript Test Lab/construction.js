const firstname = process.argv[2];
function construct(firstname) {
    let person = {
        name: firstname ,
        material: "human",
        assemble: true,
        duration: 1000
    };
    
    return person;
  }
  