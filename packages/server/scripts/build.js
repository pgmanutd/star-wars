/* eslint-disable import/no-extraneous-dependencies */
const execSh = require('exec-sh');

execSh(['cross-env NODE_ENV=production babel src --out-dir build']);
