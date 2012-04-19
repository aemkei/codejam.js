rm answer.zip
node script.js > results.out
zip -r answer.zip script.js underscore.js results.out
cat results.out