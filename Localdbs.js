
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
        imageUrl: images.hawaiian_pizza,
        categoryMeals: [
            {
                m_id: 1,
                m_name: 'Spicy Ramen with Mixing Sea Food',
                calorie: 223,
                cookingTime: '20',
                imageUrl: images.sarawak_laksa,
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
        m_id: 1,
        m_name: 'Spicy Ramen with Mixing Sea Food',
        calorie: '223',
        cookingTime: '20',
        imageUrl: images.kolo_mee,
    },
    {
        m_id: 2,
        m_name: 'Hamburger with friesd',
        calorie: '760',
        cookingTime: '25',
        imageUrl: images.burger_restaurant_1,
    },
    {
        m_id: 3,
        m_name: 'Chicken breast with rice',
        calorie: '190',
        cookingTime: '35',
        imageUrl: images.ice_kacang,
    },
    {
        m_id: 4,
        m_name: 'Ceaser salad',
        calorie: '100',
        cookingTime: '7',
        imageUrl: images.nasi_lemak,
    },

];

