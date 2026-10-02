---
layout: page
title: Research
description: >
  Manuel Baltieri's research on mathematical foundations of agency, cognition, artificial life, and AI safety in agent-environment systems.
image:
  path: /assets/img/social-card.jpg
  width: 1200
  height: 630
  alt: "Manuel Baltieri — research in agent foundations, AI safety, artificial life, and cognition"
---

<p class="research-lead">Studying how agents can be identified, modelled, and composed, and what those formal choices imply for cognition, living systems, and AI safety.</p>

<p>Manuel focuses on coupled open agent–environment systems that compose to form autonomous systems. This makes it possible to ask where a boundary comes from, what counts as a model or a goal, and which properties belong to a system rather than to the observer describing it.</p>

<nav class="research-paths" aria-label="Research material">
  <a class="no-hover" href="/research/publications/"><strong>Publications</strong><span>Journal articles, conference papers, and preprints</span></a>
  <a class="no-hover" href="/research/talks/"><strong>Talks</strong><span>Invited talks, lectures, and conference slides</span></a>
  <a class="no-hover" href="/projects/"><strong>Projects</strong><span>Longer introductions to current and recent work</span></a>
</nav>

{% comment %}
The diagram is the navigation for the four fields. Selecting a box shows that field's card
under the row of boxes (script: my-scripts.html; styles: my-style.scss and my-inline.scss).
Without scripts all four cards are shown and the boxes are links to them.
{% endcomment %}
<section class="research-map" aria-label="Research agenda connecting agent-environment systems with mathematics, cognition, artificial life, and AI safety" data-research-map>
  <div class="research-map__canvas">
    <div class="research-map__core">
      <span class="research-map__label">Formal focus</span>
      <div class="research-map__interaction" role="img" aria-label="Agent interacting bidirectionally with environment">
        <strong>Agent</strong>
        <span class="research-map__exchange" aria-hidden="true">&#8644;</span>
        <strong>Environment</strong>
      </div>
      <span class="research-map__vocabulary">models · goals · interfaces · interactions</span>
    </div>

    <div class="research-map__themes" role="group" aria-label="Research fields">
      <a class="research-map__theme no-hover no-push-state no-mark-external no-print-link" href="#mathematics-of-agents" data-field="mathematics-of-agents">
        <span class="research-map__number" aria-hidden="true">01</span>
        <strong>Maths</strong>
        <span>Category theory, control, probability</span>
      </a>
      <a class="research-map__theme no-hover no-push-state no-mark-external no-print-link" href="#cognition-and-control" data-field="cognition-and-control">
        <span class="research-map__number" aria-hidden="true">02</span>
        <strong>Cognition</strong>
        <span>Inference, control, representations</span>
      </a>
      <a class="research-map__theme no-hover no-push-state no-mark-external no-print-link" href="#artificial-life" data-field="artificial-life">
        <span class="research-map__number" aria-hidden="true">03</span>
        <strong>(A)Life</strong>
        <span>Autonomy, regulation, organisation</span>
      </a>
      <a class="research-map__theme no-hover no-push-state no-mark-external no-print-link" href="#agent-foundations-for-ai-safety" data-field="agent-foundations-for-ai-safety">
        <span class="research-map__number" aria-hidden="true">04</span>
        <strong>AI safety</strong>
        <span>Agent foundations, abstractions, capabilities</span>
      </a>
    </div>

    <p class="research-map__hint">Select a field to read about it.</p>

    <div class="research-themes">
      <section id="mathematics-of-agents" class="research-theme" aria-labelledby="mathematics-of-agents-title">
        <p class="section-kicker">01 · Maths</p>
        <h2 id="mathematics-of-agents-title">Mathematics for agents</h2>
        <p>Different mathematical languages reveal different aspects of agency. Category theory describes systems and processes, their compositional patterns and universal properties. Control theory formalises feedback and regulation, while Bayesian inference captures uncertainty and learning patterns.</p>
        <ul class="research-theme__links">
          <li><a class="no-mark-external" href="https://osf.io/rqu7s_v2">Mathematical approaches to the study of agents</a></li>
          <li><a class="no-mark-external" href="https://arxiv.org/abs/2607.00034">Bayesian updates from coalgebraic determinisation</a></li>
        </ul>
      </section>

      <section id="cognition-and-control" class="research-theme" aria-labelledby="cognition-and-control-title">
        <p class="section-kicker">02 · Cognition</p>
        <h2 id="cognition-and-control-title">Cognition and control</h2>
        <p>Perception, action, and minimal cognition are studied with control theory, Bayesian reasoning, and dynamical systems. This includes examining when a controller can be said to contain an internal model and how causal representations support adaptive behaviour in natural and artificial agents.</p>
        <ul class="research-theme__links">
          <li><a class="no-mark-external" href="https://arxiv.org/abs/2503.00511">A Bayesian Interpretation of the Internal Model Principle</a></li>
          <li><a class="no-mark-external" href="/assets/pdf/DisentanglementCausalCognition.pdf">Disentangled Representations for Causal Cognition</a></li>
        </ul>
      </section>

      <section id="artificial-life" class="research-theme" aria-labelledby="artificial-life-title">
        <p class="section-kicker">03 · (A)Life</p>
        <h2 id="artificial-life-title">Artificial life</h2>
        <p>Research on living systems sharpens questions about autonomy, individuality and regulation. The focus is on whether concepts from cybernetics, information and control theory can explain what separates living from non-living systems.</p>
        <ul class="research-theme__links">
          <li><a class="no-mark-external" href="/assets/pdf/HybridLifeWIREs.pdf">Hybrid Life: Integrating Biological, Artificial, and Cognitive Systems</a></li>
          <li><a class="no-mark-external" href="/assets/pdf/BraitenbergHabitat.pdf">A Braitenberg vehicle’s habitat</a></li>
        </ul>
      </section>

      <section id="agent-foundations-for-ai-safety" class="research-theme" aria-labelledby="agent-foundations-for-ai-safety-title">
        <p class="section-kicker">04 · AI safety</p>
        <h2 id="agent-foundations-for-ai-safety-title">Agent foundations</h2>
        <p>Formal foundations are being developed for identifying AI agents in and among modern AI systems, together with their boundaries, goals and models, in order to estimate their capabilities and improve interpretability. The aim is to make safety questions precise enough to analyse and test.</p>
        <ul class="research-theme__links">
          <li><a class="no-mark-external" href="https://openreview.net/pdf?id=kovefbSXbQ">Compositional Behavioral Semantics for State Abstraction in Reinforcement Learning</a></li>
          <li><a class="no-mark-external" href="https://arxiv.org/abs/2504.04608">AI in a vat: Fundamental limits of efficient world modelling for agent sandboxing and interpretability</a></li>
          <li><a class="no-mark-external" href="/assets/pdf/WorldModels.pdf">World models of environment, agent and joint agent-environment systems</a></li>
        </ul>
      </section>
    </div>
  </div>
</section>

<!-- <section class="research-methods" aria-labelledby="research-methods-title">
  <p class="section-kicker">Mathematical toolkit</p>
  <h2 id="research-methods-title">Several languages, one class of problems</h2>
  <p>Different questions call for different formal tools. Manuel's work draws on:</p>
  <ul class="research-methods__list">
    <li>Applied category theory</li>
    <li>Control theory</li>
    <li>Probability and Bayesian inference</li>
    <li>Dynamical systems</li>
    <li>Information theory</li>
    <li>Stochastic thermodynamics</li>
  </ul>
</section> -->
