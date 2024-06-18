import { promisify } from 'util';
import fs from 'fs'
const readFileAsync = promisify(fs.readFile);

export const generateName = async () => {
    try {
        const fNameIndex = Math.floor(Math.random() * 5008);
        const lNameIndex = Math.floor(Math.random() * 150);
        const data = await readFileAsync(__dirname + '/names.txt', 'utf-8');
        if (data) {
            const Data = JSON.parse(data);
            return Data[0][fNameIndex] + "_" + Data[1][lNameIndex] + "_" + Math.floor(Math.random() * 10000);
        }
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

