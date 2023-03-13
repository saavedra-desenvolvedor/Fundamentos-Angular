import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servico02',
  templateUrl: './exemplo-servico02.component.html',
  styleUrls: ['./exemplo-servico02.component.css'],
})
export class ExemploServico02Component {
  produto = '';

  constructor(public logger: LoggerService) {}

  adicionarProduto() {
    this.logger.logar(`o produto com o nome ${this.produto} foi adicionado`);
  }
}
