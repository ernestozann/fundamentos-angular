import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Eru';
  age = 22;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    age: 22,
    name: "ernestozann",
    avatar: 'https://source.unsplash.com/random',
  }

  emojis: string[] = [ '😂' , '🐦', '🐳','🌮', '💚']
  newName: string = ''

  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toogleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  addAge() {
    this.person.age += 1;
  }
  decreaseAge() {
    this.person.age -= 1;
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  onWrite(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addEmoji() {
    this.emojis.push(this.newName)
    this.newName = ''
  }
  removeEmoji(index:number) {
    this.emojis.splice(index, 1)
  }
}
