import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  content = '建立代辦事項元件';
  type: 'Home' | 'Work' | 'Study' | 'Other' = 'Home';
  state: 'None' | 'Doing' | 'Finish' | 'Finish' = 'None';
  onSetState(state: 'None' | 'Doing' | 'Finish' | 'Finish'): void {
    this.state = state;
  }
}
