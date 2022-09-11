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
      name: 'launchText',
      title: 'Launch Text',
      type: 'string'
    },
    {
      name: 'launchLink',
      title: 'Launch Link',
      type: 'string'
    },
    {
      name: 'projectInfo',
      title: 'Project Info',
      type: 'string'
    },
    {
      name: 'caseHeaderOne',
      title: 'Case Header One',
      type: 'string'
    },
    {
      name: 'caseParagraphOne',
      title: 'Case Paragraph One',
      type: 'string'
    },
    {
      name: 'caseHeaderTwo',
      title: 'Case Header Two',
      type: 'string'
    },
    {
      name: 'caseNextProject',
      title: 'Case Next Project',
      type: 'slug'
    },
    {
      name: 'caseParagraphTwo',
      title: 'Case Paragraph Two',
      type: 'string'
    },
    {
			name: "caseImageOne",
			title: "Case Image One",
			type: "image"
		},
    {
			name: "caseImageTwo",
			title: "Case Image Two",
			type: "image"
		},
    {
			name: "caseImageThree",
			title: "Case Image Three",
			type: "image"
		},
    {
			name: "caseImageFour",
			title: "Case Image Four",
			type: "image"
		},
    {
			name: "caseImageOptionalOne",
			title: "Case Image Optional One",
			type: "image"
		},
    {
			name: "caseImageOptionalTwo",
			title: "Case Image Optional Two",
			type: "image"
		},
    {
			name: "caseImageOptionalThree",
			title: "Case Image Optional Three",
			type: "image"
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
