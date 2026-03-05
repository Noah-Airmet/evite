export default function Details() {
  const googleMapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=4422+Millie+Lacs+Dr,+South+Jordan,+UT+84009";
  const appleMapsUrl =
    "https://maps.apple.com/?daddr=4422+Millie+Lacs+Dr,+South+Jordan,+UT+84009";
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

        <div className="flex gap-3 justify-center flex-wrap">
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
            Google Maps
          </a>
          <a
            href={appleMapsUrl}
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
            Apple Maps
          </a>
        </div>
      </div>

      {/* Details Card */}
      <div className="w-full bg-cream rounded-2xl p-6 shadow-md text-center">
        <h2 className="font-[family-name:var(--font-dancing-script)] text-3xl text-navy mb-3">
          Details
        </h2>
        {/* Morning Option */}
        <div className="mb-5 rounded-xl bg-blush/60 px-4 py-4">
          <h3 className="font-semibold text-navy text-sm uppercase tracking-wide mb-1">
            Morning Option
          </h3>
          <p className="text-navy-light text-sm leading-relaxed">
            For anyone who can make it before she heads to work, we&apos;ll be
            doing facials or mani/pedis to kick off the day!
          </p>
          <p className="text-navy-light text-sm mt-2">
            RSVP to Kiera by April 30th:{" "}
            <a
              href="tel:+13855221614"
              className="font-medium text-navy underline"
            >
              (385) 522-1614
            </a>
          </p>
        </div>

        {/* Evening Party */}
        <div className="space-y-2 text-left mb-5">
          <h3 className="font-semibold text-navy text-sm uppercase tracking-wide text-center">
            Evening Party
          </h3>
          <p className="text-navy-light text-base">
            <span className="font-semibold text-navy">Theme:</span> The Bridal
            Diaries
          </p>
          <p className="text-navy-light text-base">
            <span className="font-semibold text-navy">Attire:</span> Pajamas
            encouraged!!
          </p>
          <div className="pt-1">
            <p className="font-semibold text-navy text-base mb-1">
              What&apos;s on the agenda:
            </p>
            <ul className="list-disc list-inside text-navy-light text-sm space-y-1 pl-1">
              <li>Mingling, photo ops, &amp; TikToks</li>
              <li>Bachelorette-themed games</li>
              <li>Gifts &amp; celebrating our bride-to-be</li>
            </ul>
          </div>
        </div>

        {/* Lingerie Sizes */}
        <details className="rounded-xl bg-blush/60 px-4 py-3 text-sm text-navy-light mb-4 group">
          <summary className="flex items-center justify-center gap-1.5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            If you&apos;d like to gift her lingerie, tap dropdown arrow for sizes
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 transition-transform group-open:rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <p className="font-medium text-navy mt-2">Top: 38DD &middot; Bottoms: 2XL</p>
        </details>

        {/* Closing */}
        <p className="italic text-navy-light text-sm">
          Genovia awaits&hellip; but first, a royal bachelorette. Cannot wait to
          celebrate our girl!
        </p>
      </div>
    </section>
  );
}
