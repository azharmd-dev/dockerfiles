FROM almalinux:9
RUN dnf install nginx -y
RUN rm -rf /usr/share/nginx/html/*
COPY *.html *.js *.css /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]