import './App.css'

function App() {
  return (
    <div className="w-full">
      <div className="inline-flex items-center space-x-7">
        <h1>redesigning the</h1>
          <input 
            className="text-5xl border-2 border-slate-300 p-2 rounded-md"   
            placeholder="search box" /> 
      </div>
      <>
        <div className="flex justify-center w-full space-x-4 p-4">
          <div className="w-full bg-slate-950 text-fuchsia-300 p-4">Chrome URLs</div>
          <div className="w-full bg-slate-950 text-indigo-300 p-4">Visual Studio Code Actions</div>
          <div className="w-full bg-slate-950 text-stone-400 p-4">GitHub</div>
        </div>
      </>
    </div>
  )
}

export default App
