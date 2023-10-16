interface LoopingElement {
    element: HTMLElement;
    currentTranslation: number;
    speed: number;
    direction: boolean;
    scrollTop: number;
    metric: number;
    lerp: {
        current: number;
        target: number;
        factor: number;
    };

    events(): void;
    render(): void;
}


class LoopingElement {
    constructor(element: HTMLElement, currentTranslation: number, speed: number) {
        this.element = element;
        this.currentTranslation = currentTranslation;
        this.speed = speed;
        this.direction = true;
        this.scrollTop = 0;
        this.metric = 100;

        this.lerp = {
            current: this.currentTranslation,
            target: this.currentTranslation,
            factor: 0.2,
        };

        this.events();
        this.render();
    }

    events() {
        addEventListener("scroll", (e) => {
            let direction =
                pageYOffset || document.documentElement.scrollTop;
            if (direction > this.scrollTop) {
                this.direction = true;
                this.lerp.target += this.speed * 5;
            } else {
                this.direction = false;
                this.lerp.target -= this.speed * 5;
            }
            this.scrollTop = direction <= 0 ? 0 : direction;
        });
    }

    lerpFunc(current: number, target: number, factor: number) {
        this.lerp.current = current * (1 - factor) + target * factor;
    }

    goForward() {
        this.lerp.target += this.speed;
        if (this.lerp.target > this.metric) {
            this.lerp.current -= this.metric * 2;
            this.lerp.target -= this.metric * 2;
        }
    }

    goBackward() {
        this.lerp.target -= this.speed;
        if (this.lerp.target < -this.metric) {
            this.lerp.current -= -this.metric * 2;
            this.lerp.target -= -this.metric * 2;
        }
    }

    animate() {
        this.direction ? this.goForward() : this.goBackward();
        this.lerpFunc(this.lerp.current, this.lerp.target, this.lerp.factor);

        if(this.element) this.element.style.transform = `translateX(${this.lerp.current}%)`;
    }

    render() {
        this.animate();
        requestAnimationFrame(() => this.render());
    }
}

let elements = document.querySelectorAll<HTMLElement>(".item");


new LoopingElement(elements[0], 0, 0.08);
new LoopingElement(elements[1], -100, 0.08);

document.addEventListener('astro:after-swap', () => {
    let elements = document.querySelectorAll<HTMLElement>(".item");
    new LoopingElement(elements[0], 0, 0.08);
    new LoopingElement(elements[1], -100, 0.08);
});
