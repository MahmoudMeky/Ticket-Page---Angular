import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-coupon",
  templateUrl: "./coupon.component.html",
  styleUrls: ["./coupon.component.scss"],
})
export class QrCodeComponent {
  @ViewChild("link") linkElement: ElementRef;

  copyLink(): void {
    const link = this.linkElement.nativeElement.innerHTML;
    navigator.clipboard.writeText(link);
    alert(`Link: ${link} Copied to Clipboard successfully!`);
  }
}
