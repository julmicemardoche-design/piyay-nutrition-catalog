"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type Language = "fr" | "ht"

const translations = {
  fr: {
    tagline: "Suppléments de qualité supérieure",
    catalogTitle: "Catalogue",
    catalogSubtitle: "Découvrez notre sélection de suppléments de nutrition sportive de marques premium",
    flavor: "Saveur",
    benefits: "Bienfaits",
    dosage: "Posologie",
    contact: "Contactez-nous sur WhatsApp",
    contactFooter: "Contactez-nous",
    copyright: "© 2025 Piyay Nutrition. Tous droits réservés.",
    accessCatalog: "Accéder au catalogue en ligne",
    scanCatalog: "Scannez pour visiter le catalogue",
  },
  ht: {
    tagline: "Sipleman kalite siperyè",
    catalogTitle: "Katalòg",
    catalogSubtitle: "Dekouvri seleksyon sipleman nitrisyon espò nou yo nan mak premyè",
    flavor: "Gou",
    benefits: "Benefis",
    dosage: "Dozaj",
    contact: "Kontakte nou sou WhatsApp",
    contactFooter: "Kontakte nou",
    copyright: "© 2025 Piyay Nutrition. Tout dwa rezève.",
    accessCatalog: "Aksede katalòg sou entènèt",
    scanCatalog: "Eskane pou vizite katalòg",
  },
}

const products = [
  {
    id: 1,
    name: "R/OAR Ferocious Pre-Workout",
    brand: "Rule One",
    category: "Pre-Workout",
    flavor: "Blue Razz",
    size: "30 portions",
    price: 1200,
    image_url: "/images/roar-preworkout.jpeg",
    description_fr: "Pre-workout féroce pour une énergie explosive",
    description_ht: "Pre-workout pou yon enèji eksplozif",
    benefits_fr: "Augmente l'énergie, améliore la concentration, booste la performance",
    benefits_ht: "Ogmante enèji, amelyore konsantrasyon, ranfòse pèfòmans",
    dosage_fr: "1 mesure 20-30 minutes avant l'entraînement",
    dosage_ht: "1 mezi 20-30 minit anvan antrènman",
  },
  {
    id: 2,
    name: "Creatine X3",
    brand: "SixStar",
    category: "Créatine",
    flavor: "Fruit Punch",
    size: "993g (60 portions)",
    price: 1200,
    image_url: "/images/creatine-x3-sixstar.jpeg",
    description_fr: "Créatine monohydrate 8g par portion - Construit 4X plus de muscle",
    description_ht: "Kreyatin monohydrat 8g pa pòsyon - Konstwi 4X plis mis",
    benefits_fr: "Augmente la force musculaire, améliore la performance, récupération rapide",
    benefits_ht: "Ogmante fòs misk, amelyore pèfòmans, rekiperasyon rapid",
    dosage_fr: "1 mesure par jour mélangée avec de l'eau",
    dosage_ht: "1 mezi pa jou melanje avèk dlo",
  },
  {
    id: 3,
    name: "100% Whey Protein",
    brand: "Nutrex",
    category: "Protéine",
    flavor: "Vanilla",
    size: "907g (27 portions)",
    price: 1550,
    image_url: "/images/whey-protein-nutrex.jpeg",
    description_fr: "Protéine de lactosérum pure pour muscle maigre",
    description_ht: "Pwoteyin laktoserohm pi pou misk mèg",
    benefits_fr: "27g de protéine, favorise la croissance musculaire, récupération optimale",
    benefits_ht: "27g pwoteyin, ankouraje kwasans misk, rekiperasyon optimal",
    dosage_fr: "1-2 mesures après entraînement ou entre les repas",
    dosage_ht: "1-2 mezi apre antrènman oswa ant repa",
  },
  {
    id: 4,
    name: "Creatine Monohydrate",
    brand: "Nutrex",
    category: "Créatine",
    flavor: "Sans saveur",
    size: "300g (60 portions)",
    price: 850,
    image_url: "/images/creatine-monohydrate-nutrex.jpeg",
    description_fr: "Créatine monohydrate pure et micronisée",
    description_ht: "Kreyatin monohydrat pi ak mikronize",
    benefits_fr: "Augmente force et performance, soutient croissance musculaire",
    benefits_ht: "Ogmante fòs ak pèfòmans, sipòte kwasans misk",
    dosage_fr: "1 mesure (5g) par jour avec votre boisson préférée",
    dosage_ht: "1 mezi (5g) pa jou avèk bwason ou prefere",
  },
  {
    id: 5,
    name: "Proteína de Soya",
    brand: "Granix",
    category: "Protéine",
    flavor: "Nature",
    size: "340g (12 oz)",
    price: 300,
    image_url: "/images/proteina-soya-granix.jpeg",
    description_fr: "Protéine de soya - Gardez la forme!",
    description_ht: "Pwoteyin soya - Rete an fòm!",
    benefits_fr: "Source de protéine végétale, sans cholestérol, facile à digérer",
    benefits_ht: "Sous pwoteyin vegetal, san kolesteròl, fasil pou dijere",
    dosage_fr: "Ajouter 1 cuillère à soupe dans du lait, jus ou smoothie",
    dosage_ht: "Ajoute 1 kiyè nan lèt, ji oswa smoothie",
  },
  {
    id: 6,
    name: "100% Mass Gainer",
    brand: "MuscleTech",
    category: "Mass Gainer",
    flavor: "Chocolate Fudge Brownie",
    size: "2.33kg (16 portions)",
    price: 1900,
    image_url: "/images/mass-gainer-muscletech.jpeg",
    description_fr: "Gainer haute protéine pour prise de masse",
    description_ht: "Gainer wo pwoteyin pou pran mas",
    benefits_fr: "60g protéine, 1500 calories, 5g créatine par portion",
    benefits_ht: "60g pwoteyin, 1500 kalori, 5g kreyatin pa pòsyon",
    dosage_fr: "1 portion entre les repas ou après l'entraînement",
    dosage_ht: "1 pòsyon ant repa oswa apre antrènman",
  },
]

export default function CataloguePage() {
  const [lang, setLang] = useState<Language>("fr")
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-16">
                <Image src="/logo-piyay.png" alt="Piyay Nutrition" fill className="object-contain" priority />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-slate-900">Piyay Nutrition</h1>
                <p className="text-xs md:text-sm text-slate-600">{t.tagline}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant={lang === "fr" ? "default" : "outline"} size="sm" onClick={() => setLang("fr")}>
                Français
              </Button>
              <Button variant={lang === "ht" ? "default" : "outline"} size="sm" onClick={() => setLang("ht")}>
                Kreyòl
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{t.catalogTitle}</h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto text-balance mb-8">{t.catalogSubtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-8">
            <Card className="p-6 bg-white">
              <p className="text-slate-900 font-semibold mb-3">{t.contact}</p>
              <div className="relative w-48 h-48 mx-auto">
                <Image src="/qr-piyay-whatsapp.jpeg" alt="QR Code WhatsApp" fill className="object-contain" />
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <p className="text-slate-900 font-semibold mb-3">{t.accessCatalog}</p>
              <div className="relative w-48 h-48 mx-auto">
                <Image src="/qr-catalogue-piyay.jpg" alt="QR Code Catalogue" fill className="object-contain" />
              </div>
              <p className="text-xs text-slate-600 mt-2">{t.scanCatalog}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative aspect-square bg-slate-100">
                  <Image
                    src={product.image_url || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                  <Badge className="absolute top-3 right-3 bg-blue-600">{product.category}</Badge>
                </div>
                <div className="p-4">
                  <p className="text-xs text-slate-500 font-medium mb-1">{product.brand}</p>
                  <h3 className="font-bold text-lg mb-2 text-balance leading-tight">{product.name}</h3>
                  {product.flavor && (
                    <p className="text-sm text-slate-600 mb-1">
                      {t.flavor}: {product.flavor}
                    </p>
                  )}
                  <p className="text-sm text-slate-500 mb-3">{product.size}</p>

                  {/* Description */}
                  <p className="text-sm text-slate-700 mb-3 line-clamp-2">
                    {lang === "fr" ? product.description_fr : product.description_ht}
                  </p>

                  {/* Benefits */}
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-slate-900 mb-1">{t.benefits}</p>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {lang === "fr" ? product.benefits_fr : product.benefits_ht}
                    </p>
                  </div>

                  {/* Dosage */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-1">{t.dosage}</p>
                    <p className="text-xs text-slate-600">{lang === "fr" ? product.dosage_fr : product.dosage_ht}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-2xl font-bold text-blue-600">{product.price} $HT</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="relative w-24 h-12 mx-auto mb-4">
            <Image src="/logo-piyay.png" alt="Piyay" fill className="object-contain brightness-0 invert" />
          </div>
          <p className="text-sm text-slate-400">{t.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
