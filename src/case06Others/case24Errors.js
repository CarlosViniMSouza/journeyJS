/*
    1. The 'try'     -> statement defines a code block to run (to try).

    2. The 'catch'   -> statement defines a code block to handle any error.

    3. The 'finally' -> statement defines a code block to run regardless of the result.

    4. The 'throw'   -> statement defines a custom error.
*/

const dataToConvert = "This is a String";

try {

    // Correct: dataToConvert.toString();

    // Wrong: dataToConvert.toExponencial();

    console.log(`\nData converted for: ${typeof dataToConvert}`);
} catch (error) {
    
    console.log('\nData not converted properly!');
} finally {

    console.log('\nBlock try/catch closed!');
}
