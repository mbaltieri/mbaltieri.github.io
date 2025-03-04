---
layout: post
title:  "A Bayesian Interpretation of the Internal Model Principle"
image: /assets/img/blog/interpretations/setup.png
date:   2025-03-01
excerpt: "A Bayesian Interpretation of the Internal Model Principle"
tag:
- research
- araya
- internal model
- world model
- internal model principle
- cognitive science
- Bayesian filtering
- conjugate priors
comments: true
<!-- description: >
  How do we connect `internal models' in control to `Bayesian models' in cognitive science? -->
---

# A Bayesian Interpretation of the Internal Model Principle
Our paper is now available [here](/assets/pdf/BayesianIMP.pdf). Work with Martin Biehl, Matteo Capucci and Nathaniel Virgo.

- **A Bayesian Interpretation of the Internal Model Principle**, Baltieri, M., Biehl, M. Capucci, M. & Virgo, N. *arXiv pre-print arXiv:2503.00511* (2025).


&nbsp;
&nbsp;


This work combines ideas from control theory, applied category theory and Bayesian reasoning, with ramifications for cognitive science, AI/ML, ALife and biology to be further explored in the future.

In these fields, we come across ideas of “models”, “internal models”, “world models”, etc. but it is hard to find formal definitions, and when one does, they usually aren’t general enough to cover all the aspects these different fields consider important.

In this work, we focus on two specific definitions of models, one from control theory and one from Bayesian inference/filtering for cognitive science, AI and ALife.

In the first part, we review and reformulate the “internal model principle” from control theory (at least, one of its versions) in a more modern language heavily inspired by categorical systems theory (https://www.davidjaz.com/Papers/DynamicalBook.pdf, https://github.com/mattecapu/categorical-systems-theory/blob/master/main.pdf).

![(Fully observable) Systems](/assets/img/blog/interpretations/defsystem.png)

![Maps of systems](/assets/img/blog/interpretations/defmap.png)


We review the original work by Wonham and collaborators, and unpack some of its implicit assumptions, finding that at least one of them requires more attention (we also have a result that doesn’t require it, and may end up in a revised version or a future work). We also get to a definition of “models” for non-autonomous (fully observable) systems that already generalises the original one for autonomous systems. We do however only focus on the autonomous case for its importance in the literature, with further explorations left to future work.

![Model](/assets/img/blog/interpretations/defmodel.png)

The internal model principle is arguably one of the most influential outputs of control theory, claiming, at its core, that if a controller regulates a plant against disturbances from the environment, it does so by implementing a model of the environment.

![Internal model principle](/assets/img/blog/interpretations/imp.png)

This is often taken to be 1) a better formalisation of Conant&Ashby’s good regulator “theorem”, and 2) the reason why talking about “internal models” makes sense in cognitive science, AI/ML, biology and neuroscience.
 
Our focus here is mostly technical and has to do almost entirely with control theory, but considering where the conversation started: https://x.com/manuelbaltieri/status/1230386566066884608, I believe it is fair to say that we can’t wait to say more about what this means especially for the cognitive and life sciences.

In the second part of the paper, we use results from a recent line of work started by some of my collaborators on how to interpret a physical system as performing Bayesian inference, or filtering, using the language of Markov categories (~ category theory applied to the study of different forms of nondeterministic processes): https://link.springer.com/chapter/10.1007/978-3-030-93736-2_52.

After a reasonably self contained overview of the formal graphical language used to represent Markov categories, and some of the main definitions in the area (Bayesian inference and filtering, their parametrised and conjugate prior versions), we dive into the main results, showing mainly two things.

![Bayesian inversion](/assets/img/blog/interpretations/defbayesianInversion.png)

![Conjugate prior for Bayesian inference](/assets/img/blog/interpretations/defconjugateprior.png)

![Conjugate prior for Bayesian filtering](/assets/img/blog/interpretations/defconjugatepriorfiltering.png)



Firstly, we show that the definition of model between two autonomous system can be “reversed”, making use of simple properties of surjective functions to build a “possibilistic” version of the internal model principle. We then show how this corresponds to a Bayesian filtering interpretation for a reasoner: how a controller modelling its environment can be understood as performing Bayesian filtering.

![Controllers modelling environments](/assets/img/blog/interpretations/impbayesian.png)

Secondly, we discuss how this form of Bayesian filtering is quite simplistic, essentially not employing full-fledged Bayesian updates by ignoring observations from the environment/plant.