# Trade Pulse 🏪 (On Going Project)

**Next-Generation Hardware & Building Materials Management System**

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A comprehensive, modern business management system designed for hardware stores, building material suppliers, and retail chains. Built with scalability, real-time capabilities, and AI-powered insights.

## 🎯 Project Vision

To create an enterprise-grade business management platform that demonstrates sophisticated system architecture, complex business logic, and modern development practices while solving real-world business problems.

## 📋 Table of Contents

- [Architecture Decision](#-architecture-decision)
- [User Roles & Permissions](#-user-roles--permissions)
- [Core Modules](#-core-modules)
- [Development Roadmap](#-development-roadmap)
- [Technical Stack](#-technical-stack)
- [Database Schema](#-database-schema)
- [API Design](#-api-design)
- [AI/ML Features](#-aiml-features)
- [Deployment Strategy](#-deployment-strategy)
- [Success Metrics](#-success-metrics)

## 🏗️ Architecture Decision

**Modular Monolith Architecture** - A single, well-structured codebase with clearly separated modules that can be extracted into microservices when scale demands.

### Why Monolith?

- ✅ **Faster development** for a solo developer
- ✅ **Simpler deployment** and debugging
- ✅ **Easier data consistency**
- ✅ **NestJS excels** at modular monoliths
- ✅ **Can scale** to thousands of users
- ✅ **Extractable modules** when needed

### Permission Matrix:

| Permission          | Owner | Manager | Cashier | Inventory | Accountant | Customer |
| ------------------- | ----- | ------- | ------- | --------- | ---------- | -------- |
| View all sales      | ✅    | ✅      | ❌      | ❌        | ✅         | ❌       |
| Create sale         | ✅    | ✅      | ✅      | ❌        | ❌         | ❌       |
| Manage products     | ✅    | ✅      | ❌      | ✅        | ❌         | ❌       |
| Manage inventory    | ✅    | ✅      | ❌      | ✅        | ❌         | ❌       |
| View financial data | ✅    | ❌      | ❌      | ❌        | ✅         | ❌       |
| Manage customers    | ✅    | ✅      | Limited | ❌        | ✅         | ❌       |
| Generate reports    | ✅    | ✅      | ❌      | ❌        | ✅         | ❌       |

## 📦 Core Modules

### Module 1: Authentication & User Management

- [ ] Multi-store user management
- [ ] Role-Based Access Control (RBAC)
- [ ] Activity logging & audit trail
- [ ] Session management
- [ ] Password policies
- [ ] User profiles with photos

### Module 2: Product Catalog Management

- [ ] Product hierarchy (Category → Subcategory → Product)
- [ ] Multiple variants (Size, Color, Brand, Grade)
- [ ] Multiple units of measure (kg, pieces, boxes, meters)
- [ ] Barcode/QR code generation & printing
- [ ] Product images & specifications
- [ ] Batch/Lot number tracking
- [ ] Expiry date tracking (for paints, chemicals)
- [ ] Serial number tracking (for power tools)
- [ ] Minimum/Maximum stock levels
- [ ] Reorder point calculation
- [ ] Product lifecycle (Active/Discontinued/Seasonal)

### Module 3: Inventory Management

- [ ] Real-time stock tracking
- [ ] Multi-location inventory (Store + Warehouse)
- [ ] Stock transfers between locations
- [ ] Stock adjustment (damaged/expired/lost)
- [ ] Physical stock count interface
- [ ] Inventory valuation (FIFO/LIFO/Weighted Average)
- [ ] Low stock alerts (Email/SMS)
- [ ] Dead stock identification
- [ ] Inventory aging report
- [ ] Stock movement history

### Module 4: Point of Sale (POS)

- [ ] Fast keyboard-driven interface
- [ ] Barcode scanning (USB/Webcam)
- [ ] Quick product search
- [ ] Customer selection/creation
- [ ] Multiple payment methods (Cash, Card, UPI, Credit)
- [ ] Split bills functionality
- [ ] Returns & exchanges management
- [ ] Hold/resume transactions
- [ ] Draft invoices (save for later)
- [ ] Print/Email/SMS invoices
- [ ] Receipt customization
- [ ] Tax calculation (GST/VAT with HSN codes)

#### Discount System:

- [ ] Product-level discounts (Mark item as 5% off)
- [ ] Category-level discounts (All plumbing items 10% off)
- [ ] Customer-level discounts (Regular customer gets 15%)
- [ ] Bulk discounts (Buy 10+, get 20% off)
- [ ] Seasonal discounts (Monsoon sale)
- [ ] Combo discounts (Buy hammer + nails, get 5% off)
- [ ] Discount rules (Stackable, minimum purchase, valid dates)

### Module 5: Customer Relationship Management (CRM)

- [ ] Customer database with segmentation
- [ ] Credit management (Credit limit, payment terms)
- [ ] Outstanding balance tracking
- [ ] Payment reminder automation
- [ ] Customer loyalty program
- [ ] Sales history & preferences
- [ ] Bulk SMS/Email for promotions
- [ ] Customer rating (Good/Prompt/Default risk)
- [ ] Visit/Interaction tracking

### Module 6: Supplier & Purchase Management

- [ ] Supplier database with rating
- [ ] RFQ (Request for Quotation) management
- [ ] Purchase order creation & tracking
- [ ] Goods receipt with quality check
- [ ] Supplier payment tracking
- [ ] Price comparison between suppliers
- [ ] Supplier performance analytics
- [ ] Return to supplier (RTS)
- [ ] Purchase agreement/contract management

### Module 7: Financial Management

- [ ] Daily cash management
- [ ] Bank reconciliation
- [ ] Expense tracking
- [ ] Profit & Loss statement
- [ ] Balance sheet generation
- [ ] Cash flow statement
- [ ] Accounts receivable aging
- [ ] Accounts payable aging
- [ ] GST/VAT return preparation
- [ ] TDS/TCS tracking
- [ ] Financial year closing
- [ ] Budget vs Actual comparison

### Module 8: Reporting & Analytics

- [ ] Real-time business dashboard
- [ ] Sales reports (Daily, Weekly, Monthly, Yearly)
- [ ] Top selling products analysis
- [ ] Customer purchase patterns
- [ ] Inventory turnover ratio
- [ ] Gross margin analysis
- [ ] Employee performance reports
- [ ] Peak hour analysis
- [ ] Seasonal trends identification
- [ ] Comparative analysis (This year vs Last year)
- [ ] Export reports (PDF, Excel, CSV)

### Module 9: AI/ML & Advanced Features

- [ ] Sales forecasting using time series analysis
- [ ] Smart reordering suggestions
- [ ] Price optimization algorithms
- [ ] Customer churn prediction
- [ ] Fraud detection for transactions
- [ ] Product recommendation engine
- [ ] Business insights using LangChain/OpenAI
- [ ] Predictive inventory management
- [ ] Market basket analysis (what sells together)

## 🗺️ Development Roadmap

### Phase 1: Foundation (Weeks 1-4)

**Goal:** Working authentication + basic product management

#### Week 1-2: Setup & Authentication

- [ ] Project initialization (NestJS + Next.js)
- [ ] Database setup (PostgreSQL + TypeORM)
- [ ] User authentication (JWT + Refresh tokens)
- [ ] Role-based authorization system
- [ ] Basic user management UI

#### Week 3-4: Product Catalog

- [ ] Product entity with variants
- [ ] Category/subcategory management
- [ ] Product CRUD operations
- [ ] Image upload for products
- [ ] Barcode generation
- [ ] Product search & filtering

### Phase 2: Core Business (Weeks 5-8)

**Goal:** Complete inventory + basic POS

#### Week 5-6: Inventory Management

- [ ] Stock tracking system
- [ ] Inventory adjustments
- [ ] Low stock alerts
- [ ] Stock transfer between locations
- [ ] Inventory valuation methods

#### Week 7-8: Point of Sale

- [ ] POS interface (keyboard-driven)
- [ ] Cart management
- [ ] Customer selection
- [ ] Basic checkout process
- [ ] Receipt generation

### Phase 3: Business Operations (Weeks 9-12)

**Goal:** Complete CRM + Purchasing + Basic Finance

#### Week 9-10: CRM & Purchasing

- [ ] Customer management with credit
- [ ] Supplier management
- [ ] Purchase order system
- [ ] Goods receipt process

#### Week 11-12: Financial Basics

- [ ] Sales reporting
- [ ] Expense tracking
- [ ] Basic financial reports
- [ ] Tax calculations

### Phase 4: Advanced Features (Weeks 13-16)

**Goal:** AI features + Advanced reporting + Polish

#### Week 13-14: AI Integration

- [ ] Sales forecasting
- [ ] Smart reordering
- [ ] Business insights using LangChain
- [ ] Predictive analytics

#### Week 15-16: Polish & Advanced UI

- [ ] Real-time dashboard
- [ ] Advanced reporting
- [ ] Mobile-responsive PWA
- [ ] Performance optimization

### Phase 5: Deployment & Documentation (Week 17-18)

**Goal:** Production-ready deployment

- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Comprehensive documentation
- [ ] Demo data setup
- [ ] Performance testing

## 🛠️ Technical Stack

### Backend (NestJS)

- **Framework:** NestJS 10
- **Language:** TypeScript
- **ORM:** TypeORM
- **Database:** PostgreSQL 15
- **Caching:** Redis
- **Queue:** BullMQ (for background jobs)
- **Real-time:** WebSockets (Socket.io)
- **Validation:** class-validator + class-transformer
- **Authentication:** Passport.js + JWT
- **File Upload:** Multer
- **PDF Generation:** PDFKit
- **Email:** Nodemailer

### Frontend (Next.js 14)

- **Framework:** Next.js 14 (App Router)
- **UI Library:** shadcn/ui
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Data Fetching:** TanStack Query v5
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts
- **Tables:** TanStack Table
- **Date Handling:** date-fns
- **Notifications:** Sonner
- **Icons:** Lucide React

### AI/ML Integration

- **TypeScript ML:** brain.js, ml-regression, tensorflow.js
- **LangChain:** langchain (TypeScript version)
- **External APIs:** OpenAI, Google Cloud AI, AWS Forecast
- **Data Analysis:** simple-statistics, regression-js

### DevOps

- **Containerization:** Docker + Docker Compose
- **CI/CD:** GitHub Actions
- **Hosting:** Vercel (Frontend) + Railway/Render (Backend)
- **Monitoring:** Sentry
- **Analytics:** PostHog
- **Database Migrations:** TypeORM migrations
