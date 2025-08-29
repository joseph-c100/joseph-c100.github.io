---
title: "US immigration detention footprints"
date: 2025-07-04T09:27:00+07:00
slug: /us-detention-building-footprints/
description: Extracting the shapes of US immigration detention centres, facilities and camps
image: images/us_detention3.png
categories:
  - writing
tags:
  - writing
  - design
  - united states
draft: false
---

Early explorations of extracting building footprints of known immigration detention sites, processing centres, facilities and camps from a US prison boundaries dataset.

I used data from the Global Detention Project to filter the US prison boundaries dataset to only include prisons that are known to be used for immigration detention.

To do this I created a script that used fuzzy search to find a match between the names of the prisons and the town/state they were located with a probability threshold of 80% as many of the names were not exact matches (e.g. using 'facility' instead of 'center' etc.). This process was not perfect and required manual verification to check the accuracy of the matches.

![image](/images/us_detention1.png)
![image](/images/us_detention2.png)
![image](/images/us_detention_video.gif)
