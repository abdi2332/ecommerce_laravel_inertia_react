import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Gapcursor from '@tiptap/extension-gapcursor';
import Paragraph from '@tiptap/extension-paragraph';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import { Bold } from '@tiptap/extension-bold';
import Text from '@tiptap/extension-text';
import { Italic } from '@tiptap/extension-italic';
import { Underline } from '@tiptap/extension-underline';
import { FontFamily } from '@tiptap/extension-font-family';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';

export default function DocumentEditor() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Bold,
            Italic,
            Underline,
            FontFamily,
            TextStyle,
            Color,
            Highlight.configure({ multicolor: true }),
            Document,
            Paragraph,
            Text,
            Gapcursor,
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
        ],
        content: '<p>Start typing here...</p>',
    });

    const toggleBold = () => {
        editor.chain().focus().toggleBold().run();
    };

    const toggleItalic = () => {
        editor.chain().focus().toggleItalic().run();
    };

    const toggleUnderline = () => {
        editor.chain().focus().toggleUnderline().run();
    };

    const setFontFamily = (fontFamily) => {
        editor.chain().focus().setFontFamily(fontFamily).run();
    };

    const setHighlight = (color) => {
        editor.chain().focus().setHighlight({ color }).run();
    };

    const setColor = (color) => {
        editor.chain().focus().setColor(color).run();
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <style>
                {`
                .editor-container table {
                    @apply table-auto w-full border-collapse border border-gray-300;
                }

                .editor-container th,
                .editor-container td {
                    @apply border border-gray-300 px-4 py-2 text-left;
                }

                .editor-container th {
                    @apply bg-gray-100 font-semibold;
                }
                `}
            </style>
            <h2 className="text-2xl font-semibold mb-4">Document Editor</h2>
            <div className="mb-4">
                <div className="space-x-2">
                    <button onClick={toggleBold} className="px-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300">
                        <strong>B</strong>
                    </button>
                    <button onClick={toggleItalic} className="px-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300">
                        <em>I</em>
                    </button>
                    <button onClick={toggleUnderline} className="px-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300">
                        <u>U</u>
                    </button>
                    <select onChange={(e) => setFontFamily(e.target.value)} className="px-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300">
                        <option value="Arial">Arial</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Verdana">Verdana</option>
                    </select>
                    <label htmlFor="highlightColor">Highlight</label>
                    <input
                        id="highlightColor"
                        type="color"
                        onChange={(e) => setHighlight(e.target.value)}
                        className="px-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
                    />
                    <label htmlFor="textColor">Text Color</label>
                    <input
                        id="textColor"
                        type="color"
                        onChange={(e) => setColor(e.target.value)}
                        className="px-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
                    />
                    <button
                        onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
                        className="px-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                        Insert Table
                    </button>
                    <button onClick={() => editor.chain().focus().deleteTable().run()} className="px-3 py-1 text-sm bg-red-200 rounded-md hover:bg-red-300">
                        Delete Table
                    </button>
                </div>
            </div>
            <div className="editor-container border border-gray-300 rounded-md p-3">
    <EditorContent
        editor={editor}
        className="w-full h-48 p-2 border-none focus:outline-none"
    />
    <style>
        {`
            table {
                border-collapse: collapse;
                width: 100%;
                border: 1px solid #d1d5db; /* Tailwind's gray-300 */
            }
            th,
            td {
                border: 1px solid #d1d5db;
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #f3f4f6; /* Tailwind's gray-100 */
                font-weight: 600;
            }
        `}
    </style>
</div>

            <div className="mt-4">
                <button
                    onClick={() => console.log(editor.getHTML())}
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none"
                >
                    Save Document
                </button>
            </div>
        </div>
    );
}
