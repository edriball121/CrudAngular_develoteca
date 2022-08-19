import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import{observable, Observable} from 'rxjs';
import{Empleado} from './Empleado';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost/peluqueria/';//API obtenido de PHP puro
  constructor(private clienteHTTP:HttpClient) {}

    AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
      return this.clienteHTTP.post(this.API+"?insertar=1",datosEmpleado);
    }
    ObtenerEmpleados(){
      return this.clienteHTTP.get(this.API)
      }
    BorrarEmpleado(id:any):Observable<any>{
      return this.clienteHTTP.get(this.API+"?borrar="+id);
    }

    OntenerEmpleado(id:any):Observable<any>{
      return this.clienteHTTP.get(this.API+"?consultar="+id);
    }

    EditarEmpleado(id:any,datosEmpleado:any):Observable<any>{
      return this.clienteHTTP.post(this.API+"?actualizar="+id,datosEmpleado);
    }

   }

