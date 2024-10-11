import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  data: any []=[];
  constructor (private apiService: ApiService){}

  ngOnInit(): void {
      this.llenarData();
  }

  llenarData() {
    this.apiService.getData().subscribe(response=> {
      this.data = response.datos;
      console.log(this.data);
    })
  }
}
