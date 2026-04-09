export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PT Girana Pratama Mandiri",
    description:
      "Penyedia jasa outsourcing profesional dan terpercaya di Indonesia. Layanan keamanan, kebersihan, administrasi, dan dukungan IT.",
    url: "https://giranapratama.co.id",
    telephone: "+6285860400838",
    email: "hr.girana@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Terusan Srimahi I No.32a",
      addressLocality: "Bandung",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.948988,
      longitude: 107.598184,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Outsourcing",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jasa Keamanan (Security Service)",
            description:
              "Layanan satuan pengamanan profesional untuk menjaga aset dan lingkungan bisnis Anda.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jasa Kebersihan (Cleaning Service)",
            description:
              "Petugas cleaning service terlatih untuk memastikan area kerja selalu bersih dan higienis.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Administrasi & Office Support",
            description:
              "Dukungan administrasi dan office support yang efisien dan profesional.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dukungan IT (IT Support)",
            description:
              "Tim IT support siap membantu kebutuhan teknologi informasi perusahaan Anda.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
