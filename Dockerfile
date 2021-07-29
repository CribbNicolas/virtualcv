# ===================
FROM node:lts-alpine

WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package*.json /frontend/
RUN npm install
RUN npm install -g @quasar/cli

EXPOSE 8080

# dev
CMD [ "quasar", "dev" ]




# docker build -t vcv:dev .
#
# docker run -v ${PWD}:/frontend -p 8080:8080 --rm vcv:dev
#


