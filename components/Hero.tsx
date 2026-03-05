import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-16 pb-20">
      {/* Envelope behind the card */}
      <div className="relative">
        {/* Envelope body */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%+40px)] h-[70%] bottom-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-envelope rounded-b-lg shadow-lg" />
            {/* Envelope flap */}
            <div
              className="absolute -top-12 left-0 right-0 h-24"
              style={{
                background: "var(--color-envelope-dark)",
                clipPath: "polygon(0 100%, 50% 0%, 100% 100%)",
              }}
            />
          </div>
        </div>

        {/* Invite card */}
        <div className="relative z-10 rounded-lg shadow-xl overflow-hidden bg-cream">
          <Image
            src="/invite.png"
            alt="Alyssa's Bachelorette Party Invitation - Alyssa? A bride? Shut up! Join us for a bachelorette party honoring Alyssa (soon to be) Dall, May 1, 2025, 6:30 PM - 11:00 PM"
            width={400}
            height={560}
            priority
            className="w-[320px] sm:w-[400px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
