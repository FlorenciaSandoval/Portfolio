import { Component } from '@angular/core';

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.css']
})
export class IllustrationsComponent {

  isActive: boolean = false;
  isActive1:boolean=false; 
  isActive2:boolean=false; 

  popup(){
    this.isActive = !this.isActive;
   
 
  }

  popup1(){
    this.isActive1 = !this.isActive1;
   
 
  }

  popup2(){
    this.isActive2 = !this.isActive2;
   
 
  }

}
