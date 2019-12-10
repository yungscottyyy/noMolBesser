import { IDataStructure } from "./IDataStructure";

export class Queue implements IDataStructure 
{
    private itemQueue = [];

    public peek(): any 
    {
        return this.itemQueue[0];
    }
    public poll(): any 
    {
        return this.itemQueue.shift();
    }
    public add(value: any): void 
    {
        this.itemQueue.push(value);
    }
    public size(): number 
    {
        return this.itemQueue.length;
    }
    public isEmpty(): boolean 
    {
        return (!this.size()) ? true : false;
    }
}