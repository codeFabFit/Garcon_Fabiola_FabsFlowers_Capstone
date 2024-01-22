// this is the data of the flowers

// start with making consta data as an options and products as array
// image dimentions are 679x829
import bcrypt from 'bcryptjs';


const data = {
    users: [ 
        {
        name: "Fabiola",
        email: "admin@fabsflowers.com",
        password: bcrypt.hashSync('123456'),
        isAdmin: true,
    },
    {
        name: "Craig",
        email: "craig@example.com",
        password: bcrypt.hashSync('123456'),
        isAdmin: false,
    },

    ],
    products: [
        // each product is an object
        {
            // _id: "1",
            name: 'Always on my Mind Bouquet',
            slug: 'always-on-my-mind-bouquet',
            category: 'just because',
            image: "https://assets.eflorist.com/assets/products/PZM_/T64-1A.jpg?impolicy=hero&impolicy=hero",
            price: 80,
            countInStock: 10,
            numReviews: 5,
            description: "A dozen gorgeous red roses are the perfect romantic gift to send to the one who's always on your mind and in your heart. Say <code>I love you</code> by sending this lovely arrangement of twelve radiant red roses and fresh greens delivered in a beautiful spring garden vase. Love always"
        },
        {
            // _id: "2",
            name: 'Victorian Romance',
            slug: 'victorian-romance',
            category: 'happy celebration',
            image: "https://assets.eflorist.com/assets/products/PZM_/TEV19-1A.jpg?impolicy=hero&impolicy=hero",
            price: 77,
            countInStock: 10,
            numReviews: 3,
            description: "Romance blossoms beautifully within this elegant bouquet. The serenity and innocence of cream-colored roses is in delightful juxtaposition with lavender waxflower and fresh ivy greens. It's as romantic as a stroll through the English countryside. A dozen crème roses, lavender waxflower and ivy are perfectly arranged in a serenity glass vase."
        },
        {
            // _id: "3",
            name: 'Making Me Blush Bouquet',
            slug: 'making-me-blush-bouquet',
            category: 'happy celebration',
            image: "https://assets.eflorist.com/assets/products/PZM_/T4-1A.jpg?impolicy=hero&impolicy=hero",
            price: 150,
            countInStock: 10,
            numReviews: 8,
            description: "It's fun to be flirty! Send a dozen roses to the one you love and she just might make you blush. Especially if the dozen roses in question are this gorgeous! This arrangement is sweet and innocent as can be. Of course, it's a bit sassy and a whole lot sexy, as well. Sending a dozen perfectly pink roses and white limonium arranged in a glass vase to the woman you love shows that you know how much fun love is! And every woman appreciates that!"
        },
        {
            // _id: "4",
            name: 'Bejeweled Beauty',
            slug: 'bejeweled-beauty',
            category: 'get well',
            image: "https://assets.eflorist.com/assets/products/PZM_/T209-3A.jpg?impolicy=hero&impolicy=hero",
            price: 70,
            countInStock: 10,
            numReviews: 2,
            description: "The serenity of the color blue along with the purity of intention symbolized by white will let the family know you are sending your calm strength to them during these difficult times. Blooms such as crème roses, graceful white oriental lilies, white alstroemeria, a white disbud mum, purple statice and lavender limonium are accented by seeded eucalyptus and salal in a stunning cobalt blue glass vase"
        },
        {
            // _id: "5",
            name: 'Vision of Love',
            slug: 'vision-of-love',
            category: 'happy celebration',
            image: "https://assets.eflorist.com/assets/products/PZM_/TLR03-1A.jpg?impolicy=hero&impolicy=hero",
            price: 50,
            countInStock: 10,
            numReviews: 4,
            description: "Turn up the heat on your relationship with this sizzling bouquet of carnations and roses in a sparkling glass vase. It makes a spectacular gift for anniversary or any loving occasion. A mix of carnations and roses in shades of red and light pink. Delivered in a glass vase accented with pink satin ribbon."
        
        },
        {
            // _id: "6",
            name: 'Daisies and Sunbeams',
            slug: 'daisies-and-sunbeams',
            category: 'get well',
            image: "https://assets.eflorist.com/assets/products/PZM_/TEV10-1A.jpg?impolicy=hero&impolicy=hero",
            price: 65,
            countInStock: 10,
            numReviews: 3,
            description: "Whatever the weather, this sunny bouquet of yellow, peach and white flowers will brighten any day instantly. Perfect for a birthday, thank you or just because. This sunny bouquet includes peach roses, yellow spray roses, yellow asiatic lilies, white daisy spray chrysanthemums and solidago accented with assorted greenery. Delivered in a glass gathering vase."
        
        },

    ]
}
// export data so it will show were you call it
export default data 