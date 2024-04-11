import { useState } from "react";

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";

import { CORE_CONCEPTS } from "./data";
import TapButton from "./components/Tapbutton";

function App() {
  function handleSelect(selectedButton) {
    console.log(selectedButton);
  }
  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((k) => {
              return (
                <CoreConcept
                  title={k.title}
                  description={k.description}
                  image={k.image}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton onSelect={() => handleSelect("Components")}>
              Components
            </TapButton>
            <TapButton onSelect={() => handleSelect("JSX")}>JSX</TapButton>
            <TapButton onSelect={() => handleSelect("States")}>
              States
            </TapButton>
            <TapButton onSelect={() => handleSelect("Props")}>Props</TapButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
