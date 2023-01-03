const Categories = [  // Array of Categories  
    {title: 'Garderning', // title is the Name of the Cat
     topics: [{ // topics is the Topics classified under the Cat. Each Topic has its name, and its description 
        name: 'Fruits', desc: 'From the tallest apple tree to the smallest strawberry plant - swap advice on growing fruit in your garden.'}, {
        name :'Vegetables', desc: 'This is Vegetables'}, {
        name: 'Indoor Plants', desc: 'This is Indoor Plants'}
    ]}, 

    {title: 'Decoration', 
     topics: [{
        name: 'Landscaping', desc: 'This is Landscap'}, {
        name: 'Household Decoration', desc: 'This is HD'}, {
        name: 'Flowers', desc: 'This is Flowers'}
    ]}, 
    
    {title: 'Meta', 
     topics:[{
        name: 'Announcements', desc: 'This is Announcments'}, {
        name: 'Suggestions and Feedback', desc: 'This is Suggestions'}
    ]}
  ];


export default Categories;