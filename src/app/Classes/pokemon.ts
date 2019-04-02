export class Pokemon {
    "id": Number;
    "name": String;
    "height": Number;
    "weight": Number;
    "color": String;
    "sprite": String;
    "hp": Number;
    "attack": Number;
    "defense": Number;
    "speed": Number;
    "types": String[];
    "type": String[];

    constructor(){
        this.id = 0;
        this.name = "";
        this.height = 0;
        this.weight = 0;
        this.color = "";
        this.sprite = "";
        this.hp = 0;
        this.attack = 0;
        this.defense = 0;
        this.speed = 0;
        this.types = [];
        this.type = [];
    }
}
