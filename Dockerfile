FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build -- --mode custom

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080