// Build header + hero section with image for the homepage
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // ===== Header with logo (emoji + name) =====
  const header = document.createElement("header");
  header.className = "site-header";

  const headerInner = document.createElement("div");
  headerInner.className = "site-header-inner";

  const logo = document.createElement("div");
  logo.className = "site-logo";
  // You can change the emoji later or replace it with an image
  logo.innerHTML = '<span class="site-logo-emoji">https://res.cloudinary.com/dbrzpkme5/image/upload/v1766069991/Copy_of_ADITYA_3_usm28g.png</span><span class="site-logo-text">Aditya Enterprises</span>';

  headerInner.appendChild(logo);
  header.appendChild(headerInner);

  // Insert header at very top of body
  body.insertBefore(header, body.firstChild);

  // ===== Hero section =====
  const hero = document.createElement("section");
  hero.className = "hero";

  const heroContent = document.createElement("div");
  heroContent.className = "hero-content";

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Aditya Enterprises";

  const subheading = document.createElement("p");
  subheading.textContent =
    "Quality products and services, delivered with trust.";

  const cta = document.createElement("button");
  cta.textContent = "Learn More";
  cta.className = "hero-btn";

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "hero-image-wrapper";

  const img = document.createElement("img");
  // You can replace this filename later with your real website photo
  img.src = "images/website-hero.jpg";
  img.alt = "Aditya Enterprises website preview";
  img.className = "hero-image";

  imgWrapper.appendChild(img);

  heroContent.appendChild(heading);
  heroContent.appendChild(subheading);
  heroContent.appendChild(cta);

  hero.appendChild(heroContent);
  hero.appendChild(imgWrapper);

  // Insert hero after the header
  body.insertBefore(hero, header.nextSibling);
});

