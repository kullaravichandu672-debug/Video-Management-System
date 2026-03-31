export async function getAIRecommendation(prompt) {
  if (prompt.includes("Action")) {
    return JSON.stringify([
      "John Wick",
      "Mad Max: Fury Road",
      "Gladiator",
      "The Dark Knight",
      "Avengers: Endgame",
      "Extraction",
      "Mission Impossible",
      "Fast & Furious",
      "300",
      "The Raid"
    ]);
  }

  if (prompt.includes("Comedy")) {
    return JSON.stringify([
      "The Mask",
      "Hangover",
      "Superbad",
      "Mr Bean",
      "Rush Hour",
      "Step Brothers",
      "Ted",
      "Deadpool",
      "Home Alone",
      "Jumanji"
    ]);
  }

  return JSON.stringify([
    "Inception",
    "Interstellar",
    "Tenet",
    "Dune",
    "The Matrix"
  ]);
}