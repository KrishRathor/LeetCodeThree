<tr key={index}>
    <td className="w-1/5 py-4 text-white font-medium text-sm">{item.serialNo}</td>
    <td onClick={() => handleClick(index)} className="hover:cursor-pointer w-3/5 py-4 text-white font-medium text-sm">{item.title}</td>
    <td className={`w-1/5 py-4 font-medium text-sm ${item.difficulty === 'Easy' ? 'text-green-600' : item.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>{item.difficulty}</td>
</tr>


{a > 0 && b > 0 ? <p>a and b are positive</p> : a > 0 && b < 0 ? <p>a is positive and b is negative</p> : a < 0 && b > 0 ? <p>a is negative and b is positive</p> : <p>a and b are negative</p>}
