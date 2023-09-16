FROM alpine:latest as npmi
RUN apk add --no-cache nodejs npm
COPY . /home/app
WORKDIR /home/app
RUN npm install \
    && apk del npm

FROM alpine:latest as app
WORKDIR /home/app
CMD [ "node" , "bin/www" ]