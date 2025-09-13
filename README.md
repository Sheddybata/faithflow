# FaithFlow 🙏

A mobile-first web application designed to help users maintain a daily Bible reading habit through structured journaling and community features.

## Features

### 🏠 **Home Screen**
- Today's reading display with progress tracking
- Streak counter and reading statistics
- Verse of the day
- Quick access to reading and journaling

### 📖 **Reading Screen**
- Full Bible text display with highlighting capabilities
- Audio player with playback controls
- Progress tracking and completion marking
- Personal notes and verse highlighting

### ✍️ **Journal Screen**
- **ACTS + Insight Method** with required fields:
  - **A**ttention: What caught your attention?
  - **C**ommitment: What will you commit to?
  - **T**ask: What specific action will you take?
  - **S**ystem: How will you implement this?
  - **Insight**: What new understanding did you receive?
- Scripture notes and prayer requests
- Form validation to unlock next day's reading

### 👤 **Profile Screen**
- User statistics and achievements
- Reading progress tracking
- Theme customization (Light/Dark mode)
- Font size adjustment
- Notification preferences

### 🏆 **Leaderboard Screen**
- Community rankings by streak and readings
- Group leaderboards
- Personal ranking display
- Tips for improving scores

### 🤝 **Community Screen**
- Discussion board for sharing insights
- Prayer wall for requests and praise reports
- Group management and joining
- Community statistics

### 📅 **Calendar Screen**
- Monthly view with journal entry indicators
- Weekly summaries
- Quick access to past entries
- Progress tracking over time

## Design Philosophy

### **Mobile-First Approach**
- Optimized for mobile devices with touch-friendly interfaces
- Responsive design that works on all screen sizes
- Bottom navigation for easy thumb access

### **Theme System**
- **Light Mode**: Soothing earth tones with soft blues and browns
- **Dark Mode**: Deep earth tones for comfortable reading in low-light
- Automatic theme switching based on system preferences
- Customizable color scheme focused on scripture readability

### **User Experience**
- Intuitive navigation between screens
- Progress indicators and visual feedback
- Smooth animations and transitions
- Accessibility considerations for all users

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom styling
- **State Management**: React Context API
- **Build Tool**: Vite
- **Theme**: Custom CSS variables with HSL color system

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd FaithFlow
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Project Structure

```
FaithFlow/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── AuthScreen.tsx  # Authentication interface
│   │   ├── HomeScreen.tsx  # Main dashboard
│   │   ├── ReadingScreen.tsx # Bible reading interface
│   │   ├── JournalScreen.tsx # ACTS journaling method
│   │   ├── ProfileScreen.tsx # User profile and settings
│   │   ├── LeaderboardScreen.tsx # Community rankings
│   │   ├── CommunityScreen.tsx # Discussion and groups
│   │   ├── CalendarScreen.tsx # Progress tracking
│   │   └── Navigation.tsx  # Bottom navigation
│   ├── contexts/           # React context providers
│   │   └── AppContext.tsx # Main application state
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── index.css           # Global styles and theme variables
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Colors
The app uses a custom color system defined in `src/index.css`. You can modify the HSL values to create your own theme:

```css
:root {
  --faith-primary: 210 60% 50%;    /* Soft Blue */
  --faith-secondary: 35 50% 90%;   /* Warm Brown */
  --faith-accent: 180 30% 85%;     /* Soft Teal */
  --faith-success: 150 50% 60%;    /* Success Green */
  --faith-warning: 45 80% 70%;     /* Warning Yellow */
  --faith-error: 0 70% 60%;        /* Error Red */
}
```

### Components
All UI components are built using Radix UI primitives and can be customized through the `components/ui/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the GitHub repository.

---

**FaithFlow** - Your daily journey through scripture 📖✨
