import {Component} from "@angular/core";
import { Graph, Addon, FunctionExt, Shape } from '@antv/x6'

import './shape'
import graphData from './data'
import { useGridAttr } from './global'
import { GraphService } from '../service/graph.service'
import { Store } from 'le5le-store';
import { ratio } from "@antv/x6/lib/registry/edge-anchor/ratio";

@Component({

    selector: "graph-index",
   
    template:``,
   
   })
export default class FlowGraph {
    public static graph: Graph
    private static stencil: Addon.Stencil
    public static graphService = new GraphService()
    public static history: Graph.HistoryManager
    constructor() {}

    public static init() {
        const Grid: any = new useGridAttr()
        Grid.setGridAttr('stroke', '#5F95FF')
        // console.log(Grid.setGridAttrs)
        this.graph = new Graph({
            container: document.getElementById('container')!,
            
            rotating: true, // 旋转节点
            // resizing: true, // 缩放节点
            autoResize: true,
            async: true, // 开启异步渲染
            keyboard: true, // 键盘快捷键
            snapline: { // 对齐线
                enabled: true,
                sharp: true,
                resizing: true
            },
            scroller: {  // 滚动条
                enabled: true,
                pageVisible: true,
                pageBreak: false,
                pannable: true,
            },
            mousewheel: {
                enabled: true,
                modifiers: ['alt', 'meta']
            },
            grid: {
                size: 15,
                visible: true,
                type: 'doubleMesh',
                args: [
                    {
                        color: 'pink',
                        thickness: 1,
                    },
                    {
                        color: 'rgb(97, 163, 62)',
                        thickness: 1,
                        factor: 4,
                    },
                ],
            },
            selecting: {
                enabled: true,
                multiple: true,
                rubberband: true,
                movable: true,
                showNodeSelectionBox: true,
                filter: ['groupNode'],
            },
            connecting: {
                anchor: 'center',
                connectionPoint: 'anchor',
                allowBlank: true,
                allowMulti: true,
                allowLoop: true,
                allowNode: true,
                allowEdge: true,
                allowPort: true,
                highlight: true,
    
                snap: true,
                createEdge() {
                    return new Shape.Edge({
                        attrs: {
                            line: {
                                stroke: '#000',
                                strokeWidth: 1.5,
                                targetMarker: {
                                    name: 'path',
                                    rx: 2, // 椭圆箭头的 x 半径
                                    ry: 2,  // 椭圆箭头的 y 半径
                                },
                           
                            },
                        },
                        target: {
                            anchor: {
                                name: 'ratio',
                                args: {
                                    ratio: 50
                                }
                            }
                        },
                        // connector: 'jumpover',
           
                        router: {
                            name: 'orth',
                        },
                        zIndex: 0,
                    })
                },
                validateConnection({
                    sourceView,
                    targetView,
                    sourceMagnet,
                    targetMagnet,
                }) {
                    if (sourceView === targetView) {
                        return false
                    }
                    if (!sourceMagnet) {
                        return false
                    }
                    if (!targetMagnet) {
                        return false
                    }
                    return true
                },
            },
            highlighting: {
                magnetAvailable: {
                    name: 'stroke',
                    args: {
                        padding: 4,
                        attrs: {
                            strokeWidth: 4,
                            stroke: 'rgba(223,234,255)',
                        },
                    },
                },
            },
            history: true,
            clipboard: {
                enabled: true,
            },
            embedding: {
                enabled: true,
                findParent({ node }) {
                    const bbox = node.getBBox()
                    return this.getNodes().filter((node) => {
                        // 只有 data.parent 为 true 的节点才是父节点
                        const data = node.getData<any>()
                        if (data && data.parent) {
                            const targetBBox = node.getBBox()
                            return bbox.isIntersectWithRect(targetBBox)
                        }
                        return false
                    })
                },
            },
        })
        this.history = this.graph.history
        this.initStencil()
        this.initShape()
        this.initGraphShape()
        this.initEvent()
        // this.graph.zoom(-0.2)
        
        return this.graph
    }

    public static getGraph (): Graph {
        console.log(this.graph)
        return this.graph
    }

    private static initStencil() {
        this.stencil = new Addon.Stencil({
            target: this.graph,
            stencilGraphWidth: 280,
            stencilGraphPadding: 10,
            search: { rect: true },
            collapsable: true,
            groups: [
                {
                    name: 'basic',
                    title: '基础节点',
                    layoutOptions: {
                        columns: 2,
                        marginX: 0,
                    },
                    graphHeight: 720,
                },
                {
                    name: 'combination',
                    title: '组合节点',
                    layoutOptions: {
                        columns: 1,
                        marginX: 60,
                    },
                    graphHeight: 260,
                },
                {
                    name: 'group',
                    title: '节点组',
                    graphHeight: 100,
                    layoutOptions: {
                        columns: 1,
                        marginX: 60,
                    },
                },
            ],
        })
        const stencilContainer = document.querySelector('#stencilContainer')
        stencilContainer?.appendChild(this.stencil.container)
    }

    private static initShape() {
        const { graph } = this
        // const r1 = graph.createNode({
        //     shape: 'flow-chart-rect',
        //     attrs: {
        //         body: {
        //             rx: 24,
        //             ry: 24,
        //         },
        //         text: {
        //             textWrap: {
        //                 text: '起始节点',
        //             },
        //         },
        //     },
        // })
        // const r2 = graph.createNode({
        //     shape: 'flow-chart-rect',
        //     attrs: {
        //         text: {
        //             textWrap: {
        //                 text: '流程节点',
        //             },
        //         },
        //     },
        // })
        // const r3 = graph.createNode({
        //     shape: 'flow-chart-rect',
        //     width: 52,
        //     height: 52,
        //     angle: 45,
        //     attrs: {
        //         'edit-text': {
        //             style: {
        //                 transform: 'rotate(-45deg)',
        //             },
        //         },
        //         text: {
        //             textWrap: {
        //                 text: '判断节点',
        //             },
        //             transform: 'rotate(-45deg)',
        //         },
        //     },
        //     ports: {
        //         groups: {
        //             top: {
        //                 position: {
        //                     name: 'top',
        //                     args: {
        //                         dx: -26,
        //                     },
        //                 },
        //             },
        //             right: {
        //                 position: {
        //                     name: 'right',
        //                     args: {
        //                         dy: -26,
        //                     },
        //                 },
        //             },
        //             bottom: {
        //                 position: {
        //                     name: 'bottom',
        //                     args: {
        //                         dx: 26,
        //                     },
        //                 },
        //             },
        //             left: {
        //                 position: {
        //                     name: 'left',
        //                     args: {
        //                         dy: 26,
        //                     },
        //                 },
        //             },
        //         },
        //     },
        // })
        // const r4 = graph.createNode({
        //     shape: 'flow-chart-rect',
        //     width: 70,
        //     height: 70,
        //     attrs: {
        //         body: {
        //             rx: 35,
        //             ry: 35,
        //         },
        //         text: {
        //             textWrap: {
        //                 text: '链接节点',
        //             },
        //         },
        //     },
        // })

        // const c1 = graph.createNode({
        //     shape: 'flow-chart-image-rect',
        // })
        const c1 = graph.createNode({
            shape: 'circuit-diagram-image-svg1'
        })
        const c2 = graph.createNode({
            shape: 'circuit-diagram-image-svg2'
        })
        const c3 = graph.createNode({
            shape: 'circuit-diagram-image-svg3'
        })
        const c4 = graph.createNode({
            shape: 'circuit-diagram-image-svg4'
        })
        const c5 = graph.createNode({
            shape: 'circuit-diagram-image-svg5'
        })
        const c6 = graph.createNode({
            shape: 'circuit-diagram-image-svg6'
        })
        const c7 = graph.createNode({
            shape: 'circuit-diagram-image-svg7'
        })
        const c8 = graph.createNode({
            shape: 'circuit-diagram-image-svg8'
        })
        const c9 = graph.createNode({
            shape: 'circuit-diagram-image-svg9'
        })
        const c10 = graph.createNode({
            shape: 'circuit-diagram-image-svg10'
        })
        const c11 = graph.createNode({
            shape: 'circuit-diagram-image-svg11'
        })
        const c12 = graph.createNode({
            shape: 'circuit-diagram-image-svg12'
        })
        const c13 = graph.createNode({
            shape: 'circuit-diagram-image-svg13'
        })
        const c14 = graph.createNode({
            shape: 'circuit-diagram-image-svg14'
        })
        const c15 = graph.createNode({
            shape: 'circuit-diagram-image-svg15'
        })
        const c16 = graph.createNode({
            shape: 'circuit-diagram-image-svg16'
        })
        const c17 = graph.createNode({
            shape: 'circuit-diagram-image-svg17'
        })
        const c18 = graph.createNode({
            shape: 'circuit-diagram-image-svg18'
        })
        // const c2 = graph.createNode({
        //     shape: 'flow-chart-title-rect',
        // })
        // const c3 = graph.createNode({
        //     shape: 'flow-chart-animate-text',
        // })

        // const g1 = graph.createNode({
        //     shape: 'groupNode',
        //     attrs: {
        //         text: {
        //             text: 'Group Name',
        //         },
        //     },
        //     data: {
        //         parent: true,
        //     },
        // })
        this.stencil.load([c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18], 'basic')
        // this.stencil.load([c5, c6, c7, c8 ], 'combination')
        // this.stencil.load([ c9, c10, c11, c12,], 'group')
        // this.stencil.load([c13, c14, c15, c16, c17], 'group1')
    }

    private static initGraphShape() {
        // this.graph.fromJSON(graphData as any)
    }

    private static showPorts(ports: NodeListOf<SVGAElement>, show: boolean) {
        for (let i = 0, len = ports.length; i < len; i = i + 1) {
            ports[i].style.visibility = show ? 'visible' : 'hidden'
        }
    }

    private static initEvent() {
        const { graph } = this
        const container = document.getElementById('container')!

        graph.on('render:done', () => { // 监听画布渲染完成回调
            
            Store.set('graph', {'sss': 11});
        })
        graph.bindKey('ctrl+z', () => {

           this.history.undo()
          })

        graph.on('node:contextmenu', ({ cell, view }) => {
            const oldText = cell.attr('text/textWrap/text') as string
            const elem = view.container.querySelector('.x6-edit-text') as HTMLElement
            if (elem == null) { return }
            cell.attr('text/style/display', 'none')
            if (elem) {
                elem.style.display = ''
                elem.contentEditable = 'true'
                elem.innerText = oldText
                elem.focus()
            }
            const onBlur = () => {
                cell.attr('text/textWrap/text', elem.innerText)
                cell.attr('text/style/display', '')
                elem.style.display = 'none'
                elem.contentEditable = 'false'
            }
            elem.addEventListener('blur', () => {
                onBlur()
                elem.removeEventListener('blur', onBlur)
            })
        })
        graph.on('node:click', ({ e, x, y, node, view }) => {
            
         })
        graph.on(
            'node:mouseenter',
            FunctionExt.debounce(() => {
                const ports = container.querySelectorAll(
                    '.x6-port-body',
                ) as NodeListOf<SVGAElement>
                this.showPorts(ports, true)
            }),
            500,
        )
        graph.on('node:mouseleave', () => {
            const ports = container.querySelectorAll(
                '.x6-port-body',
            ) as NodeListOf<SVGAElement>
            this.showPorts(ports, false)
        })

        graph.on('node:collapse', ({ node, e }) => {
            e.stopPropagation()
            node.toggleCollapse()
            const collapsed = node.isCollapsed()
            const cells = node.getDescendants()
            cells.forEach((n) => {
                if (collapsed) {
                    n.hide()
                } else {
                    n.show()
                }
            })
        })

        graph.on('node:embedded', ({ cell }) => {
            if (cell.shape !== 'groupNode') {
                cell.toFront()
            }
        })

        graph.bindKey('backspace', () => {
            const cells = graph.getSelectedCells()
            if (cells.length) {
                graph.removeCells(cells)
            }
        })
    }
}
