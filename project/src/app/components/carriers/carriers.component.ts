import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Carrier } from '../../interfaces/common.interfaces';

@Component({
  selector: 'app-carriers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carriers.component.html',
  styleUrl: './carriers.component.scss'
})
export class CarriersComponent implements OnInit {
  carriers: Carrier[] = [];
  filteredCarriers: Carrier[] = [];
  searchTerm: string = '';
  serviceFilter: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCarriers().subscribe(carriers => {
      this.carriers = carriers;
      this.filteredCarriers = carriers;
    });
  }

  filterCarriers() {
    this.filteredCarriers = this.carriers.filter(carrier => {
      const matchesSearch = carrier.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           carrier.serviceType.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesService = !this.serviceFilter || carrier.serviceType === this.serviceFilter;
      return matchesSearch && matchesService;
    });
  }
}