import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  currentFocus: string = 'Angular Homework';
  currentTime: Date = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course',3),
    new Task('Begin brainstorming possible JavaScript group projects',2),
    new Task('Add README file to last few Angular repos on GitHub',2)
  ];
  selectedTask: Task = this.tasks[0];

  EditTask(clickedTask)
  {
    this.selectedTask = clickedTask;
  }

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
    console.log(currentTask.description);
    console.log(this.selectedTask.description);
    if(currentTask.description === this.selectedTask.description)
    {
      return "btn-success";
    }
    else
    {
      return "btn-primary";
    }
  }

}
