import * as canvas from 'canvas';
import XMLHttpRequest from 'xhr2';
import EventEmitter from 'events';
import request from 'request';

class Element {

    constructor () {
        this.style = {};
        this.offsetWidth = 20;
        this.offsetHeight = 20;
        this._clientWidth = 20;
        this._clientHeight = 20;
    }

    addEventListener () {}

    appendChild () {}

    removeChild () {}

    get clientHeight () {
        return this._clientHeight;
    }

    set clientHeight (value) {
        this._clientHeight = value;
    }

    get clientWidth () {
        return this._clientWidth;
    }

    set clientWidth (value) {
        this._clientWidth = value;
    }
}

class AnchorElement extends Element {

    constructor () {
        super();

        this._href = '';
    }

    get href () {
        return this._href;
    }
    set href (value) {
        this._href = value;
    }
}

class CanvasContext {

    constructor (canvas) {
        this._canvas = canvas;
        this._ctx = this._canvas.getContext('2d');
    }

    get canvas () {
        return this._canvas;
    }

    get fillStyle () {
        return this._ctx.fillStyle;
    }
    set fillStyle (value) {
        this._ctx.fillStyle = value;
    }

    get font () {
        return this._ctx.font;
    }
    set font (value) {
        this._ctx.font = value;
    }

    get globalAlpha () {
        return this._ctx.globalAlpha;
    }
    set globalAlpha (value) {
        this._ctx.globalAlpha = value;
    }

    get globalCompositeOperation () {
        return this._ctx.globalCompositeOperation;
    }
    set globalCompositeOperation (value) {
        this._ctx.globalCompositeOperation = value;
    }

    get lineCap () {
        return this._ctx.lineCap;
    }
    set lineCap (value) {
        this._ctx.lineCap = value;
    }

    get lineJoin () {
        return this._ctx.lineJoin;
    }
    set lineJoin (value) {
        this._ctx.lineJoin = value;
    }

    get lineWidth () {
        return this._ctx.lineWidth;
    }
    set lineWidth (value) {
        this._ctx.lineWidth = value;
    }

    get miterLimit () {
        return this._ctx.miterLimit;
    }
    set miterLimit (value) {
        this._ctx.miterLimit = value;
    }

    get shadowBlur () {
        return this._ctx.shadowBlur;
    }
    set shadowBlur (value) {
        this._ctx.shadowBlur = value;
    }

    get shadowColor () {
        return this._ctx.shadowColor;
    }
    set shadowColor (value) {
        this._ctx.shadowColor = value;
    }

    get shadowOffsetX () {
        return this._ctx.shadowOffsetX;
    }
    set shadowOffsetX (value) {
        this._ctx.shadowOffsetX = value;
    }

    get shadowOffsetY () {
        return this._ctx.shadowOffsetY;
    }
    set shadowOffsetY (value) {
        this._ctx.shadowOffsetY = value;
    }

    get strokeStyle () {
        return this._ctx.strokeStyle;
    }
    set strokeStyle (value) {
        this._ctx.strokeStyle = value;
    }

    get textAlign () {
        return this._ctx.textAlign;
    }
    set textAlign (value) {
        this._ctx.textAlign = value;
    }

    get textBaseline () {
        return this._ctx.textBaseline;
    }
    set textBaseline (value) {
        this._ctx.textBaseline = value;
    }

    arc (x, y, radius, startAngle, endAngle, anticlockwise) {
        this._ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    }

    arcTo (x1, y1, x2, y2, radius) {
        this._ctx.arcTo(x1, y1, x2, y2, radius);
    }

    beginPath () {
        this._ctx.beginPath();
    }

    bezierCurveTo (cp1x, cp1y, cp2x, cp2y, x, y) {
        this._ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }

    clearRect (x, y, w, h) {
        this._ctx.clearRect(x, y, w, h);
    }

    clip () {
        this._ctx.clip();
    }

    closePath () {
        this._ctx.closePath();
    }

    createImageData (w, h) {
        return this._ctx.createImageData(w, h);
    }

    createLinearGradient (x0, y0, x1, y1) {
        return this._ctx.createLinearGradient(x0, y0, x1, y1);
    }

    createPattern (image, repetition) {
        return this._ctx.createPattern(
            image instanceof Canvas ? image._canvas : image,
            repetition);
    }

    createRadialGradient (x0, y0, r0, x1, y1, r1) {
        return this._ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    }

    drawImage (image, sx, sy, sw, sh, dx, dy, dw, dh) {
        this._ctx.drawImage(
            image instanceof Canvas ? image._canvas : image,
            sx, sy, sw, sh, dx, dy, dw, dh);
    }

    fill () {
        this._ctx.fill();
    }

    fillRect (x, y, w, h) {
        this._ctx.fillRect(x, y, w, h);
    }

    fillText (text, x, y, maxWidth) {
        this._ctx.fillText(text, x, y, maxWidth);
    }

    getImageData (sx, sy, sw, sh) {
        return this._ctx.getImageData(sx, sy, sw, sh);
    }

    isPointInPath (x, y) {
        return this._ctx.isPointInPath(x, y);
    }

    lineTo (x, y) {
        this._ctx.lineTo(x, y);
    }

    measureText (text) {
        return this._ctx.measureText(text);
    }

    moveTo (x, y) {
        this._ctx.moveTo(x, y);
    }

    putImageData (imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
        this._ctx.putImageData(
            imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
    }

    quadraticCurveTo (cpx, cpy, x, y) {
        this._ctx.quadraticCurveTo(cpx, cpy, x, y);
    }

    rect (x, y, w, h) {
        this._ctx.rect(x, y, w, h);
    }

    restore () {
        this._ctx.restore();
    }

    rotate (angle) {
        this._ctx.rotate(angle);
    }

    save () {
        this._ctx.save();
    }

    scale (sx, sy) {
        this._ctx.scale(sx, sy);
    }

    setTransform (m11, m12, m21, m22, dx, dy) {
        this._ctx.setTransform(m11, m12, m21, m22, dx, dy);
    }

    stroke () {
        this._ctx.stroke();
    }

    strokeRect (x, y, w, h) {
        this._ctx.strokeRect(x, y, w, h);
    }

    strokeText (text, x, y, maxWidth) {
        this._ctx.strokeText(text, x, y, maxWidth);
    }

    translate (dx, dy) {
        this._ctx.translate(dx, dy);
    }

    transform (m11, m12, m21, m22, dx, dy) {
        this._ctx.transform(m11, m12, m21, m22, dx, dy);
    }
}

class Canvas extends Element {

    constructor () {
        super();

        this._canvas = canvas.createCanvas(1, 1);
        this._ctx = new CanvasContext(this._canvas);
    }

    getContext (value) {
        return this._ctx;
    }

    get height () {
        return this._canvas.height;
    }
    set height (value) {
        this._canvas.height = value;
    }

    get width () {
        return this._canvas.width;
    }
    set width (value) {
        this._canvas.width = value;
    }

    toBuffer () {
        return this._canvas.toBuffer();
    }
}

canvas.Image.prototype._eventemitter = new EventEmitter;
canvas.Image.prototype.addEventListener = function (name, cb) {
    this._eventemitter.on(name, cb);
}
canvas.Image.prototype._src = '';
Object.defineProperty(canvas.Image.prototype, "src", {
    get: function src() {
        return this._src;
    },
    set: function src(value) {
        if (value.match(/^https?/)) {
            request({
                method: 'GET',
                url: value,
                encoding: null
            }, (err, res, body) => {
                if (err) {
                    this._eventemitter.emit('error', {
                        target: {
                            nodeName: err
                        }
                    });
                } else {
                    this._src = value;
                    this.source = body;
                    this._eventemitter.emit('load');
                }
            });
        } else {
            process.nextTick(() => {
                this._src = this.source = value;
                this._eventemitter.emit('load');
            });
        }
    }
});

class Document {
    constructor () {
        this.body = new Element;
        this.documentElement = this.body;
    }

    addEventListener () {}
    appendChild (child) {}
    removeChild (child) {}

    createElement (tag) {
        switch (tag) {
            case 'canvas':
                return new Canvas();
            case 'div':
                return new Element();
            case 'a':
                return new AnchorElement();
            default:
                throw new Error(`Document::createElement: unhandled "${tag}"`);
        }
    }
}

class Window {
    constructor (document) {
        this.document = document;
        this.navigator = {
            userAgent: 'node-pixi',
            appVersion: '0.1.0'
        };
        this.location = "http://localhost/";
        this.Image = canvas.Image;
    }

    addEventListener () {}
}

global.document = new Document;
global.window = new Window(global.document);
global.navigator = global.window.navigator;
global.Image = canvas.Image;
global.XMLHttpRequest = XMLHttpRequest;
global.Canvas = Canvas;