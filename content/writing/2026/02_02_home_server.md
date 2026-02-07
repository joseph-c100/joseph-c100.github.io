---
title: "Setting up a home server"
date: 2026-02-06T13:03:07+07:00
slug: /setting-up-a-home-server/
description:
image: images/blog-img-7.jpeg
categories:
  - writing
tags:
  - writing
draft: false
---

Over the weekend I turned an old Dell Optiplex 5050 into a home server running Linux Mint. I set up Docker containers for PostGIS and PGAdmin to host and explore large geospatial datasets without eating up laptop storage. 

I configured it with Tailscale for remote access from anywhere, and when I SSH in, it displays a custom banner (I named the server 'Odell' after the Dell hardware).

![image](/images/blog-img-6.png)

I'm still thinking about what other uses I can get from it other than a simple file server or VPN but what I did do is set up a BOINC client to run in the background as I like the idea of using the hardware, as old and low powered as it is, to contribute to scientific projects. If you haven't heard about it have a look [here](https://boinc.berkeley.edu/).  

