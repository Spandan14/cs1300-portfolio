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
          className="rounded-lg shadow-lg"
        />

        <p className="text-center text-gray-400 text-sm">Initial mockup of Andrews drinks area.</p>
      </div>

      <br></br><br></br>
      <h2 className="text-2xl text-left text-teal-400 px-4">  <b>2. keen observations </b></h2>
      <div className="w-full flex flex-col space-v-2">

        <p className="text-left px-4 py-2">
          some initial people-watching and observation of Andrews showed that:
        </p>

        <ul className="px-12 mt-4 space-y-2 list-disc text-left list-inside text-white">
          <li>people often <b className="text-red-300">wait long times</b> for other people to finish getting their drinks</li>
          <li>people have a hard time with the <b className="text-red-300">ice accumulating in the dispenser</b> gates and giving them less space to pour their drink</li>
          <li>the screen can be <b className="text-red-300">laggy and unresponsive</b> at times, and <b className="text-red-300">does not show the number of sub-items</b> that are available</li>
          <li>people further back in line have <b className="text-red-300">no idea of how many options</b> are still available</li>
          <li>gathering cups and straws from the side is difficult as it only works <b className="text-red-300">for one person at a time</b></li>
          <li>the secondary dispensers are <b className="text-red-300">wasteful in area</b> and don't offer many options</li>
        </ul>

        <br></br>
        <p className="text-left px-4 py-2">
          and some <b>more detailed</b> people-talking gave us 3 great interviews:
        </p>

        <div className="flex justify-center w-full space-x-4 p-4">
          <div className="text-left w-full space-y-4">
            <h3 className="text-xl"><b className="text-red-500">Mr. Andrews Pho</b></h3>
            <ul className="mt-4 space-y-2 list-disc list-inside text-white">
              <li className="text-gray-400"><i>How intuitive did you find the interface when selecting your drink?</i>
                <ul>
                  <li className="font-bold text-white">- Found the interface frustrating due to long waits and unavailable drinks.</li>
                </ul>
              </li>

              <li className="text-gray-400"><i>Were there any moments where you weren’t sure what to do next?</i>
                <ul>
                  <li className="font-bold text-white">- Struggled with unavailable drink options not being clearly marked.</li>
                </ul>
              </li>

              <li className="text-gray-400"><i>How would you describe the overall responsiveness of the touchscreen?</i>
                <ul>
                  <li className="font-bold text-white">- Felt the touchscreen was slow and unresponsive.</li>
                </ul>
              </li>

              <li className="text-gray-400"><i>Were there any issues or inconveniences you encountered while using the dispenser?</i>
                <ul>
                  <li className="font-bold text-white">- Frustrated by long lines, slow responsiveness, and missing drink options.</li>
                </ul>
              </li>

              <li className="text-gray-400"><i>If you could change one thing about this dispenser, what would it be?</i>
                <ul>
                  <li className="font-bold text-white">- Wanted a faster system with clearer indications of unavailable drinks.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="text-left w-full space-y-4">
            <h3 className="text-xl"><b className="text-teal-500">Ms. Chili Crisp</b></h3>
            <ul className="mt-4 space-y-2 list-disc list-inside text-white">
              <li className="text-gray-400"><i>How intuitive did you find the interface when selecting your drink?</i>
                <ul>
                  <li className="font-bold text-white">- Found the interface easy to navigate and intuitive.</li>
                </ul>
              </li>

              <li className="text-gray-400"><i>Were there any moments where you weren’t sure what to do next?</i>
                <ul>
                  <li className="font-bold text-white">- Had no confusion and found the process straightforward.</li>
                </ul>
              </li>

              <li className="text-gray-400"><i>How would you describe the overall responsiveness of the touchscreen?</i>
                <ul>
                  <li className="font-bold text-white">- Found the touchscreen responsive with no noticeable lag.</li>
                </ul>
              </li>

              <li className="text-gray-400"><i>Were there any issues or inconveniences you encountered while using the dispenser?</i>
                <ul>
                  <li className="font-bold text-white">- Encountered no issues and had a smooth experience.</li>
                </ul>
              </li>

              <li className="text-gray-400"><i>If you could change one thing about this dispenser, what would it be?</i>
                <ul>
                  <li className="font-bold text-white">- Thought the system was fine but would like more flavor options.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="text-left w-full space-y-4">
            <h3 className="text-xl"><b className="text-amber-500">Dr. Yakisoba</b></h3>
            <ul className="mt-4 space-y-2 list-disc list-inside text-white">
              <li className="text-gray-400"><i>How intuitive did you find the interface when selecting your drink?</i>
                <ul>
                  <li className="font-bold text-white">- Thought the selection was fine but was frustrated by the ice accumulating in the dispenser.</li>
                </ul>
              </li>

              <li className="text-gray-400"><i>Were there any moments where you weren’t sure what to do next?</i>
                <ul>
                  <li className="font-bold text-white">- Was unsure why the ice wasn't being collected at the bottom and piling up.</li>
                </ul>
              </li>

              <li className="text-gray-400"><i>How would you describe the overall responsiveness of the touchscreen?</i>
                <ul>
                  <li className="font-bold text-white">- Thought it was usable but was distracted by the ice issue.</li>
                </ul>
              </li>

              <li className="text-gray-400"><i>Were there any issues or inconveniences you encountered while using the dispenser?</i>
                <ul>
                  <li className="font-bold text-white">- Annoyed by the broken ice collection and the sticky, messy area.</li>
                </ul>
              </li>

              <li className="text-gray-400"><i>If you could change one thing about this dispenser, what would it be?</i>
                <ul>
                  <li className="font-bold text-white">- Suggested fixing the ice dispenser to dispense evenly and improving cleanliness.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <br></br><br></br>
        <h2 className="text-2xl text-left text-red-400 px-4">  <b>3. the duality of Andrews enthusiasts</b></h2>
        <div className="w-full flex flex-col space-v-2">
          <br></br>
          <p className="text-left px-4 py-2">
            here's two personas that describe exactly what the spectrum of Andrews-goers looks like:
          </p>

          <div className="flex justify-center w-full space-x-4 p-4">
            <div className="text-left w-full space-y-4">
              <h3 className="text-xl"><b className="text-teal-500">Calm Ms. Chili Crisp</b></h3>
              <img
                src="https://spandan14.github.io/cs1300-portfolio/assets/personas/calm_persona.png"
                alt="Initial Andrews Mockup"
                className="rounded-lg shadow-lg"
              />
              <p className="text-center text-gray-400 text-sm">Initial mockup of Andrews drinks area.</p>
            </div>

            <div className="text-left w-full space-y-4">
              <h3 className="text-xl"><b className="text-red-500">Annoyed Mr. Andrews Pho</b></h3>
              <img
                src="https://spandan14.github.io/cs1300-portfolio/assets/personas/rushed_persona.png"
                alt="Initial Andrews Mockup"
                className="rounded-lg shadow-lg"
              />
              <p className="text-center text-gray-400 text-sm">Initial mockup of Andrews drinks area.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Persona
