import Shape from './shape'

const canvas = document.getElementById('root');


class Square extends Shape {
    constructor() {
        super()
    }
    draw = () => {
        const elem = document.createElement('canvas')
        elem.setAttribute('width', 400);
        elem.setAttribute('height', 400);
        canvas.appendChild(elem);
        const ctx = elem.getContext("2d");
        ctx.strokeRect(100, 100, 200, 200);
    }
}



export default Square;