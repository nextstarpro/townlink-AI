"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_EVENT, readConsent } from "./ConsentBanner";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
  interface Navigator {
    globalPrivacyControl?: boolean;
  }
}

function gpcOptOut(): boolean {
  if (typeof navigator === "undefined") return false;
  return navigator.globalPrivacyControl === true;
}

export default function MetaPixel() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (gpcOptOut()) {
      setAllowed(false);
      return;
    }
    setAllowed(readConsent() === "accepted");
    const onChange = (e: Event) => {
      if (gpcOptOut()) {
        setAllowed(false);
        return;
      }
      const detail = (e as CustomEvent).detail;
      setAllowed(detail === "accepted");
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!PIXEL_ID || !allowed) return null;
  return (
    <>
      <Script id="fb-pixel" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
          n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
          s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','${PIXEL_ID}');
          fbq('track','PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

export function trackLead(eventId: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {}, { eventID: eventId });
  }
}
