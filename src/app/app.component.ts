import { Component } from '@angular/core';
import FlowGraph from './Graph'
import { fromEvent }from 'rxjs';
import { GraphService } from './service/graph.service'


  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  
})
export class AppComponent {
  public graph11: any
  constructor() { }
  @UseEffect()
  onEffect() {
    // const getContainerSize = () => {
    //   return {
    //     width: document.body.offsetWidth - 581,
    //     height: document.body.offsetHeight - 87,
    //   }
    // }
    // FlowGraph.init()
    const leftSider = document.getElementById('#left-sider')
    const rightSider = document.getElementById('#right-sider')
    const leftWidth = leftSider.clientWidth||leftSider.offsetWidth
    const rightWidth = rightSider.clientWidth||rightSider.offsetWidth
    // console.log(leftWidth)
    // console.log(rightWidth)
}

  ngAfterViewInit(): void {
    // const graphService = new GraphService ()
    // const flowGraph = new FlowGraph(graphService)
    
    FlowGraph.init()
    // console.log(FlowGraph.graph.toJSON())
  }
  tojson() {
    console.log('2222')
    console.log(JSON.stringify(FlowGraph.graph.toJSON()))
  }
  ngOnInit() {
 
   fromEvent(window,'resize')
    .subscribe((event) => {
      console.log('event.target')
    })
  }


}

function UseEffect() {
  return function (target, key, descriptor) {
    target.ngOnInit = descriptor.value;
    target.ngAfterViewChecked = descriptor.value;
  };
}
