import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList:any;
  public filtercategory:any;
  searchkey:string="";

  constructor(private api:ApiService,private cartservice:CartService){}
 ngOnInit(): void {
  this.api.getproducts()
  .subscribe(res=>{
    this.productList=res;
    this.filtercategory=res;

    this.productList.forEach((a:any)=>{
      if(a.category==="women's clothing"||a.category==="men's clothing"){
        a.category="fashion"
      }
      Object.assign(a,{quantity:1,total:a.price});
    });
          console.log(this.productList)
  });
  this.cartservice.search
  .subscribe((val:any)=>{
    this.searchkey=val;
  })

   
}
addtocart(item:any){
  this.cartservice.addtocart(item);

}
filter(category:string){
  this.filtercategory=this.productList
  .filter((a:any)=>{
          if(a.category==category||category==''){
            return a;
          }
  })

}
}
  





  

