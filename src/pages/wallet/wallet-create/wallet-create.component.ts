import {Component, OnInit} from '@angular/core';
import {BaseComponent} from './../../../app/BaseComponent';
import {Util} from "../../../providers/Util";
import {DialogConfig} from "ngx-weui";
import {Logger} from "../../../providers/Logger";
//import {WalletManager} from "../../../providers/WalletManager";
import {MnemonicComponent} from "../../mnemonic/mnemonic.component";

@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  // styleUrls: ['./wallet-create.component.scss']
})
export class WalletCreateComponent extends BaseComponent implements OnInit {
 // @ViewChild('auto') autoAS: DialogComponent;
 // @ViewChild('mask') mask: MaskComponent;


  DEFCONFIG: DialogConfig = <DialogConfig>{
    title: this.getLanguageInstance()["text-pay-password"],
    content: '',
    skin: 'auto',
    type: 'prompt',
    cancel:  this.getLanguageInstance()["cancel"],
    confirm: this.getLanguageInstance()["confirm"] ,
    input: 'password',
  };

  payPasswordType = 0;

  wallet = {
    name: '',
    pwd: '',
    rePwd: '',
    singleAddress: false,
    payPassword:'' ,
    rePayPassword:''
  };

  defaultCointype = "Ela"

  ngOnInit() {
    this.setTitleByAssets('launcher-create-wallet');
  }

  onCreate() {
    if (Util.isNull(this.wallet.name)) {
      this.toast("text-wallet-name-validator");
      return;
    }
    if (!Util.password(this.wallet.payPassword)) {
      this.toast("text-pwd-validator");
      return;
    }
    if (this.wallet.payPassword != this.wallet.rePayPassword) {
      this.toast("text-wallet-repwd");
      return;
    }
    // this.onShowPassword();
    this.createWallet();
  }

  // onShowPassword() {
  //   this.dialogService.show(this.DEFCONFIG).subscribe((res)=>{this.onPayPassword(res,this)});
  // }

  // onPayPassword(res:any,tath:any){
  //     Logger.info(res.result);
  //     if(res.type == 'primary'){
  //       if(this.payPasswordType == 1){   //再次输入
  //         this.wallet.rePayPassword = res.result;
  //         if (this.wallet.payPassword != this.wallet.rePayPassword) {
  //           this.toast("text-wallet-repwd");
  //           this.dialogService.show(this.DEFCONFIG).subscribe((res)=>{this.onPayPassword(res,tath)});
  //         }else{
  //           this.payPasswordType = 0;
  //           this.createWallet();
  //         }
  //       }else{
  //         if(!ValidatorsUtil.password(res.result)){
  //           this.toast("text-pwd-validator");
  //           this.dialogService.show(this.DEFCONFIG).subscribe((res)=>{this.onPayPassword(res,tath)});
  //         }else{
  //           this.wallet.payPassword = res.result;
  //           this.payPasswordType = 1;
  //           this.DEFCONFIG.title = this.getLanguageInstance()["text-pay-repassword"];
  //           this.dialogService.show(this.DEFCONFIG).subscribe((res)=>{this.onPayPassword(res,tath)});
  //         }
  //       }
  //     }
  // }

  createWallet(){
    this.toastService.loading(this.getLanguageInstance()["text-wait"],0);
    this.toast('text-wallet-create-ok');
    // Master Wallet
    this.walletManager.createMasterWallet("1", this.getMnemonicLang(), (val) => {
      this.createSubWallet();
    });
  }

  createSubWallet(){
    // Sub Wallet
    this.walletManager.createSubWallet(this.defaultCointype,this.wallet.pwd, false, 0, (val)=>{
      this.localStorage.setWallet({
        'name': this.wallet.name
      });
      this.Go(MnemonicComponent, {payPassword: this.wallet.payPassword});
    });
  }


}
