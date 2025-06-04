import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'trim',
    standalone: true 
})
export class TrimPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
       console.log(value);
       console.log(args); 
    }
}