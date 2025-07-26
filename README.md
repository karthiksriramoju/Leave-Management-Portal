# Leave Management Portal 🗓️

A full-stack **Leave Management Portal** where employees can request leaves, managers can approve/reject them, and admins can configure policies, manage teams, and view all leave-related data. This portal streamlines internal HR processes for efficient leave tracking and approval.

---

## 🧩 Problem Statement

Leave management is often a manual and error-prone process in many organizations. Employees face delays, managers lack clarity, and admins struggle with policy enforcement and visibility. This portal solves that by offering:

- A centralized system for handling leave requests
- Role-based workflows for employees, managers, and admins
- Admin configuration for leave policies and holidays
- Transparency and tracking of leave usage

---

## 👥 Roles & Features

### 👨‍💼 Employee
- Apply for leave by choosing date range and reason
- View their own leave history and leave balance
- Track leave status (pending/approved/rejected)

### 🧑‍🏫 Manager
- View and manage team members’ leave requests
- Approve or reject pending requests
- View team calendar

### 👩‍💻 Admin
- Configure total leaves, leave types, holidays
- Approve/reject any leave requests
- Manage all users and teams
- View leave usage analytics 

---

## 🛠️ Tech Stack

This project is built with:

- **Next.js** – Full-stack React Framework
- **React** – UI library
- **TypeScript** – Static typing
- **shadcn/ui** – Prebuilt component system using Radix & Tailwind
- **Tailwind CSS** – Utility-first styling
- **Vite** – Lightning fast dev server and bundler

All `shadcn/ui` components are pre-installed under `@/components/ui`.

---

## 📁 File Structure

```
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── package.json
└── src
    ├── app.tsx
    ├── main.tsx
    ├── index.css
    └── components
        └── ui         
```

> 📌 The `@/` path alias points to the `src/` directory

---

## 🔍 Navigation Guide

| Path                   | Description                                      | Access Role       |
|------------------------|--------------------------------------------------|-------------------|
| `/`                    | Landing page with project intro or welcome      | Public            |
| `/login`               | Login screen for all roles                      | Public            |
| `/index`               | Dashboard that redirects based on user role     | Employee / Manager / Admin |
| `/leaves`              | View user's own leave history & status          | Employee          |
| `/apply-leave`         | Apply for a new leave                           | Employee          |
| `/work-from-home`      | Request work from home                          | Employee          |
| `/team-leaves`         | View & manage team leave requests               | Manager           |
| `/admin`               | Admin panel for configuring policies, holidays  | Admin             |
| `*` (fallback route)   | Page Not Found                                  | Public            |

---

## ⚙️ Project Setup

1. **Clone the repo**

```bash
git clone https://github.com/<your-username>/leave-management-portal.git
cd leave-management-portal
```

2. **Install Dependencies**

```bash
pnpm install
```

> Ensure you have `pnpm` installed. If not:

```bash
npm install -g pnpm
```

3. **Run the Development Server**

```bash
pnpm run dev
```

4. **Build for Production**

```bash
pnpm run build
```

5. **Preview the Production Build**

```bash
pnpm run preview
```

---

## 🎨 Styling & UI

- Built using `shadcn/ui` components under `@/components/ui`
- Global styling via `src/index.css`
- Customization possible through `tailwind.config.js`

---

## 🧾 Commands Summary

| Action                | Command             |
|----------------------|---------------------|
| Install Dependencies | `pnpm i`            |
| Start Development    | `pnpm run dev`      |
| Build Project        | `pnpm run build`    |
| Preview Build        | `pnpm run preview`  |

---

## 🙌 Contributors

### 👨‍💻 Team Lead
- **Karthik Sriramoju** – Full-stack Developer, Project Lead

### 👥 Teammates
- **Maithri** – Contributed to UI and feature design  
- **Rohini** – Helped with backend logic and leave workflows  
- **Medhilesh** – Worked on authentication and integration  
- **Sahasra** – Contributed to testing and UI refinement

---

## 📄 License

MIT License. Feel free to use and build upon it with attribution.
