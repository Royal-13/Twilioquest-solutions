const firstValue = process.argv[2];
const secondValue = process.argv[3];

const string1= firstValue.toLowerCase();
const string2= secondValue.toLowerCase();

if(string2 > string1){
    console.log('-1');
}
else if(string2 == string1){
    console.log('0');
}
else{
    console.log('1');
}