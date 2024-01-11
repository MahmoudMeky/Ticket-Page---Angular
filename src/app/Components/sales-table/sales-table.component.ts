import { Component } from "@angular/core";

@Component({
  selector: "app-sales-table",
  templateUrl: "./sales-table.component.html",
  styleUrls: ["./sales-table.component.scss"],
})
export class SalesTableComponent {
  ticketSales: ticket[];
  first: number = 0;
  rows: number = 10;
  constructor() {
    this.ticketSales = [
      {
        id: 1,
        userName: "أحمد محمود",
        userImg:
          "https://static.vecteezy.com/system/resources/previews/004/819/327/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
        userPhoneNum: "01010595485",
        ticketNo: "C-101",
        price: 40,
        cinemas: [
          "سينما مصر",
          "مول العرب",
          "برج الأطنان",
          "سرايا القبة",
          "صيدناوي",
          "برج العرب",
        ],
        persons: 1,
        purchaseTimes: 1,
        fileName: "تذكرة رقم 45",
        filePath: "https://google.com",
        fileSize: 9437184,
      },
      {
        id: 2,
        userName: "أحمد محمود",
        userImg:
          "https://static.vecteezy.com/system/resources/previews/004/819/327/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
        userPhoneNum: "01010595485",
        ticketNo: "C-101",
        price: 40,
        cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
        persons: 1,
        purchaseTimes: 2,
        fileName: "تذكرة رقم 45",
        filePath: "https://google.com",
        fileSize: 9437184,
      },
      {
        id: 3,
        userName: "أحمد محمود",
        userImg:
          "https://static.vecteezy.com/system/resources/previews/004/819/327/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
        userPhoneNum: "01010595485",
        ticketNo: "C-101",
        price: 40,
        cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
        persons: 1,
        purchaseTimes: 3,
        fileName: "تذكرة رقم 45",
        filePath: "https://google.com",
        fileSize: 9437184,
      },
      {
        id: 4,
        userName: "أحمد محمود",
        userImg:
          "https://static.vecteezy.com/system/resources/previews/004/819/327/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
        userPhoneNum: "01010595485",
        ticketNo: "C-101",
        price: 40,
        cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
        persons: 1,
        purchaseTimes: 4,
        fileName: "تذكرة رقم 45",
        filePath: "https://google.com",
        fileSize: 9437184,
      },
      {
        id: 5,
        userName: "أحمد محمود",
        userImg:
          "https://static.vecteezy.com/system/resources/previews/004/819/327/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
        userPhoneNum: "01010595485",
        ticketNo: "C-101",
        price: 40,
        cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
        persons: 1,
        purchaseTimes: 1,
        fileName: "تذكرة رقم 45",
        filePath: "https://google.com",
        fileSize: 9437184,
      },
    ];
  }

  // cinemaNameCutter(cinemas: string[]):string[] {
  //   let restCinemas: string[] = [];
  //   if (cinemas.length < 4) {
  //     return
  //   }
  //   cinemas.splice(0,4);
  //   return [cinemas,restCinemas]
  // }
}

interface ticket {
  id: number;
  userName: string;
  userPhoneNum?: string;
  userImg?: string;
  ticketNo: string;
  price: number;
  cinemas: string[];
  persons: number;
  purchaseTimes: number;
  fileName?: string;
  filePath: string;
  fileSize: number;
}
