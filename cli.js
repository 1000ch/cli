#!/usr/bin/env node
'use strict';
const process = require('process');
const importJsx = require('import-jsx');
const React = require('react');
const {render} = require('ink');

exports.exit = () => process.exit();

render(React.createElement(importJsx('./index.js')));
