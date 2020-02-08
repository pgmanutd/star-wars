/* eslint-disable import/no-extraneous-dependencies */
const execSh = require('exec-sh');
const { resolve } = require('path');

execSh([`node ${resolve('./scripts/build')}`, `node ${resolve('./build')}`]);
