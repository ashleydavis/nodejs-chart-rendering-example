
const c3ChartMaker = require('c3-chart-maker');

const inputFilePath = "./data/example-data.csv";
const chartDefinitionFile = "./charts/equity.json";
const outputFilePath = "./output/equity.png";

c3ChartMaker(inputFilePath, chartDefinitionFile, outputFilePath)
    .then(() => { 
        console.log('Done');
    })
    .catch(err => {
        console.error(err);
    });
