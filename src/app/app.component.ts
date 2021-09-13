import {Component, OnInit, TemplateRef} from '@angular/core';
import {ApiService} from "./api.service";
import {NgxSpinnerService} from "ngx-spinner";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: {
    title: string,
    body: string,
    pets: Array<any>
  };
  modalRef?: BsModalRef;

  constructor(
    private api: ApiService,
    private spinner: NgxSpinnerService,
    private modalService: BsModalService
  ) {
    this.data = {
      pets: [],
      body: '',
      title: ''
    }
  }

  ngOnInit() {

  }

  getData() {
    this.spinner.show();
    this.api.getCorgis()
      .subscribe((resp: any) => {
        this.data = resp.data.content;
        this.spinner.hide();
      })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-xl'});
  }
}
