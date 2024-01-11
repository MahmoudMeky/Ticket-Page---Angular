import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "fileSizeInMB",
})
export class FileSizeInMBPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    let valueInMB = value / 1024 / 1024;
    return `${valueInMB}MB`;
  }
}
