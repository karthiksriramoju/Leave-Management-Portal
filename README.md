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
- View leave usage analytics (if implemented)

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
        └── ui         # shadcn pre-built components
```

> 📌 The `@/` path alias points to the `src/` directory

---

## 🔍 Navigation Guide

| Path                 | Description                           | Access Role    |
|----------------------|----------------------------------------|----------------|
| `/login`             | Authentication screen                  | Public         |
| `/dashboard`         | Redirect based on role                 | All users      |
| `/leave/apply`       | Submit a leave request                 | Employee       |
| `/leave/team`        | View & act on team leave requests      | Manager        |
| `/admin/config`      | Configure policies, leaves, holidays   | Admin only     |
| `/holidays`          | View holidays                          | All users      |
| `/profile`           | User details and history               | All users      |

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

## 🙌 Contributions

This is a solo project built and maintained by **Karthik Sriramoju**.

Feel free to fork, modify, or reach out for any feedback or improvements!

---

## 📄 License

MIT License. Feel free to use and build upon it with attribution.