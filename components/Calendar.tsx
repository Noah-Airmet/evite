"use client";

export default function Calendar() {
  const eventTitle = "Alyssa's Bachelorette Party";
  const eventLocation = "4422 Millie Lacs Dr, South Jordan, UT 84009";
  const eventDescription =
    "Bachelorette party for Alyssa (soon to be) Dall! Don't forget to bring a treat to share.";
  // May 1, 2025, 6:30 PM - 11:00 PM MDT (UTC-6)
  const startUTC = "20250502T003000Z"; // 6:30 PM MDT = 00:30 UTC next day
  const endUTC = "20250502T050000Z"; // 11:00 PM MDT = 05:00 UTC next day

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startUTC}/${endUTC}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;

  function downloadICS() {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Evite//Bachelorette//EN",
      "BEGIN:VEVENT",
      `DTSTART:${startUTC}`,
      `DTEND:${endUTC}`,
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDescription}`,
      `LOCATION:${eventLocation}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "bachelorette-party.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <section className="px-4 pb-12 flex justify-center">
      <div className="w-full max-w-lg bg-cream rounded-2xl p-6 shadow-md text-center">
        <h2 className="font-[family-name:var(--font-dancing-script)] text-3xl text-navy mb-4">
          Add to Calendar
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-navy text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-navy-light transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h1.25A2.75 2.75 0 0119 6.75v8.5A2.75 2.75 0 0116.25 18H3.75A2.75 2.75 0 011 15.25v-8.5A2.75 2.75 0 013.75 4H5V2.75A.75.75 0 015.75 2zm-2 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H3.75z"
                clipRule="evenodd"
              />
            </svg>
            Google Calendar
          </a>
          <button
            onClick={downloadICS}
            className="inline-flex items-center justify-center gap-2 bg-navy text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-navy-light transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
            Apple Calendar
          </button>
        </div>
      </div>
    </section>
  );
}
