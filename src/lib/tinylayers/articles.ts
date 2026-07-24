export type LayersArticleFaq = { q: string; a: string };
export type LayersArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  byline: string;
  publishedAt: string;
  modifiedAt: string;
  quickAnswerHtml: string;
  bodyHtml: string;
  faqs: LayersArticleFaq[];
};

export const layersArticles: LayersArticle[] = [
  {
    slug: `what-should-baby-wear-to-sleep`,
    title: `What Should My Baby Wear to Sleep Tonight?`,
    metaTitle: `What Should My Baby Wear to Sleep? | TinyLayers`,
    description: `What your baby should wear to sleep depends on room temperature, not the season. A plain-English TOG and layers chart from 16°C to 27°C, plus the chest check.`,
    excerpt: `The room temperature decides, not the season. A simple chart from TOG sleep sacks to bare bodysuits, plus the chest check that confirms you got it right.`,
    byline: `The TinyLayers Guide · Updated July 17, 2026`,
    publishedAt: `2026-07-17`,
    modifiedAt: `2026-07-17`,
    quickAnswerHtml: `Dress your baby for the <strong>room temperature</strong>, not the season. In a typical 20-22°C (68-72°F) nursery, that's a long- or short-sleeve bodysuit under a 1.0 TOG sleep sack. Then confirm with the chest check: warm and dry is right.`,
    bodyHtml: `<p>It's 9pm, the nursery reads 21 degrees, and you're standing over the drawer holding two sleep sacks and a bodysuit, doing mental math you were never taught. Every parent knows this moment. The good news: the answer follows a simple rule, and you can verify it in ten seconds once your baby settles.</p>

      <h2>The room decides, not the calendar</h2>
      <p>Babies sleep in a room, not in the weather forecast. A July nursery with air conditioning can be colder than a January one with radiators. So the only number that matters is the temperature near the crib - a small thermometer there beats any seasonal rule. Once you know the room, sleepwear follows.</p>

      <h2>A plain-English chart</h2>
      <p>Sleep sack warmth is measured in TOG (Thermal Overall Grade) - higher is warmer. This table reflects common TOG chart guidance used by major sleepwear brands; treat it as a starting point, not a prescription, and check your brand's own chart.</p>
      <table>
        <thead><tr><th>Room temperature</th><th>Typical outfit</th></tr></thead>
        <tbody>
        <tr><td>Under 16°C (61°F)</td><td>2.5 TOG sack + sleepsuit + long-sleeve bodysuit</td></tr>
        <tr><td>16-19°C (61-66°F)</td><td>2.5 TOG sack + long-sleeve bodysuit</td></tr>
        <tr><td>20-21°C (68-70°F)</td><td>1.0 TOG sack + long-sleeve bodysuit</td></tr>
        <tr><td>22-23°C (72-73°F)</td><td>1.0 TOG sack + short-sleeve bodysuit</td></tr>
        <tr><td>24-25°C (75-77°F)</td><td>0.5 TOG sack + short-sleeve bodysuit</td></tr>
        <tr><td>26°C+ (79°F+)</td><td>0.5 TOG or lighter, or bodysuit only</td></tr>
        </tbody>
      </table>
      <p>Notice what's missing: blankets. The American Academy of Pediatrics recommends keeping loose blankets, pillows, and soft objects out of the sleep space entirely for the first year - a wearable sleep sack does the blanket's job without the risk.</p>

      <h2>The chest check: your ten-second confirmation</h2>
      <p>Charts get you close; your baby tells you the rest. About 10-15 minutes after settling, slide a hand onto your baby's chest or the back of the neck:</p>
      <ul>
        <li><strong>Warm and dry</strong> - you got it right. Close the door calm.</li>
        <li><strong>Sweaty, damp, or hot</strong> - remove a layer.</li>
        <li><strong>Chest feels cool</strong> - add a layer.</li>
      </ul>
      <p>Cool hands and feet are normal in sleeping babies and not a sign to bundle up - immature circulation keeps extremities cooler. The chest is the honest reading.</p>

      <h2>Three rules that don't change with temperature</h2>
      <ol>
        <li><strong>No hats indoors during sleep.</strong> Babies shed heat through their heads; a hat blocks that and raises overheating risk.</li>
        <li><strong>Stop swaddling at the first sign of rolling</strong>, per AAP guidance - usually around 2-3 months. Move to an arms-free sack.</li>
        <li><strong>When torn between two options, go lighter.</strong> Overheating is linked to sleep-related infant death risk; slightly cool is the safer miss, and the chest check will catch it either way.</li>
      </ol>

      

      <h2>Related guides</h2>
      <ul>
        <li><a href="/tinylayers/blog/best-room-temperature-for-baby">What's the best room temperature for a sleeping baby?</a></li>
        <li><a href="/tinylayers/blog/baby-too-hot-or-cold-at-night">Is my baby too hot or too cold? How to actually tell</a></li>
      </ul>

      <section class="refs">
        <h2>Sources</h2>
        <ul>
          <li><a href="https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304" rel="noopener">American Academy of Pediatrics - Sleep-Related Infant Deaths: Updated 2022 Recommendations (Pediatrics)</a></li>
          <li><a href="https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/a-parents-guide-to-safe-sleep.aspx" rel="noopener">AAP / HealthyChildren - A Parent's Guide to Safe Sleep</a></li>
          <li><a href="https://www.lullabytrust.org.uk/safer-sleep-advice/room-temperature/" rel="noopener">The Lullaby Trust - Room Temperature</a></li>
        </ul>
      </section>

      <p class="disclaimer">TinyLayers provides general dressing guidance only and does not replace medical advice. Every baby is different - for fever, premature birth, or any medical concern, follow your clinician's guidance.</p>`,
    faqs: [
      { q: `Should my baby wear a hat to sleep?`, a: `No. Babies release heat through their heads, and safe-sleep guidance from the AAP and NHS says no hats indoors during sleep. Hats are for outdoors in the cold.` },
      { q: `Does my baby need socks at night?`, a: `Usually not. A footed sleepsuit or a sleep sack covers the feet, and cool hands and feet are normal in sleeping babies. Judge warmth by the chest or back of the neck, not the toes.` },
      { q: `When should we stop swaddling?`, a: `At the first signs of rolling, per AAP safe-sleep guidance. Many babies show rolling attempts around 2 to 3 months. After swaddling, an arms-free sleep sack is the usual next step.` },
      { q: `What TOG sleep sack should I use?`, a: `As a common rule of thumb: around 2.5 TOG for rooms of 16-19°C, 1.0 TOG for 20-23°C, and 0.5 TOG or lighter above 24°C - adjusting the bodysuit underneath. Brands differ, so check their chart and always confirm with the chest check.` },
    ],
  },
  {
    slug: `best-room-temperature-for-baby`,
    title: `What's the Best Room Temperature for a Sleeping Baby?`,
    metaTitle: `Best Room Temperature for Baby Sleep | TinyLayers`,
    description: `Understand the commonly recommended baby room-temperature range and how to adjust sleepwear when your nursery is warmer or cooler.`,
    excerpt: `Why 16-20°C keeps coming up, what to do when you can't control your nursery, and why the right layers matter more than a perfect thermostat.`,
    byline: `The TinyLayers Guide · Updated July 17, 2026`,
    publishedAt: `2026-07-17`,
    modifiedAt: `2026-07-17`,
    quickAnswerHtml: `UK safe-sleep bodies (The Lullaby Trust, NHS) recommend a room of about <strong>16-20°C (61-68°F)</strong>. Slightly warmer is workable if you dress your baby lighter. The principle behind every number: a <strong>comfortably cool room beats a warm one</strong>, because overheating is the documented risk.`,
    bodyHtml: `<p>New parents fixate on this number, and it's easy to see why: it feels like the one thing you can measure. But the range exists to serve a simpler idea. Your baby doesn't need a perfect thermostat - they need the right outfit for whatever the room actually is.</p>

      <h2>Where 16-20°C comes from</h2>
      <p>The Lullaby Trust and the NHS both name 16-20°C as the comfortable, safer range for infant sleep, tied to decades of research linking overheating to sudden infant death syndrome (SIDS). The American Academy of Pediatrics phrases it functionally rather than numerically: avoid overheating and overbundling, and dress infants appropriately for the environment with no more layers than an adult would be comfortable in.</p>
      <p>To most adults, 16-20°C reads as slightly cool. That's the point. Babies handle a comfortably cool room dressed correctly far better than a warm one.</p>

      <h2>When your nursery won't cooperate</h2>
      <p>Top-floor flat in July, old radiators you don't control, a heatwave. You often can't move the number - so move the layers instead:</p>
      <table>
        <thead><tr><th>The room is…</th><th>Reach for…</th></tr></thead>
        <tbody>
        <tr><td>Below 16°C</td><td>Higher-TOG sack (2.5) + sleepsuit + bodysuit - not extra room heating overnight</td></tr>
        <tr><td>16-20°C</td><td>The classic setups: 1.0-2.5 TOG depending on where in the range you are</td></tr>
        <tr><td>21-24°C</td><td>Lighter sack (1.0 → 0.5 TOG), short sleeves underneath</td></tr>
        <tr><td>Above 24°C</td><td>0.5 TOG or just a bodysuit; a room fan (not aimed at baby) helps air move</td></tr>
        </tbody>
      </table>
      <p>The full outfit-by-temperature chart lives in our guide to <a href="/tinylayers/blog/what-should-baby-wear-to-sleep">what your baby should wear to sleep</a>.</p>

      <h2>Measure where it matters</h2>
      <p>Hallway thermostats routinely disagree with the crib corner by two or three degrees. Put a small thermometer near the crib at mattress height, away from radiators, vents, and windows. That's the number your baby sleeps in - and the one worth acting on.</p>

      <h2>The check that beats every number</h2>
      <p>Whatever the thermometer says, your baby's chest settles the question. Ten to fifteen minutes after settling, feel the chest or back of the neck: warm and dry means right; sweaty means remove a layer; cool means add one. Cool hands and feet alone are normal and not a signal - more on that in <a href="/tinylayers/blog/baby-too-hot-or-cold-at-night">how to tell if your baby is too hot or too cold</a>.</p>

      

      <section class="refs">
        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.lullabytrust.org.uk/safer-sleep-advice/room-temperature/" rel="noopener">The Lullaby Trust - Room Temperature</a></li>
          <li><a href="https://www.nhs.uk/conditions/sudden-infant-death-syndrome-sids/" rel="noopener">NHS - Sudden Infant Death Syndrome (SIDS)</a></li>
          <li><a href="https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304" rel="noopener">American Academy of Pediatrics - Sleep-Related Infant Deaths: Updated 2022 Recommendations (Pediatrics)</a></li>
        </ul>
      </section>

      <p class="disclaimer">TinyLayers provides general dressing guidance only and does not replace medical advice. Every baby is different - for fever, premature birth, or any medical concern, follow your clinician's guidance.</p>`,
    faqs: [
      { q: `Is 24°C too hot for a baby's room?`, a: `It's above the commonly recommended 16-20°C range, but a warm room becomes manageable with lighter sleepwear: a 0.5 TOG sack and a short-sleeve bodysuit, or less. Confirm with the chest check - warm and dry is right, sweaty means remove a layer.` },
      { q: `Should I leave the heating on all night for my baby?`, a: `Usually no. Safe-sleep guidance favors a comfortably cool room over a heated one, and overheating is the bigger documented risk. If the room drops below about 16°C, warmer sleepwear (a higher-TOG sack plus a sleepsuit) is the first tool, not the radiator.` },
      { q: `Where should I put the nursery thermometer?`, a: `Near the crib, at mattress height, away from radiators, vents, and direct sun. The number that matters is the air your baby actually sleeps in, which can differ noticeably from a thermostat in the hallway.` },
    ],
  },
  {
    slug: `baby-too-hot-or-cold-at-night`,
    title: `Is My Baby Too Hot or Too Cold? How to Actually Tell`,
    metaTitle: `Is My Baby Too Hot or Too Cold at Night? How to Actually Tell`,
    description: `Cool hands are normal; a sweaty chest is not. Learn the chest check and practical signs that a sleeping baby may be too warm or cool.`,
    excerpt: `Cool hands are normal. A sweaty chest is not. The 10-minute check that answers the question, and why overheating is the risk to watch.`,
    byline: `The TinyLayers Guide · Updated July 17, 2026`,
    publishedAt: `2026-07-17`,
    modifiedAt: `2026-07-17`,
    quickAnswerHtml: `Feel your baby's <strong>chest or the back of the neck</strong> 10-15 minutes after settling. Warm and dry = dressed right. Sweaty or hot = remove a layer. Cool chest = add one. <strong>Cool hands and feet are normal</strong> and not a signal by themselves.`,
    bodyHtml: `<p>You reach into the crib, touch two tiny cold hands, and your stomach drops. Here's the reassurance first: a sleeping baby's circulation prioritizes the core, so hands and feet run cool in perfectly comfortable babies. The parents' instinct to bundle at cold fingers is exactly the instinct worth retraining - because in infant sleep, the documented risk runs the other way.</p>

      <h2>Why "too hot" is the side to watch</h2>
      <p>Overheating is consistently linked with increased risk of sudden infant death syndrome in the safe-sleep literature, which is why the American Academy of Pediatrics tells parents to avoid overbundling and to watch for signs of heat stress. A slightly cool baby wakes and complains; an overheated baby often doesn't. That asymmetry is the whole reason the rule of thumb exists: <strong>when torn between two outfits, choose the lighter one.</strong></p>

      <h2>Signs your baby is too hot</h2>
      <ul>
        <li>Sweaty or damp chest, neck, or hair</li>
        <li>Flushed or red cheeks</li>
        <li>Skin hot to the touch on the trunk</li>
        <li>Rapid breathing, restlessness</li>
        <li>Heat rash in skin folds</li>
      </ul>
      <p>Response: remove a layer (or swap to a lighter TOG sack), let air move in the room, re-check in ten minutes.</p>

      <h2>Signs your baby is genuinely cold</h2>
      <ul>
        <li>Chest or back of neck feels cool to your (warm) hand</li>
        <li>Fussy, hard to settle despite feeding and a clean diaper</li>
        <li>Skin looks mottled or pale on the trunk</li>
      </ul>
      <p>Response: add one layer - a warmer bodysuit under the sack, or a step up in TOG. Not a hat (never indoors during sleep) and not a loose blanket (nothing loose belongs in the crib in the first year).</p>

      <h2>The daytime version of this mistake</h2>
      <p>The same overheating risk follows your baby outdoors - most often under a muslin draped over the stroller for shade. Red Nose Australia measured how covering a pram traps heat and cut airflow, and advises against it even with thin fabric. Use the canopy or a clip-on parasol instead, and keep air moving. On walks, the same chest check applies at every stop.</p>

      <h2>Make the check a habit, not a worry</h2>
      <p>One touch after settling, one mental note. Parents who do the chest check nightly stop second-guessing within a week - it converts anxiety into information. If the answer keeps coming back "sweaty," your default outfit is one layer too warm; see the <a href="/tinylayers/blog/what-should-baby-wear-to-sleep">room-by-room-temperature sleepwear chart</a> to reset the baseline, and check the <a href="/tinylayers/blog/best-room-temperature-for-baby">nursery temperature guide</a> if the room itself runs hot.</p>

      

      <section class="refs">
        <h2>Sources</h2>
        <ul>
          <li><a href="https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304" rel="noopener">American Academy of Pediatrics - Sleep-Related Infant Deaths: Updated 2022 Recommendations (Pediatrics)</a></li>
          <li><a href="https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/a-parents-guide-to-safe-sleep.aspx" rel="noopener">AAP / HealthyChildren - A Parent's Guide to Safe Sleep</a></li>
          <li><a href="https://rednose.org.au/safe-sleep-and-safer-pregnancy/newborn-to-1-year/the-dangers-of-covering-your-pram/" rel="noopener">Red Nose Australia - The Dangers of Covering Your Pram</a></li>
        </ul>
      </section>

      <p class="disclaimer">TinyLayers provides general dressing guidance only and does not replace medical advice. If you suspect fever or your baby seems unwell, take a proper temperature and contact your clinician.</p>`,
    faqs: [
      { q: `My baby's hands are cold at night - should I add a layer?`, a: `Not based on hands alone. Cool hands and feet are normal in sleeping babies because their circulation prioritizes the core. Feel the chest or the back of the neck instead: if it's warm and dry, your baby is dressed right.` },
      { q: `Is a sweaty head a sign my baby is too hot?`, a: `Often yes, especially with a damp neck or chest, flushed cheeks, or rapid breathing. Remove a layer and re-check in ten minutes. Some babies sweat from the head while feeding or settling; the chest check tells you whether it's overheating or just effort.` },
      { q: `How do I know if it's overheating or a fever?`, a: `Overdressing warms the skin; fever raises core temperature. If your baby feels hot, unwrap a layer and re-check after 10-15 minutes - an overdressed baby cools down, a feverish one stays hot. When in doubt, take a proper temperature and follow your clinician's guidance.` },
    ],
  },
  {
    slug: `winter-car-seat-coat-rule`,
    title: `Why Puffy Coats and Car Seats Don't Mix`,
    metaTitle: `Winter Car Seat Coat Rule for Babies | TinyLayers`,
    description: `Bulky coats compress under a car-seat harness. Learn the winter coat rule, the pinch test, and what babies can wear safely instead.`,
    excerpt: `A bulky coat compresses in a crash and leaves the harness loose. What to dress your baby in instead — and the pinch test that takes ten seconds.`,
    byline: `The TinyLayers Guide · Updated July 17, 2026`,
    publishedAt: `2026-07-17`,
    modifiedAt: `2026-07-17`,
    quickAnswerHtml: `<strong>Thin layers under the harness, warmth on top of it.</strong> Buckle your baby snugly in regular indoor clothing, then lay the coat or blanket over the fastened straps. A puffy coat under the harness compresses in a crash, leaving the straps inches too loose.`,
    bodyHtml: `<p>It feels wrong, on a freezing morning, to strap your baby in without the coat. Every winter, that instinct puts millions of babies in harnesses that are secretly loose. The fix costs thirty seconds and zero warmth - it's about where the coat goes, not whether it comes along.</p>

      <h2>The physics, in one paragraph</h2>
      <p>A harness protects by holding your baby against the seat with no slack. Puffy insulation is mostly trapped air; in a crash, crash forces squeeze that air out instantly, and the harness that was tightened over a fluffy coat is suddenly tightened over nothing. The American Academy of Pediatrics' winter car seat guidance is unambiguous: bulky coats and snowsuits do not belong under the straps.</p>

      <h2>The ten-second pinch test</h2>
      <ol>
        <li>Dress your baby in what they'll actually ride in and buckle up.</li>
        <li>Tighten the harness as usual, chest clip at armpit level.</li>
        <li>Pinch the strap webbing at the shoulder between thumb and finger.</li>
      </ol>
      <p>If you can fold any webbing, the harness is too loose - and if it passed without the coat but fails with it, the coat is the problem. This is the test to teach every grandparent who does daycare pickup.</p>

      <h2>What to dress your baby in instead</h2>
      <table>
        <thead><tr><th>Cold level</th><th>Under the harness</th><th>Over the buckled straps</th></tr></thead>
        <tbody>
        <tr><td>Cool (5-12°C)</td><td>Bodysuit + light top or thin fleece</td><td>Light blanket</td></tr>
        <tr><td>Cold (-5-5°C)</td><td>Bodysuit + thin fleece layer + hat</td><td>Coat laid backwards, or warm blanket</td></tr>
        <tr><td>Very cold (below -5°C)</td><td>Thin thermal layers + hat + mittens</td><td>Warm blanket + preheated car</td></tr>
        </tbody>
      </table>
      <p>Preheating the car for a few minutes does more than any coat - and remember to shed layers once the cabin warms up, because a heated car plus winter bundling becomes an overheating problem fast. Never leave a baby sleeping in a parked car, and in warm months check buckle metal before strapping in.</p>

      <h2>The stroller handoff</h2>
      <p>Car-to-stroller is where winter dressing gets fiddly: the coat that was banned in the seat is exactly right in the stroller. Keep it in the footwell, do the swap at the door. Full outdoor layering is covered in <a href="/tinylayers/blog/how-to-dress-baby-for-winter">how to dress your baby for winter walks</a>.</p>

      

      <section class="refs">
        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Winter-Car-Seat-Safety-Tips.aspx" rel="noopener">AAP / HealthyChildren - Winter Car Seat Safety Tips</a></li>
          <li><a href="https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304" rel="noopener">American Academy of Pediatrics - Sleep-Related Infant Deaths: Updated 2022 Recommendations (Pediatrics)</a></li>
        </ul>
      </section>

      <p class="disclaimer">TinyLayers provides general dressing guidance only and does not replace medical advice or your car seat manufacturer's instructions. Always follow the manual for your specific seat.</p>`,
    faqs: [
      { q: `Can I put a blanket over my baby in the car seat?`, a: `Yes - over the buckled harness. Strap your baby in snugly in thin layers first, then lay the blanket or coat on top. Nothing thick should ever sit between your baby's body and the straps.` },
      { q: `Are car seat covers and footmuffs safe?`, a: `Covers that go over the top of the seat (like a shower-cap style cover or a blanket) are fine. Avoid anything that adds padding behind or under your baby or between baby and the harness unless it came with the seat or the seat manufacturer explicitly approves it.` },
      { q: `What is the pinch test?`, a: `After buckling, pinch the harness strap at your baby's shoulder. If you can fold webbing between your fingers, the harness is too loose - tighten and repeat. Do the test in the outfit your baby will actually ride in.` },
    ],
  },
  {
    slug: `how-to-dress-baby-for-winter`,
    title: `How to Dress Your Baby for Winter Walks`,
    metaTitle: `How to Dress a Baby for Winter Walks | TinyLayers`,
    description: `A practical winter layering guide for babies in strollers and carriers, including outdoor hats, temperature checks, and the one-more-layer rule.`,
    excerpt: `One more layer than you're wearing, a hat outdoors, and a lighter outfit in the carrier. Winter outings without the guesswork.`,
    byline: `The TinyLayers Guide · Updated July 17, 2026`,
    publishedAt: `2026-07-17`,
    modifiedAt: `2026-07-17`,
    quickAnswerHtml: `<strong>One more layer than you're comfortable in</strong>, hat and mittens on, and check the chest at stops. In a carrier, go <strong>one layer lighter</strong> instead - your body heat counts. In the car seat, thin layers only under the harness.`,
    bodyHtml: `<p>Fresh air is good for both of you, in nearly any weather - babies in half of northern Europe famously nap outdoors year-round. What makes winter walks feel hard isn't the cold; it's not knowing what "enough layers" means. It means this:</p>

      <h2>The one-more-layer rule</h2>
      <p>AAP guidance for infants is to dress them in one more layer than an adult would wear to be comfortable in the same conditions. You in a sweater and coat = baby in bodysuit, sweater layer, coat or snowsuit. The extra layer exists because a stroller-riding baby generates no heat from walking - you're the one exercising, they're the one sitting still.</p>

      <h2>Build the outfit like an onion</h2>
      <ul>
        <li><strong>Base:</strong> a snug cotton bodysuit - trapped warm air starts here.</li>
        <li><strong>Middle:</strong> fleece or knit layer, footed if possible.</li>
        <li><strong>Outside:</strong> the wind-blocking layer - snowsuit, footmuff, or coat + blanket in the stroller.</li>
        <li><strong>Edges:</strong> hat (heads dump heat outdoors - this is where the "no hats" sleep rule flips), mittens, booties.</li>
      </ul>
      <p>Several thin layers beat one thick one: they trap more air and let you fine-tune at the café without a full re-dress.</p>

      <h2>Stroller vs carrier: not the same outfit</h2>
      <p>In a carrier, your chest is a radiator and the carrier fabric is a layer. Dress your baby <strong>one layer lighter</strong> than for the stroller - in any season - and keep their face visible and clear of fabric. The overdressed-carrier-baby is winter's most common overheating scenario, and it's invisible under your coat: check the neck at stops.</p>

      <h2>The transitions are the real test</h2>
      <p>Winter dressing fails less on the walk than at the boundaries: into the heated shop, back into the car. Two rules cover it: shed the outdoor layer when you come indoors (including a warmed-up car), and never put the puffy layer under a car seat harness - it goes over the buckled straps. That one has its own guide: <a href="/tinylayers/blog/winter-car-seat-coat-rule">why puffy coats and car seats don't mix</a>.</p>

      <h2>The check, wherever you are</h2>
      <p>Same as at home: finger to the chest or back of the neck. Warm and dry, carry on. Sweaty, open the snowsuit. Cool trunk, add the blanket or head home. Cold hands alone don't count - details in <a href="/tinylayers/blog/baby-too-hot-or-cold-at-night">how to tell if your baby is too hot or too cold</a>.</p>

      

      <section class="refs">
        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Winter-Car-Seat-Safety-Tips.aspx" rel="noopener">AAP / HealthyChildren - Winter Car Seat Safety Tips</a></li>
          <li><a href="https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/a-parents-guide-to-safe-sleep.aspx" rel="noopener">AAP / HealthyChildren - A Parent's Guide to Safe Sleep</a></li>
          <li><a href="https://rednose.org.au/safe-sleep-and-safer-pregnancy/newborn-to-1-year/the-dangers-of-covering-your-pram/" rel="noopener">Red Nose Australia - The Dangers of Covering Your Pram</a></li>
        </ul>
      </section>

      <p class="disclaimer">TinyLayers provides general dressing guidance only and does not replace medical advice. For premature babies or any medical concern, follow your clinician's guidance on outdoor time and temperature.</p>`,
    faqs: [
      { q: `How many layers does a baby need outside in winter?`, a: `The common rule of thumb backed by AAP guidance: one more layer than an adult is comfortable in for the same conditions. If you're happy in a sweater and a coat, your stroller-riding baby likely needs a bodysuit, a sweater layer, a coat or snowsuit, plus hat and mittens.` },
      { q: `Should I dress my baby differently in a carrier than a stroller?`, a: `Yes - one layer lighter in the carrier, in any season. Your body heat and the carrier fabric both count as layers. A baby dressed for the stroller will overheat against your chest.` },
      { q: `How do I check if my baby is warm enough on a winter walk?`, a: `Slip a finger to the chest or the back of the neck at stops: warm and dry is right, sweaty means shed a layer, cool means add one or head in. Cold hands alone are normal and not the signal - though mittens are still standard winter kit.` },
    ],
  },
];

export function getLayersArticle(slug: string) {
  return layersArticles.find((a) => a.slug === slug);
}

export function getLayersArticleSlugs() {
  return layersArticles.map((a) => a.slug);
}