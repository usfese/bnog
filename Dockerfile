FROM alpine:latest as npmi
RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production

FROM alpine:latest as app
WORKDIR /app
RUN apk add --no-cache nodejs npm
COPY . /app
COPY --from=npmi /app/node_modules ./node_modules
EXPOSE 3000
CMD [ "npm", "start" ]

