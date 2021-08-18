import React, { Component } from "react";
import "./three.d.page.large.css";
import GamePagesHomeButton from "../../../Components/Games/HomeButton/games.page.large.home.button";
import { Carousel } from "react-bootstrap";
import byHouse from '../../3dPrintingImages/babayagahouse.jpg'
import hulkFront from '../../3dPrintingImages/hulkFront2.jpg'
import setPiece from "../../3dPrintingImages/setpiece.jpg"
import setPieceTwo from "../../3dPrintingImages/setpiece2.jpg"
import groupItems from '../../3dPrintingImages/groupitems.jpg'

class ThreeDPrintingPageLarge extends Component {
  render() {
    return (
      <div id="threeDPrintingPageLarge">
        <GamePagesHomeButton />
        <h1 id="threeDPrintingTitle">3D Printing!!!</h1>
        <div id="printingContent">
          <Carousel id="printingCarousel">
            <Carousel.Item>
                 <img id = "babaYagaHouse" alt = "baba yaga house" src = {byHouse}/>
               
            </Carousel.Item>
            <Carousel.Item>
                 <img id = "hulkFront" alt = "hulk front" src = {hulkFront} />
               
            </Carousel.Item>
            <Carousel.Item>
                 <img id = "setPiece" alt = "set piece" src = {setPiece} />
               
            </Carousel.Item>
            <Carousel.Item>
                 <img id = "setPieceTwo" alt = "set piece two" src = {setPieceTwo} />
               
            </Carousel.Item>
            <Carousel.Item>
                 <img id = "groupItems" alt = "group items" src = {groupItems} />
               
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default ThreeDPrintingPageLarge;
