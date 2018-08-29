FROM node:10.9.0-slim

MAINTAINER xiaobe <wyy.xb@qq.com>

RUN apt-get update \
	&& apt-get install -y build-essential libxi-dev libglu1-mesa-dev libglew-dev python pkg-config \
	libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential g++


WORKDIR /root


ENV HOME /root
ENV USER root


RUN npm i -g --unsafe-perm xb.node-pixi 