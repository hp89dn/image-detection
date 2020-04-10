import { Component, OnInit, HostBinding } from "@angular/core";
import { UploadImageService } from "../services/upload-image.service";
import { ImageDetectionService } from "../services/image-detection.service";
import { NbToastrService } from '@nebular/theme';

import Swal from 'sweetalert2/dist/sweetalert2.js'


@Component({
  selector: "ngx-cv-image",
  templateUrl: "./cv-image.component.html",
  styleUrls: ["./cv-image.component.scss"],
})
export class CvImageComponent implements OnInit {
  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';
  constructor(
    private uploadImageService: UploadImageService,
    private imageDetectService: ImageDetectionService,
    private toastrService: NbToastrService
  ) {}
  UploadImagePath: any;
  UploadImageString: any;
  enString: string;
  viString: string;
  loading: boolean;
  ngOnInit(): void {}
  processFileProfileImage(files) {
    var reader = new FileReader();
    this.UploadImagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.UploadImageString = reader.result;
    };
  }

  getImageDetectionResult() {
    if(this.UploadImageString) {
      this.loading = true;
      this.enString = '';
      this.viString = '';
      this.showToast('top-right', 'primary', 'Đang Upload và lấy link ảnh.');
      this.uploadImageService
        .create({ base64Image: this.UploadImageString })
        .subscribe((res) => {
          this.showToast('top-right', 'primary', 'Bắt đầu phân tích và nhận diện.');
          this.imageDetectService
            .create({ imageUrl: JSON.parse(JSON.stringify(res)).imageURL })
            .subscribe((res) => {
              this.showToast('top-right', 'success', 'Done! Nhận diện thành công.');
              this.index = 0;
              this.loading = false;
              this.enString = JSON.parse(JSON.stringify(res)).en;
              this.viString = JSON.parse(JSON.stringify(res)).vi;
              Swal.fire({
                icon: 'success',
                title: 'Thành công...',
                text: 'Tiếng Việt: ' + this.viString,
                footer: 'English: ' + this.enString
              })
            });
        });
    } else {
      this.showToastDanger('top-right', 'danger', 'Chọn một hình ảnh.');
    }
    
  }
  showToast(position, status, text) {
    this.index += 1;
    this.toastrService.show(
      text,
      `Giai đoạn: ${this.index}`,
      { position, status });
  }
  showToastDanger(position, status, text) {
    this.toastrService.show(
      '',
      text,
      { position, status });
  }
  
}
