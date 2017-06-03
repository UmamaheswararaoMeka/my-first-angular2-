import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component'
import { SampleComponent } from './sample.component';

@Component({
	selector: 'my-app',
	template : `<div>	
					<h1>My Ang2 App</h1>
					<sample></sample>
				</div>
				`
})

export class AppComponent {

}