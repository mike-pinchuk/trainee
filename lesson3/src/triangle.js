import Shape from './shape';

const canvas = document.getElementById('root');

class Triangle extends Shape {
    constructor() {
        super()
    }

    draw = () => {
        const elem = document.createElement('canvas');
        elem.setAttribute('width', 400);
        elem.setAttribute('height', 400);
        canvas.appendChild(elem);
        const ctx = elem.getContext('2d');
        // ctx.strokeRect(100, 100, 200, 200);
        ctx.beginPath();
        ctx.moveTo(190, 105);
        ctx.lineTo(90, 300);
        ctx.lineTo(310, 300);
        ctx.closePath();
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
}

export default Triangle;