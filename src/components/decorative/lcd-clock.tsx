"use client";

import { useEffect, useState } from "react";

/**
 * Physical LCD desk clock.
 * Intentionally separate from the archived paper flip clock: no animation
 * system, canvas, remote image, or third-party font is needed.
 */
const philippinesClock = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Manila",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h12",
});

type LcdTime = { hours: string; minutes: string; period: "AM" | "PM" };

function getPhilippineTime(now: Date): LcdTime {
  const parts = philippinesClock.formatToParts(now);
  const find = (type: Intl.DateTimeFormatPartTypes) => parts.find(p => p.type === type)?.value ?? "";
  return {
    hours: find("hour").padStart(2, "0"),
    minutes: find("minute").padStart(2, "0"),
    period: find("dayPeriod").toUpperCase() === "PM" ? "PM" : "AM",
  };
}

const segmentPolygons = {
  a: "13,3 47,3 40,11 20,11",
  b: "49,5 57,12 57,45 49,51 45,43 45,18",
  c: "49,56 57,63 57,95 49,103 45,90 45,66",
  d: "13,105 47,105 40,97 20,97",
  e: "11,56 15,66 15,90 11,103 3,95 3,63",
  f: "11,5 15,18 15,43 11,51 3,45 3,12",
  g: "13,54 21,49 39,49 47,54 39,59 21,59",
} as const;

type Segment = keyof typeof segmentPolygons;

const digitSegments: Record<string, readonly Segment[]> = {
  "0": ["a", "b", "c", "d", "e", "f"],
  "1": ["b", "c"],
  "2": ["a", "b", "g", "e", "d"],
  "3": ["a", "b", "g", "c", "d"],
  "4": ["f", "g", "b", "c"],
  "5": ["a", "f", "g", "c", "d"],
  "6": ["a", "f", "g", "e", "c", "d"],
  "7": ["a", "b", "c"],
  "8": ["a", "b", "c", "d", "e", "f", "g"],
  "9": ["a", "b", "c", "d", "f", "g"],
};

function LcdDigit({ digit }: { digit: string }) {
  const active = digitSegments[digit] ?? [];
  return (
    <svg
      className="lcd-digit"
      viewBox="0 0 60 108"
      aria-hidden="true"
      focusable="false"
    >
      {Object.entries(segmentPolygons).map(([segment, points]) => (
        <polygon
          key={segment}
          points={points}
          className={active.includes(segment as Segment) ? "lcd-segment-on" : "lcd-segment-off"}
        />
      ))}
    </svg>
  );
}

function Colon() {
  return (
    <svg className="lcd-colon" viewBox="0 0 18 108" aria-hidden="true" focusable="false">
      <circle cx="9" cy="39" r="5.5" />
      <circle cx="9" cy="78" r="5.5" />
    </svg>
  );
}

export function LcdClock() {
  // Stable initial markup for Next.js static export, then hydrate local time.
  const [time, setTime] = useState<LcdTime>({ hours: "12", minutes: "00", period: "AM" });

  useEffect(() => {
    const update = () => setTime(getPhilippineTime(new Date()));
    update();
    const interval = window.setInterval(update, 1000);
    document.addEventListener("visibilitychange", update);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  const { hours, minutes, period } = time;
  const displayTime = `${hours}:${minutes}`;
  return (
    <div
      id="lcd-clock"
      className="clock-tile lcd-clock"
      data-drag-asset
      data-testid="lcd-clock"
      data-time={displayTime}
      data-period={period}
      role="timer"
      aria-live="off"
      aria-label={`Philippine time: ${displayTime} ${period}`}
      title="Philippine time · drag to move"
    >
      <div className="lcd-clock-front">
        <div className="lcd-clock-window">
          <div className="lcd-clock-glass">
            <div className="lcd-clock-digits" aria-hidden="true">
              <LcdDigit digit={hours[0]} />
              <LcdDigit digit={hours[1]} />
              <Colon />
              <LcdDigit digit={minutes[0]} />
              <LcdDigit digit={minutes[1]} />
              <span className="lcd-meridiem">{period}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
