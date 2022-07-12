import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  id!: string;
  info: any;

  constructor(private activeRoute: ActivatedRoute, private service: DataService) {}


  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.service.getCharacter(this.id).subscribe((data)=>{
      this.info= data;
    })
  }

}
