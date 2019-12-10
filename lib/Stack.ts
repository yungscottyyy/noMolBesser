import { IDataStructure } from './IDataStructure';

export class Stack implements IDataStructure 
{
	private stack = [];

    peek() 
    {
		return this.stack[(this.size() - 1)];
	}
    poll() 
    {
		return this.stack.pop();
	}
    add(value: any): void 
    {
		this.stack.push(value);
    }
    size(): number 
    {
		return this.stack.length;
	}
    isEmpty(): boolean 
    {
		return (!this.size()) ? true : false;
	}
}