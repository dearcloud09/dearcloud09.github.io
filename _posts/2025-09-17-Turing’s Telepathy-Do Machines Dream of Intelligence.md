---
layout: post
title: "Turing’s Telepathy: Do Machines Dream of Intelligence?"
date: 2025-09-17
categories: [AI, philosophy]
---

I recently had the chance to read Alan Turing's papers on intelligence, and it left a deeper impression on me than any material about LLMs. That Turing foresaw our present and future in 1948, 77 years ago, felt almost "mystical" — as if Turing had sent telepathy to the future, or as if he had received telepathy from our time.

I've compiled the parts that personally fascinated me while reading.

## 1. Intelligent Machinery

> The intelligence displayed by the machine is nothing more than the intelligence of its creator

I read this as resonating with how LLM response quality varies depending on the prompt writer's ability. AI performance has improved to the point where even a non-expert like me can feel it, so when AI gives an unsatisfactory answer, I now wonder if the problem lies with my prompt.

> The argument from Gödel and other theorems rests essentially on the condition that the machine must not make mistakes. But this is not a requirement for intelligence.

This aligns with my view on hallucinations. Humans also have hallucinations, and in fact, objective truth doesn't exist — only commonly agreed-upon hallucinations exist (I'm fond of Anil Seth's *Being You*). And hallucination is related to how the model is designed. ([Related link](https://openai.com/ko-KR/index/why-language-models-hallucinate/))

If I could only get rewarded by saying something, I too would choose to say something even if the probability of it being true were low. But if accuracy has greater weight and "I don't know" is an option, I might say "I don't know." In short, it's connected to how the reward system is designed.

Additionally, Turing says that if we want to create intelligent machines, and if we want to mimic the human model as closely as possible, we need to "educate" them. Just like teaching a young child! This perspective of treating AI like teaching a child was incredibly fascinating to me. Mature humans have a lot of embodied knowledge. They have tacit knowledge, but children don't have tacit knowledge. Therefore, adults must always remember that their tacit knowledge isn't obvious to children when conversing with them. Of course, the same applies when talking with other adults.

Naturally(?), he mentions reinforcement learning multiple times. About teaching machines by providing pleasure-pain as well.

## 2. Computing Machinery and Intelligence

In this part, Turing transforms the question "Can machines think?" into "Are there imaginable digital computers which would do well in the imitation game?" I find this practical too. While the former is ambiguous to answer, the latter is a judgment we can make, so I think this is more pragmatic.

And once again, he mentions how to create a digital computer that plays the imitation game well:

> (a) The initial state of the mind, say at birth
> (b) The education to which it has been subjected
> (c) Other experience, not to be described as education, to which it has been subjected

And he suggests creating a program that mimics a child's mind rather than an adult's mind. Perhaps we might end up raising a newly born(?) program in a gym. If we're not creating some perfect intelligence but rather creating a being desperately similar to humans (who make mistakes and forget), I thought this was a reasonable and worth-trying approach.

## 3. Intelligent Machinery, a Heretical Theory

> Setting aside 'breakdowns', machines are completely reliable while mathematicians make a fair number of mistakes. The risk mathematicians take in making mistakes might be an inevitable result of their ability to occasionally think of completely new methods. The well-known fact that the most reliable people rarely think of genuinely new methods supports this.

I love this part too. If one perfectly follows given tasks in given ways, emergence would be difficult to occur. The unintended, what doesn't follow the original plan, mistakes — these become good foundations for creativity.

And the story about experience appears again. If machines can learn from experience, and if we appropriately select the experiences we impose on machines, we could call this education.

> It begins to remember what its own thoughts were like. This leads to productive new forms of indexing. New forms of indexing might be introduced based on features observed in already-used indices. These indices would be used like this: When choosing what to do next, it looks up features of the current situation in the index, discovering what choices were made before in similar situations and whether the results were good or bad.

He proposes giving machines memory so they could self-evaluate, reflect, and influence future decisions. As memories accumulate, how to organize, filter, and index many memories will become increasingly important.

> Each machine is supplied with a tape bearing a random series of figures (e.g., 0 and 1 in equal quantities), and these are to be used by the machine for making choices. This ensures that the machine's behavior won't be entirely determined by experience, which will be useful when experimenting with teaching methods.

He also mentions random elements. Since being entirely determined by experience could be somewhat rigid, the idea is to add arbitrary random elements. If implemented 'very' simply today, this could be temperature, Top P, or Top K.

## 4. Can Digital Computers Think?

> The problem of programming a computer to behave like a brain is rather like trying to write a story about Mars while on a desert island.

This is a sentence I particularly love. Now that AI performance has greatly improved, when AI gives an answer different from my expectations (I now call this hallucination), I reconsider whether I've given AI sufficient and proper information about Mars.

> "The whole thinking process is still rather mysterious to us, but I believe that the attempt to make a thinking machine will help us greatly in finding out how we think ourselves."

The final sentence is truly beautiful! While trying to create something that feels similar to humans, I've looked into myself more than anything. How do I perceive, feel, think, and express it? And I'm reminded once again that this is an extremely personal experience, and that each human has their own qualia. Could we give machines qualia too?

> Of course the illusion of art makes us believe that great literature is very close to life, but exactly the opposite is true. Life is amorphous, literature is formal.
>
> — [Françoise Sagan](https://www.theparisreview.org/interviews/4912/the-art-of-fiction-no-15-francoise-sagan)

This is what Françoise Sagan said about the relationship between art and reality. I think creating a very human-like AI is perhaps the work of "perfectly" implementing 'imperfect' biases in a formal way.

---

### References

- Turing's papers: [https://academic.oup.com/mind/article-abstract/LIX/236/433/986238](https://academic.oup.com/mind/article-abstract/LIX/236/433/986238?redirectedFrom=fulltext)
- Korean translation of Turing's papers
- Anil Seth's *Being You*
- Françoise Sagan interview: [https://www.theparisreview.org/interviews/4912/the-art-of-fiction-no-15-francoise-sagan](https://www.theparisreview.org/interviews/4912/the-art-of-fiction-no-15-francoise-sagan)

[한국어로 읽기](/기계는-지능의-꿈을-꾸는가)