---
title: "China high-speed rail regression model"
date: 2026-04-16T13:03:08+07:00
slug: /china-hsr-regression-model/
description: Using a Spatial Error model to predict distance to nearest high-speed rail line using regular railway infrastructure and population density
image: images/china-rail1.png
categories:
  - data science
tags:
  - asia
  - maps
draft: true
---

As part of my Spatial Data Analytics coursework, I chose to investigate whether population density and proximity to existing regular railway lines could predict how close a location in China is to a high speed rail line. Using a 30km grid square dataset covering mainland China in 2019 (this was the most recent year where I could get a complete railway infrastructure dataset), I developed a regression model that was respecified from OLS to a spatial error model to account for the inherently spatial nature of transport infrastructure.

The results show that both population density and regular railway proximity are significant predictors of HSR accessibility where denser areas tend to be closer to HSR, and locations already served by regular rail are more likely to have HSR nearby. This suggests that China's HSR network was built through already well connected, populous corridors rather than opening up new remote areas.

The top image is an extract showing the spatial autocorrelation of the residuals from the OLS model, which was fixed by changing to a Spatial error model.

![image](/images/distance-hsr-2019.jpg)
![image](/images/pop-2019.jpg)
![image](/images/china-rail2.png)
![image](/images/china-rail3.png)

Sources: [https://www.hoover.org/sites/default/files/research/docs/25104-Davis-Qian-Zeng-2.pdf](https://www.hoover.org/sites/default/files/research/docs/25104-Davis-Qian-Zeng-2.pdf)
[https://hub.worldpop.org/geodata/summary?id=44833](https://hub.worldpop.org/geodata/summary?id=44833)
