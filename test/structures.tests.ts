import { Queue } from "../lib/Queue";
import { Stack } from "../lib/Stack";
import { expect } from "chai";

describe("Data structures", () => 
{
    describe("Queue", () => 
    {
        it("Returns size of queue", () => 
        {
            var itemQueue = new Queue();

            const expectedResult = 0;
            const testResult = itemQueue.size();

            expect(testResult).to.equal(expectedResult);
        });

        it("it can add 5 brand names with queue size of 5", () => 
        {
            var itemQueue = new Queue();

            const expectedResult = 5;

            const brandNames = 
            [
              "Nike",
              "Rick Owens",
              "Raf Simons",
              "North Face",
              "Prada",
            ];

            brandNames.forEach(brand => itemQueue.add(brand));
            const testResult = itemQueue.size();

            expect(testResult).to.equal(expectedResult);
        });

        it("Item queue is empty", () => 
        {
            var itemQueue = new Queue();

            const expectedResult = true;
            const testResult = itemQueue.isEmpty();

            expect(testResult).to.equal(expectedResult);
        });

        it("Peeks from queue of 6 items", () => 
        {
            var itemQueue = new Queue();

            const expectedResult = "Nike";

            itemQueue.add("Nike")

            const testResult = itemQueue.peek();

            expect(testResult).to.equal(expectedResult);
        });

        it('Poll brand from itemsqueue', () => 
        {
            var itemQueue = new Queue();

            const expectedResult = 'Nike';

            const brandNames = 
            [
                "Nike", 
                "Rick Owens", 
                "Raf Simons", 
                "Northface", 
                "Prada", 
                "Cactus Jack"
            ];

            brandNames.forEach(brand => itemQueue.add(brand));
            const testResult = itemQueue.poll();

            expect(testResult).to.equal(expectedResult);
        });
    });

    describe('Stack', () => 
    {
        it("Returns size of stack", () => 
        {
            var itemStack = new Stack();

            const expectedResult = 0;
            const testResult = itemStack.size();

            expect(testResult).to.equal(expectedResult);
        });

        it("it can add 5 brand names with stack size of 5", () => 
        {
            var itemStack = new Stack();

            const expectedResult = 5;

            const brandNames = 
            [
                "Nike",
                "Rick Owens",
                "Raf Simons",
                "North Face",
                "Prada",
            ];

            brandNames.forEach(brand => itemStack.add(brand));
            const testResult = itemStack.size();

            expect(testResult).to.equal(expectedResult);
        });

        it("Item stack is empty", () => 
        {
            var itemStack = new Stack();

            const expectedResult = true;
            const testResult = itemStack.isEmpty();

            expect(testResult).to.equal(expectedResult);
        });

        it("Peeks from stack of 6 items", () => 
        {
            var itemStack = new Stack();

            const expectedResult = "Cactus Jack";
            
            itemStack.add("Cactus Jack");

            const testResult = itemStack.peek();

            expect(testResult).to.equal(expectedResult);
        });

        it("Poll brand from item stack", () => 
        {
            var itemStack = new Stack();

            const expectedResult = 'Cactus Jack';

            const brandNames = 
            [
                "Nike", 
                "Rick Owens", 
                "Raf Simons", 
                "Northface", 
                "Prada", 
                "Cactus Jack"
            ];

            brandNames.forEach(brand => itemStack.add(brand));
            const testResult = itemStack.poll();

            expect(testResult).to.equal(expectedResult);
        });
    });
})