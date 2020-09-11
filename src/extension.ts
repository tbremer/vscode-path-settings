import {
	TextEditor,
	window,
	workspace
} from 'vscode';

interface Rule {
	path: string;
	settings: object;
}

let prevSettings = {};

function handleActiveTextEditor(editor: TextEditor | undefined) {
	if (editor === undefined) {return;}
	
	// remove previous settings
	setConfiguration(prevSettings, true);

	const userRules = workspace.getConfiguration('pathSettings').get<Array<Rule>>('rules');
	if (userRules === undefined) { return; }
	
	for (const {path, settings} of userRules) {
		const pathReg = new RegExp(path);
		if (pathReg.test(editor.document.fileName) === false) {continue;}

		setConfiguration(settings);
		prevSettings = settings;
	}
}

async function setConfiguration(settings: object, remove = false) {
	const config = workspace.getConfiguration();

	for await (const [section, value] of Object.entries(settings) ) {
		await config.update(section, remove ? undefined : value);
	}
}

export function activate() {
	console.log('Congratulations, your extension "path-settings" is now active!');
	
	handleActiveTextEditor(window.activeTextEditor);
	window.onDidChangeActiveTextEditor(handleActiveTextEditor);
}

export function deactivate() {
	return setConfiguration(prevSettings, true);
}
