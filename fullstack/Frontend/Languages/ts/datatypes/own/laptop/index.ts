class laptop{
    screen=1
    buttons=84
    mouse=1
    camera=1
    keyboard=1
    usbport=2
    
    withmouse(){
        return this.mouse
    }

}
let computer=new laptop()
console.log(computer.withmouse())
console.log(computer.buttons)