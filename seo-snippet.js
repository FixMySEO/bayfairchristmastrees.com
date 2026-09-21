// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.bayfairchristmastrees.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.bayfairchristmastrees.com/","title_tag":"Christmas trees San Leandro | Bayfair Christmas Trees","meta_description":"Fresh-cut Christmas trees in the Bay Area, including Douglas Fir, Noble Fir, and Nordman Fir, plus custom flocking services, tree stands, and holiday delivery service."},{"page_url":"https://www.bayfairchristmastrees.com/about","title_tag":"Bay Area Christmas trees | Family-owned Bayfair lot","meta_description":"Family-owned Christmas tree lot at Bayfair Center offering fresh-cut Douglas Fir, Noble Fir, and Nordman Fir trees, custom flocking services, and convenient Bay Area delivery."}],"keywords":["Christmas trees San Leandro","Bay Area Christmas trees","Fresh-cut Christmas trees","Douglas Fir trees","Noble Fir trees","Nordman Fir trees","Custom flocking services","Tree stands and accessories","Holiday delivery service","Family-owned Christmas tree lot"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.bayfairchristmastrees.com/#localbusiness",
  "name": "Christmas Tree Lot at Bayfair",
  "url": "https://www.bayfairchristmastrees.com/",
  "description": "Family-owned Christmas tree lot at Bayfair Center in San Leandro, offering fresh-cut Douglas Fir, Noble Fir, and Nordman Fir Christmas trees, custom flocking, tree stands, holiday accessories, and delivery services across the Bay Area for over 30 years.",
  "image": [
    "https://static.wixstatic.com/media/8cbcb6_63d548aa7a9e49e79b6a04d4019d2bcc~mv2.png/v1/fill/w_940,h_530,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4258_HEIC.png",
    "https://static.wixstatic.com/media/8cbcb6_c0672b763aae40b8ae4d647009917c07~mv2.jpg/v1/fit/w_480,h_854,q_90,enc_avif,quality_auto/8cbcb6_c0672b763aae40b8ae4d647009917c07~mv2.jpg",
    "https://static.wixstatic.com/media/8cbcb6_7c242ff9a7a545f1b172050aa09b4356~mv2.png/v1/fit/w_480,h_1040,q_90,enc_avif,quality_auto/8cbcb6_7c242ff9a7a545f1b172050aa09b4356~mv2.png",
    "https://static.wixstatic.com/media/8cbcb6_94d3fdb2ec304d79a419d52f672193ce~mv2.jpg/v1/fit/w_480,h_854,q_90,enc_avif,quality_auto/8cbcb6_94d3fdb2ec304d79a419d52f672193ce~mv2.jpg",
    "https://static.wixstatic.com/media/8cbcb6_29ef7cf5d2e7483fac8d3e9ceb760a7a~mv2.jpg/v1/fit/w_480,h_854,q_90,enc_avif,quality_auto/8cbcb6_29ef7cf5d2e7483fac8d3e9ceb760a7a~mv2.jpg",
    "https://static.wixstatic.com/media/8cbcb6_9b53e5546d974ccaaaacf3668ffa12ec~mv2.jpg/v1/fit/w_480,h_645,q_90,enc_avif,quality_auto/8cbcb6_9b53e5546d974ccaaaacf3668ffa12ec~mv2.jpg",
    "https://static.wixstatic.com/media/8cbcb6_66a84332bb29417eb1068abb7735828e~mv2.png/v1/fit/w_960,h_722,q_90,enc_avif,quality_auto/8cbcb6_66a84332bb29417eb1068abb7735828e~mv2.png",
    "https://static.wixstatic.com/media/8cbcb6_81e9467b052b44edb918967981f1eb44~mv2.png/v1/fit/w_480,h_641,q_90,enc_avif,quality_auto/8cbcb6_81e9467b052b44edb918967981f1eb44~mv2.png",
    "https://static.wixstatic.com/media/8cbcb6_63d548aa7a9e49e79b6a04d4019d2bcc~mv2.png/v1/fit/w_480,h_641,q_90,enc_avif,quality_auto/8cbcb6_63d548aa7a9e49e79b6a04d4019d2bcc~mv2.png"
  ],
  "telephone": "+1-925-980-4079",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "15555 E. 14th St.",
    "addressLocality": "San Leandro",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "San Leandro"
    },
    {
      "@type": "City",
      "name": "Hayward"
    },
    {
      "@type": "City",
      "name": "Castro Valley"
    },
    {
      "@type": "City",
      "name": "Oakland"
    },
    {
      "@type": "City",
      "name": "Fremont"
    },
    {
      "@type": "City",
      "name": "Pleasanton"
    }
  ],
  "sameAs": [
    "https://www.bayfairchristmastrees.com/about"
  ],
  "logo": "https://static.wixstatic.com/media/8cbcb6_3cb9e2dfff2944fdaf0574ecca4134d9%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/8cbcb6_3cb9e2dfff2944fdaf0574ecca4134d9%7Emv2.jpg",
  "founder": {
    "@type": "Person",
    "name": "Family-owned business"
  },
  "slogan": "Fresh-cut Christmas trees and holiday services at Bayfair Center in San Leandro, serving the Bay Area for over 30 years.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Christmas Tree Products and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Fresh-Cut Christmas Trees",
        "description": "Premium selection of fresh-cut Douglas Fir, Noble Fir, and Nordman Fir Christmas trees for homes across the Bay Area."
      },
      {
        "@type": "Offer",
        "name": "Custom Flocking",
        "description": "Custom flocking services to give Christmas trees a snowy, wintry appearance, available for trees of all sizes."
      },
      {
        "@type": "Offer",
        "name": "Tree Stands and Holiday Accessories",
        "description": "Sturdy tree stands and holiday accessories to support and decorate fresh-cut Christmas trees."
      },
      {
        "@type": "Offer",
        "name": "Tree Delivery Service",
        "description": "Convenient Christmas tree delivery service across the Bay Area, bringing fresh trees directly to customers' homes."
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
