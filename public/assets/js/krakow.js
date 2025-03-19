
let timeline;
const isMobile = !!window.matchMedia("(max-width: 767px)").matches;
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            timeline.play();
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5,
    root: null,
});
// canvas
const canvasElement = document.getElementsByTagName("canvas")[0]
const bounds = canvasElement.getBoundingClientRect()

// setup
set(canvasElement)
size(bounds.width, bounds.height)
canvas.onwheel = () => { }
window.onresize = () => {
    const bounds = canvasElement.getBoundingClientRect()
    size(bounds.width, bounds.height)
}

// stylin'
const vw = width / 100, vh = height / 100
const vmin = min(vw, vh);
strokeWeight(8);
strokeCap(ROUND);
strokeJoin(ROUND);
imageMode(CENTER); //ski.js bug, need to fix noFill(), noStroke(), etc
textAlign(CENTER, CENTER)
smooth();
const blossom = new Image;
blossom.src = "/assets/images/blossom.svg";
const black = color(27, 29, 33), green = color(94, 143, 76);

// utility functions
function dashedLine(x1, y1, x2, y2, dashLength = 15) {
    const dx = x2 - x1, dy = y2 - y1;
    const len = sqrt(dx * dx + dy * dy);
    const nx = dx / len, ny = dy / len;
    for (let i = 0; i < len; i += dashLength * 2) {
        line(x1 + nx * i, y1 + ny * i, x1 + nx * (i + dashLength), y1 + ny * (i + dashLength));
    }
}
function getLength(path) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", path);
    svg.appendChild(pathElement);
    document.body.appendChild(svg);
    const length = pathElement.getTotalLength();
    document.body.removeChild(svg);
    return length
}

//animated objects
const data = {
    curves: [
        {
            string: `M ${10 * vw} ${10 * vh} L ${70 * vw} ${10 * vh} C ${100 * vw} ${10 * vh}, ${100 * vw} ${50 * vh}, ${70 * vw} ${50 * vh}`,
            length: 0,
        },
        {
            string: `M ${30 * vw} ${50 * vh} C ${0 * vw} ${50 * vh}, ${0 * vw} ${90 * vh}, ${30 * vw} ${90 * vh} L ${90 * vw} ${90 * vh}`,
            length: 0,
        }
    ],
    boxes: [
        { alpha: 0, title: "march 24", titleX: 20 * vw, titleY: 30 * vh, text: "Avatar Challenge", textX: 20 * vw, textY: 33.5 * vh },
        { alpha: 0, title: "march 31", titleX: 45 * vw, titleY: 30 * vh, text: "AI Challenge", textX: 45 * vw, textY: 33.5 * vh },
        { alpha: 0, title: "april 7", titleX: 70 * vw, titleY: 30 * vh, text: "Under One Thousand\nCharacters Challenge", textX: 70 * vw, textY: 34.5 * vh },
        { alpha: 0, title: "april 10", titleX: 50 * vw, titleY: 47.75 * vh, text: "Escape Room Challenge", textX: 50 * vw, textY: 51.25 * vh },
        { alpha: 0, title: "april 14", titleX: 40 * vw, titleY: 70 * vh, text: "Crossfit Challenge", textX: 40 * vw, textY: 66 * vh },
        { alpha: 0, title: "april 21", titleX: 65 * vw, titleY: 70 * vh, text: "Finale", textX: 65 * vw, textY: 66 * vh },
        { alpha: 0, title: "may 5", titleX: 90 * vw, titleY: 70 * vh, text: "Awards Ceremony", textX: 90 * vw, textY: 66 * vh },
    ],
    dots: [
        { x: 20 * vw, y: 10 * vh, size: 0 },
        { x: 45 * vw, y: 10 * vh, size: 0 },
        { x: 70 * vw, y: 10 * vh, size: 0 },
        { x: 40 * vw, y: 90 * vh, size: 0 },
        { x: 65 * vw, y: 90 * vh, size: 0 },
        { x: 90 * vw, y: 90 * vh, size: 0 },
    ],
    dashes: [
        { x1: 20 * vw, y1: 13 * vh, x2: 20 * vw, y2: 25 * vh, length: 0 },
        { x1: 45 * vw, y1: 13 * vh, x2: 45 * vw, y2: 25 * vh, length: 0 },
        { x1: 70 * vw, y1: 13 * vh, x2: 70 * vw, y2: 25 * vh, length: 0 },
        { x1: 40 * vw, y1: 87 * vh, x2: 40 * vw, y2: 75 * vh, length: 0 },
        { x1: 65 * vw, y1: 87 * vh, x2: 65 * vw, y2: 75 * vh, length: 0 },
        { x1: 90 * vw, y1: 87 * vh, x2: 90 * vw, y2: 75 * vh, length: 0 },
    ],
    flowers: [
        { x: 15 * vw, y: 43 * vh, rotate: random(360) | 0 },
        { x: 85 * vw, y: 55 * vh, rotate: random(360) | 0 },
    ],
    flowerScale: 0,
    flowerRotate: 0,
    add(index) {
        timeline.to(this.dots[index], {
            size: 20,
            duration: 0.3,
            ease: "sine.inOut"
        })
        timeline.to(this.dashes[index], {
            length: 12,
            duration: 0.5,
            ease: "sine.inOut"
        })
        timeline.to(this.boxes[index >= 3 ? index + 1 : index], {
            alpha: 255,
            duration: 0.3,
            ease: "sine.inOut"
        })
    },
    init() {
        this.curves.forEach((curve, i) => {
            this.curves[i].maxLength = getLength(curve.string);
            this.curves[i].path = new Path2D(curve.string);
        })
    },
    update () {
        clear(); 
        data.curves.forEach(curve => {
            if (curve.length > 0) {
                stroke(black);
                strokeWeight(8);
                noFill();
                ctx.setLineDash([curve.length, curve.maxLength]);
                ctx.stroke(curve.path);
            }
        })
        data.dots.forEach(dot => {
            if (dot.size > 0) {
                noStroke();
                fill(black);
                ellipse(dot.x, dot.y, dot.size, dot.size);
            }
        });
        data.dashes.forEach((dash, i) => {
            if(dash.length > 0){
                stroke(green);
                strokeWeight(4);
                ctx.setLineDash([dash.length, 12])
                dashedLine(dash.x1, dash.y1, dash.x2, dash.y1 + (i < 3 ? dash.length : -dash.length) * vh);
            }
        })
        data.boxes.forEach(box => {
            if (box.alpha > 0) {
                noStroke();
                fill(green, box.alpha);
                textFont("League Spartan Variable bold", 4 * vmin);
                text(box.title, box.titleX, box.titleY);
                textFont("League Spartan Variable", 3 * vmin);
                text(box.text, box.textX, box.textY);
            }
        });
        data.flowers.forEach(flower => {
            if (data.flowerScale > 0) {
                pushMatrix();
                translate(flower.x, flower.y);
                rotate(data.flowerRotate + flower.rotate);
                scale(data.flowerScale);
                image(blossom, 0, 0, 10 * vmin, 10 * vmin);
                popMatrix();
            }
        });
    }
}
data.init();

// gsap timeline
timeline = gsap.timeline({
    onUpdate: data.update,
    paused: true
});

timeline.to(data.curves[0], {
    length: 10 * vw,
    duration: 0.7,
    ease: "sine.inOut"
});
data.add(0);
timeline.to(data.curves[0], {
    length: 35 * vw,
    duration: 0.7,
    ease: "sine.inOut"
});
data.add(1);
timeline.to(data.curves[0], {
    length: 60 * vw,
    duration: 0.7,
    ease: "sine.inOut"
});
data.add(2);
timeline.to(data.curves[0], {
    length: data.curves[0].maxLength,
    duration: 0.7,
    ease: "sine.inOut"
})
timeline.to(data.boxes[3], {
    alpha: 255,
    duration: 0.3,
    ease: "sine.inOut"
})
const diff = data.curves[1].maxLength - 50 * vw;
timeline.to(data.curves[1], {
    length: diff,
    duration: 0.7,
    ease: "sine.inOut"
})
data.add(3);
timeline.to(data.curves[1], {
    length: diff + 25 * vw,
    duration: 0.7,
    ease: "sine.inOut"
})
data.add(4);
timeline.to(data.curves[1], {
    length: data.curves[1].maxLength,
    duration: 0.7,
    ease: "sine.inOut"
})
data.add(5);
timeline.to(data, {
    flowerScale: 0.7,
    flowerRotate: 360,
    duration: 1,
    ease: "sine.inOut"
})
observer.observe(canvas);

console.log("Timeline progress:", timeline.progress());
if (timeline.progress() === 0) {
    timeline.play();
}
