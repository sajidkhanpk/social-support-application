# Social Support Application

This project is a **Vite React TypeScript** application styled with **TailwindCSS**, following the **Atomic Design Pattern** for scalability, maintainability, and readability.

---

## ✨ Features

- **Atomic Design Pattern**
  Structured into atoms, molecules, and organisms for a clean and reusable component architecture.

- **Reusable UI Components**
  Buttons, inputs, date pickers, and selects are built with TailwindCSS.
  Each component supports **styling variants** for reusability and consistency.

- **Theming**
  Supports both **light** and **dark** themes, seamlessly handled across components.

- **Form Handling**

  - Integrated with **React Hook Form (RHF)**.
  - Created custom RHF components for easy integration within forms.
  - `useEffect` is used to handle form changes efficiently **without unnecessary re-renders**.

- **Feature-Based Structure**
  Each feature is self-contained with its own components, libs, and hooks.

---

## 🚀 Potential Improvements

Due to limited time, the following features were not implemented but would improve the project:

- **Dynamic State & City Selects**
  - Dependent dropdowns for state and city selection.
  - Data fetched from APIs, dynamically updated based on selected country.

---

## 🛠️ Tech Stack

- **Framework:** [Vite](https://vitejs.dev/)
- **Frontend:** React + TypeScript
- **Styling:** TailwindCSS
- **Forms:** React Hook Form
- **Architecture:** Atomic Design Pattern

---

## Project Structure

```bash
src/
├── shared/components # Atomic components (atoms, molecules, organisms)
├── features/ # Feature-based modules with own components, libs, and hooks
└── App.tsx
```

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone git@github.com:sajidkhanpk/social-support-application.git
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variable

Create a .env file in the root directory and add:

- VITE_OPENAI_API_KEY=your_openai_api_key

## Notes

- The project is kept simple for demonstration purposes.
- Ready for scaling by adding more features, pages, and APIs.

Create flow diagram..
Create README.md
Explain project and features
Explain tech used
Explain how to use project locally
DOB should be with labels --> RTL
Submission page should be there instead of console.log with mockAPI
axios/interceptors with 401/500 handling
Error boundary

---

AI response in selected locale
HAndle Arabic stuff in Help me write
Remove unused locale (language for model response) in open ai service

// --------------- TODO ------------------ //

// --------------- DONE ------------------ //
Phone# should be with labels --> RTL
Phone dropdown overflow in small screens
Phone borders for RTL
Add type='button' to ai modal buttons
Reset state on ai modal close
Handle 0 income and dependents
default propmt from user input
Monthly income currency symbol is missing
Translation missing for many labels
Country Error state

// --------------- Prompt ------------------ //
I am unemployed with no income. Help me describe my financial hardship.
