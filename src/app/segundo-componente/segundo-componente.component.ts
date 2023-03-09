import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css'],
})
export class SegundoComponenteComponent {
  nome = 'Jorge Saavedra';
  dataNascimento = '2001/11/04';
  urlImagem = '/assets/jorge.jpg';

  mostrarDataNascimento() {
    alert(`a data de nascimento de Jorge é: ${this.dataNascimento}`);
  }
}
