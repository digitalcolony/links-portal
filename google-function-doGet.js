function doGet() {
	const doc = SpreadsheetApp.getActiveSpreadsheet();
	const sheet = doc.getSheetByName("Links");
	const lastRow = sheet.getLastRow();
	const values = sheet.getRange(2, 1, lastRow - 1, 4).getDisplayValues();
	const result = values.map((r) => ({
		active: r[0],
		name: r[1],
		url: r[2],
		description: r[3],
	}));
	return ContentService.createTextOutput(JSON.stringify({ data: result })).setMimeType(
		ContentService.MimeType.JSON
	);
}
