# DsAlgo Portal — Playwright Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JIRA](https://img.shields.io/badge/JIRA-0052CC?style=for-the-badge&logo=jira&logoColor=white)

> **NumpyNinja RISE SDET Program** | Sprint 1–3 | 209 Test Cases | 95.69% Pass Rate

---

## 📋 Project Overview

This repository contains a full end-to-end test automation framework built for the **DsAlgo Portal** — a web-based platform for practicing data structures and algorithms through Python coding challenges, tutorials, and interactive exercises.

**Application Under Test:** [dsportalapp.herokuapp.com](https://dsportalapp.herokuapp.com)

Built as a collaborative team project during the NumpyNinja RISE SDET Program, this framework was developed across 3 sprints using Agile methodology.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| Playwright | Browser automation and test execution |
| Cucumber BDD | Behavior-driven development, Gherkin scenarios |
| JavaScript | Core language |
| Page Object Model (POM) | Framework architecture |
| Allure / Extent Reports | Test reporting |
| GitHub / Jenkins | Version control and CI/CD |
| JIRA | Task and defect tracking |

---

## 📁 Framework Structure

```
project-root/
│
├── features/               # Gherkin feature files (.feature)
│   ├── login.feature
│   ├── array.feature
│   ├── graph.feature
│   └── ...
│
├── step_definitions/       # Step definition files
│   ├── login.steps.js
│   ├── array.steps.js
│   ├── graph.steps.js
│   └── ...
│
├── pages/                  # Page Object Model classes
│   ├── loginpage.js
│   ├── arraypage.js
│   ├── graphpage.js
│   └── ...
│
├── test-data/              # Data-driven test inputs (JSON)
│   ├── arrayData.json
│   └── tryEditorData.json
│
├── hooks.js                # Before/After hooks, screenshots on failure
├── cucumber.js             # Cucumber configuration
└── reports/                # Allure and Extent report output
```

---

## ✅ Modules Tested

| Module | Status |
|--------|--------|
| Login | ✅ Complete |
| Array | ✅ Complete |
| Graph | ✅ Complete |
| Linked List | ✅ Complete |
| Stack | ✅ Complete |
| Queue | ✅ Complete |
| Tree | ✅ Complete |
| Data Structures Introduction | ✅ Complete |

---

## 📊 Test Results

| Metric | Result |
|--------|--------|
| Total Test Cases | 209 |
| Pass Rate | 95.69% |
| Browsers | Chromium, Firefox, Safari |
| Testing Type | Cross-browser + Parallel |

---

## 🚀 Sprint Journey

**Sprint 1 — Setup & Planning**
- Git repository created, Jenkins linked
- Exploratory testing conducted on AUT
- JIRA project configured, tasks assigned per module
- Gherkin scenarios written for all modules

**Sprint 2 — Framework & Skeleton**
- Base framework and POM structure created
- Each team member worked on their own branch
- Feature files and skeleton step definitions pushed and merged to main

**Sprint 3 — Full Implementation**
- POM completed across all modules
- Data-driven testing implemented using JSON files
- Cross-browser and parallel testing configured
- Defects logged with steps and screenshots in JIRA
- Allure and Extent reports generated

---

## ⚡ Key Challenges Solved

**CodeMirror / Try Editor Input**
Standard `.fill()` didn't work on the CodeMirror editor. Resolved using JavaScript keyboard events to simulate code entry.

**Strict Mode Locator Violations**
Playwright requires unique locators — ambiguous selectors caused failures. Resolved by refining locators using parent context chaining and `nth()` selectors.

**Step Definition Conflicts**
Step definitions from different modules clashed when merged to main. Resolved by namespacing steps and prefixing module-specific steps (e.g. "Array user...").

**Cross-Browser & Parallel Testing**
Timing differences across browsers required wait strategy adjustments. Parallel config tuned for stable, consistent results.

---

## 👥 Team

Built collaboratively as part of the NumpyNinja RISE SDET Program team project.

---

## 🎓 About This Project

This project was completed as part of the **NumpyNinja RISE SDET Program** — a hands-on test automation training program focused on Playwright, Cucumber BDD, and JavaScript. The goal was to build a production-style automation framework from scratch as a team, following real Agile practices including sprint planning, JIRA tracking, code reviews, and collaborative merging via GitHub.

---

Fatima Alfred | [linkedin.com/in/fatima-alfred](https://linkedin.com/in/fatima-alfred)
