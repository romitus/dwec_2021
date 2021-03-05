import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { DataService } from './functionsNotComponent/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) { };

  ngOnInit() {
    if (this.arrayCiclos.length == 0) this.dataService.fetchJson().subscribe((data: Object) => this.jsonProcessing(data));
    console.log('Peticion para obtener Json realizada')
  }
  
  changeMe() { this.buttonSi = !this.buttonSi }

  buttonSi = false;
  title = 'carlos-munoz-spa';
  allFilters = {
    'familia': [],
    'nombre_ciclo': [],
    'centro.codigo_provincia': [],
    'tipo': [],
    'turno': [],
    'bilingue': [],
    'dual': []
  };
  arrayCiclos = [];
  filterValues = {
    'familia': '',
    'nombre_ciclo': '',
    'centro.codigo_provincia': '',
    'tipo': '',
    'turno': '',
    'bilingue': '',
    'dual': ''
  };
  showTable = false;
  loading = false;
  dataFilter = (e) => {
    const filterPropId = e.source._id;
    const filterValue = e.value;
    this.filterValues[filterPropId] = filterValue;
    this.loading = true;
    setTimeout(() => { this.loading = false; }, 1000);
    this.showTable = true;

  };

  jsonProcessing(jsonFile) {
    this.arrayCiclos = [];
    this.allFilters = {
      'familia': [],
      'nombre_ciclo': [],
      'centro.codigo_provincia': [],
      'tipo': [],
      'turno': [],
      'bilingue': [],
      'dual': []
    };
    jsonFile.items.map((item) => {

      const centro = jsonFile.info_centros.filter((centro) => item.codigo == centro.codigo)[0];

      if (this.allFilters['familia'].indexOf(item.familia) == -1) this.allFilters['familia'].push(item.familia);
      if (this.allFilters['nombre_ciclo'].indexOf(item.nombre_ciclo) == -1) this.allFilters['nombre_ciclo'].push(item.nombre_ciclo);
      if (this.allFilters['centro.codigo_provincia'].indexOf(centro.codigo_provincia) == -1) this.allFilters['centro.codigo_provincia'].push(centro.codigo_provincia);
      if (this.allFilters['tipo'].indexOf(item.tipo) == -1) this.allFilters['tipo'].push(item.tipo);

      const turno = item.turno != 'Mañana' && item.turno != 'Tarde' ? 'Ambos' : item.turno;
      if (this.allFilters['turno'].indexOf(turno) == -1) this.allFilters['turno'].push(turno);

      if (this.allFilters['bilingue'].indexOf(item.bilingue) == -1) this.allFilters['bilingue'].push(item.bilingue);
      if (this.allFilters['dual'].indexOf(item.dual) == -1) this.allFilters['dual'].push(item.dual);

      const ciclo = {
        'centro': centro,
        'familia': item.familia,
        'codigo_ciclo': item.codigo_ciclo,
        'nombre_ciclo': item.nombre_ciclo,
        'tipo': item.tipo,
        'turno': item.turno,
        'bilingue': item.bilingue,
        'dual': item.dual
      }
      this.arrayCiclos.push(ciclo);
    });
  }

}