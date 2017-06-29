import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/main/app.component';
import { CommentComponent } from './components/comments/comment.component';

import { BoldHoverDirective } from './shared/directives/bold-hover.directive';

import 'rxjs/add/operator/map';

@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule],
	declarations: [AppComponent,
		CommentComponent,
		BoldHoverDirective],
	bootstrap: [AppComponent]
})
export class AppModule { }
