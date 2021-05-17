
export class useGridAttr {
    @UseState(
        {
            type: 'mesh',
            size: 10,
            color: '#e5e5e5',
            thickness: 1,
            colorSecond: '#d0d0d0',
            thicknessSecond: 1,
            factor: 4,
            bgColor: 'transparent',
            showImage: true,
            repeat: 'watermark',
            angle: 30,
            position: 'center',
            bgSize: JSON.stringify({ width: 150, height: 150 }),
            opacity: 0.1
        }) gridAttrs; setGridAttrs


    public setGridAttr = (key: string, value: any) => {

        // console.log(key, value)
        this.gridAttrs[key] = value


        
        this.setGridAttrs((prev: any) => ({
            ...prev,
            [key]: value,
        }))
        // console.log(this.gridAttrs)
        const createUseState = () => {
            const state = [];
            let index = 0;
            return (initialValue) => {
              state[index] = state[index] || initialValue;
              const currentIndex = index;
              const dispatch = (newState) => {
                state[currentIndex] = newState;
                // 重点
                index = 0;
              };
              return [state[index++], dispatch];
            };
          };
        //   console.log(createUseState)
        
        
    }
}

function UseState(seed: any) {
    return function (target, key) {
        target[key] = seed;
        let gridAttrs = Object.assign(target[key])
        target[`set${key.replace(/^\w/, c => c.toUpperCase())}`] =() => {}
           
    };
}
