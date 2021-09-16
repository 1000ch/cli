#!/usr/bin/env node
'use strict';

const importJsx = require('import-jsx');
const React = require('react');
const {render} = require('ink');

render(React.createElement(importJsx('./index')));
