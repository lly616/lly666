import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeskComponent } from './pages/desk/desk.component';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { DetailComponent } from './pages/detail/detail.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CarouselModule } from 'primeng/carousel';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignComponent } from './pages/sign/sign.component';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReleaseComponent } from './components/release/release.component';
import {DropdownModule} from 'primeng/dropdown';
import {AvatarModule} from 'primeng/avatar';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {FileUploadModule} from 'primeng/fileupload';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    DeskComponent,
    DetailComponent,
    NavbarComponent,
    SignComponent,
    ReleaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DockModule,
    MenubarModule,
    ButtonModule,
    RippleModule,
    CarouselModule,
    MessagesModule,
    ToastModule,
    FileUploadModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    AvatarModule,
    ContextMenuModule,
    ConfirmDialogModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
