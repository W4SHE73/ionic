import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { LoadingController } from '@ionic/angular';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.page.html',
  styleUrls: ['./divisas.page.scss'],
})

export class DivisasPage {
  symbols: any;
  codeCur: any = '';
  descCur: any;
  seleCur: any;
  convData: any = [];
  ratesData: any = [];
  curAmount: any = '1.00';
  isOpen: boolean;
 
  constructor(
    private menuController: MenuController, private navController:NavController,
    private dataServer: DataService,
    public loader: LoadingController ){
      this.isOpen = false;
    }
 
  ngOnInit() {
    this.getSymbols();
  }
 
  async getSymbols() {
    await this.dataServer.getSymbols().then((data: any) => {
      this.symbols = [];
      for (var key in data.symbols) {
        if (data.symbols.hasOwnProperty(key)) {
          this.symbols.push({ "code": data.symbols[key].code, "desc": data.symbols[key].description });
        }
      }
    });
  }
 
  async convertCurrency(base, amount) {
    await this.dataServer.convCur(base, amount).then((data: any) => {
      this.ratesData = Object.keys(data.rates)
        .map(key => ({ name: key, value: data.rates[key] }))
    });
    this.convData = [];
    for (let i = 0; i < this.symbols.length; i++) {
      this.convData.push({
        ...this.symbols[i],
        ...(this.ratesData.find((itmInner) => itmInner.name === this.symbols[i].code))
      }
      );
    }
  }
  mostrarMenu(){
    this.menuController.open('menu-content');
    this.menuController.enable(true,'menu-content');
  }
  async getRates() {
    const loading = await this.loader.create({
      message: 'Changing the currency',
      duration: 2000
    });
    await loading.present();
    await this.convertCurrency(this.codeCur, this.curAmount);
  }
 
  selectedCur(ev) {
    let selCur = ev.detail.value;
    let a = selCur.split("|");
    this.codeCur = a[0];
    this.descCur = a[1];
    this.seleCur = a[0] + ' - ' + a[1];
  }
}


