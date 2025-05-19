// src/lib/api.ts

export async function getGallery() {
  const response = await fetch("http://localhost:5000/api/gallery");
  if (!response.ok) {
    throw new Error("Failed to fetch gallery");
  }
  return response.json();
}
