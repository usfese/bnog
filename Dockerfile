FROM alpine:latest
COPY . /home/app
RUN apk add nodejs
RUN cd /home/app \
    && npm install --production
CMD [ "node" , "bin/www" ]