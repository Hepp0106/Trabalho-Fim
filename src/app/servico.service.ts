import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  colecaoEnderecos: any[] = [];
  key = '';

  constructor() {}

  salvarPets(nomeP: string, idadeP: string) {
    const dados = {
      nome: nomeP,
      idadeP: idadeP,
    };

    const values = localStorage.getItem(this.key);
    if (!values) {
      this.colecaoEnderecos.push(dados);
      localStorage.setItem(this.key, JSON.stringify(this.colecaoEnderecos));
    } else {
      const colecao: any[] = this.listar()!;
      colecao.push(dados);
      localStorage.setItem(this.key, JSON.stringify(colecao));
    }
  }

  listar() {
    const values = localStorage.getItem(this.key);
    if (!values) return;

    const colecao: any[] = JSON.parse(values);
    return colecao;
  }
}
