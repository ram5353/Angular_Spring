import { Component, OnInit } from '@angular/core';

import {HelloService} from '../hello.service';
import { Asset } from '../asset';
import {FormBuilder, FormGroup, FormGroupName} from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})





export class FirstComponent implements OnInit {
  assetServiceDetails: Asset;
  getAsset: FormGroup;
  id: number;

  constructor(private service: HelloService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
  this.createAssetForm();
  }

  createAssetForm() {
    this.getAsset = this.formBuilder.group({
      id: [''],
      name: ['']
    });
   }

  showData() {
     // this.service.getData().subscribe(s => this.s = s);
     // console.log(this.s);

    const asset_model = new Asset();
    //asset_model.id = this.getAsset.controls.id.value.trim();
    this.service.getData(this.id).subscribe(
      assetDetails => {
        if (assetDetails) {
          this.assetServiceDetails = assetDetails;
          console.log(this.assetServiceDetails);
        }
      }

    );



  }

}
