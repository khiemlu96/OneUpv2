import React from 'react';

const About = () => (
    <div>
      <div className= "aboutTitle"
          style = {{position: 'relative', top: '90px', left:'45%', color: 'white', fontFamily:'AppleGothic', color:'red'}}>
          <h1>About</h1>
      </div>

      <div className="aboutBody"
          style = {{position: 'relative', top: '100px', color: 'white', fontFamily:'AppleGothic', fontSize: '18', paddingLeft:'50px', paddingRight:'50px'}}>
          <p> A balance between passion and progress. </p>
          <p> There is a reason skaters live and breathe skateboarding. Skating isn’t just another added hobby to your life, but becomes your way of life.
            Not everyone understand what it means to finally land that trick after days, weeks, or even months of trying -- but
            to us its everything and more. OneUp embodies the true nature of skating and aims to further skateboarding into the
            future.</p>
          <p> The ultimate dream for any skater is to go pro and build a personal brand & career around it. However, the
            means to do so seem unfeasible. OneUp aims to make this process more efficient and effective by creating a
            space where skaters can surface up democratically, powered by those who know and love skateboarding. <br />
            The next generation of pro skaters are out there waiting to be discovered, and OneUp creates an equal chance for all.</p>
      </div>
    </div>

);

export default About;
