FROM alpine
COPY ./* /home/app/
RUN apk add node