export class Shape {
    private color: string
    private filled: boolean

    constructor(color: string, filled: boolean) {
        this.color = color ?? "red"
        this.filled = filled ?? true
    }
    public getColor(): string {
        return this.color
    }
    public setcolor(color: string): void {
        this.color = color
    }
    public isFilled(): boolean {
        return this.filled
    }
    public setFilled(filled: boolean): void {
        this.filled = filled
    }
    public toString(): string {
        return `Shape=[color=${this.color},fillef=${this.filled}]`
    }
}
//Circle
export class Circle extends Shape {
    private radius: number

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled)
        this.radius = radius ?? 1.0
    }
    public getRadius(): number {
        return this.radius
    }
    public setRadius(radius: number): void {
        this.radius = radius
    }
    public getArea(): number {
        const area = Math.PI * Math.pow(this.radius, 2)
        return area
    }
    public getPerimeter(): number {
        const perimeter = 2 * Math.PI * this.radius
        return perimeter
    }
    public toString(): string {
        return `Circle[${super.toString()},radius=${this.radius}]`
    }
}
//Rectangle
export class Rectangle extends Shape {
    private width: number
    private length: number

    constructor( width: number, length: number,color: string, filled: boolean) {
        super(color, filled)
        this.width = width ?? 1.0
        this.length = length ?? 1.0
    }
    public getWidth(): number {
        return this.width
    }
    public setWigth(width: number): void {
        this.width = width
    }
    public getLength(): number {
        return this.length
    }
    public setLength(length: number): void {
        this.length = length
    }
    public getArea(): number {
        const area = this.width * this.length
        return area
    }
    public getPerimeter(): number {
        return 2 * (this.width + this.length);
    }
    public toString(): string {
        return `Rectamgle[${super.toString},width=${this.width},length=${this.length}]`
    }
}
// Square
export class Square extends Rectangle {
    constructor(side: number, color: string, filled: boolean) {
        super( side, side,color, filled)
    }
    public getSide(): number {
        return super.getWidth()
    }
    public setSide(side: number): void {
        super.setWigth(side)
        super.setLength(side)
    }
    public setWigth(side: number): void {
        super.setWigth(side)
    }
    public setLength(side: number): void {
        super.setLength(side)
    }
    public toString(): string {
        return `Square[${super.toString()}]`
    }
}