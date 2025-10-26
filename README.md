# Ohio Down Payment Help

A comprehensive lead generation website for down payment assistance programs in Ohio, built for Geneva Financial LLC (NMLS #42056).

![Ohio Down Payment Help](client/public/ohio_dpa_profile_logo.png)

## 🏠 Overview

This website helps Ohio homebuyers discover and qualify for down payment assistance programs, including FHA, VA, USDA, and OHFA programs. The platform captures qualified leads through an optimized conversion funnel designed for both organic search (SEO) and Instagram traffic.

**Live Demo:** [View Website](https://3000-ix3a5mwfq5jvtxfv6n0pc-e6daac30.manusvm.computer)

## ✨ Features

### Lead Generation
- **Comprehensive 14-field qualification form** capturing:
  - Personal information (name, email, phone)
  - First-time homebuyer status
  - Military/veteran status
  - First responder/healthcare/education profession
  - Household size
  - Home ownership history (last 3 years)
  - Monthly household income
  - Purchase price range
  - Monthly rent/mortgage payment
  - Monthly debt obligations
  - Credit score range

### SEO Optimization
- ✅ Meta tags optimized for "down payment ohio" keywords
- ✅ Structured data (JSON-LD) for Google rich snippets
- ✅ Sitemap.xml and robots.txt
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Fast page load times
- ✅ Mobile-responsive design

### Instagram Integration
- ✅ Dedicated `/ig` landing page for Instagram traffic
- ✅ "As Seen On Instagram" branding badge
- ✅ Mobile-first form design
- ✅ Thank you page with social sharing buttons
- ✅ UTM tracking for Instagram campaigns

### NMLS Compliance
- ✅ Geneva Financial LLC | NMLS #42056 on every page
- ✅ Equal Housing Opportunity statements
- ✅ "Subject to credit approval" disclaimers
- ✅ Licensed in Ohio statements
- ✅ Compliant language throughout (no "guaranteed approval")

### Technical Features
- ✅ Database storage for all leads
- ✅ Automatic owner notifications on new lead submission
- ✅ Form validation and error handling
- ✅ Psychologically-optimized color scheme (teal-blue/green)
- ✅ Responsive design for all devices

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - Component library
- **Wouter** - Routing
- **React Helmet Async** - SEO meta tags
- **Vite** - Build tool

### Backend
- **Express 4** - Server framework
- **tRPC 11** - Type-safe API
- **Drizzle ORM** - Database ORM
- **MySQL/TiDB** - Database
- **Manus OAuth** - Authentication

### Infrastructure
- **Manus Platform** - Hosting & deployment
- **S3** - File storage
- **Built-in APIs** - Notifications, analytics

## 📁 Project Structure

```
ohio-downpayment-help/
├── client/                  # Frontend React application
│   ├── public/             # Static assets
│   │   ├── ohio_dpa_profile_logo.png
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── pages/          # Page components
│       │   ├── Home.tsx           # Main landing page
│       │   ├── InstagramLanding.tsx  # Instagram-specific page
│       │   ├── Programs.tsx       # Programs information
│       │   └── ThankYou.tsx       # Post-submission page
│       ├── lib/            # Utilities
│       └── index.css       # Global styles
├── server/                  # Backend Express + tRPC
│   ├── routers.ts          # API routes
│   ├── db.ts               # Database helpers
│   └── _core/              # Core infrastructure
├── drizzle/                 # Database schema
│   └── schema.ts
├── shared/                  # Shared types & constants
└── storage/                 # S3 storage helpers
```

## 🚀 Getting Started

### Prerequisites
- Node.js 22+
- pnpm
- MySQL/TiDB database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CoryLawsonxMortgageAI/ohio-downpayment-help.git
cd ohio-downpayment-help
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
# Copy .env.example to .env and fill in values
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
VITE_APP_TITLE="Ohio Down Payment Help"
VITE_APP_LOGO="/ohio_dpa_profile_logo.png"
# ... other variables
```

4. Push database schema:
```bash
pnpm db:push
```

5. Start development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 📊 Database Schema

### Leads Table
```sql
CREATE TABLE leads (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  city VARCHAR(255),
  zipCode VARCHAR(255),
  isFirstTimeBuyer ENUM('yes', 'no'),
  isMilitaryVeteran ENUM('yes', 'no'),
  isFirstResponderHealthcareEducation ENUM('yes', 'no'),
  householdSize INT,
  ownedHomeInLast3Years ENUM('yes', 'no'),
  monthlyHouseholdIncome INT,
  purchasePriceRange VARCHAR(255),
  monthlyRentOrMortgage INT,
  monthlyDebtObligations INT,
  creditScore VARCHAR(255),
  source VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🎨 Design System

### Colors
- **Primary (Teal-Blue)**: Trust, security, reliability
- **Secondary (Green)**: Growth, financial stability, new beginnings
- **Accent (Warm Orange)**: Optimism, action, warmth

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, professional

### Components
- Built with shadcn/ui for consistency
- Tailwind utilities for custom styling
- Mobile-first responsive design

## 📈 SEO Strategy

### Target Keywords
- Primary: "ohio down payment assistance"
- Secondary: "ohio first time home buyer", "down payment grants ohio"
- Long-tail: "fha loans ohio", "va loans ohio", "usda loans ohio"

### Expected Results
- **Month 1-3**: Page 2-3 rankings
- **Month 3-6**: Page 1 rankings
- **Month 6+**: Top 5 positions

### Content Strategy
1. Homepage: Comprehensive overview
2. Programs page: Detailed program information
3. Future: Blog posts, city-specific pages

## 📱 Instagram Strategy

### Landing Page (`/ig`)
- Simplified mobile-first design
- "As Seen On Instagram" badge
- Optimized for thumb-friendly interaction
- Fast load times

### Expected Conversion Rates
- Instagram traffic: 40-60% (vs industry 15-25%)
- Organic search: 15-25%
- Overall: 20-35%

### Content Calendar
See `/home/ubuntu/ohio_dpa_30_day_content_calendar.md` for detailed Instagram content strategy

## 🔒 NMLS Compliance

All pages include required disclosures:
- Geneva Financial LLC | NMLS #42056
- Licensed in Ohio
- Equal Housing Opportunity
- Subject to credit approval and program availability

## 🚢 Deployment

### Manus Platform (Recommended)
1. Create checkpoint: `webdev_save_checkpoint`
2. Click "Publish" button in Management UI
3. Configure custom domain (optional)

### Manual Deployment
1. Build the application:
```bash
pnpm build
```

2. Set environment variables on your hosting platform

3. Start the server:
```bash
pnpm start
```

## 📊 Analytics

### Tracking
- Built-in Manus analytics for UV/PV
- UTM parameters for campaign tracking
- Source tracking in database (instagram, google, direct)

### Key Metrics
- Form submission rate
- Lead quality score
- Time to contact
- Conversion to application

## 🤝 Contributing

This is a private project for Geneva Financial LLC. For questions or support, contact the development team.

## 📄 License

Proprietary - © 2025 Geneva Financial LLC. All rights reserved.

## 🔗 Links

- **GitHub Repository**: https://github.com/CoryLawsonxMortgageAI/ohio-downpayment-help
- **Geneva Financial**: https://www.genevafi.com
- **NMLS Consumer Access**: https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/42056

## 📞 Support

For technical support or questions:
- Create an issue on GitHub
- Contact: Geneva Financial LLC
- NMLS #42056

---

**Built with ❤️ for Ohio homebuyers**

*Helping families achieve the dream of homeownership through down payment assistance programs.*

