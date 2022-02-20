FROM node:16-alpine
WORKDIR /home/node/app


ADD . .
RUN yarn
WORKDIR /home/node/app/packages/backend
RUN yarn build
WORKDIR /home/node/app/packages/frontend
ENV REACT_APP_API=""
RUN yarn build
WORKDIR /home/node/app/packages/backend

ENV FRONTEND_DIST /home/node/app/packages/frontend/build
EXPOSE 3001
CMD [ "yarn", "start" ]


