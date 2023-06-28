import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
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
    Idade: ''
    
  };

  LabelBotao = 'Cadastrar';
  constructor(public nav: NavController, public servico: ServicoService) {}

  ionViewDidEnter(){
    this.LimpaDado();
  }

  salvamento() {
    this.servico.salvarPets(this.endereco.Nome, this.endereco.Idade);
  }

  cadastrar() {
    if (this.endereco.Nome == '' || this.endereco.Idade == '') {
      alert('Preencher os campos');

    } else {
      this.salvamento();
      
      this.nav.navigateForward('cadastro-pet')
    
      
    }
  }

  LimpaDado() {
    this.LabelBotao = 'Cadastrar';
    this.endereco.Nome='';
    this.endereco.Idade='';

  }
}
