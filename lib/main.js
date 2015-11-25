var cli, colors, err, pkg, program;
program = require('commander');
colors = require('colors');
pkg = require('../package.json');
cli = require('./cli');

program.version(pkg.version)
       .option('-m, --message [message]', 'set message to be printed');

program.parse(process.argv);

if (process.argv.length === 2) {
  program.help();
} else {
  try {
    cli.print({
      message: program.message
    });
  } catch (_error) {
    err = _error;
    console.log("[", "hello-cli".white, "]", err.toString().red);
  }
}
