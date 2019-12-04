FROM nginx:1.15-alpine

LABEL app=teekay-ot

# Modify the default config to serve index.html for any non-matching URI
RUN cd /etc/nginx/conf.d/ && \
    sed -i '/index  index.html index.htm;/a \        try_files $uri /index.html;' default.conf

# Copy all the static files into the nginx root directory
COPY /build /usr/share/nginx/html
