import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'comments-sidebar',
	templateUrl: 'app/components/comments/comment.component.html'
})

export class CommentComponent {
	constructor() { }

	// comment1: string = 'i\'d fuck her';

	@Input() name: string;
	@Output() onNameChanged = new EventEmitter<string>();

	changeName(newName: string) {
		this.onNameChanged.emit(newName);
	}

}