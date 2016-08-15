import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs'

import {ExampleModel} from '../models/index'

@Injectable()
export class HelloWorldService {
    constructor(private _http:Http){}
    
    getHello(): Observable<ExampleModel> {
        return this._http.get("/api/hello").map(e => e.json());
    }
}