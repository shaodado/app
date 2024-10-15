import { Attribute, Component, Input } from '@angular/core';

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

  constructor(@Attribute('id') public id: number) {}

  onSetState(state: 'None' | 'Doing' | 'Finish' | 'Finish'): void {
    this.state = state;
  }
}
