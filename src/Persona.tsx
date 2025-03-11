import './App.css'

function Persona() {
  return (
    <div className="w-full">
      <div className="inline-flex items-center space-x-7">
        <h1>how to get a drink at <b>Andrews</b></h1>
      </div>

      <br></br><br></br>
      <h2 className="text-2xl text-left text-violet-400 px-4">  <b>1. the investigation </b></h2>
      <div className="w-full flex flex-col space-v-2">
        <p className="text-left px-4 py-2">
          the scene: it's <i className="text-rose-300">Pho Friday</i> at Andrews. you're in a sea of freshmen and have been waiting for 473 years to get your pho. you're thirsty, and a drink is all you need.
        </p>

        <p className="text-left px-4 py-2">
          for a ui/ux designer, this is a <b className="text-red-400">user flow</b> waiting to be optimized. you're the user, and the drink is the goal. how do you get there?
        </p>

        <p className="text-left px-4 py-2">
          to find this out, we asked Andrews enjoyers some questions:
        </p>

        <ul className="px-12 mt-4 space-y-2 list-disc text-left list-inside text-white">
          <li>How <b className="text-teal-200">intuitive</b> did you find the interface when selecting your drink?</li>
          <li>Were there any moments where you <b className="text-red-300">weren’t sure what to</b> do next?</li>
          <li>How would you describe the <b className="text-yellow-300">overall responsiveness</b> of the touchscreen?</li>
          <li>Were there any <b className="text-red-300">issues or inconveniences</b> you encountered while using the dispenser?</li>
          <li>If you could <b className="text-yellow-300">change one thing</b> about this dispenser, what would it be?</li>
        </ul>

        <br></br>
        <p className="text-left px-4 py-2">
          for those unfamiliar with Andrews, here's a quick illustration of what's going on:
        </p>
        <img
          src="https://spandan14.github.io/cs1300-portfolio/assets/personas/0_state.png"
          alt="Initial Andrews Mockup"
          className="h-96 rounded-lg shadow-lg"
        />

        <p className="text-center text-gray-400 text-sm">Initial mockup of Andrews drinks area.</p>

      </div>
    </div>
  );
}

export default Persona
