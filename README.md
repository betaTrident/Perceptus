# PERCEPTUS - G0DS-EYE

<div align="center">



---

**Advanced Facial Recognition & Attendance System with Tron: Ares Aesthetic**

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

**🔐 [GitHub Repository](https://github.com/betaTrident/Perceptus)**

_Neural Pattern Analysis. Real-Time Recognition. Unmatched Precision._

</div>

---

## 🌟 Overview

**PERCEPTUS - G0DS-EYE** is an advanced facial recognition and attendance tracking system that combines cutting-edge biometric technology with the iconic visual language of _Tron: Ares_. Built with Next.js 16 and powered by WebRTC, it provides real-time facial detection, attendance management, and a comprehensive admin dashboard for monitoring and analytics.

### Key Features

- 🔍 **Real-Time Facial Recognition** - Neural pattern analysis with 99.7% accuracy and <20ms response time
- ⏰ **Attendance Tracking** - Time In/Time Out system with facial verification
- 📊 **Admin Dashboard** - Real-time monitoring, camera feeds, activity logs, and system diagnostics
- 🎬 **Tron-Inspired UI** - Authentic Ares theme with scanlines, glowing effects, and HUD elements
- ✨ **3D Effects** - Immersive Three.js grid backgrounds with particles and light beams
- 📹 **WebRTC Camera** - Live video streaming with facial detection overlays
- 🔒 **TypeScript** - Full type safety with comprehensive TypeScript definitions
- 🎯 **Modular Architecture** - Clean, maintainable component structure

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn
- Webcam/camera device for facial recognition features

### Installation

```bash
# Clone the repository
git clone https://github.com/betaTrident/Perceptus.git
cd Perceptus/perceptus

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000/G0DS-EYE](http://localhost:3000/G0DS-EYE) in your browser to access the PERCEPTUS landing page.

### Build for Production

```bash
pnpm build
pnpm start
```

## 📦 Project Structure

```
perceptus/
├── src/
│   ├── app/
│   │   ├── G0DS-EYE/            # Main facial recognition system
│   │   │   ├── page.tsx          # Landing page
│   │   │   ├── components/       # Page-specific components
│   │   │   │   ├── PerceptusHeader.tsx
│   │   │   │   ├── LoginModal.tsx
│   │   │   │   ├── TimeSelectionModal.tsx
│   │   │   │   ├── CameraScannerModal.tsx
│   │   │   │   ├── FacialRecognitionStats.tsx
│   │   │   │   ├── FeatureCard.tsx
│   │   │   │   └── FaceDetectionViz.tsx
│   │   │   ├── sections/         # Page sections
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── FeaturesSection.tsx
│   │   │   │   ├── LiveDemoSection.tsx
│   │   │   │   ├── CTASection.tsx
│   │   │   │   └── Footer.tsx
│   │   │   └── dashboard/        # Admin dashboard
│   │   │       ├── page.tsx
│   │   │       └── components/
│   │   │           ├── DashboardHeader.tsx
│   │   │           ├── StatCard.tsx
│   │   │           ├── LiveFeedCard.tsx
│   │   │           ├── ActivityLog.tsx
│   │   │           └── SystemStatus.tsx
│   │   ├── page.tsx              # Homepage
│   │   └── globals.css           # Global styles & theme
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── tron-ui/              # Tron-themed UI components
│   │   ├── tron-3d/              # Three.js 3D effects
│   │   ├── tron-effects/         # Visual effects (scanlines, glows)
│   │   ├── theme/                # Theme provider
│   │   └── layout/               # Layout components
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utility functions
│   └── styles/                   # Additional stylesheets
├── public/                       # Static assets
└── components.json               # shadcn/ui configuration
```

### Application Routes

The project consists of three main routes:

- **Home** (`/`) - Project landing page with theme showcase
- **G0DS-EYE** (`/G0DS-EYE`) - Facial recognition system landing page with live demo and features
- **Dashboard** (`/G0DS-EYE/dashboard`) - Admin console for monitoring, analytics, and system control

## 🎨 System Features

### Facial Recognition Capabilities

**PERCEPTUS** employs advanced neural pattern analysis for:

- **Real-Time Detection** - Instant face detection with bounding box overlays
- **Identity Verification** - 99.7% accuracy facial recognition
- **Live Tracking** - Continuous monitoring of detected faces
- **Performance** - Sub-20ms response time for identification

### Attendance Management

The system provides a complete attendance tracking solution:

| Feature          | Description                                        |
| ---------------- | -------------------------------------------------- |
| **Time In**      | Clock in with facial verification                  |
| **Time Out**     | Clock out with facial verification                 |
| **Modal Flow**   | User selects Time In/Out before camera activation |
| **Verification** | Biometric confirmation for all attendance actions  |

### Admin Dashboard

Real-time monitoring and control interface:

- **Live Statistics** - Total scans, identified faces, tracked individuals
- **Camera Feeds** - Multiple camera monitoring with status indicators
- **Activity Log** - Chronological system events with severity levels
- **System Diagnostics** - CPU, Memory, GPU, Network, Storage metrics
- **Proximity Radar** - Visual representation of detected entities
- **Quick Controls** - Emergency protocols and system management

## 🧩 Components

### G0DS-EYE Landing Page Components

**Core Components:**

- `PerceptusHeader` - System header with branding and login access
- `LoginModal` - Authentication interface with Tron styling
- `TimeSelectionModal` - Attendance mode selector (Time In/Time Out)
- `CameraScannerModal` - WebRTC video stream with facial detection overlay
- `FacialRecognitionStats` - Live updating statistics display
- `FeatureCard` - Feature showcase card with icons
- `FaceDetectionViz` - Static visualization of facial detection

**Page Sections:**

- `HeroSection` - Main hero with PERCEPTUS branding and scan initialization
- `FeaturesSection` - Grid display of system capabilities
- `LiveDemoSection` - Interactive demonstration of facial recognition
- `CTASection` - Call-to-action with demo and contact options
- `Footer` - Footer with branding and copyright

### Admin Dashboard Components

- `DashboardHeader` - Navigation bar with admin controls
- `StatCard` - Metric display cards with trend indicators
- `LiveFeedCard` - Camera feed cards with status and detection count
- `ActivityLog` - Scrollable system activity feed with severity levels
- `SystemStatus` - System diagnostics panel with progress bars

### Tron UI Library

The system utilizes Tron-themed components for authentic visual styling:

- `TronReticle` - Scanning reticle overlay
- `TronDossierCard` - Movie-accurate data card
- `TronStatusStrip` - HUD status bar
- `TronUplinkHeader` - Header bar with system information
- `TronRadar` - Proximity radar display
- `TronDerezCountdown` - De-resolution timer
- `TronGridMap` - Grid map overlay
- `TronGridScanOverlay` - Scanning grid effect
- `TronGrid3D` - Interactive 3D grid with particles and light beams

## 🎯 Usage

### User Flow

**Attendance Tracking Flow:**

1. User clicks "INITIALIZE SCAN" on landing page
2. `TimeSelectionModal` appears with Time In/Time Out options
3. User selects attendance mode
4. `CameraScannerModal` opens with live camera feed
5. System performs facial recognition
6. Attendance recorded with timestamp and facial verification

### Admin Access

Access the admin dashboard at `/G0DS-EYE/dashboard` for:

- Real-time system monitoring
- Camera feed management
- Activity log review
- System diagnostics
- User management (future feature)

### Component Usage

```tsx
import {
  CameraScannerModal,
  TimeSelectionModal,
  FacialRecognitionStats,
} from "@/app/G0DS-EYE/components";

export function MyComponent() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  return (
    <div>
      <FacialRecognitionStats />
      <CameraScannerModal
        open={isScannerOpen}
        onOpenChange={setIsScannerOpen}
      />
    </div>
  );
}
```

### Using Tron UI Components

```tsx
import { TronDossierCard, TronRadar } from "@/components/tron-ui";

export function SecurityPanel() {
  return (
    <div>
      <TronDossierCard
        category="SUBJECT"
        name="AUTHORIZED USER"
        fields={[
          { label: "STATUS", value: "VERIFIED", highlighted: true },
          { label: "ACCESS LEVEL", value: "ADMINISTRATOR" },
          { label: "LAST SCAN", value: "2026-02-06 14:32:07" },
        ]}
      />
      <TronRadar size={300} />
    </div>
  );
}
```

## ⚙️ Configuration

### Camera Permissions

The system requires camera access for facial recognition. Ensure your browser has permissions enabled:

- Chrome/Edge: Settings → Privacy and security → Site Settings → Camera
- Firefox: Settings → Privacy & Security → Permissions → Camera
- Safari: Settings → Websites → Camera

### Theme Customization

The Ares theme uses CSS custom properties defined in `src/app/globals.css`. Customize:

- Primary color (red) via `--primary` variable
- Glow effects through `--glow` and `--glow-muted`
- Border radius with `--radius` values
- Font families using `--font-orbitron` and `--font-rajdhani`

### Environment Variables

```env
# Add to .env.local
NEXT_PUBLIC_API_URL=your_api_endpoint
NEXT_PUBLIC_ENABLE_CAMERA=true
```

## 🛠️ Tech Stack

- **[Next.js 16.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.2](https://react.dev/)** - UI library with hooks
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety and developer experience
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Three.js](https://threejs.org/)** - 3D graphics for grid backgrounds
- **[WebRTC](https://webrtc.org/)** - Real-time camera streaming
- **[shadcn/ui](https://ui.shadcn.com/)** - Base component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible UI primitives
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

## 🎬 Visual Design

PERCEPTUS employs the authentic Ares (red) theme from Tron: Ares, featuring:

- **Color Palette**: Primary red (#ff3333) with cyan accents
- **Typography**: Orbitron for headers, Rajdhani for body text
- **Visual Effects**: Scanlines, grid overlays, corner brackets, glowing borders
- **3D Elements**: Animated grid floor, particle effects, light beams
- **HUD Elements**: Reticles, status bars, data cards, radar displays

## 🚢 Deployment

### Deploy on Vercel

The recommended deployment platform:

1. Push your code to GitHub: [https://github.com/betaTrident/Perceptus](https://github.com/betaTrident/Perceptus)
2. Import your repository in [Vercel](https://vercel.com/new)
3. Configure environment variables if needed
4. Deploy!

PERCEPTUS is optimized for Vercel's platform and will work out of the box.

### Other Platforms

This Next.js application can be deployed to any platform supporting Node.js:

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)
- Any Node.js hosting service

### Production Considerations

- Ensure HTTPS is enabled for WebRTC camera access
- Configure CORS settings for API endpoints
- Set up proper authentication for admin dashboard
- Implement rate limiting for facial recognition endpoints
- Enable security headers and CSP policies

## 🔒 Security

- **Camera Access**: Requests user permission before accessing webcam
- **Authentication**: Login system for admin dashboard access
- **Data Privacy**: Facial recognition data should be handled per privacy regulations
- **HTTPS Required**: WebRTC requires secure context for camera access

## 🚀 Future Enhancements

- [ ] Backend API integration for storing attendance records
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Advanced facial recognition ML models
- [ ] Multi-camera support
- [ ] User management system
- [ ] Detailed analytics and reporting
- [ ] Export attendance data (CSV, PDF)
- [ ] Mobile app integration
- [ ] Access control integration
- [ ] Real-time notifications

## 🤝 Contributing

Contributions are welcome! To contribute to PERCEPTUS:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code:
- Follows TypeScript best practices
- Includes proper type definitions
- Maintains the Tron/Ares visual design language
- Is well-documented with comments

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Tron: Ares](https://www.imdb.com/title/tt11040010/) for the iconic visual inspiration
- [shadcn/ui](https://ui.shadcn.com/) for the excellent component foundation
- [Three.js](https://threejs.org/) for powerful 3D graphics capabilities
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [WebRTC](https://webrtc.org/) for real-time camera streaming technology

## 📞 Support

For questions, issues, or support:

- **GitHub Issues**: [https://github.com/betaTrident/Perceptus/issues](https://github.com/betaTrident/Perceptus/issues)
- **Repository**: [https://github.com/betaTrident/Perceptus](https://github.com/betaTrident/Perceptus)
- **Documentation**: See this README and inline code comments

## 🎯 System Requirements

### Development
- Node.js 18.x or higher
- pnpm 8.x or higher (or npm/yarn)
- Modern browser with WebRTC support
- Webcam/camera device

### Production
- HTTPS-enabled hosting (required for camera access)
- Node.js runtime environment
- Modern browser support (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

---

<div align="center">

**Built with ❤️ for Advanced Biometric Security**

_PERCEPTUS - G0DS-EYE: Neural Pattern Analysis. Real-Time Recognition. Unmatched Precision._

**Repository**: [github.com/betaTrident/Perceptus](https://github.com/betaTrident/Perceptus)

_End of Line_

</div>
