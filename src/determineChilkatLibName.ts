import os from 'os';
import anylogger from 'anylogger'

const log = anylogger('ck-node24-wrapper:determineChilkatLibName');
const CHILKAT_VERSION = "11.1.0";
const CHILKAT_NODE_VERSION = "24";


export type ChilkatLibName = {
  /** The npm library name e.g. @chilkat/ck-node24-linux-x64 */
  module: string
  /** The (hard-coded) version of the Chilkat library e.g. "11.1.0" */
  version: string
};

/**
 * Return the name of the Chilkat module to use for the current Node platform and arch.
 * @returns The Chilkat module to use
 */
export function getChilkatLibName(): ChilkatLibName | undefined {
  log.debug('attempting to determine the name of the platform-specific @chilkat module to use');

  type ChilkatModuleMap = { [key in NodeJS.Platform]?: { module: string } };

  // chilkat modules indexed by platform.os and arch
  const CHILKAT_MODULES: ChilkatModuleMap = {
    darwin: {
      module: `@chilkat/ck-node${CHILKAT_NODE_VERSION}-mac-universal`
    },
    linux: {
      // Note: only x64, arm64 and arm are supported
      module: `@chilkat/ck-node${CHILKAT_NODE_VERSION}-linux-${os.arch()}`
    },
    win32: {
      module: `@chilkat/ck-node${CHILKAT_NODE_VERSION}-win64`
    }
  };

  const chilkatLibName = CHILKAT_MODULES[os.platform()]?.module;
  if (!chilkatLibName) {
    log.error(`Chilkat library not found for platform ${os.platform()} and arch ${os.arch()}`);
    return undefined;
  }

  return {
    module: chilkatLibName,
    version: CHILKAT_VERSION
  };
}

