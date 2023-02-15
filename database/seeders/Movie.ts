import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Movie from 'App/Models/Movie'

export default class extends BaseSeeder {
  public async run() {
    await Movie.updateOrCreateMany(
      [],
      [
        {
          directorName: 'J.J. Abrams',
          title: 'Star Trek',
          description:
            'Aboard the USS Enterprise, the most-sophisticated starship ever built, a novice crew embarks on its maiden voyage. Their path takes them on a collision course with Nero (Eric Bana), a Romulan commander whose mission of vengeance threatens all mankind. If humanity would survive, a rebellious young officer directorNamed James T. Kirk (Chris Pine) and a coolly logical Vulcan directorNamed Spock (Zachary Quinto) must move beyond their rivalry and find a way to defeat Nero before it is too late.',
          image: 'https://i.pinimg.com/originals/82/8b/b3/828bb3783453b22bb9f8ff59a77658da.jpg',
          featured: false,
          release: '2009',
        },
        {
          directorName: 'Joss Whedon',

          title: 'The Avengers',
          description:
            "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's dream team are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).",
          image: 'https://i.pinimg.com/originals/0f/03/e6/0f03e6733b0cf567cc92e8e20290462f.jpg',
          featured: true,
          release: '2012',
        },
        {
          directorName: 'Matthew Vaughn',

          title: 'Stardust',
          description:
            "To win the heart of his beloved (Sienna Miller), a young man directorNamed Tristan (Charlie Cox) ventures into the realm of fairies to retrieve a fallen star. What Tristan finds, however, is not a chunk of space rock, but a woman (Claire Danes) directorNamed Yvaine. Yvaine is in great danger, for the king's sons need her powers to secure the throne, and an evil witch (Michelle Pfeiffer) wants to use her to achieve eternal youth and beauty.",
          image: 'https://images-na.ssl-images-amazon.com/images/I/5100B4U4ylL._AC_.jpg',
          featured: true,
          release: '2007',
        },
        {
          directorName: 'Matthew Vaughn',

          title: 'X-Men: First Class',
          description:
            'In the early 1960s, during the height of the Cold War, a mutant directorNamed Charles Xavier (James McAvoy) meets a fellow mutant directorNamed Erik Lehnsherr (Michael Fassbender). Despite their vastly different backgrounds -- Charles grew up with a wealthy family, while Erik lost his parents at Auschwitz -- the two become close friends. As the world teeters on the brink of a nuclear war, Charles and Erik with other mutants join forces to save humanity. However, a situation soon tears the friends apart.',
          image: 'https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
          featured: false,
          release: '2011',
        },
        {
          directorName: 'Jon Watts',

          title: 'Spider-Man: Homecoming',
          description:
            'Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.',
          image:
            'https://media.vanityfair.com/photos/592592596736887ada186bcd/master/w_1600%2Cc_limit/spider-man-homecoming-SMH_DOM_Online_FNL_1SHT_3DRD3DIMX_AOJ_300dpi_01_rgb.jpg',
          featured: false,
          release: '2017',
        },
        {
          directorName: 'Alfonso Cuarón',

          title: 'Harry Potter and the Prisoner of Azkaban',
          description:
            "Harry Potter's (Daniel Radcliffe) third year at Hogwarts starts off badly when he learns deranged killer Sirius Black (Gary Oldman) has escaped from Azkaban prison and is bent on murdering the teenage wizard. While Hermione's (Emma Watson) cat torments Ron's (Rupert Grint) sickly rat, causing a rift among the trio, a swarm of nasty Dementors is sent to protect the school from Black. A mysterious new teacher helps Harry learn to defend himself, but what is his secret tie to Sirius Black?",
          image:
            'https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg/revision/latest?cb=20130803163319',
          featured: false,
          release: '2004',
        },
        {
          directorName: 'Peter Jackson',

          title: 'The Lord of the Rings: Return of the King',
          description:
            "The culmination of nearly 10 years of work and conclusion to Peter Jackson's epic trilogy, The Lord of the Rings: The Return of the King presents the final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Hobbits Frodo and Sam reach Mordor in their quest to destroy the one ring, while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith.",
          image: 'http://www.limitedruns.com/media/cache/7e/6b/7e6b6743a7e45d096838abd67b2464e2.jpg',
          featured: false,
          release: '2003',
        },
        {
          directorName: 'James Gunn',

          title: 'Guardians of the Galaxy',
          description:
            "Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.",
          image: 'https://images-na.ssl-images-amazon.com/images/I/71kvH7JJFlL._AC_SY679_.jpg',
          featured: false,
          release: '2014',
        },
        {
          directorName: 'Jon Favreau',

          title: 'Iron Man',
          description:
            'A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.',
          image: 'https://www.themoviedb.org/t/p/original/aGsjgTNMSF0kswDx57YCVPqCivW.jpg',
          featured: false,
          release: '2008',
        },
        {
          directorName: 'Steven Spielberg',
          title: 'Jurassic Park',
          description:
            "Paleontologists Alan Grant (Sam Neill) and Ellie Sattler (Laura Dern) and mathematician Ian Malcolm (Jeff Goldblum) are among a select group chosen to tour an island theme park populated by dinosaurs created from prehistoric DNA. While the park's mastermind, billionaire John Hammond (Richard Attenborough), assures everyone that the facility is safe, they find out otherwise when various ferocious predators break free and go on the hunt.",
          image: 'https://image.posterlounge.com/images/l/1894261.jpg',
          featured: false,
          release: '1993',
        },
      ]
    )
  }
}
