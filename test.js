import 'regenerator-runtime/runtime';
import CodeMirror from 'codemirror';
import { activateLanguage, addGrammar } from 'codemirror-textmate';
import { loadWASM } from 'onigasm';
 
async function run() {
    await loadWASM('onigasm.wasm');

    const scopeName = 'source.prolog';
    addGrammar(scopeName, async () => (await fetch(`prolog.tmLanguage.json`)).json())
    await activateLanguage(scopeName, 'prolog', 'now');
 
    const editor = CodeMirror.fromTextArea(document.getElementById('cm-host'), {
        lineNumbers: true,
        mode: 'prolog',
    });
    console.log(editor);
}

run();