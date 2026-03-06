import Hero from "@/components/Hero";
import Details from "@/components/Details";
import PhotosLink from "@/components/PhotosLink";
import Calendar from "@/components/Calendar";
import RSVP from "@/components/RSVP";

export default function Home() {
  return (
    <main className="min-h-screen bg-blush">
      {/* Decorative top border */}
      <div className="w-full h-1 bg-gradient-to-r from-pink-soft via-gold-light to-pink-soft" />

      <Hero />

      {/* Divider */}
      <div className="flex justify-center pb-8">
        <div className="flex items-center gap-3">
          <div className="w-16 h-px bg-gold-light" />
          <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          <div className="w-16 h-px bg-gold-light" />
        </div>
      </div>

      <Details />
      <RSVP />
      <PhotosLink />
      <Calendar />

      {/* Footer */}
      <footer className="text-center pb-8 text-navy-light/50 text-xs">
        Made with love for Alyssa&apos;s big day
      </footer>
    </main>
  );
}
