import {Component} from '@angular/core';

@Component({
    selector: "helloworld",
    //template: `<h1>Hello World</h1>`,
    templateUrl:"./primer.component.html",
    //styles: ["h1 { background:#000;color:#fff; }"]
    styleUrls:["./primer.component.css"]
})
export class HelloWorld{
    title = "Welcome to angular";

}