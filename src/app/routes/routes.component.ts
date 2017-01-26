import { Component, OnInit } from '@angular/core';
import {DigitransitService} from "../services/digitransit.service";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  private apinVastaus: any = [];

  constructor(private digitransitService: DigitransitService) { }

  ngOnInit() {
    this.digitransitService.getRoutes('E1013')
      .subscribe(
        (res) => {
          this.apinVastaus = res.data.stops[0].patterns;
          console.log(res.data.stops[0].patterns[5].name);
          console.log(res.data.stops[0].patterns[5].route.longName);
        }
      );
  }
}
