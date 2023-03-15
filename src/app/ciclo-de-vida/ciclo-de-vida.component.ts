import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css'],
})
export class CicloDeVidaComponent implements OnInit {
  horario = new Date();
  timer: any = null!;

  @Input() texto = '';

  ngOnInit() {
    console.log('O evento OnInit disparou');
    this.timer = setInterval(() => (this.horario = new Date()), 1000);
  }
  ngOnChanges(changes: SimpleChange): void {
    console.log(changes);
  }
}
