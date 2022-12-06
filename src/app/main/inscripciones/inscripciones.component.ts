import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InscripcionesService } from 'src/app/core/services/inscripciones.service';
import { AgregarInscripcionComponent } from './acciones/agregar-inscripcion/agregar-inscripcion.component';
import { EditarInscripcionComponent } from './acciones/editar-inscripcion/editar-inscripcion.component';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  displayedColumns: string[] = ['numero', 'curso', 'alumno', 'accion'];
  dataSource : any[] = [];

  constructor(
    private dialog: MatDialog,
    private inscripcionesService : InscripcionesService,
    
  ) {    
    this.inscripcionesService.listaInscripciones().subscribe(
      data => {
        this.dataSource = data;
      });
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(AgregarInscripcionComponent, {
      width: '45%',
      height: '45%',            
    }).afterClosed().subscribe((result: any) => { 
       if( result != undefined){
     //  console.log(result);
        this.nuevaInscripcion(result)
       }         
    });
  }

  editarInscripcion( element:any ){
    this.dialog.open(EditarInscripcionComponent, {
       width: '45%',
       height: '55%',
       data: element      
     }).afterClosed().subscribe((result: any) => { 
       if( result != undefined){
        // console.log(result)
         this.actualizaInscripcion(result)
       }     
     }); 
   }

  nuevaInscripcion(inscripcion:any){
this.inscripcionesService.agregarInscripcion(inscripcion)
  }

  actualizaInscripcion(inscripcion:any){
this.inscripcionesService.editarInscripcion(inscripcion)
  }

  borrarInscripcion(inscripcion:any){
    this.inscripcionesService.eliminarInscripcion(inscripcion);
  }

}
