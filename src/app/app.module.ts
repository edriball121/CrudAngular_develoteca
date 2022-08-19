import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';
//implementar los modulos que se van ha usar en el proyecto para el manejo de formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ListarEmpleadoComponent
  ],
  //Exportar los modulos que se implementaron anteriormente:  FormsModule,ReactiveFormsModule,HttpClientModule
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
