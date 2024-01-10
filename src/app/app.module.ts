import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ButtonModule } from "primeng/button";

import { ChartModule } from "primeng/chart";

import { AppComponent } from "./app.component";
import { TicketTitleComponent } from "./Components/ticket-title/ticket-title.component";
import { ChartComponent } from "./Components/chart/chart.component";
import { QrCodeComponent } from "./Components/coupon/coupon.component";
import { SalesComponent } from "./Components/sales/sales.component";
import { ButtonComponent } from "./Components/Shared/button/button.component";
import { TooltipModule } from "primeng/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    TicketTitleComponent,
    ChartComponent,
    QrCodeComponent,
    SalesComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    TooltipModule,
    ButtonModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
