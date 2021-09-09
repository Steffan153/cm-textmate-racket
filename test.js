import 'regenerator-runtime/runtime';
import CodeMirror from 'codemirror';
import { activateLanguage, addGrammar } from 'codemirror-textmate';
import { loadWASM } from 'onigasm';
 
async function run() {
    await loadWASM('onigasm.wasm');

    const scopeName = 'source.racket';
    addGrammar(scopeName, async () => (await fetch(`racket.tmLanguage.json`)).json())
    await activateLanguage(scopeName, 'racket', 'now');
 
    const editor = CodeMirror.fromTextArea(document.getElementById('cm-host'), {
        lineNumbers: true,
        mode: 'racket',
    });
    console.log(editor);
}

run();