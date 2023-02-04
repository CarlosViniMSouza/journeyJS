let isValid = false;

function checkIsValid() {
    return (!isValid ? true : false);
}

console.log(`Buy authorizated: ${checkIsValid()}`);

console.log(typeof checkIsValid);