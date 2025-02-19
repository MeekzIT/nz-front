FROM node:20

ARG ENV_FILE

RUN apt -y update && apt -y upgrade
RUN apt -y install nginx supervisor openssh-client unzip

# set working directory
WORKDIR /var/www/

# add `/var/www/node_modules/.bin` to $PATH
ENV PATH /var/www/node_modules/.bin:$PATH
ENV TZ="Europe/Moscow"

# install app dependencies
# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

RUN npm config set update-notifier false
RUN npm install

# add app
COPY . ./
COPY .env.${ENV_FILE} .env.production

# remove local envs
RUN rm -rf .env*.local;

COPY ./docker/supervisord.conf /etc/supervisord.conf
COPY ./docker/nginx-default.conf /etc/nginx/sites-enabled/default

# start app
RUN npm run build
#CMD npm run start
CMD ["/usr/bin/supervisord",  "-c",  "/etc/supervisord.conf"]
