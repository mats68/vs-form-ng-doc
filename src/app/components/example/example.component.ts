import { Component, OnInit, Input } from '@angular/core';
import { ISchema } from '@next-gen/formular-engine'

@Component({
  selector: 'mt-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  @Input() schema: ISchema
  @Input() schemaStr: string
  @Input() title: string
  ShowCode = false;
  constructor() { }

  ngOnInit(): void {
  }

  showCode() {
    this.ShowCode = !this.ShowCode
  }

}
