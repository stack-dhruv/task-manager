# Task Manager App

A simple and intuitive task management application built with React Native and Expo. This app allows users to efficiently manage their daily tasks with features like adding, completing, and deleting tasks.

## 📱 Features

### Core Functionality
- **Add Tasks**: Create new tasks with title and optional description
- **Mark Complete**: Toggle task completion status with visual feedback
- **Delete Tasks**: Remove tasks with confirmation dialog
- **Task Filtering**: View all tasks, active tasks, or completed tasks
- **Task Statistics**: Real-time count of total, active, and completed tasks

### User Experience
- **Clean Interface**: Modern, intuitive design with card-based layout
- **Visual Feedback**: Smooth animations and state changes
- **Modal Creation**: Elegant task creation interface
- **Empty States**: Helpful messaging when no tasks exist
- **Responsive Design**: Works on various screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Expo CLI (optional but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   # or
   npm start
   ```

4. **Run on your device**
   - **iOS**: Press `i` in the terminal or scan the QR code with Camera app
   - **Android**: Press `a` in the terminal or scan the QR code with Expo Go app
   - **Web**: Press `w` in the terminal to open in browser

### Alternative Setup with Expo CLI

If you have Expo CLI installed globally:
```bash
expo start
expo start --ios
expo start --android
expo start --web
```

## 📖 How to Use

![Demo GIF](./assets/demo.gif)

### Adding a Task
1. Tap the "**+ Add a Task**" button at the bottom of the screen
2. Enter a task title (required)
3. Optionally add a description for more details
4. Tap "**Add Task**" to save

### Managing Tasks
- **Mark as Complete**: Tap the checkbox next to any task
- **Delete Task**: Tap the trash icon (🗑️) and confirm deletion
- **Filter Tasks**: Use the filter tags (All, Active, Completed) to view specific task types

### Visual Indicators
- **Active Tasks**: Clear checkbox, normal text
- **Completed Tasks**: Filled checkbox, strikethrough text, reduced opacity
- **Task Count**: Header shows total, active, and completed task counts

## 🏗️ Project Structure

```
task-manager/
├── src/
│   ├── components/
│   │   ├── tasks/
│   │   │   ├── TaskComponent.js       # Individual task display
│   │   │   ├── TaskList.js           # Task list container
│   │   │   └── AddTaskModal.js       # Task creation modal
│   │   └── tags/
│   │       ├── TagComponent.js       # Filter tag button
│   │       └── TagList.js           # Filter tags container
│   ├── screens/
│   │   └── HomeScreen.js            # Main application screen
│   └── styles/
│       ├── components/              # Component-specific styles
│       ├── screens/                 # Screen-specific styles
│       └── common/                  # Shared styles (colors, typography, spacing)
├── assets/                          # App icons and images
├── App.js                          # Root application component
├── app.json                        # Expo configuration
└── package.json                    # Dependencies and scripts
```

## 📚 Dependencies

### Core Dependencies
- **react**: ^18.2.0 - Core React library
- **react-native**: 0.74.5 - React Native framework
- **expo**: ~51.0.28 - Expo development platform

### Expo Modules
- **expo-status-bar**: ~1.12.1 - Status bar management
- **expo-splash-screen**: ~0.27.5 - Splash screen handling

### Development Dependencies
- **@babel/core**: ^7.20.0 - JavaScript compiler

## 🎨 Design System

The app uses a consistent design system with:

### Colors
- **Primary**: #007AFF (iOS Blue)
- **Background**: #F2F2F7 (Light Gray)
- **Surface**: #FFFFFF (White)
- **Text**: Various grays for hierarchy

### Typography
- **Sizes**: 12px to 28px with semantic naming
- **Weights**: Regular, medium, semibold, bold

### Spacing
- **Consistent spacing scale**: 4px, 8px, 12px, 16px, 20px, 24px
- **Component-specific padding and margins**

## 🔧 Configuration

### App Configuration (app.json)
The app is configured for cross-platform deployment with:
- Custom app icon and splash screen
- iOS and Android specific settings
- Web compatibility

### Customization
To customize the app:
1. **Colors**: Edit `src/styles/common/colors.js`
2. **Typography**: Modify `src/styles/common/typography.js`
3. **Spacing**: Adjust `src/styles/common/spacing.js`
4. **App Icon**: Replace files in `assets/` folder

## 🏃‍♂️ Available Scripts

- **`npm start`**: Start the Expo development server
- **`npm run android`**: Run on Android device/emulator
- **`npm run ios`**: Run on iOS device/simulator
- **`npm run web`**: Run in web browser

## 🐛 Troubleshooting

### Common Issues

**Metro bundler cache issues:**
```bash
npx expo start --clear
```

**Dependencies issues:**
```bash
rm -rf node_modules
npm install
```

**iOS/Android build issues:**
```bash
npx expo run:ios --clear
npx expo run:android --clear
```

## Acknowledgments

- Built with [React Native](https://reactnative.dev/)
- Developed using [Expo](https://expo.dev/)
- Inspired by modern task management applications
- Created as part of Chapter One Tech Screen

## Support

If you encounter any issues or have questions:
1. Check the [troubleshooting section](#-troubleshooting)
2. Review the [Expo documentation](https://docs.expo.dev/)
3. Open an issue in this repository
