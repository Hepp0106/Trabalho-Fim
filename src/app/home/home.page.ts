import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dados: any = {};
  endereco = {
    Nome: '',
    Idade: '',
  };

  LabelBotao = 'Cadastrar';
  constructor(
    public mensagem: ToastController,
    public nav: NavController,
    public servico: ServicoService
  ) {}

  ionViewDidEnter() {
    this.LimpaDado();
  }

  salvamento() {
    this.servico.salvarPets(this.endereco.Nome, this.endereco.Idade);
  }

  cadastrar() {
    if (this.endereco.Nome == '' || this.endereco.Idade == '') {
      this.exibeToast('Preenche os campos necessáros', 'danger');
    } else {
      this.salvamento();
      this.exibeToast('Cadastrado', 'success');
      this.nav.navigateForward('cadastro-pet');
    }
  }

  LimpaDado() {
    this.LabelBotao = 'Cadastrar';
    this.endereco.Nome = '';
    this.endereco.Idade = '';
  }

  async exibeToast(msg: string, cor: string) {
    const toast = await this.mensagem.create({
      message: msg,
      duration: 2000,
      position: 'top',
      animated: true,
      color: cor,
    });
    toast.present();
  }
}
