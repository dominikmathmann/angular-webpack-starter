import {SomeClass} from './module1'

declare var require:any;
require("./style.css");

export function logMe() {
    var instance = new SomeClass("Hello World !! ", 123);
    console.log(instance.attr1)
}