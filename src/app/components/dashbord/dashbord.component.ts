import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-dashbord',
    standalone: true,
    templateUrl: './dashbord.component.html',
    styleUrl: './dashbord.component.scss',
    imports: [
        CarouselModule,
        ButtonModule,
        FooterComponent
    ]
})
export class DashbordComponent {
 
  }

 


