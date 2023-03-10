import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css'],
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id: 1, nome: "celular G", descricao: "celular grande", esgotado: true},
    {id: 2, nome: "celular M", esgotado: false},
    {id: 3, nome: "celular P", descricao: "celular pequeno", esgotado: true},
  ];
}
