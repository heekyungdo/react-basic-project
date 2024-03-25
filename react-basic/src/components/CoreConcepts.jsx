import { CORE_CONCEPTS } from "../data";
import CoreConcept from './CoreConcept';
import Section from "./Section";

function CoreConcepts() {
    return (
        <Section title="Time to get started!" id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map(concept => (
            <CoreConcept key={concept.title} {...concept} />
          ))}
        </ul>
      </Section>
    )
}

export default CoreConcepts;