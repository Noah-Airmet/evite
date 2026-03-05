import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 pb-32 pt-40">
      <div
        className="hero-envelope-scene mt-16 sm:mt-24"
        style={{ perspective: "1400px" }}
      >
        <div className="hero-envelope-shell">
          <div className="hero-envelope-back" />

          <div className="hero-card-mask">
            <div className="hero-invite-card hero-invite-card-back">
              <Image
                src="/invite.png"
                alt="Alyssa's Bachelorette Party Invitation - Alyssa? A bride? Shut up! Join us for a bachelorette party honoring Alyssa (soon to be) Dall, May 1, 2025, 6:30 PM - 11:00 PM"
                width={400}
                height={560}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="hero-invite-card hero-invite-card-front" aria-hidden>
            <Image
              src="/invite.png"
              alt=""
              width={400}
              height={560}
              className="h-auto w-full"
            />
          </div>

          <div className="hero-envelope-fold hero-envelope-fold-left" />
          <div className="hero-envelope-fold hero-envelope-fold-right" />

          <div className="hero-envelope-pocket" />

          <div className="hero-envelope-flap" aria-hidden />
        </div>
      </div>
    </section>
  );
}
