// ==========================================================================
// SIGMA ORANGE CAT — VECTOR DOODLE ART SYSTEM
// 100% Self-Contained Inline SVG Artwork (Zero External Image Dependencies)
// Recreates the exact Senior Dev Orange Cat with Browline Glasses & Tie
// ==========================================================================

const CAT_ART = {
  // Reusable Doodle Sparkle
  sparkle: `
    <svg class="doodle-sparkle-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 0L14.4 8.6L23 12L14.4 15.4L12 24L9.6 15.4L1 12L9.6 8.6Z"/>
    </svg>
  `,

  // Reusable Doodle Paw Print
  paw: `
    <svg class="doodle-paw-icon" viewBox="0 0 32 32" width="24" height="24" fill="currentColor">
      <ellipse cx="16" cy="22" rx="7" ry="6"/>
      <circle cx="8" cy="13" r="3.2"/>
      <circle cx="13" cy="9.5" r="3.2"/>
      <circle cx="19" cy="9.5" r="3.2"/>
      <circle cx="24" cy="13" r="3.2"/>
    </svg>
  `,

  // Hand-drawn Doodle Arrow
  doodleArrow: `
    <svg class="doodle-arrow-svg" viewBox="0 0 80 40" width="60" height="30" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 25 C25 35, 45 5, 70 18"/>
      <polyline points="60 12, 72 18, 64 28"/>
    </svg>
  `,

  // 1. MASTER HERO MASCOT — The Senior Dev Cat at his coding desk
  // Faithfully recreating Image 1 & 2: Ginger kitten in browline glasses, white collar, blue tie, monitor & plant
  heroMascot: `
    <svg class="cat-hero-master-svg" viewBox="0 0 420 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Gradients for doodle colored-pencil depth -->
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
        <radialGradient id="catFurGrad" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#FFA447"/>
          <stop offset="55%" stop-color="#F28C28"/>
          <stop offset="100%" stop-color="#D96B16"/>
        </radialGradient>
        <linearGradient id="tieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#253659"/>
          <stop offset="100%" stop-color="#152138"/>
        </linearGradient>
        <linearGradient id="warmBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF8EC"/>
          <stop offset="100%" stop-color="#FFE7C9"/>
        </linearGradient>
        <filter id="sketchTexture" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>

      <!-- Background Card with Soft Sketch Tint -->
      <rect x="8" y="8" width="404" height="404" rx="28" fill="url(#warmBg)" stroke="#35251D" stroke-width="3" stroke-dasharray="404, 0"/>
      
      <!-- Colored pencil sketch hatching in background -->
      <g stroke="#F28C28" stroke-width="1" opacity="0.18">
        <line x1="20" y1="40" x2="120" y2="20"/>
        <line x1="20" y1="60" x2="140" y2="30"/>
        <line x1="30" y1="80" x2="150" y2="50"/>
        <line x1="280" y1="380" x2="390" y2="350"/>
        <line x1="290" y1="400" x2="400" y2="370"/>
      </g>

      <!-- Background: Office Computer Monitor on the Right -->
      <g id="monitor-group">
        <!-- Monitor Stand -->
        <rect x="330" y="270" width="22" height="65" rx="4" fill="#334155" stroke="#35251D" stroke-width="2"/>
        <ellipse cx="341" cy="335" rx="36" ry="10" fill="#1E293B" stroke="#35251D" stroke-width="2"/>
        <!-- Monitor Body (Tilted perspective angle) -->
        <polygon points="215,80 395,50 405,290 225,315" fill="#0B101E" stroke="#35251D" stroke-width="3"/>
        <polygon points="222,88 388,60 398,282 232,306" fill="url(#screenGrad)"/>
        
        <!-- IDE Top Window Bar with colored circles -->
        <circle cx="236" cy="98" r="4" fill="#EF4444"/>
        <circle cx="248" cy="96" r="4" fill="#F59E0B"/>
        <circle cx="260" cy="94" r="4" fill="#10B981"/>
        <line x1="275" y1="92" x2="370" y2="78" stroke="#334155" stroke-width="3" stroke-linecap="round"/>

        <!-- Colorful Code Lines (Java IDE Syntax Highlight in Doodle Style) -->
        <g stroke-linecap="round" stroke-width="3.5">
          <!-- public class SeniorCat { -->
          <line x1="240" y1="120" x2="270" y2="115" stroke="#F43F5E"/>
          <line x1="276" y1="114" x2="310" y2="108" stroke="#38BDF8"/>
          <line x1="316" y1="107" x2="350" y2="102" stroke="#FBBF24"/>
          <!-- void codeReview() throws SigmaException -->
          <line x1="250" y1="138" x2="275" y2="134" stroke="#818CF8"/>
          <line x1="282" y1="133" x2="330" y2="125" stroke="#34D399"/>
          <line x1="336" y1="124" x2="365" y2="119" stroke="#F472B6"/>
          <!-- if (code == garbage) { -->
          <line x1="260" y1="156" x2="280" y2="153" stroke="#F43F5E"/>
          <line x1="286" y1="152" x2="320" y2="146" stroke="#38BDF8"/>
          <line x1="326" y1="145" x2="370" y2="138" stroke="#F87171"/>
          <!-- System.out.println("LGTM"); -->
          <line x1="270" y1="174" x2="340" y2="163" stroke="#FBBF24"/>
          <line x1="346" y1="162" x2="375" y2="157" stroke="#34D399"/>
          <!-- cat.drinkCoffee(); -->
          <line x1="270" y1="192" x2="330" y2="182" stroke="#38BDF8"/>
          <line x1="336" y1="181" x2="360" y2="177" stroke="#A78BFA"/>
          <!-- return 0; -->
          <line x1="250" y1="210" x2="290" y2="204" stroke="#F43F5E"/>
          <!-- more dense code rows -->
          <line x1="240" y1="228" x2="280" y2="222" stroke="#94A3B8"/>
          <line x1="286" y1="221" x2="340" y2="212" stroke="#34D399"/>
          <line x1="250" y1="246" x2="310" y2="236" stroke="#F472B6"/>
          <line x1="316" y1="235" x2="370" y2="226" stroke="#38BDF8"/>
          <line x1="260" y1="264" x2="350" y2="249" stroke="#FBBF24"/>
          <line x1="250" y1="280" x2="320" y2="269" stroke="#34D399"/>
        </g>
      </g>

      <!-- Background: Cute Desk Plant on Left -->
      <g id="desk-plant">
        <polygon points="35,270 58,270 54,305 39,305" fill="#D97706" stroke="#35251D" stroke-width="2"/>
        <path d="M46,270 C30,240 10,230 20,215 C32,225 44,245 46,270 Z" fill="#22C55E" stroke="#35251D" stroke-width="2"/>
        <path d="M46,270 C55,235 75,225 70,210 C58,220 50,245 46,270 Z" fill="#16A34A" stroke="#35251D" stroke-width="2"/>
        <path d="M46,270 C40,230 45,210 46,200 C52,210 50,235 46,270 Z" fill="#4ADE80" stroke="#35251D" stroke-width="1.8"/>
      </g>

      <!-- Keyboard on Desk (Foreground) -->
      <g id="keyboard">
        <polygon points="170,365 375,340 395,385 180,405" fill="#1E293B" stroke="#35251D" stroke-width="2"/>
        <!-- Key rows -->
        <g stroke="#475569" stroke-width="2">
          <line x1="185" y1="368" x2="370" y2="346"/>
          <line x1="188" y1="378" x2="376" y2="356"/>
          <line x1="192" y1="388" x2="382" y2="366"/>
        </g>
      </g>

      <!-- CAT BODY & CHEST -->
      <g id="cat-body">
        <!-- Shoulders / Torso -->
        <path d="M35,410 C45,300 85,270 145,270 C205,270 245,300 255,410 Z" fill="url(#catFurGrad)" stroke="#35251D" stroke-width="3"/>
        <!-- Tabby coat shoulder stripes -->
        <path d="M65,360 C80,340 110,345 115,355" fill="none" stroke="#B45309" stroke-width="4.5" stroke-linecap="round"/>
        <path d="M55,390 C75,370 105,375 110,385" fill="none" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
        <path d="M225,360 C210,340 180,345 175,355" fill="none" stroke="#B45309" stroke-width="4.5" stroke-linecap="round"/>
        <path d="M235,390 C215,370 185,375 180,385" fill="none" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
      </g>

      <!-- SIGNATURE WHITE COLLAR & NAVY TIE -->
      <g id="collar-and-tie">
        <!-- Tie Body (Behind Collar Tips) -->
        <polygon points="140,305 150,305 160,390 145,410 130,390" fill="url(#tieGrad)" stroke="#35251D" stroke-width="2.5"/>
        <!-- Silver Tie Bar / Clip -->
        <line x1="137" y1="352" x2="153" y2="352" stroke="#E2E8F0" stroke-width="3.5" stroke-linecap="round"/>
        
        <!-- Crisp White Shirt Collar Tips (Pointing sharply outward) -->
        <!-- Left Collar Lapel -->
        <polygon points="145,268 95,290 130,332 145,300" fill="#FFFFFF" stroke="#35251D" stroke-width="2.8"/>
        <!-- Right Collar Lapel -->
        <polygon points="145,268 195,290 160,332 145,300" fill="#FFFFFF" stroke="#35251D" stroke-width="2.8"/>
        <!-- Tie Knot (Centered at throat) -->
        <polygon points="138,295 152,295 156,312 145,318 134,312" fill="#1E293B" stroke="#35251D" stroke-width="2.5"/>
      </g>

      <!-- CAT HEAD -->
      <g id="cat-head">
        <!-- Ears -->
        <!-- Left Ear -->
        <polygon points="65,185 85,75 130,140" fill="#F28C28" stroke="#35251D" stroke-width="3"/>
        <polygon points="76,170 92,95 120,140" fill="#FFA5A5" stroke="#E11D48" stroke-width="1.2"/>
        <!-- Inner ear hair tufts -->
        <path d="M80,165 L105,135 M85,170 L112,142" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
        
        <!-- Right Ear -->
        <polygon points="225,185 205,75 160,140" fill="#F28C28" stroke="#35251D" stroke-width="3"/>
        <polygon points="214,170 198,95 170,140" fill="#FFA5A5" stroke="#E11D48" stroke-width="1.2"/>
        <!-- Inner ear hair tufts -->
        <path d="M210,165 L185,135 M205,170 L178,142" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Main Head Shape (Cute ginger tabby cheeks) -->
        <ellipse cx="145" cy="188" rx="80" ry="72" fill="url(#catFurGrad)" stroke="#35251D" stroke-width="3.2"/>
        
        <!-- Pale peach/white muzzle & chin area -->
        <path d="M115,225 C115,205 130,195 145,195 C160,195 175,205 175,225 C175,245 158,252 145,252 C132,252 115,245 115,225 Z" fill="#FFF4DF" stroke="#D96B16" stroke-width="1.5"/>

        <!-- Tabby Forehead Stripes: The iconic 'M' Mark -->
        <g stroke="#9A3412" stroke-width="3.5" stroke-linecap="round" fill="none">
          <!-- Center M Mark -->
          <path d="M135,122 L145,135 L155,122"/>
          <path d="M125,116 L135,132"/>
          <path d="M165,116 L155,132"/>
          <line x1="145" y1="137" x2="145" y2="152"/>
          <!-- Cheek Stripes Left -->
          <path d="M78,198 C92,198 102,204 108,212"/>
          <path d="M74,212 C88,212 98,218 104,226"/>
          <!-- Cheek Stripes Right -->
          <path d="M212,198 C198,198 188,204 182,212"/>
          <path d="M216,212 C202,212 192,218 186,226"/>
        </g>

        <!-- EYES: The Sigma/Judgemental Heavy-Lidded Gaze -->
        <g id="cat-eyes" class="cat-eyes-animated">
          <!-- Left Eye Sclera & Iris -->
          <g>
            <ellipse cx="112" cy="178" rx="16" ry="14" fill="#FEF08A"/>
            <!-- Dark amber iris with shaded top -->
            <ellipse cx="113" cy="178" rx="12" ry="12" fill="#78350F"/>
            <!-- Pupil -->
            <ellipse cx="113" cy="179" rx="8" ry="10" fill="#0F172A"/>
            <!-- Catchlight highlight dots -->
            <circle cx="110" cy="174" r="3.2" fill="#FFFFFF"/>
            <circle cx="116" cy="182" r="1.5" fill="#FFFFFF"/>
            <!-- Heavy-lidded sleepy upper eyelid (Judgemental Look) -->
            <path d="M96,172 Q112,166 128,172 L128,164 Q112,160 96,164 Z" fill="#D96B16" stroke="#35251D" stroke-width="2"/>
          </g>

          <!-- Right Eye Sclera & Iris -->
          <g>
            <ellipse cx="178" cy="178" rx="16" ry="14" fill="#FEF08A"/>
            <!-- Dark amber iris with shaded top -->
            <ellipse cx="177" cy="178" rx="12" ry="12" fill="#78350F"/>
            <!-- Pupil -->
            <ellipse cx="177" cy="179" rx="8" ry="10" fill="#0F172A"/>
            <!-- Catchlight highlight dots -->
            <circle cx="174" cy="174" r="3.2" fill="#FFFFFF"/>
            <circle cx="180" cy="182" r="1.5" fill="#FFFFFF"/>
            <!-- Heavy-lidded sleepy upper eyelid (Judgemental Look) -->
            <path d="M162,172 Q178,166 194,172 L194,164 Q178,160 162,164 Z" fill="#D96B16" stroke="#35251D" stroke-width="2"/>
          </g>
        </g>

        <!-- NOSE & MOUTH -->
        <g id="nose-and-mouth">
          <!-- Pink Tabby Nose -->
          <polygon points="145,212 138,202 152,202" rx="2" fill="#F43F5E" stroke="#35251D" stroke-width="1.8"/>
          <!-- Philtrum Line -->
          <line x1="145" y1="212" x2="145" y2="220" stroke="#35251D" stroke-width="2.2"/>
          <!-- The Classic Downturned Unimpressed Mouth -->
          <path d="M134,225 C138,220 142,220 145,220 C148,220 152,220 156,225" fill="none" stroke="#35251D" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Whisker Dots on Muzzle -->
          <circle cx="130" cy="216" r="1.2" fill="#78350F"/>
          <circle cx="125" cy="220" r="1.2" fill="#78350F"/>
          <circle cx="131" cy="223" r="1.2" fill="#78350F"/>
          <circle cx="160" cy="216" r="1.2" fill="#78350F"/>
          <circle cx="165" cy="220" r="1.2" fill="#78350F"/>
          <circle cx="159" cy="223" r="1.2" fill="#78350F"/>
        </g>

        <!-- THE ICONIC BROWLINE HIPSTER GLASSES (Crucial Identity Element) -->
        <g id="cat-glasses">
          <!-- Glass Lens Reflections (Subtle soft shine) -->
          <ellipse cx="112" cy="180" rx="25" ry="20" fill="rgba(255, 255, 255, 0.22)"/>
          <ellipse cx="178" cy="180" rx="25" ry="20" fill="rgba(255, 255, 255, 0.22)"/>
          <line x1="94" y1="184" x2="105" y2="170" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
          <line x1="160" y1="184" x2="171" y2="170" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.6"/>

          <!-- Thin White Lower Rims (Signature feature of reference cat!) -->
          <path d="M86,170 C86,196 136,196 136,170" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
          <path d="M154,170 C154,196 204,196 204,170" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
          
          <!-- Outer shadow for white rim -->
          <path d="M86,170 C86,196 136,196 136,170" fill="none" stroke="#35251D" stroke-width="1.2"/>
          <path d="M154,170 C154,196 204,196 204,170" fill="none" stroke="#35251D" stroke-width="1.2"/>

          <!-- Bold Black Browline Top Frame -->
          <!-- Left Frame Top -->
          <path d="M80,165 C85,150 134,148 138,168 C133,165 90,162 80,165 Z" fill="#1E222A" stroke="#000000" stroke-width="2"/>
          <!-- Right Frame Top -->
          <path d="M210,165 C205,150 156,148 152,168 C157,165 200,162 210,165 Z" fill="#1E222A" stroke="#000000" stroke-width="2"/>
          <!-- Arched Bridge over the Nose -->
          <path d="M136,164 Q145,156 154,164 Q145,160 136,164 Z" fill="#1E222A" stroke="#000000" stroke-width="1.8"/>

          <!-- Silver/White Circular Rivets on Corners -->
          <circle cx="85" cy="162" r="2.2" fill="#E2E8F0" stroke="#475569" stroke-width="0.8"/>
          <circle cx="205" cy="162" r="2.2" fill="#E2E8F0" stroke="#475569" stroke-width="0.8"/>
        </g>

        <!-- WHISKERS (Long, delicate, white whiskers) -->
        <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" opacity="0.95">
          <!-- Left Whiskers -->
          <path d="M125,220 C100,218 60,224 35,236"/>
          <path d="M124,224 C95,228 65,242 42,260"/>
          <path d="M125,216 C95,210 65,210 40,216"/>
          <!-- Right Whiskers -->
          <path d="M165,220 C190,218 230,224 255,236"/>
          <path d="M166,224 C195,228 225,242 248,260"/>
          <path d="M165,216 C195,210 225,210 250,216"/>
        </g>

        <!-- FOREGROUND SELFIE PAW (Like holding the camera in reference image!) -->
        <g id="selfie-paw">
          <ellipse cx="65" cy="370" rx="34" ry="24" fill="#FFA447" stroke="#35251D" stroke-width="2.8"/>
          <!-- White paw pad toes -->
          <ellipse cx="50" cy="360" rx="7" ry="9" fill="#FFF4DF" stroke="#D96B16" stroke-width="1.5"/>
          <ellipse cx="66" cy="354" rx="7" ry="10" fill="#FFF4DF" stroke="#D96B16" stroke-width="1.5"/>
          <ellipse cx="82" cy="360" rx="7" ry="9" fill="#FFF4DF" stroke="#D96B16" stroke-width="1.5"/>
          <circle cx="66" cy="378" r="8" fill="#FCA5A5" opacity="0.85"/>
        </g>
      </g>

      <!-- DECORATIVE DOODLE ELEMENTS (Stars, sparkles & funny review tag) -->
      <g fill="#F59E0B">
        <!-- Sparkle Top Left -->
        <path d="M30 65 L33 76 L44 80 L33 84 L30 95 L27 84 L16 80 L27 76 Z"/>
        <!-- Star Top Right -->
        <path d="M380 30 L383 38 L392 40 L383 44 L380 52 L377 44 L368 40 L377 38 Z"/>
      </g>

      <!-- Little hand-drawn "LGTM" post-it doodle on desk -->
      <g transform="rotate(-6 95 315)">
        <rect x="75" y="300" width="46" height="28" rx="3" fill="#FEF08A" stroke="#35251D" stroke-width="1.8"/>
        <text x="98" y="318" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="bold" fill="#35251D" text-anchor="middle">LGTM*</text>
      </g>
    </svg>
  `,

  // 2. HEADER LOGO AVATAR (Compact circular badge for sticky header)
  logo: `
    <svg class="cat-logo-svg" viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#FFF4DF" stroke="#35251D" stroke-width="3"/>
      <!-- Shoulders -->
      <path d="M15,95 C25,75 75,75 85,95 Z" fill="#F28C28" stroke="#35251D" stroke-width="2"/>
      <!-- Collar & Tie -->
      <polygon points="50,75 40,84 45,98 50,100 55,98 60,84" fill="#1E293B"/>
      <polygon points="50,73 34,78 45,89 50,80" fill="#FFFFFF" stroke="#35251D" stroke-width="1.5"/>
      <polygon points="50,73 66,78 55,89 50,80" fill="#FFFFFF" stroke="#35251D" stroke-width="1.5"/>
      <!-- Ears -->
      <polygon points="26,50 32,20 48,36" fill="#F28C28" stroke="#35251D" stroke-width="2"/>
      <polygon points="74,50 68,20 52,36" fill="#F28C28" stroke="#35251D" stroke-width="2"/>
      <!-- Head -->
      <ellipse cx="50" cy="52" rx="34" ry="28" fill="#F28C28" stroke="#35251D" stroke-width="2.5"/>
      <!-- Tabby Forehead M -->
      <path d="M46,36 L50,42 L54,36" fill="none" stroke="#9A3412" stroke-width="2" stroke-linecap="round"/>
      <!-- Eyes & Glasses -->
      <ellipse cx="38" cy="48" rx="6" ry="6" fill="#FEF08A"/>
      <ellipse cx="62" cy="48" rx="6" ry="6" fill="#FEF08A"/>
      <circle cx="38" cy="48" r="3.5" fill="#35251D"/>
      <circle cx="62" cy="48" r="3.5" fill="#35251D"/>
      <!-- White lower rim glasses -->
      <path d="M28,44 C28,55 48,55 48,44" fill="none" stroke="#FFFFFF" stroke-width="2"/>
      <path d="M52,44 C52,55 72,55 72,44" fill="none" stroke="#FFFFFF" stroke-width="2"/>
      <!-- Black top browline -->
      <path d="M26,43 C30,37 46,37 49,43 Z" fill="#1E222A"/>
      <path d="M74,43 C70,37 54,37 51,43 Z" fill="#1E222A"/>
      <line x1="48" y1="42" x2="52" y2="42" stroke="#1E222A" stroke-width="2"/>
      <!-- Nose & Mouth -->
      <polygon points="50,58 47,54 53,54" fill="#F43F5E"/>
      <path d="M47,60 Q50,62 53,60" fill="none" stroke="#35251D" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
  `,

  // 3. COMPANION CAT (Holding coffee mug beside COPY CODE button)
  companion: `
    <svg class="cat-companion-svg" viewBox="0 0 120 120" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="54" fill="#FFF4DF" stroke="#35251D" stroke-width="2.5"/>
      <!-- Cat Head -->
      <polygon points="25,48 34,16 52,40" fill="#F28C28" stroke="#35251D" stroke-width="2"/>
      <polygon points="95,48 86,16 68,40" fill="#F28C28" stroke="#35251D" stroke-width="2"/>
      <ellipse cx="60" cy="56" rx="36" ry="30" fill="#F28C28" stroke="#35251D" stroke-width="2.5"/>
      <!-- White Collar & Navy Tie -->
      <polygon points="46,84 60,92 74,84 65,80 55,80" fill="#FFFFFF" stroke="#35251D" stroke-width="1.5"/>
      <polygon points="56,90 64,90 66,112 60,116 54,112" fill="#1E293B" stroke="#35251D" stroke-width="1.2"/>
      <!-- Glasses -->
      <path d="M36,46 C36,60 56,60 56,46" fill="none" stroke="#FFFFFF" stroke-width="2.5"/>
      <path d="M64,46 C64,60 84,60 84,46" fill="none" stroke="#FFFFFF" stroke-width="2.5"/>
      <path d="M34,45 C38,38 54,38 57,45 Z" fill="#1E222A"/>
      <path d="M86,45 C82,38 66,38 63,45 Z" fill="#1E222A"/>
      <line x1="56" y1="44" x2="64" y2="44" stroke="#1E222A" stroke-width="2.5"/>
      <!-- Eyes: Squinting at you -->
      <ellipse cx="46" cy="50" rx="4" ry="4" fill="#35251D"/>
      <ellipse cx="74" cy="50" rx="4" ry="4" fill="#35251D"/>
      <circle cx="45" cy="48" r="1.5" fill="#FFFFFF"/>
      <circle cx="73" cy="48" r="1.5" fill="#FFFFFF"/>
      <!-- Nose & Smirk -->
      <polygon points="60,61 57,58 63,58" fill="#F43F5E"/>
      <path d="M56,63 Q60,67 64,63" fill="none" stroke="#35251D" stroke-width="2" stroke-linecap="round"/>
      <!-- Steaming Coffee Cup -->
      <rect x="80" y="74" width="22" height="24" rx="4" fill="#FEF08A" stroke="#35251D" stroke-width="2"/>
      <path d="M102,79 C108,79 108,89 102,89" fill="none" stroke="#35251D" stroke-width="2"/>
      <text x="91" y="89" font-family="'Space Grotesk', sans-serif" font-size="8" font-weight="bold" fill="#35251D" text-anchor="middle">☕</text>
      <!-- Steam -->
      <path d="M87,70 Q90,66 88,62" fill="none" stroke="#D96B16" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M94,69 Q97,65 95,61" fill="none" stroke="#D96B16" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
  `,

  // 4. SPLASH SCREEN — The Iconic Viral Side-Eye Orange Cat (1-to-1 Recreation of User's Uploaded Cat)
  // Replaces the previous doodle with the tall-eared, deadpan side-eye orange cat meme character
  splash: `
    <svg class="cat-splash-svg cat-side-eye-svg" viewBox="0 0 320 440" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Soft light-grey background gradient matching reference Image 1 -->
        <linearGradient id="catBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#E4E7EB"/>
          <stop offset="100%" stop-color="#CFD3D8"/>
        </linearGradient>
        <!-- Left eye pupil clip -->
        <clipPath id="leftPupilClip">
          <path d="M78,182 L144,180 C144,222 78,222 78,182 Z"/>
        </clipPath>
        <!-- Right eye pupil clip -->
        <clipPath id="rightPupilClip">
          <path d="M176,180 L242,178 C242,220 176,220 176,180 Z"/>
        </clipPath>
      </defs>

      <!-- Card Background matching reference Image 1 -->
      <rect width="320" height="440" rx="26" fill="url(#catBgGrad)"/>

      <!-- Subtle White Rim Outline along Left Silhouette (Exact from reference Image 1) -->
      <path d="M58,440 C73,370 104,325 112,265 C94,265 70,250 60,228 C50,204 52,178 58,162 L96,34" 
            fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.9"/>

      <!-- CAT TORSO / NECK -->
      <!-- Solid Orange Body with Thick Black Outline -->
      <path d="M62,440 C76,370 108,325 116,265 L204,265 C212,325 244,370 258,440 Z" 
            fill="#FF5E00" stroke="#1A1A1A" stroke-width="4.5" stroke-linejoin="round"/>

      <!-- CAT HEAD & TALL POINTED EARS (1-to-1 Silhouette from reference Image 1) -->
      <!-- Starts at jaw seam, up left cheek, left ear, crown, right ear, right cheek, jaw -->
      <path d="M116,265 
               C98,265 74,250 64,228 
               C54,204 56,178 62,162 
               L100,36 
               L138,124 
               Q160,127 182,124 
               L220,38 
               L258,162 
               C264,178 266,204 256,228 
               C246,250 222,265 204,265 
               Q160,274 116,265 Z" 
            fill="#FF5E00" stroke="#1A1A1A" stroke-width="4.5" stroke-linejoin="round"/>

      <!-- EYES: The Viral Deadpan Side-Eye Gaze -->
      <!-- Left Eye Sclera (White) -->
      <path d="M78,182 L144,180 C144,222 78,222 78,182 Z" 
            fill="#FFFFFF" stroke="#1A1A1A" stroke-width="4"/>
      <!-- Left Eye Pupil (Elongated oval pushed hard to the right) -->
      <g clip-path="url(#leftPupilClip)">
        <ellipse cx="132" cy="196" rx="7.5" ry="18" fill="#1A1A1A"/>
      </g>

      <!-- Right Eye Sclera (White) -->
      <path d="M176,180 L242,178 C242,220 176,220 176,180 Z" 
            fill="#FFFFFF" stroke="#1A1A1A" stroke-width="4"/>
      <!-- Right Eye Pupil (Elongated oval pushed hard to the right) -->
      <g clip-path="url(#rightPupilClip)">
        <ellipse cx="230" cy="195" rx="7.5" ry="18" fill="#1A1A1A"/>
      </g>

      <!-- NOSE / MOUTH: The Tiny White Pill Oval -->
      <ellipse cx="160" cy="216" rx="6.5" ry="3.5" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="2.6"/>

      <!-- WHISKERS: Exactly 3 Black Strokes on Each Cheek -->
      <g stroke="#1A1A1A" stroke-width="3.5" stroke-linecap="round">
        <!-- Left Whiskers -->
        <path d="M68,225 C46,226 30,228 16,230"/>
        <path d="M64,242 C42,246 26,254 12,264"/>
        <path d="M70,258 C52,270 38,284 28,304"/>

        <!-- Right Whiskers -->
        <path d="M252,223 C274,221 290,220 304,218"/>
        <path d="M256,240 C278,241 294,246 308,254"/>
        <path d="M250,256 C268,266 282,278 292,295"/>
      </g>

      <!-- Sparkle in bottom right corner (from reference Image 1) -->
      <g transform="translate(270, 395)" opacity="0.85">
        <path d="M0,-9 Q0,0 9,0 Q0,0 0,9 Q0,0 -9,0 Q0,0 0,-9 Z" fill="#FFFFFF"/>
      </g>
    </svg>
  `,

  // 5. EMPTY SEARCH STATE (404 / Cat with magnifying glass)
  empty: `
    <svg class="cat-empty-svg" viewBox="0 0 160 160" width="130" height="130" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#FFF4DF" stroke="#35251D" stroke-width="3"/>
      <!-- Cat Head looking confused -->
      <polygon points="40,65 50,30 72,55" fill="#F28C28" stroke="#35251D" stroke-width="2"/>
      <polygon points="120,65 110,30 88,55" fill="#F28C28" stroke="#35251D" stroke-width="2"/>
      <ellipse cx="80" cy="75" rx="42" ry="34" fill="#F28C28" stroke="#35251D" stroke-width="2.5"/>
      <!-- White Collar & Blue Tie -->
      <polygon points="80,106 70,114 74,128 80,130 86,128 90,114" fill="#1E293B"/>
      <polygon points="80,105 65,110 75,120 80,112" fill="#FFFFFF" stroke="#35251D" stroke-width="1.5"/>
      <polygon points="80,105 95,110 85,120 80,112" fill="#FFFFFF" stroke="#35251D" stroke-width="1.5"/>
      <!-- Glasses slipped down to bridge of nose -->
      <path d="M52,72 C52,86 72,86 72,72" fill="none" stroke="#FFFFFF" stroke-width="2.5"/>
      <path d="M88,72 C88,86 108,86 108,72" fill="none" stroke="#FFFFFF" stroke-width="2.5"/>
      <path d="M50,70 C54,64 70,64 73,70 Z" fill="#1E222A"/>
      <path d="M110,70 C106,64 90,64 87,70 Z" fill="#1E222A"/>
      <line x1="72" y1="69" x2="88" y2="69" stroke="#1E222A" stroke-width="2.5"/>
      <!-- Wide Confused Eyes peering over glasses -->
      <circle cx="62" cy="62" r="7" fill="#FEF08A" stroke="#35251D" stroke-width="1.8"/>
      <circle cx="98" cy="62" r="7" fill="#FEF08A" stroke="#35251D" stroke-width="1.8"/>
      <circle cx="62" cy="62" r="3.5" fill="#35251D"/>
      <circle cx="98" cy="62" r="3.5" fill="#35251D"/>
      <!-- Question mark doodles floating -->
      <text x="32" y="42" font-family="'Space Grotesk', sans-serif" font-size="20" font-weight="900" fill="#EA580C">?</text>
      <text x="122" y="46" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="900" fill="#EA580C">?</text>
    </svg>
  `,

  // 6. EXPERIMENT REACTION STAMPS (10 Custom Doodle Poses of our Cat)
  getExperimentStamp(id) {
    const stamps = {
      1: {
        title: "Arithmetic Alpha",
        svg: `<svg viewBox="0 0 60 60" width="100%" height="100%">
          <circle cx="30" cy="30" r="28" fill="#FFF4DF" stroke="#35251D" stroke-width="2"/>
          <ellipse cx="30" cy="32" rx="18" ry="15" fill="#F28C28"/>
          <!-- Glasses -->
          <path d="M18,28 C18,36 28,36 28,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M32,28 C32,36 42,36 42,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M17,27 L28,27" stroke="#1E222A" stroke-width="2"/>
          <path d="M32,27 L43,27" stroke="#1E222A" stroke-width="2"/>
          <!-- Collar & Tie -->
          <polygon points="30,45 27,49 30,55 33,49" fill="#1E293B"/>
          <!-- Math symbols floating -->
          <text x="12" y="18" font-size="9" font-weight="bold" fill="#EA580c">+</text>
          <text x="44" y="18" font-size="9" font-weight="bold" fill="#EA580c">%</text>
        </svg>`
      },
      2: {
        title: "String Wizard",
        svg: `<svg viewBox="0 0 60 60" width="100%" height="100%">
          <circle cx="30" cy="30" r="28" fill="#FFF4DF" stroke="#35251D" stroke-width="2"/>
          <ellipse cx="30" cy="32" rx="18" ry="15" fill="#F28C28"/>
          <path d="M18,28 C18,36 28,36 28,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M32,28 C32,36 42,36 42,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M17,27 L28,27" stroke="#1E222A" stroke-width="2"/>
          <path d="M32,27 L43,27" stroke="#1E222A" stroke-width="2"/>
          <polygon points="30,45 27,49 30,55 33,49" fill="#1E293B"/>
          <!-- String yarn doodle -->
          <path d="M10,48 C20,40 40,40 50,48" fill="none" stroke="#0284C7" stroke-width="2.5" stroke-dasharray="3,2"/>
        </svg>`
      },
      3: {
        title: "Constructor Chad",
        svg: `<svg viewBox="0 0 60 60" width="100%" height="100%">
          <circle cx="30" cy="30" r="28" fill="#FFF4DF" stroke="#35251D" stroke-width="2"/>
          <ellipse cx="30" cy="32" rx="18" ry="15" fill="#F28C28"/>
          <path d="M18,28 C18,36 28,36 28,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M32,28 C32,36 42,36 42,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M17,27 L28,27" stroke="#1E222A" stroke-width="2"/>
          <path d="M32,27 L43,27" stroke="#1E222A" stroke-width="2"/>
          <polygon points="30,45 27,49 30,55 33,49" fill="#1E293B"/>
          <!-- Blueprint ruler/hammer -->
          <text x="44" y="20" font-size="10">📐</text>
        </svg>`
      },
      4: {
        title: "Array Master",
        svg: `<svg viewBox="0 0 60 60" width="100%" height="100%">
          <circle cx="30" cy="30" r="28" fill="#FFF4DF" stroke="#35251D" stroke-width="2"/>
          <ellipse cx="30" cy="32" rx="18" ry="15" fill="#F28C28"/>
          <path d="M18,28 C18,36 28,36 28,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M32,28 C32,36 42,36 42,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M17,27 L28,27" stroke="#1E222A" stroke-width="2"/>
          <path d="M32,27 L43,27" stroke="#1E222A" stroke-width="2"/>
          <polygon points="30,45 27,49 30,55 33,49" fill="#1E293B"/>
          <!-- Array bracket: [0] -->
          <text x="30" y="55" font-family="monospace" font-size="8" font-weight="bold" fill="#059669" text-anchor="middle">[0..n]</text>
        </svg>`
      },
      5: {
        title: "Math Prodigy",
        svg: `<svg viewBox="0 0 60 60" width="100%" height="100%">
          <circle cx="30" cy="30" r="28" fill="#FFF4DF" stroke="#35251D" stroke-width="2"/>
          <ellipse cx="30" cy="32" rx="18" ry="15" fill="#F28C28"/>
          <path d="M18,28 C18,36 28,36 28,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M32,28 C32,36 42,36 42,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M17,27 L28,27" stroke="#1E222A" stroke-width="2"/>
          <path d="M32,27 L43,27" stroke="#1E222A" stroke-width="2"/>
          <polygon points="30,45 27,49 30,55 33,49" fill="#1E293B"/>
          <!-- Trig symbol -->
          <text x="10" y="20" font-size="8" font-weight="bold" fill="#7C3AED">π</text>
          <text x="44" y="20" font-size="8" font-weight="bold" fill="#7C3AED">√</text>
        </svg>`
      },
      6: {
        title: "Polymorphism King",
        svg: `<svg viewBox="0 0 60 60" width="100%" height="100%">
          <circle cx="30" cy="30" r="28" fill="#FFF4DF" stroke="#35251D" stroke-width="2"/>
          <!-- Stacked Cat Extends -->
          <ellipse cx="30" cy="34" rx="17" ry="13" fill="#F28C28"/>
          <path d="M20,30 L28,30 M32,30 L40,30" stroke="#1E222A" stroke-width="2"/>
          <polygon points="30,45 27,49 30,55 33,49" fill="#1E293B"/>
          <!-- Crown doodle -->
          <polygon points="24,18 27,10 30,15 33,10 36,18" fill="#F59E0B" stroke="#35251D" stroke-width="1.2"/>
        </svg>`
      },
      7: {
        title: "Abstract Guru",
        svg: `<svg viewBox="0 0 60 60" width="100%" height="100%">
          <circle cx="30" cy="30" r="28" fill="#FFF4DF" stroke="#35251D" stroke-width="2"/>
          <ellipse cx="30" cy="32" rx="18" ry="15" fill="#F28C28" stroke-dasharray="3,2" stroke="#35251D" stroke-width="1.5"/>
          <path d="M18,28 C18,36 28,36 28,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M32,28 C32,36 42,36 42,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M17,27 L28,27" stroke="#1E222A" stroke-width="2"/>
          <path d="M32,27 L43,27" stroke="#1E222A" stroke-width="2"/>
          <!-- Sparkle of abstraction -->
          <text x="42" y="18" font-size="10">✨</text>
        </svg>`
      },
      8: {
        title: "Interface Boss",
        svg: `<svg viewBox="0 0 60 60" width="100%" height="100%">
          <circle cx="30" cy="30" r="28" fill="#FFF4DF" stroke="#35251D" stroke-width="2"/>
          <ellipse cx="30" cy="32" rx="18" ry="15" fill="#F28C28"/>
          <path d="M18,28 C18,36 28,36 28,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M32,28 C32,36 42,36 42,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M17,27 L28,27" stroke="#1E222A" stroke-width="2"/>
          <path d="M32,27 L43,27" stroke="#1E222A" stroke-width="2"/>
          <polygon points="30,45 27,49 30,55 33,49" fill="#1E293B"/>
          <!-- Interface stamp -->
          <text x="44" y="20" font-size="10">📜</text>
        </svg>`
      },
      9: {
        title: "Exception Tamer",
        svg: `<svg viewBox="0 0 60 60" width="100%" height="100%">
          <circle cx="30" cy="30" r="28" fill="#FFF4DF" stroke="#35251D" stroke-width="2"/>
          <ellipse cx="30" cy="32" rx="18" ry="15" fill="#F28C28"/>
          <!-- Eyes wide in try-catch -->
          <circle cx="23" cy="28" r="4.5" fill="#FFFFFF" stroke="#35251D" stroke-width="1.5"/>
          <circle cx="37" cy="28" r="4.5" fill="#FFFFFF" stroke="#35251D" stroke-width="1.5"/>
          <circle cx="23" cy="28" r="2" fill="#35251D"/>
          <circle cx="37" cy="28" r="2" fill="#35251D"/>
          <!-- Warning triangle -->
          <text x="43" y="18" font-size="10">⚠️</text>
        </svg>`
      },
      10: {
        title: "Package Specialist",
        svg: `<svg viewBox="0 0 60 60" width="100%" height="100%">
          <circle cx="30" cy="30" r="28" fill="#FFF4DF" stroke="#35251D" stroke-width="2"/>
          <ellipse cx="30" cy="32" rx="18" ry="15" fill="#F28C28"/>
          <path d="M18,28 C18,36 28,36 28,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M32,28 C32,36 42,36 42,28" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M17,27 L28,27" stroke="#1E222A" stroke-width="2"/>
          <path d="M32,27 L43,27" stroke="#1E222A" stroke-width="2"/>
          <polygon points="30,45 27,49 30,55 33,49" fill="#1E293B"/>
          <!-- Box packaging -->
          <text x="42" y="20" font-size="10">📦</text>
        </svg>`
      }
    };

    return stamps[id] || { title: "Sigma Approved", svg: stamps[1].svg };
  }
};
