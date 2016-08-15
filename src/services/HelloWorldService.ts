import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {ExampleModel} from '../models/index'

@Injectable()
export class HelloWorldService {
    getHello(): ExampleModel {
        return new ExampleModel("Hello", "World");
    }
}