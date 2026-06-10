function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Campus Assistant Bot')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
