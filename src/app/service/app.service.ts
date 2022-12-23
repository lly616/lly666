import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  modalVisible: boolean = false;
  constructor() { }

  open() {
    this.modalVisible = true;
  }

  close() {
    this.modalVisible = false;
  }

  modalToggle() {
    this.modalVisible = !this.modalVisible;
  }
}
