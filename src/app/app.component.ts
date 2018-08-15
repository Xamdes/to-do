import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

  addingTask: boolean = false;
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
  selectedTask: Task = null;

  EditTask(clickedTask)
  {
    if(this.selectedTask === null || this.selectedTask.description != clickedTask.description)
    {
      this.selectedTask = clickedTask;
    }
    else
    {
      this.selectedTask = null;
    }
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
    if((this.selectedTask != null) && (currentTask.description === this.selectedTask.description))
    {
      return "btn-primary";
    }
    return "btn-dark";
  }

  FinishedEditing()
  {
    this.selectedTask = null;
  }

  // newDescription: string = "Please enter description of task!";
  AddTask(description: string, priority: number)
  {
    this.tasks.push(new Task(description,priority));
    this.addingTask = !this.addingTask;
  }

  ToggleAddTask()
  {
    this.addingTask = !this.addingTask;
  }

  RemoveTask(currentTask)
  {
    this.tasks = FilterRemove(this.tasks,currentTask);
  }

}

function FilterRemove(array, element)
{
    return array.filter(e => e !== element);
}
