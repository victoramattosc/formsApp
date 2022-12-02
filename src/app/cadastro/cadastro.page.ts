import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms' ;

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formCadastro: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    descricao: [
      { tipo: 'required', mensagem: 'A descrição é obirgatória' },
    ],
    validade: [
      { tipo: 'required', mensagem: 'O campo validade é obrigatório.' },
    ],
    preco: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar o preço.' },
    ],
  };

  constructor(private formBuilder: FormBuilder) {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: ['', Validators.compose([Validators.required])],
      validade: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      preco: ['', Validators.compose([Validators.required])]

    }
    );
   }

  ngOnInit() {
  }

  salvarCadastro(){
    console.log('Formulário: ', this.formCadastro.valid);
  }
}
