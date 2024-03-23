import { LightningElement } from 'lwc';

export default class Lwc_parent_programmticallu extends LightningElement {

    constructor()
    {
        super();
        this.template.addEventListener('programevent',this.handlevent);

    }
    handlevent(event){

        alert('These is parent lwc component and i heard the event from child'+ event.detail);

    }
    connectedCallback(){

    }
    renderedCallback(){

    }
}