class ImageQueue {
    static bitmapCache = new Map();

    constructor(context){
        this.ctx = context;
        this.queue = [];
        this.isProcessing = false;
    }

    /* load methods */
    load(name){
        return new Promise((resolve, reject) => {
            if (ImageQueue.bitmapCache.has(name)) {
                resolve(ImageQueue.bitmapCache.get(name));
            } else {
                this.queue.push(name);
                if (!this.isProcessing) this.processQueue().then(() => {
                    if (ImageQueue.bitmapCache.has(name)) {
                        resolve(ImageQueue.bitmapCache.get(name));
                    } else {
                        reject(new Error(`Failed to load image: ${name}`));
                    }
                }).catch(reject);
            }
        });
    }
    loadAll(names){
        return Promise.all(names.map(name => this.loadImage(name)));
    }

    /* get methods */
    async getAll(names){
        const bitmaps = await Promise.all(names.map(name => this.get(name)));
        return bitmaps;
    }
    async get(name){
        if(!ImageQueue.bitmapCache.has(name)) await this.load(name);
        return  ImageQueue.bitmapCache.get(name);
    }
    async draw(name, x, y, options = {}) {
        const bitmap = await this.get(name);

        if (bitmap) {
            if(options.width && options.height) {
                const { width, height } = options;
                this.ctx.drawImage(bitmap, x, y, width, height);
            }
            else if(options.width) {
                const { width } = options;
                this.ctx.drawImage(bitmap, x, y, width, bitmap.height * (width / bitmap.width));
            }
            else if(options.height) {
                const { height } = options;
                this.ctx.drawImage(bitmap, x, y, bitmap.width * (height / bitmap.height), height);
            }
            else if(options.scale) {
                const { scale } = options;
                this.ctx.drawImage(bitmap, x, y, bitmap.width * scale, bitmap.height * scale);
            }
            else {
                this.ctx.drawImage(bitmap, x, y);
            }
        } else {
            console.error(`Image not found: ${name}`);
        }
    }

    /* process methods */
    async processQueue() {
        this.isProcessing = true;
        while (this.queue.length > 0) {
            const name = this.queue.shift();
            await this.loadImage(name);
        }
        this.isProcessing = false;
    }
    async loadImage(name, version="latest") {
        if (ImageQueue.bitmapCache.has(name)) return ImageQueue.bitmapCache.get(name);
        const url = `https://cdn.jsdelivr.net/gh/marshmallow-asylum/codaru@${version}/ka/images/${name}.js`;
        try {
            await ImageQueue.loadScript(url);
            const bitmap = await ImageQueue.toBitmap(name);
            ImageQueue.bitmapCache.set(name, bitmap);
            return bitmap;
        } catch (error) {
            console.error(`Failed to load image: ${name}`, error);
        }
    }

    /* static methods */
    static async loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
    static async toBitmap(name) {
        if(name in bitmapHash){
            return bitmapHash[name]
        }
        let string = window["img_" + name]
        string = string.split(",")[1];
        const binary = atob(str);
        const length = binary.length;
        const bytes = new Uint8Array(length);
        for (let i = 0; i < length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        const decoder = new ImageDecoder({ data: bytes.buffer, type: "image/webp" });
        await decoder.tracks.ready;
        const frame = (await decoder.decode()).image;
        const bitmap = await createImageBitmap(frame);
        bitmapHash[name] = bitmap;
        return bitmap;
    }
}
window.ImageQueue = ImageQueue;