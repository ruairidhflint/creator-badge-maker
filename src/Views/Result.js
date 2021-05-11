import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Dropdown from '../Components/Dropdown';
import FAQs from '../Components/FAQ';
import { htmlCreate, reactCreate } from '../Helpers/ComponentCreation';

const Result = ({ choice, ...props }) => {
  if (!choice.type || !choice.name) {
    props.history.replace('/');
  }
  const results = {
    html: htmlCreate(choice.type, choice.name, choice.url, choice.image),
    react: reactCreate(choice.type, choice.name, choice.url, choice.image),
  };
  const [input, setInput] = useState('html');
  const [copy, setCopy] = useState('Copy');

  const clickCopy = () => {
    setCopy('Copied!');
    navigator.clipboard.writeText(results[input]);
    setTimeout(() => {
      setCopy('Copy');
    }, 5000);
  };
  return (
    <div className="max-w-6xl min-w-7xl my-6 mx-auto bg-white flex flex-col items-center justify-center min-h-screen px-4 sm:py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="max-w-4xl mx-auto mt-1 text-4xl mb-8 font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
          Here's Your <span className="text-ruairidh">Maker</span> Badge!
        </p>
      </div>
      <div className="max-w-7xl min-w-7xl mx-auto px-4 sm:py-8 sm:px-6 lg:px-8 flex flex-col">
        <div className="w-full flex justify-between  items-center self-end mb-4">
          <Dropdown input={input} setInput={setInput} />
          <span onClick={clickCopy} className="cursor-pointer hover:opacity-70">
            {copy}
          </span>
        </div>
        <div style={{ maxHeight: '450px', overflowY: 'scroll' }}>
          <SyntaxHighlighter
            language={input === 'html' ? 'html' : 'jsx'}
            style={atomOneDark}
            lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
            wrapLines={true}
          >
            {results[input]}
          </SyntaxHighlighter>
        </div>
      </div>
      <FAQs />
    </div>
  );
};

export default Result;
