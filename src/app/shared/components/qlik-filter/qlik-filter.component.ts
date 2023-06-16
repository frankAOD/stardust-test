import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input,
} from '@angular/core';
import { from, take } from 'rxjs';
import { CommonModule } from '@angular/common';

import { QlikFilter } from '../../interfaces/qlik-filter.interface';
import { AppInitService } from '../../services/app-init.service';

@Component({
  selector: 'app-qlik-filter',
  templateUrl: './qlik-filter.component.html',
  styleUrls: ['./qlik-filter.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class QlikFilterComponent implements AfterViewInit {
  @Input() qlikFilterDefinition!: QlikFilter;

  isOpen = false;

  @ViewChild('qlikFilter') qlikFilter!: ElementRef;

  constructor(private appInitService: AppInitService) {}

  ngAfterViewInit(): void {
    const options = {
      search: this.qlikFilterDefinition.showSearch,
    };

    from(
      this.appInitService.qlikSelectionsInstance.field(
        this.qlikFilterDefinition.fieldName
      )
    )
      .pipe(take(1))
      .subscribe((field: any) => {
        field.mount(this.qlikFilter.nativeElement, options);
      });
  }
}
