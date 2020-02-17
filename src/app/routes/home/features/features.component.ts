import { Component, OnInit } from '@angular/core';
import { FeatureContent } from './features.content';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  phoneImg = FeatureContent.phoneImg;
  header = FeatureContent.header;
  subHeader1 = FeatureContent.subHeader1;
  subHeader2 = FeatureContent.subHeader2;

  featureHeader1 = FeatureContent.featureHeader1;
  featureDescription1 = FeatureContent.featureDescription1;
  featureHeader2 = FeatureContent.featureHeader2;
  featureDescription2 = FeatureContent.featureDescription2;
  featureHeader3 = FeatureContent.featureHeader3;
  featureDescription3 = FeatureContent.featureDescription3;
  featureHeader4 = FeatureContent.featureHeader4;
  featureDescription4 = FeatureContent.featureDescription4;

  constructor() {}

  ngOnInit(): void {}
}
