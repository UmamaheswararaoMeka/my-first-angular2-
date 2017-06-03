import {Component} from '@angular/core';

@Component({
	selector : 'sample',
	template : `
				<div class="container" *ngIf="showHeader">
				<h1>This is my sample page</h1>
				<br>
					He is {{name | uppercase	}} <br><br>
				<img [src]="imageUrl" /> <br><br>
				<button class="btn btn-primary" (click)="runMe()">
					Click Me 
				</button>
				<br><br>
				<input type="text" [(ngModel)]="realName" (keyup.enter)="getValues($event)" />
				
				{{realName}}
				<br>
				<ul *ngFor=" let item of items">
					<li>{{item}}</li>
				</ul>
				<br>
				Display Price : {{price | currency :'INR' :'true'}}
				</div>
				`
})


export class SampleComponent{
	private name : string;
	private imageUrl : string;
	private realName : string;
	private showHeader : boolean;
	private items : string[];
	private price : number;

	constructor(){
		this.name ="Scott Desatnick"
		this.imageUrl = "http://lorempixel.com/400/200"
		this.realName = "Uma";
		this.showHeader = true;
		this.items = ["TV", "Fridge","AC", "Car"];
		this.price= 1500;
	}

	runMe(){
		console.log('hey wait !!!, did you click me?')
	}

	getValues(uma :any){
		console.log(uma.target.value)
	}
}