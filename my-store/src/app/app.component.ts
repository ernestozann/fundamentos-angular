import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
