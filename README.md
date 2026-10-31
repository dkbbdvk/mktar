# CBSE Class 12 Economics Interactive Learning Platform
## Phase 1: Unit 2 – Money and Banking (मुद्रा और बैंकिंग)

A premium, interactive, concept-based, and CBSE Board-oriented educational web application built with **React 18 + TypeScript + Vite + Tailwind CSS**.

---

## 🌟 Features Implemented in Phase 1

### 1. 📖 NCERT Theory Master (संपूर्ण विषयवार व्याख्या)
- 9 comprehensive theory sections covering every NCERT concept from Barter System difficulties to RBI Monetary Policy.
- Bilingual terminology (Hindi + English technical terms).
- Definitions, conceptual logic, real-world examples, key facts, and CBSE exam alerts for every topic.

### 2. 🧮 Interactive Credit Creation Simulator (साख निर्माण प्रयोगशाला)
- Mathematically verified dynamic simulator for bank credit expansion.
- Inputs for **Initial Primary Deposit** and **Legal Reserve Ratio (LRR)** via sliders and presets.
- **Round-by-Round Expansion Ledger** with auto-play animation, step-by-step navigation, and live cumulative totals.
- **Comparison Mode**: Compare credit multipliers and deposit generation under different LRR values (e.g. 10% vs 20%).
- Visual proportional breakdown bar chart (Reserves vs Loans).

### 3. 🏦 Visual Banking System Architecture (बैंकिंग प्रणाली की दृश्य संरचना)
- Interactive hierarchical tree map from the Apex Central Bank (RBI) down to Scheduled Commercial Banks (Public, Private, RRBs, Foreign) and Cooperative Banks.
- Interactive node inspector displaying legal acts, role in credit, and CRR/SLR requirements.

### 4. 🔄 Animated Economic Flowcharts (इंटरएक्टिव फ्लोचार्ट्स)
- **Monetary Policy Transmission Mechanism**: Interactive toggle between *Inflation / Excess Demand* and *Deflation / Recession* showing the 5-stage ripple from RBI rate hikes to consumer demand and price stability.
- **Barter Dilemma vs Money Flow**: Animated comparison of the Double Coincidence of Wants friction vs frictionless monetary exchange.

### 5. 📐 Step-by-Step Numerical Solver & Money Supply Calculator
- Interactive **Money Supply Calculator** computing $M_1, M_2, M_3, M_4$ and High-Powered Money ($H = C + R$) with board sample presets.
- Step-by-step numerical solver showing formulas, symbols, mathematical steps, and final answers for Credit Multiplier and Monetary Base.

### 6. ⚖️ 8 Comparative Difference Tables (तुलनात्मक अंतर सारणियाँ)
- Money vs Wealth (मुद्रा और धन)
- Money vs Income (मुद्रा और आय - Stock vs Flow)
- Central Bank vs Commercial Bank (केंद्रीय बैंक और व्यावसायिक बैंक)
- Demand Deposits vs Time Deposits (मांग जमाएं और सावधि जमाएं)
- CRR vs SLR (नकद आरक्षित अनुपात और वैधानिक तरलता अनुपात)
- Repo Rate vs Reverse Repo Rate (रेपो दर और रिवर्स रेपो दर)
- Primary Deposit vs Derivative Deposit (प्राथमिक जमा और व्युत्पन्न जमा)
- Credit Creation vs Money Creation (साख निर्माण और उच्च-शक्ति मुद्रा)

### 7. 🎯 Practice & Board Exam Question Bank (अभ्यास व बोर्ड प्रश्न)
- **20 High-Yield MCQs** with category filters, instant feedback, explanations, and live score counter with celebratory confetti.
- **5 Assertion-Reason Questions** with comprehensive rationale.
- **2 Real-World Case Studies** (RBI MPC Rate Hike Cycle & UPI Digital Economy) with analytical follow-up questions.
- **CBSE Board Exam Questions** grouped by **1, 2, 3, 4, and 6 Marks** with revealable model answers, marking scheme breakdowns, and key keywords.

### 8. ⚡ Quick Revision Cheat-Sheet & Common Mistakes
- Policy tools transmission matrix (Repo, Reverse Repo, Bank Rate, CRR, SLR, OMO, Margin Requirement).
- Top 5 student misconceptions and examiner advice to avoid losing marks.

### 9. 📚 Bilingual Searchable Glossary (शब्दावली)
- 25+ essential Economics terms with instant search and category filtering (Money, Banking, RBI & Policy).

---

## 🏗️ Scalable Content Architecture (Future Chapters Ready)

The application is structured to allow seamless addition of future chapters without rewriting components:
- `src/types/chapter.ts`: Generic data schema for sections, formulas, differences, and board questions.
- `src/content/chapterRegistry.ts`: Central chapter registry where future chapters (National Income, Government Budget, BoP) simply plug in!
- Reusable UI Modules: All visualizers, calculators, quiz runners, and difference tables accept data via props.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build & Preview
```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```
