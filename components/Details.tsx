export default function Details() {
  const googleMapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=4422+Millie+Lacs+Dr,+South+Jordan,+UT+84009";
  const googleMapsEmbedUrl =
    "https://www.google.com/maps?q=4422+Millie+Lacs+Dr,+South+Jordan,+UT+84009&output=embed";

  return (
    <section className="px-4 pb-12 flex flex-col items-center gap-6 max-w-lg mx-auto">
      {/* Date & Time Card */}
      <div className="w-full bg-cream rounded-2xl p-6 shadow-md text-center">
        <h2 className="font-[family-name:var(--font-dancing-script)] text-3xl text-navy mb-3">
          When
        </h2>
        <p className="text-lg font-semibold text-navy">Friday, May 1st</p>
        <p className="text-navy-light text-base">6:30 PM &ndash; 11:00 PM</p>
      </div>

      {/* Location Card */}
      <div className="w-full bg-cream rounded-2xl p-6 shadow-md text-center">
        <h2 className="font-[family-name:var(--font-dancing-script)] text-3xl text-navy mb-3">
          Where
        </h2>
        <p className="text-navy text-base mb-1">4422 Millie Lacs Dr</p>
        <p className="text-navy-light text-sm mb-4">South Jordan, UT 84009</p>

        {/* Map embed */}
        <div className="w-full rounded-xl overflow-hidden shadow-sm mb-4">
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Event location map"
          />
        </div>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-navy text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-navy-light transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
              clipRule="evenodd"
            />
          </svg>
          Get Directions
        </a>
      </div>

      {/* Details Card */}
      <div className="w-full bg-cream rounded-2xl p-6 shadow-md text-center">
        <h2 className="font-[family-name:var(--font-dancing-script)] text-3xl text-navy mb-3">
          Details
        </h2>
        <p className="text-navy-light text-base leading-relaxed">
          Join us for a night of fun, food, and celebrating the bride-to-be!
          Everyone is asked to bring a treat to share &mdash; sign up below so
          we don&apos;t end up with 9 plates of brownies (unless we want to, no
          judgment).
        </p>
      </div>
    </section>
  );
}
