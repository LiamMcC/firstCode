class House {

constructor (name, residence, houseType, parking, rent, purchaseCost, town, county) {

this.name = name
this.residence = residence
this.houseType = houseType
this.parking = parking
this.rent = rent
this.purchaseCost = purchaseCost
this.town = town
this.county = county
}


placeDetails() {


 return this.name + " is a lovely estate in " + this.county


}


placeTypeDetails() {


    return this.name + " is located in " + this.town + " " + this.county + " which has " + this.parking + " parking per house "
   
   
   }


   rentDetails() {
    

    return "This estate with " + this.residence + " residence has " + this.houseType + " style houses which you can rent for €" + this.rent + " per month or purchase for an average of €" + this.purchaseCost
   
   
   }

   allDetails() {
    

    return this.name + " located in " + this.town + " " + this.county + " which has " + this.parking + " parking per house. The estate has " + this.residence + " and is comprised of " + this.houseType + " style houses which you can rent for €" + this.rent + " per month or purchase for an average of €" + this.purchaseCost
   
   
   }

}

var house = new House("Liams Ville", 216, "Dormer Bungalow", "Two Car", 1250, 575000, "Navan", "Co. Meath")
console.log(house.placeDetails())
console.log(house.placeTypeDetails())
console.log(house.rentDetails())
console.log(house.allDetails())