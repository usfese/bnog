FROM alpine:latest
RUN apk install nodejs nodejs-npm
COPY . /home/app
RUN cd /home/app \
    && npm install --production
CMD [ "node" , "bin/www" ]