import React from "react";
import { Volume2 } from "lucide-react";

export default function BookingComProject() {
  return (
    <main className="p-4 space-y-10 max-w-xl mx-auto text-base">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome to Our Booking.com Project</h1>
        <p>This site explores challenges and innovative mobile solutions for Booking.com, created as part of a university project.</p>
        <p>Scroll down to explore!</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">The Trust Challenge at Booking.com</h2>
        <div className="p-4 border rounded-xl shadow-sm space-y-2">
          <p>Booking.com operates globally, but recent concerns have emerged regarding platform trust and service transparency. The European Commission highlighted misleading pricing practices. Locally, in the UK, algorithmic bias impacts smaller hotel listings. As Booking.com tries to maintain a consistent user experience, regional legal and cultural expectations vary — causing friction and reducing trust. The balance of global scale with local relevance is a central issue.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Proposed Mobile-Friendly Solutions</h2>
        <div className="p-4 border rounded-xl shadow-sm space-y-2">
          <h3 className="text-xl font-bold">1. Localized Algorithm Transparency</h3>
          <p>Dashboards explain how hotel visibility is determined, improving fairness and trust.</p>
          <h3 className="text-xl font-bold">2. Verified Review System</h3>
          <p>Only guests with a confirmed stay can review, using visual trust badges.</p>
          <h3 className="text-xl font-bold">3. Multilingual Chatbot with Video</h3>
          <p>A bot helps users understand policies using region-specific language and embedded video tutorials.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Volume2 className="w-5 h-5" /> Voiceover Guide
        </h2>
        <audio controls className="w-full">
          <source src="/voiceover.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="p-4 border rounded-xl shadow-sm space-y-2">
          <p>Welcome to our Booking.com trust and transparency project. In this mobile-friendly site, you’ll explore how Booking.com can better support travelers and businesses. Start by reviewing the challenge, then scroll through our proposed solutions. Tap icons and demos to interact. Use the chatbot for real-time help. All content is mobile-optimized, and you can find full references in the final section. Thanks for visiting!</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">References</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><a href="https://ec.europa.eu/commission/presscorner/detail/en/IP_20_54" className="text-blue-600 underline" target="_blank">European Commission (2020)</a></li>
          <li>Hjalager, A-M. (2019). Journal of Hospitality & Tourism Tech.</li>
          <li>Smith, L., et al. (2022). IJ of Contemporary Hospitality Management.</li>
          <li>Buhalis, D. (2020). Tourism Review.</li>
          <li>Cobbe, J. et al. (2021). AI & Society.</li>
          <li>Kuo, C. et al. (2019). IJ of Hospitality Management.</li>
          <li>Xie, K. et al. (2017). Journal of Travel Research.</li>
          <li>Wijaya, B. et al. (2022). Journal of Digital Tourism.</li>
          <li>Ivanov, S., & Webster, C. (2021). Tourism Economics.</li>
          <li><a href="https://www.unwto.org/digital-transformation" className="text-blue-600 underline" target="_blank">UNWTO (2021)</a></li>
        </ul>
      </section>
    </main>
  );
}
