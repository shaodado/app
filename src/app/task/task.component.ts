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

  @Input({ required: true }) type!: 'Home' | 'Work' | 'Study' | 'Other';

  @Input({ required: true }) state!: 'None' | 'Doing' | 'Finish' | 'Finish';

  @Output() stateChage = new EventEmitter<'None' | 'Doing' | 'Finish'>();

  totalCount = 10;

  finishCount = 3;

  onSetState(state: 'None' | 'Doing' | 'Finish' | 'Finish'): void {
    this.stateChage.emit(state);
  }
}
