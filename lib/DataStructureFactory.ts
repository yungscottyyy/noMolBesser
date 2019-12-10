import { IDataStructure } from './IDataStructure';
import { DataStructure } from './DataStructure.enum';
import { Stack } from './Stack';
import { Queue } from './Queue';

export class DataStructureFactory 
{
    public create(dataStructure: DataStructure): IDataStructure 
    {
		return dataStructure === DataStructure.FIFO ? new Queue() : new Stack();
	}
}