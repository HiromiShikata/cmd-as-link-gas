declare var global: any;

global.doGet = (/*e: GasEvent*/) => {
    Logger.log("AAAAA");
    return ContentService.createTextOutput("aaa")
        .setMimeType(ContentService.MimeType.TEXT);
}
