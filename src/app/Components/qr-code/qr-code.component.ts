import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-qr-code",
  templateUrl: "./qr-code.component.html",
  styleUrls: ["./qr-code.component.scss"],
})
export class QrCodeComponent {
  @ViewChild("link") linkElement: ElementRef;

  copyLink(): void {
    const link = this.linkElement.nativeElement.innerHTML;
    navigator.clipboard.writeText(link);
    alert(`Link: ${link} Copied to Clipboard successfully!`);
  }
}
