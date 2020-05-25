#! /bin/bash
set -e


DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

npx tsc ${DIR}/compiler.ts
node ${DIR}/compiler.js