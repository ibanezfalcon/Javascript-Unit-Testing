import { describe, test, it, expect } from "vitest";
import {max} from "../project1";
describe('max', () =>{
it('Number 1 should be greater than number 2', () =>{
//AAA
//Arrage,Act,Assert
//Arrange
const a = 2;
const b = 1;
//Act
const result = max(a,b);
//Assert
expect(result).toBe(2);
})

it('Number 2 should be greater than number 1', () => {
    expect(max(1,2)).toBe(2);
})
})