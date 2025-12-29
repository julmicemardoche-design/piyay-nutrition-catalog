export const translations = {
  fr: {
    // Header
    tagline: "Suppléments de qualité supérieure",
    admin: "Admin",

    // Hero
    catalogTitle: "Catalogue Professionnel",
    catalogSubtitle: "Découvrez notre sélection de suppléments de nutrition sportive de marques premium",

    // Products
    flavor: "Saveur",
    viewDetails: "Voir détails",
    format: "Format",
    servings: "Portions",
    backToCatalog: "Retour au catalogue",

    // Product Details
    description: "Description",
    benefits: "Bienfaits",
    dosage: "Posologie",
    recommendedDose: "Dose recommandée",
    usageMode: "Mode de consommation",
    ingredients: "Ingrédients",
    nutritionalInfo: "Information nutritionnelle",

    // Footer
    copyright: "© 2025 Piyay Nutrition. Tous droits réservés.",

    // Languages
    language: "Langue",
  },
  ht: {
    // Header (Haitian Creole)
    tagline: "Sipleman kalite siperyè",
    admin: "Admin",

    // Hero
    catalogTitle: "Katalòg Pwofesyonèl",
    catalogSubtitle: "Dekouvri seleksyon sipleman nitrisyon espò nou yo nan mak premyè",

    // Products
    flavor: "Gou",
    viewDetails: "Gade detay",
    format: "Fòma",
    servings: "Pòsyon",
    backToCatalog: "Tounen nan katalòg",

    // Product Details
    description: "Deskripsyon",
    benefits: "Benefis",
    dosage: "Dozaj",
    recommendedDose: "Dòz rekòmande",
    usageMode: "Fason pou konsome",
    ingredients: "Engredyan",
    nutritionalInfo: "Enfòmasyon nitrisyonèl",

    // Footer
    copyright: "© 2025 Piyay Nutrition. Tout dwa rezève.",

    // Languages
    language: "Lang",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.fr
