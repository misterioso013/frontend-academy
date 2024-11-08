import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


type ShowCodeProps = {
    code: string
    language: string
}
export function ShowCode({ code, language }: ShowCodeProps) {
    return(
        <SyntaxHighlighter language={language} style={dracula} showLineNumbers wrapLines>
            {code}
        </SyntaxHighlighter>
    )
}