const fs = require('fs');
const path = require('path');

// Define the source file and target directory
const sourceFile = '1.txt';
const targetDirectory = 'GAGAN_Ass_File';

// Read the content of the source file
fs.readFile(sourceFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Ensure the target directory exists, create it if not
    fs.mkdir(targetDirectory, { recursive: true }, (err) => {
        if (err) {
            console.error('Error creating target directory:', err);
            return;
        }

        // Define the target file path

       for(let i=1;i<=100;i++){

        const targetFile = path.join(targetDirectory, `${i}.txt`);

        // Write the content to the target file

        fs.writeFile(targetFile, data, 'utf8', (err) => {

            if (err) {
                console.error('Error writing to file:', err);
                return;
            }

            console.log('File copied successfully!');
        });
       }
    });
});