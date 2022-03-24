# ! Derivando da imagem node para a public
FROM node:alpine AS by-codes-tec-public

LABEL org.label-schema.name="by-codes-tec-public"
LABEL description="by-codes-tec-public"

## diretorios de trabalho
WORKDIR /usr/by-codes-tec-public

## Arquivos de iniciacao par ao node
COPY package*.json ./

## install dependences
RUN npm install

## Copia projeto
COPY ./public  ./public
COPY ./.env .

## porta de acesso
EXPOSE 3000 

## start do ambiente
CMD ["npm", "run", "dev:public"]

# ! Derivando da imagem node para a API
FROM node:alpine AS by-codes-tec-api

LABEL org.label-schema.name="by-codes-tec-api"
LABEL description="by-codes-tec-api"

## diretorios de trabalho
WORKDIR /usr/by-codes-tec-api

## Arquivos de iniciacao par ao node
COPY package*.json ./

## install dependences
RUN npm install

## Copia projeto
COPY ./api  ./api
COPY ./.env .

## porta de acesso
EXPOSE 5000 

## start do ambiente
CMD ["npm", "run", "dev:api"]

# ! Derivando da imagem oficial do MySQL
FROM mysql:5.7 AS by-codes-tec-mysql

LABEL org.label-schema.name="by-codes-tec-mysql"
LABEL description="by-codes-tec-mysql"

## Enviroment
ENV MYSQL_ALLOW_EMPTY_PASSWORD="yes"
ENV MYSQL_DATABASE="development"
ENV MYSQL_USER="development"
ENV MYSQL_ROOT_PASSWORD="Alterar123"
ENV MYSQL_PASSWORD="Alterar123"

## diretorios de trabalho
WORKDIR /var/lib/mysql

## PORT
EXPOSE 3306:3307

CMD ["--default-authentication-plugin=mysql_native_password"]