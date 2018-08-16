import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../models/task.model'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent
{

  @Input() childTaskList: Task[];
  @Input() selectedTask: Task;
  @Output() clickEditSender = new EventEmitter();
  @Output() clickRemoveSender = new EventEmitter();


  PriorityColor(currentTask)
  {
    switch(currentTask.priority)
    {
      case 2:
      return "bg-warning";
      case 3:
      return "bg-danger";
      default:
      return "bg-info";
    }
  }

  IsSelected(currentTask)
  {
    if((this.selectedTask != null) && (currentTask.description === this.selectedTask.description))
    {
      return "btn-primary";
    }
    return "btn-dark";
  }

  EditButtonClicked(taskToEdit: Task)
  {
    this.clickEditSender.emit(taskToEdit);
  }

  RemoveButtonClicked(taskToEdit: Task)
  {
    this.clickRemoveSender.emit(taskToEdit);
  }
}
