import { Component, OnInit, Input } from '@angular/core';
import Utils from '../functionsNotComponent/utils.component';
import { Ciclo } from '../functionsNotComponent/interfaz';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.sass']
})

export class GenericTableComponent implements OnInit {
  @Input() data: Array<Ciclo>;
  @Input() filters: Object;

  constructor() { }

  datosFiltrados: Array<Ciclo> = [];
  provincias: Object = Utils.provincias;
  webColumna: string[] = [
    'centro',
    'nombre_ciclo',
    'tipo',
    'turno',
    'bilingue',
    'dual'
  ];

  ngOnInit(): void {
    console.log("Datos de la Tabla: ");
    console.log(this.data);
    console.log(this.filters);
    this.filtrarDatos();
  }

  filtrarDatos() {
    this.data.map((dato) => {
      const entra = [];
      Object.keys(this.filters).map((key) => {
        let datosAComprobar = '';
        if (key == "centro.codigo_provincia") {
          datosAComprobar = dato.centro.codigo_provincia;
        } else {
          datosAComprobar = dato[key];
        }

        if (key == 'turno' && this.filters[key] == 'Ambos') datosAComprobar = 'Ambos';

        entra.push(this.filters[key] == '' || this.filters[key] == datosAComprobar);
      })
      if (entra.filter((si) => si == false).length == 0) this.datosFiltrados.push(dato);
    });
    console.warn(this.datosFiltrados);
  }
}

