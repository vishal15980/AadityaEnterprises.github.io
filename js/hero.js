// Dynamically create hero section with image for the homepage
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Create hero container
  const hero = document.createElement("section");
  hero.className = "hero";

  // Create content wrapper
  const heroContent = document.createElement("div");
  heroContent.className = "hero-content";

  // Heading
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Aaditya Enterprises";

  // Subheading
  const subheading = document.createElement("p");
  subheading.textContent =
    "Quality products and services, delivered with trust.";

  // Button
  const cta = document.createElement("button");
  cta.textContent = "Learn More";
  cta.className = "hero-btn";

  // Image container
  const imgWrapper = document.createElement("div");
  imgWrapper.className = "hero-image-wrapper";

  const img = document.createElement("img");
  // You can replace this filename later with your real website photo
  img.src = "images/website-hero.jpg";
  img.alt = "Aaditya Enterprises website preview";
  img.className = "hero-image";

  imgWrapper.appendChild(img);

  heroContent.appendChild(heading);
  heroContent.appendChild(subheading);
  heroContent.appendChild(cta);

  hero.appendChild(heroContent);
  hero.appendChild(imgWrapper);

  // Insert hero at the top of the body
  body.insertBefore(hero, body.firstChild);
});


