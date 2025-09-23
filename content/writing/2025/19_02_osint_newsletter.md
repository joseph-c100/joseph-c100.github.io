---
title: "Introduction to OSINT"
date: 2025-06-26T13:03:07+07:00
slug: /osint-newsletter/
description: Extract from The Economist's Off the Charts newsletter
categories:
  - writing
tags:
  - writing
  - osint
draft: true
---

_This is an extract from my writing for The Economist's Off the Charts newsletter. I wrote briefly about OSINT and how we have used it in our data journalism and interactive projects._

_Newsletter below:_

I remember when I first heard of OSINT. It was the winter of 2019 and I was attending a lecture delivered by Forensic Architecture, a research outfit that utilises architectural tools and software development as well as legal, scientific and journalistic expertise for digital investigations. What they were showing looked to me like a completely new way of conducting investigative journalism.

OSINT is a catch-all term for investigative techniques that rely on open-source data. Social-media posts, satellite images, flight data and much else can be found freely on the internet and journalists can glean valuable information from them. Since Russia’s full-scale invasion of Ukraine in February 2022, OSINT techniques have gained more prominence. Although it is not the first war to be broadcast via smartphones and social media, it has been amplified by them. This has made a vast array of data available to news outlets wanting to monitor and report on the war. And it is not just those on the sidelines taking advantage: both sides in the conflict have used open-source intelligence to try to gain the upper hand on the battlefield.

One way to track what is happening on the ground is to look from above. Satellite images have delivered essential insights for our Ukraine fires tracker, Gaza war tracker and our reporting on a siege in Sudan. To cover Gaza we used satellite images from a synthetic-aperture radar (SAR), which emits microwaves and measures how they reflect off the Earth’s surface to map the landscape. The SAR data are collected by Sentinel-1, a satellite which flies over Gaza three times every 12 days. By comparing images from before and after the war we could detect changes in the shapes of buildings likely to be damage caused by the war. This allowed us to quantify how much of the region had been affected and how many homes had been lost.

Even without such granular analysis, satellite images can offer valuable insights. Simply comparing photographs from different dates can often give us useful information. Before Russia invaded Ukraine we reported on the military build-up along Ukraine’s border. The satellite images clearly revealed an increase in the number of vehicles and structures over a short period of time. If you want to try this yourself you can use Google Earth’s historical imagery feature.

Social-media platforms can be another trove of data. To harness them, we usually “scrape” posts that contain certain keywords or come from a specific username. Often there are technical challenges—platforms sometimes try to block scraping attempts—but there are plenty of publicly available coding packages that can help and many third parties offer useful APIs (Bellingcat, an investigative outfit, has a good list). We recently used social-media posts to analyse how Elon Musk has changed over the last decade. We found that he posts far more often than he used to, specifically about topics such as immigration and free speech—a big shift from his previous interests: climate change and space exploration.

Videos can provide great intel, too. For example, we analysed footage shared on Telegram, a messaging app, of a Russian aircraft as it was shot down. But geolocating video can be tricky. If the video has metadata, you’re in luck—they could contain a location or the time and date it was filmed. If not, you can try to pause at a frame that shows the widest angle to help pinpoint notable features in the area. If the video shows a missile or bomb the Open Source Munitions Portal is useful for cross-referencing which army or military group they might belong to.
