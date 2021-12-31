import { identifier } from '@babel/types';
import React from 'react'

const Welcome = () => {

  const dataItems = [{
    title: "KingStone",
    content: [{
        title: "Campaigns",
        description: "Short description explaining the use of this design in a single sentence."
      },
      {
        title: "Events",
        description: "Short description explaining the use of this design in a single sentence."
      },
      {
        title: "General",
        description: "Short description explaining the use of this design in a single sentence."
        
      }
    ]
  },
  {
    title: "Buston",
    content: [{
      
        title: "Video Template A",
        description: "Short description explaining the use of this design in a single sentence."
      },
      {
        title: "Video Template B",
        description: "Long description explaining the use of this design in a single sentence."
      }
    ]
  }
];

let bag = [
  {
    pen: [
      {
      describe: 'level 1',
      nam: 'arzon',
      level: 1
    },
    {
      describe: 'level 2',
      nam: 'qimat',
      level: 4
    }
  ],
    pencil: [
      {
      describe: 'level 2',
      nam: 'qalam',
      level: 2
      
    },
    {
      describe: 'Hinduston 2',
      nam: 'Uc',
      level: 21
    }
  ],
  }
]

  let pros = bag.map((item) =>

  <li>{item.pen.map(({describe, nam, level}) =>
    <div>
      <li>{describe}</li>
      <li>{nam}</li>
      <li>{level}</li>
    </div>
    )}</li>


  )



let arr = [
  {
    id: 1,
    title: 'Top cities',
    city: [{
      id: 1000,
      nam: 'Kingston',
      dol: 'some stupid text',
    }
  ]
  }
]


  let sm = arr.map((item, idx) => 
  <div>
    <li key={idx}>{item.id}</li>
    <li>{item.title}</li>
    <div>
     {item.city.map((item, idx) => 
      <div>
        <li>{item.nam}</li>
        <li>{item.dol}</li>      
      </div> )}
    </div>
  </div>
  )

  return (
    <div>
      <h1>Welcome, You can see the products. </h1>
      <div>
        {pros}
      </div>

    </div>
  )
}

export default Welcome
