import React, { useState, useRef } from 'react';
import img0 from './images/img-0.js';
import img1 from './images/img-1.js';
import img2 from './images/img-2.js';
import img3 from './images/img-3.js';
import img4 from './images/img-4.js';
import img5 from './images/img-5.js';
import img6 from './images/img-6.js';
import img7 from './images/img-7.js';
import img8 from './images/img-8.js';
import img9 from './images/img-9.js';
import img10 from './images/img-10.js';
import img11 from './images/img-11.js';
import img12 from './images/img-12.js';
import img13 from './images/img-13.js';

const COVER_IMAGE = img0;
const RECIPE_IMAGES = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9,
  10: img10,
  11: img11,
  12: img12,
  13: img13,
};

const mookData = {
  fr: {
    title: "Cuisiner avec Mary",
    subtitle: "faible en calories, peu de sucre, riche en fibres et protéines : des recettes saines que vos enfants adoreront",
    sommaire: "Sommaire",
    recette: "Recette",
    ingredientsTitle: "Ingrédients",
    prepTitle: "Préparation",
    discover: "Découvrir",
    enjoy: "Bon appétit & restez en pleine forme !",
    chapters: [
      {
        title: "Chapitre 1 : Petits-Déjeuners & Brunch",
        recipes: [
          { id: 1, title: "Bouchées de Pancakes Myrtilles & Cottage Cheese", description: "Une option riche en protéines et naturellement sucrée, parfaite à cuire au Air Fryer ou au four. (Pour 10 à 12 bouchées)", ingredients: ["1 tasse de cottage cheese","2 gros œufs","½ banane bien mûre, écrasée","½ tasse de farine d'avoine (ou d'amande)","1 c. à soupe de miel ou sirop d'érable (optionnel)","1 c. à café d'extrait de vanille","1 c. à café de levure chimique","1 pincée de sel","½ tasse de myrtilles (fraîches ou surgelées)"], instructions: ["Mélangez le cottage cheese, les œufs, la banane écrasée, le miel et la vanille.","Ajoutez la farine, la levure chimique et le sel. Mélangez bien.","Incorporez délicatement les myrtilles.","Répartissez dans des moules à bouchées ou mini-muffins.","Cuisez au four ou au Air Fryer jusqu'à ce qu'elles soient dorées et gonflées."] },
          { id: 2, title: "Pancakes Nuages (Fluffy Pancakes)", description: "Les célèbres pancakes ultra-moelleux et aériens (façon japonaise).", ingredients: ["2 jaunes d'œufs","3 blancs d'œufs","2 c. à soupe de lait","1 c. à café d'extrait de vanille","2 c. à soupe de farine classique (tamisée)","1 c. à café de levure chimique","2 c. à soupe de sucre","1 pincée de sel","Quelques gouttes de jus de citron"], instructions: ["Dans un bol, mélangez les jaunes d'œufs, le lait et la vanille. Ajoutez la farine et la levure tamisées, puis mélangez.","Dans un autre bol, montez les blancs d'œufs en neige avec le jus de citron. Incorporez le sucre progressivement jusqu'à obtenir une meringue ferme.","Incorporez délicatement les blancs en neige au premier mélange à l'aide d'une spatule.","Cuisez à feu très doux dans une poêle couverte, en empilant la pâte pour leur donner de la hauteur. Retournez délicatement à mi-cuisson."] }
        ]
      },
      {
        title: "Chapitre 2 : Pains & Bagels Express",
        recipes: [
          { id: 3, title: "Bagels Protéinés au Cottage Cheese", description: "Macros par bagel : ~140 kcal | 12g Protéines | 8g Lipides | 4g Glucides nets. (Pour 4 bagels)", ingredients: ["1 tasse de cottage cheese","2 gros œufs","1 tasse de farine d'amande (ou d'avoine)","1 ½ c. à café de levure chimique","1 pincée de sel","Optionnel : Mélange d'épices 'Everything Bagel'"], instructions: ["Préchauffez le four à 190°C (375°F) et tapissez une plaque de papier cuisson.","Dans un blender, mixez le cottage cheese et les œufs jusqu'à obtenir une texture lisse.","Dans un bol, fouettez la farine, la levure et le sel. Ajoutez le mélange liquide et remuez jusqu'à former une pâte épaisse.","Divisez en 4 parts. Avec des mains huilées, formez des boules, percez un trou au centre et façonnez vos bagels.","Placez sur la plaque, dorez éventuellement à l'œuf, saupoudrez d'épices, puis enfournez 20 à 25 minutes.","Laissez refroidir au moins 15 minutes avant de couper."] },
          { id: 4, title: "Mini-Pain aux Graines & Yaourt Grec", description: "Idéal pour un pain minute sans pétrissage ! (Adaptable sans gluten).", ingredients: ["3 c. à soupe bombées de farine à poudre levante incorporée","2 c. à soupe de yaourt grec (ou soja)","1 poignée de graines au choix","¼ c. à café de sel"], instructions: ["Mélangez tous les ingrédients dans un bol jusqu'à obtenir une boule de pâte douce et malléable.","Avec des mains farinées, donnez-lui la forme d'un petit pain.","Cuisson : Au Air Fryer à 180°C pendant 10-12 minutes, OU au four à 180°C pendant 20 minutes."] },
          { id: 5, title: "Pain Sans Farine à la Purée de Sésame", description: "Un pain hyperprotéiné et surprenant avec seulement 4 ingrédients de base.", ingredients: ["4 œufs","300g de purée de sésame (tahin)","1 pincée de sel","1 pincée de bicarbonate de soude","Quelques graines pour le glaçage"], instructions: ["Préchauffez le four à 180°C.","Dans un saladier, fouettez vigoureusement les œufs avec la purée de sésame, le sel et le bicarbonate.","Versez dans un moule chemisé de papier cuisson. Parsemez de graines.","Enfournez pour 35 à 40 minutes à 180°C."] }
        ]
      },
      {
        title: "Chapitre 3 : Desserts Sains & \"Trompe-l'œil\"",
        recipes: [
          { id: 6, title: "Cake au Yaourt, Citron & Graines de Pavot", description: "Un grand classique revisité en version saine, ultra moelleux grâce au yaourt.", ingredients: ["3 œufs","1 yaourt grec ou yaourt nature","30g d'huile de coco (fondue)","50g de sirop d'érable ou de miel","Le jus et le zeste de 2 citrons bio","150g de farine d'avoine (ou blé semi-complet)","50g de poudre d'amande","2 c. à soupe de graines de pavot","1 sachet de levure chimique","1 pincée de sel"], instructions: ["Préchauffez le four à 180°C.","Dans un saladier, fouettez les œufs avec le yaourt, le sirop d'érable, l'huile fondue, le jus et le zeste des citrons.","Ajoutez la farine, la poudre d'amande, la levure, le sel et les graines de pavot. Mélangez bien.","Versez dans un moule à cake chemisé de papier sulfurisé.","Enfournez pour environ 40 à 45 minutes (vérifiez la cuisson avec la lame d'un couteau).","Laissez refroidir avant de démouler."] },
          { id: 7, title: "Le Fondant Mystère (Haricots Rouges & Chocolat)", description: "Sans gluten, riche en fibres. ~190 kcal/part.", ingredients: ["250g de haricots rouges cuits (rincés et égouttés)","3 œufs entiers","100g de chocolat noir (fondu)","40g de cacao en poudre non sucré","80g de sucre de canne ou miel","50 ml d'huile de coco fondue","1 c. à café d'extrait de vanille","½ c. à café de levure chimique","1 pincée de sel"], instructions: ["Préchauffez le four à 180°C. Mixez haricots, œufs, huile, sucre, vanille et sel jusqu'à obtenir une crème lisse.","Ajoutez le chocolat fondu, le cacao et la levure. Mixez brièvement.","Versez dans un moule carré huilé. Enfournez 20 à 25 minutes.","Laissez refroidir totalement avant de démouler (1h au frigo idéalement)."] },
          { id: 8, title: "Brownie Chocolat aux Butter Beans", description: "Une variante ultra-fondante du brownie mystère à base de haricots blancs géants.", ingredients: ["240g de butter beans cuits (bien rincés)","2 œufs","80g de sucre","60 ml d'huile neutre ou coco","1 c. à café d'extrait de vanille","40g de cacao en poudre non sucré","80 à 100g de chocolat noir (fondu ou pépites)","½ c. à café de levure chimique","1 pincée de sel","Option : 2 c. à soupe de farine d'amande/avoine"], instructions: ["Préchauffez le four à 180°C (350°F).","Dans un blender, mixez butter beans, œufs, sucre, huile, vanille et sel jusqu'à obtenir une crème lisse.","Ajoutez cacao, levure, chocolat fondu et farine optionnelle. Mixez quelques secondes.","Versez dans un moule huilé et lissez.","Cuisez 18 à 22 minutes. Laissez refroidir 30 à 45 minutes avant de couper."] },
          { id: 9, title: "Le Gâteau Favori du Docteur", description: "Un gâteau à l'avoine, pistache & chocolat. Sain, réconfortant et riche en bons lipides.", ingredients: ["1 tasse de lait","¼ tasse de sirop d'érable","1 grosse banane mûre, écrasée","1 tasse de flocons d'avoine","1 tasse de farine d'avoine","1 c. à café de levure chimique","2 c. à soupe de cacao en poudre","Pistaches (hachées)","Pépites de chocolat (optionnel)","3 c. à soupe de purée de pistache"], instructions: ["Préchauffez le four à 180°C.","Directement dans un plat allant au four, mélangez tous les ingrédients (sauf la purée de pistache). Étalez uniformément.","Ajoutez la purée de pistache sur le dessus et formez des tourbillons avec un couteau.","Garnissez de pistaches supplémentaires.","Enfournez pour 25 à 35 minutes."] },
          { id: 10, title: "Muffins Patate Douce – Cacao & Cannelle", description: "≈ 14 muffins moelleux grâce à l'humidité naturelle de la patate douce.", ingredients: ["240g de purée de patate douce","2 œufs","60g d'huile de coco fondue","75g de sirop d'érable","30–35g de sucre brun","1 c. à café de vanille","70g de farine d'avoine","100g de farine d'amande","1 c. à café de levure chimique","Variante Cacao : + cacao non sucré & pépites","Variante Cannelle : + cannelle"], instructions: ["Préchauffez le four à 170°C (340°F).","Fouettez les ingrédients humides ensemble.","Ajoutez les ingrédients secs sans trop travailler la pâte. Laissez reposer 3 minutes.","Séparez la pâte en deux et ajoutez les aromates.","Remplissez les moules aux ¾ et enfournez pour 18 à 21 minutes."] },
          { id: 11, title: "Butter Mochi au Sésame Noir", description: "Un gâteau hybride à la texture unique : moelleux et avec un cœur élastique et très gluant (Vegan).", ingredients: ["1 petite banane bien mûre (80g)","50g de margarine ou beurre végétal fondu","60g de purée de sésame noir","280g de lait de coco en conserve","100g de sucre de coco","200g de farine de riz gluant","50g de graines de sésame","1 c. à café de levure chimique","1 pincée de sel"], instructions: ["Préchauffez le four à 175°C et tapissez un moule de papier sulfurisé.","Écrasez la banane en purée homogène. Ajoutez le beurre fondu, le lait de coco et la purée de sésame noir. Mélangez.","Dans un autre saladier, mélangez les ingrédients secs. Incorporez le mélange liquide.","Versez dans le moule, lissez le dessus.","Cuisez 30 minutes. L'intérieur doit rester très gluant et élastique."] },
          { id: 12, title: "Pâte à Brookie Protéinée (Yaourt Grec)", description: "Une collation minute ultra-gourmande 'façon pâte à cookie crue' (~20g de protéines).", ingredients: ["120g de yaourt grec épais","25g de farine d'avoine","10g de purée de noix de cajou","5g de beurre de cacahuète en poudre (optionnel)","5g de cacao en poudre","5 à 10g de pépites de chocolat noir","Sirop d'érable (selon goût)","1 pincée de sel & 1 trait d'extrait de vanille"], instructions: ["Combinez tous les ingrédients ensemble à l'exception du cacao en poudre.","Séparez la pâte obtenue en deux parts égales.","Incorporez le cacao en poudre dans l'une des moitiés.","Réfrigérez 30 à 60 minutes pour faire épaissir.","Formez des boules en mélangeant les deux couleurs, ajoutez des pépites et dégustez !"] },
          { id: 13, title: "Snickers \"Healthy\" Glacés aux Dattes", description: "La gourmandise ultime : une plaque glacée en 3 couches plates, croquante et fondante, prête en quelques minutes !", ingredients: ["Dattes dénoyautées (Medjool de préférence)","Beurre de cacahuète (100% cacahuètes)","Cacahuètes non salées, grossièrement concassées","Chocolat noir","1 c. à café d'huile de coco"], instructions: ["Coupez vos dattes en deux et alignez-les, face intérieure vers le bas, sur une plaque recouverte de papier sulfurisé pour former une base fine et plate.","Étalez une couche généreuse de beurre de cacahuète par-dessus la plaque de dattes.","Parsemez de cacahuètes concassées.","Faites fondre le chocolat noir avec l'huile de coco et nappez l'ensemble en une fine couche.","Placez au congélateur 1 heure. Cassez de gros morceaux de cette plaque glacée et régalez-vous !"] }
        ]
      }
    ]
  },
  en: {
    title: "Cooking Mary",
    subtitle: "low calorie, low sugar, high fiber and protein : healthy recipes your kids will love",
    sommaire: "Table of Contents",
    recette: "Recipe",
    ingredientsTitle: "Ingredients",
    prepTitle: "Directions",
    discover: "Discover",
    enjoy: "Enjoy your meal & stay healthy!",
    chapters: [
      {
        title: "Chapter 1: Breakfast & Brunch",
        recipes: [
          { id: 1, title: "Blueberry Cottage Cheese Pancake Bites", description: "High-protein and naturally sweet, perfect for Air Fryer or oven. (Makes 10-12 bites)", ingredients: ["1 cup cottage cheese","2 large eggs","½ ripe banana, mashed","½ cup oat flour (or almond flour)","1 tbsp honey or maple syrup (optional)","1 tsp vanilla extract","1 tsp baking powder","Pinch of salt","½ cup fresh or frozen blueberries"], instructions: ["Mix cottage cheese, eggs, mashed banana, honey, and vanilla.","Add flour, baking powder, and salt. Mix well.","Gently fold in blueberries.","Divide into muffin or bite molds.","Bake in the oven or Air Fryer until golden and puffed."] },
          { id: 2, title: "Cloud Pancakes (Fluffy Pancakes)", description: "The famous ultra-fluffy and airy Japanese-style pancakes.", ingredients: ["2 egg yolks","3 egg whites","2 tbsp milk","1 tsp vanilla extract","2 tbsp all-purpose flour (sifted)","1 tsp baking powder","2 tbsp sugar","Pinch of salt","A few drops of lemon juice"], instructions: ["In a bowl, mix egg yolks, milk, and vanilla. Add sifted flour and baking powder, mix.","In another bowl, whip egg whites with lemon juice. Gradually add sugar until stiff peaks form.","Gently fold the egg whites into the first mixture with a spatula.","Cook on very low heat in a covered pan, stacking the batter for height. Flip gently halfway."] }
        ]
      },
      {
        title: "Chapter 2: Quick Breads & Bagels",
        recipes: [
          { id: 3, title: "Protein Cottage Cheese Bagels", description: "Macros per bagel: ~140 kcal | 12g Protein | 8g Fat | 4g Net Carbs. (Makes 4 bagels)", ingredients: ["1 cup cottage cheese","2 large eggs","1 cup almond flour (or oat flour)","1 ½ tsp baking powder","Pinch of salt","Optional: Everything Bagel seasoning for topping"], instructions: ["Preheat oven to 375°F (190°C) and line a baking sheet with parchment paper.","In a blender, process cottage cheese and eggs until smooth.","In a bowl, whisk flour, baking powder, and salt. Add wet mixture and stir into a thick dough.","Divide into 4 portions. With oiled hands, shape into balls, poke a hole in the center, and shape bagels.","Place on sheet, apply egg wash (optional), sprinkle seasoning, bake 20-25 mins.","Cool at least 15 mins before slicing."] },
          { id: 4, title: "Seeded Greek Yogurt Mini-Loaf", description: "Perfect for a quick, no-knead bread! (Can be made gluten-free).", ingredients: ["3 heaped tbsp self-raising flour","2 tbsp greek yogurt (or soy)","Handful of any seeds","¼ tsp salt"], instructions: ["Mix all ingredients in a bowl to form a soft, pliable dough ball.","With floured hands, shape into a small loaf.","Cook: Air Fry at 350°F (180°C) for 10-12 mins, OR oven bake at 350°F (180°C) for 20 mins."] },
          { id: 5, title: "Flourless Tahini Sesame Bread", description: "A surprising high-protein bread made with only 4 basic ingredients.", ingredients: ["4 eggs","1 ¼ cup (300g) tahini (sesame paste)","Pinch of salt","Pinch of baking soda","Seeds for topping"], instructions: ["Preheat oven to 350°F (180°C).","In a bowl, vigorously whisk eggs with tahini, salt, and baking soda.","Pour into a parchment-lined loaf pan. Sprinkle with seeds.","Bake for 35 to 40 minutes at 350°F."] }
        ]
      },
      {
        title: "Chapter 3: Healthy Desserts & Treats",
        recipes: [
          { id: 6, title: "Lemon & Poppy Seed Yogurt Cake", description: "A healthy twist on a classic, ultra moist thanks to the yogurt.", ingredients: ["3 eggs","½ cup plain or greek yogurt","2 tbsp (30g) melted coconut oil","¼ cup (50g) maple syrup or honey","Juice and zest of 2 organic lemons","1 ¼ cup (150g) oat flour","½ cup (50g) almond flour","2 tbsp poppy seeds","1 tbsp baking powder","Pinch of salt"], instructions: ["Preheat oven to 350°F (180°C).","In a bowl, whisk eggs with yogurt, maple syrup, melted oil, lemon juice and zest.","Add oat flour, almond flour, baking powder, salt, and poppy seeds. Mix well.","Pour into a parchment-lined loaf pan.","Bake for about 40-45 minutes (check doneness with a knife).","Let cool before unmolding."] },
          { id: 7, title: "Mystery Fudge (Red Beans & Chocolate)", description: "Gluten-free, high-fiber. ~190 kcal/slice.", ingredients: ["1 cup (250g) cooked red kidney beans (rinsed well)","3 whole eggs","3.5 oz (100g) dark chocolate (melted)","⅓ cup (40g) unsweetened cocoa powder","⅓ cup (80g) cane sugar or honey","3 tbsp (50ml) melted coconut oil","1 tsp vanilla extract","½ tsp baking powder","Pinch of salt"], instructions: ["Preheat oven to 350°F (180°C). Blend beans, eggs, oil, sugar, vanilla, and salt until perfectly smooth.","Add melted chocolate, cocoa, and baking powder. Blend briefly.","Pour into an oiled square pan. Bake 20-25 mins.","Let cool completely before unmolding (ideally 1h in the fridge)."] },
          { id: 8, title: "Butter Bean Chocolate Brownie", description: "An ultra-fudgy variation of the mystery brownie made with giant butter beans.", ingredients: ["1 cup (240g) cooked butter beans (rinsed well)","2 eggs","⅓ cup (80g) sugar","¼ cup (60ml) neutral or coconut oil","1 tsp vanilla extract","⅓ cup (40g) unsweetened cocoa powder","3 to 3.5 oz (80-100g) dark chocolate (melted or chips)","½ tsp baking powder","Pinch of salt","Optional: 2 tbsp almond/oat flour"], instructions: ["Preheat oven to 350°F (180°C).","In a blender, mix butter beans, eggs, sugar, oil, vanilla, and salt until smooth.","Add cocoa, baking powder, melted chocolate, and optional flour. Blend a few seconds.","Pour into an oiled pan and smooth.","Bake 18-22 mins. Let cool 30-45 mins before cutting."] },
          { id: 9, title: "The Doctor's Favorite Cake", description: "An oat, pistachio & chocolate cake. Healthy, comforting, and full of healthy fats.", ingredients: ["1 cup milk","¼ cup maple syrup","1 large ripe banana, mashed","1 cup rolled oats","1 cup oat flour","1 tsp baking powder","2 tbsp cocoa powder","Roughly chopped pistachios","Chocolate chips (optional)","3 tbsp pistachio butter"], instructions: ["Preheat oven to 350°F (180°C).","Directly in a baking dish, mix all ingredients (except pistachio butter). Spread evenly.","Add pistachio butter on top and swirl with a knife.","Garnish with extra pistachios.","Bake for 25-35 minutes."] },
          { id: 10, title: "Sweet Potato Muffins – Cocoa & Cinnamon", description: "≈ 14 soft muffins kept perfectly moist by naturally sweet potatoes.", ingredients: ["1 cup (240g) sweet potato puree","2 eggs","¼ cup (60g) melted coconut oil","⅓ cup (75g) maple syrup","2 tbsp (30g) brown sugar","1 tsp vanilla extract","¾ cup (70g) oat flour","1 cup (100g) almond flour","1 tsp baking powder","Cocoa variant: + unsweetened cocoa & chocolate chips","Cinnamon variant: + cinnamon"], instructions: ["Preheat oven to 340°F (170°C).","Whisk wet ingredients together.","Add dry ingredients without overworking the batter. Let rest 3 minutes.","Divide batter in half and add flavorings.","Fill molds ¾ full and bake 18-21 minutes."] },
          { id: 11, title: "Black Sesame Butter Mochi", description: "A hybrid cake with a unique texture: soft outside with a very chewy and gooey center (Vegan).", ingredients: ["1 small ripe banana (80g)","3.5 tbsp (50g) melted vegan butter","¼ cup (60g) black sesame paste","1 ¼ cup (280g) canned coconut milk","½ cup (100g) coconut sugar","1 ¼ cup (200g) glutinous rice flour","⅓ cup (50g) sesame seeds","1 tsp baking powder","Pinch of salt"], instructions: ["Preheat oven to 350°F (175°C) and line a pan with parchment paper.","Mash banana smoothly. Add melted butter, coconut milk, and black sesame paste. Mix.","In another bowl, mix dry ingredients. Stir in wet mixture.","Pour into pan, smooth top.","Bake 30 mins. The inside should remain very gooey and stretchy."] },
          { id: 12, title: "Protein Brookie Dough (Greek Yogurt)", description: "A quick, indulgent snack like 'raw cookie dough' (~20g protein).", ingredients: ["½ cup (120g) thick greek yogurt","3 tbsp (25g) oat flour","2 tsp (10g) cashew butter","1 tsp (5g) powdered peanut butter (optional)","1 tsp (5g) cocoa powder","1 tbsp (10g) dark chocolate chips","Maple syrup (to taste)","Pinch of salt & splash of vanilla extract"], instructions: ["Combine all ingredients together EXCEPT cocoa powder.","Separate the dough into two equal parts.","Fold cocoa powder into one half.","Refrigerate 30-60 mins to thicken.","Form balls mixing the two colors, add chips, and enjoy!"] },
          { id: 13, title: "Frozen Healthy Date Snickers", description: "The ultimate treat: a frozen bark in 3 flat layers, crunchy and melty, ready in minutes!", ingredients: ["Pitted dates (Medjool preferred)","Peanut butter (100% peanuts)","Unsalted peanuts, roughly chopped","Dark chocolate","1 tsp coconut oil"], instructions: ["Cut dates in half and align them, inside down, on a parchment-lined tray to form a thin flat base.","Spread a generous layer of peanut butter over the date base.","Sprinkle with crushed peanuts.","Melt dark chocolate with coconut oil and spread a thin layer on top.","Freeze for 1 hour. Break large pieces of this frozen bark and enjoy!"] }
        ]
      }
    ]
  }
};

const PolaroidPhoto = ({ recipeId }) => {
  const imgSrc = RECIPE_IMAGES[recipeId];
  if (!imgSrc) return null;
  const rotations = [-2, 1.5, -1, 2, -1.5, 0.8, -2.2, 1, -0.5, 1.8, -1.2, 2.5, -1.8];
  const rot = rotations[(recipeId - 1) % rotations.length];
  return (
    <div style={{
      background: '#fff', padding: '8px 8px 32px 8px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.06)',
      transform: `rotate(${rot}deg)`, maxWidth: 260, width: '100%',
      transition: 'transform 0.3s ease',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = `rotate(${rot + 1}deg) scale(1.03)`}
    onMouseLeave={e => e.currentTarget.style.transform = `rotate(${rot}deg)`}
    >
      <img src={imgSrc} alt="" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }} />
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('fr');
  const [currentView, setCurrentView] = useState('cover');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [animating, setAnimating] = useState(false);
  const contentRef = useRef(null);

  const d = mookData[lang];
  const allRecipes = d.chapters.flatMap((ch, ci) => ch.recipes.map(r => ({ ...r, chapterIdx: ci, chapterTitle: ch.title })));

  const navigate = (view, recipe = null) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentView(view);
      setSelectedRecipe(recipe);
      setAnimating(false);
      if (contentRef.current) contentRef.current.scrollTop = 0;
    }, 280);
  };

  const ci = selectedRecipe ? allRecipes.findIndex(r => r.id === selectedRecipe.id) : -1;
  const prev = ci > 0 ? allRecipes[ci - 1] : null;
  const next = ci < allRecipes.length - 1 ? allRecipes[ci + 1] : null;

  const S = { sans: "'DM Sans', sans-serif" };

  return (
    <div style={{ fontFamily: "'Crimson Pro', Georgia, serif", background: '#faf8f5', color: '#2c2420', height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .sc::-webkit-scrollbar { width: 4px; }
        .sc::-webkit-scrollbar-track { background: transparent; }
        .sc::-webkit-scrollbar-thumb { background: #c4b5a3; border-radius: 4px; }
        .bh { transition: all 0.2s ease; }
        .bh:hover { transform: translateY(-1px); }
      `}</style>

      <header style={{ height: 48, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderBottom: '1px solid #e8e0d6', background: '#faf8f5', zIndex: 10, fontFamily: S.sans, fontSize: 13 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {currentView !== 'cover' && (
            <button onClick={() => navigate(currentView === 'recipe' ? 'toc' : 'cover')} className="bh"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8b7d6b', fontSize: 13, display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              {currentView === 'recipe' ? d.sommaire : d.title}
            </button>
          )}
        </div>
        <div style={{ fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b5e50', fontSize: 11 }}>
          {currentView === 'recipe' && selectedRecipe ? `${d.recette} ${selectedRecipe.id} / 13` : ''}
        </div>
        <div style={{ display: 'flex', gap: 2, background: '#ede6dd', borderRadius: 6, padding: 2 }}>
          {['fr', 'en'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ padding: '4px 14px', borderRadius: 4, border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', background: lang === l ? '#fff' : 'transparent', color: lang === l ? '#2c2420' : '#a89882', boxShadow: lang === l ? '0 1px 3px rgba(0,0,0,0.08)' : 'none', transition: 'all 0.2s' }}>{l}</button>
          ))}
        </div>
      </header>

      <div ref={contentRef} className="sc" style={{ flex: 1, overflow: 'auto', opacity: animating ? 0 : 1, transform: animating ? 'translateY(8px)' : 'translateY(0)', transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)' }}>

        {currentView === 'cover' && (
          <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', minHeight: 500 }}>
              <img src={COVER_IMAGE} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,22,17,0.95) 0%, rgba(28,22,17,0.4) 40%, rgba(28,22,17,0.1) 70%)' }} />
              <div style={{ position: 'relative', zIndex: 2, padding: '40px 32px 48px', width: '100%' }}>
                <p style={{ fontFamily: S.sans, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>The Digital Mook</p>
                <h1 style={{ fontSize: 'clamp(36px, 8vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 16 }}>{d.title}</h1>
                <p style={{ fontSize: 'clamp(15px, 2.5vw, 19px)', color: 'rgba(255,255,255,0.75)', fontStyle: 'italic', lineHeight: 1.55, maxWidth: 480 }}>{d.subtitle}</p>
                <button onClick={() => navigate('toc')} className="bh" style={{ marginTop: 32, padding: '14px 36px', background: '#fff', color: '#2c2420', border: 'none', borderRadius: 4, cursor: 'pointer', fontFamily: S.sans, fontSize: 14, fontWeight: 600 }}>{d.sommaire} →</button>
              </div>
            </div>
          </div>
        )}

        {currentView === 'toc' && (
          <div style={{ maxWidth: 600, margin: '0 auto', padding: '48px 24px 64px' }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 40, textAlign: 'center' }}>{d.sommaire}</h2>
            {d.chapters.map((ch, idx) => (
              <div key={idx} style={{ marginBottom: 36 }}>
                <h3 style={{ fontFamily: S.sans, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8b7d6b', marginBottom: 16, paddingBottom: 8, borderBottom: '1px solid #e8e0d6' }}>{ch.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {ch.recipes.map(r => (
                    <button key={r.id} onClick={() => navigate('recipe', { ...r, chapterIdx: idx, chapterTitle: ch.title })} className="bh"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', borderRadius: 6, width: '100%' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#f0ebe4'}
                      onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                      <span style={{ fontSize: 17, color: '#2c2420', lineHeight: 1.35, flex: 1 }}>
                        <span style={{ color: '#a89882', marginRight: 8 }}>{String(r.id).padStart(2, '0')}</span>{r.title}
                      </span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a89882" strokeWidth="2" style={{ flexShrink: 0, marginLeft: 8 }}><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {currentView === 'recipe' && selectedRecipe && (
          <div style={{ maxWidth: 760, margin: '0 auto', padding: '40px 24px 80px' }}>
            <p style={{ fontFamily: S.sans, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8b7d6b', marginBottom: 6 }}>{selectedRecipe.chapterTitle}</p>
            <p style={{ fontFamily: S.sans, fontSize: 13, color: '#a89882', marginBottom: 12 }}>{d.recette} {String(selectedRecipe.id).padStart(2, '0')}</p>
            <h2 style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}>{selectedRecipe.title}</h2>
            <p style={{ fontSize: 16, fontStyle: 'italic', color: '#6b5e50', lineHeight: 1.6, marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid #e8e0d6' }}>{selectedRecipe.description}</p>

            <div style={{ display: 'flex', gap: 32, marginBottom: 36, flexWrap: 'wrap' }}>
              <div style={{ flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
                <PolaroidPhoto recipeId={selectedRecipe.id} />
              </div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <h3 style={{ fontFamily: S.sans, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8b7d6b', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 20, height: 1, background: '#c4b5a3', display: 'inline-block' }} />{d.ingredientsTitle}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 10, fontSize: 15, color: '#4a3f35', lineHeight: 1.45 }}>
                      <span style={{ color: '#c4b5a3', fontSize: 7, marginTop: 5, flexShrink: 0 }}>●</span>{ing}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: 48 }}>
              <h3 style={{ fontFamily: S.sans, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8b7d6b', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 20, height: 1, background: '#c4b5a3', display: 'inline-block' }} />{d.prepTitle}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {selectedRecipe.instructions.map((inst, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14 }}>
                    <span style={{ fontFamily: S.sans, fontSize: 12, fontWeight: 600, color: '#a89882', width: 24, height: 24, borderRadius: 12, border: '1px solid #ddd5c9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>{i + 1}</span>
                    <p style={{ fontSize: 15, color: '#4a3f35', lineHeight: 1.65, flex: 1 }}>{inst}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, borderTop: '1px solid #e8e0d6', paddingTop: 24 }}>
              {prev ? (
                <button onClick={() => navigate('recipe', prev)} className="bh" style={{ flex: 1, padding: '14px 16px', background: '#f5f0ea', border: '1px solid #e8e0d6', borderRadius: 6, cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ fontFamily: S.sans, fontSize: 11, color: '#a89882', display: 'block', marginBottom: 4 }}>← {lang === 'fr' ? 'Précédent' : 'Previous'}</span>
                  <span style={{ fontSize: 14, color: '#2c2420', lineHeight: 1.3, display: 'block' }}>{prev.title}</span>
                </button>
              ) : <div style={{ flex: 1 }} />}
              {next ? (
                <button onClick={() => navigate('recipe', next)} className="bh" style={{ flex: 1, padding: '14px 16px', background: '#f5f0ea', border: '1px solid #e8e0d6', borderRadius: 6, cursor: 'pointer', textAlign: 'right' }}>
                  <span style={{ fontFamily: S.sans, fontSize: 11, color: '#a89882', display: 'block', marginBottom: 4 }}>{lang === 'fr' ? 'Suivant' : 'Next'} →</span>
                  <span style={{ fontSize: 14, color: '#2c2420', lineHeight: 1.3, display: 'block' }}>{next.title}</span>
                </button>
              ) : <div style={{ flex: 1 }} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}