import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servico01',
  templateUrl: './exemplo-servico01.component.html',
  styleUrls: ['./exemplo-servico01.component.css'],
})
export class ExemploServico01Component {
  nome = '';

  constructor(private logger: LoggerService) {}

  adicionarNome() {
    this.logger.logar(`o nome ${this.nome} foi adicionado`);
  }
}
