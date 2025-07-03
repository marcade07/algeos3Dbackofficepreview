import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ExportOption } from '../../interfaces/common.interfaces';

@Component({
  selector: 'app-data-export',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-export.component.html',
  styleUrl: './data-export.component.scss'
})
export class DataExportComponent implements OnInit {
  exportOptions: ExportOption[] = [];
  startDate: string = '';
  endDate: string = '';
  exportFormat: string = 'csv';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getExportOptions().subscribe(options => {
      this.exportOptions = options;
    });

    // Set default date range (last 30 days)
    const today = new Date();
    const thirtyDaysAgo = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
    
    this.endDate = today.toISOString().split('T')[0];
    this.startDate = thirtyDaysAgo.toISOString().split('T')[0];
  }

  exportData(option: ExportOption) {
    console.log(`Exporting ${option.title} as ${this.exportFormat} from ${this.startDate} to ${this.endDate}`);
    // In a real app, this would trigger the export process
  }
}