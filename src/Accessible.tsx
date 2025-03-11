import './App.css'
//import '../public/assets/chrome-mouseover.png'

function Accessibility() {
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
      <div>
        <div className="w-full flex flex-col items-center space-y-2 p-4">
          <img
            src="https://spandan14.github.io/cs1300-portfolio/assets/chrome-mouseover.png"
            alt="Chrome Mouseover Demo"
            className="h-96 rounded-lg shadow-lg"
          />

          <p className="text-center text-gray-400 text-sm">Chrome URL search, with tool tips on mouse hover.</p>
        </div>

        <div className="w-full flex flex-col items-center space-y-2 p-4">
          <img
            src="https://spandan14.github.io/cs1300-portfolio/assets/chrome-keydown.png"
            alt="Chrome Keydown Demo"
            className="h-96 rounded-lg shadow-lg"
          />

          <p className="text-center text-gray-400 text-sm">Chrome URL search, with suggestion highlight and action tool tips on focus with <code>tab</code>.</p>
        </div>

        <div className="w-full flex flex-col items-center space-y-2 p-4">
          <img
            src="https://spandan14.github.io/cs1300-portfolio/assets/vsc-mouseover.png"
            alt="Visual Studio Code Mouseover Demo"
            className="h-96 rounded-lg shadow-lg"
          />

          <p className="text-center text-gray-400 text-sm">VSC action search, with suggestion highlight and action tool tips on mouse hover.</p>
        </div>

        <div className="w-full flex flex-col items-center space-y-2 p-4">
          <img
            src="https://spandan14.github.io/cs1300-portfolio/assets/vsc-keydown.png"
            alt="Visual Studio Code Keydown Demo"
            className="h-96 rounded-lg shadow-lg"
          />

          <p className="text-center text-gray-400 text-sm">VSC action search, with suggestion highlight and action tool tips on focus with <code>down</code>.</p>
        </div>

        <div className="w-full flex flex-col items-center space-y-2 p-4">
          <img
            src="https://spandan14.github.io/cs1300-portfolio/assets/github-mouseover.png"
            alt="GitHub Mouseover Demo"
            className="h-96 rounded-lg shadow-lg"
          />

          <p className="text-center text-gray-400 text-sm">GitHub repo search, with suggestion highlight on mouse hover.</p>
        </div>

        <div className="w-full flex flex-col items-center space-y-2 p-4">
          <img
            src="https://spandan14.github.io/cs1300-portfolio/assets/github-keydown.png"
            alt="GitHub Keydown Demo"
            className="h-96 rounded-lg shadow-lg"
          />

          <p className="text-center text-gray-400 text-sm">GitHub repo search, with suggestion highlight on focus with <code>down</code>.</p>
        </div>

        <div className="w-full flex flex-col items-center space-y-2 p-4">
          <img
            src="https://spandan14.github.io/cs1300-portfolio/assets/github-filters.png"
            alt="GitHub Filters Focus Demo"
            className="h-96 rounded-lg shadow-lg"
          />

          <p className="text-center text-gray-400 text-sm">GitHub repo search, with active repository filter and suggestion highlight on focus with <code>down</code>.</p>
        </div>
      </div>

      <br></br><br></br>
      <h2 className="text-2xl text-left text-teal-400 px-4">  <b>3. the solution</b></h2>
      <div>
        <p className="text-left px-4 py-2">
          A full redesign of GitHub's search box, following the given workflow, will greatly improve the user experience. More discussion after the diagrams.
        </p>
        <div className="w-full flex flex-col items-center space-y-2 p-4">
          <img
            src="https://spandan14.github.io/cs1300-portfolio/assets/initialbar.png"
            alt="Initial State Diagram"
            className="h-96 rounded-lg shadow-lg"
          />

          <p className="text-center text-gray-400 text-sm">Initial focus transition diagram for GitHub repository search.</p>
        </div>

        <div className="w-full flex flex-col items-center space-y-2 p-4">
          <img
            src="https://spandan14.github.io/cs1300-portfolio/assets/searchbarfull.png"
            alt="Query State Diagram"
            className="h-96 rounded-lg shadow-lg"
          />

          <p className="text-center text-gray-400 text-sm">Active search suggestion focus transition diagram for GitHub repository search.</p>
        </div>
      </div>

      <br></br><br></br>
      <h2 className="text-2xl text-left text-violet-400 px-4">  <b>4. reflections</b></h2>
      <div>
        <p className="text-left px-4 py-2">
          A full redesign of GitHub's search box, following the given workflow, will greatly improve the user experience. The new workflow incorporates the hints that already exist in the GitHub search box and provide an incredibly high level of accessibility for users with vision impairments, while adding more capabilities for power-users who really want to maximize speed and efficiency when searching for various things. GitHub's repo search currently fails to consider that a large amount of the users of this feature are developers who will need to quickly look for tons of resources, such as PRs, issues, code snippets, full repositories, organizations, and more. The current search box does not address this mismatch - in the creation of a universal design, GitHub forgot about its primary users. I think the overall designs of all three services is good, and provides for all users. One example is the aforementioned hints GitHub provides, but the tool tips that the screenreader can read are also helpful for the visually impaired users. I think most designs are prioritizing keyboard and screen reader usage, as these tend to naturally be more accessible and user-friendly than mice.
        </p>
      </div>
    </div>
  )
}

export default Accessibility
