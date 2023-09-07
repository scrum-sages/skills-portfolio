export interface ProjectData {
  title: string;
  imageURL: string;
  details: string;
  website: string;
}

export const ProjectList: ProjectData[] = [
  {
    title: 'PIECE BY PIECE',
    imageURL: '/piece.svg',
    details:
      "On Piece by Piece's website you can discover and buy a wide range of puzzles decorated with images by a careful selection of artists and illustrators.",
    website: 'https://piecebypiece.netlify.app/',
  },
  {
    title: 'BOBA BLISS',
    imageURL: '/boba-bliss.svg',
    details:
      'Boba Bliss is a front end web shop Where you can browse the drink shop and order your favorite boba.You can also manage the products through the admin page.',
    website: 'https://bobabliss.netlify.app/',
  },
  {
    title: 'BY GROOVE',
    imageURL: '/by-groove.svg',
    details:
      'By Groove is a scandinavian brand that offers a selection of handmade ceramic and glass vases. Get inspired by the colorful and fun design through their groovy webshop. ',
    website: 'https://by-groove.netlify.app/',
  },
  {
    title: 'VEGAN BAGS',
    imageURL: '/vegan-bags.svg',
    details:
      'Vegan bags is a innovative vegetarian meal kit service. Their website offers available meal kits, reviews of recipies and products are easily added to the cart thanks to their checkout guide.',
    website: 'https://vegokassen.netlify.app/',
  },
];
