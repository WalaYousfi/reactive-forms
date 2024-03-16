import { Component } from '@angular/core';
type Color= {id:number, name:string};
@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrl: './trial.component.css'
})


export class TrialComponent {

selectedColor: Color| undefined

colors: Color[]= [
  {id: 1, name: 'red'},
  {id: 2, name: 'green'},
  {id:3, name : 'blue'},
]


  onSelectColor(color:any){

console.log(color)
  }
  
   

  // function handleChange(newValue:string): void {
    
  // }

  log(x: any){console.log(x);}


}
