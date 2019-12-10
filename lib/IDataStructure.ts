export interface IDataStructure {
    size(): number;
    add(value: any): void;
    peek(): any;
    poll(): any;
    isEmpty(): boolean;
}