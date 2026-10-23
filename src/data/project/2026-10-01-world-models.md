---
publishDate: 2026-10-01 00:04:00
title: "World models"
description: "World models for evaluating and interpreting AI agents: their limits, their modular structure, their abstractions, and the channel they model."
excerpt: "What world models need to contain, how they can be efficient and interpretable, and what they are models of."
image: ~/assets/images/blog/2026-world-models-drawings.jpg
tags:
    - "world models"
    - "ai safety"
    - "reinforcement learning"
    - "computational mechanics"
    - "interpretability"
    - "araya"
    - "research"
papers:
    - "AI in a vat: Fundamental limits of efficient world modelling for agent sandboxing and interpretability"
    - "From monoliths to modules: Decomposing transducers for efficient world modelling"
    - "Compositional Behavioral Semantics for State Abstraction in Reinforcement Learning"
    - "World models of environment, agent and joint agent-environment systems"
---

# World models

World models are a central component of model-based reinforcement learning, and they have also been proposed as sandbox environments in which AI agents can be tested before deployment. We ask what world models need to contain, how they can be efficient and interpretable, and what they are models of.

**AI in a vat** identifies a fundamental trade-off between the efficiency and the interpretability of world models used to evaluate AI agents, and gives procedures that minimise memory requirements, delineate what is learnable, or track the causes of undesirable outcomes.

**From monoliths to modules** shows how a large world model, represented as a transducer, can be decomposed into interacting modules that support parallelisable, interpretable and distributed inference.

**Compositional behavioral semantics** gives a compositional way to specify behavioural structures in reinforcement learning from local, one-step descriptions of system dynamics, and shows how they can be safely transferred between abstract and concrete systems.

**World models of environment, agent and joint agent-environment systems** distinguishes world models by the channel they model: the environment, the agent, or their realised joint process (left to right in the drawings at the top of this page).
