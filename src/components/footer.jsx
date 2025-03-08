import React from "react";

const Footer = () => (
  <footer class="lg:snap-center h-1/2 box-border w-full relative mt-1/2 bg-black/50 backdrop-blur-sm p-10">
    <div class="md:grid grid-cols-2 w-full text-white">
      <div class="font-ClashDisplayBold flex flex-col">
        <h1 class="font-clash text-4xl mb-2 text-mywhite">macher.studios</h1>
        <a class="hover:underline text-mywhite" href="/imprint">
          Impressum
        </a>
        <a class="hover:underline text-mywhite" href="/privacy">
          Datenschutz
        </a>
      </div>
      <div class="flex flex-col">
        <h1 class="font-clash text-4xl mb-2 text-mywhite">Kontakt</h1>
        <a
          href="mailto:m.schoellhammer@edu.letteverein.berlin"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline text-mywhite"
        >
          E-Mail
        </a>
      </div>
    </div>
    <div class="absolute bottom-10 left-10 text-mywhite">
      © Copyright macher.studios 2025 - All rights reserved.
    </div>
  </footer>
);

export default Footer;
