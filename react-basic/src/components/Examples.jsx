
import { EXAMPLES } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import { useState } from "react";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState()
  const handleSelect = (selectedBtn) => {
    setSelectedTopic(selectedBtn)
  }

  return (
    <Section title="Examples" id='examples'>
      <Tabs
        buttons={
          <>
            <TabButton
              onClick={() => handleSelect('components')}
              isSelected={selectedTopic === 'components'}>
              Components
            </TabButton>
            <TabButton
              onClick={() => handleSelect('jsx')}
              isSelected={selectedTopic === 'jsx'} >
              JSX
            </TabButton>
            <TabButton
              onClick={() => handleSelect('props')}
              isSelected={selectedTopic === 'props'}>
              Props
            </TabButton>
            <TabButton
              onClick={() => handleSelect('state')}
              isSelected={selectedTopic === 'state'}>
              State
            </TabButton>
          </>
        }>
        {selectedTopic ?
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
          :
          <p>Please select a Topic.</p>
        }
      </Tabs>
    </Section>
  )
}

export default Examples;