import React from 'react'

const Description = ({specificProb}) => {
    return (
    <>
    <div class="flex ml-2">
        <span class={`text-md ml-4 ${specificProb.difficulty === 'Easy' ? 'text-green-600' : specificProb.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>{specificProb.difficulty}</span>
        <span class="text-md ml-4">Likes: {specificProb.likes}</span>
        <span class="text-md ml-4">Dislikes: {specificProb.dislikes}</span>
    </div>

    <h2 class="text-xl font-semibold mt-4 ml-8">{specificProb.title}</h2>

    <br />
    <p class="text-sm ml-8 mr-8">{specificProb.description}</p>

    <hr class='mt-2' />

    <br /> <br />

{
        specificProb.examples.map((item, key) => (
            <>
                <div class="bg-gray-100 rounded-lg shadow-lg p-4 ml-8 mr-8 mt-4">
                    <h2 class="text-xl font-semibold mb-2">Example {key + 1}</h2>
                    <p class="text-gray-700">
                        Input : {item.input} <br />
                        Output : {item.output}
                    </p>
                </div>
            </>

        ))
    }

<p class="text-sm mt-8 uppercase ml-8">Constraints : {specificProb.constraints}</p>
<br /> <hr /> <br />

<br /><br />
</>
  )
}

export default Description
