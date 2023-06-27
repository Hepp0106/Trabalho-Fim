import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  colecaoEnderecos: any[] = [];
  key = '';
  public url = 'https://dog.ceo/api/breeds/image/random';
  public imagem = '';
  public result: any = {};
  public imagemP = '';

  constructor(private http: HttpClient) {}

  salvarPets(nomeP: string, idadeP: string) {
    this.gerarImg();
    const dados = {
      nomeP: nomeP,
      idadeP: idadeP,
      imagemP: this.imagem,
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

  deletar(params: any) {
    const value = this.listar();
    const result = value?.filter((endereco) => endereco.nomeP !== params);
    localStorage.setItem(this.key, JSON.stringify(result));
  }

   gerarImg() {
      this.localizaImgPet().subscribe(
      async (resp) => {
        this.result = resp;
        this.imagem = await this.result.message;
        console.log(this.imagem);
      },
      (erro) => {}
    );
  }

   localizaImgPet() {
    return  this.http.get(this.url);
  }
}
