import { Component} from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {


  toggleForm() {
    this.formulary = !this.formulary;
  }

  selectedImages: string[] = [];
  formulary: boolean = false;

  ngOnInit() {
    const storedImages = localStorage.getItem('selectedImages');
    if (storedImages) {
      this.selectedImages = JSON.parse(storedImages);
    }
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageURL = reader.result as string;
      this.selectedImages.push(imageURL);
    };

    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.formulary = false;   
    localStorage.setItem('selectedImages', JSON.stringify(this.selectedImages));
  }
}
