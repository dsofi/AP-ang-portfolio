import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InterfaceService } from 'src/app/services/interface.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  @Input() objeto:any;

  miExperiencia:any[]=[];

  subscription?:Subscription; 
  mySubscription: any;
 
  update = false;

  userLogueado: boolean = false;

  constructor(private servPortfolio: PortfolioService, private servInterface: InterfaceService, private cdr: ChangeDetectorRef,
    private router: Router, private activatedRoute: ActivatedRoute) { 
    this.subscription = this.servPortfolio.onLogueo().subscribe((value) => 
      this.userLogueado = value);
  }


 

  ngOnInit(): void {
    this.servPortfolio.getGeneral("experiencia").subscribe(data=>{
      this.miExperiencia=data});
      // this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }



  reset(event: any): void {
    this.servInterface.toggleShowEdit(event);
    
  }

  // reset(event: any): void {
  //   this.router.navigate([this.router.url]).then(() => {
  //     this.servInterface.toggleShowEdit(event);
  //     this.servPortfolio.loguearse();
  //     this.servPortfolio.onLogueo();
  //   });
  // }
  
 


  chusmear(){
    console.log("ESTADO DEL USER en exp : " + this.userLogueado)
  }


}
