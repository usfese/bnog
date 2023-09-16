FROM alpine:latest
RUN apk add --no-cache nodejs npm
COPY . /home/app
RUN npm install \
    && apk del npm
CMD [ "node" , "bin/www" ]