const readlineSync = require('readline-sync');

entry=readlineSync.question("Give me number \n")
while(entry>=0){
    console.log(entry);
    entry--
    if (entry<0){
      console.log("GO!")
    }
    if (entry<0){
      entry=String(readlineSync.question("Give me a number \n"))
      console.log("Quit Program !")
    }
}
