const ANIMALS = {
  MAMALS: "Mammals",
  BIRDS: "Birds",
  INSECTS: "Insects",
  FISH: "Fish",
  REPTILES: "Reptiles",
  AMPHIBIANS: "Amphibians",
}

const Mammals = {
  rodents: [
    "agouti",
    "beaver",
    "blesmol",
    "capybara",
    "chinchilla",
    "degu",
    "guinea pig",
    "hamster",
  ],
  dog: ["coyote", "culpeo", "dhole", "jackal", "wolf"],
}

const animalsData = {
  Mammals: {
    primates: [
      {
        id: 1,
        name: "ape",
        description:
          "any of various large tailless semi-erect primates of Africa and southeastern Asia",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/d2/11/6b/d2116ba1f417590947624c5f7fccd136.jpg",
        subType: [
          {
            id: 4,
            name: "bonobo",
            description:
              "a small, intelligent African ape with black or brown fur, similar to a chimpanzee",
            link: "Cambridge Dictionary",
            image:
              "https://i.pinimg.com/564x/89/e1/a0/89e1a09e515a3bee850511bdcaf8d53c.jpg",
          },
          {
            id: 5,
            name: "chimpanzee",
            description:
              "a small intelligent African ape (= an animal like a large monkey without a tail)",
            link: "Oxford Dictionary",
            image:
              "https://i.pinimg.com/564x/f0/e8/a9/f0e8a95d6e2073de82c96cefd1bb2e04.jpg",
          },
          {
            id: 6,
            name: "gorilla",
            description: "a large ape that comes from western Africa",
            link: "Cambridge Dictionary",
            image:
              "https://i.pinimg.com/564x/51/b0/ba/51b0bae9702cbca03db8c7c19d078373.jpg",
          },
          {
            id: 7,
            name: "orangutan",
            description: "a largely herbivorous arboreal anthropoid ape",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/f2/9a/2c/f29a2c834adbf25c81eb8818b014122f.jpg",
          },
          {
            id: 8,
            name: "gibbon",
            description:
              "a small ape with long arms that lives in trees in the forests of South Asia",
            link: "Cambridge Dictionary",
            image:
              "https://i.pinimg.com/564x/29/f4/49/29f4498d07c93ab720d884bc95b79f21.jpg",
          },
        ],
      },
      {
        id: 2,
        name: "lemur",
        description:
          "any of various arboreal diurnal or nocturnal, chiefly arboreal primates  of Madagascar and the Comoros Islands",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/3e/b0/c3/3eb0c36994b78489f3d2e20aef6c26c4.jpg",
        subType: [
          {
            id: 9,
            name: "indri",
            description:
              "a large diurnal black-and-white lemur of Madagascar that is about two feet long with a rudimentary tail",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/b1/e7/2a/b1e72a30368cea9a086f97cdaea174a6.jpg",
          },
          {
            id: 10,
            name: "sifaka",
            description:
              "any of several diurnal mostly black-and-white lemurs (genus Propithecus) with a long tail and silky fur",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/b0/0b/f4/b00bf4e9d94d1ded44c8193cbf1064f2.jpg",
          },
        ],
      },
      {
        id: 3,
        name: "monkey",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/d2/11/6b/d2116ba1f417590947624c5f7fccd136.jpg",
        subType: [
          {
            id: 1,
            name: "baboon",
            description:
              "a large African or Asian monkey with a long face like a dog’s",
            link: "Oxford Dictionary",
            image:
              "https://i.pinimg.com/564x/bb/05/68/bb05684f8f5a48cf08e512bfdceb6084.jpg",
          },
          {
            id: 10,
            name: "colobus",
            description:
              "any of various slender, long-tailed monkeys  of equatorial African forests and grasslands that have the thumb absent or vestigial and are black usually with white encircling the face and long white fringes of silky hair on the sides of the body and the tail",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/02/eb/26/02eb263f556d6f10c047744012bfe305.jpg",
          },
          {
            id: 10,
            name: "mandrill",
            description:
              "a large West African monkey that has a red and blue face and a very short tail",
            link: "Cambridge Dictionary",
            image:
              "https://i.pinimg.com/564x/eb/69/a5/eb69a5185ead71790a44e6f557a9277c.jpg",
          },
        ],
      },
    ],
    rodents: [
      {
        id: 1,
        name: "agouti",
        description:
          "any of a genus of tropical American rodents about the size of a rabbit",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/6f/4e/7b/6f4e7b98738947a672b09f5d4c68b044.jpg",
      },
      {
        id: 2,
        name: "beaver",
        description:
          "either of two large semiaquatic herbivorous rodents, having webbed hind feet and a broad flat scaly tail, and constructing dams and partially submerged lodges",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/ae/f3/79/aef379594cec77cbd9c903a0caf4b5da.jpg",
      },
      {
        id: 3,
        name: "blesmol",
        description:
          "any of several grayish burrowing southern African rodents of Bathyergus and related genera that are very destructive to root crops",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/16/9d/c3/169dc3b0da92f96bb86ddf7888bc8978.jpg",
      },
      {
        id: 4,
        name: "capybara",
        description: "a tailless semiaquatic South and Central American rodent often exceeding four feet (1.2 meters) in length",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/cb/b5/4a/cbb54aa690b30a8e5e7827b83f4abe87.jpg",
      },
      {
        id: 5,
        name: "chinchilla",
        description:
          "either of two small South American rodents of the high Andes that are the size of large squirrels, have very soft pearly-gray fur, and are extensively bred in captivity",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/c5/30/13/c5301332f1ad3f1f2a8bce6eaf9cf287.jpg",
      },
      {
        id: 6,
        name: "degu",
        description:
          "any of several small hystricomorphic rodents of western South America",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/ca/97/2e/ca972ea855e4829cccee9f69ef8d25db.jpg",
      },
      {
        id: 7,
        name: "guinea pig",
        description:
          "a small stout-bodied short-eared tailless domesticated rodent of South American origin often kept as a pet and widely used in biological research",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/a0/1b/6f/a01b6f8d3f60279a3a3b4967467b61a6.jpg",
      },
      {
        id: 8,
        name: "hamster",
        description:
          "any of a subfamily of small rodents having very large cheek pouches",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/f5/1f/65/f51f654a7380e1d2fc6763ad1bd93fe4.jpg",
      },
      {
        id: 9,
        name: "mara",
        description:
          "a long-legged long-eared rodent closely related to the cavies and widely distributed in southern South America",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/db/ef/c9/dbefc9e3963a2e8a7443f20715c86ce2.jpg",
      },
      {
        id: 10,
        name: "mouse",
        description:
          "any of numerous small rodents with pointed snout, rather small ears, elongated body, and slender tail",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/b2/2f/01/b22f017123a58d32322a369fef7bff24.jpg",
      },
      {
        id: 11,
        name: "nutria",
        description:
          "a large South American semiaquatic rodent  with webbed hind feet and a round nearly hairless tail that has been introduced into parts of Europe, Asia, and North America",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/11/16/7d/11167d0fd354fc5071e28e89585e0119.jpg",
      },
      {
        id: 12,
        name: "paca",
        description:
          "either of two large nocturnal chiefly Central and South American rodents",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/01/49/fd/0149fdf34f6dc7fdd8878b999b1942a6.jpg",
      },
      {
        id: 13,
        name: "rat",
        description:
          "a small rodent, larger than a mouse, that has a long tail and is considered to be harmful",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/2d/6e/85/2d6e856c98f6d2e201c52af207655e8c.jpg",
      },
      {
        id: 14,
        name: "squirrel",
        description:
          "any of various small or medium-sized rodents",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/54/b7/08/54b7089fc75ac9d781de55783ca50630.jpg",
      },
    ],
    cat: [
      {
        id: 1,
        name: "bay cat",
        description: "a wild cat of Borneo and adjacent regions",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/2d/28/e9/2d28e96d25b5d65c3b75c299efc60d75.jpg",
      },
      {
        id: 2,
        name: "bobcat",
        description:
          "a North American wild animal of the cat family with brown hair, pointed ears, and a short tail",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/28/ef/2a/28ef2a96f82eb13f8b82b6a9e1d9d8a5.jpg",
      },
      {
        id: 3,
        name: "caracal",
        description:
          "a long-legged reddish-brown nocturnal cat  of savannas in Africa and parts of Asia that has long pointed ears with a tuft of black hairs at the tip",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/d7/fe/9b/d7fe9b41150f9b98f530fb697ca40db8.jpg",
      },
      {
        id: 4,
        name: "cheetah",
        description:
          "a wild animal of the cat family that has black spots and that runs very fast",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/78/e7/8a/78e78a2ddb82065494ba12eacd8a99c0.jpg",
      },
      {
        id: 5,
        name: "cougar",
        description:
          "a large American wild animal of the cat family, with yellow-brown or grey fur",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/84/af/cb/84afcba84cbb7dc682268c0d059376a8.jpg",
      },
      {
        id: 6,
        name: "jaguar",
        description:
          "a large animal of the cat family, that has yellow-brown fur with black rings and spots. Jaguars live in parts of Central and South America",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/68/83/7c/68837c715b4ee45e3111b3bf0512da54.jpg",
      },
      {
        id: 7,
        name: "leopard",
        description:
          "a large wild cat that has yellow fur with black spots on it and lives in Africa and southern Asia",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/a8/bd/55/a8bd55743b25d2b7bb188c80ee3e236c.jpg",
      },
      {
        id: 8,
        name: "lion",
        description:
          "a large wild animal of the cat family with yellowish -brown fur that lives in Africa and southern Asia",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/736x/14/f2/1f/14f21feefad0a4a70d3fbb2d0577a22c.jpg",
      },
      {
        id: 9,
        name: "lynx",
        description:
          "a wild animal of the cat family that has brown hair, sometimes with dark spots on it, pointed ears, and a short tail",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/6b/b7/f6/6bb7f645e1f1a4ae041b2fbbc58f4695.jpg",
      },
      {
        id: 10,
        name: "margay",
        description:
          "a small American spotted cat resembling the ocelot and ranging from northern Mexico to Argentina",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/fc/ef/b8/fcefb8149321bdc2d5451c6f1af23dbd.jpg",
      },
      {
        id: 11,
        name: "ocelot",
        description:
          "a small wild cat that has yellow fur with black spots and lives in South America and Central America",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/fb/f7/2b/fbf72b267a82d8c80a4a9560db12c4bb.jpg",
      },
      {
        id: 12,
        name: "panther",
        description:
          "a black leopard (= large wild cat)",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/dd/79/4e/dd794e2b1e7af2d3a01c723a67d2d5e9.jpg",
      },
      {
        id: 13,
        name: "puma",
        description:
          "a large, brown wild cat that lives in North and South America",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/18/98/1a/18981ae6d1719b7c02f086f759daa1a8.jpg",
      },
      {
        id: 14,
        name: "serval",
        description:
          "a medium-sized African wild cat that has yellow-brown fur with black spots and stripes",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/99/ee/9a/99ee9a3433e8f489d5fb01e2c7dc61cb.jpg",
      },
      {
        id: 15,
        name: "tiger",
        description:
          "a large wild animal of the cat family that has orange fur with black stripes (= narrow lines) and lives in parts of Asia",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/5f/3b/4d/5f3b4d18e4c8b1ca2d05bce43706072f.jpg",
      },
    ],
    dog: [
      {
        id: 1,
        name: "coyote",
        description: "a small wild animal like a dog that lives in North America",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/b9/b8/0e/b9b80ebfd18cb953bd49fe6ac96f17b1.jpg",
      },
      {
        id: 2,
        name: "culpeo",
        description:
          " a South American mammal that was formerly considered a true dog ",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/8b/09/ee/8b09eef9fd2c62aa5a81f07f52926e85.jpg",
      },
      {
        id: 3,
        name: "dhole",
        description:
          "a wild dog occurring from India to southern Siberia that typically hunts in packs and often preys on large animals (such as deer and antelope)",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/736x/fd/ab/09/fdab094f285b712b35c17b13230e80eb.jpg",
      },
      {
        id: 4,
        name: "jackal",
        description:
          "a wild animal like a dog, that eats the meat of animals that are already dead and lives in Africa and Asia",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/b2/9f/b2/b29fb2ced415c791b3e9d5f7ac886a9f.jpg",
      },
      {
        id: 5,
        name: "wolf",
        description:
          "a wild animal of the dog family",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/e5/79/33/e579331d61e0b4ae62500d43488be871.jpg",
      },
    ],
    marsupial: [
      {
        id: 1,
        name: "koala",
        description:
          "an Australian arboreal marsupial that has a broad head, large hairy ears, dense gray fur, and sharp claws and feeds on eucalyptus leaves",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/6e/6e/aa/6e6eaaef8189c45ada3e2431ebb2e876.jpg",
      },
      {
        id: 2,
        name: "kangaroo",
        description:
          "a herbivorous leaping marsupial mammals of Australia, New Guinea, and adjacent islands with a small head, large ears, long powerful hind legs, a long thick tail used as a support and in balancing, and rather small forelegs not used in locomotion",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/85/64/72/85647200497ac46cdc052efda7b428c6.jpg",
      },
      {
        id: 3,
        name: "numbat",
        description:
          "a small Australian marsupial that has a reddish-brown coat with white stripes on the back, a pointed snout, and a long slender tongue used to feed chiefly on termites",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/db/76/67/db7667ffc432407425522735f1c6d563.jpg",
      },
      {
        id: 4,
        name: "opossum",
        description:
          "a small American marsupial that lives in trees and has thick fur, a long nose, and a tail without fur",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/5c/ae/3e/5cae3ee4afce9c28903693185e22128a.jpg",
      },
      {
        id: 5,
        name: "quokka",
        description:
          "a stocky herbivorous marsupial of southwestern Australia that has a short tail",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/736x/a1/6b/75/a16b752c3ce79ee2230d815ef0a3e138.jpg",
      },
      {
        id: 6,
        name: "tasmanian devil",
        description:
          "a heavily built carnivorous nocturnal Tasmanian marsupial that is about the size of a badger and has powerful jaws and teeth and a chiefly black coat marked with white on the chest",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/736x/1f/71/25/1f71253dc8f0aa241edce3e97cf0e228.jpg",
      },
      {
        id: 7,
        name: "tasmanian tiger",
        description:
          "a somewhat doglike carnivorous marsupial  that formerly inhabited Tasmania but is now considered extinct",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/736x/f7/d7/b4/f7d7b4055de4257e672274ebde2dcbfa.jpg",
      },
      {
        id: 8,
        name: "wombat",
        description:
          "a stocky burrowing Australian marsupials resembling small bears",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/a2/88/57/a28857afbc38688ed68a707988939cc7.jpg",
      },
    ],
  },
  Birds: {
    flightless: [
      {
        id: 1,
        name: "takahe",
        description:
          "a flightless bird of the rail family that occurs in New Zealand",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/aa/b4/ec/aab4ec475ad78206060e15f078a58fac.jpg",
      },
    ],
    songbirds: [
      {
        id: 1,
        name: "bulbul",
        description:
          "a songbird frequently mentioned in Persian poetry that is probably a nightingale",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/61/51/62/6151624e6e46910a3245ab2d0883f197.jpg",
      },
      {
        id: 2,
        name: "finch",
        description:
          "any of numerous passerine songbirds having a short stout usually conical bill adapted for crushing seeds",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/07/28/44/07284473d7b02a081636732aa0ddf3ea.jpg",
      },
      {
        id: 3,
        name: "lark",
        description:
          "a family  of chiefly Old World ground-dwelling songbirds that are usually brownish in color",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/736x/6b/e8/d7/6be8d7cbc46e389784f6c7ebe029d299.jpg",
      },
      {
        id: 4,
        name: "pipit",
        description: "small songbird",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/93/bc/50/93bc50a1fa2dd6dea8bbf10cba42b845.jpg",
      },
      {
        id: 5,
        name: "robin",
        description: "songbirds that are related to or resemble the European robin",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/e6/bb/67/e6bb674a27178f2e6a6ece1a4ff8bae0.jpg",
      },
      {
        id: 6,
        name: "wren",
        description: "small typically brownish oscine singing birds",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/1d/9a/39/1d9a39b1078c317599131cfdfc2fb21e.jpg",
      },
    ],
    waterbirds: [
      {
        id: 1,
        name: "cormorant",
        description:
          "any of various dark-colored web-footed waterbirds that have a long neck, hooked bill, and distensible throat pouch",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/e7/95/1e/e7951e25363e474ecfc03af10caea1d9.jpg",
      },
      {
        id: 2,
        name: "goose",
        description:
          "a large water bird similar to a duck but larger, or the meat from this bird",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/18/0e/0d/180e0d1d96a602b1cd104fa1ebc07956.jpg",
      },
      {
        id: 3,
        name: "grebe",
        description:
          "any of a family of grey or brown water birds that swim on or under surface of the water",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/fe/b3/41/feb34154cfbe5006f707fe579b9b6914.jpg",
      },
    ]
  },
  Insects: {
    hymenopterous: [
      {
        id: 1,
        name: "ant",
        description:
          "colonial hymenopterous insects with a complex social organization and various castes performing special duties",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/65/34/29/653429b91163c5c767c7a4a5a96fd86b.jpg",
      },
      {
        id: 2,
        name: "bee",
        description:
          "any of numerous hymenopterous insects that differ from the related wasps especially in the heavier hairier body and in having sucking as well as chewing mouthparts, that feed on pollen and nectar, and that store both and often also honey",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/04/7e/0b/047e0b76a13e26836c08b8b2d01533d2.jpg",
      },
      {
        id: 3,
        name: "horntail",
        description:
          "any of various hymenopterous insects related to the typical sawflies but having females with a stout hornlike ovipositor and larvae that burrow in woody plants",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/1a/e8/64/1ae86410cf2b3b51762e146803ff13fa.jpg",
      },
      {
        id: 4,
        name: "sawfly",
        description:
          "hymenopterous insects with the female usually having a sawlike ovipositor and with the larva resembling a plant-feeding caterpillar",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/4f/e2/50/4fe250026a0c4ffaae5ac3a473fefcce.jpg",
      },
      {
        id: 5,
        name: "wasp",
        description:
          "any of numerous social or solitary winged hymenopterous insects that usually have a slender smooth body with the abdomen attached by a narrow stalk, well-developed wings, biting mouthparts, and in the females and workers an often formidable sting",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/2b/bd/76/2bbd7623c133355567403b18da9dc315.jpg",
      },
    ],
    lepidopteran: [
      {
        id: 1,
        name: "butterfly",
        description:
          "any of numerous slender-bodied diurnal lepidopteran insects including one superfamily  with broad often brightly colored wings and usually another superfamily comprising the skippers",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/9c/48/7b/9c487b975706eed72540e1d586c92db9.jpg",
        subType: [
          {
            id: 2,
            name: "fritillary",
            description:
              "a butterfly with orange-brown and black wings",
            link: "Oxford Dictionary",
            image:
              "https://i.pinimg.com/564x/17/e8/62/17e8623432364b44471a73282ed939bc.jpg",
          },
          {
            id: 3,
            name: "metalmark",
            description:
              "any of a family of small or medium-sized usually brightly colored chiefly tropical butterflies that often have metallic coloration on the wings",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/e7/a8/81/e7a88166e8e6d36a724d8dda0254af36.jpg",
          },
          {
            id: 4,
            name: "monarch butterfly",
            description:
              "a large butterfly (= a flying insect) with orange and black wings, found mainly in North America",
            link: "Oxford Dictionary",
            image:
              "https://i.pinimg.com/736x/71/3b/28/713b28297ae6ea55a5f341f0cfe0dec1.jpg",
          },
          {
            id: 5,
            name: "morpho",
            description:
              "any of a genus of large showy tropical American butterflies that typically have a brilliant blue metallic luster on the upper surface of the wings",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/ec/e9/9c/ece99cbc1f2f438e55ff7ca3173aa1b8.jpg",
          },
          {
            id: 6,
            name: "painted lady",
            description:
              "a butterfly that has orange-brown wings with darker marks on them",
            link: "Oxford Dictionary",
            image:
              "https://i.pinimg.com/564x/b7/2c/f1/b72cf159badf5b5349e323060338cfe8.jpg",
          },
          {
            id: 7,
            name: "swallowtail",
            description:
              "large brightly marked butterflies with each hind wing typically having an elongated process",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/9e/6e/bb/9e6ebb0cea555b3ed2d825a32b7484ae.jpg",
          },
        ],
      },
      {
        id: 8,
        name: "moth",
        description:
          "any of various usually nocturnal lepidopteran insects with antennae that are often feathery, with a stouter body, duller coloring, and proportionately smaller wings than the butterflies, and with larvae that are plant-eating caterpillars",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/e2/f1/59/e2f1596f356bb69f15b8d34f371a366b.jpg",
      },
      {
        id: 9,
        name: "skipper",
        description:
          "a superfamily of lepidopterous insects that have stout bodies, smaller wings, and usually hooked antennae",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/58/2b/11/582b113b49e78b47214bff8ca41c9d04.jpg",
      },
    ],
    orthopteran: [
      {
        id: 10,
        name: "cricket",
        description:
          "leaping orthopteran insects noted for the chirping notes produced by the male by rubbing together specially modified parts of the forewings",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/37/93/d8/3793d8df8047a651c0358f40746952b7.jpg",
      },
      {
        id: 11,
        name: "grasshopper",
        description:
          "orthopterous insects  having the hind legs adapted for leaping and sometimes engaging in migratory flights in which whole regions may be stripped of vegetation",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/7c/29/ed/7c29edf36c52cf5cabf00ff47dad1c5e.jpg",
      },
    ],
    homopterous: [
      {
        id: 12,
        name: "aphid",
        description:
          "very small soft-bodied homopterous insects that suck the juices of plants",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/ad/02/49/ad0249eba727c695ace0b476e9e13ff5.jpg",
      },
      {
        id: 13,
        name: "cicada",
        description:
          "homopterous insects which have a stout body, wide blunt head, and large transparent wings and the males of which produce a loud buzzing noise usually by stridulation",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/1f/a6/bf/1fa6bfc509d34cbb9fd2d3b07226afee.jpg",
      },
      {
        id: 14,
        name: "spittlebug",
        description:
          "homopterous insects whose nymphal larvae produce a frothy secretion",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/a1/4b/38/a14b388430029a7a37b20f543e626dee.jpg",
      },
      {
        id: 15,
        name: "leafhopper",
        description:
          "small leaping homopterous insects that suck the juices of plants",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/6c/cf/01/6ccf01dc28834f89a9b3627edb0786c6.jpg",
      },
      {
        id: 16,
        name: "treehopper",
        description:
          "small leaping homopterous insects that feed on the sap especially of shrubs and trees",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/51/5b/aa/515baa07a308b77bddeee33ccbedac59.jpg",
      },
      {
        id: 17,
        name: "whitefly",
        description:
          "small homopterous insects that are injurious plant pests",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/50/07/06/5007060b7222110ff71bfc6deb2d5c5a.jpg",
      },
    ],
    hemipteran: [
      {
        id: 18,
        name: "bedbug",
        description:
          "a wingless bloodsucking hemipterous bug  sometimes infesting houses and especially beds and feeding on human blood",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/80/0b/eb/800beb299dbeb414089951eff48bdc10.jpg",
      },
      {
        id: 19,
        name: "plant bug",
        description:
          "an insect of the hemipterous family Miridae including many that are destructive pests of plants",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/cd/02/ca/cd02ca147d7da53d2b8f39dd0647de59.jpg",
      },
      {
        id: 20,
        name: "lace bug",
        description:
          "small bugs that constitute the large hemipterous family, that have bodies and wings covered with a lacy network of raised lines, and that include many that suck plant juices and are serious pests",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/8d/f0/00/8df000a8e580cad5dd3e1d3d20579726.jpg",
      },
    ],
    flying: [
      {
        id: 21,
        name: "crane fly",
        description:
          "a flying insect with very long legs",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/40/6f/b7/406fb73ce4f336d7cde6acc118acce2b.jpg",
      },
      {
        id: 22,
        name: "fruit fly",
        description:
          "a small flying insect that feeds on plants and leaves its eggs on the leaves of plants",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/e4/8b/0a/e48b0a514730a9c118a69d0f138a5155.jpg",
      },
      {
        id: 23,
        name: "gnat",
        description:
          "a very small flying insect that bites animals and people",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/b7/3e/08/b73e08d2290601f051eec42ace71c1f2.jpg",
      },
      {
        id: 24,
        name: "hornet",
        description:
          "a large wasp (= a black and yellow flying insect) that has a very powerful sting",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/35/79/ad/3579adae5d733d729933ab30e7e364c8.jpg",
      },
      {
        id: 25,
        name: "horsefly",
        description:
          "any of various large flying insects that bite horses, cattle, and sometimes people",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/4d/a7/4e/4da74eea937840d132024dda0580a530.jpg",
      },
      {
        id: 26,
        name: "mosquito",
        description:
          "a small flying insect that bites people and animals and sucks their blood",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/c9/6d/a4/c96da487f166316152cd78934f2b3c44.jpg",
      },
    ],
    wingless: [
      {
        id: 27,
        name: "flea",
        description:
          "small wingless bloodsucking insects that have a hard laterally compressed body and legs adapted to leaping and that feed on warm-blooded animals",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/87/c0/f0/87c0f0d20a78d0777c2c20a07ca0ba57.jpg",
      },
      {
        id: 28,
        name: "louse",
        description:
          "any of various small wingless usually flattened insects parasitic on warm-blooded animals",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/83/d9/05/83d90537db246551af9cdb0ca077110b.jpg",
      },
    ],
    beetles: [
      {
        id: 29,
        name: "black beetle",
        description:
          "glossy black burrowing beetles that are very destructive to turf and certain cultivated plants in Australia",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/40/42/07/404207a2b855d3dff7e7d72f7743db2d.jpg",
      },
      {
        id: 30,
        name: "click beetle",
        description:
          "beetles able to right themselves with a click when inverted by flexing the articulation between the prothorax and mesothorax",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/4b/26/52/4b2652c78452b6a6c4cc1a8f05cc863e.jpg",
      },
      {
        id: 31,
        name: "diving beetle",
        description:
          "aquatic beetles that breathe while submerged using air trapped under their elytra",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/21/c9/56/21c9563b5461ced9a616227fc2302f5c.jpg",
      },
      {
        id: 32,
        name: "dung beetle",
        description:
          "a beetle that rolls balls of dung in which to lay eggs and on which the larvae feed",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/aa/56/73/aa56732f3b3b62eef2ac06ecf5217a5a.jpg",
      },
      {
        id: 33,
        name: "colorado beetle",
        description:
          "a type of beetle with black and yellow lines on its body that attacks potato plants",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/736x/9a/e6/7a/9ae67affce092575435b8a08d2479fd1.jpg",
      },
      {
        id: 34,
        name: "elm bark-beetle",
        description:
          "a small beetle (= an insect with a hard shell-like back) that moves under the bark (= hard outer covering) of elm trees, bringing a disease that often kills them ",
        link: "Cambridge dictionary",
        image:
          "https://i.pinimg.com/564x/d9/10/a1/d910a185ab95cd229bb333f33ed7ec02.jpg",
      },
      {
        id: 35,
        name: "ladybird",
        description:
          "a small, red beetle that is round and has black spots",
        link: "Cambridge dictionary",
        image:
          "https://i.pinimg.com/564x/9c/54/79/9c54796f8df65954df2c4ef9fe0a0aec.jpg",
      },
      {
        id: 36,
        name: "larder beetle",
        description:
          "a dark brown or nearly black beetle  that  has a bristly larva which feeds on dried animal products",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/d9/10/a1/d910a185ab95cd229bb333f33ed7ec02.jpg",
      },
      {
        id: 37,
        name: "melon beetle",
        description:
          "chrysomelid beetles injurious to melons",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/6f/1f/cd/6f1fcdd71de33886943108a77e21112f.jpg",
      },
      {
        id: 38,
        name: "rhinoceros beetle",
        description:
          "any of various large chiefly tropical scarab beetles having projecting horns on thorax and head",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/04/94/bb/0494bbeb1aba7fe8789e4a0733e0df3c.jpg",
      },
      {
        id: 39,
        name: "stag beetle",
        description:
          "mostly large beetles having males with long and often branched mandibles suggesting the antlers of a stag",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/72/7d/34/727d349e52db228766f58d54dc0f4d38.jpg",
      },
      {
        id: 40,
        name: "tiger beetle",
        description:
          "active carnivorous beetles having larvae that tunnel in the soil",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/e3/05/67/e305675a500ca1cd19cbf9624d4dc0d4.jpg",
      },
      {
        id: 41,
        name: "cone beetle",
        description:
          "small beetles having larvae that develop in and destroy the growing cones of conifers, especially pines",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/13/23/ab/1323abe7d4693d3b2a0abeb6c0e4dea2.jpg",
      },
    ],
  },
  Fish: {
    cartilaginous: [
      {
        id: 1,
        name: "chimaera",
        description:
          "marine cartilaginous fishes with a tapering or threadlike tail and usually no anal fin",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/e0/17/4f/e0174f02d83cef2e82e4c0f57688aae0.jpg",
      },
      {
        id: 2,
        name: "ray",
        description:
          "usually marine cartilaginous fishes  having the body flattened dorsoventrally, the eyes on the upper surface, and enlarged pectoral fins fused with the head",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/18/6a/6c/186a6c09186b3aa35ff115e2526be06e.jpg",
      },
      {
        id: 3,
        name: "shark",
        description:
          "mostly marine cartilaginous fishes of medium to large size that have a fusiform body, lateral branchial clefts, and a tough usually dull gray skin roughened by minute tubercles and are typically active predators sometimes dangerous to humans",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/f6/eb/1b/f6eb1b0e8059bfca91c5aaec83408579.jpg",
        subType: [
          {
            id: 4,
            name: "basking shark",
            description:
              "a large shark that swims close to the surface of the ocean",
            link: "Oxford Dictionary",
            image:
              "https://i.pinimg.com/564x/eb/23/24/eb23247b3bde895a9f1d886270876102.jpg",
          },
          {
            id: 5,
            name: "blacktip shark",
            description:
              "a small, grayish requiem shark with black-tipped fins that is widely distributed in coastal tropical and subtropical seas",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/a6/86/e3/a686e36ea6ad64f12ee11171e5799eef.jpg",
          },
          {
            id: 6,
            name: "blue shark",
            description:
              "a chiefly pelagic shark that is found in all tropical and temperate seas and has been known to attack humans",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/736x/4c/94/a5/4c94a5608f74467f0b076ed812d2c039.jpg",
          },
          {
            id: 7,
            name: "bull shark",
            description:
              "an aggressive requiem shark of tropical to subtropical coastal waters that has a short, blunt snout and small eyes, is tolerant of freshwater and may spend extended periods in rivers, and has been known to attack people",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/05/23/26/052326a422b4dc354e484072d20d2532.jpg",
          },
          {
            id: 8,
            name: "great white shark",
            description:
              "a large aggressive shark with a brown or grey back, found in warm seas",
            link: "Oxford Dictionary",
            image:
              "https://i.pinimg.com/564x/8f/13/fc/8f13fcf96b829bca8a9330bded7bc825.jpg",
          },
          {
            id: 9,
            name: "hammerhead shark",
            description:
              "a shark with flat parts sticking out from either side of its head with eyes at the ends",
            link: "Oxford Dictionary",
            image:
              "https://i.pinimg.com/564x/24/47/37/244737d56fd38e32faf010fb710d60bb.jpg",
          },
          {
            id: 10,
            name: "lemon shark",
            description:
              "a medium-sized requiem shark of warm usually inshore waters that is yellowish brown to gray above with yellow or greenish sides, often congregates in groups, and is usually harmless to humans but may attack if provoked",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/736x/15/5b/8b/155b8bb3a16da34fbc026331b4786fe4.jpg",
          },
          {
            id: 11,
            name: "leopard shark",
            description:
              "sharks more or less mottled or blotched with black on a lighter ground",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/e0/41/f9/e041f951bd375f89f717a2613660ed15.jpg",
          },
          {
            id: 12,
            name: "mako shark",
            description:
              "slender mackerel sharks that are dark blue above and white below with long pointed snouts and that are notable sport fish",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/736x/ec/9d/af/ec9daff5eec1fd967fe02470e6901506.jpg",
          },
          {
            id: 13,
            name: "nurse shark",
            description:
              "bottom-dwelling sharks  with barbels near the nostrils",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/736x/c1/ae/b7/c1aeb7a88a2e255cf4cae2bfb1628eb6.jpg",
          },
          {
            id: 14,
            name: "tiger shark",
            description:
              "a large gray or brown stocky-bodied requiem shark that is nearly cosmopolitan especially in warm seas and can be dangerous to humans",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/736x/b4/d0/97/b4d097eb634d3eecde3d502727fe23d6.jpg",
          },
          {
            id: 15,
            name: "whale shark",
            description:
              "shark of warm waters that has small teeth, feeds chiefly on plankton strained by its gill rakers, may sometimes attain a length of up to 60 feet (18.3 meters), and is the largest known fish",
            link: "Merriam-Webster",
            image:
              "https://i.pinimg.com/564x/c4/42/1f/c4421f936c36e7d8f5355104c7ada319.jpg",
          },
        ],
      },
    ],
    bony: [
      {
        id: 16,
        name: "bass",
        description:
          "edible marine or freshwater bony fishes",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/47/a7/58/47a758fc0783c52c5075c29570e9b262.jpg",
      },
      {
        id: 17,
        name: "black cod",
        description:
          "a large gray to blackish bony fish of the Pacific coast that is an important food fish and has a liver rich in vitamins",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/db/71/62/db7162104760686f5f877d35112df7d0.jpg",
      },
      {
        id: 18,
        name: "butterfish",
        description:
          "bony fishes with a slippery coating of mucus",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/58/47/71/584771cebfbc003fa35cd5631ad4bdea.jpg",
      },
      {
        id: 19,
        name: "catfish",
        description:
          "chiefly freshwater stout-bodied scaleless bony fishes having long tactile barbels",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/d0/a7/f7/d0a7f74fb6bade0c3f59a83aa97c4f12.jpg",
      },
      {
        id: 20,
        name: "eel",
        description:
          "voracious elongate snakelike bony fishes that have a smooth slimy skin, lack pelvic fins, and have the median fins confluent around the tail",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/09/c4/c3/09c4c315670b4ff266efd6f22887bfd9.jpg",

      },
      {
        id: 21,
        name: "goatfish",
        description:
          "medium-sized often brightly colored bony fishes having two long barbels under the chin, and elongate body, and two widely separated dorsal fins",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/5f/16/53/5f1653dd1d574a589c91a83aa7fbef78.jpg",
          
      },
      {
        id: 22,
        name: "herring",
        description:
          "soft-finned bony fishes that have a laterally compressed body and a forked tail and usually occur in schools",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/89/3a/4b/893a4ba1b86776ea4b9b803ac131f952.jpg",
          
      },
      {
        id: 23,
        name: "mullet",
        description:
          "chiefly marine bony fishes with an elongate rather stout body",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/0f/a8/44/0fa8446f4f62d3746cbf07bd69340df7.jpg",
          
      },
      {
        id: 24,
        name: "perch",
        description:
          "a small European freshwater bony fish",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/06/55/5d/06555d05d76d69b0a81a0b1afd2d78c2.jpg",
          
      },
      {
        id: 25,
        name: "pike",
        description:
          "a large elongate long-snouted freshwater bony fish  valued for food and sport and widely distributed in cooler parts of the northern hemisphere",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/52/f7/cc/52f7cc201a7ff6d58ce702296e0b5f81.jpg",
          
      },
      {
        id: 26,
        name: "sturgeon",
        description:
          "usually large elongate anadromous or freshwater bony fishes which are widely distributed in the north temperate zone and whose roe is made into caviar",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/d3/eb/a7/d3eba762566b62cef102209e4ab91abd.jpg",
          
      },
      {
        id: 27,
        name: "sunfish",
        description:
          "North American freshwater bony fishes  usually with a deep compressed body and metallic luster",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/bd/22/a1/bd22a10ebf86f594024eac821aebffa2.jpg",
          
      },
      {
        id: 28,
        name: "tilefish",
        description:
          "marine bony fishes used as food",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/c3/ff/79/c3ff79fd04ee91a7e6825d5e1d731aeb.jpg",
          
      },
      {
        id: 29,
        name: "weakfish",
        description:
          "a common marine bony fish  of the eastern coast of the U.S. that is an important sport and food fish",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/0a/60/dc/0a60dc57c80fb432d7189f76cf1861e4.jpg",
      },
    ],
    scombroid: [
      {
        id: 30,
        name: "bonito",
        description:
          "any of several swift-swimming scombroid fishes  that are typically dark blue to bluish-green with dark stripes and a silvery belly, that are intermediate in size between the related mackerel and tuna, and that are valued as food and sport fishes",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/be/f2/04/bef2041b16d2ae5d1cf1b824d5386720.jpg",
          
      },
      {
        id: 31,
        name: "mackerel",
        description:
          "a scombroid fish of the North Atlantic that is green above with dark blue bars and silvery below and is a commercially important food fish",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/98/31/5e/98315ed22e9bbbeee72eb167be301ce8.jpg",
          
      },
      {
        id: 32,
        name: "swordfish",
        description:
          "a very large scombroid fish that has a long swordlike beak formed by the bones of the upper jaw and is an important food and game fish",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/6f/2c/4e/6f2c4e71a9b3ba1c8320f7a7130e0018.jpg",
          
      },
      {
        id: 33,
        name: "tuna",
        description:
          "any of various large vigorous scombroid fishes that are usually dark above and silvery below and include many that are valued as food or sport fishes",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/17/53/85/175385ae94f5f617147481b425f37cae.jpg",
          
      },
    ],
    sea: [
      {
        id: 34,
        name: "bluefish",
        description:
          "a blue-coloured sea fish that is caught for sport and food",
        link: "Oxford Dictionary",
        image:
          "hhttps://i.pinimg.com/564x/49/d1/4e/49d14e4a5b1377d4e2db197cfb9ff771.jpg",
      },
      {
        id: 35,
        name: "cod",
        description:
          "a large sea fish that is white inside and used for food",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/63/60/ad/6360ad74d5dbe5f9fac7ee273ffae605.jpg",
      },
      {
        id: 36,
        name: "flatfish",
        description:
          "any thin flat sea fish, such as a plaice or a sole",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/eb/52/a2/eb52a2235e69b3473de483d8e9c7d82c.jpg",
          
      },
      {
        id: 37,
        name: "flounder",
        description:
          "a flat sea fish that can be eaten",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/15/c1/63/15c1637f29a5e35b37c99e1d9f0471fb.jpg",
      },
      {
        id: 38,
        name: "hake",
        description:
          "a large sea fish that is used for food",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/736x/a8/82/2c/a8822c0b4f6132addc3e66e40e26ceaa.jpg",
      },
      {
        id: 39,
        name: "halibut",
        description:
          "a large flat sea fish that is used for food",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/cf/d6/e4/cfd6e4ce9d5584aa4ce64287a9f5fffd.jpg",
      },
      {
        id: 40,
        name: "jewfish",
        description:
          "different kinds of large fish that live in warm or tropical seas",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/3c/7d/20/3c7d20da9e05192ece0b5a04f352f394.jpg",
      },
      {
        id: 41,
        name: "plaice",
        description:
          "a sea fish with a flat, circular body, or its flesh eaten as food",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/85/66/72/85667200c8b622afd213bfcab1c8b04c.jpg",
      },
      {
        id: 42,
        name: "salmon",
        description:
          "a medium-sized silver-coloured fish that lives in the sea oand swims up rivers to produce its eggs",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/5a/7b/e2/5a7be215cf4d4aeef737b15c437765e2.jpg",
      },
      {
        id: 43,
        name: "snapper",
        description:
          "active carnivorous fishes of warm seas important as food and often as sport fishes",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/19/ec/2e/19ec2e7e250b4ea6cbadef6748e6ae36.jpg",
      },
      {
        id: 44,
        name: "whiting",
        description:
          "a small sea fish that is white inside and used for food",
        link: "Oxford Dictionary",
        image:
          "https://i.pinimg.com/564x/83/dc/e5/83dce52f2c476279c57a192610116c53.jpg",
      },
    ],
  },
  Reptiles: {
    snake: [
      {
        id: 1,
        name: "anaconda",
        description:
          "a large South American snake that curls around a live animal and crushes it to kill it for food",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/62/c7/d2/62c7d2496b85bb638e6dc3bbc4f72b83.jpg",
      },
      {
        id: 2,
        name: "bandy - bandy",
        description:
          "a common poisonous ringed snake of Australia with a mouth so small as to be incapable of biting a person",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/61/04/9d/61049d8d591fefcd9f530431cf6ad93e.jpg",
      },
      {
        id: 3,
        name: "black snake",
        description:
          "snakes that are largely black or very dark in color",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/0b/90/1a/0b901a0a18c2905233bd9ffcbbd0ff4e.jpg",
      },
      {
        id: 4,
        name: "boa",
        description:
          "a large, strong snake, found in South and Central America, that kills animals and birds by wrapping itself around them and crushing them",
        link: "Cambridge Dictionary",
        image:
          "https://i.pinimg.com/564x/bc/7a/c9/bc7ac920a764c328e1f63557ee1e39d3.jpg",
      },
      {
        id: 5,
        name: "boomslang",
        description:
          "a large boigid tree snake of southern Africa variously colored green or brownish black and having retiring ways and a back-fanged mouth that render it practically harmless to humans despite its powerful venom",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/82/9e/f5/829ef56da184442594d696cf07aab5b5.jpg",
      },
      {
        id: 6,
        name: "brown snake",
        description:
          "Australian venomous elapid snakes ",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/35/5b/f5/355bf510d7539ab292dd50e9454d878e.jpg",
      },
      {
        id: 7,
        name: "cat snake",
        description:
          "a back-fanged terrestrial snake  of southern Europe and Syria",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/34/cf/7d/34cf7df60e84a303c137d73ef7adfa34.jpg",
      },
    ],
    turtles: [
      {
        id: 20,
        name: "Blanding's turtle",
        description:
          " freshwater turtle of the northeastern U.S. and Canada having a black or dark olive shell with small yellow spots",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/f8/82/26/f88226afdc74a430683522b86dfdd61e.jpg",
      },
    ],
    crocodile: [
      {
        id: 26,
        name: "American crocodile",
        description:
          "a tropical American crocodile whose range extends to Florida",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/3d/46/71/3d467169679406ba33f1658992444804.jpg",
      },
      {
        id: 27,
        name: "Cuban crocodile",
        description:
          " a small crocodile found only in the island of Cuba",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/6f/43/ba/6f43ba0c0faac33066eb63475329dd5f.jpg",
      },
    ],
    alligator: [
      {
        id: 31,
        name: "American alligator",
        description:
          "the alligator of the southeastern U.S. occasionally reaching 16 feet in length with a tough hide much sought for leather",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/76/20/e7/7620e777b92976bbc201f9989de0615b.jpg",
      },
      {
        id: 32,
        name: "Chinese alligator",
        description:
          "a small alligator of the Yangtze valley distinguished from the American alligator by its completely unwebbed fingers",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/94/85/d6/9485d63bca183ebd2156bda6aad7f544.jpg",
      },
    ],
    lizard: [
      {
        id: 33,
        name: "anole",
        description:
          "arboreal American lizards that have a brightly colored dewlap and the ability to change color",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/8c/c2/e0/8cc2e072f02fbb9d12f9e9243a559a5c.jpg",
      },
    ],
  },
  Amphibians: {
    toad: [
      {
        id: 1,
        name: "arroyo toad",
        description:
          "a stocky, blunt-nosed toad  that has a dark-spotted, olive-green to light brown back, a white or buff belly, and a light-colored, V-shaped stripe across the head and eyelids and that occurs in and around streams from southwestern California to northwestern Baja California",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/2f/5f/b8/2f5fb8706a9558c8a4269a73596c555e.jpg",
      },
      {
        id: 2,
        name: "bell toad",
        description:
          "a small drab upland toad of the northwestern U.S.",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/85/ed/2a/85ed2a8d46a25abe750ff6bc52323e38.jpg",
      },
    ],
    frog: [
      {
        id: 1,
        name: "cricket frog",
        description:
          "a small American tree frog",
        link: "Merriam-Webster",
        image:
          "https://i.pinimg.com/564x/27/7e/48/277e481b9b75627788bc4dc1eb75cd58.jpg",
      },
    ],
  },
}

export { ANIMALS, Mammals, animalsData }
