## Demo
This is a demo of a "Knowlege Check" component created using React. The component presents the user with a question that they must answer.

To run the demo, simply run `npm i && npm start`

## Component Details
The inputs to the KnowledgeCheck component are:

Prop|Type
-|-
question|Question
correctOption|Option

The Schema is as follows: 
```ts
interface Question {
  prompt: string;
  hint: string;
  correctMessage: string;
  options: Option[];
  content: Content;
}

interface Option {
  text: string;
  value: string;
}

interface Content {
  type: 'youtube' | 'image';
  options: {
    videoId?: string; // required for type 'youtube'
    imageSrc?: string; // required for type 'image'
    playerOptions?: Object; // see YouTube Documentation
  }
}
```
