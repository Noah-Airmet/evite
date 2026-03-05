# Alyssa's Bachelorette Party Evite

## Overview
A single-page web app serving as a digital invitation for Alyssa Dall's bachelorette party. Guests open the link, see the invite, get event details, and can RSVP + sign up to bring a treat.

## Tech Stack
- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (Postgres)
- **Hosting**: Vercel

## Design
- **Background**: Soft pink/blush (#FDF2F0)
- **Cards**: Cream (#F5F0E8) matching the invite image
- **Text**: Navy (#1B3A5C) matching invite illustrations
- **Accents**: Gold/warm tones
- **Heading font**: Script/handwritten (Google Fonts — "Dancing Script" or similar)
- **Body font**: Clean sans-serif
- **Vibe**: Cute, feminine, hand-drawn feel matching the invite artwork

## Page Sections

### 1. Hero — Invite Card
- The invite image displayed as a card, centered
- Decorative envelope shape behind it (CSS/SVG)
- Soft pink background

### 2. Event Details
- **When**: Friday, May 1 | 6:30 PM - 11:00 PM
- **Where**: 4422 Millie Lacs Dr, South Jordan, UT 84009
  - Google Maps static image or screenshot
  - "Get Directions" button linking to Google Maps
- **Details**: [placeholder — wife to fill in]

### 3. Shared Photos
- Button/card linking to a shared Google Photos album
- [placeholder URL — to be added]

### 4. Add to Calendar
- "Add to Google Calendar" — pre-filled Google Calendar event URL
- "Add to Apple Calendar" — downloadable .ics file
- Event details: Alyssa's Bachelorette Party, May 1 2025, 6:30-11 PM, 4422 Millie Lacs Dr South Jordan UT 84009

### 5. RSVP + Treat Signup
- Displays a list of everyone who has RSVP'd and what treat they're bringing
- Form with two fields:
  - Your Name (required)
  - What treat are you bringing? (optional)
- Submit button
- On submit: saves to Supabase, list refreshes to show new entry
- No authentication, no edit/delete — if someone needs to change their treat, they re-submit or the host fixes it in Supabase directly

## Database Schema (Supabase)

### `rsvps` table
| Column     | Type                     | Notes                          |
|------------|--------------------------|--------------------------------|
| id         | uuid (PK)                | auto-generated                 |
| name       | text                     | required                       |
| treat      | text                     | optional                       |
| created_at | timestamp with time zone | auto-generated                 |

### Row Level Security
- Public SELECT (anyone can read RSVPs)
- Public INSERT (anyone can add an RSVP)
- No UPDATE or DELETE from client

## File Structure
```
app/
  page.tsx          — main page composing all sections
  layout.tsx        — root layout, fonts, metadata
  globals.css       — tailwind + custom styles
components/
  Hero.tsx          — invite image + envelope
  Details.tsx       — date, location, details cards
  PhotosLink.tsx    — google photos album link
  Calendar.tsx      — add-to-calendar buttons
  RSVP.tsx          — RSVP form + treat signup list
lib/
  supabase.ts       — supabase client initialization
public/
  invite.png        — the invite image
```

## Non-Goals
- User authentication / accounts
- Edit or delete RSVPs from the client
- Mobile app
- Multi-event support
- Email/SMS sending
