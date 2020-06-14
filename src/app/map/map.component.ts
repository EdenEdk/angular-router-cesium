import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('cesiumContainer') cesiumContainer
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
	  const viewer = new Cesium.Viewer(this.cesiumContainer.nativeElement);
  }
}
