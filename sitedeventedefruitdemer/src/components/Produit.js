import React, { useState } from "react";
import "../styles/produit.css"; // Assure-toi d'importer ton fichier CSS
import poulpe from '../assets/images/poulpe.png';
import trondro from '../assets/images/Trondro.jpg';
import kamara from '../assets/images/Kamara.jpg';
import crabe from '../assets/images/Crabe.webp';
import crevettes from '../assets/images/crevettes.jpg';
import Calamar from '../assets/images/Calamar.png';
import homard from '../assets/images/homard.jpg';
import Langouste from '../assets/images/Langouste.webp';

const Produits = () => {
  const fruitsDeMer = [
    { name: 'Poulpe', image: poulpe, price: 40, weight: 4, description: "Le poulpe est un fruit de mer délicieux, idéal pour les plats méditerranéens. Le **poulpe** possède une saveur délicate et légèrement sucrée, avec des notes marines prononcées. Sa chair est tendre, mais elle peut devenir un peu ferme lorsqu'elle est mal cuite, offrant une texture légèrement caoutchouteuse qui est appréciée par beaucoup. Son goût est un mélange subtil d'umami, avec une légère touche de noisette ou de terre en fonction de sa préparation. Lorsqu'il est bien cuit, le poulpe libère des arômes doux et savoureux, qui se marient parfaitement avec des assaisonnements comme l'ail, le citron, l'huile d'olive ou des herbes méditerranéennes. La fraîcheur du poulpe est cruciale pour apprécier sa texture et sa saveur. Un poulpe frais a une chair ferme mais tendre, avec une douceur naturelle. Il dégage une légère odeur marine propre, jamais forte ou désagréable. La fraîcheur se reflète dans la texture, qui doit être lisse et souple, sans devenir caoutchouteuse. " },
    { name: 'Trondro', image: trondro, price: 70, weight: 9, description: "Les **bigorneaux** ont une saveur délicate, légèrement iodée, rappelant la mer. Leur chair est tendre, un peu ferme, et offre une texture agréable qui se distingue par sa subtilité. Leur goût peut être décrit comme un mélange entre le salé, l'umami, et une légère douceur, avec des notes minérales dues à leur habitat marin. La saveur varie légèrement en fonction de leur provenance et de leur alimentation, mais elle reste généralement douce et discrète, sans être trop forte ou envahissante. La fraîcheur des bigorneaux est essentielle pour apprécier leur goût optimal. Lorsqu'ils sont frais, leur chair est plus juteuse et leur saveur plus prononcée. Un bigorneau frais dégage une légère odeur marine, propre et agréable, tandis qu'un bigorneau moins frais peut avoir une odeur plus forte et moins attrayante. La fraîcheur se reflète également dans la texture de leur chair, qui doit être tendre et ferme, mais non caoutchouteuse." },
    { name: 'Kamara', image: kamara, price: 20, weight: 3, description: "Le Kamara est un crustacé savoureux, parfait pour les recettes exotiques. Le **kamara** (ou *camarão* en portugais, qui désigne généralement une variété de crevette) a une saveur douce, légèrement sucrée, avec un goût marin prononcé. Sa chair est tendre et juteuse, avec une texture légèrement croquante à l'extérieur et plus douce à l'intérieur. Lorsqu'il est cuit, le kamara développe des arômes riches et savoureux, souvent rehaussés par les épices et les assaisonnements. Il se marie bien avec des saveurs acidulées comme le citron ou le vinaigre, mais aussi avec des épices plus fortes comme le piment ou l'ail, tout en gardant une subtilité qui fait de lui un ingrédient polyvalent dans de nombreux plats." },
    { name: 'Crabe', image: crabe, price: 17, weight: 4, description: "Le crabe frais, avec sa chair sucrée et tendre, est un régal pour les amateurs de fruits de mer. Le goût du crabe varie selon son type et sa préparation, mais il garde généralement un goût subtil et raffiné, sans être trop salé ou fort. Lorsqu'il est cuit, il libère des arômes savoureux qui se marient parfaitement avec des assaisonnements tels que le beurre, l'ail, le citron, ou des épices plus douces comme le gingembre ou le curcuma. C'est une saveur qui se prête bien à des préparations légères, mais aussi à des plats plus riches. La fraîcheur du crabe est essentielle pour apprécier pleinement sa saveur. Un crabe frais a une chair plus tendre, juteuse et savoureuse. Lorsqu'il est frais, il dégage une légère odeur marine propre, sans être forte ni désagréable. La texture de sa chair est plus délicate et agréable, tandis que le crabe moins frais peut devenir plus ferme et moins juteux. La fraîcheur se reflète dans la couleur de sa chair, qui doit être d'un blanc nacré, légèrement rosé ou orangé, et dans la fermeté de sa carapace, qui doit être rigide et bien intacte." },
    { name: 'Crevettes', image: crevettes, price: 12, weight: 3, description: "Les crevettes, parfaites en entrée ou en plat principal, sont riches en protéines et en saveur. Lorsqu'elle est bien préparée, la crevette développe des arômes délicats, un peu sucrés, et parfois légèrement iodés. Sa saveur est assez versatile, se mariant parfaitement avec des épices et des assaisonnements tels que l'ail, le citron, le piment ou l'huile d'olive. Elle est appréciée pour sa capacité à absorber les saveurs tout en gardant une douceur naturelle qui la rend agréable dans une grande variété de plats, des plus simples aux plus sophistiqués. La fraîcheur de la crevette est primordiale pour apprécier pleinement sa saveur. Une crevette fraîche a une chair plus tendre et plus sucrée, avec une texture agréable et une couleur translucide légèrement rosée ou beige. Lorsqu'elle est fraîche, elle dégage une légère odeur marine propre et fraîche, mais jamais une odeur forte ou désagréable. " },
    { name: 'Calamar', image: Calamar, price: 15, weight: 5, description: "Le calamar, délicieux et polyvalent, peut être grillé, frit ou utilisé dans une variété de recettes. Sa chair, fine et légèrement élastique, est tendre lorsqu'elle est bien cuite, mais elle peut devenir caoutchouteuse si trop cuite. Lorsqu'il est frais, le calamar révèle une douceur subtile et une légère touche iodée qui rappelle l'océan sans être envahissante. La fraîcheur du calamar est essentielle pour apprécier pleinement ses qualités gustatives. Un calamar frais a une texture lisse et un goût propre, presque légèrement sucré, avec une finesse qui ne se trouve pas dans les versions congelées. En termes de fraîcheur, il devrait avoir une légère odeur marine, mais jamais une odeur forte ou désagréable. " },
    { name: 'Homard', image: homard, price: 14, weight: 3, description: "Le homard, avec sa chair tendre et sucrée, est un met de choix pour les grandes occasions. Sa chair est tendre et juteuse, mais avec une texture ferme et légèrement filandreuse, particulièrement dans les pinces. Elle offre un goût riche et beurré, légèrement salé, mais tout en douceur. Le goût du homard est souvent décrit comme étant à la fois élégant et profond, mais jamais trop prononcé, ce qui en fait un mets de choix dans des plats haut de gamme. La fraîcheur du homard est essentielle pour en apprécier toute la saveur. Un homard frais a une chair plus tendre, avec un goût plus pur et une texture plus agréable que les homards moins frais ou congelés. Lorsqu'il est frais, il a une légère odeur marine mais jamais une odeur forte ou désagréable. Un homard qui a été correctement conservé doit avoir des arômes subtils, sans altération, et sa chair doit être d'un blanc nacré, tendre, et juteuse. " },
    { name: 'Langouste', image: Langouste, price: 19, weight: 5, description: "La langouste, avec sa chair fine et parfumée, est un délice pour les amateurs de fruits de mer. Sa chair est tendre, juteuse et ferme, offrant une texture légèrement filandreuse mais agréable. Le goût de la langouste est riche, mais plus doux que celui du homard, avec un léger arôme sucré et une touche iodée qui rappelle l’océan. Elle est souvent décrite comme un fruit de mer plus délicat, parfait pour des préparations légères et élégantes. La fraîcheur de la langouste est cruciale pour apprécier pleinement ses qualités gustatives. Une langouste fraîche a une chair plus tendre, juteuse et délicate, tandis qu'une langouste moins fraîche peut devenir plus ferme et moins savoureuse. Lorsqu'elle est fraîche, elle dégage une légère odeur marine mais jamais une odeur forte ou désagréable." }
  ];

  // Etat pour gérer l'affichage des descriptions
  const [expanded, setExpanded] = useState(null);

  const toggleDescription = (index) => {
    if (expanded === index) {
      setExpanded(null); // Si on clique sur un produit déjà ouvert, on le ferme
    } else {
      setExpanded(index); // Sinon, on ouvre la description du produit
    }
  };

  return (
    <div className="products-page">
      <h1>Nos Produits de Fruits de Mer</h1>
      <div className="product-list">
        {fruitsDeMer.map((fruit, index) => (
          <div className="product-card" key={index}>
            <img src={fruit.image} alt={fruit.name} className="product-image" />
            <h2>{fruit.name}</h2>
            <p>Prix: {fruit.price} €</p>
            <p>Poids: {fruit.weight} kg</p> {/* Affichage du poids */}
            <button className="add-to-cart">Ajouter au panier</button>

            {/* Le bouton "Explication" pour chaque produit */}
            <button
              className="explanation-button"
              onClick={() => toggleDescription(index)}
            >
              Explication
            </button>

            {/* Afficher la description si l'utilisateur a cliqué sur le bouton */}
            {expanded === index && <p className="product-description">{fruit.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produits;   