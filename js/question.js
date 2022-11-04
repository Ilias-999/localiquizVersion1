// const quiz = [{
//         q: "Dans quel département se situe Micropolis \"la cité des insectes\"?",
//         options: ["Tarn", "Gard", "Gers", "Aveyron"],
//         answer: 3,
//         source: "Wikipédia",
//         linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Micropolis,_la_cit%C3%A9_des_insectes",
//         text: "Micropolis, la cité des insectes est un espace consacré à la sensibilisation au monde des insectes situé sur le Lévézou, à Saint-Léons, dans le département de l'Aveyron. Le parc a été inspiré par l'entomologiste Jean-Henri Fabre, né dans le village de Saint-Léons et par l'élan du film Microcosmos. Il contient de vastes espaces extérieurs, notamment une promenade intitulée le carnaval des insectes qui est à la fois un espace d'observation de la nature avec un panorama sur le mont Seigne (1 128 m - 2e sommet du Lévézou) et un espace ludique d'évocation des insectes à travers 11 stations figuratives qui présentent des insectes géants. Le bâtiment couvert comprend 15 salles réparties sur 2 400 m2."
//     },
//     {
//         q: "Dans quel département se déroulent es fêtes de l'ours en Vallespir?",
//         options: ["Aude", "Ariège", "Hautes-Pyrénées ", "Pyrénées-Orientales"],
//         answer: 3,
//         source: "Sud Canigo",
//         linkWeb: "https:\/\/www.sudcanigo.com\/traditions\/fetes-de-l-ours\/",
//         text: "Les Fêtes de l’Ours sont issues de la légende de \"Jean de l’Ours* et d’anciens rituels traditionnels initiatiques de la fertilité marquant le renouveau printanier. L’ours ravisseur de jeunes bergères est pourchassé par les chasseurs, il est ensuite capturé et montré aux villageois sur les places du village. Au cours de la cérémonie de clôture, la bête est rasée et retrouve ainsi son aspect humain. *Jean de l’Ours est un être hybride, mi-humain, mi-animal, né d’une femme et d’un ours, et doté d’une force surhumaine qui lui permet de surmonter diverses épreuves."
//     },
//     {
//         q: "Dans quel département d'Occitanie peut-on  déguster l'Aligot?",
//         options: ["Lozère", "Aveyron", "Lot", "Tarn"],
//         answer: 1,
//         source: "Cuisine de A à Z",
//         linkWeb: "https:\/\/www.cuisineaz.com\/recettes\/aligot-2701.aspx",
//         text: "Cuisiné dans la région de l’Aubrac, à cheval sur l’Aveyron, le Cantal et la Lozère, l'aligot est une spécialité culinaire traditionnelle consistant en une purée de pommes de terre à l’ail, détendue avec de la tomme fraîche, du beurre et de la crème. Longuement travaillé, il acquiert une texture élastique inimitable. Un accompagnement réconfortant et réchauffant pour les soirées d’hiver, à servir aux côtés d’une saucisse de Toulouse ou d’une belle entrecôte !"
//     },
//     {
//         q: "Dans quel département d'Occitanie peut-on  déguster le Poumpet?",
//         options: ["Ariège", "Hérault", "Tarn", "Haute-Garonne"],
//         answer: 2,
//         source: "Cuisine de A à Z",
//         linkWeb: "https:\/\/www.cuisineaz.com\/recettes\/poumpet-102283.aspx",
//         text: "Le Poumpet ou Pompet est une spécialité pâtissière originale du Tarn. Il s’agit d’une délicieux gâteau feuilleté parfumé au citron et à la bergamote. Nous vous proposons d’apprendre à réaliser cette recette traditionnelle en toute simplicité. Avec sa pâte croustillante et pleine de saveurs, cette pâtisserie est idéale pour toutes les occasions !"
//     },
//     {
//         q: "Dans quel département d'Occitanie peut-on  déguster la Gardianne de Taureau?",
//         options: ["Gard", "Pyrénées-Orientales", "Hérault", "Lozère"],
//         answer: 0,
//         source: "Cuisine de A à Z",
//         linkWeb: "https:\/\/www.cuisineaz.com\/recettes\/gardianne-de-taureau-61906.aspx",
//         text: "On l’appelle aussi daube camarguaise, et pour cause : la gardianne de taureau n’est autre que la variante régionale de la daube provençale, à base de viande de taureau… de Camargue ! Marinée dans le vin rouge, agrémentée d’olives et de carottes, de champignons et de lardons, cette viande de caractère livre le meilleur d’elle-même sans trop en faire après quelques heures de cuisson. Inutile de préciser que la gardianne de taureau se sert avec du riz de Camargue !"
//     },
//     {
//         q: "Dans quel département se situe la forteresse de Salses-le-Château?",
//         options: ["Gard", "Pyrénées-Orientales", "Aude", "Lozère"],
//         answer: 1,
//         source: "Forteresse de Salses",
//         linkWeb: "https:\/\/www.forteresse-salses.fr\/",
//         text: "Construit à la fin du XVe siècle par Ramiro Lopez, grand architecte espagnol à l'emplacement de sources fort utiles en cas de siège, l'édifice garde l'ancienne frontière. Assiégée, prise et reprise en 1503, 1639, 1640, la place est définitivement conquise par les Français en 1642. Le traité des Pyrénées de 1659 redessine les territoires : moins stratégique, la forteresse perd alors de son importance. À partir de 1691, elle est partiellement restaurée par Vauban."
//     },
//     {
//         q: "Dans quel département se situe le château de Cenevières?",
//         options: ["Lot", "Tarn", "Lozère", "Ariège"],
//         answer: 0,
//         source: "Château de Cenevières",
//         linkWeb: "https:\/\/www.chateau-cenevieres.com\/",
//         text: "Le château fut une place forte médiévale sous Pépin Le Bref lors de la capture du Duc d'Aquitaine Gaiffier. La puissante famille de Gourdon le transformera en place fortifiée pour lutter contre les anglais pendant la guerre de 100 ans. Flottard de Gourdon, puis son fils Antoine de Gourdon participeront aux guerres d'Italie avec François 1er. Antoine en ramènera l'amour de l'architecture de la Renaissance et embellira le château en 1550. Il se convertit ensuite au protestantisme, participe aux guerres de religion et reçoit Henri IV avant l'attaque de Cahors fin mai 1580."
//     },
//     {
//         q: "Dans quel département se situe la grotte de Pech-Merle?",
//         options: ["Lozère", "Pyrénées-Orientales", "Lot", "Tarn"],
//         answer: 2,
//         source: "Wikipédia",
//         linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Grotte_du_Pech_Merle",
//         text: "Assez vaste, la grotte s'étend sur près de deux kilomètres mais seulement 1 200 m de galeries et de salles sont actuellement accessibles aux visiteurs. La grotte comprend deux étages de galeries communiquant par des puits et des boyaux en pente situées environ 100 mètres au-dessus des rivières (Sagne et Célé)"
//     }
// ]


const quiz = [{
        q: "La Garonne prend sa source en?",
        options: ["Andorre", "Espagne", "France", "Portugal"],
        answer: 1,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Garonne",
        text: "La Garonne; Garona en occitan, catalan et espagnol est un fleuve principalement français prenant sa source en Espagne et qui coule sur 529 km avant de se jeter dans l’océan Atlantique ; son estuaire commun avec la Dordogne est la Gironde. Elle a donné son nom aux départements français de Haute-Garonne, de Lot-et-Garonne et de Tarn-et-Garonne."
    },
    {
        q: "La Garonne a une longueur totale de?",
        options: ["529km", "777km", "814km", "1006km"],
        answer: 0,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Garonne",
        text: "La Garonne; Garona en occitan, catalan et espagnol est un fleuve principalement français prenant sa source en Espagne et qui coule sur 529 km avant de se jeter dans l’océan Atlantique ; son estuaire commun avec la Dordogne est la Gironde. Elle a donné son nom aux départements français de Haute-Garonne, de Lot-et-Garonne et de Tarn-et-Garonne."
    },
    {
        q: "La Garbure est un plat à base de?",
        options: ["Haricots Tarbais", "Pommes de terre", "Carottes", "Choux"],
        answer: 3,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Garbure",
        text: "La garbure (de l’occitan garbura, soupe aux choux et au confit d'oie ou de canard1, du gascon garbure, aussi appelée bigourne dans le Périgord) est une potée au chou, avec des morceaux de légumes, traditionnelle de la cuisine gasconne dans le sud-ouest de la France. Elle est d'origine béarnaise et bigourdane."
    },
    {
        q: "De quelle origine est le mot \"alambic\"?",
        options: ["Basque", "Latine", "Arabe", "Occitan"],
        answer: 2,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Alambic",
        text: "Le mot alambic vient de l'arabe al 'inbïq, lui-même emprunté au grec tardif ambix (= vase). Un alambic est un appareil destiné à la séparation de produits par chauffage puis refroidissement"
    },
    {
        q: "Quelle est la capitale de l'Armagnac",
        options: ["Condom", "Eauze", "Nogaro", "Agen"],
        answer: 1,
        source: "Mairie Eauze",
        linkWeb: "https:\/\/www.mairie-eauze.fr\/editoVilleEauze#:~:text=%C3%89auze%2C%20Capitale%20de%20l'Armagnac,bien%20pour%20toute%20votre%20vie.",
        text: "Éauze (Gers - 32)capitale de l’Armagnac et capitale antique vous accueille au cœur de la Gascogne pour quelques jours ou bien pour toute votre vie."
    },
    {
        q: "Le \"Cabécou\" est un fromage réalisé à partir de?",
        options: ["lait de vache", "lait de brebis", "lait de soja", "lait cru de chèvre"],
        answer: 3,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Cab%C3%A9cou",
        text: "Le cabécou est un fromage généralement de lait cru de chèvre originaire des régions du Massif central comme le Quercy, le Rouergue1, la Haute-Auvergne2 , le Bas-Limousin et le Périgord. Il s'agit d'une appellation agricole."
    },
    {
        q: "Quel est le cépage emblématique du vin de Cahors?",
        options: ["Le Merlot", "Le Syrah", "Le Malbec", "Le Chardonnay"],
        answer: 2,
        source: "Vinovalie",
        linkWeb: "http:\/\/www.vinovalie.com\/le-malbec-le-cepage-roi-de-lappellation-cahors#:~:text=Le%20Malbec%2C%20%C3%A9galement%20appel%C3%A9%20C%C3%B4t,embl%C3%A9matique%20de%20l'AOP%20Cahors.",
        text: "Le Malbec, également appelé Côt, est le cépage rouge puissant et fruité emblématique de l’AOP Cahors."
    },
    {
        q: "Au Moyen Âge le vin de Cahors était appelé?",
        options: ["Le vin des Dieux", "Le vin rosé", "Le vin noir", "Le vin rouge"],
        answer: 2,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Cahors_(AOC)",
        text: "Ce vignoble multiséculaire a connu une grande renommée du Moyen Âge jusqu'à la crise du phylloxera du dernier tiers du xixe siècle. Son « vin noir » est vendu de l'Angleterre (black wine) jusqu'à la Russie (kaorskoie vino) où, dénommé \"Kaor\" ou \"Kagor\", il est utilisé comme vin de messe."
    },
    {
        q: "Depuis quelle époque le vin de Cahors existe-t-il?",
        options: ["Le moyen-âge", "La Renaissance", "La révolution française", "L'empire Romain"],
        answer: 3,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Cahors_(AOC)",
        text: "Ce vignoble multiséculaire a connu une grande renommée du Moyen Âge jusqu'à la crise du phylloxera du dernier tiers du xixe siècle. Son « vin noir » est vendu de l'Angleterre (black wine) jusqu'à la Russie (kaorskoie vino) où, dénommé \"Kaor\" ou \"Kagor\", il est utilisé comme vin de messe."
    },
    {
        q: "Le château de Carcassonne est situé dans le département de?",
        options: ["L'Aude", "L'Ariège", "L'Hérault", "La Haute-Garonne"],
        answer: 0,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Cit%C3%A9_de_Carcassonne",
        text: "La Cité de Carcassonne est un ensemble architectural médiéval qui se trouve dans la ville française de Carcassonne dans le département de l'Aude, région d'Occitanie."
    },
    {
        q: "Le château de Montségur a été une place forte?",
        options: ["Cathare", "Templière", "Arabe", "Basque"],
        answer: 0,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Ch%C3%A2teau_de_Monts%C3%A9gur",
        text: "Le château de Montségur (Montsegur en occitan), est un ancien château fort, dit \"cathare\", reconstruit en 1206, mais remanié à la fin du xiiie siècle, dont les vestiges se dressent sur la commune française de Montségur dans le département de l'Ariège, en région Occitanie."
    },
    {
        q: "La basilique Saint-Sernin est située à?",
        options: ["Montauban", "Toulouse", "Foix", "Albi"],
        answer: 1,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Basilique_Saint-Sernin",
        text: "La basilique Saint-Sernin est le plus important édifice religieux catholique de Toulouse, chef-lieu de la région Occitanie, dans le Midi de la France. C'est une des plus grandes églises romanes conservées en Europe..."
    },
    {
        q: "Dans quel département se situe le village de Rocamadour?",
        options: ["Tarn et Garonne", "Tarn", "Lot", "Dordogne"],
        answer: 2,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Rocamadour",
        text: "Rocamadour est une commune du sud-ouest de la France, située dans le nord du département du Lot, en région Occitanie. Elle appartient à la micro-région touristique de la Vallée de la Dordogne."
    },
    {
        q: "Dans quel département se situe le village de Conques?",
        options: ["Aveyron", "Tarn", "Hérault", "Gers"],
        answer: 0,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Conques",
        text: "Conques (en occitan Concas) est une ancienne commune française située dans le département de l'Aveyron en Midi-Pyrénées, en région Occitanie."
    },
    {
        q: "Ce village du Gers est appelé \"la petite Carcassonne du Gers\". Lequel est-ce?",
        options: ["Montréal du Gers", "Fourcès", "La Romieu", "Larressingle"],
        answer: 3,
        source: "Office Tourisme Condom",
        linkWeb: "https:\/\/www.tourisme-condom.com\/decouvrir\/le-grand-site-armagnac-abbaye-et-cites\/le-village-fortifie-de-larressingle",
        text: "Larressingle, l’un des Plus beaux et plus petits villages fortifiés de France. Murs d’enceinte, courtines, tours crénelées, fossé, porte d’entrée, château du XIIIe s, église fortifiée du XIIe s, maisons médiévales accolées aux murailles, le village vous reçoit tel qu’il était au XVIe siècle."
    },
    {
        q: "En quelle année fut posée la première pierre de l'abbaye de Fontfroide?",
        options: [1000, 1238, 1093, 998],
        answer: 2,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Abbaye_Sainte-Marie_de_Fontfroide",
        text: "L’abbaye de Fontfroide est une abbaye cistercienne située sur le territoire de la commune de Narbonne, dans le département de l'Aude en France. Initialement abbaye bénédictine (1093), elle est intégrée à l'ordre cistercien entre 1144 et 1145."
    },
    {
        q: "Dans quel département d'Occitanie se trouve l'abbaye de Fonfroide",
        options: ["Aude", "Lozère", "Gard", "Hérault"],
        answer: 0,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Abbaye_Sainte-Marie_de_Fontfroide",
        text: "L’abbaye de Fontfroide est une abbaye cistercienne située sur le territoire de la commune de Narbonne, dans le département de l'Aude en France. Initialement abbaye bénédictine (1093), elle est intégrée à l'ordre cistercien entre 1144 et 1145."
    },
    {
        q: "L'ordre religieux qui a créé l'abbaye de Fontfroide est de type?",
        options: ["Dominicain", "Sistercien", "Bénédictin", "Franciscain"],
        answer: 1,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Abbaye_Sainte-Marie_de_Fontfroide",
        text: "L’abbaye de Fontfroide est une abbaye cistercienne située sur le territoire de la commune de Narbonne, dans le département de l'Aude en France. Initialement abbaye bénédictine (1093), elle est intégrée à l'ordre cistercien entre 1144 et 1145."
    },
    {
        q: "Dans quel département est situé le cirque de Gavarnie?",
        options: ["Hérault", "Haute-Garonne", "Hautes-Pyrénées", "Ariège"],
        answer: 2,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Cirque_de_Gavarnie",
        text: "Le cirque de Gavarnie est un cirque naturel de type glaciaire situé dans le massif montagneux des Pyrénées, sur le territoire de la commune française de Gavarnie, dans le département des Hautes-Pyrénées, en région Occitanie."
    },
    {
        q: "Dans quel département est située la cité forte d'Aigues-Mortes?",
        options: ["Hérault", "Gard", "Aude", "Bouches du Rhône"],
        answer: 1,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Aigues-Mortes",
        text: "Aigues-Mortes, en occitan Aigas Mòrtas, est une commune française de Petite Camargue, située à la pointe sud du département du Gard, en région Occitanie."
    },
    {
        q: "Le Canal du midi a été construit grâce à ?",
        options: ["Pierre Reneau", "Pierre-Paul Riquet", "Nicolas Bachelier", "Bernard Arribat"],
        answer: 1,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Pierre-Paul_Riquet",
        text: "Pierre-Paul Riquet, baron de Bonrepos, né le 29 juin 1609 à Béziers dans la province de Languedoc (aujourd'hui Occitanie) et mort le 1er octobre 1680 à Toulouse, est un fermier général des gabelles et entrepreneur français qui a conçu et réalisé le canal du Midi dans le Sud de la France entre la Garonne et la mer Méditerranée."
    },
    {
        q: "Quel roi a autorisé et financé le Canal du Midi?",
        options: ["Henri IV", "François 1er", "Louis XIV", "Louis XIII"],
        answer: 2,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Canal_du_Midi",
        text: "Louis XIV autorise le début des travaux par un édit royal d'octobre 1666. Supervisé par Pierre-Paul Riquet, le chantier dure de 1666 à 1681, sous le contrôle de Jean-Baptiste Colbert."
    },
    {
        q: "Où se situe le partage des eaux du Canal du midi?",
        options: ["Béziers", "Montauban", "Col du Galibier", "Seuil de Naurouze"],
        answer: 3,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Canal_du_Midi",
        text: "Pierre-Paul Riquet, son concepteur, a permis d'acheminer l'eau de la montagne Noire jusqu'au seuil de Naurouze, le point le plus élevé du canal."
    },
    {
        q: "Dans quel département se situe le massif du Canigou?",
        options: ["Ariège", "Pyrénées-Orientales", "Haute-Garonne", "Massif Central"],
        answer: 1,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Pic_du_Canigou",
        text: "Le pic du Canigou (catalan : Pica del Canigó) est le haut sommet oriental de la chaîne des Pyrénées, sur le massif du Canigou. Il est situé dans le Conflent, département des Pyrénées-Orientales, et culmine à 2 784 mètres d'altitude."
    },
    {
        q: "Dans quel département se situe le site préhistorique du Mas D'Azil?",
        options: ["Aude", "Gard", "Dordogne", "Ariège"],
        answer: 3,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Le_Mas-d'Azil",
        text: "Le Mas-d'Azil, en occitan Lo Mas d'Asilh, est une commune française située dans le nord du département de l'Ariège, en région Occitanie."
    },
    {
        q: "Ce département a vu naître le fromage \"Roquefort\". Lequel est-ce?",
        options: ["Aveyron", "Tarn", "Lot", "Gers"],
        answer: 0,
        source: "Le guide du fromage",
        linkWeb: "https:\/\/www.leguidedufromage.com\/roquefort-io319.html",
        text: "Le Roquefort est un fromage au lait cru et entier de brebis, à pâte persillée et à croûte naturelle, produit exclusivement dans une grande partie du département de l’Aveyron et quelques communes des départements de l'Aude, la Lozère, le Gard, l'Hérault et le Tarn en région Occitanie."
    },
    {
        q: "Le \"Roquefort\" est un fromage réalisé à partir de?",
        options: ["lait de vache", "lait de brebis", "lait de soja", "lait cru de chèvre"],
        answer: 1,
        source: "Le guide du fromage",
        linkWeb: "https:\/\/www.leguidedufromage.com\/roquefort-io319.html",
        text: "Le Roquefort est un fromage au lait cru et entier de brebis, à pâte persillée et à croûte naturelle, produit exclusivement dans une grande partie du département de l’Aveyron et quelques communes des départements de l'Aude, la Lozère, le Gard, l'Hérault et le Tarn en région Occitanie."
    },
    {
        q: "Le \"Tripou\" est un plat réalisé à partir de?",
        options: ["Tripes de mouton", "Tripes de sanglier", "Tripes de veau", "Tripes d'agneau"],
        answer: 2,
        source: "La Naucelloise",
        linkWeb: "https:\/\/www.lanaucelloise.fr\/fr\/les-tripous\/origine-du-plat.php#:~:text=Le%20tripou%20aujourd'hui&text=Il%20est%20compos%C3%A9%20d'estomac,morceaux%20on%20roule%20la%20farce.",
        text: "Le tripou est composé d'estomac de mouton, d'une farce faite de jambon, d'ail et de persil et certains y ajoutent des tripes de veau. L'estomac de mouton, ou de veau, est détaillé en longues lanières, coupées ensuite dans le sens de la longueur et dans lesquels morceaux on roule la farce."
    },
    {
        q: "Où trouve-t-on plus particilèrement les tripous dans la région Occitanie?",
        options: ["Aveyron", "Lot", "Gard", "Ariège"],
        answer: 0,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Tripou",
        text: "Le tripou (« tripette » en français, pluriel tripous et non tripoux) est un plat de ménage à base de tripes de veau. On en trouve en Auvergne mais également dans l'Aveyron et le Haut-Languedoc."
    },
    {
        q: "La population de Montauban s'élève en 2019 aux environs de ?",
        options: ["61000 habitants", "50000 habitants", "98000 habitants", "73840 habitants"],
        answer: 0,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Monts_de_Lacaune",
        text: "Il se situe principalement dans l'extrémité est du Tarn et déborde un peu sur les départements de l'Aveyron et de l'Hérault."
    },
    {
        q: "Dans quel département se situent principalement les monts de Lacaune?",
        options: ["Pyrénes-Orientales", "Gard", "Tarn", "Haute-Garonne"],
        answer: 2,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Monts_de_Lacaune",
        text: "Il se situe principalement dans l'extrémité est du Tarn et déborde un peu sur les départements de l'Aveyron et de l'Hérault."
    },
    {
        q: "Ce festival de jazz internationalement connu est situé à?",
        options: ["Tarbes", "Auch", "Marciac", "Vic-Fezensac"],
        answer: 2,
        source: "Tourisme Occitanie",
        linkWeb: "https:\/\/www.tourisme-occitanie.com\/agenda\/temps-forts\/jazz-in-marciac\/",
        text: "A Marciac dans le Gers se déroule l’un des festivals de jazz les plus réputés d’Europe. Chaque été fin juillet-début août, les stars de la planète jazz se retrouvent dans ce village du Gers. C’est le temps béni de Jazz in Marciac, une expérience mémorable à vivre absolument. L’ambiance, vibrante de passion et d’enthousiasme, est irrésistible."
    },
    {
        q: "Chaque année la ville de Condom dans le Gers organise?",
        options: ["Un festival Salsa", "Des bandas", "Une corrida", "Un feu d'artifice géant"],
        answer: 1,
        source: "Tourisme Condom",
        linkWeb: "https:\/\/www.tourisme-condom.com\/a-voir-a-faire\/sortir\/agenda\/festival-europeen-de-bandas-y-penas-753440",
        text: "Condom, capitale de la Ténarèze, située dans le nord du Gers, organise lors du Festival de Bandas y Peñas, le plus grand rassemblement de cuivres et de percussions du sud-ouest de la France."
    },
    {
        q: "Dans quel département se situe le village balnéaire de Collioure?",
        options: ["Gard", "Hérault", "Pyrénées-Orientales", "Aude"],
        answer: 2,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Collioure",
        text: "Collioure (en catalan : Cotlliure) est une commune française située sur le littoral méditerranéen du département des Pyrénées-Orientales."
    },
    {
        q: "Les 9 écluses de Fonseranes dédiées au canal de midi se situent à?",
        options: ["Carcassonne", "Béziers", "Montpellier", "Narbonne"],
        answer: 1,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/%C3%89cluses_de_Fonseranes",
        text: "Les Écluses de Fonseranes, ou l'échelle d'écluses de Fonseranes, sont un ensemble de huit écluses contiguës (écluse octuple), situées à Béziers (Hérault), constituant un ouvrage majeur du canal du Midi."
    },
    {
        q: "La ville d'Agde a été une cité?",
        options: ["Romaine", "Grecque", "Arabe", "Wisigoth"],
        answer: 1,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Agde#Histoire",
        text: "Le site d'Agde fut fréquenté par des Phocéens venus de Marseille vers 525 av. J.-C., ce qui rend le village un peu plus jeune que Béziers (575 av. J.-C.) et Marseille (600 av. J.-C.)."
    },
    {
        q: "Le lac de Saint-Féréol alimente en eau?",
        options: ["la Garonne", "la ville de Toulouse", "la Catalogne", "le canal du midi"],
        answer: 3,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Lac_de_Saint-Ferr%C3%A9ol",
        text: "Le lac de Saint-Ferréol est un lac de barrage français de la montagne Noire situé  en région Occitanie. Il est le principal réservoir pour l'alimentation en eau du canal du Midi."
    },
    {
        q: "La cité médiévale d'Aigues-Mortes a également été au Moyen-Âge?",
        options: ["un lieu de villégiature pour le roi", "une place forte", "un port", "un lieu d'échanges"],
        answer: 2,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Aigues-Mortes#Histoire",
        text: "Les remparts d'Aigues-Mortes ont été construits par Saint Louis. En effet, dès le début de son règne, Louis IX souhaite se doter d'un débouché sur la Méditerranée ; c'est dans ce contexte qu'il fait construire le port d'Aigues-Mortes."
    },
    {
        q: "Dans quel département se situe le gouffre de Padirac?",
        options: ["Gers", "Aveyron", "Creuse", "Lot"],
        answer: 3,
        source: "Vallée-Dordogne",
        linkWeb: "https:\/\/www.vallee-dordogne.com\/grottes-et-gouffres\/le-gouffre-de-padirac",
        text: "Le Gouffre de Padirac en Vallée de la Dordogne est situé près de Rocamadour sur le causse du Quercy dans le Lot à une heure de Sarlat"
    },
    {
        q: "Quelle est la profondeur du gouffre de Padirac?",
        options: ["258m", "103m", "55m", 350],
        answer: 1,
        source: "Vallée-Dordogne",
        linkWeb: "https:\/\/www.vallee-dordogne.com\/grottes-et-gouffres\/le-gouffre-de-padirac",
        text: "L’orifice fait 35 mètres de diamètre et le gouffre plonge à 75 mètres de la surface du causse. Au fond, à 103 mètres sous terre, coule la rivière de Padirac qui s’écoule dans un réseau de galeries de plus de 40km !"
    },
    {
        q: "Dans quel département se situe la grotte des Demoiselles?",
        options: ["Lozère", "Gard", "Hérault", "Aude"],
        answer: 2,
        source: "Demiselles",
        linkWeb: "https:\/\/www.demoiselles.com\/fr",
        text: "\"La Grotte des Demoiselles est située dans la Haute vallée de l'Hérault au coeur du Languedoc Roussillon, entre Cévennes et Méditerranée"
    },
    {
        q: "Dans quel département se situe Micropolis \"la cité des insectes\"?",
        options: ["Tarn", "Gard", "Gers", "Aveyron"],
        answer: 3,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Micropolis,_la_cit%C3%A9_des_insectes",
        text: "Micropolis, la cité des insectes est un espace consacré à la sensibilisation au monde des insectes situé sur le Lévézou, à Saint-Léons, dans le département de l'Aveyron. Le parc a été inspiré par l'entomologiste Jean-Henri Fabre, né dans le village de Saint-Léons et par l'élan du film Microcosmos. Il contient de vastes espaces extérieurs, notamment une promenade intitulée le carnaval des insectes qui est à la fois un espace d'observation de la nature avec un panorama sur le mont Seigne (1 128 m - 2e sommet du Lévézou) et un espace ludique d'évocation des insectes à travers 11 stations figuratives qui présentent des insectes géants. Le bâtiment couvert comprend 15 salles réparties sur 2 400 m2."
    },
    {
        q: "Dans quel département se déroulent les fêtes de l'ours en Vallespir?",
        options: ["Aude", "Ariège", "Hautes-Pyrénées ", "Pyrénées-Orientales"],
        answer: 3,
        source: "Sud Canigo",
        linkWeb: "https:\/\/www.sudcanigo.com\/traditions\/fetes-de-l-ours\/",
        text: "Les Fêtes de l’Ours sont issues de la légende de \"Jean de l’Ours* et d’anciens rituels traditionnels initiatiques de la fertilité marquant le renouveau printanier. L’ours ravisseur de jeunes bergères est pourchassé par les chasseurs, il est ensuite capturé et montré aux villageois sur les places du village. Au cours de la cérémonie de clôture, la bête est rasée et retrouve ainsi son aspect humain. *Jean de l’Ours est un être hybride, mi-humain, mi-animal, né d’une femme et d’un ours, et doté d’une force surhumaine qui lui permet de surmonter diverses épreuves."
    },
    {
        q: "Dans quel département d'Occitanie peut-on  déguster l'Aligot?",
        options: ["Lozère", "Aveyron", "Lot", "Tarn"],
        answer: 1,
        source: "Cuisine de A à Z",
        linkWeb: "https:\/\/www.cuisineaz.com\/recettes\/aligot-2701.aspx",
        text: "Cuisiné dans la région de l’Aubrac, à cheval sur l’Aveyron, le Cantal et la Lozère, l'aligot est une spécialité culinaire traditionnelle consistant en une purée de pommes de terre à l’ail, détendue avec de la tomme fraîche, du beurre et de la crème. Longuement travaillé, il acquiert une texture élastique inimitable. Un accompagnement réconfortant et réchauffant pour les soirées d’hiver, à servir aux côtés d’une saucisse de Toulouse ou d’une belle entrecôte !"
    },
    {
        q: "Dans quel département d'Occitanie peut-on  déguster le Poumpet?",
        options: ["Ariège", "Hérault", "Tarn", "Haute-Garonne"],
        answer: 2,
        source: "Cuisine de A à Z",
        linkWeb: "https:\/\/www.cuisineaz.com\/recettes\/poumpet-102283.aspx",
        text: "Le Poumpet ou Pompet est une spécialité pâtissière originale du Tarn. Il s’agit d’une délicieux gâteau feuilleté parfumé au citron et à la bergamote. Nous vous proposons d’apprendre à réaliser cette recette traditionnelle en toute simplicité. Avec sa pâte croustillante et pleine de saveurs, cette pâtisserie est idéale pour toutes les occasions !"
    },
    {
        q: "Dans quel département d'Occitanie peut-on  déguster la Gardianne de Taureau?",
        options: ["Gard", "Pyrénées-Orientales", "Hérault", "Lozère"],
        answer: 0,
        source: "Cuisine de A à Z",
        linkWeb: "https:\/\/www.cuisineaz.com\/recettes\/gardianne-de-taureau-61906.aspx",
        text: "On l’appelle aussi daube camarguaise, et pour cause : la gardianne de taureau n’est autre que la variante régionale de la daube provençale, à base de viande de taureau… de Camargue ! Marinée dans le vin rouge, agrémentée d’olives et de carottes, de champignons et de lardons, cette viande de caractère livre le meilleur d’elle-même sans trop en faire après quelques heures de cuisson. Inutile de préciser que la gardianne de taureau se sert avec du riz de Camargue !"
    },
    {
        q: "Dans quel département se situe la forteresse de Salses-le-Château?",
        options: ["Gard", "Pyrénées-Orientales", "Aude", "Lozère"],
        answer: 1,
        source: "Forteresse de Salses",
        linkWeb: "https:\/\/www.forteresse-salses.fr\/",
        text: "Construit à la fin du XVe siècle par Ramiro Lopez, grand architecte espagnol à l'emplacement de sources fort utiles en cas de siège, l'édifice garde l'ancienne frontière. Assiégée, prise et reprise en 1503, 1639, 1640, la place est définitivement conquise par les Français en 1642. Le traité des Pyrénées de 1659 redessine les territoires : moins stratégique, la forteresse perd alors de son importance. À partir de 1691, elle est partiellement restaurée par Vauban."
    },
    {
        q: "Dans quel département se situe le château de Cenevières?",
        options: ["Lot", "Tarn", "Lozère", "Ariège"],
        answer: 0,
        source: "Château de Cenevières",
        linkWeb: "https:\/\/www.chateau-cenevieres.com\/",
        text: "Le château fut une place forte médiévale sous Pépin Le Bref lors de la capture du Duc d'Aquitaine Gaiffier. La puissante famille de Gourdon le transformera en place fortifiée pour lutter contre les anglais pendant la guerre de 100 ans. Flottard de Gourdon, puis son fils Antoine de Gourdon participeront aux guerres d'Italie avec François 1er. Antoine en ramènera l'amour de l'architecture de la Renaissance et embellira le château en 1550. Il se convertit ensuite au protestantisme, participe aux guerres de religion et reçoit Henri IV avant l'attaque de Cahors fin mai 1580."
    },
    {
        q: "Dans quel département se situe la grotte de Pech-Merle?",
        options: ["Lozère", "Pyrénées-Orientales", "Lot", "Tarn"],
        answer: 2,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Grotte_du_Pech_Merle",
        text: "Assez vaste, la grotte s'étend sur près de deux kilomètres mais seulement 1 200 m de galeries et de salles sont actuellement accessibles aux visiteurs. La grotte comprend deux étages de galeries communiquant par des puits et des boyaux en pente situées environ 100 mètres au-dessus des rivières (Sagne et Célé)"
    }
]