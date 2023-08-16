
import _ from 'lodash';
import fs from 'fs';
import { promisify } from 'util';


async function returnFile() {
    const readFileAsync = promisify(fs.readFile);

    try {
        const textData = await readFileAsync('./randomText.txt', 'utf8');
        return textData;
    } catch (err) {
        throw err;
    }
}

async function text() {
    try {
        const textData = await returnFile();
        console.log(textData);
    } catch (error) {
        console.error(error);
    }
}

async function num_of_words() {
    try {
        const textData = await returnFile();
        console.log((_.words(textData)).length);
    } catch (error) {
        console.error(error);
    }
}

async function reversText() {
    try {
        const textData = await returnFile();
        console.log((_.words(textData)).reverse().toString());

        return a
    } catch (error) {
        console.error(error);
    }
}



async function words_uniq() {
    try {
        const textData = await returnFile();
        console.log(_.uniq(_.words(textData)).toString())
        console.log(_.uniq(_.words(textData)).length)
        console.log(_.toUpper(_.uniq(_.words(textData))))
    } catch (error) {
        console.error(error);
    }
}

async function wordsBigFromFive() {
    try {
        const textData = await returnFile();
        const uniq_data = _.uniq(_.words(textData))
        for (let i of uniq_data) {
            if (i.length > 5) {
                console.log(i);
            }
        }
    } catch (error) {
        console.error(error);
    }
}

async function includes_words() {
    try {
        const vowels = {}

        const textData = await returnFile();

        const uniq_data = _.uniq(_.words(textData))
        for (let i of uniq_data) {
            let counter = 0
            for (let j of i) {
                if (_.includes('aoieu', j)) {
                    counter++
                }
            }
            
            vowels[i] = counter

        }
       fs.writeFile('message.txt', JSON.stringify(vowels), 'utf-8', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');  });
    } catch (error) {
        console.error(error);
    }
}






// text()
// num_of_words()
// reversText()
// words_uniq()
// wordsBigFromFive()
includes_words()