//type assertion

//solution 1

let message; //it's any
message = 'abc';
let endsWithC = (<string>message).endsWith('c'); //when use message. it doesn't have functions 
//so we need (<string>message) to make type assertion

//solution 2
let alternativeWay = (message as string).endsWith('c'); //when use message. it doesn't have functions 

//type assertion does not change the type of this variable at runtime