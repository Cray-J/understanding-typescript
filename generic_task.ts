class MyMap<T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T){ // should create a new key-value pair
        this.map[key] = item;
    }

    getItem(key: string){ // should retrieve the value of the provided key
        return this.map[key];
    }

    clear(){ // should remove all key-value pairs
        this.map = {};
    }

    printMap() { // should output key-value pairs
        for(let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
