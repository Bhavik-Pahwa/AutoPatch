# AUTOPATCH

## Product Requirements Document

### Interactive Frontend Prototype — v1.0

---

# 1. PRODUCT OVERVIEW

## 1.1 Product Name

**AutoPatch**

**Tagline:** Automations break. AutoPatch heals.

**Supporting tagline:** From intelligent discovery to resilient execution.

## 1.2 Product Vision

AutoPatch is a proposed AI-powered browser automation reliability platform designed to address the fragility of traditional browser automation.

Traditional browser automations often break when websites change their layouts, DOM structures, navigation flows, or interactive elements.

AutoPatch proposes a self-healing lifecycle in which:

1. A TinyFish-powered browser agent discovers how to complete a user-defined task.
2. A proposed workflow compiler converts the discovered workflow into reusable Playwright automation.
3. Subsequent executions use the stored Playwright automation.
4. Failed executions trigger a failure analysis process.
5. A TinyFish browser agent attempts to rediscover the affected workflow.
6. A candidate repair is generated and validated.
7. Successful repairs update the stored automation.

The central differentiator is not the initial generation of an automation.

**It is the proposed continuous detection, diagnosis, recovery, validation, and reuse of automation workflows.**

## 1.3 Prototype Objective

Create an interactive React.js application that demonstrates the envisioned AutoPatch user experience.

The prototype should make it possible for judges, developers, and potential users to understand:

- How users create browser automations.
- How TinyFish participates in workflow discovery.
- How automations transition into reusable Playwright workflows.
- What happens when an automation fails.
- How AutoPatch identifies the affected step.
- How an AI-assisted repair might be generated.
- How repair validation and deployment would be presented.
- How users inspect workflow histories and monitor automation health.

The frontend should feel like a complete developer product.

However, the demonstration must explicitly disclose that the underlying automation, compilation, and self-healing systems are not operational in this prototype.

## 1.4 Scope and Constraints

| Component                        | Prototype status    |
| -------------------------------- | ------------------- |
| React frontend                   | Implemented         |
| Dashboard navigation             | Implemented         |
| Workflow creation UI             | Implemented         |
| Interactive workflow graph       | Implemented         |
| Failure visualization            | Implemented         |
| Simulated self-healing lifecycle | Implemented         |
| Execution timeline               | Implemented         |
| Workflow version history UI      | Implemented         |
| TinyFish API integration         | Not implemented     |
| Live browser execution           | Not implemented     |
| Workflow-to-Playwright compiler  | Research / proposed |
| Production Playwright execution  | Not implemented     |
| AI failure diagnosis             | Simulated           |
| AI-assisted repair generation    | Simulated           |
| Real repair validation           | Not implemented     |
| Database / backend               | Not implemented     |
| Authentication                   | Not implemented     |

**Non-negotiable:** Never represent simulated system behavior as successfully implemented backend functionality.

---

# 2. TARGET USERS

## 2.1 Primary Audience

### Developers and QA Engineers

Developers who maintain Playwright-based browser automations and frequently deal with broken selectors, navigation changes, and modified page structures.

### Automation Engineers

Engineers building recurring browser workflows involving multiple websites, forms, dashboards, or data-extraction processes.

### AI Automation Teams

Teams experimenting with browser agents but looking for more predictable repeat execution and recovery mechanisms.

## 2.2 Secondary Audience

### Hackathon Judges

Judges who need to understand AutoPatch's value proposition quickly, without reading extensive technical documentation.

The interface must communicate the central concept within approximately 30 seconds of exploration.

### Technical Evaluators

Evaluators interested in understanding how agentic discovery, deterministic automation, and self-healing could interact.

## 2.3 Primary Use Case

A developer creates an automation to extract product information from an e-commerce website.

During a later execution, the website changes its markup, causing the stored Playwright workflow to fail.

AutoPatch detects the failure, initiates a proposed AI-assisted recovery procedure, generates a candidate repair, and validates the result before accepting the updated workflow.

The prototype demonstrates this entire process through a controlled simulation.

---

# 3. PRODUCT EXPERIENCE STRATEGY

## 3.1 Main Product Story

The experience should communicate three stages:

**DISCOVER → EXECUTE → HEAL**

### Discover

TinyFish explores a website and discovers how to complete a requested browser task.

### Execute

The envisioned system converts the discovered process into a reusable Playwright workflow for subsequent executions.

### Heal

When a stored workflow fails, AutoPatch attempts to diagnose and repair the broken automation.

The Heal stage is the central feature of the product.

## 3.2 Experience Priorities

| Priority | Experience                               |
| -------- | ---------------------------------------- |
| P0       | Interactive self-healing visualization   |
| P0       | Workflow detail and execution graph      |
| P0       | Failure inspection and repair comparison |
| P0       | Clear prototype disclosures              |
| P1       | Automation creation interface            |
| P1       | Dashboard with simulated system activity |
| P1       | Execution history                        |
| P1       | Workflow version comparison              |
| P2       | Settings and architecture explanation    |
| P2       | Additional animations and visual polish  |

Avoid creating numerous shallow, generic dashboard pages.

Every significant page must support the core product narrative.

---

# 4. INFORMATION ARCHITECTURE

Build the application around the following routes.

| Route            | Page                | Purpose                                    |
| ---------------- | ------------------- | ------------------------------------------ |
| `/`              | Product Overview    | Introduce AutoPatch and launch the demo    |
| `/dashboard`     | Mission Control     | Automation health overview                 |
| `/workflows`     | Workflow Registry   | Manage simulated workflows                 |
| `/workflows/:id` | Workflow Inspector  | Inspect workflow execution graphs          |
| `/workflows/new` | Workflow Studio     | Create a simulated automation              |
| `/healing`       | Healing Center      | Monitor and replay simulated recovery      |
| `/healing/:id`   | Repair Inspector    | Inspect a particular repair                |
| `/executions`    | Execution History   | Browse simulated execution records         |
| `/architecture`  | System Architecture | Explain proposed and unresolved components |

The primary navigation should use a persistent sidebar.

### Sidebar Structure

**AUTOPATCH**

Mission Control
Workflows
Healing Center
Executions
Architecture

At the bottom:

Prototype Status
About AutoPatch

Use contextual navigation instead of creating unrelated dashboards.

---

# 5. VISUAL DESIGN SYSTEM

## 5.1 Art Direction

The application should look like a futuristic automation operations console.

Visual inspiration:

- Developer infrastructure tools.
- Agentic AI platforms.
- Technical observability dashboards.
- Security operations consoles.
- Modern workflow orchestration interfaces.

Avoid generic SaaS styling.

The application should feel technical and sophisticated without becoming visually chaotic.

### Design Keywords

**Cyber-industrial. Electric. Dimensional. Precise. High-contrast. Operational.**

The design should communicate motion, complexity, and intelligence.

Do not interpret clean design as empty design.

We want substantial information density, layered panels, detailed workflow graphs, and rich interactions.

## 5.2 Color Palette

Use a dark-first theme.

| Token            | Hex       | Usage                         |
| ---------------- | --------- | ----------------------------- |
| Background       | `#080B12` | Main application background   |
| Surface          | `#101622` | Primary panels                |
| Elevated Surface | `#171F2E` | Floating panels and cards     |
| Border           | `#293245` | Dividers and card outlines    |
| Primary          | `#8B5CF6` | Primary actions               |
| Accent           | `#22D3EE` | Data flow and active elements |
| Success          | `#34D399` | Healthy workflow states       |
| Warning          | `#FBBF24` | Pending validation            |
| Danger           | `#FB7185` | Failed executions             |
| Primary Text     | `#F1F5F9` | Main content                  |
| Muted Text       | `#94A3B8` | Secondary information         |

Use purple and cyan as the signature brand colors.

Do not use every accent color on every page.

Reserve semantic colors for meaningful workflow states.

## 5.3 Typography

Recommended fonts:

**Primary UI:** Inter or Geist

**Headings:** Space Grotesk

**Technical details:** JetBrains Mono

Typography requirements:

- Large, high-impact page headings.
- Clear hierarchy between primary and secondary information.
- Monospaced execution IDs, timestamps, selectors, and workflow events.
- Compact but readable dashboard labels.
- Large numerical displays for important metrics.

## 5.4 Interface Styling

Use:

- Large dashboard panels.
- Rounded cards with subtle borders.
- Layered surface backgrounds.
- Carefully controlled gradient accents.
- Subtle noise or grid textures.
- Thin glowing graph connections.
- Animated status indicators.
- Contextual tooltips.
- Command-palette-inspired search.
- Expandable technical detail panels.
- Data visualization.
- Meaningful microinteractions.

Avoid:

- Excessive glassmorphism.
- Decorative animations without meaning.
- Giant empty cards.
- Random glowing borders.
- Cartoonish AI graphics.
- Excessive landing-page illustrations.
- Unreadable low-contrast text.

## 5.5 Motion System

Use Framer Motion / Motion for React for interface transitions.

Recommended behavior:

| Interaction          | Animation                           |
| -------------------- | ----------------------------------- |
| Page navigation      | Subtle fade and slide               |
| Sidebar selection    | Animated active indicator           |
| Workflow execution   | Traveling signal across graph edges |
| Failure detection    | Node changes to danger state        |
| AI recovery          | Pulsing cyan recovery state         |
| Repair completion    | Success transition                  |
| Graph node selection | Smooth focus and detail expansion   |
| Modal opening        | Short scale and fade                |
| Metric updates       | Numerical transition                |

Animations should support the user's understanding of system state.

Do not animate dashboard elements continuously without a reason.

Respect reduced-motion preferences.

---

# 6. SCREEN SPECIFICATIONS

# SCREEN 01 — PRODUCT OVERVIEW

## Purpose

Introduce AutoPatch immediately and give visitors an obvious way to explore its central concept.

This should not be a conventional marketing landing page.

It should resemble the introductory console of a technical product.

## Hero Section

### Primary Heading

**Automations break. AutoPatch heals.**

### Supporting Copy

AutoPatch explores a proposed approach to resilient browser automation: AI-assisted workflow discovery, reusable Playwright execution, and intelligent recovery when websites change.

### Primary CTA

**Explore Interactive Demo**

Navigates to `/dashboard`.

### Secondary CTA

**See How Healing Works**

Navigates to `/healing`.

## Hero Visualization

Display a large animated workflow lifecycle:

TinyFish Discovery
↓
Workflow Compilation
↓
Playwright Execution
↓
Failure Detection
↓
AI-Assisted Repair
↓
Validation
↓
Updated Workflow

Use a horizontal or visually staggered node graph.

The healing loop should visibly connect back to execution.

Hovering over a node reveals a concise description.

Clicking the healing node opens the Healing Center.

## Prototype Disclosure

Display a clearly visible information banner near the hero:

**Interactive UX Prototype**

This experience demonstrates AutoPatch's proposed workflows using simulated data and interactions. Live TinyFish integration, workflow compilation, and autonomous repair are not implemented.

Include a link to the Architecture page.

This disclosure must not be hidden in the footer.

---

# SCREEN 02 — MISSION CONTROL

## Purpose

Provide an operational overview of the envisioned automation platform.

This is the central dashboard.

## Layout

Desktop layout:

- Persistent left sidebar.
- Compact top navigation bar.
- Primary dashboard content.
- Optional right-side activity panel.

## Header

**Mission Control**

Supporting text:

Your automation operations, at a glance.

Top-right controls:

- Demo Mode badge.
- Notification icon.
- New Workflow button.
- Placeholder profile avatar.

## Metrics

Display four primary KPI cards.

### Total Workflows

Example: `12`

### Healthy Workflows

Example: `9`

### Attention Required

Example: `2`

### Recovery Events

Example: `18`

All values must be marked as demo data.

Use small animated sparklines where appropriate.

## Main Panel — Automation Health

Display an interactive visualization of recent workflow states.

Recommended presentation:

A horizontally organized execution history showing:

- Successful runs.
- Failed runs.
- Recovery attempts.
- Repaired runs.

Allow the visitor to switch between 24H, 7D, and 30D.

Changes should update local demonstration data.

## Secondary Panel — Active Workflows

Display compact workflow cards with:

- Workflow name.
- Target website.
- Workflow type.
- Simulated status.
- Last execution.
- Version.
- Inspect button.

Example workflows:

1. Product Price Monitor
2. Job Listing Extractor
3. Invoice Download Automation
4. Product Availability Checker

Each workflow should have distinct realistic sample data.

## Activity Feed

Display simulated events such as:

09:42 — Product Price Monitor completed
09:47 — Job Listing Extractor encountered selector failure
09:48 — Recovery candidate generated
09:49 — Validation scenario completed
09:49 — Repair approved in demo

Label the activity feed:

**Simulated Activity**

## Featured Action

Include a prominent panel titled:

**See AutoPatch recover from a broken workflow.**

CTA:

**Launch Healing Simulation**

This navigates to the preconfigured healing scenario.

---

# SCREEN 03 — WORKFLOW REGISTRY

## Purpose

Allow users to browse and inspect automation workflows.

## Primary Components

### Workflow Table

Columns:

- Workflow Name
- Target
- Status
- Last Run
- Version
- Recovery History
- Actions

### Filters

Healthy
Failed
Recovery Required
All

### Search

Search by workflow name or target website.

Search must operate on local frontend data.

### Create Workflow

Button opens Workflow Studio.

### Workflow Row Interaction

Clicking a workflow opens its inspector.

### Context Menu

View Workflow
View Execution History
View Recovery Events

Do not include destructive features unless they have a functional local-state implementation.

---

# SCREEN 04 — WORKFLOW STUDIO

## Purpose

Demonstrate how a developer would describe an automation task and initiate AI-assisted workflow discovery.

This screen should emphasize natural-language automation creation.

## Main Layout

Two-column desktop layout.

### Left Panel — Workflow Configuration

Fields:

**Workflow Name**

Example:

Product Price Monitor

**Target Website**

Example:

https://example.com/products

**Task Description**

Example:

Visit the product catalog, locate the selected products, extract their displayed prices, and prepare a structured result.

**Execution Strategy**

Display:

AI-Assisted Discovery → Reusable Playwright Workflow

This option is informational in the prototype.

### Right Panel — Discovery Preview

Display a visual sequence:

1. Task submitted.
2. TinyFish discovery requested.
3. Browser interaction steps identified.
4. Workflow representation prepared.
5. Compiler stage.
6. Reusable Playwright artifact proposed.

## Primary CTA

**Simulate Workflow Discovery**

On click:

- Validate the form inputs.
- Display a simulation disclosure.
- Begin a predefined visual discovery sequence.
- Animate the progress timeline.
- Reveal an example workflow graph.
- Show a generated sample Playwright code preview.
- Allow the visitor to save the simulated workflow locally.

## Important Compiler Disclosure

The workflow compiler is an unresolved research and engineering component.

It must not be described as implemented.

Display:

**Compiler Concept — Not Implemented**

AutoPatch proposes translating discovered browser interactions into reusable Playwright automation. The compilation mechanism is currently under investigation. The generated workflow shown here is an illustrative example, not the output of a working compiler.

## Code Preview

Use a syntax-highlighted editor-style panel.

It may contain illustrative Playwright code.

The code must be clearly labeled:

**Illustrative Playwright Output**

Do not imply that TinyFish generated this code.

The demo should not create arbitrary executable code based on user input.

---

# SCREEN 05 — WORKFLOW INSPECTOR

## Purpose

Provide a detailed operational view of an individual automation.

This is one of the most important visual screens.

## Layout

Use a large interactive workflow canvas as the primary content area.

Recommended layout:

- Workflow information bar at top.
- Graph canvas in the center.
- Contextual inspector panel on the right.
- Execution timeline beneath the graph.

## Workflow Graph

Example flow:

START
↓
Navigate to Product Catalog
↓
Locate Product Grid
↓
Extract Product Data
↓
Normalize Results
↓
Complete

Each step should appear as an interactive node.

## Node States

Healthy — Green
Active — Cyan
Warning — Amber
Failed — Rose
Healing — Purple
Pending — Neutral

## Interaction Requirements

### Hover Node

Show:

- Step name.
- Step type.
- Simulated execution duration.
- Current state.

### Click Node

Open a detail inspector displaying:

- Step identifier.
- Step description.
- Example selector or action.
- Expected outcome.
- Simulated result.
- Associated execution logs.

### Pan and Zoom

Users can pan and zoom the graph.

### Fit View

Button automatically fits the entire workflow into the viewport.

### Run Simulation

Button begins a predefined workflow playback.

The graph should animate one node at a time.

An optional scenario selector controls whether the simulation succeeds or encounters a predefined failure.

## Failure Scenario

Example:

The automation expects a product grid under:

`.product-grid`

The mock execution reports that the expected element was not found.

The affected node changes to a failure state.

Display an actionable event:

**Selector Resolution Failed**

Expected element could not be located in the simulated browser state.

CTA:

**Inspect Failure**

Navigates to the corresponding Healing Center record.

---

# SCREEN 06 — HEALING CENTER

## Purpose

Showcase AutoPatch's main innovation.

This is the visual centerpiece of the prototype.

It should receive the most design and interaction effort.

## Primary Heading

**Self-Healing Engine**

Supporting text:

Explore how AutoPatch proposes to detect, diagnose, and recover from broken browser workflows.

## Featured Module

### Live-Style Healing Visualization

Show an interactive lifecycle graph:

EXECUTION
↓
FAILURE DETECTED
↓
FAILURE ANALYSIS
↓
TINYFISH REDISCOVERY
↓
REPAIR CANDIDATE
↓
VALIDATION
↓
WORKFLOW UPDATE
↓
EXECUTION RESUMES

Use a visually distinctive graph with animated connectors.

The recovery cycle should appear as a loop, not merely a linear list.

## Controls

**Play Simulation**

Starts the simulation.

**Pause**

Pauses the current animation.

**Reset**

Restores the initial state.

**Step Forward**

Advances to the next lifecycle stage.

**Playback Speed**

0.5× / 1× / 2×

**Scenario Selector**

- Selector Changed
- Navigation Flow Changed
- Element Relocated
- Validation Failed

## Required Simulation Stages

### Stage 1 — Workflow Execution

The stored Playwright workflow is represented as executing.

Animate the path through several successful workflow nodes.

Status:

EXECUTING

### Stage 2 — Failure Detected

A predefined browser interaction fails.

Visual changes:

- Affected node flashes briefly.
- Execution path stops.
- Failed node changes to rose.
- Failure event appears in the log panel.

Display:

**Workflow Interrupted**

Example failure:

Expected selector `.product-grid` was not found.

### Stage 3 — Failure Analysis

Show an animated diagnostics panel.

Display simulated observations:

- Failed step identified.
- Expected selector unavailable.
- Potential DOM structure change.
- Recovery required.

Use language such as:

**Simulated Diagnosis**

Do not claim that an AI model analyzed a real browser session.

### Stage 4 — TinyFish Rediscovery

Highlight the TinyFish agent node.

Animate a cyan recovery path.

Show a simulated event stream:

- Browser context prepared.
- Target page inspected.
- Alternative element candidate identified.
- Candidate interaction sequence prepared.

Every event must be labeled as simulated.

Explain that real TinyFish integration is planned.

### Stage 5 — Repair Candidate

Display a comparison of the previous workflow step and a proposed replacement.

Example:

Previous selector:

`.product-grid`

Candidate selector:

`[data-testid="catalog-grid"]`

Show the candidate as a hypothetical repair based on a predefined demo fixture.

No AI-generated repair is actually being performed.

### Stage 6 — Validation

Display a separate validation phase.

Possible states:

- Validation pending.
- Simulated validation succeeded.
- Simulated validation failed.

Validation must be represented as a required stage, not as an automatic guarantee of success.

For the main demonstration scenario, show a successful simulated result.

For an alternate scenario, show failed validation.

### Stage 7 — Workflow Updated

Show:

Previous Version: `v1.2`
Candidate Version: `v1.3`

Display a diff preview.

The example scenario updates the local workflow version after simulated validation.

### Stage 8 — Execution Resumes

Return to the workflow graph.

Highlight the repaired node.

Resume the predefined successful execution sequence.

Display:

**Simulation Complete**

The workflow resumed successfully in this scripted demonstration.

## Important UX Rule

Do not display:

"AI successfully repaired your automation."

Instead display:

"Simulated repair validated in the demo scenario."

The distinction matters.

---

# SCREEN 07 — REPAIR INSPECTOR

## Purpose

Allow technical evaluators to inspect what changed during a recovery scenario.

## Required Sections

### Failure Summary

Display:

- Workflow name.
- Failed step.
- Failure category.
- Simulated failure timestamp.
- Previous workflow version.
- Candidate version.

### Before / After Comparison

Side-by-side panels.

**Before**

Expected selector:

`.product-grid`

**After**

Candidate selector:

`[data-testid="catalog-grid"]`

Use clear addition and removal highlighting.

### Recovery Timeline

Failure Detected
↓
Diagnosis Prepared
↓
TinyFish Rediscovery Simulated
↓
Repair Candidate Created
↓
Validation Simulated
↓
Candidate Accepted

### Validation Evidence

Display a simulated validation checklist:

- Target element located.
- Expected content extracted.
- Output format checked.
- Workflow continuation completed.

All checks should explicitly indicate that they come from a scripted scenario.

### Version History

Show a compact version comparison:

v1.2 → v1.3

Include an expandable code diff.

## Core Message

AutoPatch's envisioned value is not merely that it finds another selector.

The proposed platform manages the entire recovery lifecycle, including failure detection, candidate generation, validation, and controlled workflow updates.

---

# SCREEN 08 — EXECUTION HISTORY

## Purpose

Demonstrate how users could audit workflow activity over time.

## Required Components

### Execution Table

Columns:

- Execution ID
- Workflow
- Started
- Duration
- Status
- Recovery Triggered
- Version

### Filtering

All
Successful
Failed
Recovered

### Execution Detail Drawer

Clicking a record opens a side panel containing:

- Execution timeline.
- Individual workflow steps.
- Example logs.
- Associated recovery event.
- Final simulated outcome.

### Visual Timeline

Represent each execution as a compact sequence of colored status segments.

A successful run should appear visually different from a failed or recovered run.

The goal is to make execution history understandable without requiring users to read raw logs.

---

# SCREEN 09 — SYSTEM ARCHITECTURE

## Purpose

Demonstrate architectural thinking while remaining transparent about the project's actual development status.

The interface should clearly separate the proposed system from the implemented frontend prototype.

## Proposed Architecture Diagram

USER OBJECTIVE
↓
TINYFISH WEB AGENT
↓
WORKFLOW DISCOVERY
↓
WORKFLOW COMPILER
↓
WORKFLOW STORAGE
↓
PLAYWRIGHT EXECUTION
↓
SUCCESS / FAILURE
↓
FAILURE ANALYZER
↓
TINYFISH REDISCOVERY
↓
CANDIDATE REPAIR
↓
VALIDATION
↓
WORKFLOW UPDATE
↓
NEXT EXECUTION

Use an interactive architecture canvas.

Clicking a component opens its description and maturity status.

## Component Statuses

| Component                           | Status               |
| ----------------------------------- | -------------------- |
| Frontend experience                 | Prototype            |
| Workflow graph visualization        | Frontend implemented |
| Simulation playback                 | Frontend implemented |
| TinyFish discovery integration      | Planned              |
| Workflow compiler                   | Unresolved           |
| Playwright execution infrastructure | Planned              |
| Failure analyzer                    | Proposed             |
| Agentic recovery                    | Proposed             |
| Repair validation                   | Proposed             |
| Workflow version management         | Proposed             |

## Research Challenges

### Discovery-to-Playwright Compilation

The proposed system requires a mechanism for converting observed browser interactions into reusable automation instructions.

The team is still investigating how to build this reliably.

### Reliable Failure Classification

Not every browser failure should trigger the same repair mechanism.

Production failure analysis would need to distinguish environmental issues, transient failures, authentication problems, selector failures, and workflow changes.

### Repair Validation

A replacement action must be verified against expected outcomes.

Finding an element is not sufficient evidence that the workflow is correct.

### Safe Workflow Updates

Production implementations would need controls to prevent unvalidated modifications from silently replacing stable automation.

### Operational Cost

Agent-assisted discovery and recovery introduce latency and external execution costs.

The proposed architecture aims to reserve agentic operations for discovery and exceptional recovery rather than every routine execution.

---

# 7. INTERACTIVE DEMONSTRATION SCENARIOS

Implement predefined frontend simulation scenarios.

## Scenario A — Successful Execution

A healthy automation completes every step.

**Result:**

Successful simulated execution.

## Scenario B — Selector Change and Successful Recovery

An expected selector becomes unavailable.

The recovery simulation introduces an alternative selector and demonstrates successful validation.

**Result:**

Simulated repair accepted.

This is the default hero demonstration.

## Scenario C — Navigation Change

A previously expected intermediate page no longer appears.

The recovery demonstration presents an alternative navigation path.

**Result:**

Candidate workflow modification shown.

## Scenario D — Failed Validation

A candidate repair is proposed, but its simulated output does not satisfy the expected validation criteria.

**Result:**

Repair rejected.

Workflow remains in an attention-required state.

This scenario is essential for credibility.

The interface must demonstrate that AutoPatch would not blindly accept every proposed repair.

---

# 8. FRONTEND STATE MANAGEMENT

The entire prototype must run without a backend.

## State Categories

### Workflows

Store example workflow configurations.

### Execution Events

Maintain predefined execution history.

### Recovery Events

Store predefined recovery scenarios.

### Simulation Playback

Track:

- Current scenario.
- Current lifecycle stage.
- Playback status.
- Playback speed.
- Selected graph node.
- Selected execution.
- Current simulated version.

### Interface State

Track:

- Active filters.
- Search queries.
- Sidebar state.
- Selected tabs.
- Open dialogs.
- Theme.
- Toast notifications.

## Local Persistence

Use browser localStorage selectively for:

- Created demo workflows.
- User interface preferences.
- Simulation history.
- Demo resets.

Provide a **Reset Demo Data** action.

Do not require authentication.

---

# 9. SIMULATION ARCHITECTURE

## 9.1 General Principle

Simulations must be deterministic and controlled.

No random claims of AI execution.

No fabricated live browser activity.

The goal is to demonstrate the proposed workflow, not to disguise missing backend functionality.

## 9.2 Scenario Fixtures

Create structured local TypeScript data objects representing:

- Workflow definitions.
- Workflow steps.
- Execution events.
- Failure conditions.
- Candidate repairs.
- Validation outcomes.
- Workflow versions.

Each scenario should have a known starting point and outcome.

## 9.3 Playback Engine

Implement a frontend-only simulation controller.

Responsibilities:

- Start a scenario.
- Advance to the next stage.
- Pause.
- Resume.
- Reset.
- Change playback speed.
- Update node states.
- Append scripted log events.
- Display simulated version changes.

Avoid coupling animation timing directly to UI components.

The simulation state should remain authoritative.

## 9.4 Simulation Integrity

Users should never mistake the presentation for live execution.

Required safeguards:

- Persistent Demo Mode indicator.
- Disclosures before simulation playback.
- Simulated labels on execution logs.
- Informational labels for proposed integrations.
- No fake browser connection indicators.
- No claims of successful real-world testing.
- No artificial production reliability percentages.

The interface can be visually convincing without making deceptive implementation claims.

---

# 10. TECHNICAL STACK

## Frontend

- React.js
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Navigation

- React Router

## Workflow Visualization

- React Flow / @xyflow/react

## Animation

- Motion for React

## Icons

- Lucide React

## Charts

- Recharts

## Code Display

- Shiki or Prism-based syntax highlighting

## State Management

- Zustand

## Data

- Static TypeScript fixtures.
- Browser localStorage.

## Explicit Exclusions

Do not implement:

- Express backend.
- Next.js server functionality.
- PostgreSQL.
- MongoDB.
- Supabase.
- Firebase.
- Authentication providers.
- TinyFish API requests.
- Playwright execution.
- LLM calls.
- External workflow storage.
- Fake API endpoints.
- Serverless functions.

Keep the implementation entirely client-side.

---

# 11. SHADCN/UI COMPONENT REQUIREMENTS

Use shadcn/ui as the foundation for the interface.

Recommended components:

| Component      | Usage                     |
| -------------- | ------------------------- |
| Sidebar        | Primary navigation        |
| Card           | Dashboard panels          |
| Button         | Actions                   |
| Badge          | Status indicators         |
| Tabs           | Workflow details          |
| Dialog         | Creation and confirmation |
| Sheet          | Contextual inspectors     |
| Tooltip        | Technical explanations    |
| Dropdown Menu  | Workflow actions          |
| Select         | Scenario selection        |
| Input          | Form inputs               |
| Textarea       | Workflow task definition  |
| Table          | Workflow registry         |
| Progress       | Simulation progression    |
| Skeleton       | Interface transitions     |
| Alert          | Prototype disclosures     |
| Separator      | Panel structure           |
| Scroll Area    | Logs and event history    |
| Accordion      | Architecture explanations |
| Toast / Sonner | User feedback             |

All elements should share a coherent visual language.

Customize the default components extensively.

The product should not look like an untouched shadcn/ui starter template.

---

# 12. REQUIRED UX INTERACTIONS

| Feature                 | Required behavior                   |
| ----------------------- | ----------------------------------- |
| Sidebar navigation      | Working                             |
| Page routing            | Working                             |
| Workflow search         | Filters actual local data           |
| Workflow status filters | Working                             |
| Create workflow         | Adds local demo record              |
| Workflow graph          | Interactive                         |
| Graph node selection    | Opens inspector                     |
| Graph zoom and pan      | Working                             |
| Run simulation          | Plays scripted scenario             |
| Pause simulation        | Working                             |
| Reset simulation        | Working                             |
| Step-forward controls   | Working                             |
| Failure inspection      | Opens relevant details              |
| Healing visualization   | Animated                            |
| Scenario selection      | Changes playback events             |
| Code comparison         | Displays actual fixture differences |
| Execution history       | Browseable                          |
| Version history         | Browseable                          |
| Reset demo              | Restores initial fixtures           |
| Prototype disclosure    | Always accessible                   |

Avoid dead-end interactions.

A button must either perform a meaningful frontend action or be omitted.

---

# 13. DEMO DATA REQUIREMENTS

The prototype should ship with curated realistic example data.

## Initial Workflows

### Workflow 001

**Name:** Product Price Monitor

**Target:** Fictional e-commerce catalog

**Status:** Healthy

**Version:** v1.3

**Scenario:** Previously recovered selector change

### Workflow 002

**Name:** Job Listing Extractor

**Target:** Fictional jobs portal

**Status:** Attention Required

**Version:** v1.1

**Scenario:** Navigation structure change

### Workflow 003

**Name:** Invoice Download Automation

**Target:** Fictional billing portal

**Status:** Healthy

**Version:** v2.0

**Scenario:** Successful execution

### Workflow 004

**Name:** Product Availability Checker

**Target:** Fictional inventory dashboard

**Status:** Failed

**Version:** v1.0

**Scenario:** Candidate repair failed validation

Use fictional websites or clearly identified test targets.

Do not suggest the team has actually deployed automation against any real company.

## Data Consistency

All screens must use the same underlying fixture data.

For example:

If the Healing Center shows that Product Price Monitor was repaired from v1.2 to v1.3, the Workflow Inspector and Execution History must reflect the same scenario.

Metrics must be calculated from the actual local demo dataset rather than independently hardcoded.

---

# 14. RESPONSIVE DESIGN

## Desktop

Primary target: 1440px wide.

Use:

- Persistent sidebar.
- Multi-column dashboard.
- Full interactive workflow graph.
- Contextual side panels.

## Tablet

Use:

- Collapsible sidebar.
- Reflowing KPI cards.
- Reduced panel count.
- Scrollable workflow visualization.

## Mobile

Use:

- Drawer-based navigation.
- Single-column cards.
- Compact controls.
- Horizontal scrolling where appropriate.
- Full-screen graph inspection mode.

The desktop experience has priority for hackathon presentations.

However, mobile layouts must remain navigable and readable.

---

# 15. ACCESSIBILITY

Minimum requirements:

- Semantic HTML.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Clear form labels.
- Accessible dialogs.
- Sufficient text contrast.
- Tooltips that do not contain essential information exclusively.
- Reduced-motion support.
- Meaningful status labels alongside status colors.

Do not depend solely on animation or color to communicate a failure or recovery state.

---

# 16. PROTOTYPE DISCLOSURE SYSTEM

Transparency is part of the product design, not an afterthought.

## Global Badge

Place in the application header:

**UX PROTOTYPE · SIMULATED**

Clicking the badge opens a modal explaining:

This is an interactive frontend prototype of AutoPatch. The interface demonstrates the proposed product experience using scripted scenarios and local demo data. Live browser automation, TinyFish integration, workflow compilation, and autonomous repair are not implemented.

## Architecture Disclosure

Explain exactly which components are conceptual.

## Simulation Disclosure

Before playing the self-healing demonstration, display:

**Scripted Demonstration**

The following sequence illustrates the proposed AutoPatch recovery lifecycle. Browser interactions, AI diagnosis, workflow repairs, and validation outcomes are simulated.

## Code Preview Disclosure

Generated-code previews must say:

**Illustrative Example — Not Compiler Output**

## Footer

Display:

AutoPatch · Kritical Hacks 2026 · Interactive Concept Prototype

---

# 17. PRIMARY DEMONSTRATION JOURNEY

The application must support a strong demonstration lasting approximately two to three minutes.

## Step 1 — Enter Mission Control

Show the automation dashboard.

Highlight the healthy and failed workflows.

## Step 2 — Inspect a Workflow

Open Product Price Monitor.

Show the stored workflow as a visual graph.

## Step 3 — Simulate Execution

Start the workflow simulation.

The execution progresses through successful steps.

## Step 4 — Trigger Failure

The workflow encounters an illustrative selector failure.

The affected graph node changes state.

## Step 5 — Open Healing Center

Start the scripted recovery lifecycle.

Explain the intended role of TinyFish during rediscovery.

## Step 6 — Inspect Repair

Show the original selector and candidate replacement.

Display the simulated validation result.

## Step 7 — Show Workflow Update

Demonstrate the version change from v1.2 to v1.3.

Resume the simulated execution.

## Step 8 — Reveal Architecture

Finish by showing how the proposed system separates reusable Playwright execution from agent-assisted discovery and recovery.

Clearly acknowledge that the workflow compiler and recovery infrastructure remain engineering challenges.

The audience should leave understanding AutoPatch's core research direction without believing the prototype is production-ready.

---

# 18. ACCEPTANCE CRITERIA

The frontend prototype is complete when:

1. All primary pages render correctly.
2. Navigation works without full-page reloads.
3. The interface uses the specified dark visual language.
4. The dashboard presents internally consistent demo data.
5. Users can create and inspect local demo workflows.
6. Workflow graphs are interactive.
7. The healing simulation supports playback controls.
8. At least one successful recovery scenario works.
9. At least one failed validation scenario works.
10. A repair can be inspected through a before/after comparison.
11. Execution history reflects the scripted scenario.
12. Prototype disclosures appear consistently.
13. No feature claims to perform live AI or browser automation.
14. No backend or API keys are required.
15. The project runs locally using standard Vite development commands.
16. The UI remains usable at desktop and mobile viewport sizes.
17. The primary demonstration journey can be completed without encountering dead buttons or missing content.

---

# 19. IMPLEMENTATION PRIORITIES

## Phase 1 — Product Foundation

Build:

- React project structure.
- Design system.
- Sidebar and navigation.
- Shared components.
- Local data fixtures.
- State management.
- Dashboard layout.

## Phase 2 — Core Visualization

Build:

- Workflow graph.
- Node interaction.
- Workflow Inspector.
- Execution timeline.
- Failure visualization.

## Phase 3 — Self-Healing Experience

Build:

- Healing Center.
- Scenario playback controller.
- Scripted recovery timeline.
- Repair Inspector.
- Before/after comparison.
- Validation outcome states.

This phase has the highest product value.

## Phase 4 — Supporting Experience

Build:

- Workflow creation interface.
- Execution history.
- Architecture page.
- Prototype disclosure modal.

## Phase 5 — Polish

Refine:

- Microinteractions.
- Animation choreography.
- Loading transitions.
- Typography.
- Responsive layouts.
- Visual consistency.
- Demo flow.
- Accessibility.

---

# 20. FINAL PRODUCT DIRECTION

AutoPatch should not look like a generic AI chat application.

It should resemble a specialized automation operations platform.

The visual centerpiece should be the self-healing workflow lifecycle.

The key visual elements are:

**01 — Interactive workflow graphs**

**02 — Animated failure detection**

**03 — TinyFish-assisted recovery visualization**

**04 — Before/after automation repair comparison**

**05 — Validation and version history**

The interface should emphasize engineering credibility.

Even though this is only a frontend prototype, it should communicate a well-considered product architecture.

The finished application must be:

- Visually ambitious.
- Technically coherent.
- Richly interactive.
- Internally consistent.
- Transparent about implementation status.
- Easy to demonstrate.
- Focused on the proposed self-healing lifecycle.

## Final Directive

**Build a convincing demonstration of the AutoPatch product experience, not a fictional claim of completed autonomous browser automation.**

The prototype's job is to make the proposed system understandable, compelling, and credible.

It is not required to execute real automations.

Its most important deliverable is a clear demonstration of how an autonomous browser workflow could progress from execution failure to validated recovery.

**The hero is the lifecycle. The frontend exists to communicate it.**
