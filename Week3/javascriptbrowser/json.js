// write in browser - in incognito mode

/* '{"greeting":"hello"}'

const jsonStr = '{"greeting":"hello"}'

JSON.parse(jsonStr)

const aPlainObj = JSON.parse(jsonStr)

aPlainObj.greeting = 'hi'

aPlainObj */

const data = {
    firstName: "John",
    lastName: "Doe",
    greeting: "Hello",
}
//undefined
JSON.stringify(data)
//'{"firstName":"John","lastName":"Doe","greeting":"Hello"}'
