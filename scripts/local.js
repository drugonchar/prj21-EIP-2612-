const main = require("../deploy/00_deploy_token");
main().catch((e) => { console.error(e); process.exit(1); });
