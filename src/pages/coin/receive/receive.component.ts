import {Component, OnInit} from '@angular/core';
import {BaseComponent} from './../../../app/BaseComponent';
import {QrcodeModel} from './../../../models/qrcode.model';
import {HeaderComponent, Header} from './../../../app/header/app.header';
import {Logger} from "../../../providers/Logger";


@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  // styleUrls: ['./receive.component.scss']
})
export class ReceiveComponent extends BaseComponent implements OnInit {


  code: QrcodeModel;

  ngOnInit() {
    this.setTitleByAssets('text-receive');
    this.code = new QrcodeModel();
    this.code.qrcode = '测试文字';
    // 'EehM1A6MnVZxs6qH8AEA1pSLeW4RxmqhuU'

    this.setRightIcon('./assets/images/icon/icon-s.svg', () => {
      Logger.info('分享');
    });


  }


}
