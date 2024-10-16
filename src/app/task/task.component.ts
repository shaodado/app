import {
  Component,
  EventEmitter,
  Input,
  Output,
  numberAttribute,
} from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true, transform: numberAttribute }) id!: number;

  @Input({ required: true }) content!: string;

  @Input({ required: true }) type!: 'Home' | 'Work' | 'Other';

  @Input({ required: true }) state!: 'None' | 'Doing' | 'Finish';

  @Output() stateChange = new EventEmitter<'None' | 'Doing' | 'Finish'>();

  onSetState(state: 'None' | 'Doing' | 'Finish'): void {
    this.stateChange.emit(state);
  }
}
