---
title: "We Nudged Half a Million Students to Search. It Didn't Change Where They Enrolled."
subtitle: "Two nationwide experiments on Colombia's exam-results platform moved attention, not enrollment. The winning message went on to become the front door to IcfesBot."
description: "Two nationwide experiments delivered pop-up messages to 519,000 Colombian students the moment they saw their exam results. Clicks moved; enrollment didn't. What that null taught us about information policy at scale."
pubDate: 2026-09-05
lang: en
authors:
  - Christopher A. Neilson
tags:
  - Information interventions
  - Higher education
  - Colombia
draft: true
paperUrl: https://www.christopher-neilson.com/paper-nudge2search-web/documents/manuscript.pdf
paperLabel: Download the working paper (PDF)
---

In 2017, half a million Colombian students logged in to see their Saber 11 results — the national exam that stands between the end of high school and everything after it. Most of them saw something new on the page: a pop-up inviting them to a portal built for the purpose with the Banco de la República, which gathered earnings, employment rates, costs and financial aid for every degree level, nationally and for each department, in one place.

We were testing a simple, expensive-to-get-wrong proposition: that if you put the right information in front of a student at the right moment, it changes what they do next.

## What we built, and what we tested

The setting was unusually clean. Every Colombian student who wants to go to university takes the same exam and collects the results from the same platform, so the platform is a universal touchpoint — the one moment when the entire cohort is looking at the same screen, thinking about the same decision.

We ran two nationwide randomized experiments across that touchpoint, reaching 519,355 students in total. The first round, in November 2017, tested nine different messages against a no-message control. Eight put an earnings figure in front of the student, crossing three choices: a single number or a range, a national figure or one personalized to the student's score band and department, and a frame built around what they stood to gain or what they stood to lose. The ninth was simply a plain invitation to look. A second experiment in May 2018 — 16,861 students from the spring cohort, a different population — tested five messages whose character counts were equalized, so that message length could not explain the differences.

Every pop-up link carried a per-student identifier, which meant that a click was the outcome we could measure directly, and enrollment the outcome we could measure later.

## Attention moved

The pop-ups worked, in the narrow sense. Across the treated students, 24.6 percent clicked through in 2018, and at least 15.2 percent in 2017 — a lower bound, because the click log closed before the last deliveries went out. For a public information campaign, those are not small numbers. They were not evenly shared, either: students from better-off families, and those with higher scores, clicked two to four times as often.

But the ranking of messages defied our expectations. The plain invitation to search — no earnings figure, no corrected belief, no frame — beat every belief-targeting variant. It drew a 20.9 percent click-through against 13.1 to 16.7 percent for the messages that tried to say something. The 2018 replication showed the penalty attached to the belief-targeting content itself, not to the length of the message.

And the cleanest test of prospect theory we could design came out backwards: messages framed around loss did strictly worse than their gain-framed equivalents, 13.1 percent against 16.7 percent.

## Enrollment didn't

Then came the outcome that matters. We followed both cohorts in Colombia's higher-education enrollment records through 2019. Against a no-message control group of roughly 56,000 students, enrollment did not move: the design rules out average effects larger than 2.6 percentage points. The one response we do find is a re-sorting rather than an expansion. In the smaller 2018 cohort, one message arm moved about 2.8 percentage points of students toward short-cycle technical programs. It holds up after correcting for the many comparisons in the paper, but it is a single arm, and we read it as suggestive.

So the campaign had done exactly half its job. It had moved attention at national scale and at almost no marginal cost. It had not moved the decision.

## What a null result is for

It is tempting to read this as evidence that information doesn't matter. We read it differently. A generic message pointing at a general-purpose website asks the student to do the hard part themselves: find the page that applies to them, translate a national average into their own situation, and act. Attention is cheap to buy. The translation from information to decision is where the cost lies, and a pop-up doesn't pay it.

We had started building something that tries to pay it before the first pop-up ran. In 2017 the same team built a chatbot that works from a student's own scores and plans rather than sending everyone to the same page. ICFES did not authorize it that year. It launched in 2018 as IcfesBot, and that October the winning short pop-up from these experiments became its front door, shown to about 430,000 students. It has run with ICFES every year since.

The enrollment results came years later, and they are a large part of why we think that shape is right: guidance that carries into the student's own decision, not a generic invitation to search.

The experiments are written up in *Moving Attention but Not Enrollment*, a working paper prepared for the *Journal of Development Economics* with Eric Bettinger, Michael Kremer, Felipe Lizarazo, Christian Posso and Juan Saavedra. The full design, message catalog and results are on the [project page](/projects/icfes-nudge-to-search), and the story of what came next is on [IcfesBot's](/projects/icfesbot).
