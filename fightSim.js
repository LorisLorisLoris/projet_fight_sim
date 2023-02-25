class Personnage{
    constructor(pseudo, type, sante, attaque){
        this.pseudo         = pseudo;
        this.type           = type;
        this.sante          = sante;
        this.attaque        = attaque;
        this.niveau         = 1;
    }

    get informations(){
        return this.pseudo + " (" + this.type + ") a " + this.sante + " points de vie et est au niveau " + this.niveau + ".";
    }

    evoluer(){    // comme nous sommes dans une classe, pas besoin de "function" devant
        this.niveau ++;
        console.log(this.pseudo + " passe au niveau " + this.niveau + " !");
    }

    verifierSante(){
        if (this.sante <= 0) {
            this.sante = 0; ////////////////////////////////////
            console.log(this.pseudo + " a perdu.");
        }
    }
}


class Magicien extends Personnage{
    constructor(pseudo){
        super(pseudo, "magicien", 170, 90);
    }

    attaquer(personnage){
        personnage.sante -= this.attaque; 
        console.log(this.pseudo + " attaque " + personnage.pseudo + " en lançant un sort (" + this.attaque + " dégats).");
        personnage.verifierSante();
        this.evoluer();
    }

    coupSpecial(personnage){
        personnage.sante -= this.attaque *5; 
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes " + personnage.pseudo + ", (" + (this.attaque * 5) + " dégats).");
        personnage.verifierSante();
        this.evoluer();
    }
}

class Ork extends Personnage{
    constructor(pseudo){
        super(pseudo, "ork", 350, 50);
    }

    attaquer(personnage){
        personnage.sante -= this.attaque; 
        console.log(this.pseudo + " attaque " + personnage.pseudo + " avec son épée (" + this.attaque + " dégats).");
        personnage.verifierSante();
        this.evoluer();
    }

    coupSpecial(personnage){
        personnage.sante -= this.attaque *5; 
        console.log(this.pseudo + " attaque avec son coup spécial haches de guerre " + personnage.pseudo + ", (" + (this.attaque * 5) + " dégats).");
        personnage.verifierSante();
        this.evoluer();
    }
}

//////

var gandalf = new Magicien ("Gandalf");
var zorg    = new Ork ("Zorg");

console.log(zorg.informations);
console.log(gandalf.informations);
gandalf.attaquer(zorg);
console.log(zorg.informations);
gandalf.coupSpecial(zorg);

