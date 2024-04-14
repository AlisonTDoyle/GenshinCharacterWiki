export interface ICharacter {
    name:string,
    element:string,
    weaponType:string
}

class Character implements ICharacter {
    name:string
    element:string
    weaponType:string

    constructor(name:string, element:string, weaponType:string) {
        this.name = name
        this.element = element
        this.weaponType = weaponType
    }
}