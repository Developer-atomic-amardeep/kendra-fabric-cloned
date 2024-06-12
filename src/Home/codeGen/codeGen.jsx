import React from 'react';
import { Link } from 'react-router-dom';

const CodeGen = () => {
  return (
    <div className="p-8 w-full bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <Link to='https://chat.kendralabs.com/' className=''>
        <h1 className="text-3xl font-bold mb-6">Code-Gen CodeLlama</h1>
        </Link> 
        <p className="mb-4">Code-Gen CodeLlama is currently under BETA Stage. However, here's a glimpse of the agents that will be available:</p>
        <Link to='/' className=''>
        <h2 className="text-2xl font-semibold mb-4">Agents</h2>
        </Link>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. CodeAct Agent Description</h3>
          <p className="mb-2">The CodeAct Agent consolidates LLM agents' actions into a unified code action space for simplicity and performance. At each turn, the agent can:</p>
          <ul className="list-disc list-inside mb-2">
            <li><span className="font-semibold">Converse:</span> Communicate with humans in natural language to ask for clarification, confirmation, etc.</li>
            <li><span className="font-semibold">CodeAct:</span> Perform the task by executing code, including:</li>
            <ul className="list-disc list-inside pl-6">
              <li>Any valid Linux <code className="bg-gray-100 text-green-400 p-1 rounded">bash</code> command</li>
              <li>Any valid <code className="bg-gray-100 text-green-400 p-1 rounded">Python</code> code with an interactive Python interpreter (simulated through <code className="bg-gray-100 p-1 rounded">bash</code> command using the plugin system)</li>
            </ul>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. Monologue Agent Description</h3>
          <p className="mb-2">The Monologue Agent utilizes long and short-term memory to complete tasks. Long-term memory is stored as a <code className="bg-gray-100 text-green-400 p-1 rounded">LongTermMemory</code> object, and the model uses it to search for examples from the past. Short-term memory is stored as a <code className="bg-gray-100 text-green-400 p-1 rounded">Monologue</code> object, and the model can condense it as necessary.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. Planner Agent Description</h3>
          <p className="mb-2">The Planner Agent utilizes a special prompting strategy to create long-term plans for solving problems. The agent is given its previous action-observation pairs, current task, and a hint based on the last action taken at every step.</p>
        </div>

        <div className="p-4 bg-blue-100 rounded-lg text-center">
          <p className="mb-2">To use the Code-Gen AI, in the model name paste <code className="bg-blue-100 text-green-400 p-1 rounded">ollama/phind-codellama:34b-v2-q6_K</code> and in the API key use <code className="bg-blue-100 text-green-400 p-1 rounded">ollama</code>.</p>
          <Link to='http://74.235.204.16:3000/index.html'>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Try Code-Gen AI</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CodeGen;
