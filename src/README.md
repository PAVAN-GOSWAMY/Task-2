# Portfolio Website

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library (FiMenu, FiX)
- **SweetAlert2** - Beautiful alert/modal popups
- **Vite** - Build tool and development server

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.0.0 or higher)
- **npm** or **yarn** package manager

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Install Required Packages

Make sure all dependencies are installed:

```bash
npm install react-icons sweetalert2
```

### 4. Start Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is busy)

### 5. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── assets/
│   │   ├── Rectangle1.png      # Profile image
│   │   ├── path.png            # GitHub logo
│   │   ├── Vector-3.png        # Facebook icon
│   │   ├── Vector-4.png        # Instagram icon
│   │   └── Port-1.png          # Portfolio card image
│   ├── components/
│   │   ├── Form.jsx            # Contact form component
│   │   └── WorkCard.jsx        # Portfolio card component
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Custom styles
│   ├── Navbar.jsx              # Navigation component
│   ├── index.css               # Tailwind directives
│   └── main.jsx                # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```