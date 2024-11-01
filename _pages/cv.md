---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---
{% include base_path %}

Education
======
* Graduate Research Assistant - Ohio State University, Sep 2023 — Present
* M.S. in School of Data Science, Fudan University, 2023
* B.S. in West China School of Medicine, Sichuan University, 2021
  
Skills
======
* python, CUDA, C++, javascript, vue.js

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
