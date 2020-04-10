import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://facebook.com/huynhphuoc2000" target="_blank">Huỳnh Phước</a></b> 2020
    </span>
    <div class="socials">
      <a href="https://facebook.com/huynhphuoc2000" target="_blank" class="ion ion-social-facebook"></a>
    </div>
  `,
})
export class FooterComponent {
}
