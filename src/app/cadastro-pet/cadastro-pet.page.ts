import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-cadastro-pet',
  templateUrl: './cadastro-pet.page.html',
  styleUrls: ['./cadastro-pet.page.scss'],
})
export class CadastroPetPage implements OnInit {
  endereco ={
    nomep: '',
    idadep: '',
    imagemp: ''

  };
  public animais: any[]= [];

  constructor(
    public alerta: AlertController,
    public nav: NavController,
    public servicos: ServicoService
  ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.carregaDados();
  }

  async voltar() {
    const voltando = await this.alerta.create({
       header: 'ATENÇÃO!',
       message: 'Deseja voltar para cadastrar um novo!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            
            // localStorage.clear();

            this.nav.navigateForward('/');
          },
        },
      ],
    });
    await voltando.present();
  }

  carregaDados() {
    if (this.servicos.listar()) {
      this.animais = this.servicos.listar()!;
      console.log(this.animais)
      if (this.animais.length == 0) {
         this.voltar();
        
      }
    }
  }
  deletar(nomeP: string) {
    this.servicos.deletar(nomeP);
    this.carregaDados();
  }

}
