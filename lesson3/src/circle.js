const canvas = document.getElementById('root');

class Circle extends Shape {
    constructor() {
        super()
    }
    circle = () => {
        const elem = document.createElement('canvas')
        canvas.appendChild(elem);
        const ctx = elem.getContext("2d");
        ctx.beginPath();
        ctx.arc(50, 50, 50, 0, Math.PI * 2, false);
        ctx.stroke();
    }
}



export default Circle;