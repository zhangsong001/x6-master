import { Graph, Dom, Node } from '@antv/x6'

export const FlowChartRect = Graph.registerNode('flow-chart-rect', {
  inherit: 'rect',
  width: 80,
  height: 42,
  attrs: {
    body: {
      stroke: '#5F95FF',
      strokeWidth: 1,
      fill: 'rgba(95,149,255,0.05)',
    },
    fo: {
      refWidth: '100%',
      refHeight: '100%',
    },
    foBody: {
      xmlns: Dom.ns.xhtml,
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    'edit-text': {
      contenteditable: 'false',
      class: 'x6-edit-text',
      style: {
        width: '100%',
        textAlign: 'center',
        fontSize: 12,
        color: 'rgba(0,0,0,0.85)',
      },
    },
    text: {
      fontSize: 12,
      fill: 'rgba(0,0,0,0.85)',
      textWrap: {
        text: '',
        width: -10,
      },
    },
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'text',
      selector: 'text',
    },
    {
      tagName: 'foreignObject',
      selector: 'fo',
      children: [
        {
          ns: Dom.ns.xhtml,
          tagName: 'body',
          selector: 'foBody',
          children: [
            {
              tagName: 'div',
              selector: 'edit-text',
            },
          ],
        },
      ],
    },
  ],
  ports: {
    groups: {
      top: {
        position: 'top',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      right: {
        position: 'right',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: 'bottom',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      left: {
        position: 'left',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
    },
    items: [
      {
        group: 'top',
      },
      {
        group: 'right',
      },
      {
        group: 'bottom',
      },
      {
        group: 'left',
      },
    ],
  },
}, true)

export const FlowChartImageRect = Graph.registerNode('flow-chart-image-rect', {
  inherit: 'rect',
  width: 60,
  height: 60  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },
    image: {
      'xlink:href': '../../assets/222.svg',
      width: 120,
      height: 120,
      x: -20,
      y: -20,
    },
    title: {
      text: 'Node',
      refX: 40,
      refY: 14,
      fill: 'rgba(0,0,0,0.85)',
      fontSize: 12,
      'text-anchor': 'start',
    },
    text: {
      text: 'this is content text',
      refX: 40,
      refY: 38,
      fontSize: 12,
      fill: 'rgba(0,0,0,0.6)',
      'text-anchor': 'start',
    },
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
    {
      tagName: 'text',
      selector: 'title',
    },
    {
      tagName: 'text',
      selector: 'text',
    },
  ],
  ports: {
    groups: {
      top: {
        position: 'top',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      right: {
        position: 'right',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: 'bottom',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      left: {
        position: 'left',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
    },
    items: [
      {
        group: 'top',
      },
      {
        group: 'right',
      },
      {
        group: 'bottom',
      },
      {
        group: 'left',
      },
    ],
  },
}, true)

export const CircuitDiagramImageSvg1 = Graph.registerNode('circuit-diagram-image-svg1', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 0,
      y: 0
    },
    image: {
      'xlink:href': '../../assets/svg/避雷器.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    }
  ],
  ports: {
    groups: {
      top: {
        position: 'top',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'top',
      }
    ],
  },
}, true)
export const CircuitDiagramImageSvg2 = Graph.registerNode('circuit-diagram-image-svg2', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 0,
      y: 0
    },
    image: {
      'xlink:href': '../../assets/svg/带电显示器.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    },
    // title: {
    //   text: 'Node',
    //   refX: 40,
    //   refY: 14,
    //   fill: 'rgba(0,0,0,0.85)',
    //   fontSize: 12,
    //   'text-anchor': 'start',
    // },
    // text: {
    //   text: 'this is content text',
    //   refX: 40,
    //   refY: 38,
    //   fontSize: 12,
    //   fill: 'rgba(0,0,0,0.6)',
    //   'text-anchor': 'start',
    // },
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      right: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      // bottom: {
      //   position: 'bottom',
      //   attrs: {
      //     circle: {
      //       r: 3,
      //       magnet: true,
      //       stroke: '#5F95FF',
      //       strokeWidth: 1,
      //       fill: '#fff',
      //       style: {
      //         visibility: 'hidden',
      //       },
      //     },
      //   },
      // }
    },
    items: [
      {
        group: 'right',
        args: {
          x: '0',
          y: 20,
          angle: 90,
        },
      },
      // {
      //   group: 'bottom',
      // }
    ],
  },
}, true)


export const CircuitDiagramImageSvg3 = Graph.registerNode('circuit-diagram-image-svg3', {
  inherit: 'rect',
  width: 40,
  height: 40,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 0,
      y: 0
    },  
    image: {
      'xlink:href': '../../assets/svg/电动隔离开关.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      top: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'top',
        args: {
          x: '16%',
          y: 0,
          angle: 90,
        },
      },
      {
        group: 'bottom',
        args: {
          x: '16%',
          y: 40,
          angle: 90,
        },
      }
    ],
  },
}, true)

export const CircuitDiagramImageSvg4 = Graph.registerNode('circuit-diagram-image-svg4', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 0,
      y: 0
    },  
    image: {
      'xlink:href': '../../assets/svg/电缆.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    },
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      top: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0},
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'top',
        args: {
          x: '50%',
          y: 0,
          angle: 90,
        },
      },
      {
        group: 'bottom',
        args: {
          x: '50%',
          y: 40,
          angle: 90,
        },
      }
    ],
  },
}, true)

export const CircuitDiagramImageSvg5 = Graph.registerNode('circuit-diagram-image-svg5', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },  
    image: {
      'xlink:href': '../../assets/svg/电流互感器.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      top: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'top',
        args: {
          x: '25%',
          y: -2,
          angle: 90,
        },
      },
      {
        group: 'bottom',
        args: {
          x: '25%',
          y: 38,
          angle: 90,
        },
      }
    ],
  },
}, true)

export const CircuitDiagramImageSvg6 = Graph.registerNode('circuit-diagram-image-svg6', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },  
    image: {
      'xlink:href': '../../assets/svg/电压测量装置.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      top: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0},
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'top',
        args: {
          x: '50%',
          y: 0,
          angle: 90,
        },
      },
      {
        group: 'bottom',
        args: {
          x: '50%',
          y: 40,
          angle: 90,
        },
      }
    ],
  },
}, true)

export const CircuitDiagramImageSvg7 = Graph.registerNode('circuit-diagram-image-svg7', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },  
    image: {
      'xlink:href': '../../assets/svg/电压互感器.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      top: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'top',
        args: {
          x: '50%',
          y: 2,
          angle: 90,
        },
      }
    ],
  },
}, true)

export const CircuitDiagramImageSvg8 = Graph.registerNode('circuit-diagram-image-svg8', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },  
    image: {
      'xlink:href': '../../assets/svg/断路器.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      top: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'top',
        args: {
          x: '55%',
          y: 0,
          angle: 90,
        },
      },
      {
        group: 'bottom',
        args: {
          x: '55%',
          y: 40,
          angle: 90,
        },
      }
    ],
  },
}, true)

export const CircuitDiagramImageSvg9 = Graph.registerNode('circuit-diagram-image-svg9', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },  
    image: {
      'xlink:href': '../../assets/svg/分流器.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      top: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0},
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0},
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'top',
        args: {
          x: '50%',
          y: 2,
          angle: 90,
        },
      },
      {
        group: 'bottom',
        args: {
          x: '50%',
          y: 38,
          angle: 90,
        },
      }
    ],
  },
}, true)

export const CircuitDiagramImageSvg10 = Graph.registerNode('circuit-diagram-image-svg10', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },  
    image: {
      'xlink:href': '../../assets/svg/钢轨电位限制装置.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      top: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0},
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0},
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'top',
        args: {
          x: '50%',
          y: 0,
          angle: 90,
        },
      },
      {
        group: 'bottom',
        args: {
          x: '50%',
          y: 40,
          angle: 90,
        },  
      }
    ],
  },
}, true)

export const CircuitDiagramImageSvg11 = Graph.registerNode('circuit-diagram-image-svg11', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },  
    image: {
      'xlink:href': '../../assets/svg/回流箱.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      top: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'top',
        args: {
          x: '50%',
          y: 0,
          angle: 90,
        },
      },
      {
        group: 'bottom',
        args: {
          x: '50%',
          y: 40,
          angle: 90,
        },
      }
    ],
  },
}, true)

export const CircuitDiagramImageSvg12 = Graph.registerNode('circuit-diagram-image-svg12', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },  
    image: {
      'xlink:href': '../../assets/svg/排流柜.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      left: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      right: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'left',
        args: {
          x: '0%',
          y: 20,
          angle: 90,
        },
      },
      {
        group: 'right',
        args: {
          x: '100%',
          y: 20,
          angle: 90,
        },
      }
    ],
  },
}, true)

export const CircuitDiagramImageSvg13 = Graph.registerNode('circuit-diagram-image-svg13', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },  
    image: {
      'xlink:href': '../../assets/svg/配电变压器.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      top: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'top',
        args: {
          x: '30%',
          y: 0,
          angle: 90,
        },
      },
      {
        group: 'bottom',
        args: {
          x: '30%',
          y: 30,
          angle: 90,
        },
      }
    ],
  },
}, true)

export const CircuitDiagramImageSvg14 = Graph.registerNode('circuit-diagram-image-svg14', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },  
    image: {
      'xlink:href': '../../assets/svg/三位置隔离开关.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      top: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'top',
        args: {
          x: '64%',
          y: 0,
          angle: 90,
        },
      },
      {
        group: 'bottom',
        args: {
          x: '64%',
          y: 40,
          angle: 90,
        },
      }
    ],
  },
}, true)

export const CircuitDiagramImageSvg15 = Graph.registerNode('circuit-diagram-image-svg15', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },  
    image: {
      'xlink:href': '../../assets/svg/手动隔离开关.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      top: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'top',
        args: {
          x: '56%',
          y: 0,
          angle: 90,
        },
      },
      {
        group: 'bottom',
        args: {
          x: '56%',
          y: 40,
          angle: 90,
        },
      }
    ],
  },
}, true)

export const CircuitDiagramImageSvg16 = Graph.registerNode('circuit-diagram-image-svg16', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },  
    image: {
      'xlink:href': '../../assets/svg/整流变压器.svg',
      width: 90,
      height: 90,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      leftTop: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      rightTop: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      leftBottom: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      rightBottom: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'leftTop',
        args: {
          x: '20%',
          y: 30,
          angle: 90,
        },
      },
      {
        group: 'rightTop',
        args: {
          x: '60%',
          y: 30,
          angle: 90,
        },
      },
      {
        group: 'leftBottom',
        args: {
          x: '20%',
          y: 60,
          angle: 90,
        },
      },
      {
        group: 'rightBottom',
        args: {
          x: '60%',
          y: 60,
          angle: 90,
        },
      },

    ],
  },
}, true)

export const CircuitDiagramImageSvg17 = Graph.registerNode('circuit-diagram-image-svg17', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },  
    image: {
      'xlink:href': '../../assets/svg/整流器.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      left: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      right: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'left',
        args: {
          x: '0%',
          y: 20,
          angle: 90,
        },
      },
      {
        group: 'right',
        args: {
          x: '100%',
          y: 20,
          angle: 90,
        },
      }
    ],
  },
}, true)

export const CircuitDiagramImageSvg18 = Graph.registerNode('circuit-diagram-image-svg18', {
  inherit: 'rect',
  width: 40,
  height: 40  ,
  attrs: {
    body: {
      stroke: 'transparent',
      strokeWidth: 1,
      fill: 'none',
      x: 40,
      y: 40
    },  
    image: {
      'xlink:href': '../../assets/svg/电阻.svg',
      width: 40,
      height: 40,
      x: 0,
      y: 0,
    }
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
  ],
  ports: {
    groups: {
      left: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      right: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      }
    },
    items: [
      {
        group: 'left',
        args: {
          x: '4%',
          y: 20,
          angle: 90,
        },
      },
      {
        group: 'right',
        args: {
          x: '65%',
          y: 20,
          angle: 90,
        },
      }
    ],
  },
}, true)




export const FlowChartTitleRect = Graph.registerNode('flow-chart-title-rect', {
  inherit: 'rect',
  width: 200,
  height: 68,
  attrs: {
    body: {
      stroke: '#5F95FF',
      strokeWidth: 1,
      fill: 'rgba(95,149,255,0.05)',
    },
    head: {
      refWidth: '100%',
      stroke: 'transparent',
      height: 28,
      fill: 'rgb(95,149,255)',
    },
    image: {
      'xlink:href':
        'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
      height: 16,
      x: 6,
      y: 6,
    },
    title: {
      text: 'Node',
      refX: 30,
      refY: 9,
      fill: '#ffffff',
      fontSize: 12,
      'text-anchor': 'start',
    },
    text: {
      text: 'this is content text',
      refX: 8,
      refY: 45,
      fontSize: 12,
      fill: 'rgba(0,0,0,0.6)',
      'text-anchor': 'start',
    },
  },
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'rect',
      selector: 'head',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
    {
      tagName: 'text',
      selector: 'title',
    },
    {
      tagName: 'text',
      selector: 'text',
    },
  ],
  ports: {
    groups: {
      top: {
        position: 'top',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      right: {
        position: 'right',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: 'bottom',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      left: {
        position: 'left',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
    },
    items: [
      {
        group: 'top',
      },
      {
        group: 'right',
      },
      {
        group: 'bottom',
      },
      {
        group: 'left',
      },
    ],
  },
}, true)

export const FlowChartAnimateText = Graph.registerNode(
  'flow-chart-animate-text',
  {
    inherit: 'rect',
    width: 200,
    height: 60,
    attrs: {
      body: {
        stroke: '#5F95FF',
        strokeWidth: 1,
        fill: 'rgba(95,149,255,0.05)',
      },
      text1: {
        class: 'animate-text1',
        text: 'AntV X6',
        fontSize: 32,
      },
      text2: {
        class: 'animate-text2',
        text: 'AntV X6',
        fontSize: 32,
      },
    },
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'text',
        selector: 'text1',
      },
      {
        tagName: 'text',
        selector: 'text2',
      },
    ],
  }, true
)

export class NodeGroup extends Node {
  private collapsed: boolean = true

  protected postprocess() {
    this.toggleCollapse(true)
  }

  isCollapsed() {
    return this.collapsed
  }

  toggleCollapse(collapsed?: boolean) {
    const target = collapsed == null ? !this.collapsed : collapsed
    if (target) {
      this.attr('buttonSign', { d: 'M 1 5 9 5 M 5 1 5 9' })
      this.resize(200, 40)
    } else {
      this.attr('buttonSign', { d: 'M 2 5 8 5' })
      this.resize(240, 240)
    }
    this.collapsed = target
  }
}

NodeGroup.config({
  shape: 'rect',
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
    {
      tagName: 'text',
      selector: 'text',
    },
    {
      tagName: 'g',
      selector: 'buttonGroup',
      children: [
        {
          tagName: 'rect',
          selector: 'button',
          attrs: {
            'pointer-events': 'visiblePainted',
          },
        },
        {
          tagName: 'path',
          selector: 'buttonSign',
          attrs: {
            fill: 'none',
            'pointer-events': 'none',
          },
        },
      ],
    },
  ],
  attrs: {
    body: {
      refWidth: '100%',
      refHeight: '100%',
      strokeWidth: 1,
      fill: 'rgba(95,149,255,0.05)',
      stroke: '#5F95FF',
    },
    image: {
      'xlink:href':
        'https://gw.alipayobjects.com/mdn/rms_0b51a4/afts/img/A*X4e0TrDsEiIAAAAAAAAAAAAAARQnAQ',
      width: 16,
      height: 16,
      x: 8,
      y: 12,
    },
    text: {
      fontSize: 12,
      fill: 'rgba(0,0,0,0.85)',
      refX: 30,
      refY: 15,
    },
    buttonGroup: {
      refX: '100%',
      refX2: -25,
      refY: 13,
    },
    button: {
      height: 14,
      width: 16,
      rx: 2,
      ry: 2,
      fill: '#f5f5f5',
      stroke: '#ccc',
      cursor: 'pointer',
      event: 'node:collapse',
    },
    buttonSign: {
      refX: 3,
      refY: 2,
      stroke: '#808080',
    },
  },
})

Graph.registerNode('groupNode', NodeGroup, true)
