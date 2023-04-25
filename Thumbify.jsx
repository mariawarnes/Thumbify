// Enter a starting number
//var fileName = prompt("Enter a file name starting number (with no leading '0's)", "");
//var fileNameNum = parseInt(fileName) - 1;

/*
Code for Import https://scriptui.joonas.me — (Triple click to select):
{"activeId":40,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Property Images Processor","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Group","parentId":6,"style":{"enabled":true,"varName":"inputFolder","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"left"}},"item-3":{"id":3,"type":"StaticText","parentId":1,"style":{"enabled":true,"varName":"inputFolderText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Folder with new images","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"foldersPnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Folders","preferredSize":[350,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"left"}},"item-8":{"id":8,"type":"Group","parentId":6,"style":{"enabled":true,"varName":"thumbOutFolder","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":"left"}},"item-9":{"id":9,"type":"StaticText","parentId":8,"style":{"enabled":true,"varName":"thumbOutFolderText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Existing thumbnails folder","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"sizesPnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Image Sizes","preferredSize":[350,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"center"}},"item-12":{"id":12,"type":"Group","parentId":11,"style":{"enabled":true,"varName":"maxWidthLarge","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-13":{"id":13,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":"maxWidthLargeText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Large images:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"EditText","parentId":12,"style":{"enabled":true,"varName":"maxWidthLargeInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"920","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"Group","parentId":11,"style":{"enabled":true,"varName":"maxThumb","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-17":{"id":17,"type":"EditText","parentId":15,"style":{"enabled":true,"varName":"maxWidthThumb","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"193","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-18":{"id":18,"type":"Group","parentId":6,"style":{"enabled":true,"varName":"largeOutFolder","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":"left"}},"item-19":{"id":19,"type":"StaticText","parentId":18,"style":{"enabled":true,"varName":"largeOutFolderText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Existing large images folder","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-24":{"id":24,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"positionPnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Positioning","preferredSize":[350,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"left"}},"item-25":{"id":25,"type":"StaticText","parentId":15,"style":{"enabled":true,"varName":"maxThumbText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Thumbnail images:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-26":{"id":26,"type":"StaticText","parentId":24,"style":{"enabled":true,"varName":"positionText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Where to add new images","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-27":{"id":27,"type":"RadioButton","parentId":24,"style":{"enabled":true,"varName":"positionRadioAfter","text":"After old images","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-28":{"id":28,"type":"RadioButton","parentId":24,"style":{"enabled":true,"varName":"positonRadioBefore","text":"Before old images","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-30":{"id":30,"type":"Button","parentId":1,"style":{"enabled":true,"varName":"inputFolderBtn","text":"Choose...","justify":"right","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-31":{"id":31,"type":"Button","parentId":8,"style":{"enabled":true,"varName":"thumbOutFolderBtn","text":"Choose...","justify":"right","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-32":{"id":32,"type":"Button","parentId":18,"style":{"enabled":true,"varName":"largeOutFolderBtn","text":"Choose...","justify":"right","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-33":{"id":33,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"px max-width","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-34":{"id":34,"type":"StaticText","parentId":15,"style":{"enabled":true,"varName":"maxWidthThumbText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"px width","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-35":{"id":35,"type":"EditText","parentId":15,"style":{"enabled":true,"varName":"maxHeightThumb","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"176","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-36":{"id":36,"type":"StaticText","parentId":15,"style":{"enabled":true,"varName":"macHegithThumbText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"px height","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-38":{"id":38,"type":"Progressbar","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[350,4],"alignment":"left","helpTip":null}},"item-39":{"id":39,"type":"Button","parentId":42,"style":{"enabled":true,"varName":"btnStart","text":"Start","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-40":{"id":40,"type":"Button","parentId":42,"style":{"enabled":true,"varName":"btnCancel","text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-42":{"id":42,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"btnGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":"center"}}},"order":[0,6,1,3,30,8,9,31,18,19,32,11,12,13,14,33,15,25,17,34,35,36,24,26,28,27,42,39,40,38],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/

var docRef = "";
var fileTypes = "/.+\.(?:gif|jpe?g||tiff?||bmp|png)$/i";

// DIALOG
// ======
var dialog = new Window("dialog");
dialog.text = "Property Images Processor";
dialog.orientation = "column";
dialog.alignChildren = ["center", "top"];
dialog.spacing = 10;
dialog.margins = 16;

var note = dialog.add("statictext", undefined, undefined, { name: "note" });
note.text = "Accepted file formats: gif, jpg, jpeg, tiff, bmp, png";

// FOLDERSPNL
// ==========
var foldersPnl = dialog.add("panel", undefined, undefined, { name: "foldersPnl" });
foldersPnl.text = "Folders";
foldersPnl.preferredSize.width = 500;
foldersPnl.orientation = "column";
foldersPnl.alignChildren = ["left", "top"];
foldersPnl.spacing = 10;
foldersPnl.margins = 10;
foldersPnl.alignment = ["left", "top"];

// INPUTFOLDER
// ===========
var inputFolderUi = foldersPnl.add("group", undefined, { name: "inputFolder" });
inputFolderUi.orientation = "row";
inputFolderUi.alignChildren = ["left", "top"];
inputFolderUi.spacing = 10;
inputFolderUi.margins = 0;
inputFolderUi.alignment = ["left", "top"];

var inputFolderText = inputFolderUi.add("statictext", undefined, undefined, { name: "inputFolderText" });
inputFolderText.text = "Folder with new images";

var inputFolderBtn = inputFolderUi.add("button", undefined, undefined, { name: "inputFolderBtn" });
inputFolderBtn.text = "Choose...";
inputFolderBtn.justify = "right";
var inputFolder = "";
inputFolderBtn.onClick = inputFolderClick;

var inputFolderPath = foldersPnl.add("statictext", undefined, undefined, { name: "inputFolderPath" });
// This is stupid but I can't find another workaround
inputFolderPath.text = "                                                                                                                                                                  ";

// THUMBOUTFOLDER
// ==============
var thumbOutFolderUi = foldersPnl.add("group", undefined, { name: "thumbOutFolder" });
thumbOutFolderUi.orientation = "row";
thumbOutFolderUi.alignChildren = ["left", "center"];
thumbOutFolderUi.spacing = 10;
thumbOutFolderUi.margins = 0;
thumbOutFolderUi.alignment = ["left", "top"];

var thumbOutFolderText = thumbOutFolderUi.add("statictext", undefined, undefined, { name: "thumbOutFolderText" });
thumbOutFolderText.text = "Existing thumbnails folder";

var thumbOutFolderBtn = thumbOutFolderUi.add("button", undefined, undefined, { name: "thumbOutFolderBtn" });
thumbOutFolderBtn.text = "Choose...";
thumbOutFolderBtn.justify = "right";
var thumbOutFolder = "";
thumbOutFolderBtn.onClick = thumbOutFolderClick;

var thumbOutFolderPath = foldersPnl.add("statictext", undefined, undefined, { name: "thumbOutPath" });
thumbOutFolderPath.text = "                                                                                                                                                                  ";

// LARGEOUTFOLDER
// ==============
var largeOutFolderUi = foldersPnl.add("group", undefined, { name: "largeOutFolder" });
largeOutFolderUi.orientation = "row";
largeOutFolderUi.alignChildren = ["left", "center"];
largeOutFolderUi.spacing = 10;
largeOutFolderUi.margins = 0;
largeOutFolderUi.alignment = ["left", "top"];

var largeOutFolderText = largeOutFolderUi.add("statictext", undefined, undefined, { name: "largeOutFolderText" });
largeOutFolderText.text = "Existing large images folder";

var largeOutFolderBtn = largeOutFolderUi.add("button", undefined, undefined, { name: "largeOutFolderBtn" });
largeOutFolderBtn.text = "Choose...";
largeOutFolderBtn.justify = "right";
var largeOutFolder = "";
largeOutFolderBtn.onClick = largeOutFolderClick;

var largeOutFolderPath = foldersPnl.add("statictext", undefined, undefined, { name: "largeOutFolderPath" });
largeOutFolderPath.text = "                                                                                                                                                                  ";

// SIZESPNL
// ========
var sizesPnl = dialog.add("panel", undefined, undefined, { name: "sizesPnl" });
sizesPnl.text = "Image Sizes";
sizesPnl.preferredSize.width = 500;
sizesPnl.orientation = "column";
sizesPnl.alignChildren = ["left", "top"];
sizesPnl.spacing = 10;
sizesPnl.margins = 10;
sizesPnl.alignment = ["left", "top"];

// MAXWIDTHLARGE
// =============
var maxWidthLarge = sizesPnl.add("group", undefined, { name: "maxWidthLarge" });
maxWidthLarge.orientation = "row";
maxWidthLarge.alignChildren = ["left", "center"];
maxWidthLarge.spacing = 10;
maxWidthLarge.margins = 0;

var maxWidthLargeText = maxWidthLarge.add("statictext", undefined, undefined, { name: "maxWidthLargeText" });
maxWidthLargeText.text = "Large images:";

var maxWidthLargeInput = maxWidthLarge.add('edittext {properties: {name: "maxWidthLargeInput"}}');
maxWidthLargeInput.text = "920";

var statictext1 = maxWidthLarge.add("statictext", undefined, undefined, { name: "statictext1" });
statictext1.text = "px max-width";

// MAXTHUMB
// ========
var maxThumb = sizesPnl.add("group", undefined, { name: "maxThumb" });
maxThumb.orientation = "row";
maxThumb.alignChildren = ["left", "center"];
maxThumb.spacing = 10;
maxThumb.margins = 0;

var maxThumbText = maxThumb.add("statictext", undefined, undefined, { name: "maxThumbText" });
maxThumbText.text = "Thumbnail images:";

var maxWidthThumb = maxThumb.add('edittext {properties: {name: "maxWidthThumb"}}');
maxWidthThumb.text = "193";

var maxWidthThumbText = maxThumb.add("statictext", undefined, undefined, { name: "maxWidthThumbText" });
maxWidthThumbText.text = "px width";

var maxHeightThumb = maxThumb.add('edittext {properties: {name: "maxHeightThumb"}}');
maxHeightThumb.text = "176";

var maxHeightThumbText = maxThumb.add("statictext", undefined, undefined, { name: "maxHeightThumbText" });
maxHeightThumbText.text = "px height";

// POSITIONPNL
// ===========
var positionPnl = dialog.add("panel", undefined, undefined, { name: "positionPnl" });
positionPnl.text = "Positioning";
positionPnl.preferredSize.width = 500;
positionPnl.orientation = "column";
positionPnl.alignChildren = ["left", "top"];
positionPnl.spacing = 10;
positionPnl.margins = 10;
positionPnl.alignment = ["left", "top"];

var positionText = positionPnl.add("statictext", undefined, undefined, { name: "positionText" });
positionText.text = "Where to add new images";

var positionRadioNone = positionPnl.add("radiobutton", undefined, undefined, { name: "positionRadioNone" });
positionRadioNone.text = "There are no existing images";
positionRadioNone.value = true;

var positionRadioBefore = positionPnl.add("radiobutton", undefined, undefined, { name: "positionRadioBefore" });
positionRadioBefore.text = "Before existing images - Existing files will be renamed";

var positionRadioAfter = positionPnl.add("radiobutton", undefined, undefined, { name: "positionRadioAfter" });
positionRadioAfter.text = "After existing images";

// BTNGROUP
// ========
var btnGroup = dialog.add("group", undefined, { name: "btnGroup" });
btnGroup.orientation = "row";
btnGroup.alignChildren = ["left", "center"];
btnGroup.spacing = 10;
btnGroup.margins = 0;
btnGroup.alignment = ["center", "top"];

var btnStart = btnGroup.add("button", undefined, undefined, { name: "btnStart" });
btnStart.text = "OK";
btnStart.onClick = go;

var btnCancel = btnGroup.add("button", undefined, undefined, { name: "btnCancel" });
btnCancel.text = "Cancel";

// DIALOG
// ======
var progressbar1 = dialog.add("progressbar", undefined, undefined, { name: "progressbar1" });
progressbar1.maxvalue = 100;
progressbar1.value = 50;
progressbar1.preferredSize.width = 500;
progressbar1.preferredSize.height = 4;
progressbar1.alignment = ["left", "top"];

dialog.show();

function inputFolderClick() {
    inputFolder = Folder.selectDialog();
    inputFolderPath.text = inputFolder.fsName.toString();
}

function thumbOutFolderClick() {
    thumbOutFolder = Folder.selectDialog();
    thumbOutFolderPath.text = thumbOutFolder.fsName.toString();
}

function largeOutFolderClick() {
    largeOutFolder = Folder.selectDialog();
    largeOutFolderPath.text = largeOutFolder.fsName.toString();
}

function pad(name, size) {
    while (name.length < size) {
        name = "0" + name;
    }
    return name;
}

function SaveForWeb(saveFile, Path, fileName) {
    saveFile = File(Path + "/" + fileName + ".jpg");
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

function go() {
    // Obtain original ruler units preferences
    var originalRulerUnits = app.preferences.rulerUnits;

    // Set the ruler units prefs to pixels
    app.preferences.rulerUnits = Units.PIXELS;

    // Get all jpg files in input folder
    var inputFileList = inputFolder.getFiles(/.+\.(?:gif|jpe?g||tiff?||bmp|png)$/i);

    var date = new Date();
    var timestamp = date.getTime();
    // Create a new folder in Downloads
    var folder1 = Folder("~/Downloads/Thumbify Backup/" + timestamp + "/");
    // Check if folder exists, if not create it.
    if (!folder1.exists) folder1.create();

    // First loop sorts new images into correct order by sanitising file names to some extent

    // For every jpg file...
    for (var i = 0; i < inputFileList.length; i++) {
        // Open that file
        open(inputFileList[i]);

        var docRef = app.activeDocument.name;
        // Strip spaces out
        docRef = docRef.replace(/ /g, '');
        // Remove file suffixes in name
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

    // Get num of last image
    var thumbOutFileList = thumbOutFolder.getFiles(/.+\.(?:gif|jpe?g||tiff?||bmp|png)$/i);
    var largeOutFileList = largeOutFolder.getFiles(/.+\.(?:gif|jpe?g||tiff?||bmp|png)$/i);
    var fileNameNum = 0;

    if (positionRadioBefore.value === true) {
        // Get length of new images
        var newLength1 = parseInt(renamedFileList.length);
        var newLength2 = parseInt(renamedFileList.length);
        //var newLength2 = renamedFileList.length;

        // Rename existing large with length + 1 + '-' + file extension e.g. 9-.jpg
        for (var k = 0; k < largeOutFileList.length; k++) {
            var suffix = largeOutFileList[k].name.split('.').pop();
            largeOutFileList[k].rename((newLength1 + 1) + "-." + suffix);
            //alert("one: " + (newLength1 + 1) + "-." + suffix);
            newLength1++;
        }

        // Rename existing large removing '-' and adding padding e.g. 009.jpg
        for (var l = 0; l < largeOutFileList.length; l++) {
            var suffix1 = largeOutFileList[l].name.split('.').pop();
            var name1 = largeOutFileList[l].name.split('.').slice(0, -1).join('.');
            name1 = name1.slice(0, -1);
            largeOutFileList[l].rename(pad(name1, 3) + "." + suffix1);
        }

        // Rename existing thumb with length + 1 + '-' + file extension e.g. 9-.jpg
        for (var m = 0; m < thumbOutFileList.length; m++) {
            var suffix2 = thumbOutFileList[m].name.split('.').pop();
            thumbOutFileList[m].rename((newLength2 + 1) + "-." + suffix2);
            newLength2++;
        }

        // Rename existing large removing '-' and adding padding e.g. 009.jpg
        for (var n = 0; n < thumbOutFileList.length; n++) {
            var suffix3 = thumbOutFileList[n].name.split('.').pop();
            var name2 = thumbOutFileList[n].name.split('.').slice(0, -1).join('.');
            name2 = name2.slice(0, -1);
            thumbOutFileList[n].rename(pad(name2, 3) + "." + suffix3);
        }

        fileNameNum = 1;
    } else if (positionRadioNone.value === true || positionRadioAfter.value === true) {
        // Get last existing image number
        if (thumbOutFileList.length > 0) {
            var fileName = thumbOutFileList[thumbOutFileList.length - 1].name.toString();

            // Remove file extension from name
            fileName = fileName.split('.').slice(0, -1).join('.');

            // String to number and add 1 so it doesn't replace last existing image
            fileNameNum = parseInt(fileName, 10) + 1;
        } else {
            fileNameNum = 1;
        }
    }

    // For every existing image file...
    for (var j = 0; j < renamedFileList.length; j++) {
        // Open that file
        open(renamedFileList[j]);
        // Get height and width
        var imgWidth = activeDocument.width;
        var imgHeight = activeDocument.height;

        // Large ////////////////////////////////////////
        // If image width is greater than input max width
        if (imgWidth > parseInt(maxWidthLargeInput.text)) {
            // Resize the image to that max width at 72dpi bicubic resampling
            activeDocument.resizeImage(UnitValue(parseInt(maxWidthLargeInput.text), "px"), null, 72, ResampleMethod.BICUBIC);
        }

        var padNum = pad(fileNameNum, 3);

        // Save the resized file to the selected large output folder
        SaveForWeb(app.activeDocument, largeOutFolder, padNum);

        // Thumb ////////////////////////////////////////
        // If a portrait or square image
        if (imgHeight >= imgWidth) {
            // Resize the width of the image to the thumbnail width at 72dpi bicubic resampling
            activeDocument.resizeImage(UnitValue(parseInt(maxWidthThumb.text), "px"), null, 72, ResampleMethod.BICUBIC);
            activeDocument.resizeCanvas(UnitValue(parseInt(maxWidthThumb.text), "px"), UnitValue(parseInt(maxHeightThumb.text), "px"));

            // If a landscape image
        } else {
            // Resize the height of the image to the thumbnail height at 72dpi bicubic resampling
            activeDocument.resizeImage(null, UnitValue(parseInt(maxWidthThumb.text), "px"), 72, ResampleMethod.BICUBIC);
            activeDocument.resizeCanvas(UnitValue(parseInt(maxWidthThumb.text), "px"), UnitValue(parseInt(maxHeightThumb.text), "px"));
        }

        // Save the resized file to the selected large output folder
        SaveForWeb(app.activeDocument, thumbOutFolder, padNum);

        // Close the image without saving
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        fileNameNum++;
    }

    // Reset ruler preferences
    app.preferences.rulerUnits = originalRulerUnits;

    // Alert the user that their files have finished processing
    if (renamedFileList.length === 0) {
        alert("An error has occurred. No files have been processed");
    } else {
        alert(renamedFileList.length + " files successfully processed!");
    }
}