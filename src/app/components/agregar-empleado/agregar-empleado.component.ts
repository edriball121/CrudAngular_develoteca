import { Component, OnInit } from '@angular/core';

//importar los componentes que me permitiran recibir los datos
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
//traer el formulario
formularioDeEmpleados:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteado:Router,
    ) { 
this.formularioDeEmpleados=this.formulario.group({
  nombre:[''],
  correo:['']
})  

  }

  ngOnInit(): void {
  }

  EnviarDatos():any{
    console.log("Se pulso el boton guardar");
    console.log(this.formularioDeEmpleados.value);
    this.crudService.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe(respuesta=>{
      this.ruteado.navigateByUrl('/listar-empleado');
    });
    
  }

}
