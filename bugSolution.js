```javascript
// Correct use of $elemMatch operator
db.collection.find({ "field": { $elemMatch: { "key": { $in: ["value1", "value2"] } } } }); 
```