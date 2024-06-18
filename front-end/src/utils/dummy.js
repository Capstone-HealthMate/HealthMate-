
import cover1 from "./../assets/article/cover01.png";
import cover2 from "./../assets/article/cover02.png";
import cover3 from "./../assets/article/cover03.png";
import cover4 from "./../assets/article/cover04.png";
import cover5 from "./../assets/article/cover05.png";
import cover6 from "./../assets/article/cover06.png";
import cover7 from "./../assets/article/cover07.png";
import cover8 from "./../assets/article/cover08.png";

import avatar from './../assets/discuss/avatar.png'
import icon1 from './../assets/card/icon-01.svg'
import icon2 from './../assets/card/icon-02.svg'
import icon3 from './../assets/card/icon-03.svg'
import icon4 from './../assets/card/icon-04.svg'
import icon5 from './../assets/card/icon-05.svg'
import icon6 from './../assets/card/icon-06.svg'


const data = {
  articles: [
    {
        "id": "1",
        "title": "Mixed Tropical Fruit Salad with Superfood Boosts",
        "content": "A refreshing and nutritious mixed tropical fruit salad packed with superfood boosts, perfect for a healthy start to your day.",
        "image": cover1,
        "time": "30 minutes",
        "category": "Western"
    },
    {
        "id": "2",
        "title": "Big and Juicy Wagyu Beef Cheeseburger",
        "content": "An indulgent and satisfying Wagyu beef cheeseburger, crafted with premium ingredients for an ultimate burger experience.",
        "image": cover2,
        "time": "35 minutes",
        "category": "Asian"
    },
    {
        "id": "3",
        "title": "Healthy Japanese Fried Rice with Asparagus",
        "content": "A flavorful and wholesome Japanese fried rice dish with fresh asparagus, providing a nutritious twist to a classic favorite.",
        "image": cover3,
        "time": "40 minutes",
        "category": "Italian"
    },
    {
        "id": "4",
        "title": "Cauliflower Walnut Vegetarian Taco Meat",
        "content": "A delicious and satisfying vegetarian taco meat made with cauliflower and walnuts, perfect for a meatless taco night.",
        "image": cover4,
        "time": "30 minutes",
        "category": "Western"
    },
    {
        "id": "5",
        "title": "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
        "content": "A vibrant and flavorful rainbow chicken salad drizzled with almond honey mustard dressing, offering a delightful blend of colors and tastes.",
        "image": cover5,
        "time": "45 minutes",
        "category": "Mexican"
    },
    {
        "id": "6",
        "title": "Barbeque Spicy Sandwiches with Chips",
        "content": "Spicy and savory barbeque sandwiches served with crispy chips, a perfect combination for a satisfying meal with a kick.",
        "image": cover6,
        "time": "35 minutes",
        "category": "Indian"
    },
    {
        "id": "7",
        "title": "Firecracker Vegan Lettuce Wraps - Spicy!",
        "content": "Spicy and explosive vegan lettuce wraps filled with flavorful ingredients, providing a burst of taste and excitement in every bite.",
        "image": cover7,
        "time": "30 minutes",
        "category": "Asian"
    },
    {
        "id": "8",
        "title": "Chicken Ramen Soup with Mushroom ",
        "content": "A comforting and aromatic chicken ramen soup garnished with fresh mushrooms, offering warmth and satisfaction in every spoonful.",
        "image": cover8,
        "time": "40 minutes",
        "category": "French"
    }
],

    disscus : [
        {
            id: "disscus-1",
            content: 'OMG 😱 celebrating 🥳 over 4000 followers today! Thank you! Enjoy this augmented reality real time puppet I made. You can try it now went below in the thread.',
            createdAt: "21 Juli 2024",
            upVotesBy: [],
            totalDisscus: 20,
            owner: {
                id: "users-1",
                name: "John Doe",
                email: "john@example.com",
                avatar: avatar
            }
        },
       
        {
            id: "disscus-2",
            content: 'OMG 😱 celebrating 🥳 over 4000 followers today! Thank you! Enjoy this augmented reality real time puppet I made. You can try it now went below in the thread.',
            createdAt: "21 Juli 2024",
            upVotesBy: [],
            totalDisscus: 20,
            owner: {
                id: "users-1",
                name: "John Doe",
                email: "john@example.com",
                avatar: avatar
            }
        },
       
        {
            id: "disscus-3",
            content: 'OMG 😱 celebrating 🥳 over 4000 followers today! Thank you! Enjoy this augmented reality real time puppet I made. You can try it now went below in the thread.',
            createdAt: "21 Juli 2024",
            upVotesBy: [],
            totalDisscus: 20,
            owner: {
                id: "users-1",
                name: "John Doe",
                email: "john@example.com",
                avatar: avatar
            }
        },
       
        {
            id: "disscus-4",
            content: 'OMG 😱 celebrating 🥳 over 4000 followers today! Thank you! Enjoy this augmented reality real time puppet I made. You can try it now went below in the thread.',
            createdAt: "21 Juli 2024",
            upVotesBy: [],
            totalDisscus: 20,
            owner: {
                id: "users-1",
                name: "John Doe",
                email: "john@example.com",
                avatar: avatar
            }
        },
       
        {
            id: "disscus-5",
            content: 'OMG 😱 celebrating 🥳 over 4000 followers today! Thank you! Enjoy this augmented reality real time puppet I made. You can try it now went below in the thread.',
            createdAt: "21 Juli 2024",
            upVotesBy: [],
            totalDisscus: 20,
            owner: {
                id: "users-1",
                name: "John Doe",
                email: "john@example.com",
                avatar: avatar
            }
        },
       
    
    ],
    
    
    comment : [
        {
            id: "disscus-1",
            content: 'Omg this my firts comment',
            createdAt: "21 Juli 2024",
            upVotesBy: [],
            owner: {
                id: "users-1",
                name: "John Doe",
                email: "john@example.com",
                avatar: avatar
            }
        },
    ],

    calculator : [
        {
            asset:icon6,
            title: 'Laki-laki atau Perempuan???',
        },
        {
            asset:icon6,
            title : 'Berat Badan',
            placeholder : '55',
            satuan: 'Kg'
        },
   
        {
            asset:icon5,
            title : 'Tinggi Badan',
            placeholder : '167',
            satuan: 'Cm'
        },
   
        {
            asset:icon4,
            title : 'Umur',
            placeholder : '17',
            satuan: 'Tahun'
        },
        {
            asset:icon3,
            title : 'Aktivitas Fisik',
        },
        {
            asset:icon2,
            title : 'Pangkal Paha',
            placeholder : '50',
            satuan: 'Cm'
        },
        {
            asset:icon2,
            title : 'Lebar Pinggang',
            placeholder : '30',
            satuan: 'Cm'
        },
        {
            asset:icon1,
            title : 'Panjang Leher',
            placeholder : '12',
            satuan: 'Cm'
        },
   
    ]
}
export default data;

