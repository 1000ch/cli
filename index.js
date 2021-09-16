'use strict';

const React = require('react');
const {Box, Text} = require('ink');
const SelectInput = require('ink-select-input').default;
const open = require('open');

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const createItems = items => {
  for (const item of items) {
    item.key = item.url || item.label;
  }

  return items;
};

const items = createItems([
  {
    label: 'Website',
    url: 'https://shogosensui.com'
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/1000ch'
  },
  {
    label: 'GitHub',
    url: 'https://github.com/1000ch'
  },
  {
    label: 'Blog',
    url: 'https://1000ch.net'
  },
  {
    label: 'Podcast',
    url: 'https://strobo.fm'
  },
  {
    label: '---------'
  },
  {
    label: 'Quit',
    action() {
      process.exit();
    }
  }
]);

module.exports = () => (
  <Box flexDirection="column">
    <Box marginBottom={1}>
      <Text>1000ch is a software engineer working on the web based in Tokyo, Japan.</Text>
    </Box>
    <SelectInput items={items} onSelect={handleSelect}/>
  </Box>
);
