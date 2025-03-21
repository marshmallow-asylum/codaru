const fs = require('fs');

// Define skill ranking order
const rankOrder = [
    "vice captain",
    "gud",
    "mm",
    "eh",
    "meh",
    "mid",
    "pitiful",
    "abhorrent",
    "nonexistent"
];

// Read the input file
fs.readFile('members.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    
    // Split file content into lines
    let lines = data.split('\n').filter(line => line.trim() !== "");
    
    // Sort based on skill ranking
    lines = lines.sort((a, b) => {
        if(a.split(",").length < 3 || b.split(", ").length < 3) {
            return 0; // If either line is invalid, do not change their order
        }
        let skillA = a.split(",")[2].trim();
        let skillB = b.split(",")[2].trim();
        console.log(`${skillA}, ${skillB}`);
        return rankOrder.indexOf(skillA) - rankOrder.indexOf(skillB);
    });
    
    // Save sorted content to ranks.txt
    fs.writeFile('ranks.txt', lines.join('\n'), 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Ranks sorted and saved to ranks.txt');
        }
    });
});
