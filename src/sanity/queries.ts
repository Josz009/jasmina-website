import { client } from "./client";

export async function getServices() {
  return client.fetch(
    `*[_type == "service"] | order(order asc) {
      _id, title, slug, tagline, description, heroImage, features, price, bookingUrl
    }`
  );
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(
    `*[_type == "service" && slug.current == $slug][0] {
      _id, title, slug, tagline, description, heroImage, features, price, bookingUrl
    }`,
    { slug }
  );
}

export async function getTestimonials() {
  return client.fetch(
    `*[_type == "testimonial"] | order(order asc) {
      _id, name, role, quote, photo, featured
    }`
  );
}

export async function getBlogPosts() {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id, title, slug, excerpt, coverImage, publishedAt, category
    }`
  );
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id, title, slug, excerpt, coverImage, publishedAt, category, body
    }`,
    { slug }
  );
}

export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      heroHeadline, heroSubheadline, heroImage, aboutHeadline, aboutText, aboutImage, contactEmail
    }`
  );
}
