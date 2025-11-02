---
layout: post
title: "[EN] How I Met Vibe Coding "
date: 2025-11-02
categories: [AI, prompt, vibe coding]
lang: en
---

(Title inspired by the TV show "How I Met Your Mother" that I've never watched)

> "Vibe coding is a software development approach where a user provides natural language prompts to an AI, which generates the functional code." - Google search result

**Vibe coding** is a software development approach where users provide natural language prompts to AI, which then generates functional code. I currently use Cursor for both work and personal projects, and through the process of providing natural language prompts and having AI generate code—what's called **vibe coding**—I've learned these lessons.

---

## 1. Write Clear Requirements in Your Native Language, Not Perfect English

I'd heard about Cursor for quite some time. I frequently came across online discussions praising Cursor, but as a non-developer, I couldn't quite imagine how I would use it. It was like never having skied in my life (I'm the person who plays Zelda at ski resorts) and hearing people say skiing is fun—I couldn't relate to the experience. For some reason, I had this strange and misguided obsession that prompts had to be written in English, which made it even more daunting.

When I realized that *prompts don't need to be in English, and what matters is that the content itself is clear*, I finally thought, "Oh, I can actually use this."

---

## 2. What Do I Need to Teach the Agent to Do My Work?

There's a slight difference between using it for work versus personal projects. Let me first talk about how I use it at work. My primary work involves "product experimentation." This includes opportunity factor analysis before experiments, analyzing necessary data before experiments, designing web logs, and technical communication about how and by what criteria to conduct experiments.

Among these tasks, I found that everything except web log design and communication was easier to abstract and standardize. Web log definition and development require important communication with developers, and communication has many variables depending on the counterpart and situation. In contrast, other tasks have relatively "clear" goals, purposes, and deliverables. Once you define the background (why is this analysis needed?), what data to base it on, and how to aggregate it, the rest becomes interpretation.

So whereas I used to write 100% of analysis queries manually, I gradually shifted to instructing Cursor agent in natural language to write and execute analysis code. Now I write less than 10-20% of analysis code myself, and while the agent writes and executes queries, I spend more time on communication-related tasks that are currently difficult to automate.

Here's what I learned through this transition.

### 2.1. If I Don't Give Enough Information, the Agent Can't Possibly Get the Right Answer

This is ultimately about **Context Engineering**—humans are similar. Without contextual information, there's no information to consider, so the result may differ from what I wanted. Even telling the agent about the internal query engine and version is crucial information. When I didn't provide this, the agent wrote queries incompatible with our internal query engine. This was immediately resolved once I explained the code execution environment in detail.

So I provided very rich contextual information when giving instructions. Why does this work need to be done? (Not just "to make money"...) I told the agent why this analysis was necessary. And since criteria are important for analysis, I explained them very specifically. I detailed requirements from data extraction period to platform and aggregation criteria. Of course, I also told the agent what tables to use.

**Prompt Example** (just an example):

```
Analysis Background:
- The reader of this analysis wants to decide whether to continue investing development resources in improving this UI.

Data to Examine:
1) Usage rate of this UI
2) How to set the baseline for what's considered "high" usage?
   2.1) If high or low, what are the reasons?
   2.2) Are high-usage users actually helpful for our product growth from a business perspective?
3) Data sources to use:
   3.1) Usage data: Use weblog table A. Filter and aggregate UI weblog with event_name = 'new ui'
   3.2) Usage aggregation criteria: Use distinct user_id, but examine not just ratios but also usage frequency distribution
   3.3) To judge if these users actually help business, use revenue table A as proxy. Consider gmv, asp, aov, orders per customer and aggregate each as follows
```

At this point, you might wonder what's the difference in time spent between instructing in natural language versus writing code. I thought of this as *"time invested in developing the tool I'll use."* It's sharpening the axe. While working, I progressively updated **"rules"** about work methods and updated **"memory."** Once learned, it could be applied to the next task. In other words, I transferred my knowledge and work methods to the agent, and after completing tasks, I made it recursively update rules and memory through retrospection. This was also implemented as a workflow. I implemented **meta-learning** with Cursor's custom slash command, so executing this command allows the agent to learn.

So in my experience, **hallucinations** (creating non-existent tables, columns, or using wrong criteria) occurred at a low rate. I solved the case of outputting non-existent tables and columns very simply. Since the root cause is arbitrary inference, I created an environment where queries could be executed and specified a rule to force DESCRIBE before writing queries. Then non-existent tables or columns don't appear. Even if non-existent tables or columns are added, the agent checks its own failure through DESCRIBE or query execution and readjusts. I also specified default values for aggregation criteria and made it work with those specified criteria.

**.Cursorrules File Example**:

```markdown
Before writing SQL queries, always:
1. Execute DESCRIBE on tables to be used
2. Check column names in results and confirm with user if these columns are correct to use
3. Never guess non-existent columns

Execution example:
Agent: "Let me check the customers table structure"
> DESCRIBE customers;
Agent: "There's birth_date but no age. Should I use this column for calculation?"
```

### 2.2. This Entire Process is About Confirming Each Other's Tacit Knowledge and Creating Agreed-Upon Shared Knowledge

Everyone has different **tacit knowledge**. Humans and AI are no different, and personally, I think even different AI models have different tacit knowledge. Gemini's concept of "red," GPT's concept of "red," and Claude's concept of "red" likely have different ranges. Red here is just an arbitrary example—you could substitute any word or sentence.

Therefore, I came to realize it's important to clearly know what my tacit knowledge is and convey it to AI or people. One prompt I frequently used manually was "If there's anything unclear, ambiguous, or if you need more information from my instructions so far, please ask"—I later added this as a rule too. In short, prompt efficiency depends on how much you invest in system instruction (is this too obvious?).

### 2.3. All of This Needs to Be Dynamically Automated

Situations continuously change, and I don't think there's a perfect system instruction or prompt. Even foundation models change, and new models come out daily. So I thought about how to pursue a sustainable approach in this dynamically changing situation, and concluded that this part needs to require minimal manual intervention. That's because it gets executed that way (think nudges). Although it may seem complicated, the method I implemented is actually simple. As mentioned earlier, I created a meta-learning workflow so the agent also reflects like humans do. The retrospection output shouldn't be too specific. That would make it difficult to use generically. I considered the following elements:

1. meta-learning is ultimately about progressively improving thinking methods, behavioral guidelines, and memories that behavioral guidelines reference.
2. When completing a task, reflect from the following perspectives: How could the agent have approached this problem (thinking method), how could it have actually performed the task (behavioral guidelines), and what information could it have known (memory to reference) to complete the task more efficiently? Or the user might need updating. In other words, AI can give feedback to humans. There's no law that only AI should improve, right?
3. Based on the retrospection from 2, judge again whether this content was really absent from rules and memory. If absent, add it to the appropriate location; if present, make it reflect again (...) on why it didn't use it despite being in rules and memory, update rules and memory, and update workflows where possible.

Through this command, the agent reviews its mistakes and writes in its specification how to work more efficiently. Repeating this workflow seems to reduce what humans judge as hallucinations to some extent.

> agent: "I had to rewrite this part because I didn't ask about aggregation criteria beforehand. Going forward, I'll add a process to my rules to ask users about aggregation criteria in advance. And if there are default criteria used, I'll add those to memory."

That's how it works.

---

## 3. Enjoying the Dance Itself

Working this way was quite effective for me, and I even found it fun! I really enjoy reading LLM outputs and thought processes, so I found the process itself enjoyable. I really love opening up reasoning processes one by one.

How can I express my thoughts in more concise language? Language never perfectly reflects reality. Even saying "chair" is just a shadow of the countless forms of actual chairs that exist in the world. So thinking about how to reduce that gap is interesting.

And since Gemini, GPT, and Claude all allow viewing thought processes, when I open them and see how my prompt was understood and how it tried to be specified, sometimes I think not "This stupid thing!" but "I was the stupid one." It's a process of learning each other's languages.

I still feel there are many areas that can be improved. Even areas I haven't automated yet—if I sufficiently transfer my work-related thinking methods, response methods, and knowledge to create an agent as good as me, or even better (..), I think that's possible too. Especially since Cursor updates at least once a week, sometimes 2-3 times, and technology is developing so rapidly, it makes me think optimistically. Ultimately, as many tech articles say, it's about managing agents, and I think the current and near-future approach is to understand the nature of the work I need to do, assemble appropriate agents, supervise them, and educate them. Isn't it like becoming a Pokémon trainer or building a Hearthstone deck?

I've written at length, but not everyone needs to dance the same way. Still, if you read this and like this vibe, you can start like this: Keep in mind "How could I enable someone who knows nothing to do my work like I do?" and let the agent complete one task even if imperfectly, and have it repeat. And it's okay to fail. I think it's more dangerous to assume failure will be zero. When it fails, guide it on how to 'notice' and make the next approach. Learn from small failures and apply what's learned to the next task, to different types of tasks. I think that's how to apply the compound interest of learning.

*[한국어 버전 보기](/2025/11/02/how-i-met-vibe-coding.html)*
