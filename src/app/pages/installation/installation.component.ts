import { Component, OnInit } from '@angular/core';
import { ISchema } from '@next-gen/formular-engine';
import { schema1 } from 'src/app/schemas/schema1'
import schema1Str from 'src/app/compiledSchema/comp-schema1'

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit {
  Schema: ISchema = schema1
  SchemaStr: string = schema1Str

  constructor() { }

  ngOnInit(): void {
  }

}
