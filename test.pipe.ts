import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(show:string,param1:string,param2:string):string {
    
   
   
    console.log("param1")
    console.log("param2")
    return "movie"
   
  }
  

}
