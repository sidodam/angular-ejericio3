import { Component , ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colors';

  text = ""
  constructor(private el : ElementRef){

    
  }


  @HostListener('click' , ['$event']) manjear(){

    alert(this.el.nativeElement.innerText)
  }

  clickEvent(){

    return this.text = "Has pulsado el botón"
       
  }
  


}


