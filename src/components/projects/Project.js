import React from "react"

import ModalInsta from '../modal/ModalIntsa'
import ModalManage from '../modal/ModalManage'
import ModalBrew from '../modal/ModalBrew'
import ModalRecipes from '../modal/ModalRecipes'
import ModalBook from '../modal/ModalBook'
import ManageLite from './ManageLite'
import InstaRecipes from "./InstaRecipes"
import BrewProject from "./BrewProject"
import Recipes from "./Recipes"
import BookRaiders from "./BookRaiders"



const Project = () => {
   

   return (
      <section id="section-project" className="section-project">
         <div className="center-text-margin">
            <h2 className="heading-secondary">
               Projects
               <div className="underline"></div>
            </h2>
         </div>

         <div className="row">
            <InstaRecipes />
            <ManageLite />
            <BrewProject />
            
         </div>
         <div className="row">
            <Recipes />
            <BookRaiders />
         </div>
         <ModalInsta />
         <ModalManage />
         <ModalBook />
         <ModalBrew />
         <ModalRecipes />
      </section>
   )
}

export default Project;