### What is **`this`**?

1. In JavaScript, the `this` keyword refers to an object.

2. Which object depends on how `this` is being invoked (used or called).

3. The `this` keyword refers to different objects depending on how it is used:

<table>
    <tbody>
        <tr>
            <td> 
                In an object method, <code> this </code> refers to the object. 
            </td>
        </tr>
        <tr>
            <td> 
                Alone, <code> this </code> refers to the global object. 
            </td>
        </tr>
        <tr>
            <td> 
                In a function, <code> this </code> refers to the global object. 
            </td>
        </tr>
        <tr>
            <td> 
                In a function, in strict mode, <code> this </code> is undefined. 
            </td>
        </tr>
        <tr>
            <td> 
                In an event, <code> this </code> refers to the element that received the event. 
            </td>
        </tr>
        <tr>
            <td> 
                Methods like <code> call() </code>, <code> apply() </code>, and <code> bind() </code> can refer <code> this </code> to any object. 
            </td>
        </tr>
    </tbody>
</table>
