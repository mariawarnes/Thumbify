function pad(name, size) {
    var s = name;
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}

function SaveForWeb(saveFile, Path, fileName) {
    var saveFile = File(Path + "/" + fileName + ".jpg");
    var sfwOptions = new ExportOptionsSaveForWeb();
    sfwOptions.format = SaveDocumentType.JPEG;
    sfwOptions.includeProfile = false;
    sfwOptions.interlaced = 0;
    sfwOptions.optimized = true;
    sfwOptions.quality = 60; //0-100
    activeDocument.exportDocument(saveFile, ExportType.SAVEFORWEB, sfwOptions);
}

function isInteger(value) {
    return /^\d+$/.test(value);
}

// Obtain original ruler units preferences
var originalRulerUnits = app.preferences.rulerUnits;

// Set the ruler units prefs to pixels
app.preferences.rulerUnits = Units.PIXELS;

// Select a input folder
alert("Select a folder to process");
var inputFolder = Folder.selectDialog();

// Enter a maximum width for large
var fileName = prompt("Enter a file name starting number (with no leading '0's)", "");
var fileNameNum = parseInt(fileName) - 1;

// Select an output folder
alert("Select a folder to export thumbnails to");
var thumbOutFolder = Folder.selectDialog();

// Select a input folder
alert("Select a folder to export large images to");
var largeOutFolder = Folder.selectDialog();

// Enter a maximum width for large
var maxWidthLarge = prompt("Enter a maximum width for large images (px)", "920");

// Enter a width for large
var maxWidthThumb = prompt("Enter a width for thumbnail images (px)", "193");

// Enter a maximum height for large
var maxHeightThumb = prompt("Enter a height for thumbnail images (px)", "176");

// Get all jpg files in input folder
var inputFileList = inputFolder.getFiles(/.+\.(?:gif|jpe?g||tiff?||bmp|png)$/i);

var date = new Date();
var timestamp = date.getTime();
// Create a new folder in Downloads
var folder1 = Folder("~/Downloads/Image Processor Backup/" + timestamp + "/");
// Check if folder exists, if not create it.
if (!folder1.exists) folder1.create();

// For every jpg file...
for (var i = 0; i < inputFileList.length; i++) {
    // Open that file
    open(inputFileList[i]);

    var docRef = app.activeDocument.name;
    docRef = docRef.split('.').slice(0, -1).join('.');

    if (isInteger(docRef)) {
        docRef = pad(docRef, 3);
    }

    // Save the resized file to the downloads folder
    SaveForWeb(app.activeDocument, folder1, docRef);

    // Close the image without saving
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

// Get all jpg files in input folder
var renamedFileList = folder1.getFiles(/.+\.(?:gif|jpe?g||tiff?||bmp|png)$/i);

// For every jpg file...
for (var j = 0; j < renamedFileList.length; j++) {
    // Open that file
    open(renamedFileList[j]);
    fileNameNum++;

    // Get height and width
    var imgWidth = activeDocument.width;
    var imgHeight = activeDocument.height;

    // Large ////////////////////////////////////////
    // If image width is greater than input max width
    if (imgWidth > parseInt(maxWidthLarge)) {
        // Resize the image to that max width at 72dpi bicubic resampling
        activeDocument.resizeImage(UnitValue(parseInt(maxWidthLarge), "px"), null, 72, ResampleMethod.BICUBIC);
    }
    // Save the resized file to the selected large output folder
    SaveForWeb(app.activeDocument, largeOutFolder, pad(fileNameNum, 3));

    // Thumb ////////////////////////////////////////
    // If a portrait or square image
    if (imgHeight >= imgWidth) {
        // Resize the width of the image to the thumbnail width at 72dpi bicubic resampling
        activeDocument.resizeImage(UnitValue(parseInt(maxWidthThumb), "px"), null, 72, ResampleMethod.BICUBIC);
        activeDocument.resizeCanvas(maxWidthThumb + "px", maxHeightThumb + "px");

        // If a landscape image
    } else {
        // Resize the height of the image to the thumbnail height at 72dpi bicubic resampling
        activeDocument.resizeImage(null, UnitValue(parseInt(maxWidthThumb), "px"), 72, ResampleMethod.BICUBIC);
        activeDocument.resizeCanvas(maxWidthThumb + "px", maxHeightThumb + "px");
    }

    // Save the resized file to the selected large output folder
    SaveForWeb(app.activeDocument, thumbOutFolder, pad(fileNameNum, 3));

    // Close the image without saving
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

// Reset ruler preferences
app.preferences.rulerUnits = originalRulerUnits;

// Alert the user that their files have finished processing
if (renamedFileList.length === 0) {
    alert("An error has occurred. No files have been processed");
} else {
    alert(renamedFileList.length + " files successfully processed!");
}