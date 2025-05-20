# Dashboard UI with shadcn/ui

## Demo & Live Links

- **Demo Video**: [Watch Demo](https://drive.google.com/file/d/1ZEvu5YhqvIV8TBpWqFo-PAf0ZGW7Tzig/view?usp=sharing)
- **Live Demo**: [View Live Demo](https://dashboard-ui-creatiwise.vercel.app/)

A responsive Dashboard UI built with Next.js and shadcn/ui components, featuring a sidebar navigation and data table section.

## Features

- Responsive sidebar navigation with collapsible sections
- Dynamic data table with sorting, filtering, and pagination
- Tab navigation for different article categories
- Search functionality for titles and keywords
- Loading skeleton states
- Clean component structure

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/karthikks26/dashboard-ui-Creatiwise
   cd dashboard-ui
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install

# or

yarn install

# or

pnpm install
\`\`\`

3. Install shadcn/ui components
   \`\`\`bash
   npx shadcn@latest init
   npx shadcn@latest add sidebar table tabs input button checkbox dropdown-menu avatar select skeleton
   \`\`\`

4. Run the development server
   \`\`\`bash
   npm run dev

# or

yarn dev

# or

pnpm dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/` - Next.js app router pages and layouts
- `components/` - Reusable UI components
  - `dashboard.tsx` - Main dashboard component
  - `dashboard-sidebar.tsx` - Sidebar navigation
  - `dashboard-content.tsx` - Main content area
  - `articles-table.tsx` - Data table for articles
  - `loading-skeleton.tsx` - Loading skeleton components
- `context/` - React context for state management
  - `article-context.tsx` - Context for article data and state
- `lib/` - Utility functions and custom hooks
  - `router.tsx` - Simple router implementation for demo purposes

## Features Implemented

### Dynamic Search

- Search for articles by title or keyword
- Results update in real-time as you type

### Tab Navigation

- Switch between different article categories (Generated, Published, Scheduled, Archived)
- Each tab loads different data with a loading state

### Sorting

- Sort articles by any column (Title, Keyword, Words, Created On)
- Toggle between ascending and descending order

### Pagination

- Navigate between pages of articles
- Change the number of items displayed per page

### Responsive Design

- Works on mobile, tablet, and desktop screens
- Sidebar collapses on smaller screens
