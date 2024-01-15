import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src='images/snake.png'
              text='This was my first ever project! I applied above and beyond basics I learned in class and developed a real time interative game that escaped the traditional output terminal.' 
              label='Snake (Java)' />
            <CardItem src='images/angular.png' 
              text='This is my most intensive project yet! Although I was following a basic webpage creation tutorial provided by Angular, this was a big leap from the programming basics I was used to. I had to learn literally everything from scratch but it was a rewarding process none the less.' 
              label='Webpage tutorial (Angular, TypeScript, HTML, CSS)' />
          </ul>
          <ul className='cards__items'>
            <CardItem src='images/sorcery.webp' 
              text='This was my first group project! I collaborated with two other students on Github following the software development lifecycle. This was also my first project where memory had to be carefully considered.' 
              label='Sorcery (C++)' />
            <CardItem src='images/profilepage.png' autoPlay loop muted
              text="This is my most recent project (you're on this page right now!) applying my learnings from the Angular webpage tutorial. I would say this is my most aesthetically pleasing project yet!" 
              label='Profile Page (React, JavaScript, HTML, CSS)' />
            {/* <CardItem src='images/img-8.jpg' 
              text='This is a new project that I am currently working on with a friend in C# using the Unity interface. ' 
              label='2D Role Playing Game (in progress)' /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;