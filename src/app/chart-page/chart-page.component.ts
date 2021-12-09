import { Subscription } from 'rxjs';
import { LottoService } from './../lotto.service';
import { Component, OnInit } from '@angular/core';
import { Drawer } from '../models/drawer.model';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit {

  drawNumbers!: number[];
  chartready: Boolean = false;
  constructor(private lottoService: LottoService) {
  }

  ngOnInit(): void {
    this.lottoService.getNumbersOfDraws()
  }

  drawChart() {
    this.lottoService.drawNums$.subscribe(res => {
      if(!res) return;
      this.drawNumbers = res;
      this.chartready = true;
      const target = document.getElementById("chart_1");
    if(target ==null){
      return
    }
    const drawer = new Drawer();
    drawer.draw(target as HTMLCanvasElement, this.drawNumbers);
    })
  }

}
