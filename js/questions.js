const quiz = [{
        q: "Dans quel département se situe Micropolis \"la cité des insectes\"?",
        options: ["Tarn", , "Gard", , "Gers", , "Aveyron"],
        answer: 3,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Micropolis,_la_cit%C3%A9_des_insectes",
        text: "Micropolis, la cité des insectes est un espace consacré à la sensibilisation au monde des insectes situé sur le Lévézou, à Saint-Léons, dans le département de l'Aveyron. Le parc a été inspiré par l'entomologiste Jean-Henri Fabre, né dans le village de Saint-Léons et par l'élan du film Microcosmos. Il contient de vastes espaces extérieurs, notamment une promenade intitulée le carnaval des insectes qui est à la fois un espace d'observation de la nature avec un panorama sur le mont Seigne (1 128 m - 2e sommet du Lévézou) et un espace ludique d'évocation des insectes à travers 11 stations figuratives qui présentent des insectes géants. Le bâtiment couvert comprend 15 salles réparties sur 2 400 m2."
    },
    {
        q: "Dans quel département se déroulent es fêtes de l'ours en Vallespir?",
        options: ["Aude", , "Ariège", , "Hautes-Pyrénées ", , "Pyrénées-Orientales"],
        answer: 3,
        source: "Sud Canigo",
        linkWeb: "https:\/\/www.sudcanigo.com\/traditions\/fetes-de-l-ours\/",
        text: "Les Fêtes de l’Ours sont issues de la légende de \"Jean de l’Ours* et d’anciens rituels traditionnels initiatiques de la fertilité marquant le renouveau printanier. L’ours ravisseur de jeunes bergères est pourchassé par les chasseurs, il est ensuite capturé et montré aux villageois sur les places du village. Au cours de la cérémonie de clôture, la bête est rasée et retrouve ainsi son aspect humain. *Jean de l’Ours est un être hybride, mi-humain, mi-animal, né d’une femme et d’un ours, et doté d’une force surhumaine qui lui permet de surmonter diverses épreuves."
    },
    {
        q: "Dans quel département d'Occitanie peut-on  déguster l'Aligot?",
        options: ["Lozère", , "Aveyron", , "Lot", , "Tarn"],
        answer: 1,
        source: "Cuisine de A à Z",
        linkWeb: "https:\/\/www.cuisineaz.com\/recettes\/aligot-2701.aspx",
        text: "Cuisiné dans la région de l’Aubrac, à cheval sur l’Aveyron, le Cantal et la Lozère, l'aligot est une spécialité culinaire traditionnelle consistant en une purée de pommes de terre à l’ail, détendue avec de la tomme fraîche, du beurre et de la crème. Longuement travaillé, il acquiert une texture élastique inimitable. Un accompagnement réconfortant et réchauffant pour les soirées d’hiver, à servir aux côtés d’une saucisse de Toulouse ou d’une belle entrecôte !"
    },
    {
        q: "Dans quel département d'Occitanie peut-on  déguster le Poumpet?",
        options: ["Ariège", , "Hérault", , "Tarn", , "Haute-Garonne"],
        answer: 2,
        source: "Cuisine de A à Z",
        linkWeb: "https:\/\/www.cuisineaz.com\/recettes\/poumpet-102283.aspx",
        text: "Le Poumpet ou Pompet est une spécialité pâtissière originale du Tarn. Il s’agit d’une délicieux gâteau feuilleté parfumé au citron et à la bergamote. Nous vous proposons d’apprendre à réaliser cette recette traditionnelle en toute simplicité. Avec sa pâte croustillante et pleine de saveurs, cette pâtisserie est idéale pour toutes les occasions !"
    },
    {
        q: "Dans quel département d'Occitanie peut-on  déguster la Gardianne de Taureau?",
        options: ["Gard", , "Pyrénées-Orientales", , "Hérault", , "Lozère"],
        answer: 0,
        source: "Cuisine de A à Z",
        linkWeb: "https:\/\/www.cuisineaz.com\/recettes\/gardianne-de-taureau-61906.aspx",
        text: "On l’appelle aussi daube camarguaise, et pour cause : la gardianne de taureau n’est autre que la variante régionale de la daube provençale, à base de viande de taureau… de Camargue ! Marinée dans le vin rouge, agrémentée d’olives et de carottes, de champignons et de lardons, cette viande de caractère livre le meilleur d’elle-même sans trop en faire après quelques heures de cuisson. Inutile de préciser que la gardianne de taureau se sert avec du riz de Camargue !"
    },
    {
        q: "Dans quel département se situe la forteresse de Salses-le-Château?",
        options: ["Gard", , "Pyrénées-Orientales", , "Aude", , "Lozère"],
        answer: 1,
        source: "Forteresse de Salses",
        linkWeb: "https:\/\/www.forteresse-salses.fr\/",
        text: "Construit à la fin du XVe siècle par Ramiro Lopez, grand architecte espagnol à l'emplacement de sources fort utiles en cas de siège, l'édifice garde l'ancienne frontière. Assiégée, prise et reprise en 1503, 1639, 1640, la place est définitivement conquise par les Français en 1642. Le traité des Pyrénées de 1659 redessine les territoires : moins stratégique, la forteresse perd alors de son importance. À partir de 1691, elle est partiellement restaurée par Vauban."
    },
    {
        q: "Dans quel département se situe le château de Cenevières?",
        options: ["Lot", , "Tarn", , "Lozère", , "Ariège"],
        answer: 0,
        source: "Château de Cenevières",
        linkWeb: "https:\/\/www.chateau-cenevieres.com\/",
        text: "Le château fut une place forte médiévale sous Pépin Le Bref lors de la capture du Duc d'Aquitaine Gaiffier. La puissante famille de Gourdon le transformera en place fortifiée pour lutter contre les anglais pendant la guerre de 100 ans. Flottard de Gourdon, puis son fils Antoine de Gourdon participeront aux guerres d'Italie avec François 1er. Antoine en ramènera l'amour de l'architecture de la Renaissance et embellira le château en 1550. Il se convertit ensuite au protestantisme, participe aux guerres de religion et reçoit Henri IV avant l'attaque de Cahors fin mai 1580."
    },
    {
        q: "Dans quel département se situe la grotte de Pech-Merle?",
        options: ["Lozère", , "Pyrénées-Orientales", , "Lot", , "Tarn"],
        answer: 2,
        source: "Wikipédia",
        linkWeb: "https:\/\/fr.wikipedia.org\/wiki\/Grotte_du_Pech_Merle",
        text: "Assez vaste, la grotte s'étend sur près de deux kilomètres mais seulement 1 200 m de galeries et de salles sont actuellement accessibles aux visiteurs. La grotte comprend deux étages de galeries communiquant par des puits et des boyaux en pente situées environ 100 mètres au-dessus des rivières (Sagne et Célé)"
    }
]