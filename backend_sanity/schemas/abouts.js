export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },

        {
        name:'imgUrl2',
        title:'ImgUrl2',
        type: 'image',
        options: {
          hotspot: true,
        },
    },

    {
        name:'imgUrl3',
        title:'ImgUrl3',
        type: 'image',
        options: {
          hotspot: true,
        },
    },

        
    ]
}