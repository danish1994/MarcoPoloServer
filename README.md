# Marcopolo Server

## Here we have the following files.

```
  .
  ├── README.md
  ├── controller.js
  ├── index.js
  ├── package.json
  ├── server.js
  └── service.js
  
```

* `index.js` - Creates a Multicore Server
* `server.js` - Listen on PORT - 3000
* `controller.js` - Handles the output. Took number from query params and do the computation.
* `service.js` - Here all the business logic resides. We cache all the computed values to make the process fast.

## How to run the project.

Just the run the following command `npm start` or `node index.js`