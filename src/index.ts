import { createRequire } from "node:module"
import { getChilkatLibName, type ChilkatLibName } from './determineChilkatLibName'
import anylogger from 'anylogger'
const log = anylogger('ck-node24-wrapper')

log.debug('attempting to load platform-specific @chilkat modules');
const chilkatLibName: ChilkatLibName | undefined = getChilkatLibName();

if (!chilkatLibName || !chilkatLibName.module) {
  throw new Error('Chilkat library not found');
}

log.debug(`loading ${chilkatLibName.module}`);

const chilkat = createRequire(import.meta.url)(chilkatLibName.module)

if (!chilkat) {
  throw new Error('Chilkat library not found');
}
export { getChilkatLibName, type ChilkatLibName };

export default chilkat;