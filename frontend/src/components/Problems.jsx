import React, { useState, useEffect } from 'react'

import problems from '../data'

const Problems = (props) => {

    const items_per_page = 10;

    const handleClick = (index) => {
        props.setSelectedIndex(index);
        props.onClick();
    };

    const startIndex = (props.currentPage - 1) * items_per_page;
    const endIndex = startIndex + items_per_page;
    const visibleProblems = problems.slice(startIndex, endIndex);

    const handleNextPage = () => {
        props.setCurrentPage(props.currentPage + 1);
    };

    const handlePrevPage = () => {
        props.setCurrentPage(props.currentPage - 1);
    };

    const [difficulty, setDifficulty] = useState('difficulty');
    const [tags, setTags] = useState('tags');

    const changeDifficulty = (event) => {
        setDifficulty(event.target.value);
    }

    const setTopic = (event) => {
        setTags(event.target.value);
    }

    return (

        <>

            <div className="flex flex-wrap space-x-4 mt-4 justify-center">
                <div className="relative">
                    <select value={difficulty} onChange={changeDifficulty} className="block appearance-none w-full bg-gray-300 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value='difficulty'>Difficulty</option>
                        <option value='Easy'>Easy</option>
                        <option value='Medium'>Medium</option>
                        <option value='Hard'>Hard</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fill-rule="evenodd" d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm18 0a8 8 0 11-16 0 8 8 0 0116 0z" />
                        </svg>
                    </div>
                </div>
                <div className="relative">
                    <select value={tags} onChange={setTopic} className="block appearance-none w-full bg-gray-300 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value='tags'>Tags</option>
                        <option value='array'>Array</option>
                        <option value='binaryTree'>Binary Tree</option>
                        <option value='dp'>Dynamic Programming</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fill-rule="evenodd" d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm18 0a8 8 0 11-16 0 8 8 0 0116 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md px-10 py-8 mt-4 mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold mb-6">Problems</h2>
                <table className="w-full table-fixed">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="w-1/5 py-4 text-gray-700 font-bold text-sm uppercase tracking-wider border-b-2 border-gray-300">Serial No.</th>
                            <th className="w-3/5 py-4 text-gray-700 font-bold text-sm uppercase tracking-wider border-b-2 border-gray-300">Title</th>
                            <th className="w-1/5 py-4 text-gray-700 font-bold text-sm uppercase tracking-wider border-b-2 border-gray-300">Difficulty</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {
                            (difficulty === 'difficulty' && tags === 'tags') ? (
                                visibleProblems.map((item, index) => (
                                    <tr key={index}>
                                        <td className="w-1/5 py-4 text-black font-medium text-sm">{item.serialNo}</td>
                                        <td onClick={() => handleClick(index)} className="hover:cursor-pointer w-3/5 py-4 text-black font-medium text-sm">{item.title}</td>
                                        <td className={`w-1/5 py-4 font-medium text-sm ${item.difficulty === 'Easy' ? 'text-green-600' : item.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>{item.difficulty}</td>
                                    </tr>
                                ))
                            ) : (difficulty === 'difficulty' && !(tags === 'tags')) ? (
                                visibleProblems.map((item, index) => (
                                    (item.tags === tags) ? (
                                        <tr key={index}>
                                            <td className="w-1/5 py-4 text-black font-medium text-sm">{item.serialNo}</td>
                                            <td onClick={() => handleClick(index)} className="hover:cursor-pointer w-3/5 py-4 text-black font-medium text-sm">{item.title}</td>
                                            <td className={`w-1/5 py-4 font-medium text-sm ${item.difficulty === 'Easy' ? 'text-green-600' : item.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>{item.difficulty}</td>
                                        </tr>
                                    ) : ''
                                ))
                            ) : (!(difficulty === 'difficulty') && tags === 'tags') ? (
                                visibleProblems.map((item, index) => (
                                    (item.difficulty === difficulty) ? (
                                        <tr key={index}>
                                            <td className="w-1/5 py-4 text-black font-medium text-sm">{item.serialNo}</td>
                                            <td onClick={() => handleClick(index)} className="hover:cursor-pointer w-3/5 py-4 text-black font-medium text-sm">{item.title}</td>
                                            <td className={`w-1/5 py-4 font-medium text-sm ${item.difficulty === 'Easy' ? 'text-green-600' : item.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>{item.difficulty}</td>
                                        </tr>
                                    ) : ''
                                ))
                            ) : (
                                visibleProblems.map((item, index) => (
                                    (item.difficulty === difficulty && item.tags === tags) ? (
                                        <tr key={index}>
                                            <td className="w-1/5 py-4 text-black font-medium text-sm">{item.serialNo}</td>
                                            <td onClick={() => handleClick(index)} className="hover:cursor-pointer w-3/5 py-4 text-black font-medium text-sm">{item.title}</td>
                                            <td className={`w-1/5 py-4 font-medium text-sm ${item.difficulty === 'Easy' ? 'text-green-600' : item.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>{item.difficulty}</td>
                                        </tr>
                                    ) : ''
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>


            <div className="mt-4 flex justify-center mb-4">
                <button onClick={handlePrevPage} disabled={props.currentPage === 1} className="bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded-l">Prev</button>
                <button onClick={handleNextPage} disabled={endIndex >= problems.length} className="bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded-r">Next</button>
            </div>

        </>

    )
}


export default Problems
