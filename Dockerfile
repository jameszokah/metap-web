FROM ubuntu
RUN apt-get -y update && apt-get -y upgrade && \
apt-get install -y build-essential pip net-tools iputils-ping iproute2 curl

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs
WORKDIR /app
EXPOSE 3000-3000
EXPOSE 3001-3001
EXPOSE 3333-3333
EXPOSE 5000-5050
EXPOSE 10000-10100