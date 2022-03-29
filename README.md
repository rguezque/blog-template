# Blog template

Created with React + NextJS + GraphQL + Tailwind. Following the tutorial from [Javascript Mastery](https://www.youtube.com/watch?v=HYv55DhgTuA)

## Installation

Clone repository.

```
git clone
```

Locate the directory project open in terminal and run:

 ```
 npm install
 ```

 Finally run:

 ```
 npm run dev
 ```

 Open the web browser in [http://localhost:3000](http://localhost:3000).

## Set up schema in GraphCMS

go to [GraphQL](https://app.graphcms.com/) create an account and create a blank project and the following Models:

- Author
- Category
- Comment
- Post

### Author

Must have the following fields with attributes:

- Name (`String` | `Single line text` | `Required` | `Title`})
- Photo (`Asset`)
- Bio (`String` | `Multi line text`)
**Relation/References**
- Post (`Reference` | `Two-way reference` | `Multiple values`) *allow multiple Posts per Author*

### Category

Must have the following fields with attributes:

- Name (`String` | `Single line text` | `Required` | `Unique` | `Title`)
- Slug (`String` | `Slug` | `Required` | `Unique`)
**Relation/References**
- Post (`Reference` | `Two-way reference` | `Multiple values`) *allow multiple Categories per Posts and allow multiple Posts per Category*

### Comment

Must have the following fields with attributes:

- Name (`String` | `Single line text` | `Required`)
- Email (`String` | `Single line text` | `Required`)
- Comment (`String` | `Multi line text` | `Required`)
**Relation/References**
- Post (`Reference` | `Two way reference`) *allow multiple Comments per Post*

### Post

Must have the following fields with attributes:

- Title (`String` | `Single line text` | `Required` | `Title`)
- Slug (`String` | `Slug` | `Required` | `Unique`)
- Excerpt (`String` | `Multi line text` | `Required`)
- Content (`RichText` | `Rich text` | `Embeds` | `Required`)
- Featured Image (`Asset` | `Required`)
- Featured Post (`Boolean` | `Boolean` | `Required`)
**Relation/References**
- Author (`Reference`, `Two-way reference`) *allow multiple Posts per Author*
- Category (`Reference`, `Two-way reference` | `Multiple values`) *allow multiple Posts per Category and allow multiple Categories per Posts*
- Comment ( `Reference` |`Two-way reference` | `Multiple values`) *allow multiple Comments per Post*

## Make API accesible

In **Settings** go to **API Access** and enable *Public Content API*

In the `.env` file define a variable with name `NEXT_PUBLIC_GRAPHCMS_ENDPOINT` and assign the value generated before.

## Create a Permanent Auth Token
Go to **Settings** -> **Permanent Auth Tokens** and create one with name *"dev"*.

Create permission and grant all.

In the `.env` file define a variable with name `GRAPHCMS_TOKEN` and assign the value generated before, wrap into simple quotes.

## Deploy

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).