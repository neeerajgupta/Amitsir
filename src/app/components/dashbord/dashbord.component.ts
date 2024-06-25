import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-dashbord',
    standalone: true,
    templateUrl: './dashbord.component.html',
    styleUrl: './dashbord.component.scss',
    imports: [
        CarouselModule,
        ButtonModule,
        ImageModule,
        AutoCompleteModule,
        FormsModule,
        ReactiveFormsModule,
        FooterComponent
    ]
})
export class DashbordComponent {
    filteredData: string[] = [];
    dummyData: string[] = [];
    selectedItem: string | undefined;
  
    constructor() {}
  
    ngOnInit() {
      this.dummyData = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Fig',
        'Grape',
        'Kiwi',
        'Lemon',
        'Mango',
        'Orange',
        'Papaya',
        'Quince',
        'Raspberry',
        'Strawberry',
        'Tomato',
        'Ugli fruit',
        'Watermelon'
      ];
    }
  

    filterData(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.dummyData as any[]).length; i++) {
            let country = (this.dummyData as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredData = filtered;
    }
  }


