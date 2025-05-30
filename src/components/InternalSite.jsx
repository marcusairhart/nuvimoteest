import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Rocket, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function InternalSite() {
  const features = [
    {
      icon: Rocket,
      title: "10x plus rapide",
      desc: "Automatisation complète du parcours de vente & d'achat : estimation instantanée, visites virtuelles, signature électronique.",
    },
    {
      icon: TrendingUp,
      title: "90% moins cher",
      desc: "Frais fixes dès 990 € par transaction au lieu des commissions d'agence traditionnelles (4–6%).",
    },
    {
      icon: ShieldCheck,
      title: "100% transparent",
      desc: "Blockchain & scoring de fiabilité pour sécuriser et tracer chaque étape, sans opacité ni intermédiaire.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          NUVIMO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600"
        >
          La plateforme 100% digitale qui réinvente l'immobilier en France :
          plus d'agence, plus de stress, plus de surcoût.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <Button size="lg" className="px-8 py-6 text-lg">
            Voir la Roadmap 2025
          </Button>
        </motion.div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full shadow-md rounded-2xl">
                <CardHeader className="flex flex-col items-center mt-4">
                  <Icon size={48} />
                  <CardTitle className="mt-4 text-2xl font-semibold text-center">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Une solution tout-en-un
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg max-w-3xl mx-auto">
            De l'estimation IA ultra‑précise au paiement sécurisé, NUVIMO
            automatise chaque étape pour vendre, acheter ou louer sans agence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              icon: Zap,
              title: "Estimation instantanée IA",
              desc: "Algorithmes propriétaires croisant ventes notariales et annonces en temps réel pour un prix juste dès le départ.",
            },
            {
              icon: Rocket,
              title: "Matching intelligent",
              desc: "Moteur de recommandation qui connecte vendeurs et acheteurs qualifiés en fonction de leurs critères & scoring.",
            },
            {
              icon: ShieldCheck,
              title: "Visites virtuelles 3D",
              desc: "Jumeaux numériques haute‑fidélité pour réduire 70% des visites physiques et accélérer la décision.",
            },
            {
              icon: TrendingUp,
              title: "Notaire & signature en ligne",
              desc: "Parcours 100% digital avec partenaires assermentés, signature électronique et cachet blockchain pour sécuriser l'acte.",
            },
            {
              icon: ShieldCheck,
              title: "Paiement séquestré sécurisé",
              desc: "Fonds stockés sur compte de cantonnement jusqu'à la remise des clés, protégeant vendeurs comme acheteurs.",
            },
            {
              icon: Rocket,
              title: "Tableau de bord temps réel",
              desc: "Suivi des offres, documents et échéances dans une interface unifiée, accessible sur web & mobile.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="shadow-sm rounded-2xl h-full">
              <CardHeader className="flex items-center gap-4 p-6">
                <Icon size={32} />
                <CardTitle className="text-lg font-medium">{title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                {desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-gray-100 px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Prêt·e à disrupter l'immobilier ?
        </h3>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          Rejoignez la roadmap interne pour contribuer au produit, tester la
          bêta et construire l'avenir de NUVIMO.
        </p>
        <Button size="lg" className="mt-8 px-8 py-6 text-lg">
          Rejoindre le Slack interne
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} NUVIMO — Document interne
        confidentiel.
      </footer>
    </div>
  );
}
