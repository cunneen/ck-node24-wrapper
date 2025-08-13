// an install script to install the appropriate @chilkat/ck-node24-* module
import os from 'os';
import { execa } from 'execa';
import anylogger from 'anylogger';

import { getChilkatLibName } from "../determineChilkatLibName"

const log = anylogger('ck-node24-wrapper-install');

log.debug('installing @chilkat/ck-node24-* modules');

const chilkatLibName = getChilkatLibName();
if (!chilkatLibName) {
  log.error(`Chilkat library not found for platform ${os.platform()} and arch ${os.arch()}`);
  process.exit(1);
}

log.debug(`installing ${chilkatLibName!.module}`);
(async () => {
  await execa('npm', ['install', chilkatLibName!.module, '--no-save'], { stdio: 'inherit' });
})()

