---
title: "We Nudged Half a Million Students to Search. It Didn't Change Where They Enrolled."
subtitle: "Two nationwide experiments on Colombia's exam-results platform moved attention, not decisions — and the null result is what pointed us toward IcfesBot."
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

In 2017, half a million Colombian students logged in to see their Saber 11 results — the national exam that stands between the end of high school and everything after it. Most of them saw something new on the page: a pop-up inviting them to look at a portal that ICFES had built with the Banco de la República and ConsiliumBots, with detailed information on earnings and employment by major and institution. The portal had been there for a while. Fewer than 5 percent of students had ever opened it.

We were testing a simple, expensive-to-get-wrong proposition: that if you put the right information in front of a student at the right moment, it changes what they do next.

## What we built, and what we tested

The setting was unusually clean. Every Colombian student who wants to go to university takes the same exam and collects the results from the same platform, so the platform is a universal touchpoint — the one moment when the entire cohort is looking at the same screen, thinking about the same decision.

We ran two nationwide randomized experiments across that touchpoint, reaching 519,355 students in total. The first round, in 2017, tested nine different messages. Each embodied a different theory about which belief stands between a student and a search: some told students how much more graduates earn; some corrected common misperceptions about cost or financial aid; some were framed around what a student stood to gain, others around what they stood to lose. One was simply a plain invitation to look. A second experiment in May 2018 — 16,861 students from the spring cohort, a different population — replicated the design with five messages whose character counts were equalized, so that message length could not explain the differences.

Every pop-up link carried a per-student identifier, which meant that a click was the outcome we could measure directly, and enrollment the outcome we could measure later.

## Attention moved

The pop-ups worked, in the narrow sense. Across the treated students, 15.2 percent clicked through in 2017 and 24.6 percent in 2018, against a baseline of under 5 percent. For a public information campaign, those are not small numbers.

But the ranking of messages defied our expectations. The plain invitation to search — no earnings figure, no corrected belief, no frame — beat every belief-targeting variant. It drew a 20.9 percent click-through against 13.1 to 16.7 percent for the messages that tried to say something. The 2018 replication showed the penalty attached to the belief-targeting content itself, not to the length of the message.

And the cleanest test of prospect theory we could design came out backwards: messages framed around loss did strictly worse than their gain-framed equivalents, 13.1 percent against 16.7 percent.

## Enrollment didn't

Then came the outcome that matters. Against a no-message control group of roughly 56,000 students, enrollment over the following three years did not move. The design was powerful enough to rule out average effects larger than 2.6 percentage points, and it found none. The only hint of movement — and it is no more than a hint — was a re-sorting rather than an increase: a slight shift toward short-cycle technical programs among students who had been nudged.

So the campaign had done exactly half its job. It had moved attention at national scale and at almost no marginal cost. It had not moved the decision.

## What a null result is for

It is tempting to read this as evidence that information doesn't matter. We read it differently. A generic message pointing at a general-purpose website asks the student to do the hard part themselves: find the page that applies to them, translate a national average into their own situation, and act. Attention is cheap to buy. The translation from information to decision is where the cost lies, and a pop-up doesn't pay it.

That is the direction the nulls pointed, and it is the direction we went. The following year we launched IcfesBot with ICFES: a conversational service, delivered over WhatsApp, that starts from a student's own exam results rather than inviting everyone to the same page, and carries the guidance into the decision instead of stopping at the door. It has run nationwide since 2018.

The experiments are written up in *Moving Attention but Not Enrollment*, a working paper prepared for the *Journal of Development Economics* with Eric Bettinger, Michael Kremer, Felipe Lizarazo, Christian Posso and Juan Saavedra. The full design, message catalog and results are on the [project page](/projects/icfes-nudge-to-search), and the story of what came next is on [IcfesBot's](/projects/icfesbot).
