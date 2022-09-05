export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  value: 'slug',
  fields: [
    {
      name: 'caseTitleOne',
      title: 'Case Title One',
      type: 'string',
    },
    {
      name: 'caseTitleTwo',
      title: 'Case Title Two',
      type: 'string',
    },
    {
      name: 'caseNum',
      title: 'Case Number',
      type: 'string'
      },
    {
      name: 'caseTitleFull',
      title: 'Case Title Full',
      type: 'string',
    },
    {
      name: 'caseDescription',
      title: 'Case Description',
      type: 'string',
    },
    
    {
      name: 'caseBio',
      title: 'Case Bio',
      type: 'string',
    },
    {
    name: 'caseCategory',
    title: 'Case Category',
    type: 'string'
    },
    {
    name: 'caseYear',
    title: 'Case Year',
    type: 'string'
    },
    {
    name: 'caseClient',
    title: 'Case Client',
    type: 'string'
    },
    {
    name: 'caseAbout',
    title: 'Case About',
    type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      value: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
   
   
    
    
   
  ],


}
