#!/bin/bash -

BASE_DIR=$(pwd)
VIZCERAL_REPOSITORY="https://github.com/matche2100/vizceral.git"
VIZCERAL_REACT_REPOSITORY="https://github.com/matche2100/vizceral-react.git"
VIZCERAL_DIR="vizceral"
VIZCERAL_REACT_DIR="vizceral-react"


function install_vizceral() {

  if [[ -d ${VIZCERAL_DIR} ]]; then
    echo "${BASE_DIR}/${VIZCERAL_DIR} directory exists, skipping."
    return 0
  fi

  git clone ${VIZCERAL_REPOSITORY} ${VIZCERAL_DIR}

  result=$?

  if [[ result -ne 0 ]]; then
     echo 'git command abnormally ends, exit 1.'
     return 1
  fi

  cd ${VIZCERAL_DIR}

  npm install
  npm run build

  cd ${BASE_DIR}

  return 0
}

function vizceral_react_install() {

  if [[ -d ${VIZCERAL_REACT_DIR} ]]; then
    echo "${BASE_DIR}/${VIZCERAL_REACT_DIR} directory exists, skipping."
    return 0
  fi

  git clone ${VIZCERAL_REACT_REPOSITORY} ${VIZCERAL_REACT_DIR}

  result=$?

  if [[ result -ne 0 ]]; then
     echo 'git command abnormally ends, exit 1.'
     return 1
  fi

  cd ${VIZCERAL_REACT_DIR}

  npm install
  npm run build

  cd ${BASE_DIR}

  return 0
}

result = $(vizceral_install)

if [[ result -ne 0 ]]; then
   echo 'vizceral install abnormally end. abort.'
   exit 1
fi

result = $(vizceral_react_install)

if [[ result -ne 0 ]]; then
   echo 'vizceral-react install abnormally end. abort'
   exit 1
fi

exit 0

