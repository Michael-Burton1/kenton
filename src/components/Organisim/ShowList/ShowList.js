import React from 'react';
import Show from '../../Molecules/Show/Show';

const MainShowList= [
  {
    name :'Lady Gaga',
    date :'10/12/22',
    support:'David',
    photo: 'some Band Photo',
    time: '7:00',
    price: '$10'
  },
  {
    name :'Antonio Carlos Jambim',
    date :'10/13/22',
    support:'Budos Band',
    photo: 'some Band Photo',
    time: '7:00',
    price: '$10'
  }
]

const ShowList = () => {
  return (
    <div>
      <hr/>
      {MainShowList.map((show,index) =>
        <Show 
          name = {show.name}
          date = {show.date}
          support= {show.support}
          photo= {show.photo}
          time= {show.time}
          price= {show.price}
          key={index}
        />
      )}
    </div>
  );
}

export default ShowList;
