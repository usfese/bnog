FROM alpine:latest
RUN apk add --no-cache nodejs
COPY . /home/app
CMD [ "node" , "bin/www" ]