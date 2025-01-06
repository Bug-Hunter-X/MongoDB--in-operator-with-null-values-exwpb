```javascript
// Correct usage using $or to handle null values separately
db.collection.find({ $or: [{ field: { $in: [1, 2] } }, { field: null }] });
```