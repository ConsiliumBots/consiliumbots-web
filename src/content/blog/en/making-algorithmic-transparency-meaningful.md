---
title: "She Thought She Had an 80% Chance. She Had 20%."
subtitle: "Chile publishes its school admissions algorithm in full. A decade of evidence says that isn't enough — and that the shortfall lands hardest on the families the system was built to help."
description: "Chile publishes its school admissions algorithm in full — and families still get their own odds badly wrong. What a decade of evidence says about the limits of algorithmic transparency, and the standard that should replace it."
pubDate: 2026-08-16
lang: en
authors:
  - Christopher A. Neilson
  - Exequiel Medina
  - Leonardo Ortiz Mesías
heroImage: /images/blog/transparency2/hero.png
ogImage: /images/blog/transparency2/og.png
tags:
  - Algorithmic transparency
  - School choice
  - Chile
paperUrl: https://consiliumbots.github.io/working-papers-cb/algorithmic_transparency/working_paper/algorithmic_transparency.pdf
paperLabel: Download the working paper (PDF)
---

It is August in Santiago, and a mother is finishing the form that decides where her son goes to school next year. She has listed five schools. She feels reasonably good about it — asked to put a number on her chances, she'd say about eight in ten.

Run the published algorithm on the list she just submitted and her real chance of getting **none** of those five is about eight in ten.

Nobody tells her. The window closes. In March her son starts at a school she never listed.

That family is a composite. The arithmetic is not. Across four admissions cycles and roughly 140,000 surveyed families, among applicants the platform can identify *in advance* as high-risk, the median family put their risk of going unassigned at around 20 percent when it was actually around 80 percent — a gap of 49 to 62 points, in every single cycle.

<figure>
  <img src="/images/blog/transparency2/believed-vs-actual.png" alt="Dumbbell chart comparing what the median high-risk family believes their risk of going unassigned to be — 19 to 30 percent — against their actual simulated risk of 78 to 82 percent, for each admissions cycle from 2020 to 2023." />
  <figcaption>Among applicants the system can flag in advance as high-risk, believed risk sits roughly 60 points below the truth — in every cycle.</figcaption>
</figure>

## The uncomfortable part is where this happened

This is not a story about a government that hid its algorithm.

Chile's Sistema de Admisión Escolar places about 470,000 children a year. The algorithm is published. The application data is published. There is a public simulator, a school guide, explainer videos, help desks. The mechanism is strategy-proof — you cannot improve your odds by misrepresenting your preferences — and there is no limit on how many schools you may list.

If publishing a public algorithm is supposed to make it comprehensible to the people it governs, this is the best case available anywhere. Most systems are far below it. Denmark's reformed gymnasium admissions publish the cutoff at which each school stopped admitting students — real information, released *after* the cycle closes, useless to a family deciding where to apply.

So the finding isn't "Chile did transparency badly." It's that Chile did it about as well as it can currently be done, and the comprehension gap survived anyway.

## Awareness is not understanding

Probabilities are hard, so we also looked at something that isn't.

Chile's family-application rule lets siblings be considered together under a shared priority. No forecasting required — you either know what it does or you don't. Between the 2023–24 and 2024–25 parent surveys, among parents with a university degree or higher, the share who said they understood the rule went from **36.8% to 60.4%**. The information campaigns worked.

The share who could correctly identify what the rule actually does went from **2.3% to 4.9%**.

<figure>
  <img src="/images/blog/transparency2/declared-vs-verified.png" alt="Slope chart showing declared familiarity with the family-application rule rising from 36.8 percent to 60.4 percent between cycles, while verifiable comprehension rises only from 2.3 percent to 4.9 percent — a 55.5 point gap." />
  <figcaption>Declared familiarity nearly doubled in a single year. Verified comprehension barely moved.</figcaption>
</figure>

Of the parents who declared they understood it, 6 to 8 percent actually did. For every 100 who said they knew, between 92 and 94 didn't.

Two lines moving apart: more people believing they understand the system, almost nobody newly understanding it. That divergence is the signature of publication-centered transparency hitting its ceiling.

## The gap is not evenly distributed

At the *same* true risk, lower-income families are more wrong.

Among the highest-risk applicants, those whose mothers didn't finish high school understated their risk by an average of 68 percentage points; those whose mothers had tertiary education, by 54. Two independent measures of socioeconomic status show the same thing, and the gradient is statistically stable across all four cycles. It does not close on its own.

Now hold that against what the SAE was built for. It replaced a regime where schools selected students on academic merit and family background. It gives lower-income applicants explicit priority through reserved seats and a tie-breaker boost. And it delivers: those families face materially lower objective risk, in every cycle.

The mechanism is progressive. The information layer wrapped around it is not.

<figure>
  <img src="/images/blog/transparency2/equity-inversion.png" alt="Two-panel chart. Left: the priority structure lowers objective risk for lower-income applicants by 6 to 12 percentage points in every cycle. Right: at the same true risk, those same applicants understate their risk by 5.1 to 14 percentage points more than better-off applicants, across two independent measures of socioeconomic status." />
  <figcaption>The priority structure lowers true risk for lower-income applicants. The information layer makes those same families more wrong about it.</figcaption>
</figure>

> The equity built into the algorithm stops at the interface.

Publication asks every family to translate public documents into knowledge about their own case, and the capacity to do that translation is distributed by education, time, and familiarity with bureaucracy.

## Three explanations that don't survive the data

**Give it time.** The conditional gap is statistically flat across four annual cycles.

**The motivated will find out.** Verified comprehension is near the floor in the *most* educated group, and the miscalibrated high-risk families are precisely those with the strongest incentive to find out.

**Write a better FAQ.** Chile already runs an unusually well-resourced information effort. The gap persists through it.

What's left is structural: the paradigm requires users to convert available information into operative knowledge on their own initiative, and that conversion is a cost some families can pay and others can't. Equal nominal access, unequal effective uptake.

## We already know what closes it

In a randomized experiment published in the *Quarterly Journal of Economics*, families who already had the simulator and all the published documentation were given one thing more: tailored, real-time feedback on **their own** assignment risk, while they were still building their list. They added options, their risk fell, and the schools they enrolled in were better. Follow-up work shows the effect runs specifically through correcting false beliefs, not through general encouragement — and when the same design ran in Peru and Ecuador, the underlying frictions looked remarkably similar.

The fix is tested. It runs on infrastructure these systems already have: the platform families log into, the notification system, the data pipeline that already knows their list.

## Information is the last resort, not the first

Before reaching for better information, it's worth asking whether the user needed to make the decision at all. There's a hierarchy here, and most systems start at the wrong end of it.

<figure>
  <img src="/images/blog/transparency2/burden-ladder.png" alt="A four-rung ladder ordered by how much comprehension each approach demands of the user: eliminate the decision, make the decision belief-independent, deliver the belief, and publish the rules and hope." />
  <figcaption>Ranked by how much each approach demands of the user. MAT sits at rung three; most systems operate at rung four.</figcaption>
</figure>

Chile's family-application rule is the case in point. It is **opt-in** — and fewer than one in ten parents who claim to understand it actually do. But the system already knows which applicants are siblings. The priority could be applied automatically, with an opt-out, and require no comprehension from anyone. That is a rung-one problem being managed as a rung-four problem.

The general lesson for anyone designing these systems: **every opt-in feature is a comprehension tax, and you should be able to justify why you're levying it.** Strategy-proofness — rung two — is a genuine achievement, but it only makes the *ranking* safe to get wrong. Which schools to include, and how many, still depends entirely on what a family believes about their odds. That residual is where the damage happens.

## Transparency 2.0

Today's standard asks: *can someone audit this algorithm?*

The next one has to ask: *can this family anticipate what the algorithm will do with their application?*

We call it Meaningful Algorithmic Transparency. Information delivered to affected users must be **proactive** (actively delivered, not merely posted where they're expected to look), **tailored** (about their case, their list, their risk), and **actionable** (arriving before the window closes, in a form they can act on).

And the compliance test changes with it. Today you comply by *having the documents*. Under this standard you comply by showing **measured evidence that users understand** — with the distance between declared and verified comprehension as a published indicator and a duty to act when it's large or unequal.

To be clear about what this isn't: it doesn't replace publishing your algorithm, it assumes it. And it isn't a better FAQ or a nicer simulator. Those are improvements inside the old paradigm.

## What you can do in your own system this cycle

The measurement that produced these findings is cheap and portable. If you operate an allocation system:

1. **Ask two questions instead of one.** Add a verification item next to every "do you understand rule X?" question — a short scenario with one correct answer. The distance between the two is your indicator. You can field it in the survey you already run.
2. **Compare beliefs against truth.** If you publish your algorithm, you can re-run it on submitted applications and recover each applicant's real odds. Anyone who has both can measure miscalibration directly.
3. **Break it out by the group your priorities are meant to help.** If your design targets disadvantaged applicants, they are the ones whose comprehension you need to check — and, on this evidence, the ones most likely to be furthest off.

Most countries already have the legal materials for this too: an access-to-information regime, an emerging data-protection framework, sector-specific regulation. What's usually missing is their deliberate articulation around user comprehension as the objective. Our paper sets out six operational components and shows how Chile's existing law could carry them without new legislation.

## Why this is a choice

Even at the regulatory frontier, the EU AI Act classifies systems determining access to education as high-risk but gives the affected person mainly a right to an explanation *after* an adverse decision — reactive, ex post, too late to change anything.

When a comprehension shortfall is measurable, concentrated on the families a system was explicitly designed to help, and fixable by a method already demonstrated in randomized evidence and feasible on infrastructure that already exists, staying at publication-only transparency is no longer a neutral technical default.

It's a distributive choice.

---

*Disclosure: the empirical analysis uses SAE survey microdata held by Chile's Ministry of Education. ConsiliumBots implemented the SAE assignment algorithm under a publicly procured contract from 2021 to 2024. The analysis and interpretations are the authors' own.*
