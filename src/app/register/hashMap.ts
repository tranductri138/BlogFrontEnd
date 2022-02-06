export class HashMap {
    myHash: IHash = {}
    count: number = 0;
    constructor() { }
    set(key: string) {
        this.myHash[key] = this.count;
        this.count++;
    }
    get(key: string) {
        return this.myHash[key]
    }
}

export interface IHash {
    [detail: string]: number
}
