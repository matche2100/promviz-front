#!/bin/bash -

BASE_DIR=$(pwd)
VIZCERAL_REPOSITORY="https://github.com/matche2100/vizceral.git"
VIZCERAL_DIR="vizceral"

if [[ -d ${VIZCERAL_DIR} ]]; then
  echo "${BASE_DIR}/${VIZCERAL_DIR} directory exists, skipping."
  exit 0
fi

git clone ${VIZCERAL_REPOSITORY} ${VIZCERAL_DIR}

result=$?

if [[ result -ne 0 ]]; then
   echo 'git command abnormally ends, exit 1.'
   exit 1
fi

cd ${VIZCERAL_DIR}

npm install
npm run build

exit 0

