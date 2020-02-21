// http://git.ukis.eoc.dlr.de/projects/ADMIN/repos/ukis-ci-scripts/browse/packaging/upload-npm-package.bash#1,3,6,8,12,20-21,28,30-31,33,41,56,62,67

import * as PATH from 'path';
import * as FS from 'fs';
import { exec } from 'child_process';
import * as readline from 'readline';
import { setVersionsforDependencies } from '../library';


export function run() {
  const CWD = process.cwd();
  let REGISTRY = '';
  let REGISTRY_USER = '';
  let REGISTRY_USER_PASSWORD = '';
  let PKG_DIR = '';
  let PKG_VERSION = '';

  function showHelp() {
    console.log(`
        Syntax:   node  [options]

        Options:
        -h, --help              Print this message.
        -p, --path              Path to the build package. (required)
            --pv                Version for the package to publish. (required)
        -r  --registry
        `);
  }

  const args = require('minimist')(process.argv.slice(2));
  // console.dir(args);
  if (Object.keys(args).length <= 1 || args.h || args.help) {
    showHelp();
  }

  if (args.r || args.registry) {
    REGISTRY = args.r || args.registry;
  } else {
    console.log(`You have to provide the a registry to publish the package!`);
    return;
  }

  if (args.p || args.path) {
    PKG_DIR = args.p || args.path; // PATH.join(CWD, 'package.json');
  } else {
    console.log(`You have to provide the path to the build package!`);
    return;
  }

  if (args.pv) {
    PKG_VERSION = args.pv; // PATH.join(CWD, 'package.json');
  } else {
    console.log(`You have to provide the version for the package to publish!`);
    return;
  }


  getInput('username:').then(user => {
    if (user) {
      REGISTRY_USER = user;
    }
    getInput('password:', '*').then(pass => {
      if (pass) {
        REGISTRY_USER_PASSWORD = pass;
        const NPM_AUTH_HASH = Buffer.from(`${REGISTRY_USER}:${REGISTRY_USER_PASSWORD}`).toString('base64');
        publishPackage(REGISTRY_USER, REGISTRY, NPM_AUTH_HASH, CWD, PKG_DIR, PKG_VERSION);
      } else {
        console.log('provide a password');
      }
    });
  });
}


function publishPackage(REGISTRY_USER, REGISTRY, NPM_AUTH_HASH, CWD, PKG_DIR, PKG_VERSION) {
  // npm supports project-specific config files .npmrc, so lets use this to avoid littering the global npm configuration
  const npmrc = `
    init-author-email = ${REGISTRY_USER}@eoc.dlr.de
    init-author-name = ${REGISTRY_USER}
    init-author-url = http://www.dlr.de
    email = ${REGISTRY_USER}@eoc.dlr.de
    registry = ${REGISTRY}
    _auth = ${NPM_AUTH_HASH}
    loglevel = "verbose"`;

  const packagePath = PATH.join(CWD, PKG_DIR);
  const npmrcpath = PATH.join(packagePath, '.npmrc');
  FS.writeFileSync(npmrcpath, npmrc);

  setVersion(PKG_VERSION, packagePath);

  console.log(`Publish package from '${packagePath}' with version '${PKG_VERSION}' to '${REGISTRY}'`);

  exec(`cd ${packagePath} &&  npm publish`,
    (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
        console.log(`exec error: ${error} `);
      }
    });
}


async function getInput(question: string, obscurer?: string) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  if (obscurer) {
    const mute = (buff) => {
      const passlength = rl['line'].length + 1;
      const data = buff.toString();
      switch (data) {
        case '\u0004':
        case '\r':
        case '\n':
          process.stdin.removeListener('data', mute);
          process.stdin.pause();
          break;
        case '\u0003': // Ctrl-c
          process.stdin.removeListener('data', mute);
          process.stdin.pause();
          break;
        default:
          readline.cursorTo(process.stdout, 0);
          process.stdout.write(question + Array(passlength).join(obscurer));
          break;
      }
    };
    process.stdin.on('data', mute);
  }

  return new Promise<string>(resolve => rl.question(question, ans => {
    rl.close();
    resolve(ans);
  }));
}


function setVersion(version: string, packagePath: string) {
  const path = require(PATH.join(packagePath, 'package.json'));
  setVersionsforDependencies([path]);
}
run();