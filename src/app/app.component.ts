import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, AsyncPipe, NgIf],
  templateUrl: './app.component.html',
})
export class AppComponent {}
