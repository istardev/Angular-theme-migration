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
  leftColContent = [
    {
      header: FeatureContent.featureHeader1,
      desc: FeatureContent.featureDescription1
    },
    {
      header: FeatureContent.featureHeader2,
      desc: FeatureContent.featureDescription2
    }
  ];
 
  rightColContent = [
    {
      header: FeatureContent.featureHeader3,
      desc: FeatureContent.featureDescription3
    },
    {
      header: FeatureContent.featureHeader4,
      desc: FeatureContent.featureDescription4
    }
  ];

  constructor() {}

  ngOnInit(): void {
    
  }
}
