// IMPORT MODULES under test here:
import { countsAsAYes } from '../utils.js';

const test = QUnit.test;

test('test should return a true statement when the given a word that starts with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test should return a true statement when the given a word that starts with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes('no');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
