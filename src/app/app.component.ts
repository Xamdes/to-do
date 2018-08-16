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
  selectedTask: Task = null;

  masterTaskList: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course',3),
    new Task('Begin brainstorming possible JavaScript group projects',2),
    new Task('Add README file to last few Angular repos on GitHub',2)
  ];

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



  FinishedEditing()
  {
    this.selectedTask = null;
  }

  AddTask(description: string, priority: number)
  {
    this.masterTaskList.push(new Task(description,priority));
    this.addingTask = !this.addingTask;
  }

  ToggleAddTask()
  {
    this.addingTask = !this.addingTask;
  }

  RemoveTask(tempTask)
  {
    this.masterTaskList = this.masterTaskList.filter(e => e !== tempTask);
  }

}
