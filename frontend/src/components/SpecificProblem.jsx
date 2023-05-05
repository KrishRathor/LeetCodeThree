import React, { useState } from 'react';

import problems from '../data';
import CodeEditor from './CodeEditor';
import Description from './Description';
import Solution from './Solution';

const SpecificProblem = (props) => {

    // const handleNextClick = () => {
    //     props.onClick();
    // }

    const items_per_page = 6;
    const index = props.selectedIndex + items_per_page * (props.currentPage - 1);
    const specificProb = problems[index]
    console.log(specificProb)

    const [selectedOption, setselectedOption] = useState('cpp')

    const handlecodelang = (event) => {
        setselectedOption(event.target.value)
    }

    const [problemTracker, setProblemTracker] = useState('description')

    const setDesc = () => {
        setProblemTracker('description');
    }

    const setSol = () => {
        setProblemTracker('solution');
    }

    return (
        <>
            <div className="flex justify-center">


                <div className="w-1/2 m-4 bg-white rounded-lg shadow-lg">
                    <div className="flex ml-4">
                        <button onClick={setDesc} className="bg-gray-900 text-white px-4 py-2 rounded-l-lg focus:outline-none">Description</button>
                        <button onClick={setSol} className="bg-gray-700 text-white px-4 py-2 rounded-r-lg focus:outline-none">Solution</button>
                    </div>

                    <hr className='mt-2' />

                    {
                        (problemTracker === 'description') ? <Description specificProb={specificProb} /> : <Solution specificProb={specificProb} />
                    }

                </div>

                <div className="w-1/2 m-4 bg-white rounded-lg shadow-lg">


                    <div className="inline-block relative">
                        <select value={selectedOption} onChange={handlecodelang} className="appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="java">Java</option>
                            <option value="cpp">C++</option>
                            <option value="c">C</option>
                            <option value="python">Python</option>
                            <option value="javascript">JavaScript</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">

                        </div>
                    </div>

                    <br /> <hr /> <br />
                    <label for="code" className="block text-gray-700 font-bold mb-2">Enter your code:</label>
                    <div className="relative">
                        <CodeEditor language={selectedOption} specificProb={specificProb} />
                    </div>

                    

                </div>
            </div>

            <div className="flex justify-center items-center mt-4 mb-4">
                <button onClick={props.onClick} className="bg-gray-900 text-white py-2 px-4 rounded">Go Back</button>
            </div>


        </>
    )
}

export default SpecificProblem
