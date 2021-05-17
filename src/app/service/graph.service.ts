import { Injectable } from '@angular/core';
import { LocalStorage } from '@antv/x6';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class GraphService {
  // 创建BehaviorSubject实例
  public graphSource: any = new BehaviorSubject<any[]>([]);
  
  // 创建Observable
  // changeEmitted$ = this.graphSource.asObservable();
  public graph: any
  constructor() { }

  public set(graph: any) {
    // localStorage.setItem(key, JSON.stringify(value))
       // 调用 API
       const graphs = this.graphSource.getValue();
       console.log(graph, 'service')
       console.log(graphs, 'service111')
       this.graphSource.next(graph);
  }

  public get(key): any {
    return JSON.parse(localStorage.getItem(key)) 
  }
  
  public transmitGraph (graph) {
    // this.graph = Object.assign(graph)
    this.graphSource.next(graph);
    // console.log(this.graph, `service${new Date().getTime()}`)
  }

  public getDataSource (): any {
    return this.graphSource.asObservable();
  }
  
}



