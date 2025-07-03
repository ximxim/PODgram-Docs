---
sidebar_position: 8
title: "7. Creative Tools"
hide_table_of_contents: true
---

# 7. Creative Tools in PODgram.ai

PODgram.ai comes with several built‑in helpers that can _shift_ or _amplify_ whatever your prompt says. Think of them as "prompt modifiers." They don't replace good wording, but they can change the direction, polish, or diversity of the result.

Below is what each tool _does_ to your prompt or image—and when to reach for it. (Full button locations and step‑by‑step instructions live in the official docs.)

---

## Describe – "Image to Prompt"

* **What it does**: Reads an existing image (uploaded or generated) and writes a fresh prompt that would recreate something similar.
* **Why use it**:  
   * Kick‑start a new idea when you don't know how to word it.  
   * Borrow phrasing tricks from images whose style you like.
* **Best practice**: Treat the generated text as a _draft_. Edit details, reorder parts, or shorten it before re‑using.

:::info
Describe documentation link to come.
:::

---

## Magic Prompt

* **What it does**: Expands or beautifies your text with an on‑device LLM. Short prompts grow; long prompts change only slightly.
* **Why use it**:  
   * Add richer adjectives, lighting cues, or stylistic hints automatically.  
   * Translate your ideas from any language into well‑formed English if desired.
* **Best practice**:  
   * Short, exploratory prompt? Let Magic Prompt run wild.  
   * Highly detailed prompt? Expect tiny tweaks—review to be sure it hasn't added unwanted elements.

### Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="short" label="Short Prompt">

**Short prompt**: _Photo of a cat sitting, gazing outside at the falling snow._  

**Magic Prompt**: _A cozy, warm photograph of a fluffy Persian cat sitting on a window sill, gazing intently at the falling snow. The cat has long, luxurious white fur, bright emerald-green eyes, and a slightly flattened face, creating a charming and endearing expression. Outside the window, large snowflakes gently drift down, partially obscuring a blurred landscape of snow-covered trees and rooftops. Soft, diffused light illuminates the cat's fur from within, casting a gentle glow on its face and creating a peaceful, tranquil atmosphere._

</TabItem>
<TabItem value="long" label="Long Prompt">

**Long prompt**: _A cozy indoor photo of a black-and-white cat sitting peacefully on a wooden windowsill. The cat has thick, fluffy fur and green eyes, looking outside with a calm expression. Snow is falling gently outside the window, creating a soft wintery backdrop. A leafy houseplant in a terracotta pot sits nearby, and light condensation covers the lower edge of the glass. The scene is lit by natural morning light, with soft shadows and a warm, quiet atmosphere. The cat is centered in the frame, captured at eye level, and the background is slightly blurred to focus attention on the subject._  

**Magic Prompt**: _A serene, soft-focus photograph of a black-and-white cat perched gracefully on a weathered wooden windowsill, its thick, fluffy fur contrasting with the aged wood. The cat's bright green eyes gaze thoughtfully outwards, reflecting the gentle snowfall beyond the windowpane with a calm, almost contemplative expression. Outside, delicate snowflakes drift past a frosted window, while inside, a vibrant fiddle-leaf fig in a terracotta pot provides a splash of life near a softly blurred stack of antique books. Natural morning light illuminates the scene, creating a cozy and quiet atmosphere with subtle shadows and a delicate layer of condensation on the lower edge of the glass._

</TabItem>
</Tabs>

:::info
Magic Prompt documentation link to come.
:::

---

## Random Style & Reference Style

* **Reference Style**: Lets you supply an image (uploaded or existing PODgram.ai output) whose _look_ guides the next image.
* **Random Style**: Injects an unpredictable and random image as a reference style before generation—ideal for visual experimentation.

**Why use them:**

* **Random Style** pushes a familiar prompt into new artistic territory—great for concept discovery.
* **Reference Style** anchors colours, textures, or composition to a source image—useful when you want variation without losing a core aesthetic.

:::tip Pro tip
Combine a **short prompt** + **Magic Prompt** + **Random Style** and get ready to explore a variety of wild images and possibilities.
:::

:::info
Random/Reference style documentation links to come.
:::

---

## Remix

* **What it does**: Use an existing image (uploaded or generated) as a parent image for the AI to regenerate while re‑using the prompt and other settings to make small or big changes.
* **Why use it**:  
   * Fix small flaws without re‑writing the entire prompt.  
   * Try minor lighting, color, or pose changes but keep overall composition.
* **Best practice**:  
   1. Identify what you like in the current image.  
   2. Change one phrase in the prompt (see Section 6).  
   3. Hit Remix to preview the tweak side‑by‑side.

:::info
Remix documentation link to come.
:::

---

## Combining Tools for Different Goals

Use these tools as _levers_: push them when you want more variation, pull back when you need precision. Mastering when—and when not—to use them will make every iteration (Section 6) faster and more intentional.

For example:

| Goal | Suggested Combo |
|------|-----------------|
| Rapid visual exploration | Short prompt → Magic Prompt → Random Style |
| Style transfer | Clear prompt → Reference Style (upload reference) |
| Polish an almost‑perfect image | Existing image → Remix (tweak one word) |
| Learn how to phrase | Inspiring image → Describe → edit → generate |

---

**Previous**: [6- Prompt Iteration & Refinement](./prompt-iteration-and-refinement.md)  
**Next**: [8- Troubleshooting](./troubleshooting.md) 