import { Component, OnInit } from '@angular/core';
import { BikeServiceService } from 'src/app/services/bike-service.service';
import { BikeService } from 'src/bikeService';

@Component({
  selector: 'app-bike-service',
  templateUrl: './bike-service.component.html',
  styleUrls: ['./bike-service.component.css']
})
export class BikeServiceComponent implements OnInit {
  bikeServices: BikeService[] = [];
  searchTerm: String = '';
  searchedServices:BikeService[] = [];


  constructor(private bikeServiceService: BikeServiceService) {}

  ngOnInit(): void {
    this.getBikeServices();
  }

  filterIncompleteServices(): void {
    this.bikeServices = this.bikeServices.filter(bikeService =>
      (bikeService.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
       bikeService.bikeModel.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
  }

  getBikeServices(){
    this.bikeServiceService.getPendingBikeServices().subscribe(
      (response) => {
        this.bikeServices = response;
        this.searchedServices = response;
        console.log("p: ",this.bikeServices);
        
      },
      (error) => {
        console.error('Error fetching bike Services:', error);
      }
    );

  }

  updateStatus(id: String, status: string): void {
    console.log("id: ",id);
    
    this.bikeServiceService.updateBikeServiceStatus(id, status).subscribe(
      (response) => {
        const bikeService = this.bikeServices.find(bike => bike.id === id);
        if (bikeService) {
          bikeService.serviceStatus = status; // Update status locally
        }
        if (status === 'COMPLETED') {
          this.bikeServices = this.bikeServices.filter(bike => bike.id !== id);
        }
      },
      (error) => {
        console.error('Error updating status:', error);
      }
    );
  }

  onSearchChange(): void {
    this.bikeServices = this.searchedServices;

    this.filterIncompleteServices();
// Re-filter when search term changes
  }
}
