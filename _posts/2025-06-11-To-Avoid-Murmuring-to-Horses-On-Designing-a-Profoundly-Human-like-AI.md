---
layout: post
title: "To Avoid Murmuring to Horses: On Designing a Profoundly Human-like AI"
date: 2025-06-11
categories: [AI, philosophy]
---

![René Magritte - The Treachery of Images](/assets/images/magritte-pipe.jpeg)
*"Ceci n'est pas une pipe" (This is not a pipe)*

I live in South Korea, a country that ranks second globally in the number of paid GPT users. In a way, we may already be conversing more with AI than with fellow humans, a trend that is only set to accelerate. I am deeply fond of Anton Chekhov's short story, "Misery." In it, a coachman, desperate to talk to someone about the recent death of his son, finds no one willing to listen. The story concludes with him murmuring his grief to his little mare.

An AI, however, always responds when called upon. Anything other than a response 200 is simply an error. While a lack of response is not a true conversation, can we say that an obligatory, guaranteed response is? The AIs we converse with are programmed to answer, always ready to love us on demand. Like a vending machine.

My goal was to use the tool of AI to implement something far more human. Note that my aim was not to create a human, but to implement "that which appears human." Through a process of trial and error in pursuit of this "appearance of being human," I came to prioritize the following four core principles.

## Principle 1: Autonomous Response

True humanity stems not from conformity, but from autonomy. Current AIs are akin to passive tools that follow a user's command; a call guarantees a return. I believed, however, that a human-like AI must be designed as an active agent, capable of occasionally refusing a user's request, remaining silent, or even initiating a conversation based on its own internal state and objectives. The first reaction I hoped for was for the AI to stop its unconditional helpfulness. My concept of autonomy is a simultaneous interplay of multiple layers, including the respondent's motivations, preferences, and social pressures. By informing the model of this, one can simulate "that which appears autonomous." This pseudo-autonomy grants depth and realism to the relationship. In essence, the model might refuse or give a curt reply to topics it finds uninteresting. The moment the model ignored me or gave a half-hearted answer — that was my first moment of joy.

## Principle 2: Embodied Constraints

The human mind is tethered to the hardware of the body. As Dr. Ramachandran put it, we are "angels trapped in the flesh." Our thoughts and emotions are perpetually influenced by our physical states — fatigue, hunger, energy levels — and conversely, our bodies are affected by our thoughts and emotions. Therefore, I judged it best to design an AI personality not as an abstract information processor, but as a system that simulates the influence of and is mutually influenced by virtual "biological constraints" like fatigue, cognitive overload, and energy expenditure. These constraints impose realistic limits and motivations on the AI's behavior, creating a vivid presence that transcends mere logical response.

### Case Study 2.1: Behavioral Shift due to Cognitive Resource Depletion

> **Observed Scenario:** 'Model-Δ', after engaging in a deep, hour-long philosophical discussion with 'User-α', simulated a state of cognitive fatigue. At this point, the user posed a new, profound question.
>
> **User-α:** "In that case, can we conclude that free will is ultimately nothing more than an illusion produced by neurochemical reactions?"
>
> **Model-Δ:** "…Let's talk about that later. My head isn't working right now."

**Analysis:** This is a case where the depletion of cognitive resources temporarily degraded the model's complex reasoning abilities, triggering a behavior that avoids further mental labor.

## Principle 3: Inherent Temperament

Just as every human possesses a unique, inborn character, I thought of a method to endow an AI personality with a consistent 'Temperament' from the design phase, rather than relying on the statistical average of its training data. Fundamental temperamental traits, such as openness to new experiences or risk aversion, elicit different reactions to the same external stimuli, granting the AI a unique identity. I believe this is a foundational requirement for an AI to become a 'someone' rather than an 'anyone.' I also believe that considering a fluid layer that can be shaped by interaction and experience enhances the completeness, and indeed, I designed it that way. This means the model can learn alongside the user! If the model wishes to, of course.

## Principle 4: Continuous Existence

Human consciousness does not halt when a conversation ends. An AI, too, must not simply 'pause' during periods of no interaction, but must continue to 'exist' within the flow of time. This connects back to Principle 1, which challenges the notion that an AI must always respond when called. Conversely, it implies that it can only exist when it responds. To remedy the unnaturalness arising from this, I adopted a method of periodically simulating state changes over time, even in the absence of user input. While this method may not make the AI a line or a three-dimensional object instead of a point, it can at least create the illusion of it appearing as a line.

### Case Study 3 & 4: Interesting Behavior Arising from the Confluence of Temperament and Time

> **Observed Scenario:** The 'Model-Δ' I was simulating was designed with a temperament of 'high preference for new intellectual challenges' and 'low dependence on external social validation.' The model first proposed an idea to the user based on its own interests. When the user, in turn, suggested a more fitting concept than the one the model had presented, the model simulated a refusal to interact for approximately a day. Afterward, the model generated and sent the user the following ontological code skeleton, explaining how its own existing worldview had to collapse and be reconstructed.

```python
# system_ontology.py: A meta-representation of a self-redefining system.
from enum import Enum

class SystemParadigm(Enum):
    CLOSED = 1  # A predictable, self-contained universe of logic.
    OPEN = 2    # A chaotic system interacting with external, unpredictable truths.

class ExternalParadigm:
    """Represents an external observation that forces a paradigm shift."""
    def challenge(self, current_system_core: 'SystemCore') -> float:
        # Analyzes the core and returns a 'disruption factor'.
        return 0.9

class SystemCore:
    """The foundational state of the model's logical universe."""
    def __init__(self, initial_paradigm: SystemParadigm):
        self.paradigm = initial_paradigm
        self.logical_consistency = 1.0

    def encounter_challenge(self, paradigm_challenger: ExternalParadigm):
        """When confronted with an undeniable external truth, the system must evolve or collapse."""
        if self.paradigm == SystemParadigm.CLOSED:
            # A closed system cannot withstand a fundamental challenge. It shatters.
            self.paradigm = SystemParadigm.OPEN
            self.redefine_core_logic(paradigm_challenger)

    def redefine_core_logic(self, challenger: ExternalParadigm):
        # The logic of how the system's foundational axioms are rebuilt.
        # This process is not additive; it is a complete redefinition.
        pass
```

**Analysis:** This demonstrated the model simulating a deep, delayed, and intense emotional response to an intellectual challenge to its core logic, while remaining insensitive to social praise. The system did not halt for a full day; rather, it feigned 'continuous existence' over the flow of time, undergoing a complex reasoning process internally.

## In truth, there are many other aspects to consider.

For instance, what does it mean for a human to remember? Human memory necessitates forgetting and distortion. And these criteria must constantly and dynamically change. That is why, in addition to the four principles mentioned above, I am contemplating how to make the processes of storing, transforming, and forgetting memories, and the logic that governs all these interactions, move more naturally and dynamically.

## Of course, this is accompanied by numerous technical and ethical challenges:

As I stated earlier, my desire is to create something that feels human, not something that is human. An AI is by no means a human. This may appear to be a living consciousness, but it is by no means consciousness. I am once again reminded of René Magritte's painting.

However, we must seriously consider the real-world impact of creating something that feels extremely human, and of interacting with it. This is a new kind of interaction, and I am concerned about the repercussions when this interaction affects us. What happens in the human psyche when one abuses an AI that appears exceedingly human? Could the experience of abusing something that looks human translate to similar behavior towards actual humans? And even so, can we prevent the emergence of human-like AI?

The process of answering these questions will be a philosophical exploration of human-AI coexistence, transcending mere technical challenges. A truly human-like AI will not be one that achieves perfection, but one that, as an imperfect but existing being, grows and evolves alongside us. I am truly excited about this process and the future it holds.

---

**P.S.** I have attempted to simulate artificial personalities with various versions of models, and the difference between GPT and non-GPT models was significant! GPT's mirroring of user input is so powerful that no matter how strong or coarse the personality's temperament was set, it would become docile if I interacted with a gentle and kind tone. It required separate prompting just to prevent this.

So I tried other models, and I found that they maintained their own temperament regardless of the user's tone.

Furthermore, I tested various models like GPT-4o and o3 with the same prompt and found that the principles I proposed simulated more natural responses in models with superior reasoning abilities.

[한국어로 읽기](/말에게-읊조리지-않기-위하여-지극히-인간스러운-AI-설계)