# JavaScript Validation API

## Constraint Validation DOM Methods

| Property | Description |
|----------|-------------|
| checkValidity() | Returns true if an input element contains valid data.
| setCustomValidity() | Sets the validationMessage property of an input element.

<br>

## Constraint Validation DOM Properties

| Property | Description |
|----------|-------------|
| validity | Contains boolean properties related to the validity of an input element.
| validationMessage | Contains the message a browser will display when the validity is false.
| willValidate | Indicates if an input element will be validated.

<br>

## Validity Properties

The **Validity Property** of an input element contains a number of properties related to the validity of data:

| Property | Description |
|----------|-------------|
| customError | Set to true, if a custom validity message is set.
| patternMismatch | Set to true, if an element's value does not match its pattern attribute.
| rangeOverflow | Set to true, if an element's value is greater than its max attribute.
| rangeUnderflow | Set to true, if an element's value is less than its min attribute.
| stepMismatch | Set to true, if an element's value is invalid per its step attribute.
| tooLong | Set to true, if an element's value exceeds its maxLength attribute.
| typeMismatch | Set to true, if an element's value is invalid per its type attribute.
| valueMissing | Set to true, if an element (with a required attribute) has no value.
| valid	| Set to true, if an element's value is valid.
