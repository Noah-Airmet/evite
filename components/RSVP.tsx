"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface RSVPEntry {
  id: string;
  name: string;
  treat: string | null;
  created_at: string;
}

export default function RSVP() {
  const [rsvps, setRsvps] = useState<RSVPEntry[]>([]);
  const [name, setName] = useState("");
  const [treat, setTreat] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRsvps();
  }, []);

  async function fetchRsvps() {
    const { data, error } = await supabase
      .from("rsvps")
      .select("*")
      .order("created_at", { ascending: true });

    if (!error && data) {
      setRsvps(data);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;

    setSubmitting(true);
    setError("");

    const { error: insertError } = await supabase
      .from("rsvps")
      .insert({ name: name.trim(), treat: treat.trim() || null });

    if (insertError) {
      setError("Something went wrong. Please try again!");
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
    setName("");
    setTreat("");
    setSubmitting(false);
    await fetchRsvps();
  }

  return (
    <section className="px-4 pb-16 flex justify-center">
      <div className="w-full max-w-lg">
        {/* Guest list */}
        {rsvps.length > 0 && (
          <div className="bg-cream rounded-2xl p-6 shadow-md mb-6">
            <h2 className="font-[family-name:var(--font-dancing-script)] text-3xl text-navy mb-4 text-center">
              Who&apos;s Coming
            </h2>
            <div className="space-y-3">
              {rsvps.map((rsvp) => (
                <div
                  key={rsvp.id}
                  className="flex items-center justify-between bg-blush/50 rounded-xl px-4 py-3"
                >
                  <span className="font-medium text-navy">{rsvp.name}</span>
                  {rsvp.treat && (
                    <span className="text-sm text-navy-light italic">
                      bringing {rsvp.treat}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RSVP Form */}
        <div className="bg-cream rounded-2xl p-6 shadow-md">
          <h2 className="font-[family-name:var(--font-dancing-script)] text-3xl text-navy mb-2 text-center">
            RSVP
          </h2>
          <p className="text-navy-light text-sm text-center mb-5">
            Let us know you&apos;re coming and what treat you&apos;ll bring!
          </p>

          {submitted ? (
            <div className="text-center py-4">
              <p className="text-navy text-lg font-medium mb-2">
                You&apos;re on the list! 🎉
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-navy-light underline hover:text-navy transition-colors"
              >
                Submit another RSVP
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Jane Doe"
                  className="w-full px-4 py-2.5 rounded-xl border border-pink-soft bg-white text-navy placeholder:text-navy-light/50 focus:outline-none focus:ring-2 focus:ring-gold-light focus:border-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="treat"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  What treat are you bringing?
                </label>
                <input
                  type="text"
                  id="treat"
                  value={treat}
                  onChange={(e) => setTreat(e.target.value)}
                  placeholder="Chocolate chip cookies, fruit tray, etc."
                  className="w-full px-4 py-2.5 rounded-xl border border-pink-soft bg-white text-navy placeholder:text-navy-light/50 focus:outline-none focus:ring-2 focus:ring-gold-light focus:border-gold"
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting || !name.trim()}
                className="w-full bg-navy text-cream py-3 rounded-full font-medium hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {submitting ? "Submitting..." : "Count Me In!"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
