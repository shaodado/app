import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  content = '建立代辦事項元件';
  state: 'None' | 'Doing' | 'Finish' | 'Finish' = 'None';
  color: any;
  onSetState(state: 'None' | 'Doing' | 'Finish' | 'Finish'): void {
    this.state = state;
  }

  type: 'Home' | 'Work' | 'Other' = 'Work';
  fontSize = 14;
}
