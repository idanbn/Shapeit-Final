
import { images } from './constants';

export const Userdb = [

    {
        u_id: 1,
        desplayName: 'Faruch Ismailov',
        email: 'test@test.com',
        password: 'nlhuogidgayiugiudhcjixjcix',
        imageUrl: images.avatar_3,
        active_BMR: '3000',
        calorie: 1980,
        nutritionalValues: { protein: 120, fat: 78, carbs: 200, sugar: 178 },
        meals: { name: 'צריך לחשוב על זה ' }

    },

    {
        u_id: 2,
        desplayName: 'idan ben bahom',
        email: 'test1@test.com',
        password: 'nlhuogidgayiugiudhcjixjcix',
        imageUrl: images.avatar_1,
        active_BMR: '2800',
        calorie: 2302,
        nutritionalValues: { protein: 80, fat: 60, carbs: 500, sugar: 178 },

    },


];


export const LocalCategorysdb = [
    { name: 'Noodles', image: { uri: 'https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-1.jpg' } },
    { name: 'Rice', image: { uri: 'https://www.openaccessgovernment.org/wp-content/uploads/2021/03/dreamstime_xxl_77942944-scaled.jpg' } },
    { name: 'Chicken', image: { uri: 'https://assets.bonappetit.com/photos/5f809c81ba63e7584fca0576/5:4/w_1405,h_1124,c_limit/Double-Garlic-Roast-Chicken-With-Onion-Gravy.jpg' } },
    { name: 'Salads', image: { uri: 'https://static.onecms.io/wp-content/uploads/sites/44/2021/02/04/watercress-salad-honey-Balsamic-tofu-2000.jpg' } },
    { name: 'Pasta', image: { uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Pasta-alla-vodka-f1d2e1c.jpg' } },
    { name: 'Sausages', image: { uri: 'https://www.keziefoods.co.uk/wp-content/uploads/2021/01/Ostrich-Sausages-270g-6-in-a-pack.jpg' } },
    { name: 'Soups', image: { uri: 'https://www.eatwell101.com/wp-content/uploads/2020/02/chicken-soup-recipe-3.jpg' } },
    { name: 'Burgers', image: { uri: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg' } },
    { name: 'Beef', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnp4vjQp7QCQe09XkOXlO6mMI4gbJuGwyexQ&usqp=CAU' } },
    { name: 'Vegetarian', image: { uri: 'https://www.beefmagazine.com/sites/beefmagazine.com/files/rocky-mountain-grilled-t-b%20copy_7.png' } },
    { name: 'Sides', image: { uri: 'https://www.yoranchsteakhouse.com/wp-content/uploads/2018/03/steakhouse-sides-900x600.jpg' } },
    { name: 'Breakfast', image: { uri: 'https://simply-delicious-food.com/wp-content/uploads/2018/10/breakfast-board.jpg' } },
    { name: 'Dinner', image: { uri: 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/09/basil-tofu-steak-dinner-close-up-1024x1536.jpg' } },
    { name: 'Lunch', image: { uri: 'https://img.taste.com.au/pfrPC_fT/taste/2020/01/feb20_green-goodness-chicken-sandwich-taste-157311-1.jpg' } },
    { name: 'Pizza', image: { uri: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F06%2F15%2Fmozzarella-pizza-margherita-FT-RECIPE0621.jpg' } },
];

export const LocalCategorydb = [

    {
        c_id: 1,
        text: 'meat',
        imageUrl: images.baked_fries,
        categoryMeals: [
            {
                m_id: 1,
                m_name: 'Spicy Ramen with Mixing Sea Food',
                calorie: 380,
                cookingTime: '20',
                imageUrl: images.kolo_mee,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 2,
                m_name: 'Hamburger with friesd',
                calorie: 760,
                cookingTime: '25',
                imageUrl: images.burger_restaurant_1,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 3,
                m_name: 'Chicken breast with rice',
                calorie: 190,
                cookingTime: '35',
                imageUrl: images.ice_kacang,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 4,
                m_name: 'Ceaser salad',
                calorie: 100,
                cookingTime: '7',
                imageUrl: images.nasi_lemak,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
        ]
    },
    {
        c_id: 2,
        text: 'fish',
        imageUrl: images.chicago_hot_dog,
        categoryMeals: [
            {
                m_id: 1,
                m_name: 'Spicy Ramen with Mixing Sea Food',
                calorie: 223,
                cookingTime: '20',
                imageUrl: images.nasi_briyani_mutton,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 2,
                m_name: 'Ceaser salad',
                calorie: 100,
                cookingTime: '7',
                imageUrl: images.nasi_lemak,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 3,
                m_name: 'Chicken breast with rice',
                calorie: 190,
                cookingTime: '35',
                imageUrl: images.ice_kacang,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 4,
                m_name: 'Hamburger with friesd',
                calorie: 760,
                cookingTime: '25',
                imageUrl: images.burger_restaurant_1,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
        ]
    },
    {
        c_id: 3,
        text: 'pasta',
        imageUrl: { uri: 'https://spoonacular.com/recipeImages/654928-312x231.jpg' },
        categoryMeals: [
            {
                m_id: 1,
                m_name: 'Pasta With Tuna',
                calorie: 223,
                cookingTime: '20',
                imageUrl: { uri: 'https://spoonacular.com/recipeImages/654959-312x231.jpg' },
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 2,
                m_name: 'Pasta Margherita',
                calorie: 760,
                cookingTime: '25',
                imageUrl: { uri: 'https://spoonacular.com/recipeImages/511728-312x231.jpg' },
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 3,
                m_name: 'Pasta and Seafood',
                calorie: 190,
                cookingTime: '35',
                imageUrl: { uri: 'https://spoonacular.com/recipeImages/654812-312x231.jpg' },
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 4,
                m_name: 'Pasta On The Border',
                calorie: 100,
                cookingTime: '7',
                imageUrl: { uri: 'https://spoonacular.com/recipeImages/654857-312x231.jpg' },
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
        ]
    },
    {
        c_id: 4,
        text: 'salat',
        imageUrl: images.japanese_restaurant,
        categoryMeals: [
            {
                m_id: 1,
                m_name: 'Spicy Ramen with Mixing Sea Food',
                calorie: 223,
                cookingTime: '20',
                imageUrl: images.sushi,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 2,
                m_name: 'Hamburger with friesd',
                calorie: 760,
                cookingTime: '25',
                imageUrl: images.burger_restaurant_1,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 3,
                m_name: 'Chicken breast with rice',
                calorie: 190,
                cookingTime: '35',
                imageUrl: images.ice_kacang,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 4,
                m_name: 'Ceaser salad',
                calorie: 100,
                cookingTime: '7',
                imageUrl: images.nasi_lemak,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
        ]
    },
    {
        c_id: 5,
        text: 'jankfood',
        imageUrl: images.kolo_mee,
        categoryMeals: [
            {
                m_id: 1,
                m_name: 'Spicy Ramen with Mixing Sea Food',
                calorie: 223,
                cookingTime: '20',
                imageUrl: images.kolo_mee,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 2,
                m_name: 'Hamburger with friesd',
                calorie: 760,
                cookingTime: '25',
                imageUrl: images.burger_restaurant_1,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 3,
                m_name: 'Chicken breast with rice',
                calorie: 190,
                cookingTime: '35',
                imageUrl: images.ice_kacang,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 4,
                m_name: 'Ceaser salad',
                calorie: 100,
                cookingTime: '7',
                imageUrl: images.nasi_lemak,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
        ]
    },
    {
        c_id: 6,
        text: 'test',
        imageUrl: images.noodle_shop,
        categoryMeals: [
            {
                m_id: 1,
                m_name: 'Spicy Ramen with Mixing Sea Food',
                calorie: 223,
                cookingTime: '20',
                imageUrl: images.kolo_mee,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 2,
                m_name: 'Hamburger with friesd',
                calorie: 760,
                cookingTime: '25',
                imageUrl: images.burger_restaurant_1,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 3,
                m_name: 'Chicken breast with rice',
                calorie: 190,
                cookingTime: '35',
                imageUrl: images.ice_kacang,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
            {
                m_id: 4,
                m_name: 'Ceaser salad',
                calorie: 100,
                cookingTime: '7',
                imageUrl: images.nasi_lemak,
                NutritionalValues: [
                    {
                        protein: 22,
                        carbs: 150,
                        fat: 12,
                        colsterol: 38,
                    }
                ],
                ingredients: [
                    {
                        ing1: { name: 'avokado', count: 2 },
                        ing2: { name: 'salamon', count: 6 },
                        ing3: { name: 'tometo', count: 4 },

                    }
                ],
            },
        ]
    },

];

export const LocalMealsdb = [

    {
        id: 653251,
        image: "https://spoonacular.com/recipeImages/653251-312x231.jpg",
        imageType: "jpg",
        title: "Noodles and Veggies With Peanut Sauce",
    },
    {
        id: 658270,
        image: "https://spoonacular.com/recipeImages/658270-312x231.jpg",
        imageType: "jpg",
        title: "Rice Noodles With Wonton/chinese Ravioli In Mushroom Sauce",
    },
    {
        id: 632854,
        image: "https://spoonacular.com/recipeImages/632854-312x231.jpg",
        imageType: "jpg",
        title: "Asian Noodles",
    },
    {
        id: 641221,
        image: "https://spoonacular.com/recipeImages/641221-312x231.jpg",
        imageType: "jpg",
        title: "Dan Dan Noodles",
    },
    {
        id: 641671,
        image: "https://spoonacular.com/recipeImages/641671-312x231.jpg",
        imageType: "jpg",
        title: "Drunken Noodles (Pad Kee Mao)",
    },

];

