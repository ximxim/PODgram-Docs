---
sidebar_position: 9
title: "8. Troubleshooting"
hide_table_of_contents: true
---

import Admonition from '@theme/Admonition';
import FAQStructuredData from '@theme/MDXComponents/FAQStructuredData';

# 8. Troubleshooting

Even with a well-structured prompt, the AI may not always interpret your intent exactly as expected. This section highlights common issues that can occur while prompting, along with practical fixes and links to relevant sections of the guide where you can learn more.

<FAQStructuredData
  title="Common Troubleshooting Issues"
  faqs={[
    {
      question: "The AI adds something I specifically said I didn't want",
      answer: (
        <div>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Prompt uses negative phrasing (e.g., "<em>no hair</em>," "<em>no people</em>")</li>
            <li>AI fails to process negation and focuses on the mentioned object instead</li>
            <li>The unwanted object or concept is inadvertently suggested elsewhere in the prompt</li>
            <li>Use of Magic Prompt</li>
          </ul>
          <p><strong>Fixes:</strong></p>
          <ul>
            <li>Rewrite using <strong>affirmative descriptions</strong> (e.g., "<em>bald</em>" or "<em>empty city</em>")</li>
            <li>Use <strong>visual substitution</strong> to describe what <em>is</em> present instead of what isn't</li>
            <li>Double check you prompt for possible contradiction, even subtle</li>
            <li>Turn Magic Prompt off</li>
          </ul>
          <p>→ <strong>See:</strong> 4. Handling Negatives, 7.2 Magic Prompt</p>
        </div>
      )
    },
    {
      question: "Text appears broken, misspelled, or missing",
      answer: (
        <div>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Text isn't properly indicated in prompt.</li>
            <li>Text placed too late in the prompt</li>
            <li>Too much or too complex text</li>
            <li>Text in foreign language or non-Latin characters</li>
            <li>Conflicts with visual complexity</li>
          </ul>
          <p><strong>Fixes:</strong></p>
          <ul>
            <li>Put the text in <strong>quotes</strong> (e.g., <em>a sign that says "Open 24 Hours"</em>)</li>
            <li>Place the text early in the prompt</li>
            <li>Limit the amount of generated text</li>
            <li>Break long text into chunks with placement cues</li>
            <li>Use <strong>Magic Fill</strong> to correct errors after generation</li>
            <li>For long copy, add it later in a third party editor.</li>
          </ul>
          <p>→ <strong>See:</strong> 2.6 Generating Text in Images</p>
        </div>
      )
    },
    {
      question: "Facial features, hands, or limbs look distorted (especially from a distance)",
      answer: (
        <div>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Subject appears too small or far away in the frame for the AI to render detail properly</li>
            <li>Low emphasis on face or limbs in the prompt</li>
          </ul>
          <p><strong>Fixes:</strong></p>
          <ul>
            <li>Move the subject closer by adjusting framing ("<em>close-up</em>," "<em>portrait</em>")</li>
            <li>Emphasize details explicitly (e.g., hands, eyes, facial features)</li>
            <li>Fix imperfections afterward using <strong>Magic Fill</strong>, recommended if you like the image</li>
          </ul>
          <Admonition type="note">
            <p><em>This isn't really a problem of wording or style, but rather the fact that most AIs struggle to handle fine detail at a distance, partly because of the lack of available pixels the AI has to work with. Magic Fill can help fixing this as it can work with greater pixel density over small areas.</em></p>
          </Admonition>
        </div>
      )
    },
    {
      question: "The subject is cropped when it should be shown fully (or vice versa)",
      answer: (
        <div>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Aspect ratio doesn't match intended framing</li>
            <li>The aspect ratio isn't commonly used for that type of image</li>
            <li>Insufficient framing cues in prompt</li>
          </ul>
          <p><strong>Fixes:</strong></p>
          <ul>
            <li>Explicitly include framing cues like "full body," "head and shoulders," or "wide view."</li>
            <li>Describe elements near the cropped area (feet, shoes, ground) to encourage full framing.</li>
            <li>Adjust the <strong>aspect ratio</strong> to better fit your subject and match intended composition</li>
          </ul>
          <p>→ <strong>See:</strong> 5.5 Aspect Ratio Influence on Framing</p>
        </div>
      )
    },
    {
      question: "Important words or concepts are not visually present in the image",
      answer: (
        <div>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Important ideas are too abstract, ambiguous, or visually unclear</li>
            <li>Terms used are not visually grounded enough</li>
          </ul>
          <p><strong>Fixes:</strong></p>
          <ul>
            <li>Use alternate, more visually concrete wording or synonyms.</li>
            <li>Add more explicit visual cues or repetition of terms.</li>
          </ul>
          <p>→ <strong>See:</strong> 6.4 Try Alternate Wording, 6.5 Emphasize Important Parts of the Image</p>
        </div>
      )
    },
    {
      question: "Unwanted object, person or text appears in the image",
      answer: (
        <div>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Vague or overloaded prompt</li>
            <li>Ambiguous language indirectly suggesting extra items</li>
            <li>Uses of Magic Prompt</li>
          </ul>
          <p><strong>Fixes:</strong></p>
          <ul>
            <li>Simplify or clarify your prompt to remove ambiguity</li>
            <li>Emphasize the desired subject and exclude unnecessary ideas</li>
            <li>Use visual substitution (e.g., "empty field" instead of "no one around")</li>
            <li>Turn off Magic Prompt</li>
          </ul>
          <p>→ <strong>See:</strong> 2.4 Prompt Length and Clarity, 4. Handling Negatives, 7.2 Magic Prompt</p>
        </div>
      )
    },
    {
      question: "Non-English or non-Latin text is incorrect or unreadable",
      answer: (
        <div>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>AI has limitations rendering non-Latin alphabets (Cyrillic, Arabic, Chinese)</li>
          </ul>
          <p><strong>Fixes:</strong></p>
          <ul>
            <li>Use English for best text rendering</li>
            <li>Add add non-Latin text manually afterward (if necessary)</li>
            <li>Keep non-Latin text very short (logo-length).</li>
          </ul>
          <p>→ <strong>See:</strong> 2.1 Prompting Uses Natural Language, 2.6 Generating Text in Images</p>
        </div>
      )
    },
    {
      question: "A phrase isn't giving the result I expected",
      answer: (
        <div>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Wording is too vague or abstract</li>
            <li>Phrase not visually grounded</li>
            <li>Uses of Magic Prompt</li>
          </ul>
          <p><strong>Fixes:</strong></p>
          <ul>
            <li>Use more <strong>visually grounded</strong> synonyms or phrasing</li>
            <li>Try alternate wording or rephrasing of the concept</li>
            <li>Turn Magic Prompt off</li>
          </ul>
          <p>→ <strong>See:</strong> 6.5 Try Alternate Wording, 2.5 Prompting Styles and Intent, 7.2 Magic Prompt</p>
        </div>
      )
    },
    {
      question: "The AI ignores important parts of my prompt",
      answer: (
        <div>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Important details placed too late in the prompt</li>
            <li>Lack of emphasis for key features</li>
            <li>Prompt length exceeds ~150 words.</li>
          </ul>
          <p><strong>Fixes:</strong></p>
          <ul>
            <li>Place important elements early in the prompt</li>
            <li>Repeat or describe the key elements with more detail</li>
            <li>Use <strong>descriptive emphasis</strong> to draw attention</li>
          </ul>
          <p>→ <strong>See:</strong> 6.5 Emphasize Important Parts of the Image</p>
        </div>
      )
    },
    {
      question: "Changing one word doesn't seem to help",
      answer: (
        <div>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>The new word is not visually strong or grounded</li>
            <li>Other words in the prompt might conflict with it</li>
          </ul>
          <p><strong>Fixes:</strong></p>
          <ul>
            <li>Change <strong>multiple related terms</strong> for better alignment</li>
            <li>Try synonyms that are more visual</li>
            <li>Use a <strong>thesaurus or LLM</strong> to brainstorm variations</li>
          </ul>
          <p>→ <strong>See:</strong> 6.4 Try Alternate Wording</p>
        </div>
      )
    },
    {
      question: "The style or visual mood isn't right",
      answer: (
        <div>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Style or mood not specified or vague (<em>"artistic," "modern"</em>)</li>
            <li>Contradictions between subject and style</li>
          </ul>
          <p><strong>Fixes:</strong></p>
          <ul>
            <li>Mention specific style and moods: <em>"watercolor," "digital painting," "dreamy,"</em> etc</li>
            <li>Use a visually grounded detailed description for the style and mood you want</li>
            <li>Try <strong>Magic Prompt</strong> to explore or <strong>Style Reference</strong> to better control styles and moods</li>
          </ul>
          <p>→ <strong>See:</strong> 2.5 Visually Grounded vs. Abstract Prompts, 7. Creative Tools in PODgram.ai</p>
        </div>
      )
    },
    {
      question: "The image doesn't match the emotion or concept I had in mind",
      answer: (
        <div>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Emotion or concept described too abstractly for AI recognition.</li>
            <li>Missing concrete visual cues.</li>
          </ul>
          <p><strong>Fixes:</strong></p>
          <ul>
            <li>Translate emotional or conceptual language into visual or facial/body language cues.</li>
            <li>Blend abstract phrasing with visually grounded language.</li>
          </ul>
          <p>→ <strong>See:</strong> 2.5 Visually Grounded vs. Abstract Prompts, 5.4 Abstract Concepts Tied to a Subject</p>
        </div>
      )
    }
  ]}
/>

---

<Admonition type="tip">
  <p>This section doesn't cover every possible scenario, but these are the most frequent issues users run into and most image issues can be fixed with one of these strategies. With time and a little experimentation, you'll find the right combination of clarity and creativity to make each prompt work better. If something still isn't working, try breaking your idea into smaller parts and building it up again, one step at a time.</p>
</Admonition> 