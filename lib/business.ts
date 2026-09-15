/* ============================================================
   Business constants — single source of truth for the
   digital review card at /review.
============================================================ */

export const SITE_URL = 'https://blackswanpainting.ca';

export const BUSINESS_NAME = 'Black Swan Painting';
export const BUSINESS_TAGLINE = 'Painting & Renovations';
export const BUSINESS_CITY = 'Chilliwack, BC';
export const BUSINESS_ADDRESS = '46665 Emerald Dr, Chilliwack, BC V2P 3V4';

export const BUSINESS_PHONE = '(604) 997-7234';
export const BUSINESS_PHONE_TEL = '+16049977234';
export const BUSINESS_EMAIL = 'helloblackswanpainting@gmail.com';

/* ------------------------------------------------------------
   GOOGLE REVIEW LINK
   ------------------------------------------------------------
   Fill in ONE of the two below and the card + QR update everywhere.

   1. GOOGLE_REVIEW_SHORT_LINK — from Google Business Profile →
      "Ask for reviews" → copy link.  Looks like:
        https://g.page/r/CXXXXXXXXXXXXX/review

   2. GOOGLE_PLACE_ID — from https://developers.google.com/maps/documentation/places/web-service/place-id
      Looks like: ChIJXXXXXXXXXXXXXXXXXXXXXXX

   NOTE: the ID below is the BUSINESS listing (CID 8592418254516412413 /
   FID 0x54843f0c3691cf5f:0x773e66e0be085ffd), not the street address at
   46665 Emerald Dr — those are two separate Google entities and only the
   business one collects reviews for Black Swan Painting.

   Until one is set, the buttons fall back to a Google Maps search
   for the business, which still lands the customer on the listing.
------------------------------------------------------------ */
export const GOOGLE_REVIEW_SHORT_LINK = '';
export const GOOGLE_PLACE_ID = 'ChIJX8-RNgw_hFQR_V8IvuBmPnc';

const MAPS_QUERY = encodeURIComponent(`${BUSINESS_NAME}, ${BUSINESS_ADDRESS}`);

/** Opens the business listing on Google Maps (directions / profile). */
export const GOOGLE_MAPS_URL = GOOGLE_PLACE_ID
  ? `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}&query_place_id=${GOOGLE_PLACE_ID}`
  : `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

/** Opens Google's write-a-review dialog for the business. */
export const GOOGLE_REVIEW_URL =
  GOOGLE_REVIEW_SHORT_LINK ||
  (GOOGLE_PLACE_ID
    ? `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
    : GOOGLE_MAPS_URL);

/** True once a real review destination is configured. */
export const HAS_REVIEW_LINK = Boolean(GOOGLE_REVIEW_SHORT_LINK || GOOGLE_PLACE_ID);

/* Social proof shown next to the review CTAs. These are a manual snapshot —
   bump them when the profile moves (currently 5.0 from 16 reviews). */
export const GOOGLE_RATING = '5.0';
export const GOOGLE_REVIEW_COUNT = 16;

/** The in-site digital review card. */
export const REVIEW_PAGE_PATH = '/review';

/** What the QR code on the card encodes. */
export const REVIEW_PAGE_URL = `${SITE_URL}/review`;
