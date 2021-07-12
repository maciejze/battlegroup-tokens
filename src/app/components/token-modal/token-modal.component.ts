import {Component, Input, OnInit} from '@angular/core';
import {Token} from "../token.model";

@Component({
  selector: 'app-token-modal',
  templateUrl: './token-modal.component.html',
  styleUrls: ['./token-modal.component.scss']
})
export class TokenModalComponent implements OnInit {

  @Input() token: Token = {};
  @Input() visibility = { visible: false };

  constructor() { }

  ngOnInit(): void {
  }

}
