import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/core/models/alumno.interface';

import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { AgregarAlumnosComponent } from './acciones/agregar-alumnos/agregar-alumnos.component';
import { EditarAlumnosComponent } from './acciones/editar-alumnos/editar-alumnos.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos$!:  Observable<Alumno[]>;
  displayedColumns: string[] = ['numero', 'correo', 'nombre', 'password','accion'];
  dataSource : any[] = [];

  constructor(
    private dialog: MatDialog,
    private alumnoService : AlumnosService
    ) { 
      this.alumnoService.listaAlumnos().subscribe(
        data => {
          this.dataSource = data;
        });
    }

  ngOnInit(): void {   
  }

  openDialog(): void {
    this.dialog.open(AgregarAlumnosComponent, {
      width: '45%',
      height: '45%',            
    }).afterClosed().subscribe((result: any) => { 
       if( result != undefined){
     //  console.log(result);
        this.nuevoAlumno(result)
       }         
    });
  }

  borrarAlumno(alumno:any) {
    this.alumnoService.eliminarAlumno(alumno);
  }

  editarAlumno( element:any ){
   this.dialog.open(EditarAlumnosComponent, {
      width: '45%',
      height: '55%',
      data: element      
    }).afterClosed().subscribe((result: any) => { 
      if( result != undefined){
      //  console.log(result)
        this.actualizaAlumno(result)
      }     
    }); 
  }

nuevoAlumno(alumno:any){
//  console.log(alumno)
  this.alumnoService.agregarAlumno(alumno);
}

actualizaAlumno(alumno:any){  
  this.alumnoService.editarAlumno(alumno);
}

}
