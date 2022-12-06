import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms' ;

import { Router } from '@angular/router';
import { Produto } from '../models/produto';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formCadastro: FormGroup;
  produto: Produto = new Produto();

  mensagens = {
    nomep: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    descricao: [
      { tipo: 'required', mensagem: 'A descrição é obirgatória' },
    ],
    validade: [
      { tipo: 'required', mensagem: 'O campo validade é obrigatório.' },
      { tipo: 'maxlength', mensagem: 'Validade deve ter no máximo 10 caracteres' },
      { tipo: 'minLength', mensagem: 'Validade deve ter no mínimo 8 caracteres'}
    ],
    preco: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar o preço.' },
    ],
  };

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formCadastro = this.formBuilder.group({
      nomep: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: ['', Validators.compose([Validators.required])],
      validade: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(8)])],
      preco: ['', Validators.compose([Validators.required])]

    }
    );
   }

  ngOnInit() {
  }

  async salvarCadastro(){
    if (this.formCadastro.valid){
      this.produto.nomep = this.formCadastro.value.nomep;
      this.produto.descricao = this.formCadastro.value.descricao;
      this.produto.validade = this.formCadastro.value.validade;
      this.produto.preco = this.formCadastro.value.preco;
      await this.storageService.set(this.produto.nomep, this.produto);
      this.route.navigateByUrl('/tabs/tab1');
    }
    else{
      alert('Formulário Inválido');
    }
  }

}
