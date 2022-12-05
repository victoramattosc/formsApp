import { Component } from '@angular/core';
import { Produto } from '../models/produto';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaProdutos: Produto[] = [];

  constructor(private storageService: StorageService) {}

  async buscarProdutos(){
    this.listaProdutos = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarProdutos();
  }

  async excluirProdutos(nomep: string){
    await this.storageService.remove(nomep);
    this.buscarProdutos();
  }

}
