
import './App.css';
import ToolBar from './header/Toolbar.js'
import TextBlock from './components/TextBlock.js'
import Bottombar from './header/Bottombar';
import PhoneImage from './components/PhoneImage';
import Skills from './header/Skills';
import React, { useState, useEffect } from 'react';

function Page({lang}) {
  const iFolder = process.env.PUBLIC_URL;

  return (
    <>

      <div class="page animation1 ">

            <div className="content">
              <div className="images-container">
                  <img className="app-image" src={iFolder+"/topic6/arp.png"} alt=''></img>
                  <img className="app-image app-pos1" src={iFolder+"/topic6/arp2.png"} alt=''></img>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic6Title} text={lang.topic6Text} list={lang.topic6List} link={"https://github.com/tagir215/AfricanRockPythonServer"} link2={"https://github.com/tagir215/african-rock-python-client"} link3={"https://arp-client-c1df0d4c8a26.herokuapp.com"}/>
            </div>


            <div className="content">
              <div className="phone-image-container ">
                <PhoneImage video={iFolder + '/topic1/starchat0000.mp4'} position="position1"/>
                <PhoneImage path={iFolder + '/topic1/starchat1.jpg'} position="position2"/>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic1Title} text={lang.topic1Text} list={lang.topic1List} link={"https://github.com/tagir215/Star-Chat"}/>
              
            </div>



            <div className="content">
              <div className="images-container">
                  <img className="app-image" src={iFolder+"/topic5/csamma1.png"} alt=''></img>
                  <img className="app-image app-pos1" src={iFolder+"/topic5/csamma2.png"} alt=''></img>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic5Title} text={lang.topic5Text} list={lang.topic5List} link2={"https://github.com/tagir215/CosineSearchAutomaticMindMapApplicationClient"} link={"https://github.com/tagir215/CosineSearchAutomaticMindMapApplicationServer"}/>
            </div>

            <div className="content">
              <div className="phone-image-container ">
                <PhoneImage video={iFolder + '/topic2/rhythm0000.mp4'} position="position1"/>
                <PhoneImage path={iFolder + '/topic2/picmetr5.jpg'} position="position2"/>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic2Title} text={lang.topic2Text} list={lang.topic2List} link={"https://github.com/tagir215/VisualMetronome"}/>
            </div>  
 
            <div className="content">
              <div className="phone-image-container ">
                <PhoneImage path={iFolder + '/topic3/mindmap1.jpg'} position="position1"/>
                <PhoneImage video={iFolder + '/topic3/mindmap0000.mp4'} position="position2"/>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic3Title} text={lang.topic3Text} list={lang.topic3List} link={"https://github.com/tagir215/YourMindMap"}/>
              
            </div>



            <div className="content">
            <div className="phone-image-container ">
                <PhoneImage path={iFolder + '/topic4/newgolf2.png'} position="position1"/>
                <PhoneImage video={iFolder + '/topic4/golf0000.mp4'} position="position2"/>
              </div>
              <TextBlock lang={lang} theme="topic" title={lang.topic4Title} text={lang.topic4Text} list={lang.topic4List} link={"https://github.com/tagir215/GPSGolf"}/>
            </div>


            <Bottombar lang={lang}/> 
    </div>
    </> 
  )
}

export default Page;
