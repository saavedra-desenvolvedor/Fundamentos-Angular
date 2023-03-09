import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css'],
})
export class SegundoComponenteComponent {
  nome = 'Maria Oliveira';
  dataNascimento = '2001/11/04';
  urlImagem = '/assets/jesus.jpg';
}
