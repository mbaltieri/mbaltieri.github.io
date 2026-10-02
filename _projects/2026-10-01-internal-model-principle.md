---
layout: project
title: "The internal model principle and good regulators"
image: /assets/img/blog/interpretations/setup-cover.png
date: 2026-10-01 00:03:00
excerpt: "When does a system that regulates its environment contain a model of it?"
tag:
- internal model principle
- good regulator theorem
- control theory
- Bayesian filtering
- categorical systems theory
- araya
- research
comments: false
description: >
  When a controller or agent can be said to model its environment, from the internal model principle to good regulators and possibilistic belief updating.
# Printed under "Papers" from _data/publications.yml; the titles must match the ones there.
papers:
  - "A Bayesian Interpretation of the Internal Model Principle"
  - "A \"good regulator theorem\" for embodied agents"
  - "The Universal Property of Possibilistic Belief Updating"
---

# The internal model principle and good regulators

Conant and Ashby claimed that "every good regulator of a system must be a model of that system", an idea taken up in control theory as the internal model principle. We ask when a system that regulates its environment can be said to model it, and how such models relate to the Bayesian models of cognitive science.

**A Bayesian interpretation of the internal model principle** gives a precise formulation of the principle using categorical systems theory, and shows that its notion of model is a special case of possibilistic Bayesian filtering. A longer summary is in [this post]({{ site.baseurl }}{% link news/_posts/2025-03-01-bayesian-IMP.md %}).

**A "good regulator theorem" for embodied agents** shows that whenever an agent can perform a regulation task, an observer can interpret it as having beliefs about its environment, which it updates in response to sensory input.

**The universal property of possibilistic belief updating** shows that these beliefs, together with their possibilistic updating, generalise to a system in the sense of categorical systems theory with the universal property of a power object. In this precise sense, the agent's ability to perform the task and the map from its states to beliefs are the same thing.

## Papers

{% include publications/list.html titles=page.papers %}
