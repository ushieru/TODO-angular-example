import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public dataTODO: Task[]
  public dataProccess: Task[]
  public datafinalized: Task[]

  constructor() {
    this.dataTODO = [];
    this.dataProccess = [];
    this.datafinalized = [];
  }

  ngOnInit(): void {
  }

  public deleteTask(id: number) {
    this.dataTODO.forEach((task: Task, index: number) => {
      if (task.id === id) {
        this.dataTODO.splice(index, 1);
      }
    });
  }

  public finalizedTask(id: number) {
    this.datafinalized.forEach((task: Task, index: number) => {
      if (task.id === id) {
        this.datafinalized.splice(index, 1);
      }
    });
  }

  public addTask(task: HTMLInputElement) {
    this.dataTODO.push(new Task(task.value));
    task.value = "";
  }

  public passToInProccess(id: number) {
    this.dataTODO.forEach((task: Task, index: number) => {
      if (task.id === id) {
        this.dataProccess.push(task);
        this.dataTODO.splice(index, 1);
      }
    });
  }

  public passToFinalized(id: number) {
    this.dataProccess.forEach((task: Task, index: number) => {
      if (task.id === id) {
        this.datafinalized.push(task);
        this.dataProccess.splice(index, 1);
      }
    });
  }

}

class Task {
  id: number;
  task: string;

  constructor(task: string) {
    this.id = Math.floor((Math.random() * 100000) + 1);
    this.task = task;
  }
}
