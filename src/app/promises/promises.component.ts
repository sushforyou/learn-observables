import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent {

  ngOnInit():void {

    // let buyLaptop = new Promise(function(resolve, reject) {
    //   resolve('Primise is resolved');
    // });
    let buyLaptop = new Promise((resolve, reject) => {
      //resolve('Primise is resolved');
      reject('Primise is REJECTED');
    });
   
    buyLaptop.then(res => {
      console.log('Then code',res);
    }).catch (res =>{
      console.log('Catch code',res);
    })
  }
}
