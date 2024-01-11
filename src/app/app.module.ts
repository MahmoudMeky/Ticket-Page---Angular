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
import { ButtonComponent } from "./Components/Shared/button/button.component";
import { TooltipModule } from "primeng/tooltip";
import { SalesTableComponent } from "./Components/sales-table/sales-table.component";
import { TableModule } from "primeng/table";
import { PaginatorModule } from "primeng/paginator";
import { FileSizeInMBPipe } from './Pipes/file-size-in-mb.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TicketTitleComponent,
    ChartComponent,
    QrCodeComponent,
    ButtonComponent,
    SalesTableComponent,
    FileSizeInMBPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    ChartModule,
    PaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
