export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {value: 'personal', title: 'Personal'},
          {value: 'client', title: 'Client'},
          {value: 'comany', title: 'Company'},
        ]
      }
    },
    {
      name: 'start_at',
      title: 'Start At',
      type: 'datetime'
    },
    {
      name: 'end_at',
      title: 'End At',
      type: 'datetime'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        //Locks menu from creating new tags (defaults to false)
        frozen: true,
        //Preset of tags (defaults to empty)
        preload: [{label: "Oranges", value: "oranges"}, {label: "Apples", value: "apples"}],
        //Closes menu after tag selected (defaults to true)
        closeMenuOnSelect: true,
        layout: 'tags'
      }
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],
}
