import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css'],
})
export class ComponenteFilhoComponent {
  @Input() sobrenome = '';
  @Output() mostrarNome = new EventEmitter();

  nome = '';

  mostrarNomecompleto(nomeCompleto: any) {
    alert(`O nome completo é: ${nomeCompleto}`);
  }
}
