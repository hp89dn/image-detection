import { Component, HostBinding, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpointsService, NbMediaBreakpoint } from '@nebular/theme';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnDestroy {

  
  @HostBinding('class.expanded')
  private expanded: boolean;
  private selected: number;

  isDarkTheme: boolean;

  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;
  themeChangeSubscription: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([, newValue]) => {
        this.breakpoint = newValue;
      });

    this.themeChangeSubscription = this.themeService.onThemeChange()
      .pipe(map(({ name }) => name === 'cosmic' || name === 'dark'))
      .subscribe((isDark: boolean) => this.isDarkTheme = isDark);
  }

  select(roomNumber) {
    if (this.isSelected(roomNumber)) {
      this.expand();
    } else {
      this.collapse();
    }

    this.selected = roomNumber;
  }

  expand() {
    this.expanded = true;
  }

  collapse() {
    this.expanded = false;
  }

  isCollapsed() {
    return !this.expanded;
  }

  private isSelected(roomNumber): boolean {
    return this.selected === roomNumber;
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
    this.themeChangeSubscription.unsubscribe();
  }

}
