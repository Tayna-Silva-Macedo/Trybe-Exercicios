FROM node AS react-build

WORKDIR /app
COPY ./exercicio-05 .
RUN npm install
RUN npm run build

FROM nginx AS web-server
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80