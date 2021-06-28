import { Command } from 'commander';

const program = new Command();

program
  .command('bundle-size')
  .description('generates bundles size reports')
