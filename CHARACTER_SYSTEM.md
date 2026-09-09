# Birthday Digital Gift — Character System v1

## 1. System purpose

Two recurring pixel characters tell one shared story at two moments in time. They must feel recognizably like the same two people as the hairstyle and clothing change between the school and present-day versions.

This system deliberately uses no invented biographical details, props, dates, or personality traits. The supplied photos are used only as visual references for the two characters' overall appearance, hair volume, and the relative height difference.

## 2. Visual direction

**Recommended direction: soft 16-bit portrait sprites.**

- Full-body sprites on a 48 × 64 px design grid, scaled with `image-rendering: pixelated`.
- Clean, gentle outlines in deep charcoal rather than pure black.
- Slightly warm skin shading, restrained two-tone hair highlights, and one-pixel facial features.
- Cute and expressive without chibi proportions: head height is about one-third of the full sprite, so the result feels nostalgic and elegant rather than childish.
- Decorative Y2K elements, if used later, should live in the scene/UI—not be attached permanently to the characters.

## 3. Shared character rules

| Rule | Specification |
| --- | --- |
| Base pose | Relaxed front-facing standing pose, arms naturally at sides; use this as the canonical sprite. |
| Height relationship | Your sprite is exactly 3 px taller than your friend's in the 48 × 64 px frame. Ground line always aligns. |
| Body silhouette | Both slim; differentiate them primarily through height, hair, glasses, and clothing—not exaggerated body proportions. |
| Face | Small dark eyes, a minimal one-pixel nose/shadow, and a gentle closed smile by default. No invented freckles, beauty marks, or accessories. |
| Linework | `#24232A` deep charcoal, typically one design pixel wide. |
| Hair | Black base with charcoal (`#24232A`) and blue-black (`#343542`) highlights; highlights follow straight hair strands rather than looking glossy. |
| Skin | Warm medium-light palette with one soft shadow tone; keep both consistent with their photo reference. |
| Shoes | Plain black school shoes for the school pair; plain black low-profile footwear for the present-day pair unless later reference material specifies otherwise. |

## 4. Character A — you

### A1. Age 17: school version

Non-negotiable identifiers:

- Black, straight high ponytail.
- Centre-parted fringe.
- Round metal-frame glasses in muted dark silver.
- Malaysian national secondary-school uniform: white short-sleeve shirt, blue pinafore school dress, dark green tie.
- Taller of the pair (about 160 cm), slim.

Sprite construction notes:

- The central fringe opens by one pixel at the forehead; the ponytail begins high at the crown and drops behind the right/left head silhouette without obscuring the glasses.
- Glasses must remain visible at the small sprite size: two circular pixel rings connected by a one-pixel bridge, with a small muted highlight.
- School blue is saturated but not neon: main `#2E75C6`, shadow `#20569A`, light `#4E92D8`.
- Tie is a deep green: main `#1E4B41`, shadow `#15352F`.

### A2. Age 19: present-day version

Non-negotiable identifiers:

- Black long straight hair, centre-parted fringe, ending around chest level.
- Black off-shoulder top.
- Dark-blue flared jeans.
- Taller of the pair, slim.

Sprite construction notes:

- Keep the same central-part silhouette from A1 so the character reads as the same person after removing the ponytail and glasses.
- The off-shoulder neckline is shown with a subtle skin-coloured horizontal shoulder line; it must remain tasteful and simple.
- Jeans use dark denim: main `#244267`, shadow `#172D4B`, highlight `#3B5D87`; the flare starts below the knee and is modest rather than oversized.

## 5. Character B — friend

### B1. Age 17: school version

Non-negotiable identifiers:

- Black, straight high ponytail.
- Side-parted fringe.
- No glasses.
- Malaysian national secondary-school uniform: white short-sleeve shirt, blue pinafore school dress, dark green tie.
- Shorter of the pair (about 150 cm), slim.

Sprite construction notes:

- The side part is the key distinction from A1: one fuller fringe sweep crosses diagonally over the forehead.
- Use the same uniform palette as A1, confirming that the two are together in the same school time period.
- Keep the face unobstructed by accessories, so the fringe shape becomes the immediate school-era identifier.

### B2. Age 19: present-day version

Non-negotiable identifiers:

- Black long straight hair, centre-parted fringe, ending below chest level.
- Black sleeveless top.
- Black short puff skirt.
- Shorter of the pair, slim.

Sprite construction notes:

- Hair must visibly extend 3–5 pixels lower than A2’s chest-length hair.
- The sleeveless top is differentiated from A2’s off-shoulder top by visible shoulder straps/arm openings.
- The skirt is a short, softly puffed A-line silhouette using black-on-charcoal shading; it should feel playful, not costume-like.

## 6. Stage pair compositions

These are two separate pair assets, never four characters in a single scene.

| Pair asset | Left | Right | Emotional read |
| --- | --- | --- | --- |
| `school-pair` | Friend, B1 | You, A1 | Close school-day snapshot; matching uniform makes the two feel like a shared chapter. |
| `present-pair` | You, A2 | Friend, B2 | Same friendship, updated silhouettes; black outfits create a more grown-up visual rhythm. |

For each pair, use a 4 px visual gap between shoulders at canonical scale. The shared baseline and height difference must make them feel naturally side-by-side.

## 7. Canonical expression and future expansion

Create the neutral-smile standing sprites first. Once the user approves the likeness and outfits, future recollections can reuse the same base with these optional expression/pose layers:

- `smile`: default, gentle closed smile.
- `laugh`: closed crescent eyes and wider smile.
- `surprised`: one-pixel open mouth, raised brow pixel.
- `walk`: two-frame cycle, one forward leg and an arm swing.
- `together`: both lean inward by one pixel; no extra romantic symbols or generic birthday props.

All future poses must preserve: the two people’s height difference, hair parting, glasses rule, and the clothing rules for the relevant life stage.

## 8. Deliverable structure after visual approval

```text
assets/characters/
  school-pair.png
  present-pair.png
  you-school.png
  friend-school.png
  you-present.png
  friend-present.png
  spritesheet-expressions.png
```

Each asset should retain transparent background, with separate individual sprites available for later scenes and the two pair compositions available for milestone pages.
