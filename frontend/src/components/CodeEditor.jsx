import React, { useState, useContext } from "react";
import Editor from "@monaco-editor/react";
import { UserContext } from "./UserContext";


const CodeEditor = (props) => {

  const [code, setCode] = useState("");
  const [isSubmit, setIsSubmit] = useState();
  const [testCaseOne, setTestCaseOne] = useState({'passed':'', 'output':''});
  const [testCaseTwo, setTestCaseTwo] = useState({'passed':'', 'output':''});
  const [activeTestCase, setActiveTestCase] = useState("one");
  const language = props.language;
  const specificProb = props.specificProb;

  const handleEditorChange = (value, event) => {
    setCode(value);
  }

  const handleCodeSubmit = async () => {
    setIsSubmit(true);
    const response = await fetch('http://127.0.0.1:5000/api/code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code, specificProb, language })
    });

    if (response.ok) {
      const result = await response.json();
      setTestCaseOne({
        'passed': result.testCaseOne.passed,
        'output': result.testCaseOne.output
      })
      setTestCaseTwo({
        'passed': result.testCaseTwo.passed,
        'output': result.testCaseTwo.output
      })
      saveSovedQuesToDatabase(result.testCaseOne.passed, result.testCaseTwo.passed);
    } else {
      console.error('Failed to send data to Flask endpoint');
    }
  };

  const current_user = JSON.parse(localStorage.getItem('user'));

  const saveSovedQuesToDatabase = async (resultOne, resultTwo) => {
      if (resultOne && resultTwo) {
        const response = await fetch('http://127.0.0.1:5000/api/solvedproblems', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ specificProb, current_user })
        });
        if (response.ok) {
          const result = await response.json();
          console.log(result)
        }
      }

  }

  const activeTestCaseOne = () => {
    setActiveTestCase("one");
  }

  const activeTestCaseTwo = () => {
    setActiveTestCase("two");
  }

  const options = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
    wordWrap: "on",
  };


  return (
    <div className="App">
      <Editor
        height="50vh"
        language={language}
        value={code}
        options={options}
        onChange={handleEditorChange}
      />

      <button onClick={handleCodeSubmit} className={`${isSubmit ? 'bg-gray-600' : 'bg-green-500'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="button">
        {isSubmit ? 'Submitted' : 'Submit'}
      </button>

      <div className="flex mt-2">
        <button onClick={activeTestCaseOne} className={` ${activeTestCase === "one" ? 'bg-gray-700' : ''}  bg-gray-500  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-l`}>Test Case One</button>
        <button onClick={activeTestCaseTwo} className={` ${activeTestCase === "two" ? 'bg-gray-700' : ''}  bg-gray-500  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-l`}>Test Case Two</button>
      </div>

      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-2">
        {
          activeTestCase === "one" ? (
            <>
              <h3>Code Output : {testCaseOne.output}</h3>
              <p className={`${testCaseOne.passed ? 'text-green-500' : ''}`}>{testCaseOne.passed ? 'TestCase Passed' : ''}</p>
              <p className={`${!testCaseOne.passed ? 'text-red-600' : ''}`}>{!testCaseOne.passed ? 'TestCase Failed' : ''}</p>
            </>
          ) : activeTestCase === "two" ? (
            <>
              <h3>Code Output : {testCaseTwo.output}</h3>
              <p className={`${testCaseTwo.passed ? 'text-green-500' : ''}`}>{testCaseTwo.passed ? 'TestCase Passed' : ''}</p>
              <p className={`${!testCaseTwo.passed ? 'text-red-600' : ''}`}>{!testCaseTwo.passed ? 'TestCase Failed' : ''}</p>
            </>
          ) : ''
        }
      </div>

    </div>
  );
}

export default CodeEditor;
