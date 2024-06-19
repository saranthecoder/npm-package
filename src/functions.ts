// This is function
import { SayHElloProps } from "./types";

export function sayHello({firstName, lastName, age}:SayHElloProps){

    console.log(`Your firstname is ${firstName}`);

    if(lastName)
        console.log(`Your lastname is ${lastName}`);

    if(age)
        console.log(`Your age is ${age}`);
}