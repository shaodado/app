import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  private _id!: number;
  @Input() content!: string;
  @Input() type!: 'Home' | 'Work' | 'Study' | 'Other';
  @Input() state!: 'None' | 'Doing' | 'Finish' | 'Finish';

  @Input({ required: true, transform: numberAttribute })
  id!: number;

  onSetState(state: 'None' | 'Doing' | 'Finish' | 'Finish'): void {
    this.state = state;
  }
}
