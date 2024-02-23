
/**
 * Task 1
 */
function leafFiles(files) {
    const parentIds = new Set(files.map(file => file.parent));
    return files.filter(file => !parentIds.has(file.id)).map(file => file.name);
}

/**
 * Task 2
 */
function kLargestCategories(files, k) {
    const categoryCounts = {};
    files.forEach(file => {
        file.categories.forEach(category => {
            if (category in categoryCounts) {
                categoryCounts[category]++;
            } else {
                categoryCounts[category] = 1;
            }
        });
    });
    return Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])) // Add secondary alphabetical sort
    .slice(0, k)
    .map(entry => entry[0]);
}

/**
 * Task 3
 */
function calculateTotalSizes(files) {
    const sizes = {}; // Store initial size for each file ID
    const children = {}; // Map parent ID to list of child file IDs
    const calculated = {}; // Memorization: Store calculated total sizes

    // Initialize sizes with own size and children map
    files.forEach(file => {
        sizes[file.id] = file.size;
        children[file.id] = [];
    });

    // Build the children map
    files.forEach(file => {
        if (file.parent !== -1) {
            children[file.parent].push(file.id);
        }
    });

    //recursion :))
    function addChildrenSizes(fileId) {
        // Check if total size has already been calculated to avoid recalculation
        if (calculated[fileId] !== undefined) {
            return calculated[fileId];
        }
        children[fileId].forEach(childId => {
            sizes[fileId] += addChildrenSizes(childId);
        });

        // After calculating, store this total size to prevent future recalculations
        calculated[fileId] = sizes[fileId];

        // Return the total size of the current file (including all its descendants)
        return sizes[fileId];
    }

    // Calculate total sizes
    Object.keys(children).forEach(fileId => {
        addChildrenSizes(parseInt(fileId));
    });

    console.log(sizes);
    return sizes;
}


function largestFileSize(files) {
    if (files.length === 0) return 0;
    const totalSizes = calculateTotalSizes(files);
    return Math.max(...Object.values(totalSizes)); // Find the largest total size
}


function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

const testFiles = [
    { id: 1, name: "Document.txt", categories: ["Documents"], parent: 3, size: 1024 },
    { id: 2, name: "Image.jpg", categories: ["Media", "Photos"], parent: 34, size: 2048 },
    { id: 3, name: "Folder", categories: ["Folder"], parent: -1, size: 0 },
    { id: 5, name: "Spreadsheet.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 4096 },
    { id: 8, name: "Backup.zip", categories: ["Backup"], parent: 233, size: 8192 },
    { id: 13, name: "Presentation.pptx", categories: ["Documents", "Presentation"], parent: 3, size: 3072 },
    { id: 21, name: "Video.mp4", categories: ["Media", "Videos"], parent: 34, size: 6144 },
    { id: 34, name: "Folder2", categories: ["Folder"], parent: 3, size: 0 },
    { id: 55, name: "Code.py", categories: ["Programming"], parent: -1, size: 1536 },
    { id: 89, name: "Audio.mp3", categories: ["Media", "Audio"], parent: 34, size: 2560 },
    { id: 144, name: "Spreadsheet2.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 2048 },
    { id: 233, name: "Folder3", categories: ["Folder"], parent: -1, size: 4096 },
];

console.assert(arraysEqual(
    leafFiles(testFiles).sort((a, b) => a.localeCompare(b)),
    [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]
));
console.assert(
    kLargestCategories(testFiles, 2),
    ["Documents", "Folder", "Media","Programming"]
);
console.assert(arraysEqual(
    kLargestCategories(testFiles, 3),
    ["Documents", "Folder", "Media"]
));
// console.log(largestFileSize(testFiles))
console.assert(largestFileSize(testFiles) == 20992)
