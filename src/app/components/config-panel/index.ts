import { Component, OnInit, Input } from '@angular/core';
import { ConfigGrid } from './config-grid'
import { ConfigNode } from './config-node'
import { ConfigEdge } from './config-edge'
import FlowGraph from '../../graph'
import { GraphService } from '../../service/graph.service'
import { Store } from 'le5le-store';

export enum CONFIG_TYPE {
  GRID, // 网格
  NODE, // 节点
  EDGE, // 边
}

@Component({
  selector: 'config-panel-index',
  styles: [``],
  template: `
     <div class="config-panel-container">
        <div *ngIf = "configType === CONFIG_TYPE.GRID">
          <config-grid-index></config-grid-index>
        </div>
        <div *ngIf = "configType === CONFIG_TYPE.NODE">
          <config-node-index></config-node-index>
        </div>
        <div *ngIf = "configType === CONFIG_TYPE.EDGE">
        <config-edge-index></config-edge-index>
        </div>
     </div>  
  `,
      providers: [
   
        GraphService
    ]
})


export class ConfigPanelComponent implements OnInit {
  @Input() graph11: any
  
  public configType: any = 1
  public CONFIG_TYPE = CONFIG_TYPE // 右侧配置枚举对象
  constructor(private graphService: GraphService) { 
    graphService.graphSource.subscribe(graph => {

      console.log(graph, `configConstructor${new Date().getTime()}`)
      });
    
  }
  // @UseEffect()

  onEffect() {
      
    // graph.on('blank:click', () => {
    //   // setType(CONFIG_TYPE.GRID)
    //   console.log('111')
    // })

    // graph.on('cell:click', ({ cell }) => {

    //   console.log(cell)
    //   // setType(cell.isNode() ? CONFIG_TYPE.NODE : CONFIG_TYPE.EDGE)
    //   // setId(cell.id)
    // })
  }

  ngAfterViewInit(): void {

    // const graphService = new GraphService()
    // setTimeout(() => {
    //   console.log(this.graphService.getDataSource(), `config${new Date().getTime()}`)
    // }, 1000)
    
      // const graph = FlowGraph.init()
      // console.log(FlowGraph.init())
      //  const graph = FlowGraph.graph
      //  console.log(FlowGraph.graph, '34444')
      // const flowGraph = new FlowGraph()

      //  console.log(flowGraph.graph, '画布')
  }
  ngOnInit(): void {
    // console.log(this.graphService.get('graph'), '子组件ON')
    // let abc: any;
    // abc = this.graphService.graphSource.pipe(
    //   map((views) => {
    //     return views.filter((view, index) => {
    //       return index < 2;
    //     });
    //   })
    // );
    const aaa = Store.get('graph')
    console.log(aaa)
    this.graphService.graphSource.subscribe((graph: any) => {
      
      console.log(graph, '子组件ON')
  
  });
 
  }

}
// function UseEffect() {
//   return function (target, key, descriptor) {
//     target.ngOnInit = descriptor.value;
//     target.ngAfterViewChecked = descriptor.value;
//   };
// }

