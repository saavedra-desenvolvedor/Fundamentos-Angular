import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  mensagens: string[] = [];

  logar(mensagem: string) {
    console.log(mensagem);
    this.mensagens.push(mensagem);
  }
  exibeTodosLogs() {
    console.log(this.mensagens);
  }
}
