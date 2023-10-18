ARG NODE_VERSION=15.9-alpine
FROM node:$NODE_VERSION AS build

ENV NEXT_PUBLIC_MATOMO_URL="https://matomo.fabrique.social.gouv.fr"
ENV NEXT_PUBLIC_MATOMO_SITE_ID="33"

RUN mkdir /app && chown 1000:1000 /app
WORKDIR /app
USER 1000

COPY yarn.lock .yarnrc.yml ./
COPY --chown=1000:1000 .yarn .yarn
RUN yarn fetch --immutable && yarn cache clean

COPY . /app/

RUN yarn build

RUN yarn workspaces focus --production && yarn cache clean

FROM node:$NODE_VERSION AS server

COPY --from=build . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["yarn", "start"]
