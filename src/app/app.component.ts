import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentSelectionsComponent } from './shared/components/current-selections/current-selections.component';
import { QlikFilterComponent } from './shared/components/qlik-filter/qlik-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CurrentSelectionsComponent, QlikFilterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filter = {
    fieldName: 'Product Sub Group Desc',
    collapsible: false,
    height: 200,
    showSearch: false,
  };
  title = 'stardust-test';
}
