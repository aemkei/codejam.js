rm output/archiv.zip
/usr/local/bin/node app.js > output/results.out
zip -q output/archiv.zip *.js problem.in output/results.out
cat output/results.out