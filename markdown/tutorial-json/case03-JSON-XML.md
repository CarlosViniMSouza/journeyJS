# JSON x XML

## Comparing JSON with XML

Both JSON and XML can be used to receive data from a web server.

The following JSON and XML examples both define an employees object, with an array of 3 employees:

```json
{
    "employees": [
        {
            "name": "Carlos",
            "job": "Software Engineer",
        },
        {
            "name": "Vinicius",
            "job": "FullStack Developer",
        }
    ]
}
```

```xml
<employees>
    <employee>
        <name>Carlos</name> <job>Software Engineer</job>
    </employee>
    <employee>
        <name>Vinicius</name> <job>FullStack Developer</job>
    </employee>
</employees>
```

## Why JSON is Better Than XML

XML is much more difficult to parse than JSON.

JSON is parsed into a ready-to-use JavaScript object.

For AJAX applications, JSON is faster and easier than XML.
