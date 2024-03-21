import { LightningElement } from 'lwc';

export default class Lwc_hooks extends LightningElement {
    constructor(){
        super();
        console.log('inside the Parent constructor');

    }
    connectedCallback(){
        console.log('inside the Parent connectedcallback');

    }
    renderedCallback(){
        console.log('inside Parent renderedcallback');
        
    }
}