FROM alpine:latest as npmi
RUN apk add --no-cache nodejs npm
WORKDIR /home/app
COPY . .
RUN npm install \
    && apk del npm

FROM alpine:latest as app
WORKDIR /home/app
RUN apk add --no-cache nodejs
CMD [ "node" , "bin/www" ]