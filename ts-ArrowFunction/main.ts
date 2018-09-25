//arrow functions (C# lambda expression)

//previous
let log = function(message){
    console.log(message);
}

//now
let doLog = (message) => {
    console.log(message);
}

//if only one line 
let doLog2 = (message) => console.log(message);

//if no parameter 
let doLog3 = () => console.log();


