const canvas = document.getElementById('root');
// import Circle from './circle';


class Shape {
  constructor(name) {
    this.name = name
  }

  draw() {
    const elem = document.createElement('canvas')
    canvas.appendChild(elem);
    const ctx = elem.getContext("2d");
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, Math.PI * 2, false);
    ctx.stroke();
  }

  selector() {
    console.log(this.name)
  }

}

export default Shape;