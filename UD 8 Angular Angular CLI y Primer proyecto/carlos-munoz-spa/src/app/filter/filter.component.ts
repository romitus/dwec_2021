import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Filtro } from '../functionsNotComponent/interfaz';
import Utils from '../functionsNotComponent/utils.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  @Input() allFiltersProp: Object;
  @Output() handleClick = new EventEmitter();

  provincias: Object;
  filtrosArray: Array<Filtro>;
  

  constructor() { }

  handler(e) {
    this.handleClick.emit(e);
  }

  ngOnInit(): void {
    console.log("Filtro Cargado")
    this.filtrosArray = [
      {
        'filterId': 'family',
        'filterLabel': 'Familia',
        'filterProp': 'familia'
      },
      {
        'filterId': 'cicloName',
        'filterLabel': 'Nombre de ciclo',
        'filterProp': 'nombre_ciclo'
      },
      {
        'filterId': 'province',
        'filterLabel': 'Provincia',
        'filterProp': 'centro.codigo_provincia'
      },
      {
        'filterId': 'type',
        'filterLabel': 'Tipo',
        'filterProp': 'tipo'
      },
      {
        'filterId': 'turno',
        'filterLabel': 'Turno',
        'filterProp': 'turno'
      },
      {
        'filterId': 'bilingue',
        'filterLabel': 'Bilingüe',
        'filterProp': 'bilingue'
      },
      {
        'filterId': 'dual',
        'filterLabel': 'Dual',
        'filterProp': 'dual'
      }
    ];
    this.provincias = Utils.provincias;
  }

}
