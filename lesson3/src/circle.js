import Shape from './shape'

const canvas = document.getElementById('root');


class Circle extends Shape {
    constructor() {
        super()
    }
    draw = () => {
        const elem = document.createElement('canvas')
        elem.setAttribute('width', 400);
        elem.setAttribute('height', 400);
        canvas.appendChild(elem);
        const ctx = elem.getContext("2d");
        ctx.beginPath();
        ctx.arc(100, 100, 100, 0, Math.PI * 2, false);
        ctx.stroke();
    }
}



export default Circle;