import { UiLoginModule } from '@ngplayground/ui-login';
import { AppRoutingModule } from './app-routing.module';
import { CustomersModule } from './customers/customers.module';
import { ProjectsModule } from './projects/projects.module';
import { HomeModule } from './home/home.module';
import { MaterialModule } from '@ngplayground/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    ProjectsModule,
    CustomersModule,
    UiLoginModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
