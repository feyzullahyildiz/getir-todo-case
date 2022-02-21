[Demo App https://getir.feyz.cf](https://getir.feyz.cf)
## Development

This project is started with `lerna` and you need to use `yarn` instead of `npm`.

-   `cp packages/backend/conf.env packages/backend/.env` to make `.env` file. Then you need to add a valid `MONGO_CONNECTION_STRING` to the `.env` file 
-   You need to run `yarn install` to install dependencies
-   You need to run `yarn dev` to start frontend and backend in development mode.
-   
## Frontend
- it is core react application with typescript.
- `@reduxjs/toolkit` is used with rtk.
- css modules are used

## Backend
- it is core `express` application with typescript
- `joi` is used for validation.
- `mongoose` is used as `mondodb` client

