import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input,
  OnDestroy,
} from '@angular/core';
import { AppInitService } from '../../services/app-init.service';
import { from, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-current-selections',
  templateUrl: './current-selections.component.html',
  styleUrls: ['./current-selections.component.scss'],
  standalone: true,
})
export class CurrentSelectionsComponent {
  @ViewChild('qlikSelectionsBar') qlikSelectionsBar!: ElementRef;
  destroy$ = new Subject<boolean>();

  qlikObject: any;

  constructor(private appInitService: AppInitService) {}

  ngAfterViewInit(): void {
    from(this.appInitService.qlikSelectionsInstance.selections()).subscribe(
      (selections: any) => {
        selections.mount(this.qlikSelectionsBar.nativeElement);
      }
    );
  }
  ngOnDestroy(): void {
    this.qlikObject.destroy();
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
