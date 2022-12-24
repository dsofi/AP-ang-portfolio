import { Component, OnInit } from '@angular/core';
import { InterfaceService } from 'src/app/services/interface.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {




  constructor(private servPortfolio:PortfolioService, private servInterface:InterfaceService) { }

  ngOnInit(): void {
    
  }

  
}
