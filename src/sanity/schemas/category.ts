import { defineField, defineType } from "sanity";

export const category = defineType ({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields:[
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
    ]
})