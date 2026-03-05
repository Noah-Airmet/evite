export default function PhotosLink() {
  // TODO: Replace with actual Google Photos album link
  const photosUrl = "#";

  return (
    <section className="px-4 pb-12 flex justify-center">
      <div className="w-full max-w-lg bg-cream rounded-2xl p-6 shadow-md text-center">
        <h2 className="font-[family-name:var(--font-dancing-script)] text-3xl text-navy mb-3">
          Shared Photos
        </h2>
        <p className="text-navy-light text-sm mb-4">
          Share your photos from the party!
        </p>
        <a
          href={photosUrl}
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
              d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909-4.72-4.72a.75.75 0 00-1.06 0L2.5 11.06zm12-2.56a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              clipRule="evenodd"
            />
          </svg>
          Open Photo Album
        </a>
      </div>
    </section>
  );
}
