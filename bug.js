```javascript
// Incorrect use of $in operator with an array of objects
db.collection.find({ "field": { $in: [{ "key": "value1" }, { "key": "value2" }] } });
```