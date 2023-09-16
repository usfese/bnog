FROM alpine:latest
RUN apk add nodejs
COPY . /home/app
RUN cd /home/app \
    && npm install --production
CMD [ "node" , "bin/www" ]