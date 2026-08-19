let score = "abc1233";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN(not an number)

// number conversion

// string 
let variable= "anurag"

let valueConversion = Number(variable);
console.log(typeof valueConversion);

console.log(valueConversion); //output is Nan

// number
let char =12344

let value = Number(char)
console.log(typeof value)
console.log(value); //output is 12344

// null
let a= null
let b = Number(a)
console.log(typeof b);
console.log(b); //output is 0

//undefined
let c = undefined
let d = Number(c)
console.log(typeof c);
console.log(c); //output is undefined

//boolean
let e = true
let f = Number(e)
console.log(typeof f);
console.log(f); //output is 1

let g = false
let h = Number(g)
console.log(typeof h);
console.log(h); //output is 0





// conversion to boolean
//Number
let IsLoggedIn = 1

let booleanIsLoggedIn = Boolean(IsLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn); //output is true

let IsLoggedOut = 0

let booleanIsLoggedOut = Boolean(IsLoggedOut);
console.log(booleanIsLoggedOut);
console.log(typeof booleanIsLoggedOut); //output is false

//String
let name = "anurag"

let booleanName = Boolean(name);
console.log(booleanName);
console.log(typeof booleanName); //output is true

let emptyString = ""

let booleanEmptyString = Boolean(emptyString);
console.log(booleanEmptyString);
console.log(typeof booleanEmptyString); //output is false   

//null
let nullValue = null

let booleanNullValue = Boolean(nullValue);
console.log(booleanNullValue);
console.log(typeof booleanNullValue); //output is false

//undefined
let undefinedValue = undefined  

let booleanUndefinedValue = Boolean(undefinedValue);
console.log(booleanUndefinedValue);
console.log(typeof booleanUndefinedValue); //output is false

//number
let valuenum = 123
let numValue = Boolean(valuenum)   
console.log(numValue);
console.log(typeof numValue); //output is true

// 1=true   
// 0=false  
// number=true
// string=true
// null=false
// undefined=false





//string conversion
//number
let numberValue = 123

let stringNumberValue = String(numberValue);
console.log(stringNumberValue); //output is 123
console.log(typeof stringNumberValue); //output is string

//boolean
let booleanValue = true

let stringBooleanValue = String(booleanValue);
console.log(stringBooleanValue); //output is true
console.log(typeof stringBooleanValue); //output is string

//null
let nullValueString = null

let stringNullValue = String(nullValueString);
console.log(stringNullValue); //output is null
console.log(typeof stringNullValue); //output is string

//undefined
let undefinedValueString = undefined

let stringUndefinedValue = String(undefinedValueString);
console.log(stringUndefinedValue); //output is undefined
console.log(typeof stringUndefinedValue); //output is string       

//NaN
let nanValue = NaN

let stringNanValue = String(nanValue);
console.log(stringNanValue); //output is NaN
console.log(typeof stringNanValue); //output is string  

// for all datatype conversion to string all give output is string 