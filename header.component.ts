import { Component,OnInit} from '@angular/core';
import { ServicesService } from '../services.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
   public totalitem:number=0;
   public searchTerm:string='';
   allproducts:any;
   
   constructor(private cartservice:CartService){}

   ngOnInit(): void {
  this.cartservice.getproducts()
  .subscribe((res)=>{
   this.totalitem=res.length;
  })
  
   
}
search(event:any){
  this.searchTerm=(event.target as HTMLInputElement).value
  console.log(this.searchTerm);
  this.cartservice.search.next(this.searchTerm);
}


}
