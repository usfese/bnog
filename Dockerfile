FROM alpine:latest
RUN apk install nodejs
COPY . /home/app
CMD [ "node" , "bin/www" ]