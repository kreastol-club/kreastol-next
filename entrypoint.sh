#!/bin/sh

npx prisma migrate dev --name init --preview-feature
npx prisma generate

exec "$@"
