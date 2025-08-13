import { assert } from "chai";
import anylogger from "anylogger";
import path from "node:path";
import "anylogger-console";
import { execa } from "execa";
import chilkat, {getChilkatLibName} from "ck-node24-wrapper";


const INSTALL_TIMEOUT_SEC = 10;
const LOAD_DELAY_SEC = 3;
const LOAD_TIMEOUT_SEC = 5;

const log = anylogger("ck-node24-wrapper-test:chilkat");

let installedOK = false;
const __dirname = import.meta.dirname;

async function runInstaller() {
  const installerPath = path.resolve(
    __dirname,
    "../dist/installer/installChilkat.js"
  );
  log.info("installerPath:", installerPath);
  const result = await execa("node", [installerPath], { stdio: "inherit" });
  if (result.exitCode === 0) {
    installedOK = true;
  }
  return result;
}

// function that waits for a timeout before resolving
const wait = function (msec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, msec);
  });
};

describe("chilkat", () => {
  describe("determine chilkat", () => {
    it("should return chilkat library name", () => {
      const chilkatLibName = getChilkatLibName();
      assert.match(
        chilkatLibName.module,
        /^@chilkat\/ck-node/,
        "Expected chilkat module name to begin with '@chilkat/ck-node'"
      );
    });
  });

  describe("install chilkat", () => {
    it("should install", async function () {
      log.debug(`setting timeout to ${INSTALL_TIMEOUT_SEC} secs`);
      this.timeout(INSTALL_TIMEOUT_SEC * 1000);
      await runInstaller();
      log.debug("installed");
    });
  });

  describe("load chilkat", function () {
    // this is "it" or "it.skip"
    it("should be able to load chilkat", async function () {
      log.debug(`setting timeout to ${LOAD_TIMEOUT_SEC} secs`);
      this.timeout(LOAD_TIMEOUT_SEC * 1000);
      log.debug(`giving the 'install chilkat' ${LOAD_DELAY_SEC} secs to reinstall`);
      await wait(LOAD_DELAY_SEC);
      if (!installedOK) {
        log.debug("install failed - skipping test");
        this.skip();
      }
      log.debug(`test running`);

      log.debug("chilkat:", chilkat.Cert);
      assert.isFunction(chilkat.Cert, "Expected chilkat.Cert to be a function");
    });
  });
});
