rm answer.zip
node app.js > results.out
zip -q answer.zip *.js problem.in results.out
cat results.out