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

      <br></br><br></br>
      <h2 className="text-2xl text-left text-red-400 px-4">  <b>1. the problem</b></h2>
      <>
        <div className="flex justify-center w-full space-x-4 p-4">
          <div className="text-left w-full space-y-4">
            <div className="bg-slate-950 text-fuchsia-300 p-4 text-center">Chrome URLs</div>
            <p><b><code>mouse</code> inputs</b></p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-white">
              <li>single, double, triple click behave like they do with text (cursor, select term, select all)</li>
              <li>mouse click on suggestions navigates directly to them, <span className="text-red-400">not allowing any editing</span></li>
              <li>mouse click on actions performs them (like suggestion removal)</li>
            </ul>

            <br></br>
            <p><b><code>keyboard</code> inputs</b></p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-white">
              <li>typing: edits search input, triggers auto-completion workflow to generate suggestions</li>
              <li><code>Enter</code>: navigates to suggestion or performs action (depending on selection)</li>
              <li><code>Tab</code>: moves to next suggestion <i>or</i> action</li>
              <li><code>Up/Down</code>: moves between only suggestions</li>
              <li><code>Left/Right</code>: allows for search input editing</li>
              <li><span className="text-red-400">no hints for what <code>Enter</code> would do</span></li>
            </ul>
          
            <br></br>
            <p><b><code>accessible</code> outputs</b></p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-white">
              <li>selected suggestions are highlighted, selected actions are outlined</li>
              <li>actions have tool tips and screen reader capabilities</li>
              <li>suggestions have screen reader capabilities</li>
            </ul>
          </div>

          <div className="text-left w-full space-y-4">
            <div className="bg-slate-950 text-indigo-300 p-4 text-center">Visual Studio Code Actions</div>
            <p><b><code>mouse</code> inputs</b></p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-white">
              <li>single, double, triple click behave like they do with text (cursor, select term, select all)</li>
              <li>mouse click on suggestions navigates directly to them, <span className="text-red-400">not allowing any editing</span></li>
              <li>mouse click on actions performs them (various ones, plugin-dependent)</li>
            </ul>

            <br></br>
            <p><b><code>keyboard</code> inputs</b></p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-white">
              <li>typing: edits search input, triggers auto-completion workflow to generate suggestions</li>
              <li><span className="text-red-400">need to prefix query with &gt; to search for workflows</span>, default search is for files</li>
              <li><code>Enter</code>: navigates to suggestion or performs action (depending on selection)</li>
              <li><code>Tab</code>: <span className="text-red-400">moves to the next window/UI element and doesn't interact with search box</span></li>
              <li><code>Up/Down</code>: moves between only suggestions</li>
              <li><code>Left/Right</code>: allows for search input editing</li>
              <li><span className="text-red-400">no hints for what <code>Enter</code> would do</span></li>
            </ul>
            
            <br></br>
            <p><b><code>accessible</code> outputs</b></p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-white">
              <li>selected suggestions are highlighted, selected actions are outlined</li>
              <li>actions have tool tips and screen reader capabilities</li>
              <li>suggestions have screen reader capabilities</li>
            </ul>
          </div>

          <div className="text-left w-full space-y-4">
            <div className="bg-slate-950 text-stone-400 p-4 text-center">GitHub</div>
            <p><b><code>mouse</code> inputs</b></p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-white">
              <li>single, double, triple click behave like they do with text (cursor, select term, select all)</li>
              <li>mouse click on suggestions navigates directly to them, <span className="text-red-400">not allowing any editing</span></li>
              <li>actions don't exist, but search filters are <span className="text-red-400">directly navigated to when clicked</span></li>
            </ul>

            <br></br>
            <p><b><code>keyboard</code> inputs</b></p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-white">
              <li>typing: edits search input, triggers auto-completion workflow to generate suggestions</li>
              <li><code>Enter</code>: navigates to suggestion or <span className="text-red-400">search filter, instead of using it to filter current query</span></li>
              <li><code>Tab</code>: <span className="text-red-400">moves to the next window/UI element and doesn't interact with search box</span></li>
              <li><code>Up/Down</code>: moves between only suggestions, <span className="text-red-400">but doesn't load it in the search box</span></li>
              <li><code>Left/Right</code>: <span className="text-red-400">does not allow for search input editing</span></li>
              <li>hints for what <code>Enter</code> would do</li>
            </ul>

            <br></br>
            <p><b><code>accessible</code> outputs</b></p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-white">
              <li>selected suggestions are highlighted, selected filters are in blue</li>
              <li>suggestions have screen reader capabilities</li>
              <li>hints have screen reader capabilities</li>
            </ul>
          </div>
        </div>
      </>

      <br></br><br></br>
      <h2 className="text-2xl text-left text-yellow-400 px-4">  <b>2. the evidence</b></h2>
    </div>
  )
}

export default App
