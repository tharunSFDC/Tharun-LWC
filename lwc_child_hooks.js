import { LightningElement } from 'lwc';

export default class Lwc_child_hooks extends LightningElement {

    constructor(){
        super()
        console.log('Child cons');
    }
    connectedCallback(){
        console.log('child connected callback');
    }
    renderedCallback(){
        console.log('renderedcallback child');
    }

    handlefirevent(event)
    {

    }
}